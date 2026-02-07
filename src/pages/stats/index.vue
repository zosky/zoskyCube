<template>
  <div class="stats-index min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mt-8 mb-8">
        <div class="flex items-center gap-4">
          <h1 class="text-4xl font-bold text-white">
            📊 zCube Winnings Leaderboard
          </h1>
          <!-- Realtime Connection Indicator -->
          <div 
            v-if="isTwitchConnected" 
            class="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full ring-1 ring-green-500/50"
            title="Connected to Twitch chat - realtime updates enabled"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-green-400 text-sm font-medium">LIVE</span>
          </div>
          <button
            v-else
            @click="connectToChat"
            class="flex items-center gap-2 px-3 py-1.5 bg-gray-500/20 hover:bg-purple-500/20 rounded-full ring-1 ring-gray-500/50 hover:ring-purple-500/50 transition-all"
            title="Click to connect to Twitch chat for realtime updates"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500"></span>
            </span>
            <span class="text-gray-400 text-sm font-medium">Connect Live</span>
          </button>
        </div>
        <button
          @click="$router.push('/stats/analytics')"
          class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
        >
          📈 View Analytics
        </button>
      </div>
      
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <div v-else-if="error" class="bg-red-500/20 backdrop-blur-md rounded-xl p-6 ring-1 ring-red-500/50 text-red-200">
        <p class="font-semibold mb-2">❌ Error Loading Data</p>
        <p class="text-sm">{{ error }}</p>
      </div>
      
      <div v-else>
        <!-- Date Range Filter -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20 mb-6">
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <label class="text-white/70 text-sm font-medium">From:</label>
              <input
                type="date"
                v-model="dateFrom"
                :min="availableDateRange.min"
                :max="dateTo || availableDateRange.max"
                class="px-3 py-2 bg-white/10 rounded-lg ring-1 ring-white/20 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            
            <div class="flex items-center gap-2">
              <label class="text-white/70 text-sm font-medium">To:</label>
              <input
                type="date"
                v-model="dateTo"
                :min="dateFrom || availableDateRange.min"
                :max="availableDateRange.max"
                :disabled="isNowMode"
                class="px-3 py-2 bg-white/10 rounded-lg ring-1 ring-white/20 text-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            
            <div class="flex items-center gap-2">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="isNowMode"
                  class="w-4 h-4 rounded bg-white/10 border-white/30 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                />
                <span class="text-sm font-medium" :class="isNowMode ? 'text-green-400' : 'text-white/70'">
                  📡 Now (Live)
                </span>
              </label>
              <span v-if="isNowMode && isTwitchConnected" class="text-xs text-green-400/70">
                Including realtime updates
              </span>
            </div>
            
            <button
              @click="resetDateFilter"
              class="ml-auto px-3 py-1.5 text-sm bg-gray-500/20 hover:bg-gray-500/30 text-white/70 hover:text-white rounded-lg transition-colors"
              title="Reset to all data"
            >
              🔄 Reset
            </button>
          </div>
        </div>
        
        <!-- Data Source Info -->
        <div class="flex items-center justify-between text-sm text-white/50 mb-4">
          <span>📅 Data from: {{ loadedMonths.join(' & ') }}</span>
          <span v-if="realtimeTotalDistributed > 0" class="text-green-400">
            +<Points currency="zC" :n="realtimeTotalDistributed" /> since page load
          </span>
        </div>
        
        <!-- Summary Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Players</div>
            <div class="text-3xl font-bold text-white">{{ uniquePlayers }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Distributed</div>
            <div class="text-3xl font-bold text-yellow-400"><Points currency="zC" :n="totalDistributed" /></div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Avg Per Player</div>
            <div class="text-3xl font-bold text-green-400"><Points currency="zC" :n="avgPerPlayer" /></div>
          </div>
        </div>
        
        <!-- Search Box -->
        <div class="mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="🔍 Search by username..."
            class="w-full md:w-96 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl ring-1 ring-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
        </div>
        
        <!-- Leaderboard Table -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-white/5">
                <tr class="text-white/90 text-left">
                  <th class="px-4 py-3 font-semibold">Rank</th>
                  <th class="px-4 py-3 font-semibold">Username</th>
                  <th class="px-4 py-3 font-semibold text-right cursor-pointer hover:text-yellow-400" @click="sortBy = 'currentBalance'" title="Current StreamElements balance">
                    💰 Balance {{ sortBy === 'currentBalance' ? '▼' : '' }}
                  </th>
                  <th class="px-4 py-3 font-semibold text-right cursor-pointer hover:text-yellow-400" @click="sortBy = 'totalAmount'" title="Total winnings from games">
                    🏆 Winnings {{ sortBy === 'totalAmount' ? '▼' : '' }}
                  </th>
                  <th class="px-4 py-3 font-semibold text-right cursor-pointer hover:text-yellow-400" @click="sortBy = 'totalCount'" title="Total win count">
                    # Wins {{ sortBy === 'totalCount' ? '▼' : '' }}
                  </th>
                  <th class="px-3 py-3 font-semibold text-right" title="zoskyZappers">
                    <img :src="zoskyZappersLogo" alt="zoskyZappers" class="w-auto h-11 -my-3 inline-block" />
                  </th>
                  <th class="px-3 py-3 font-semibold text-right" title="VOD Vote">
                    <img :src="vodVoteLogo" alt="VOD Vote" class="w-auto h-11 -my-3 inline-block" />
                  </th>
                  <th class="px-3 py-3 font-semibold text-right" title="Pixel Power">
                    <img :src="pixelPowerLogo" alt="Pixel Power" class="w-auto h-11 -my-3 inline-block" />
                  </th>
                  <th v-if="isTwitchConnected" class="px-3 py-3 font-semibold text-right text-green-400" title="Realtime gains since page load">
                    ⚡ Live
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr 
                  v-for="(user, idx) in filteredLeaderboard" 
                  :key="user.username"
                  class="text-white hover:bg-blue-500/20 cursor-pointer transition-colors"
                  :class="{ 'bg-yellow-500/10': isCurrentUser(user.username) }"
                  @click="viewUserStats(user.username)"
                >
                  <td class="px-4 py-3">
                    <span v-if="getRealRank(user.username) === 1" class="text-2xl">🥇</span>
                    <span v-else-if="getRealRank(user.username) === 2" class="text-2xl">🥈</span>
                    <span v-else-if="getRealRank(user.username) === 3" class="text-2xl">🥉</span>
                    <span v-else class="text-white/70">{{ getRealRank(user.username) }}</span>
                  </td>
                  <td class="px-4 py-3 font-semibold">
                    <span v-if="isCurrentUser(user.username)" class="text-yellow-400">⭐ </span>
                    {{ user.username }}
                  </td>
                  <td class="px-4 py-3 text-right text-yellow-400 font-bold">
                    <Points currency="zC" :n="user.currentBalance" />
                  </td>
                  <td class="px-4 py-3 text-right text-green-400 font-semibold">
                    <Points currency="zC" :n="user.totalAmount" />
                  </td>
                  <td class="px-4 py-3 text-right text-white/80">
                    {{ user.totalCount }}
                  </td>
                  <td class="px-3 py-3 text-right text-blue-300 text-sm">
                    <Points v-if="user.byGame?.zoskyZappers?.amount" currency="zC" :n="user.byGame.zoskyZappers.amount" />
                  </td>
                  <td class="px-3 py-3 text-right text-green-300 text-sm">
                    <Points v-if="user.byGame?.vodVote?.amount" currency="zC" :n="user.byGame.vodVote.amount" />
                  </td>
                  <td class="px-3 py-3 text-right text-purple-300 text-sm">
                    <Points v-if="user.byGame?.art?.amount" currency="zC" :n="user.byGame.art.amount" />
                  </td>
                  <!-- Realtime Gains -->
                  <td v-if="isTwitchConnected" class="px-3 py-3 text-right">
                    <span v-if="user.realtimeAmount > 0" class="text-green-400 text-sm font-medium animate-pulse">
                      +<Points currency="zC" :n="user.realtimeAmount" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Pagination / Show more -->
          <div v-if="filteredLeaderboard.length < sortedLeaderboard.length && !searchQuery" class="p-4 text-center border-t border-white/10">
            <button 
              @click="showMore"
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Show More ({{ sortedLeaderboard.length - displayCount }} remaining)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHandoutsData } from '../../composables/useHandoutsData'
import { useAuth } from '../../composables/useAuth'
import Points from '../../components/Points.vue'
import zoskyZappersLogo from '../../assets/ttv/zoskyZappers.png'
import vodVoteLogo from '../../assets/ttv/vodVote.png'
import pixelPowerLogo from '../../assets/ttv/pixelPower.png'

