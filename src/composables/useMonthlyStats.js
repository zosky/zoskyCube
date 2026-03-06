/**
 * Monthly Stats Composable (CSV-based) — Timeline App Version
 *
 * Replaces BOTH the Koa reporting API (MySQL) AND the getMonthlyStatsPublic
 * Cloud Function (Firestore) by parsing CSV files from zoskyCube-archive.
 *
 * Data sources:
 *   handouts-YYYY-MM.csv  → totals, top earners/spenders, game stats, subs, bits
 *   redeems-YYYY-MM.csv   → recent redeems with steamAppId
 *   badges-YYYY-MM.csv    → user badges with image URLs
 *   pixelPower/index.txt  → pixelPower image count + URLs (TAB-separated)
 *
 * Works in both overlay app and timeline app:
 *   Dev:  /zoskyCube-archive/data/...  (Vite proxy → archive.zoskycube.com)
 *   Prod: //archive.zoskycube.com/data/...  (direct GitHub Pages)
 *
 * Usage:
 *   import { useMonthlyStats } from '@/composables/useMonthlyStats'
 *   const { fetchMonthlyStats, stats, loading, error } = useMonthlyStats()
 *   await fetchMonthlyStats(4) // Month index 4 = Feb 2026
 */

import { ref } from 'vue'

// Genesis month: October 2025 (month index 0)
const GENESIS = new Date(2025, 9, 1) // Oct 2025

/**
 * Resolve archive base URL for current environment.
 * Both apps proxy /zoskyCube-archive → archive.zoskycube.com in dev.
 * In production, overlay uses absolute URL, timeline uses same domain.
 */
function getArchiveBase() {
  const isDev = typeof import.meta !== 'undefined' &&
    import.meta.env?.MODE === 'development'
  return isDev ? '/zoskyCube-archive' : '//archive.zoskycube.com'
}

// ─── CSV Parsers ──────────────────────────────────────────────────

function parseHandoutsCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  return lines.slice(1).map(line => {
    const vals = []
    let cur = ''
    let inQ = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (c === '"') { inQ = !inQ; continue }
      if (c === ',' && !inQ) { vals.push(cur); cur = ''; continue }
      cur += c
    }
    vals.push(cur)
    return {
      username: (vals[0] || '').toLowerCase(),
      amount: parseInt(vals[1]) || 0,
      reason: vals[2] || '',
      source: vals[3] || '',
      timestamp: parseInt(vals[4]) || 0,
    }
  }).filter(h => h.username && h.timestamp)
}

function parseRedeemsCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  return lines.slice(1).map(line => {
    const parts = line.split(',')
    if (parts.length < 5) return null
    const steamid = parts[1] || ''
    return {
      timestamp: parts[0] || '',
      steamAppId: (steamid && steamid !== 'GIFT_CARD') ? steamid : '',
      username: (parts[2] || '').toLowerCase(),
      amount: parseInt(parts[3]) || 0,
      gameName: parts.slice(4).join(',').trim(),
      isGiftCard: steamid === 'GIFT_CARD',
    }
  }).filter(Boolean)
}

function parseBadgesCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  return lines.slice(1).map(line => {
    // Handle quoted fields for imageUrl which may contain commas
    const vals = []
    let cur = ''
    let inQ = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (c === '"') { inQ = !inQ; continue }
      if (c === ',' && !inQ) { vals.push(cur); cur = ''; continue }
      cur += c
    }
    vals.push(cur)
    // username,badgeId,badgeName,badgeLevel,threshold,rank,filename,imageUrl,achievedAt
    return {
      username: (vals[0] || '').toLowerCase(),
      id: vals[1] || '',
      name: vals[2] || '',
      level: vals[3] || '',
      threshold: parseInt(vals[4]) || 0,
      rank: parseInt(vals[5]) || 0,
      filename: vals[6] || '',
      icon: vals[7] || '',
      imageUrl: vals[7] || '',
      achievedAt: vals[8] ? new Date(vals[8]).getTime() : 0,
    }
  }).filter(b => b.username && b.achievedAt)
}

/**
 * Parse PixelPower index.txt (TAB-separated, # comment lines)
 * Format: ID\tVersion\tDate\tYouTubeURL\tImageURL\tAudioURL\tContributors\tWords\tTotalzC\tTitle
 */
