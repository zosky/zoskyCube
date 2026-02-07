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
        
        <!-- Game-Specific Stats Chicklets -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-8">
          <!-- VOD Vote + QA combined -->
          <div class="col-span-2 sm:col-span-3 lg:col-span-2 bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-green-500/30">
            <div class="flex items-center gap-2 mb-2">
              <img :src="vodVoteLogo" alt="VOD Vote" class="w-5 h-5" />
              <span class="text-green-400 font-bold text-xs">VOD Vote</span>
            </div>
            <div class="flex justify-around text-xs">
              <div class="text-center">
                <div class="text-white/50">Starts</div>
                <div class="text-white font-bold">{{ gameBreakdown.vodVote.starts.toLocaleString() }}</div>
                <div class="text-green-400/80"><Points currency="zC" :n="gameBreakdown.vodVote.startsTotal" /></div>
              </div>
              <div class="text-center">
                <div class="text-white/50">Votes</div>
                <div class="text-white font-bold">{{ gameBreakdown.vodVote.votes.toLocaleString() }}</div>
                <div class="text-green-400/80"><Points currency="zC" :n="gameBreakdown.vodVote.votesTotal" /></div>
              </div>
              <div class="text-center">
                <div class="text-white/50">Wins</div>
                <div class="text-white font-bold">{{ gameBreakdown.vodVote.wins.toLocaleString() }}</div>
                <div class="text-green-400/80"><Points currency="zC" :n="gameBreakdown.vodVote.winsTotal" /></div>
              </div>
              <div v-if="gameBreakdown.vodFeedback.count > 0" class="text-center border-l border-white/20 pl-3">
                <div class="text-white/50">QA</div>
                <div class="text-white font-bold">{{ gameBreakdown.vodFeedback.count }}</div>
                <div class="text-teal-400/80"><Points currency="zC" :n="gameBreakdown.vodFeedback.total" /></div>
              </div>
            </div>
          </div>
          
          <!-- zoskyZappers -->
          <div class="col-span-2 sm:col-span-3 lg:col-span-2 bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-blue-500/30">
            <div class="flex items-center gap-2 mb-2">
              <img :src="zoskyZappersLogo" alt="zoskyZappers" class="w-5 h-5" />
              <span class="text-blue-400 font-bold text-xs">zoskyZappers</span>
            </div>
            <div class="flex justify-around text-xs">
              <div class="text-center">
                <div class="text-white/50">PvE</div>
                <div class="text-white font-bold">{{ gameBreakdown.zoskyZappers.pveWins }}</div>
                <div class="text-blue-400/80"><Points currency="zC" :n="gameBreakdown.zoskyZappers.pveWinsTotal" /></div>
              </div>
              <div class="text-center">
                <div class="text-white/50">PvP</div>
                <div class="text-white font-bold">{{ gameBreakdown.zoskyZappers.pvpWins }}</div>
                <div class="text-blue-400/80"><Points currency="zC" :n="gameBreakdown.zoskyZappers.pvpWinsTotal" /></div>
              </div>
              <div class="text-center">
                <div class="text-white/50">Loss</div>
                <div class="text-white font-bold">{{ gameBreakdown.zoskyZappers.losses }}</div>
                <div class="text-red-400/80"><Points currency="zC" :n="gameBreakdown.zoskyZappers.lossesTotal" /></div>
              </div>
            </div>
          </div>
          
          <!-- Pixel Power -->
          <div class="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-purple-500/30">
            <div class="flex items-center gap-2 mb-2">
              <img :src="pixelPowerLogo" alt="Pixel Power" class="w-5 h-5" />
              <span class="text-purple-400 font-bold text-xs">Pixel Power</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between"><span class="text-white/50">Words</span><span class="text-white font-medium">{{ gameBreakdown.art.count.toLocaleString() }}</span></div>
              <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-purple-400"><Points currency="zC" :n="gameBreakdown.art.total" /></span></div>
              <div class="flex justify-between"><span class="text-white/50">Avg</span><span class="text-white/70"><Points currency="zC" :n="gameBreakdown.art.avg" /></span></div>
            </div>
          </div>
          
          <!-- Daily Dose -->
          <div class="bg-gradient-to-br from-pink-900/40 to-pink-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-pink-500/30">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-base">💊</span>
              <span class="text-pink-400 font-bold text-xs">Daily Dose</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between"><span class="text-white/50">Claims</span><span class="text-white font-medium">{{ gameBreakdown.dailyDose.count }}</span></div>
              <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-pink-400"><Points currency="zC" :n="gameBreakdown.dailyDose.total" /></span></div>
              <div class="flex justify-between"><span class="text-white/50">Users</span><span class="text-white/70">{{ gameBreakdown.dailyDose.uniqueUsers }}</span></div>
            </div>
          </div>
          
          <!-- Vouchers -->
          <div class="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-yellow-500/30">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-base">🎟️</span>
              <span class="text-yellow-400 font-bold text-xs">Vouchers</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between"><span class="text-white/50">Count</span><span class="text-white font-medium">{{ gameBreakdown.vouchers.count }}</span></div>
              <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-yellow-400"><Points currency="zC" :n="gameBreakdown.vouchers.total" /></span></div>
              <div class="flex justify-between"><span class="text-white/50">Avg</span><span class="text-white/70"><Points currency="zC" :n="gameBreakdown.vouchers.avg" /></span></div>
            </div>
          </div>
          
          <!-- Discord Reactions -->
          <div class="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-indigo-500/30">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-base">💬</span>
              <span class="text-indigo-400 font-bold text-xs">Discord</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between"><span class="text-white/50">Reacts</span><span class="text-white font-medium">{{ gameBreakdown.discoReact.count }}</span></div>
              <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-indigo-400"><Points currency="zC" :n="gameBreakdown.discoReact.total" /></span></div>
              <div class="flex justify-between"><span class="text-white/50">Users</span><span class="text-white/70">{{ gameBreakdown.discoReact.uniqueUsers }}</span></div>
            </div>
          </div>
          
          <!-- Referrals -->
          <div v-if="gameBreakdown.referral.count > 0" class="bg-gradient-to-br from-orange-900/40 to-orange-800/20 backdrop-blur-md rounded-xl p-3 ring-1 ring-orange-500/30">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-base">🔗</span>
              <span class="text-orange-400 font-bold text-xs">Referrals</span>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between"><span class="text-white/50">Bonuses</span><span class="text-white font-medium">{{ gameBreakdown.referral.count }}</span></div>
              <div class="flex justify-between"><span class="text-white/50">Total</span><span class="text-orange-400"><Points currency="zC" :n="gameBreakdown.referral.total" /></span></div>
              <div class="flex justify-between"><span class="text-white/50">Referrers</span><span class="text-white/70">{{ gameBreakdown.referral.uniqueUsers }}</span></div>
            </div>
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
  availableDateRange,
  // For game breakdown
  combinedHandouts
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

