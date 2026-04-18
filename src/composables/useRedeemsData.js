/**
 * Redeems Data Composable
 * Loads redeem data from CSV files on archive.zoskycube.com
 * CSV format: timestamp,steamid,username,cost,gamename
 * (gamename is last because it may contain commas)
 * 
 * Features:
 * - Loads all available monthly CSVs in parallel
 * - Hourly cache-busted refresh
 * - Computed stats (unique users, games, steamIds, totals)
 */

import { ref, computed, onUnmounted } from 'vue'

// Refresh configuration
const REFRESH_INTERVAL_MS = 60 * 60 * 1000 // 1 hour

// Shared state across all components using this composable
const allRedeems = ref([])
const isLoading = ref(false)
const isRefreshing = ref(false)
const error = ref(null)
const lastRefreshTime = ref(null)
let refreshTimer = null

/**
 * Generate all months from first redeems data (2025-12) up to now.
 * No more hardcoded list — automatically includes the current month.
 */
function getAvailableMonths() {
  const start = { year: 2025, month: 12 }
  const now = new Date()
  const end = { year: now.getFullYear(), month: now.getMonth() + 1 }
  const months = []
  let y = start.year
  let m = start.month
  while (y < end.year || (y === end.year && m <= end.month)) {
    months.push({ year: y, month: m })
    m++
    if (m > 12) { m = 1; y++ }
  }
  return months
}
const AVAILABLE_MONTHS = getAvailableMonths()

/**
 * Parse redeems CSV text into array of redeem objects
 * Format (legacy): timestamp,steamid,username,cost,gamename
 * Format (v2):     timestamp,steamid,username,cost,hadAtPurchase,activated,playtimeMinutes,gamename
 * gamename is always last because it may contain commas
 * Auto-detects format from header row
 */
function parseRedeemsCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []

  // Detect v2 format by checking header for activation columns
  const header = lines[0].toLowerCase()
  const isV2 = header.includes('hadatpurchase') || header.includes('activated')
  // v2 has 7 fixed columns before gamename, legacy has 4
  const fixedCols = isV2 ? 7 : 4

  // Skip header row
  return lines.slice(1).map(line => {
    const parts = line.split(',')
    if (parts.length < fixedCols + 1) return null

    const timestamp = parts[0] || ''
    const steamid = parts[1] || ''
    const username = (parts[2] || '').toLowerCase()
    const cost = parseInt(parts[3]) || 0

    let hadAtPurchase = null
    let activated = null
    let playtimeMinutes = null

    if (isV2) {
      hadAtPurchase = parts[4] !== '' ? parseInt(parts[4]) : null
      activated = parts[5] !== '' ? parseInt(parts[5]) : null
      playtimeMinutes = parts[6] !== '' ? parseInt(parts[6]) : null
    }

    // Everything after fixed columns is the game name (may contain commas)
    const gamename = parts.slice(fixedCols).join(',').trim()

    // Detect refund entries: gamename starts with 'Refund dedKey: '
    const isRefund = gamename.startsWith('Refund dedKey:')
    const cleanGamename = isRefund ? gamename.replace(/^Refund dedKey:\s*/, '') : gamename

    // Detect gift cards: export script writes 'GIFT_CARD' as steamid for actual gift cards
    // Empty steamid just means missing data, not a gift card
    const isGiftCard = steamid === 'GIFT_CARD'
    // Clean steamid for display (GIFT_CARD and empty are not valid Steam app IDs)
    const cleanSteamid = (steamid && steamid !== 'GIFT_CARD') ? steamid : ''

    return {
      timestamp,
      date: timestamp.split('T')[0] || '',
      steamid: cleanSteamid,
      username,
      cost,
      gamename: cleanGamename,
      isRefund,
      isGiftCard,
      hadAtPurchase,
      activated,
      playtimeMinutes,
      // Parsed timestamp for sorting
      ts: new Date(timestamp).getTime()
    }
  }).filter(r => r && r.username && r.timestamp)
}

/**
 * Load CSV file for a specific month from zoskyCube-archive repo
 * @param {number} year
 * @param {number} month
 * @param {boolean} bustCache - append timestamp for cache busting
 */
async function loadMonthCSV(year, month, bustCache = false) {
  const monthStr = String(month).padStart(2, '0')
  const isDev = import.meta.env.MODE === 'development'
  const fPreName = isDev ? '/zoskyCube-archive' : '//archive.zoskycube.com'
  let fileName = `${fPreName}/data/redeems-${year}-${monthStr}.csv`

  if (bustCache) {
    fileName += `?t=${Date.now()}`
  }

  try {
    const response = await fetch(fileName)
    if (!response.ok) {
      // 404 = month not available yet, not an error
      if (response.status === 404) return []
      console.warn(`⚠️ Redeems CSV not found: ${fileName}`)
      return []
    }

    const csvText = await response.text()
    const records = parseRedeemsCSV(csvText)
    console.log(`✅ Loaded ${records.length} redeems from ${fileName}${bustCache ? ' (cache-busted)' : ''}`)
    return records
  } catch (err) {
    console.warn(`⚠️ Error loading ${fileName}:`, err.message)
    return []
  }
}

/**
 * Load all available CSV files
 * @param {boolean} isRefresh - bust cache on refresh
 */