const router = useRouter()
const { userProfile } = useAuth()

const {
  isLoading,
  error,
  loadedMonths,
  leaderboard,
  totalDistributed,
  uniquePlayers,
  avgPerPlayer,
  loadData,
  getUserRank,
  connectRealtime,
  isTwitchConnected,
  realtimeTotalDistributed,
  // Date filter
  dateFrom,
  dateTo,
  isNowMode,
  availableDateRange
} = useHandoutsData()

// Local state
const searchQuery = ref('')
const displayCount = ref(50)
const sortBy = ref('currentBalance') // Default sort by current balance

// Load data on mount
onMounted(async () => {
  await loadData()
  // Auto-connect to Twitch chat for realtime updates
  connectToChat()
})

// Connect to Twitch chat
async function connectToChat() {
  try {
    await connectRealtime()
  } catch (err) {
    console.warn('Failed to connect to Twitch chat:', err)
  }
}

// Reset date filter to show all data
function resetDateFilter() {
  dateFrom.value = null
  dateTo.value = null
  isNowMode.value = true
}

// Computed: Current user's Twitch username
const currentUsername = computed(() => 
  userProfile.value?.twitch?.username?.toLowerCase() || null
)

// Computed: Sorted leaderboard based on sortBy
const sortedLeaderboard = computed(() => {
  const sorted = [...leaderboard.value]
  sorted.sort((a, b) => {
    if (sortBy.value === 'currentBalance') return b.currentBalance - a.currentBalance
    if (sortBy.value === 'totalAmount') return b.totalAmount - a.totalAmount
    if (sortBy.value === 'totalCount') return b.totalCount - a.totalCount
    return b.currentBalance - a.currentBalance
  })
  return sorted
})

// Computed: Filtered and paginated leaderboard
const filteredLeaderboard = computed(() => {
  let result = sortedLeaderboard.value
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(u => u.username.includes(query))
  } else {
    // Apply pagination only when not searching
    result = result.slice(0, displayCount.value)
  }
  
  return result
})

// Methods
function isCurrentUser(username) {
  return currentUsername.value && username.toLowerCase() === currentUsername.value
}

function getRealRank(username) {
  // Rank based on current sort order
  const idx = sortedLeaderboard.value.findIndex(u => u.username === username)
  return idx >= 0 ? idx + 1 : 0
}

function viewUserStats(username) {
  router.push(`/stats/user?username=${username}`)
}

function showMore() {
  displayCount.value += 50
}

function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Never'
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}
</script>