// Computed: Game-specific breakdown stats
const gameBreakdown = computed(() => {
  const handouts = combinedHandouts.value
  
  // VOD Vote breakdown
  const vodVoteHandouts = handouts.filter(h => h.source === 'vodVote')
  const vodVoteStarts = vodVoteHandouts.filter(h => h.reason?.includes('Starting a new game'))
  const vodVoteVotes = vodVoteHandouts.filter(h => h.reason === 'Successful game vote')
  const vodVoteWins = vodVoteHandouts.filter(h => h.reason?.includes('winning @ vodVote'))
  
  // VOD Feedback (separate source)
  const vodFeedbackHandouts = handouts.filter(h => h.source === 'vodFeedback')
  
  // Art / Pixel Power (source = 'art', reason starts with 'AI Art word:')
  const artHandouts = handouts.filter(h => h.source === 'art')
  
  // zoskyZappers breakdown
  const zzHandouts = handouts.filter(h => h.source === 'zoskyZappers')
  const zzPveWins = zzHandouts.filter(h => h.reason?.includes('PVE Victory'))
  const zzPvpWins = zzHandouts.filter(h => h.reason?.includes('PVP Victory'))
  const zzLosses = zzHandouts.filter(h => h.reason?.includes('Defeat'))
  
  // Vouchers - separate dailyDose from others
  const voucherHandouts = handouts.filter(h => h.source === 'voucher')
  const dailyDoseHandouts = voucherHandouts.filter(h => h.reason === 'dailyDose')
  const otherVouchers = voucherHandouts.filter(h => h.reason !== 'dailyDose')
  
  // Discord reactions
  const discoReactHandouts = handouts.filter(h => h.source === 'discoReact')
  
  // Referrals
  const referralHandouts = handouts.filter(h => h.source === 'referral')
  
  // Bits
  const bitsHandouts = handouts.filter(h => h.source === 'bits')
  
  return {
    vodVote: {
      starts: vodVoteStarts.length,
      startsTotal: vodVoteStarts.reduce((sum, h) => sum + h.amount, 0),
      votes: vodVoteVotes.length,
      votesTotal: vodVoteVotes.reduce((sum, h) => sum + h.amount, 0),
      wins: vodVoteWins.length,
      winsTotal: vodVoteWins.reduce((sum, h) => sum + h.amount, 0)
    },
    vodFeedback: {
      count: vodFeedbackHandouts.length,
      total: vodFeedbackHandouts.reduce((sum, h) => sum + h.amount, 0),
      uniqueUsers: new Set(vodFeedbackHandouts.map(h => h.username)).size
    },
    art: {
      count: artHandouts.length,
      total: artHandouts.reduce((sum, h) => sum + h.amount, 0),
      avg: artHandouts.length > 0 
        ? Math.round(artHandouts.reduce((sum, h) => sum + h.amount, 0) / artHandouts.length) 
        : 0
    },
    zoskyZappers: {
      pveWins: zzPveWins.length,
      pveWinsTotal: zzPveWins.reduce((sum, h) => sum + h.amount, 0),
      pvpWins: zzPvpWins.length,
      pvpWinsTotal: zzPvpWins.reduce((sum, h) => sum + h.amount, 0),
      losses: zzLosses.length,
      lossesTotal: zzLosses.reduce((sum, h) => sum + h.amount, 0)
    },
    dailyDose: {
      count: dailyDoseHandouts.length,
      total: dailyDoseHandouts.reduce((sum, h) => sum + h.amount, 0),
      uniqueUsers: new Set(dailyDoseHandouts.map(h => h.username)).size
    },
    vouchers: {
      count: otherVouchers.length,
      total: otherVouchers.reduce((sum, h) => sum + h.amount, 0),
      avg: otherVouchers.length > 0 
        ? Math.round(otherVouchers.reduce((sum, h) => sum + h.amount, 0) / otherVouchers.length) 
        : 0
    },
    discoReact: {
      count: discoReactHandouts.length,
      total: discoReactHandouts.reduce((sum, h) => sum + h.amount, 0),
      uniqueUsers: new Set(discoReactHandouts.map(h => h.username)).size
    },
    referral: {
      count: referralHandouts.length,
      total: referralHandouts.reduce((sum, h) => sum + h.amount, 0),
      uniqueUsers: new Set(referralHandouts.map(h => h.username)).size
    },
    bits: {
      count: bitsHandouts.length,
      total: bitsHandouts.reduce((sum, h) => sum + h.amount, 0)
    }
  }
})

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
