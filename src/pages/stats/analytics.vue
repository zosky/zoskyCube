<template>
  <div class="analytics min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-8 mt-8">
        <div>
          <h1 class="text-4xl font-bold text-white">
            📊 zCube Analytics Dashboard
          </h1>
          <p class="text-sm text-white/50 mt-1">📅 Data from: {{ loadedMonths.join(' & ') }}</p>
        </div>
        <button
          @click="$router.push('/stats')"
          class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-md ring-1 ring-white/20"
        >
          ← Back to Leaderboard
        </button>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>

      <div v-else-if="error" class="bg-red-500/20 backdrop-blur-md rounded-xl p-6 ring-1 ring-red-500/50 text-red-200">
        <p class="font-semibold mb-2">❌ Error Loading Data</p>
        <p class="text-sm">{{ error }}</p>
      </div>

      <div v-else class="space-y-8">
        <!-- MY STATS SECTION (Featured when logged in) -->
        <div v-if="currentUsername" class="bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 ring-2 ring-yellow-500/50">
          <div class="flex items-center gap-3 mb-6">
            <img 
              v-if="userProfile?.twitch?.profileImageUrl" 
              :src="userProfile.twitch.profileImageUrl" 
              :alt="currentUsername"
              class="w-12 h-12 rounded-full ring-2 ring-yellow-400"
            >
            <div>
              <h2 class="text-2xl font-bold text-white">👤 {{ currentUsername }}'s Stats</h2>
              <p class="text-sm text-white/60">Your earnings this month</p>
            </div>
          </div>

          <!-- My Summary Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-black/20 rounded-lg p-4">
              <div class="text-xs text-white/60 mb-1">Total Earned</div>
              <div class="text-2xl font-bold text-yellow-400">{{ myTotalEarned.toLocaleString() }} zC</div>
            </div>
            <div class="bg-black/20 rounded-lg p-4">
              <div class="text-xs text-white/60 mb-1">Handouts</div>
              <div class="text-2xl font-bold text-green-400">{{ myTotalHandouts }}</div>
            </div>
            <div class="bg-black/20 rounded-lg p-4">
              <div class="text-xs text-white/60 mb-1">My Rank</div>
              <div class="text-2xl font-bold" :class="myRank <= 3 ? 'text-yellow-400' : myRank <= 10 ? 'text-blue-400' : 'text-white'">
                {{ myRank > 0 ? `#${myRank}` : 'N/A' }}
              </div>
            </div>
            <div class="bg-black/20 rounded-lg p-4">
              <div class="text-xs text-white/60 mb-1">Avg Per Day</div>
              <div class="text-2xl font-bold text-purple-400">{{ myAvgPerDay.toLocaleString() }} zC</div>
            </div>
          </div>

          <!-- My Earnings by Game -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-white mb-3">🎮 My Earnings by Game</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              <div 
                v-for="source in mySourceBreakdown" 
                :key="source.name"
                class="bg-black/20 rounded-lg p-3 text-center"
              >
                <div class="text-xs text-white/60 mb-1">{{ source.name }}</div>
                <div class="text-lg font-bold" :style="{ color: sourceColors[source.name] || '#94a3b8' }">
                  {{ source.amount.toLocaleString() }}
                </div>
                <div class="text-xs text-white/40">{{ source.count }} times</div>
              </div>
            </div>
          </div>

          <!-- My Daily Chart -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">📅 My Daily Earnings</h3>
            <div class="h-48">
              <Bar :data="myDailyData" :options="myDailyChartOptions" />
            </div>
          </div>

          <!-- My Last 7 Days by Game (Line Chart) -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">📈 Last 7 Days by Game</h3>
            <div class="h-48">
              <Line :data="myWeeklyByGameData" :options="myWeeklyChartOptions" />
            </div>
          </div>

          <!-- My Activity Timeline (Scatter Chart) -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">⏱️ Activity Timeline (Last 7 Days)</h3>
            <p class="text-xs text-white/50 mb-2">Each dot represents a handout - hover to see details</p>
            <div class="h-64">
              <Scatter :data="myActivityTimelineData" :options="activityTimelineOptions" />
            </div>
          </div>
        </div>

        <!-- Not logged in notice -->
        <div v-else class="bg-white/5 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/10 text-center">
          <p class="text-white/60 mb-3">🔒 Log in to see your personal stats featured here</p>
          <button 
            @click="$router.push('/auth')"
            class="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
          >
            Connect Accounts
          </button>
        </div>

        <!-- Summary Stats (Channel Totals) -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Distributed</div>
            <div class="text-3xl font-bold text-yellow-400">{{ totalDistributed.toLocaleString() }} zC</div>
            <div class="text-xs text-white/50 mt-1">This month</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Unique Players</div>
            <div class="text-3xl font-bold text-blue-400">{{ uniquePlayers }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Handouts</div>
            <div class="text-3xl font-bold text-green-400">{{ totalHandouts.toLocaleString() }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Avg Per Day</div>
            <div class="text-3xl font-bold text-purple-400">{{ avgPerDay.toLocaleString() }} zC</div>
          </div>
        </div>

        <!-- My Daily Distribution vs Channel (when logged in) -->
        <div v-if="currentUsername" class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">📊 My Earnings vs Channel Daily Total</h2>
          <div class="h-96">
            <Line :data="myVsChannelDailyData" :options="comparisonChartOptions" />
          </div>
        </div>

        <!-- Daily Distribution by Source (Stacked Area Chart) -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">💰 Daily Distribution by Source</h2>
          <div class="h-96">
            <Line :data="dailyBySourceData" :options="chartOptions" />
          </div>
        </div>

        <!-- Me vs Top 10 Players (when logged in) -->
        <div v-if="currentUsername" class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">
            🏆 {{ myRank <= 10 ? 'Top 10 Players (Including You!)' : 'Me vs Top 10 Players' }}
          </h2>
          <div class="h-96">
            <Line :data="meVsTop10Data" :options="chartOptions" />
          </div>
        </div>

        <!-- Top 10 Players Over Time (when not logged in) -->
        <div v-else class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">🏆 Top 10 Players - Daily Earnings</h2>
          <div class="h-96">
            <Line :data="dailyByPlayerData" :options="chartOptions" />
          </div>
        </div>

        <!-- Source Breakdown (Pie Chart) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-2xl font-bold text-white mb-4">🎮 Channel Distribution by Source</h2>
            <div class="h-80">
              <Doughnut :data="sourceBreakdownData" :options="pieChartOptions" />
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-2xl font-bold text-white mb-4">📈 Source Rankings</h2>
            <div class="space-y-3">
              <div 
                v-for="(item, idx) in sourceRankings" 
                :key="item.source"
                class="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <div class="flex items-center gap-3">
                  <span class="text-2xl">{{ idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}.` }}</span>
                  <span class="font-semibold text-white">{{ item.source }}</span>
                </div>
                <div class="text-right">
                  <div class="text-yellow-400 font-bold">{{ item.amount.toLocaleString() }} zC</div>
                  <div class="text-xs text-white/50">{{ item.count.toLocaleString() }} handouts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Hourly Distribution Heatmap -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">🕐 Activity by Hour & Day</h2>
          <div class="h-96">
            <Bar :data="hourlyHeatmapData" :options="heatmapOptions" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import { Line, Doughnut, Bar, Scatter } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const router = useRouter()
const { user, userProfile } = useAuth()

// Use shared handouts data composable
import { useHandoutsData } from '../../composables/useHandoutsData'
const {
  allHandouts,
  isLoading,
  error,
  loadedMonths,
  totalDistributed,
  uniquePlayers,
  loadData
} = useHandoutsData()

// Alias for compatibility with existing code
const rawData = allHandouts

// Source colors (consistent across all charts)
const sourceColors = {
  'zoskyZappers': 'rgb(59, 130, 246)',
  'squadRush': 'rgb(239, 68, 68)',
  'vodVote': 'rgb(34, 197, 94)',
  'art': 'rgb(168, 85, 247)',
  'chevos': 'rgb(234, 179, 8)',
  'voucher': 'rgb(236, 72, 153)',
  'manual': 'rgb(156, 163, 175)'
}

// Current user's Twitch username (lowercase for matching)
// DEV MODE: Hardcoded for testing - remove in production
const currentUsername = computed(() => 
  'wolfmaron999' // userProfile.value?.twitch?.username?.toLowerCase() || null
)

// Computed stats
const totalHandouts = computed(() => rawData.value.length)

const avgPerDay = computed(() => {
  const dates = new Set(rawData.value.map(h => h.date))
  return dates.size > 0 ? Math.round(totalDistributed.value / dates.size) : 0
})

// ============================================
// MY STATS (Current logged-in user)
// ============================================

// Filter data for current user only
const myData = computed(() => {
  if (!currentUsername.value) return []
  return rawData.value.filter(h => h.username.toLowerCase() === currentUsername.value)
})

// My total earned
const myTotalEarned = computed(() => 
  myData.value.reduce((sum, h) => sum + h.amount, 0)
)

// My total handouts count
const myTotalHandouts = computed(() => myData.value.length)

// My rank among all players
const myRank = computed(() => {
  if (!currentUsername.value) return 0
  
  // Build player totals and sort
  const playerTotals = {}
  rawData.value.forEach(h => {
    const name = h.username.toLowerCase()
    playerTotals[name] = (playerTotals[name] || 0) + h.amount
  })
  
  const sorted = Object.entries(playerTotals)
    .sort((a, b) => b[1] - a[1])
    .map(([username]) => username)
  
  const rank = sorted.indexOf(currentUsername.value) + 1
  return rank > 0 ? rank : 0
})

// My average per day
const myAvgPerDay = computed(() => {
  const myDates = new Set(myData.value.map(h => h.date))
  return myDates.size > 0 ? Math.round(myTotalEarned.value / myDates.size) : 0
})

// My earnings breakdown by source/game
const mySourceBreakdown = computed(() => {
  const sources = {}
  const counts = {}
  
  myData.value.forEach(h => {
    if (h.source === 'redeem') return
    sources[h.source] = (sources[h.source] || 0) + h.amount
    counts[h.source] = (counts[h.source] || 0) + 1
  })
  
  return Object.entries(sources)
    .map(([name, amount]) => ({
      name,
      amount,
      count: counts[name]
    }))
    .sort((a, b) => b.amount - a.amount)
})

// My daily earnings bar chart data (stacked by game/source)
const myDailyData = computed(() => {
  const byDateAndSource = {}
  const sources = new Set()
  
  myData.value.forEach(h => {
    if (h.source === 'redeem') return
    if (!byDateAndSource[h.date]) byDateAndSource[h.date] = {}
    if (!byDateAndSource[h.date][h.source]) byDateAndSource[h.date][h.source] = 0
    byDateAndSource[h.date][h.source] += h.amount
    sources.add(h.source)
  })
  
  const dates = Object.keys(byDateAndSource).sort()
  
  const datasets = Array.from(sources).map(source => ({
    label: source,
    data: dates.map(date => byDateAndSource[date]?.[source] || 0),
    backgroundColor: sourceColors[source] || 'rgb(100, 116, 139)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderRadius: 2
  }))
  
  return {
    labels: dates,
    datasets
  }
})

// My last 7 days by game (line chart)
const myWeeklyByGameData = computed(() => {
  // Get last 7 days
  const today = new Date()
  const last7Days = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    last7Days.push(d.toISOString().split('T')[0])
  }
  
  // Group my data by date and source for last 7 days
  const byDateAndSource = {}
  const sources = new Set()
  
  myData.value.forEach(h => {
    if (h.source === 'redeem') return
    if (!last7Days.includes(h.date)) return
    if (!byDateAndSource[h.date]) byDateAndSource[h.date] = {}
    if (!byDateAndSource[h.date][h.source]) byDateAndSource[h.date][h.source] = 0
    byDateAndSource[h.date][h.source] += h.amount
    sources.add(h.source)
  })
  
  const datasets = Array.from(sources).map(source => ({
    label: source,
    data: last7Days.map(date => byDateAndSource[date]?.[source] || 0),
    borderColor: sourceColors[source] || 'rgb(100, 116, 139)',
    backgroundColor: 'transparent',
    borderWidth: 3,
    tension: 0.3,
    pointRadius: 4,
    pointBackgroundColor: sourceColors[source] || 'rgb(100, 116, 139)'
  }))
  
  return {
    labels: last7Days.map(d => {
      const date = new Date(d)
      return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    }),
    datasets
  }
})

// My activity timeline (scatter chart with timestamps)
const myActivityTimelineData = computed(() => {
  // Get timestamp range for last 7 days
  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
  sevenDaysAgo.setHours(0, 0, 0, 0)
  const startTs = sevenDaysAgo.getTime()
  
  // Group handouts by source with actual timestamps
  const bySource = {}
  
  myData.value.forEach(h => {
    if (h.source === 'redeem') return
    if (h.timestamp < startTs) return
    
    if (!bySource[h.source]) bySource[h.source] = []
    bySource[h.source].push({
      x: h.timestamp,
      y: h.amount,
      reason: h.reason
    })
  })
  
  const datasets = Object.entries(bySource).map(([source, points]) => ({
    label: source,
    data: points,
    backgroundColor: sourceColors[source] || 'rgb(100, 116, 139)',
    borderColor: sourceColors[source] || 'rgb(100, 116, 139)',
    pointRadius: 6,
    pointHoverRadius: 10
  }))
  
  return { datasets }
})

// My vs Channel daily comparison chart
const myVsChannelDailyData = computed(() => {
  const channelByDate = {}
  const myByDate = {}
  
  rawData.value.forEach(h => {
    channelByDate[h.date] = (channelByDate[h.date] || 0) + h.amount
  })
  
  myData.value.forEach(h => {
    myByDate[h.date] = (myByDate[h.date] || 0) + h.amount
  })
  
  const dates = Object.keys(channelByDate).sort()
  
  return {
    labels: dates,
    datasets: [
      {
        label: 'Channel Total',
        data: dates.map(date => channelByDate[date] || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
      {
        label: `My Earnings (${currentUsername.value || 'You'})`,
        data: dates.map(date => myByDate[date] || 0),
        backgroundColor: 'rgba(234, 179, 8, 0.4)',
        borderColor: 'rgb(234, 179, 8)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }
    ]
  }
})

// Me vs Top 10 Players daily chart
const meVsTop10Data = computed(() => {
  if (!currentUsername.value) return dailyByPlayerData.value
  
  // Get top 10 players by total earnings
  const playerTotals = {}
  rawData.value.forEach(h => {
    const name = h.username.toLowerCase()
    playerTotals[name] = (playerTotals[name] || 0) + h.amount
  })
  
  const sortedPlayers = Object.entries(playerTotals)
    .sort((a, b) => b[1] - a[1])
  
  // Get top 10 + ensure current user is included
  const top10Names = sortedPlayers.slice(0, 10).map(([name]) => name)
  const isInTop10 = top10Names.includes(currentUsername.value)
  
  // Build player list: top 10 + current user if not already in top 10
  const playersToShow = isInTop10 ? top10Names : [...top10Names, currentUsername.value]
  
  // Build daily data for selected players
  const byDateAndPlayer = {}
  rawData.value.forEach(h => {
    const name = h.username.toLowerCase()
    if (!playersToShow.includes(name)) return
    if (!byDateAndPlayer[h.date]) byDateAndPlayer[h.date] = {}
    if (!byDateAndPlayer[h.date][name]) byDateAndPlayer[h.date][name] = 0
    byDateAndPlayer[h.date][name] += h.amount
  })
  
  const dates = Object.keys(byDateAndPlayer).sort()
  
  // Generate colors for players (highlight current user in gold)
  const colorPalette = [
    'rgb(59, 130, 246)', 'rgb(239, 68, 68)', 'rgb(34, 197, 94)',
    'rgb(168, 85, 247)', 'rgb(234, 179, 8)', 'rgb(236, 72, 153)',
    'rgb(20, 184, 166)', 'rgb(251, 146, 60)', 'rgb(14, 165, 233)',
    'rgb(132, 204, 22)'
  ]
  
  const datasets = playersToShow.map((player, idx) => {
    const isMe = player === currentUsername.value
    return {
      label: isMe ? `⭐ ${player} (You)` : player,
      data: dates.map(date => byDateAndPlayer[date]?.[player] || 0),
      backgroundColor: isMe ? 'rgba(234, 179, 8, 0.4)' : colorPalette[idx % colorPalette.length],
      borderColor: isMe ? 'rgb(234, 179, 8)' : colorPalette[idx % colorPalette.length],
      borderWidth: isMe ? 4 : 2,
      fill: true,
      tension: 0.4,
      order: isMe ? 0 : idx + 1  // Bring user's line to front
    }
  })
  
  return {
    labels: dates,
    datasets
  }
})

// Daily by Source (Stacked Area Chart)
const dailyBySourceData = computed(() => {
  const byDateAndSource = {}
  const sources = new Set()

  rawData.value.forEach(h => {
    if (!byDateAndSource[h.date]) byDateAndSource[h.date] = {}
    if (!byDateAndSource[h.date][h.source]) byDateAndSource[h.date][h.source] = 0
    byDateAndSource[h.date][h.source] += h.amount
    sources.add(h.source)
  })

  const dates = Object.keys(byDateAndSource).sort()
  const sourceColors = {
    'zoskyZappers': 'rgb(59, 130, 246)',
    'squadRush': 'rgb(239, 68, 68)',
    'vodVote': 'rgb(34, 197, 94)',
    'art': 'rgb(168, 85, 247)',
    'chevos': 'rgb(234, 179, 8)',
    'voucher': 'rgb(236, 72, 153)',
    'manual': 'rgb(156, 163, 175)'
  }

  const datasets = Array.from(sources).map(source => ({
    label: source,
    data: dates.map(date => byDateAndSource[date][source] || 0),
    backgroundColor: sourceColors[source] || 'rgb(100, 116, 139)',
    borderColor: sourceColors[source] || 'rgb(100, 116, 139)',
    borderWidth: 2,
    fill: true,
    tension: 0.4
  }))

  return {
    labels: dates,
    datasets
  }
})

// Daily by Top 10 Players (Stacked Area Chart)
const dailyByPlayerData = computed(() => {
  // Get top 10 players by total earnings
  const playerTotals = {}
  rawData.value.forEach(h => {
    playerTotals[h.username] = (playerTotals[h.username] || 0) + h.amount
  })

  const top10 = Object.entries(playerTotals)
    .sort((a, b) => b[1] - a[1])
    // .slice(0, 10)
    .map(([username]) => username)

  // Build daily data for top 10
  const byDateAndPlayer = {}
  rawData.value.forEach(h => {
    if (!top10.includes(h.username)) return
    if (!byDateAndPlayer[h.date]) byDateAndPlayer[h.date] = {}
    if (!byDateAndPlayer[h.date][h.username]) byDateAndPlayer[h.date][h.username] = 0
    byDateAndPlayer[h.date][h.username] += h.amount
  })

  const dates = Object.keys(byDateAndPlayer).sort()

  // Generate colors for players
  const colorPalette = [
    'rgb(59, 130, 246)', 'rgb(239, 68, 68)', 'rgb(34, 197, 94)',
    'rgb(168, 85, 247)', 'rgb(234, 179, 8)', 'rgb(236, 72, 153)',
    'rgb(20, 184, 166)', 'rgb(251, 146, 60)', 'rgb(14, 165, 233)',
    'rgb(132, 204, 22)'
  ]

  const datasets = top10.map((player, idx) => ({
    label: player,
    data: dates.map(date => byDateAndPlayer[date][player] || 0),
    backgroundColor: colorPalette[idx % colorPalette.length],
    borderColor: colorPalette[idx % colorPalette.length],
    borderWidth: 2,
    fill: true,
    tension: 0.4
  }))

  return {
    labels: dates,
    datasets
  }
})

// Source Breakdown (Pie Chart)
const sourceBreakdownData = computed(() => {
  const sources = {}
  rawData.value.forEach(h => {
    if (h.source === 'redeem') return;
    sources[h.source] = (sources[h.source] || 0) + h.amount
  })

  const labels = Object.keys(sources)
  const data = Object.values(sources)

  const colors = [
    'rgb(59, 130, 246)', 'rgb(239, 68, 68)', 'rgb(34, 197, 94)',
    'rgb(168, 85, 247)', 'rgb(234, 179, 8)', 'rgb(236, 72, 153)',
    'rgb(156, 163, 175)'
  ]

  return {
    labels,
    datasets: [{
      data,
      backgroundColor: colors,
      borderWidth: 2,
      borderColor: 'rgba(0,0,0,0.8)'
    }]
  }
})

// Source Rankings
const sourceRankings = computed(() => {
  const sources = {}
  const counts = {}
  
  rawData.value.forEach(h => {
    if (h.source === 'redeem') return;
    sources[h.source] = (sources[h.source] || 0) + h.amount
    counts[h.source] = (counts[h.source] || 0) + 1
  })

  return Object.entries(sources)
    .map(([source, amount]) => ({
      source,
      amount,
      count: counts[source]
    }))
    .sort((a, b) => b.amount - a.amount)
})

// Hourly Heatmap (by day of week)
const hourlyHeatmapData = computed(() => {
  const byDayAndHour = {}
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  rawData.value.forEach(h => {
    const date = new Date(h.timestamp)
    const day = days[date.getDay()]
    const hour = date.getHours()
    
    if (!byDayAndHour[day]) byDayAndHour[day] = {}
    if (!byDayAndHour[day][hour]) byDayAndHour[day][hour] = 0
    byDayAndHour[day][hour] += h.amount
  })

  const hours = Array.from({ length: 24 }, (_, i) => i)

  const datasets = days.map((day, idx) => ({
    label: day,
    data: hours.map(hour => byDayAndHour[day]?.[hour] || 0),
    backgroundColor: `rgba(${59 + idx * 30}, ${130 + idx * 20}, ${246 - idx * 20}, 0.6)`,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  }))

  return {
    labels: hours.map(h => `${h}:00`),
    datasets
  }
})

// Recent Activity
const recentActivity = computed(() => 
  [...rawData.value]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 50)
)

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 11
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      stacked: true,
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

// My daily chart options (stacked bar chart by game)
const myDailyChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 10
        },
        boxWidth: 12
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} zC`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)',
        maxRotation: 45,
        minRotation: 45
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      stacked: true,
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

// My weekly by game chart options (line chart)
const myWeeklyChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 10
        },
        boxWidth: 12
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} zC`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

// Activity timeline chart options (scatter with time x-axis)
const activityTimelineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 10
        },
        boxWidth: 12
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        title: function(context) {
          const timestamp = context[0].parsed.x
          return new Date(timestamp).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
          })
        },
        label: function(context) {
          const point = context.raw
          return [
            `${context.dataset.label}: ${point.y.toLocaleString()} zC`,
            point.reason ? `"${point.reason}"` : ''
          ].filter(Boolean)
        }
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'EEE MMM d'
        }
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'zC Amount',
        color: 'rgba(255, 255, 255, 0.6)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

// Me vs Channel comparison chart options (non-stacked line chart)
const comparisonChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} zC`
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: function(context) {
          const label = context.label || ''
          const value = context.parsed
          const total = context.dataset.data.reduce((a, b) => a + b, 0)
          const percentage = ((value / total) * 100).toFixed(1)
          return `${label}: ${value.toLocaleString()} zC (${percentage}%)`
        }
      }
    }
  }
}

const heatmapOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 11
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: 'rgba(255, 255, 255, 0.9)',
      bodyColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      ticks: {
        color: 'rgba(255, 255, 255, 0.6)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
}

// Utility functions
function formatTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor(diff / (1000 * 60))

  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return date.toLocaleDateString()
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
/* Custom scrollbar for recent activity */
.max-h-96::-webkit-scrollbar {
  width: 8px;
}

.max-h-96::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.max-h-96::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.max-h-96::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