function parsePixelPowerIndex(text) {
  const lines = text.trim().split('\n')
  return lines
    .filter(l => l && !l.startsWith('#'))
    .map(line => {
      const parts = line.split('\t')
      if (parts.length < 5) return null
      return {
        id: parts[0],
        version: parts[1],
        date: parts[2],
        youtubeUrl: parts[3] === '-' ? '' : parts[3],
        url: parts[4] || '', // downloadURL / imageURL
        audioUrl: parts[5] === '-' ? '' : parts[5],
        contributors: parseInt(parts[6]) || 0,
        words: parseInt(parts[7]) || 0,
        totalzC: parseInt(parts[8]) || 0,
        title: parts[9] || '',
      }
    })
    .filter(Boolean)
}

/**
 * Parse store CSV from archive.
 * Format: steamAppId,gameName,cost,quantity,enabled,createdAt,
 *         firstSeen,lastSeen
 * gameName may contain commas — parse from edges inward.
 */
function parseStoreCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  return lines.slice(1).map(line => {
    const firstComma = line.indexOf(',')
    if (firstComma === -1) return null
    const steamAppId = line.substring(0, firstComma)
    const rest = line.substring(firstComma + 1)
    const segments = rest.split(',')
    if (segments.length < 7) return null
    const lastSeen = segments.pop()
    const firstSeen = segments.pop()
    const createdAt = segments.pop()
    const enabled = segments.pop()
    const quantity = segments.pop()
    const cost = segments.pop()
    const gameName = segments.join(',')
    return {
      steamAppId,
      gameName,
      cost: parseInt(cost) || 0,
      quantity: parseInt(quantity) || 0,
      enabled: enabled === 'true',
      createdAt,
      firstSeen,
      lastSeen,
    }
  }).filter(Boolean)
}

// ─── CSV Fetcher ──────────────────────────────────────────────────

