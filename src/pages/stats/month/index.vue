<route lang="yaml">
meta:
  title: Monthly Community Report
</route>

<script setup>
/**
 * Monthly Community Infographic — Timeline App Version
 *
 * Self-contained page that reads all data from zoskyCube-archive CSV files.
 * No Koa API, no Cloud Functions, no Firestore. Pure CSV parsing.
 *
 * Route: /stats/month (current) or /stats/month?m=5 (specific month)
 * User filter: "me" toggle auto-selects logged-in user, or pick any user
 */
import { useMonthlyStats } from '@/composables/useMonthlyStats'
import { useTwitchAvatars } from '@/composables/useTwitchAvatars'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const route = useRoute()
const { userProfile } = useAuth()

const {
  stats: csvStats,
  loading,
  error,
  rawHandouts,
  rawRedeems,
  fetchMonthlyStats,
  getCurrentMonthIndex,
  getMonthName,
} = useMonthlyStats()

const { fetchAvatar } = useTwitchAvatars()

// Month selection — initialised from query param or current month
const selectedMonth = ref(
  route.query.m !== undefined
    ? parseInt(route.query.m) || 0
    : getCurrentMonthIndex()
)

// Enriched stats with avatars
const stats = ref(null)
const avatars = ref({})

// ─── User Filter ────────────────────────────────────────────────
const isMe = ref(false)
const filterUser = ref('')

// Current logged-in username
const currentUsername = computed(() =>
  userProfile.value?.twitch?.username?.toLowerCase() || null)

// All unique usernames this month (for dropdown)
const allMonthUsers = computed(() => {
  if (!rawHandouts.value?.length) return []
  const set = new Set(rawHandouts.value.map(h => h.username))
  return [...set].sort()
})

// Toggle "me" — sets dropdown to current user
function toggleMe() {
  isMe.value = !isMe.value
  if (isMe.value && currentUsername.value) {
    filterUser.value = currentUsername.value
  } else if (!isMe.value) {
    filterUser.value = ''
  }
}

// When dropdown changes, uncheck "me" if it doesn't match
function onUserSelect(val) {
  filterUser.value = val
  isMe.value = val === currentUsername.value
}

// Per-user computed stats (used for "X of Y" annotations)
const userStats = computed(() => {
  const u = filterUser.value
  if (!u || !rawHandouts.value?.length) return null
  const userH = rawHandouts.value.filter(h => h.username === u)
  const earned = userH.filter(h => h.amount > 0)
    .reduce((s, h) => s + h.amount, 0)
  const claimed = userH.filter(h => h.amount < 0)
    .reduce((s, h) => s + Math.abs(h.amount), 0)

  // Per-game stats
  const zzH = userH.filter(h => h.source === 'zoskyZappers')
  const zzEarned = zzH.filter(h => h.amount > 0)
    .reduce((s, h) => s + h.amount, 0)

  const artH = userH.filter(h => h.source === 'art')
  const artWords = artH.filter(
    h => /^AI Art word:/i.test(h.reason)).length
  const artEarned = artH.filter(h => h.amount > 0)
    .reduce((s, h) => s + h.amount, 0)

  const vvH = userH.filter(h => h.source === 'vodVote')
  const vvEarned = vvH.filter(h => h.amount > 0)
    .reduce((s, h) => s + h.amount, 0)
  const vvVotes = vvH.filter(
    h => h.reason === 'Successful game vote'
      || (/vote/i.test(h.reason) && h.amount < 0)).length
  const vvWins = vvH.filter(
    h => /winning @ vodVote/i.test(h.reason)
      || (/win/i.test(h.reason) && h.amount > 0)).length
  // Max streak
  let vvStreak = 0
  vvH.forEach(h => {
    const m = h.reason.match(/\+(\d+)🔥/)
    if (m) vvStreak = Math.max(vvStreak, parseInt(m[1]))
  })

  const ddH = userH.filter(
    h => h.source === 'voucher' && h.reason === 'dailyDose')
  const ddCount = ddH.length

  const voucherH = userH.filter(
    h => h.source === 'voucher' && h.reason !== 'dailyDose')
  const refH = userH.filter(h => h.source === 'referral')
  const subH = userH.filter(h => h.source === 'sub')
  const bitsH = userH.filter(h => h.source === 'bits')

  // Redeems for this user
  const userRedeems = (rawRedeems.value || [])
    .filter(r => r.username === u)
  const userRedeemedAppIds = new Set(
    userRedeems.filter(r => r.steamAppId).map(r => r.steamAppId))

  // PP leaderboard rank
  const ppRank = (stats.value?.ppLeaderboard || [])
    .findIndex(p => p.username === u)
  const ppEntry = ppRank >= 0
    ? stats.value.ppLeaderboard[ppRank] : null

  // VV leaderboard rank
  const vvRank = (stats.value?.vvLeaderboard || [])
    .findIndex(p => p.username === u)

  // Top earners rank
  const earnerRank = (stats.value?.topEarners || [])
    .findIndex(p => p.username === u)

  // Top spenders rank
  const spenderRank = (stats.value?.topSpenders || [])
    .findIndex(p => p.username === u)

  return {
    earned, claimed,
    zzEarned,
    artWords, artEarned,
    vvEarned, vvVotes, vvWins, vvStreak,
    ddCount,
    vouchers: voucherH.length,
    referrals: refH.length,
    subs: subH.length,
    bits: bitsH.length,
    redeemCount: userRedeems.length,
    userRedeemedAppIds,
    ppRank, ppEntry, vvRank, earnerRank, spenderRank,
  }
})

// Set of all steamAppIds redeemed by anyone this month
const allRedeemedAppIds = computed(() => {
  const ids = new Set()
  ;(rawRedeems.value || []).forEach(r => {
    if (r.steamAppId) ids.add(r.steamAppId)
  })
  return ids
})

// Helper: does this section involve the filter user?
function userInList(list, key = 'username') {
  if (!filterUser.value || !list) return true
  return list.some(item => item[key] === filterUser.value)
}