async function loadData(isRefresh = false) {
  if (isLoading.value || isRefreshing.value) return

  // Skip if already loaded and not a refresh
  if (!isRefresh && allRedeems.value.length > 0) {
    console.log('📦 Using cached redeems data')
    return
  }

  if (isRefresh) {
    isRefreshing.value = true
    console.log('🔄 Refreshing redeems CSV data...')
  } else {
    isLoading.value = true
  }
  error.value = null

  try {
    const csvPromises = AVAILABLE_MONTHS.map(({ year, month }) =>
      loadMonthCSV(year, month, isRefresh)
    )

    const allCsvData = await Promise.all(csvPromises)

    // Combine and sort newest first
    allRedeems.value = allCsvData
      .flat()
      .sort((a, b) => b.ts - a.ts)

    lastRefreshTime.value = Date.now()
    console.log(`🎁 Total redeems loaded: ${allRedeems.value.length}`)
  } catch (err) {
    console.error('❌ Error loading redeems:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
    isRefreshing.value = false
  }
}

/**
 * Start hourly refresh timer
 */
function startRefreshTimer() {
  if (refreshTimer) return
  const now = new Date()
  const msUntilNextHour = (60 - now.getMinutes()) * 60 * 1000 - now.getSeconds() * 1000 - now.getMilliseconds()

  setTimeout(() => {
    loadData(true)
    refreshTimer = setInterval(() => loadData(true), REFRESH_INTERVAL_MS)
  }, msUntilNextHour + 5000)
}

function stopRefreshTimer() {
  if (refreshTimer) {
    clearInterval(refreshTimer)
    refreshTimer = null
  }
}

export function useRedeemsData() {
  // --- Filter state ---
  const selectedGame = ref(null) // null = all games
  const selectedUser = ref(null) // null = all users

  // --- Computed stats ---
  const uniqueUsers = computed(() => {
    const set = new Set(allRedeems.value.map(r => r.username))
    return set.size
  })

  const uniqueGames = computed(() => {
    const set = new Set(allRedeems.value.map(r => r.gamename))
    return set.size
  })

  const uniqueSteamIds = computed(() => {
    const set = new Set(allRedeems.value.filter(r => !r.isGiftCard).map(r => r.steamid))
    return set.size
  })

  const giftCardCount = computed(() =>
    allRedeems.value.filter(r => r.isGiftCard).length
  )

  const claimCount = computed(() => allRedeems.value.length)

  const totalCubesSpent = computed(() =>
    allRedeems.value.reduce((sum, r) => sum + r.cost, 0)
  )

  // --- Dropdown options ---
  /** Games sorted by count descending, with label "gamename [count]" */
  const gameOptions = computed(() => {
    const counts = {}
    allRedeems.value.forEach(r => {
      counts[r.gamename] = (counts[r.gamename] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ value: name, label: `${name} [${count}]` }))
  })

  /** Users sorted by count descending, with label "username [count]" */
  const userOptions = computed(() => {
    const counts = {}
    allRedeems.value.forEach(r => {
      counts[r.username] = (counts[r.username] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ value: name, label: `${name} [${count}]` }))
  })

  // --- Filtered redeems ---
  const filteredRedeems = computed(() => {
    let result = allRedeems.value
    if (selectedGame.value) {
      result = result.filter(r => r.gamename === selectedGame.value)
    }
    if (selectedUser.value) {
      result = result.filter(r => r.username === selectedUser.value)
    }
    return result
  })

  // Whether any filter is active
  const isFiltered = computed(() => !!selectedGame.value || !!selectedUser.value)

  // --- Filtered stats (react to dropdown selections) ---
  const filteredClaimCount = computed(() => filteredRedeems.value.length)

  const filteredUniqueUsers = computed(() => {
    const set = new Set(filteredRedeems.value.map(r => r.username))
    return set.size
  })

  const filteredUniqueGames = computed(() => {
    const set = new Set(filteredRedeems.value.map(r => r.gamename))
    return set.size
  })

  const filteredUniqueSteamIds = computed(() => {
    const set = new Set(filteredRedeems.value.filter(r => !r.isGiftCard).map(r => r.steamid))
    return set.size
  })

  const filteredGiftCardCount = computed(() =>
    filteredRedeems.value.filter(r => r.isGiftCard).length
  )

  const filteredTotalCubesSpent = computed(() =>
    filteredRedeems.value.reduce((sum, r) => sum + r.cost, 0)
  )

  // Cleanup
  onUnmounted(() => {
    stopRefreshTimer()
  })

  return {
    // State
    allRedeems,
    filteredRedeems,
    isLoading,
    isRefreshing,
    error,
    lastRefreshTime,

    // Filters
    selectedGame,
    selectedUser,
    gameOptions,
    userOptions,

    // Stats (global totals)
    uniqueUsers,
    uniqueGames,
    uniqueSteamIds,
    giftCardCount,
    claimCount,
    totalCubesSpent,

    // Stats (filtered)
    isFiltered,
    filteredClaimCount,
    filteredUniqueUsers,
    filteredUniqueGames,
    filteredUniqueSteamIds,
    filteredGiftCardCount,
    filteredTotalCubesSpent,

    // Methods
    loadData,
    startRefreshTimer,
    stopRefreshTimer
  }
}