async function fetchCSV(path, bustCache = false) {
  const base = getArchiveBase()
  let url = `${base}/${path}`
  if (bustCache) url += `?t=${Date.now()}`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

// ─── Aggregation (replaces MySQL views + Koa queries) ─────────────

function computeMonthlyStats(handouts) {
  const totalHandedOut = handouts
    .filter(h => h.amount > 0)
    .reduce((s, h) => s + h.amount, 0)
  const totalClaimed = handouts
    .filter(h => h.amount < 0)
    .reduce((s, h) => s + Math.abs(h.amount), 0)
  const uniqueUsers = new Set(handouts.map(h => h.username)).size
  const avgPerUser = uniqueUsers > 0
    ? Math.round(totalHandedOut / uniqueUsers) : 0

  // Top earners (amount > 0 grouped by user)
  const earnerMap = {}
  const spenderMap = {}
  handouts.forEach(h => {
    if (h.amount > 0) {
      earnerMap[h.username] = (earnerMap[h.username] || 0) + h.amount
    }
    if (h.amount < 0) {
      spenderMap[h.username] = (spenderMap[h.username] || 0) + Math.abs(h.amount)
    }
  })
  const topEarners = Object.entries(earnerMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([username, amount]) => ({ username, amount }))
  const topSpenders = Object.entries(spenderMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([username, amount]) => ({ username, amount }))

  // Game stats (replaces monthly_game_stats SQL view)
  const gs = {
    zoskyZappers: { pveWins: 0, pveLosses: 0, pvpWins: 0, pvpLosses: 0, cubesAwarded: 0 },
    pixelPower: { wordsSubmitted: 0, imagesCreated: 0, cubesAwarded: 0 },
    vodVote: {
      starts: 0, startsAmount: 0,
      votes: 0, votesAmount: 0,
      wins: 0, winsAmount: 0,
      cubesTotal: 0,
    },
    dailyDose: { count: 0, uniqueUsers: 0, totalAmount: 0 },
    vouchers: { count: 0, awarded: 0 },
    referrals: { count: 0, awarded: 0 },
    subs: 0,
    bits: 0,
  }

  const dailyDoseUsers = new Set()

  handouts.forEach(h => {
    const { source, reason, amount, username } = h

    // zoskyZappers (exclude zoskycube — house/AI awards)
    if (source === 'zoskyZappers' && username !== 'zoskycube') {
      if (reason === 'zoskyZappers PVE Victory') gs.zoskyZappers.pveWins++
      if (reason === 'zoskyZappers PVE Defeat') gs.zoskyZappers.pveLosses++
      if (reason === 'zoskyZappers PVP Victory') gs.zoskyZappers.pvpWins++
      if (reason === 'zoskyZappers PVP Defeat') gs.zoskyZappers.pvpLosses++
      if (amount > 0) gs.zoskyZappers.cubesAwarded += amount
    }

    // Pixel Power
    if (source === 'art') {
      if (!/^New image created/i.test(reason)) gs.pixelPower.wordsSubmitted++
      else gs.pixelPower.imagesCreated++
      if (amount > 0) gs.pixelPower.cubesAwarded += amount
    }

    // vodVote
    if (source === 'vodVote') {
      gs.vodVote.cubesTotal += Math.abs(amount)
      if (/^starting a new game/i.test(reason)) {
        gs.vodVote.starts++
        if (amount < 0) gs.vodVote.startsAmount += Math.abs(amount)
      }
      if (reason === 'Successful game vote' ||
          (/vote/i.test(reason) && amount < 0)) {
        gs.vodVote.votes++
        if (amount < 0) gs.vodVote.votesAmount += Math.abs(amount)
      }
      if (/winning @ vodVote/i.test(reason) ||
          (/win/i.test(reason) && amount > 0)) {
        gs.vodVote.wins++
        if (amount > 0) gs.vodVote.winsAmount += amount
      }
    }

    // dailyDose
    if (source === 'voucher' && reason === 'dailyDose') {
      gs.dailyDose.count++
      dailyDoseUsers.add(username)
      if (amount > 0) gs.dailyDose.totalAmount += amount
    }

    // Vouchers (non-dailyDose)
    if (source === 'voucher' && reason !== 'dailyDose') {
      gs.vouchers.count++
      if (amount > 0) gs.vouchers.awarded += amount
    }

    // Referrals
    if (source === 'referral') {
      gs.referrals.count++
      if (amount > 0) gs.referrals.awarded += amount
    }

    // Subs & Bits
    if (source === 'sub') gs.subs++
    if (source === 'bits') gs.bits++
  })

  gs.dailyDose.uniqueUsers = dailyDoseUsers.size

  // Subscriber + bit donor usernames (for avatar fetching by the component)
  const subscribers = [...new Set(
    handouts.filter(h => h.source === 'sub').map(h => h.username)
  )].sort().map(u => ({ username: u }))
  const bitDonors = [...new Set(
    handouts.filter(h => h.source === 'bits').map(h => h.username)
  )].sort().map(u => ({ username: u }))

  // PixelPower Top 12: per-user score + word count
  const ppMap = {}
  handouts.forEach(h => {
    if (h.source !== 'art') return
    if (!/^AI Art word:/i.test(h.reason)) return
    if (!ppMap[h.username]) ppMap[h.username] = { score: 0, words: 0 }
    ppMap[h.username].score += h.amount
    ppMap[h.username].words++
  })
  const ppLeaderboard = Object.entries(ppMap)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, 27)
    .map(([username, data]) => ({ username, score: data.score, words: data.words }))
  const ppTotalPlayers = Object.keys(ppMap).length

  // VodVote Top 26 Streaks: per-user max streak from "vote +N🔥" reasons
  const vvMap = {}
  handouts.forEach(h => {
    if (h.source !== 'vodVote') return
    const m = h.reason.match(/\+(\d+)🔥/)
    if (!m) return
    const streak = parseInt(m[1])
    if (!vvMap[h.username] || streak > vvMap[h.username]) {
      vvMap[h.username] = streak
    }
  })
  const vvLeaderboard = Object.entries(vvMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 26)
    .map(([username, streak]) => ({ username, streak }))

  return {
    totalHandedOut,
    totalClaimed,
    uniqueUsers,
    avgPerUser,
    topEarners,
    topSpenders,
    gameStats: gs,
    subscribers,
    bitDonors,
    ppLeaderboard,
    ppTotalPlayers,
    vvLeaderboard,
  }
}

// ─── Month helpers ────────────────────────────────────────────────

function monthIndexToYearMonth(monthIndex) {
  const d = new Date(GENESIS)
  d.setMonth(GENESIS.getMonth() + monthIndex)
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1, // 1-based
  }
}

function getCurrentMonthIndex() {
  const now = new Date()
  return (now.getFullYear() - GENESIS.getFullYear()) * 12 +
    (now.getMonth() - GENESIS.getMonth())
}

function getMonthName(monthIndex) {
  const d = new Date(GENESIS)
  d.setMonth(GENESIS.getMonth() + monthIndex)
  return d.toLocaleString('default', { month: 'long', year: 'numeric' })
}