// ─── Dark humor quotes ──────────────────────────────────────────
const quotes = [
  'Another month of digital hoarding complete!',
  "These pixels won't collect themselves...",
  'Your bank account is safe. Your time? Not so much.',
  'Achievement unlocked: Survived another month',
  'The grind continues. The grind is eternal.',
  "Remember when you had free time? Neither do we.",
  'Supporting local streamers, one zCube at a time',
  'This is fine. Everything is fine. 🔥☕',
  'Proof that you can, in fact, buy happiness (in zCubes)',
  'Your dedication is concerning. We love it.',
]
const randomQuote = computed(() =>
  quotes[Math.floor(Math.random() * quotes.length)])

async function loadAvatars(usernames) {
  for (const u of usernames) {
    if (u && !avatars.value[u]) {
      const url = await fetchAvatar(u)
      if (url) avatars.value[u] = url
    }
  }
}

function getSteamPoster(appId) {
  return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`
}

function handlePosterError(event) {
  const appId = event.target.dataset.appId
  if (event.target.src.includes('library_600x900')) {
    event.target.src = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`
  }
}

function formatN(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

// VodVote leaderboard pyramid layout
const vvPyramidCols = [
  { indices: [0], size: 'w-16 h-16', border: 'border-4', fontSize: 'text-xl', rankSize: 'text-sm', badgeSize: 'text-sm px-2 py-0.5' },
  { indices: [1, 2], size: 'w-12 h-12', border: 'border-3', fontSize: 'text-lg', rankSize: 'text-xs', badgeSize: 'text-xs px-1.5 py-0.5' },
  { indices: [3, 4, 5], size: 'w-10 h-10', border: 'border-2', fontSize: 'text-base', rankSize: 'text-[10px]', badgeSize: 'text-[10px] px-1 py-px' },
  { indices: [6, 7, 8, 9], size: 'w-9 h-9', border: 'border-2', fontSize: 'text-sm', rankSize: 'text-[10px]', badgeSize: 'text-[10px] px-1 py-px' },
  { indices: [10, 11, 12, 13], size: 'w-8 h-8', border: 'border-2', fontSize: 'text-sm', rankSize: 'text-[9px]', badgeSize: 'text-[9px] px-1 py-px' },
  { indices: [14, 15, 16, 17], size: 'w-8 h-8', border: 'border-2', fontSize: 'text-sm', rankSize: 'text-[9px]', badgeSize: 'text-[9px] px-1 py-px' },
  { indices: [18, 19, 20, 21], size: 'w-7 h-7', border: 'border', fontSize: 'text-xs', rankSize: 'text-[8px]', badgeSize: 'text-[8px] px-0.5 py-px' },
  { indices: [22, 23, 24, 25], size: 'w-7 h-7', border: 'border', fontSize: 'text-xs', rankSize: 'text-[8px]', badgeSize: 'text-[8px] px-0.5 py-px' },
]

function vvRankColor(idx) {
  if (idx === 0) return { text: 'text-yellow-400', border: 'border-yellow-400', bg: 'bg-yellow-900', glow: 'shadow-yellow-500/30' }
  if (idx === 1) return { text: 'text-gray-300', border: 'border-gray-400', bg: 'bg-gray-800', glow: 'shadow-gray-400/20' }
  if (idx === 2) return { text: 'text-orange-400', border: 'border-orange-600', bg: 'bg-orange-950', glow: 'shadow-orange-500/20' }
  if (idx <= 5) return { text: 'text-emerald-400', border: 'border-emerald-600', bg: 'bg-emerald-950', glow: '' }
  if (idx <= 9) return { text: 'text-cyan-400', border: 'border-cyan-700', bg: 'bg-cyan-950', glow: '' }
  if (idx <= 17) return { text: 'text-blue-400', border: 'border-blue-700', bg: 'bg-blue-950', glow: '' }
  return { text: 'text-slate-400', border: 'border-slate-600', bg: 'bg-slate-900', glow: '' }
}

async function fetchData() {
  const isCurrentMonth = selectedMonth.value === getCurrentMonthIndex()
  await fetchMonthlyStats(selectedMonth.value, isCurrentMonth)
  if (error.value || !csvStats.value) return

  stats.value = csvStats.value

  // Fetch avatars for top earners, spenders, subscribers, bit donors, redeems, leaderboards
  const allUsernames = [
    ...stats.value.topEarners.map(u => u.username),
    ...stats.value.topSpenders.map(u => u.username),
    ...stats.value.subscribers.map(u => u.username),
    ...stats.value.bitDonors.map(u => u.username),
    ...stats.value.recentRedeems.map(r => r.username),
    ...(stats.value.ppLeaderboard || []).map(u => u.username),
    ...(stats.value.vvLeaderboard || []).map(u => u.username),
  ]
  await loadAvatars([...new Set(allUsernames)])

  // Also fetch avatar for filter user if set
  if (filterUser.value) {
    await loadAvatars([filterUser.value])
  }
}

function changeMonth(delta) {
  const newMonth = selectedMonth.value + delta
  if (newMonth >= 0 && newMonth <= getCurrentMonthIndex()) {
    selectedMonth.value = newMonth
    router.push({ path: '/stats/month', query: { m: newMonth } })
    fetchData()
  }
}

// Watch query param changes (browser back/forward)
watch(() => route.query.m, (val) => {
  if (val !== undefined) {
    const m = parseInt(val) || 0
    if (m !== selectedMonth.value && m >= 0
      && m <= getCurrentMonthIndex()) {
      selectedMonth.value = m
      fetchData()
    }
  }
})

onMounted(() => fetchData())
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-8">
    <!-- Header -->
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold text-green-400 mb-4">Community Report</h1>
        <div class="flex items-center justify-center gap-4 mb-4">
          <button
            @click="changeMonth(-1)"
            :disabled="selectedMonth === 0"
            class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >← Previous</button>
          <h2 class="text-3xl font-semibold text-blue-300">
            {{ getMonthName(selectedMonth) }}
          </h2>
          <span class="text-gray-400 text-sm">(Month {{ selectedMonth }})</span>
          <button
            @click="changeMonth(1)"
            :disabled="selectedMonth === getCurrentMonthIndex()"
            class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >Next →</button>
        </div>
        <!-- User Filter Row -->
        <div class="flex items-center justify-center gap-3 mb-3">
          <button
            @click="toggleMe()"
            :class="[
              'px-4 py-1.5 rounded-full text-sm font-semibold transition-all border',
              isMe
                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-300 ring-2 ring-yellow-500/30'
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500'
            ]"
            :disabled="!currentUsername"
            :title="currentUsername ? 'Filter to your stats' : 'Log in to use this feature'"
          >
            {{ isMe ? '👤 Me' : '👤 Me' }}
          </button>
          <select
            :value="filterUser"
            @change="onUserSelect($event.target.value)"
            class="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 min-w-[180px]"
          >
            <option value="">All Users</option>
            <option
              v-for="u in allMonthUsers"
              :key="u"
              :value="u"
            >{{ u }}</option>
          </select>
          <div v-if="filterUser && avatars[filterUser]" class="flex items-center gap-2">
            <img :src="avatars[filterUser]" class="w-8 h-8 rounded-full border-2 border-cyan-500" :alt="filterUser" />
            <span class="text-cyan-300 text-sm font-mono">{{ filterUser }}</span>
          </div>
        </div>
        <p class="text-gray-400 italic">{{ randomQuote }}</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-20">
        <div class="text-4xl animate-pulse">Loading...</div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-20 text-red-400">
        <div class="text-2xl">Failed to load data</div>
        <div class="text-sm mt-2">{{ error }}</div>
      </div>

      <!-- Content -->
      <div v-else-if="stats">
        <!-- Top 3 Large Stat Cards -->
        <div class="grid grid-cols-3 gap-6 mb-8">
          <div class="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-lg shadow-xl hover:-translate-y-1 transition-transform">
            <div class="text-6xl font-bold mb-2">
              <Points currency="zC" :n="stats.totalHandedOut" :relative="true" />
            </div>
            <div class="text-xl opacity-90">Total Handed Out</div>
            <div class="text-sm opacity-75 mt-2">{{ formatN(stats.totalHandedOut) }} zCubes distributed</div>
            <div v-if="userStats" class="mt-3 pt-2 border-t border-green-400/30 text-sm">
              <span class="text-yellow-300 font-bold"><Points currency="zC" :n="userStats.earned" :relative="true" /></span>
              <span class="opacity-60"> of {{ formatN(stats.totalHandedOut) }}</span>
              <span v-if="userStats.earnerRank >= 0" class="ml-2 opacity-60">(#{{ userStats.earnerRank + 1 }})</span>
            </div>
          </div>
          <div class="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg shadow-xl hover:-translate-y-1 transition-transform">
            <div class="text-6xl font-bold mb-2">
              <Points currency="zC" :n="stats.totalClaimed" :relative="true" />
            </div>
            <div class="text-xl opacity-90">Total Claimed</div>
            <div class="text-sm opacity-75 mt-2">{{ formatN(stats.totalClaimed) }} zCubes redeemed</div>
            <div v-if="userStats" class="mt-3 pt-2 border-t border-red-400/30 text-sm">
              <span class="text-yellow-300 font-bold"><Points currency="zC" :n="userStats.claimed" :relative="true" /></span>
              <span class="opacity-60"> of {{ formatN(stats.totalClaimed) }}</span>
              <span v-if="userStats.spenderRank >= 0" class="ml-2 opacity-60">(#{{ userStats.spenderRank + 1 }})</span>
            </div>
          </div>
          <div class="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-xl hover:-translate-y-1 transition-transform">
            <div class="text-6xl font-bold mb-2 flex items-center justify-end gap-3">
              <span>{{ stats.gamesCount }}</span>
              <span>🎮</span>
            </div>
            <div class="text-xl opacity-90">Games Claimed</div>
            <div class="text-sm opacity-75 mt-2">{{ stats.gamesCount }} of {{ stats.storeGamesTotal || stats.gamesCount }} games claimed</div>
            <div v-if="userStats" class="mt-3 pt-2 border-t border-blue-400/30 text-sm">
              <span class="text-yellow-300 font-bold">{{ userStats.redeemCount }}</span>
              <span class="opacity-60"> of {{ stats.gamesCount }} redeems</span>
            </div>
          </div>
        </div>

        <!-- Combined Stats Row -->
        <div class="flex flex-wrap gap-6 mb-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="flex items-center justify-end gap-2">
              <span class="text-4xl font-bold text-cyan-400">{{ stats.uniqueUsers }}</span>
              <span class="text-3xl">👥</span>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Active Users</div>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="text-4xl font-bold text-orange-400 text-right">
              <Points currency="zC" :n="Math.round(stats.avgPerUser)" :relative="true" />
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Avg Per User</div>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="text-4xl font-bold text-lime-400 text-right">
              {{ stats.totalHandedOut > 0 ? Math.round((stats.totalClaimed / stats.totalHandedOut) * 100) : 0 }}% ⚖️
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Redemption Rate</div>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="flex items-center justify-end gap-2">
              <span class="text-4xl font-bold text-pink-400">{{ stats.newGames?.length || 0 }}</span>
              <span class="text-3xl">🆕</span>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">New Games Added</div>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="text-4xl font-bold text-lime-400 text-right">
              {{ stats.storeGamesTotal > 0 ? Math.round((stats.gamesCount / stats.storeGamesTotal) * 100) : 0 }}% ⚖️
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Games Claimed Rate</div>
          </div>
          <div v-if="stats.gameStats.vouchers.count > 0" class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]" :class="{ 'opacity-30': filterUser && !userStats?.vouchers }">
            <div class="flex items-center justify-end gap-2">
              <span class="text-4xl font-bold text-green-400">{{ stats.gameStats.vouchers.count }}</span>
              <span class="text-3xl">🎫</span>
              <span class="text-2xl font-bold text-green-400">
                <Points currency="zC" :n="stats.gameStats.vouchers.awarded" :relative="true" />
              </span>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Vouchers Redeemed</div>
            <div v-if="userStats?.vouchers" class="text-xs text-yellow-300 text-right mt-1">{{ userStats.vouchers }} of {{ stats.gameStats.vouchers.count }}</div>
          </div>
          <div v-if="stats.gameStats.referrals.count > 0" class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]" :class="{ 'opacity-30': filterUser && !userStats?.referrals }">
            <div class="flex items-center justify-end gap-2">
              <span class="text-4xl font-bold text-cyan-400">{{ stats.gameStats.referrals.count }}</span>
              <span class="text-3xl">🤝</span>
              <span class="text-2xl font-bold text-cyan-400">
                <Points currency="zC" :n="stats.gameStats.referrals.awarded" :relative="true" />
              </span>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Referral Bonuses</div>
            <div v-if="userStats?.referrals" class="text-xs text-yellow-300 text-right mt-1">{{ userStats.referrals }} of {{ stats.gameStats.referrals.count }}</div>
          </div>
          <div v-if="stats.gameStats.subs > 0" class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]" :class="{ 'opacity-30': filterUser && !userStats?.subs }">
            <div class="flex items-center justify-end gap-2">
              <div class="flex -space-x-2">
                <img
                  v-for="sub in stats.subscribers"
                  :key="sub.username"
                  :src="avatars[sub.username] || '/placeholder-avatar.svg'"
                  :alt="sub.username"
                  :title="sub.username"
                  class="w-8 h-8 rounded-full border-2 border-purple-400 bg-gray-900"
                  loading="lazy"
                />
              </div>
              <span class="text-4xl font-bold text-purple-400">{{ stats.gameStats.subs }}</span>
              <svg class="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">ttvSubs</div>
          </div>
          <div v-if="stats.gameStats.bits > 0" class="bg-gray-800 p-6 rounded-lg shadow-xl flex-1 min-w-[200px]">
            <div class="flex items-center justify-end gap-2">
              <div class="flex -space-x-2">
                <img
                  v-for="donor in stats.bitDonors"
                  :key="donor.username"
                  :src="avatars[donor.username] || '/placeholder-avatar.svg'"
                  :alt="donor.username"
                  :title="donor.username"
                  class="w-8 h-8 rounded-full border-2 border-blue-400 bg-gray-900"
                  loading="lazy"
                />
              </div>
              <span class="text-4xl font-bold text-blue-400">{{ stats.gameStats.bits }}</span>
              <span class="text-3xl">💎</span>
            </div>
            <div class="text-sm text-gray-400 mt-2 text-right">Bit Cheers</div>
          </div>
        </div>

        <!-- Game Stats Grid -->
        <div class="grid grid-cols-4 gap-6 mb-8">
          <!-- zoskyZappers -->
          <div class="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && !userStats?.zzEarned }">
            <div class="text-center text-2xl mb-4">⚡ zoskyZappers</div>
            <div class="space-y-2 text-purple-100">
              <div class="flex justify-end items-center gap-2 text-sm">
                <span class="opacity-80">PvP:</span>
                <span class="font-bold">{{ stats.gameStats.zoskyZappers.pvpWins || 0 }}</span>🏆
                <span class="font-bold">{{ stats.gameStats.zoskyZappers.pvpLosses || 0 }}</span>💀
              </div>
              <div class="flex justify-end items-center gap-2 text-sm">
                <span class="opacity-80">PvE:</span>
                <span class="font-bold">{{ stats.gameStats.zoskyZappers.pveWins || 0 }}</span>🏆
                <span class="font-bold">{{ stats.gameStats.zoskyZappers.pveLosses || 0 }}</span>💀
              </div>
              <div class="flex justify-end text-lg font-bold text-green-400 border-t border-purple-500 pt-2">
                <Points currency="zC" :n="stats.gameStats.zoskyZappers.cubesAwarded" :relative="true" />
              </div>
              <div v-if="userStats?.zzEarned" class="text-xs text-yellow-300 text-right"><Points currency="zC" :n="userStats.zzEarned" :relative="true" /> of {{ formatN(stats.gameStats.zoskyZappers.cubesAwarded) }}</div>
            </div>
          </div>

          <!-- Pixel Power -->
          <div class="bg-gradient-to-br from-pink-900 to-pink-700 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && !userStats?.artWords }">
            <div class="text-center text-2xl mb-4">🎨 Pixel Power</div>
            <div class="space-y-1.5 text-pink-100">
              <div class="flex justify-end text-sm opacity-80">Words: {{ stats.gameStats.pixelPower.wordsSubmitted }}</div>
              <div class="flex justify-end text-sm opacity-80">Images: {{ stats.gameStats.pixelPower.imagesCreated || 0 }}</div>
              <div class="flex justify-end text-lg font-bold text-green-400 border-t border-pink-500 pt-1.5 mt-2">
                <Points currency="zC" :n="stats.gameStats.pixelPower.cubesAwarded" :relative="true" />
              </div>
              <div v-if="userStats?.artWords" class="text-xs text-yellow-300 text-right">{{ userStats.artWords }} words · <Points currency="zC" :n="userStats.artEarned" :relative="true" /></div>
            </div>
          </div>

          <!-- VOD Vote -->
          <div class="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && !userStats?.vvVotes }">
            <div class="text-center text-2xl mb-4">📺 VOD Vote</div>
            <div class="space-y-1.5 text-blue-100">
              <div class="flex justify-end items-center gap-2 text-sm opacity-80">
                <Points currency="zC" :n="(stats.gameStats.vodVote.starts || 0) * 133" :relative="true" />
                📦 {{ stats.gameStats.vodVote.starts || 0 }}
              </div>
              <div class="flex justify-end items-center gap-2 text-sm opacity-80">
                <Points currency="zC" :n="(stats.gameStats.vodVote.votes || 0) * 100" :relative="true" />
                🗳️ {{ stats.gameStats.vodVote.votes || 0 }}
              </div>
              <div class="flex justify-end items-center gap-2 text-sm opacity-80">
                <Points currency="zC" :n="stats.gameStats.vodVote.winsAmount || 0" :relative="true" />
                🏆 {{ stats.gameStats.vodVote.wins || 0 }}
              </div>
              <div class="flex justify-end text-lg font-bold text-green-400 border-t border-blue-500 pt-1.5 mt-2">
                <Points currency="zC" :n="stats.gameStats.vodVote.cubesTotal" :relative="true" />
              </div>
              <div v-if="userStats?.vvVotes" class="text-xs text-yellow-300 text-right">{{ userStats.vvVotes }} votes · {{ userStats.vvWins }} wins · 🔥{{ userStats.vvStreak }}</div>
            </div>
          </div>

          <!-- Daily Dose -->
          <div class="bg-gradient-to-br from-yellow-900 to-yellow-700 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && !userStats?.ddCount }">
            <div class="text-center text-2xl mb-4">💊 Daily Dose</div>
            <div class="text-yellow-100 text-right">
              <div class="text-sm opacity-80">People: <span class="font-bold">{{ stats.gameStats.dailyDose.uniqueUsers }}</span></div>
              <div class="flex justify-end text-lg font-bold text-green-400 border-t border-yellow-500 pt-1.5 mt-2">
                <Points currency="zC" :n="stats.gameStats.dailyDose.count * 1000" :relative="true" />
              </div>
              <div v-if="userStats?.ddCount" class="text-xs text-yellow-300">{{ userStats.ddCount }} of {{ stats.gameStats.dailyDose.count }} doses</div>
            </div>
          </div>
        </div>

        <!-- Game Leaderboards: PixelPower + VodVote -->
        <div class="grid grid-cols-2 gap-6 mb-8">
          <!-- PixelPower Leaderboard -->
          <div class="bg-gradient-to-br from-[#0a0a12] via-[#121225] to-[#0d1117] rounded-xl p-5 shadow-2xl border border-pink-900/40 relative overflow-hidden transition-opacity" :class="{ 'opacity-30': filterUser && userStats?.ppRank < 0 }">
            <div v-if="userStats?.ppRank >= 0" class="absolute top-3 right-3 z-20 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-2 py-0.5 text-[10px] text-yellow-300 font-bold">#{{ userStats.ppRank + 1 }}</div>
            <div class="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,213,0.03)_2px,rgba(0,255,213,0.03)_4px)]" />
            <div class="flex items-center justify-between mb-4 relative z-10">
              <div class="flex items-center gap-3">
                <span class="text-2xl">🎨</span>
                <div>
                  <h3 class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 tracking-wider">PixelPower | PowerPlayers</h3>
                  <div class="text-xs text-cyan-400 font-mono">{{ getMonthName(selectedMonth) }}</div>
                </div>
              </div>
              <div class="text-right space-y-0.5">
                <div class="text-sm font-bold text-[#94bb63]">
                  <Points currency="zC" :n="stats.gameStats.pixelPower.cubesAwarded" :relative="true" />
                </div>
                <div class="text-[10px] text-[#94bb63]/80 font-mono">
                  {{ stats.gameStats.pixelPower.imagesCreated }} renders • {{ stats.ppTotalPlayers || 0 }} players • {{ stats.gameStats.pixelPower.wordsSubmitted }} words
                </div>
              </div>
            </div>
            <!-- Top 3 hero cards -->
            <div v-if="stats.ppLeaderboard?.length > 0" class="grid grid-cols-6 gap-2 mb-2 relative z-10">
              <template v-for="idx in [0, 1, 2]" :key="idx">
                <div
                  v-if="stats.ppLeaderboard[idx]"
                  class="col-span-2 flex items-center gap-3 px-3 py-2 rounded-lg"
                  :class="idx === 0 ? 'bg-yellow-500/10 ring-1 ring-yellow-500/30' : idx === 1 ? 'bg-gray-500/10 ring-1 ring-gray-400/30' : 'bg-orange-500/10 ring-1 ring-orange-600/30'"
                >
                  <div class="relative flex-shrink-0">
                    <div
                      class="rounded-full border-2 overflow-hidden bg-gray-800 shadow-lg"
                      :class="[idx === 0 ? 'w-14 h-14 border-yellow-400' : idx === 1 ? 'w-12 h-12 border-gray-400' : 'w-12 h-12 border-orange-600']"
                    >
                      <img v-if="avatars[stats.ppLeaderboard[idx].username]" :src="avatars[stats.ppLeaderboard[idx].username]" class="w-full h-full object-cover" loading="lazy" />
                      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 text-lg">{{ stats.ppLeaderboard[idx].username.charAt(0).toUpperCase() }}</div>
                    </div>
                    <div
                      class="absolute -top-1 -left-1 w-5 h-5 text-[9px] font-bold rounded-full flex items-center justify-center bg-gray-900/90 border"
                      :class="idx === 0 ? 'text-yellow-400 border-yellow-400' : idx === 1 ? 'text-gray-300 border-gray-400' : 'text-orange-400 border-orange-600'"
                    >{{ idx + 1 }}</div>
                  </div>
                  <div class="flex flex-col min-w-0">
                    <div class="text-sm font-bold text-[#c1695b] leading-tight">
                      <Points currency="zC" :n="stats.ppLeaderboard[idx].score" :relative="true" />
                    </div>
                    <div class="text-xs text-[#c1695b]/70 font-mono leading-tight">{{ stats.ppLeaderboard[idx].words }} words</div>
                  </div>
                </div>
              </template>
            </div>
            <!-- Places 4+ compact grid -->
            <div v-if="stats.ppLeaderboard?.length > 3" class="grid grid-cols-6 gap-1.5 relative z-10">
              <template v-for="idx in Array.from({length: Math.min(stats.ppLeaderboard.length - 3, 24)}, (_, i) => i + 3)" :key="idx">
                <div
                  v-if="stats.ppLeaderboard[idx]"
                  class="flex items-center gap-1.5 px-1.5 py-1 rounded-lg bg-cyan-900/20 hover:scale-[1.03] transition-all"
                >
                  <div class="relative flex-shrink-0">
                    <div class="w-8 h-8 rounded-full border-2 border-cyan-700 overflow-hidden bg-gray-800 shadow">
                      <img v-if="avatars[stats.ppLeaderboard[idx].username]" :src="avatars[stats.ppLeaderboard[idx].username]" class="w-full h-full object-cover" loading="lazy" />
                      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 text-xs">{{ stats.ppLeaderboard[idx].username.charAt(0).toUpperCase() }}</div>
                    </div>
                    <div class="absolute -top-1 -left-1 w-4 h-4 text-[8px] font-bold rounded-full flex items-center justify-center bg-gray-900/90 border text-cyan-300 border-cyan-700">{{ idx + 1 }}</div>
                  </div>
                  <div class="flex flex-col min-w-0">
                    <div class="text-[10px] font-bold text-[#c1695b] leading-tight">
                      <Points currency="zC" :n="stats.ppLeaderboard[idx].score" :relative="true" />
                    </div>
                    <div class="text-[9px] text-[#c1695b]/70 font-mono leading-tight">{{ stats.ppLeaderboard[idx].words }}w</div>
                  </div>
                </div>
              </template>
            </div>
            <div v-if="!stats.ppLeaderboard?.length" class="text-center text-gray-500 py-8 relative z-10">No PixelPower data this month</div>
          </div>

          <!-- VodVote Leaderboard -->
          <div class="bg-gradient-to-br from-[#0a0a12] via-[#0d1117] to-[#121225] rounded-xl p-5 shadow-2xl border border-blue-900/40 relative overflow-hidden transition-opacity" :class="{ 'opacity-30': filterUser && userStats?.vvRank < 0 }">
            <div v-if="userStats?.vvRank >= 0" class="absolute top-3 right-3 z-20 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-2 py-0.5 text-[10px] text-yellow-300 font-bold">#{{ userStats.vvRank + 1 }} · 🔥{{ userStats.vvStreak }}</div>
            <div class="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,213,0.03)_2px,rgba(0,255,213,0.03)_4px)]" />
            <div class="text-center mb-4 relative z-10">
              <div class="flex items-center justify-center gap-2">
                <span class="text-2xl">🔥</span>
                <h3 class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 tracking-wider">vodVote: Velocity Vector</h3>
                <span class="text-2xl">🔥</span>
              </div>
              <div class="inline-block mt-1 px-3 py-0.5 bg-gradient-to-r from-pink-900/50 to-blue-900/50 rounded text-[10px] text-cyan-300 font-mono border border-cyan-800/40">
                TOP 26 STREAKS — {{ getMonthName(selectedMonth).toUpperCase() }}
              </div>
            </div>
            <!-- Sideways Pyramid -->
            <div v-if="stats.vvLeaderboard?.length > 0" class="flex items-center justify-center gap-2 relative z-10 min-h-[200px]">
              <template v-for="(col, colIdx) in vvPyramidCols" :key="colIdx">
                <div class="flex flex-col items-center justify-center gap-2">
                  <template v-for="idx in col.indices" :key="idx">
                    <div v-if="stats.vvLeaderboard[idx]" class="flex flex-col items-center hover:scale-110 transition-all">
                      <div :class="[col.rankSize, 'font-bold mb-0.5', vvRankColor(idx).text]">
                        {{ idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : (idx + 1) + 'th' }}
                      </div>
                      <div class="relative">
                        <div
                          class="rounded-full overflow-hidden bg-gray-800 shadow-lg"
                          :class="[col.size, col.border, vvRankColor(idx).border, vvRankColor(idx).glow ? 'shadow-lg ' + vvRankColor(idx).glow : '']"
                        >
                          <img v-if="avatars[stats.vvLeaderboard[idx].username]" :src="avatars[stats.vvLeaderboard[idx].username]" class="w-full h-full object-cover" loading="lazy" />
                          <div v-else class="w-full h-full flex items-center justify-center text-gray-500" :class="col.fontSize">{{ stats.vvLeaderboard[idx].username.charAt(0).toUpperCase() }}</div>
                        </div>
                        <div
                          class="absolute -bottom-1 -right-1 rounded-md font-bold shadow-lg border"
                          :class="[col.badgeSize, vvRankColor(idx).bg, vvRankColor(idx).border, vvRankColor(idx).text]"
                        >{{ stats.vvLeaderboard[idx].streak }}</div>
                      </div>
                    </div>
                    <div v-else class="flex flex-col items-center opacity-20">
                      <div :class="[col.rankSize, 'text-gray-600 mb-0.5']">{{ idx === 0 ? '1st' : idx === 1 ? '2nd' : idx === 2 ? '3rd' : (idx + 1) + 'th' }}</div>
                      <div class="rounded-full bg-gray-900 border-2 border-gray-800" :class="col.size" />
                    </div>
                  </template>
                </div>
              </template>
            </div>
            <div v-else class="text-center text-gray-500 py-8 relative z-10">No VodVote streak data this month</div>
          </div>
        </div>

        <!-- Badges Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-xl mb-8 transition-opacity" :class="{ 'opacity-30': filterUser && !stats.allBadges.some(b => b.username === filterUser) }">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-purple-400">Badges Earned This Month</h3>
            <div class="text-4xl font-bold text-purple-300">{{ stats.totalBadges }}</div>
          </div>
          <div v-if="stats.totalBadges > 0" class="flex flex-wrap gap-4 justify-center">
            <img
              v-for="(badge, idx) in stats.allBadges"
              :key="idx"
              :src="badge.icon"
              :alt="badge.filename"
              class="h-64 w-auto -mx-8 -mb-10 -mt-20 object-contain hover:scale-110 transition-all duration-200 shadow-lg"
              :class="{ 'opacity-30': filterUser && badge.username !== filterUser, 'ring-4 ring-yellow-400 rounded-lg': filterUser && badge.username === filterUser }"
              :title="`${badge.username}: ${badge.filename}`"
            />
          </div>
          <div v-else class="text-center text-gray-400">No badges earned this month.</div>
        </div>

        <!-- New Games (full width, 8 across) -->
        <div v-if="stats.newGames && stats.newGames.length > 0" class="mb-8 bg-gray-800 p-6 rounded-lg shadow-xl">
          <h3 class="text-2xl font-bold mb-4 text-yellow-400">New Games</h3>
          <div class="grid grid-cols-8 gap-3">
            <div
              v-for="game in stats.newGames"
              :key="game.id || game.steamAppId"
              class="relative aspect-[460/215] overflow-hidden rounded-lg border-2 transition-all"
              :class="[
                !filterUser
                  ? (!game.enabled || (game.quantity !== undefined && game.quantity <= 0)
                      ? 'border-gray-700 opacity-40'
                      : 'border-yellow-500 hover:border-yellow-400 hover:scale-105')
                  : (userStats?.userRedeemedAppIds?.has(game.steamAppId)
                      ? 'ring-2 ring-yellow-400 border-yellow-400 hover:scale-105'
                      : allRedeemedAppIds.has(game.steamAppId)
                        ? 'border-gray-700 opacity-30'
                        : 'border-gray-600 opacity-70')
              ]"
              :title="game.name"
            >
              <img
                v-if="game.steamAppId && game.steamAppId !== 'GIFT_CARD'"
                :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.steamAppId}/header.jpg`"
                :alt="game.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gray-900">
                <span class="text-gray-500 text-sm text-center px-2">{{ game.name }}</span>
              </div>
              <!-- Sold-out / redeemed overlay badge -->
              <div
                v-if="allRedeemedAppIds.has(game.steamAppId)"
                class="absolute top-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-bold shadow"
                :class="filterUser && userStats?.userRedeemedAppIds?.has(game.steamAppId)
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-900/80 text-gray-400'"
              >
                {{ filterUser && userStats?.userRedeemedAppIds?.has(game.steamAppId) ? '🎮 YOURS' : 'CLAIMED' }}
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Redeems (full width, 6 across) -->
        <div v-if="stats.recentRedeems.length > 0" class="mb-8 bg-gray-800 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && !userStats?.redeemCount }">
          <h3 class="text-2xl font-bold mb-4 text-purple-400">Recent Redeems</h3>
          <div class="grid grid-cols-6 gap-3">
            <div
              v-for="(redeem, idx) in stats.recentRedeems"
              :key="idx"
              class="aspect-[2/3] overflow-hidden rounded-lg border-2 transition-all hover:scale-105 shadow-lg relative"
              :class="[
                filterUser && redeem.username !== filterUser ? 'border-gray-700 opacity-30' : 'border-gray-700 hover:border-purple-400',
                filterUser && redeem.username === filterUser ? 'ring-2 ring-yellow-400 border-yellow-400' : ''
              ]"
              :title="`${redeem.username} - ${redeem.metadata?.gameName || 'Unknown'}`"
            >
              <img
                :src="getSteamPoster(redeem.metadata.steamAppId)"
                :alt="redeem.metadata?.gameName || 'Game'"
                :data-app-id="redeem.metadata.steamAppId"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="handlePosterError"
              />
              <div
                v-if="avatars[redeem.username]"
                class="absolute bottom-2 right-2"
              >
                <img
                  :src="avatars[redeem.username]"
                  :alt="redeem.username"
                  :title="redeem.username"
                  class="w-10 h-10 rounded-full border-2 border-purple-400 shadow-lg"
                />
              </div>
              <div v-else class="absolute bottom-2 right-2 px-2 py-1 bg-purple-600/90 rounded border border-purple-400 shadow-lg">
                <span class="text-xs font-mono font-bold">{{ redeem.username }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Earners & Spenders Podiums -->
        <div class="grid grid-cols-2 gap-6 mb-8">
          <!-- Top Earners -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && userStats?.earnerRank < 0 }">
            <h3 class="text-2xl font-bold mb-6 text-green-400 text-center">Top Earners</h3>
            <div class="flex justify-center items-end gap-8 mb-8">
              <!-- 2nd -->
              <div v-if="stats.topEarners[1]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topEarners[1].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topEarners[1].username] || '/placeholder-avatar.svg'" :alt="stats.topEarners[1].username" class="w-24 h-24 rounded-full border-4 shadow-lg" :class="filterUser && stats.topEarners[1].username === filterUser ? 'border-yellow-400 ring-4 ring-yellow-400/50' : 'border-gray-400'" />
                  <div class="absolute -bottom-2 -right-2 text-4xl">🥈</div>
                </div>
                <div class="font-bold text-lg mt-3 text-gray-300">{{ stats.topEarners[1].username }}</div>
                <div class="text-green-400 font-semibold mt-1"><Points currency="zC" :n="stats.topEarners[1].amount" :relative="true" /></div>
              </div>
              <!-- 1st -->
              <div v-if="stats.topEarners[0]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topEarners[0].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topEarners[0].username] || '/placeholder-avatar.svg'" :alt="stats.topEarners[0].username" class="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl" :class="{ 'ring-4 ring-yellow-400/50': filterUser && stats.topEarners[0].username === filterUser }" />
                  <div class="absolute -bottom-3 -right-3 text-5xl">🥇</div>
                </div>
                <div class="font-bold text-xl mt-3 text-yellow-300">{{ stats.topEarners[0].username }}</div>
                <div class="text-yellow-400 font-bold mt-1 text-lg"><Points currency="zC" :n="stats.topEarners[0].amount" :relative="true" /></div>
              </div>
              <!-- 3rd -->
              <div v-if="stats.topEarners[2]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topEarners[2].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topEarners[2].username] || '/placeholder-avatar.svg'" :alt="stats.topEarners[2].username" class="w-24 h-24 rounded-full border-4 shadow-lg" :class="filterUser && stats.topEarners[2].username === filterUser ? 'border-yellow-400 ring-4 ring-yellow-400/50' : 'border-orange-700'" />
                  <div class="absolute -bottom-2 -right-2 text-4xl">🥉</div>
                </div>
                <div class="font-bold text-lg mt-3 text-orange-400">{{ stats.topEarners[2].username }}</div>
                <div class="text-green-400 font-semibold mt-1"><Points currency="zC" :n="stats.topEarners[2].amount" :relative="true" /></div>
              </div>
            </div>
            <div v-if="stats.topEarners.length > 3" class="flex flex-wrap gap-4 justify-center">
              <div v-for="(user, idx) in stats.topEarners.slice(3)" :key="user.username" class="flex items-center gap-3 px-4 py-2 rounded-lg transition-all" :class="filterUser && user.username !== filterUser ? 'bg-gray-700 opacity-30' : filterUser && user.username === filterUser ? 'bg-yellow-500/20 ring-1 ring-yellow-400' : 'bg-gray-700 hover:bg-gray-600'">
                <span class="text-gray-400 font-mono text-lg">{{ idx + 4 }}.</span>
                <img :src="avatars[user.username] || '/placeholder-avatar.svg'" :alt="user.username" class="w-10 h-10 rounded-full border-2 border-gray-500" />
                <span class="font-semibold">{{ user.username }}</span>
                <span class="text-green-400 font-bold ml-2"><Points currency="zC" :n="user.amount" :relative="true" /></span>
              </div>
            </div>
          </div>

          <!-- Top Spenders -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-xl transition-opacity" :class="{ 'opacity-30': filterUser && userStats?.spenderRank < 0 }">
            <h3 class="text-2xl font-bold mb-6 text-red-400 text-center">Top Spenders</h3>
            <div class="flex justify-center items-end gap-8 mb-8">
              <div v-if="stats.topSpenders[1]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topSpenders[1].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topSpenders[1].username] || '/placeholder-avatar.svg'" :alt="stats.topSpenders[1].username" class="w-24 h-24 rounded-full border-4 shadow-lg" :class="filterUser && stats.topSpenders[1].username === filterUser ? 'border-yellow-400 ring-4 ring-yellow-400/50' : 'border-gray-400'" />
                  <div class="absolute -bottom-2 -right-2 text-4xl">🥈</div>
                </div>
                <div class="font-bold text-lg mt-3 text-gray-300">{{ stats.topSpenders[1].username }}</div>
                <div class="text-red-400 font-semibold mt-1"><Points currency="zC" :n="stats.topSpenders[1].amount" :relative="true" /></div>
              </div>
              <div v-if="stats.topSpenders[0]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topSpenders[0].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topSpenders[0].username] || '/placeholder-avatar.svg'" :alt="stats.topSpenders[0].username" class="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl" :class="{ 'ring-4 ring-yellow-400/50': filterUser && stats.topSpenders[0].username === filterUser }" />
                  <div class="absolute -bottom-3 -right-3 text-5xl">🥇</div>
                </div>
                <div class="font-bold text-xl mt-3 text-yellow-300">{{ stats.topSpenders[0].username }}</div>
                <div class="text-yellow-400 font-bold mt-1 text-lg"><Points currency="zC" :n="stats.topSpenders[0].amount" :relative="true" /></div>
              </div>
              <div v-if="stats.topSpenders[2]" class="flex flex-col items-center transition-opacity" :class="{ 'opacity-30': filterUser && stats.topSpenders[2].username !== filterUser }">
                <div class="relative">
                  <img :src="avatars[stats.topSpenders[2].username] || '/placeholder-avatar.svg'" :alt="stats.topSpenders[2].username" class="w-24 h-24 rounded-full border-4 shadow-lg" :class="filterUser && stats.topSpenders[2].username === filterUser ? 'border-yellow-400 ring-4 ring-yellow-400/50' : 'border-orange-700'" />
                  <div class="absolute -bottom-2 -right-2 text-4xl">🥉</div>
                </div>
                <div class="font-bold text-lg mt-3 text-orange-400">{{ stats.topSpenders[2].username }}</div>
                <div class="text-red-400 font-semibold mt-1"><Points currency="zC" :n="stats.topSpenders[2].amount" :relative="true" /></div>
              </div>
            </div>
            <div v-if="stats.topSpenders.length > 3" class="flex flex-wrap gap-4 justify-center">
              <div v-for="(user, idx) in stats.topSpenders.slice(3)" :key="user.username" class="flex items-center gap-3 px-4 py-2 rounded-lg transition-all" :class="filterUser && user.username !== filterUser ? 'bg-gray-700 opacity-30' : filterUser && user.username === filterUser ? 'bg-yellow-500/20 ring-1 ring-yellow-400' : 'bg-gray-700 hover:bg-gray-600'">
                <span class="text-gray-400 font-mono text-lg">{{ idx + 4 }}.</span>
                <img :src="avatars[user.username] || '/placeholder-avatar.svg'" :alt="user.username" class="w-10 h-10 rounded-full border-2 border-gray-500" />
                <span class="font-semibold">{{ user.username }}</span>
                <span class="text-red-400 font-bold ml-2"><Points currency="zC" :n="user.amount" :relative="true" /></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pixel Power Gallery -->
        <div v-if="stats.pixelPowerImages.length > 0" class="bg-gradient-to-br from-pink-900 to-pink-700 p-6 rounded-lg shadow-xl mb-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-pink-300">Pixel Power Gallery</h3>
            <div class="text-4xl font-bold text-pink-200">{{ stats.gameStats.pixelPower.imagesCreated }}</div>
          </div>
          <div class="grid grid-cols-5 gap-4">
            <div
              v-for="(image, idx) in stats.pixelPowerImages"
              :key="idx"
              class="aspect-square bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img :src="image.url" :alt="'Pixel Power art'" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-gray-500 text-sm mt-8 pb-4">
          Generated {{ new Date().toLocaleString() }} • Data sourced from zoskyCube-archive CSV
        </div>
      </div>
    </div>
  </div>
</template>