// ─── Composable ───────────────────────────────────────────────────

export function useMonthlyStats() {
  const stats = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const rawHandouts = ref([])
  const rawRedeems = ref([])

  /**
   * Fetch and compute all monthly stats from archive CSVs.
   * Replaces: /koa/api/monthly/:monthIndex + /api/getMonthlyStatsPublic
   * @param {number} monthIndex - Month index (0 = Oct 2025)
   * @param {boolean} bustCache - Force fresh fetch
   */
  async function fetchMonthlyStats(monthIndex, bustCache = false) {
    loading.value = true
    error.value = null

    try {
      const { year, month } = monthIndexToYearMonth(monthIndex)
      const mm = String(month).padStart(2, '0')

      // Parallel fetch: handouts + redeems + badges + pixelPower + store
      const [handoutsText, redeemsText, badgesText, ppIndexText, storeText] =
        await Promise.all([
          fetchCSV(`data/handouts-${year}-${mm}.csv`, bustCache),
          fetchCSV(`data/redeems-${year}-${mm}.csv`, bustCache),
          fetchCSV(`data/badges-${year}-${mm}.csv`, bustCache),
          fetchCSV('pixelPower/index.txt', bustCache),
          fetchCSV(`data/store-${year}-${mm}.csv`, bustCache),
        ])

      // Parse
      const handouts = handoutsText ? parseHandoutsCSV(handoutsText) : []
      const redeems = redeemsText ? parseRedeemsCSV(redeemsText) : []
      const badges = badgesText ? parseBadgesCSV(badgesText) : []
      const storeItems = storeText ? parseStoreCSV(storeText) : []

      // Filter pixelPower index to this month
      let ppImages = []
      if (ppIndexText) {
        const allPP = parsePixelPowerIndex(ppIndexText)
        ppImages = allPP.filter(img => {
          if (!img.date) return false
          const d = new Date(img.date)
          return d.getFullYear() === year &&
            (d.getMonth() + 1) === month
        })
      }

      // Compute aggregations from handouts (replaces Koa MySQL)
      const computed = computeMonthlyStats(handouts)

      // Expose raw data for per-user filtering in the page
      rawHandouts.value = handouts
      rawRedeems.value = redeems

      // Override pixelPower image count from archive index
      // (more accurate than counting art handouts with 'New image created')
      computed.gameStats.pixelPower.imagesCreated = ppImages.length

      // Format redeems for RedeemsCollage component
      const recentRedeems = redeems
        .filter(r => r.steamAppId)
        .sort((a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 32)
        .map(r => ({
          username: r.username,
          timestamp: r.timestamp,
          amount: r.amount,
          metadata: {
            steamAppId: r.steamAppId,
            gameName: r.gameName,
          },
        }))

      // Format badges for BadgesSection component
      const sortedBadges = [...badges].sort((a, b) => a.achievedAt - b.achievedAt)

      // PixelPower images for the grid component
      const pixelPowerImages = ppImages.map(img => ({
        url: img.url,
        username: '', // index.txt doesn't track per-image usernames
        timestamp: new Date(img.date).getTime(),
        words: [],
      }))

      // Store CSV: filter to items CREATED this month only.
      // The CSV carries forward all items (never removes rows),
      // so we must filter by createdAt to get "new games this month".
      const monthPrefix = `${year}-${mm}`
      const thisMonthItems = storeItems.filter(item => {
        if (!item.createdAt) return false
        return item.createdAt.startsWith(monthPrefix)
      })

      const newGames = thisMonthItems.map(item => ({
        id: item.steamAppId,
        steamAppId: item.steamAppId,
        name: item.gameName,
        cost: item.cost,
        quantity: item.quantity,
        enabled: item.enabled,
        createdAt: item.createdAt,
      }))

      stats.value = {
        ...computed,
        gamesCount: recentRedeems.length,
        recentRedeems,
        allBadges: sortedBadges,
        totalBadges: sortedBadges.length,
        pixelPowerImages,
        newGames,
        storeGamesTotal: thisMonthItems.length,
      }
    } catch (err) {
      console.error('Failed to fetch monthly stats from archive:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    stats,
    loading,
    error,
    rawHandouts,
    rawRedeems,
    fetchMonthlyStats,
    getCurrentMonthIndex,
    getMonthName,
    monthIndexToYearMonth,
  }
}
