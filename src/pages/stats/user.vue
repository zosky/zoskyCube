<template>
  <div class="user-stats-page min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb mt-8 mb-2 print:hidden">
        <button 
          @click="$router.push('/stats')" 
          class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
        >
          <span>←</span> Back to Leaderboard
        </button>
      </div>
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="bg-red-500/20 backdrop-blur-md rounded-xl p-6 ring-1 ring-red-500 text-white">
        <h2 class="text-xl font-bold mb-2">⚠️ Error</h2>
        <p>{{ error }}</p>
      </div>
      
      <!-- No Data State -->
      <div v-else-if="userHandouts.length === 0" class="bg-white/10 backdrop-blur-md rounded-xl p-12 ring-1 ring-white/20 text-center text-white">
        <h2 class="text-2xl font-bold mb-4">No Data Found</h2>
        <p class="mb-6">No handout history found for {{ username }}</p>
        <button @click="$router.push('/stats')" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          ← Back to Leaderboard
        </button>
      </div>
      
      <!-- Stats Content -->
      <div v-else class="stats-content">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-4xl font-bold text-white">
                📊 {{ username }}'s Stats
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
            </div>
            <p class="text-white/60 mt-1">
              Rank #{{ userRank }} • Data from {{ loadedMonths.join(' & ') }}
            </p>
          </div>
          
          <div class="export-toolbar flex gap-2 print:hidden">
            <button 
              @click="exportToCSV" 
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
            >
              📥 Export CSV
            </button>
          </div>
        </div>
        
        <!-- Summary Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Earned</div>
            <div class="text-3xl font-bold text-yellow-400"><Points currency="zC" :n="totalAmount" /></div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
              <div class="text-sm text-white/70 mb-1">Avg Per Win</div>
              <div class="text-3xl font-bold text-blue-400"><Points currency="zC" :n="avgAmount" /></div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Wins</div>
            <div class="text-3xl font-bold text-green-400">{{ totalCount }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Active Days</div>
            <div class="text-3xl font-bold text-purple-400">{{ activeDays }}</div>
          </div>
        </div>
        
        <!-- Game Breakdown -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🎮 Earnings by Game</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div 
              v-for="game in gameStats" 
              :key="game.source"
              class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20 text-center"
            >
              <div class="flex items-center justify-center gap-2 mb-2">
                <img 
                  v-if="sourceLogos[game.source]" 
                  :src="sourceLogos[game.source]" 
                  :alt="game.source" 
                  class="w-6 h-6"
                />
                <span v-else class="text-xl">{{ sourceIcons[game.source] || '🎮' }}</span>
                <span class="text-sm text-white/60">{{ game.source }}</span>
              </div>
              <div class="text-2xl font-bold" :style="{ color: sourceColors[game.source] || '#94a3b8' }">
                <Points currency="zC" :n="game.source === 'redeem' ? Math.abs(game.total) : game.total" />
              </div>
              <div class="text-xs text-white/40 mt-1">{{ game.count }} wins ({{ game.percentage }}%)</div>
            </div>
          </div>
        </section>
        
        <!-- Insights -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🔍 Insights</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div 
              v-for="insight in insights" 
              :key="insight.type"
              class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20"
            >
              <div class="text-2xl mb-2">{{ insight.icon }}</div>
              <div class="text-sm font-semibold text-white">{{ insight.title }}</div>
              <div class="text-xs text-white/60 mt-1">{{ insight.description }}</div>
            </div>
          </div>
        </section>
        
        <!-- Charts Row -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <!-- Daily Earnings Chart -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-xl font-bold text-white mb-4">📅 Daily Earnings</h2>
            <div class="h-64">
              <Bar :data="dailyChartData" :options="barChartOptions" />
            </div>
          </div>
          
          <!-- Source Pie Chart -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-xl font-bold text-white mb-4">📊 Source Distribution</h2>
            <div class="h-64">
              <Doughnut :data="sourceChartData" :options="pieChartOptions" />
            </div>
          </div>
        </div>
        
        <!-- Activity Timeline -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">⏱️ Activity Timeline (Last 7 Days)</h2>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="h-64">
              <Scatter :data="activityTimelineData" :options="scatterChartOptions" />
            </div>
          </div>
        </section>
        
        <!-- Hourly Activity -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🕐 Activity by Hour</h2>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="h-48">
              <Bar :data="hourlyChartData" :options="hourlyChartOptions" />
            </div>
          </div>
        </section>
        
        <!-- Recent History Table -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">📜 Recent Activity</h2>
          <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
            <div class="overflow-x-auto max-h-96">
              <table class="w-full">
                <thead class="bg-white/5 sticky top-0">
                  <tr class="text-white/90 text-left">
                    <th class="px-4 py-3 font-semibold">Date</th>
                    <th class="px-4 py-3 font-semibold">Source</th>
                    <th class="px-4 py-3 font-semibold">Reason</th>
                    <th class="px-4 py-3 font-semibold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/10">
                  <tr 
                    v-for="(item, idx) in recentHistory" 
                    :key="idx"
                    class="text-white hover:bg-white/5"
                  >
                    <td class="px-4 py-3 text-sm text-white/70">{{ formatDate(item.timestamp) }}</td>
                    <td class="px-4 py-3">
                      <span 
                        class="px-2 py-1 rounded text-xs font-medium"
                        :style="{ backgroundColor: sourceColors[item.source] + '33', color: sourceColors[item.source] }"
                      >
                        {{ item.source }}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm text-white/80 max-w-xs truncate">{{ item.reason }}</td>
                    <td class="px-4 py-3 text-right font-bold text-yellow-400">+<Points currency="zC" :n="item.amount" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHandoutsData } from '../../composables/useHandoutsData'
import Points from '../../components/Points.vue'
import zoskyZappersLogo from '../../assets/ttv/zoskyZappers.png'
import vodVoteLogo from '../../assets/ttv/vodVote.png'
import pixelPowerLogo from '../../assets/ttv/pixelPower.png'
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
import { Bar, Doughnut, Scatter } from 'vue-chartjs'

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

const route = useRoute()
const router = useRouter()

// Get username from query parameter
const username = computed(() => route.query.username || '')

// Handouts data composable
const {
  isLoading,
  error,
  loadedMonths,
  loadData,
  getUserHandouts,
  getUserRank,
  connectRealtime,
  isTwitchConnected
} = useHandoutsData()

// Connect to realtime on mount
onMounted(async () => {
  await loadData()
  // Auto-connect to Twitch chat for realtime updates
  try {
    await connectRealtime()
  } catch (err) {
    console.warn('Failed to connect to Twitch chat:', err)
  }
})

// Source colors
const sourceColors = {
  'zoskyZappers': 'rgb(59, 130, 246)',
  'squadRush': 'rgb(239, 68, 68)',
  'vodVote': 'rgb(34, 197, 94)',
  'art': 'rgb(168, 85, 247)',
  'chevos': 'rgb(234, 179, 8)',
  'voucher': 'rgb(236, 72, 153)',
  'manual': 'rgb(156, 163, 175)',
  'referral': 'rgb(20, 184, 166)',
  'sub': 'rgb(168, 85, 247)',
  'discoReact': 'rgb(88, 101, 242)',
  'vodFeedback': 'rgb(251, 146, 60)',
  'redeem': 'rgb(239, 68, 68)'
}

// Source logos (image) or icons (emoji)
const sourceLogos = {
  'zoskyZappers': zoskyZappersLogo,
  'vodVote': vodVoteLogo,
  'art': pixelPowerLogo
}

const sourceIcons = {
  'voucher': '💰',
  'referral': '👥',
  'sub': '⭐',
  'discoReact': '💬',
  'vodFeedback': '📝',
  'redeem': '🎮',
  'chevos': '🏆',
  'squadRush': '👊',
  'manual': '⚙️'
}

// Computed: User's handouts
const userHandouts = computed(() => getUserHandouts(username.value))

// Computed: User's rank
const userRank = computed(() => getUserRank(username.value))

// Computed: Total stats (excluding 'redeem' since those are spent, not earned)
const totalAmount = computed(() => 
  userHandouts.value
    .filter(h => h.source !== 'redeem')
    .reduce((sum, h) => sum + h.amount, 0)
)
const totalCount = computed(() => 
  userHandouts.value.filter(h => h.source !== 'redeem').length
)
const avgAmount = computed(() => totalCount.value > 0 ? Math.round(totalAmount.value / totalCount.value) : 0)
const activeDays = computed(() => new Set(userHandouts.value.map(h => h.date)).size)

// Computed: Game stats
const gameStats = computed(() => {
  const stats = {}
  
  userHandouts.value.forEach(item => {
    if (!stats[item.source]) {
      stats[item.source] = { count: 0, total: 0 }
    }
    stats[item.source].count++
    stats[item.source].total += item.amount
  })
  
  return Object.entries(stats).map(([source, data]) => ({
    source,
    count: data.count,
    total: data.total,
    avg: Math.round(data.total / data.count),
    percentage: totalAmount.value > 0 ? Math.round((data.total / totalAmount.value) * 100) : 0
  })).sort((a, b) => b.total - a.total)
})

// Computed: Insights
const insights = computed(() => {
  const patterns = []
  
  // Peak hour
  const hourTotals = {}
  userHandouts.value.forEach(item => {
    hourTotals[item.hour] = (hourTotals[item.hour] || 0) + item.amount
  })
  const peakHour = Object.entries(hourTotals).sort((a, b) => b[1] - a[1])[0]
  if (peakHour) {
    patterns.push({
      type: 'peak-hour',
      title: 'Peak Hour',
      description: `${String(peakHour[0]).padStart(2, '0')}:00 (${peakHour[1].toLocaleString()} zC)`,
      icon: '⏰'
    })
  }
  
  // Favorite day
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayTotals = {}
  userHandouts.value.forEach(item => {
    dayTotals[item.dayOfWeek] = (dayTotals[item.dayOfWeek] || 0) + 1
  })
  const favDay = Object.entries(dayTotals).sort((a, b) => b[1] - a[1])[0]
  if (favDay) {
    patterns.push({
      type: 'favorite-day',
      title: 'Best Day',
      description: `${dayNames[favDay[0]]} (${favDay[1]} wins)`,
      icon: '📅'
    })
  }
  
  // Top source
  const topGame = gameStats.value[0]
  if (topGame) {
    patterns.push({
      type: 'top-source',
      title: 'Top Game',
      description: `${topGame.source} (${topGame.total.toLocaleString()} zC)`,
      icon: '🎮'
    })
  }
  
  // Big wins
  const bigWins = userHandouts.value.filter(h => h.amount >= 100).length
  patterns.push({
    type: 'big-wins',
    title: 'Big Wins',
    description: `${bigWins} wins of 100+ zC`,
    icon: '💎'
  })
  
  // Source diversity
  const uniqueSources = new Set(userHandouts.value.map(h => h.source)).size
  patterns.push({
    type: 'diversity',
    title: 'Sources',
    description: `${uniqueSources} different games`,
    icon: '🎯'
  })
  
  return patterns
})

// Computed: Recent history (last 50)
const recentHistory = computed(() => 
  [...userHandouts.value].sort((a, b) => b.timestamp - a.timestamp).slice(0, 50)
)

// Computed: Daily chart data
const dailyChartData = computed(() => {
  const byDateAndSource = {}
  const sources = new Set()
  
  userHandouts.value.forEach(h => {
    if (!byDateAndSource[h.date]) byDateAndSource[h.date] = {}
    if (!byDateAndSource[h.date][h.source]) byDateAndSource[h.date][h.source] = 0
    byDateAndSource[h.date][h.source] += h.amount
    sources.add(h.source)
  })
  
  const dates = Object.keys(byDateAndSource).sort().slice(-14) // Last 14 days
  
  const datasets = Array.from(sources).map(source => ({
    label: source,
    data: dates.map(date => byDateAndSource[date]?.[source] || 0),
    backgroundColor: sourceColors[source] || 'rgb(100, 116, 139)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1
  }))
  
  return { labels: dates, datasets }
})

// Computed: Source pie chart data
const sourceChartData = computed(() => {
  const labels = gameStats.value.map(g => g.source)
  const data = gameStats.value.map(g => g.total)
  const colors = gameStats.value.map(g => sourceColors[g.source] || 'rgb(100, 116, 139)')
  
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

// Computed: Hourly chart data
const hourlyChartData = computed(() => {
  const hourTotals = Array(24).fill(0)
  
  userHandouts.value.forEach(h => {
    hourTotals[h.hour] += h.amount
  })
  
  return {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [{
      label: 'Earnings',
      data: hourTotals,
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }]
  }
})

// Computed: Activity timeline (scatter)
const activityTimelineData = computed(() => {
  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
  sevenDaysAgo.setHours(0, 0, 0, 0)
  const startTs = sevenDaysAgo.getTime()
  
  const bySource = {}
  
  userHandouts.value.forEach(h => {
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

// Chart options
const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top', labels: { color: 'rgba(255,255,255,0.8)', font: { size: 10 } } },
    tooltip: { backgroundColor: 'rgba(0,0,0,0.8)' }
  },
  scales: {
    x: { stacked: true, ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { color: 'rgba(255,255,255,0.1)' } },
    y: { stacked: true, ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { color: 'rgba(255,255,255,0.1)' } }
  }
}

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'right', labels: { color: 'rgba(255,255,255,0.8)' } },
    tooltip: { backgroundColor: 'rgba(0,0,0,0.8)' }
  }
}

const hourlyChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: 'rgba(0,0,0,0.8)' }
  },
  scales: {
    x: { ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { color: 'rgba(255,255,255,0.1)' } },
    y: { ticks: { color: 'rgba(255,255,255,0.6)' }, grid: { color: 'rgba(255,255,255,0.1)' } }
  }
}

const scatterChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top', labels: { color: 'rgba(255,255,255,0.8)', font: { size: 10 } } },
    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.9)',
      callbacks: {
        title: (ctx) => new Date(ctx[0].parsed.x).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
        label: (ctx) => [`${ctx.dataset.label}: ${ctx.raw.y} zC`, ctx.raw.reason || ''].filter(Boolean)
      }
    }
  },
  scales: {
    x: {
      type: 'time',
      time: { unit: 'day', displayFormats: { day: 'EEE MMM d' } },
      ticks: { color: 'rgba(255,255,255,0.6)' },
      grid: { color: 'rgba(255,255,255,0.1)' }
    },
    y: {
      beginAtZero: true,
      title: { display: true, text: 'zC Amount', color: 'rgba(255,255,255,0.6)' },
      ticks: { color: 'rgba(255,255,255,0.6)' },
      grid: { color: 'rgba(255,255,255,0.1)' }
    }
  }
}

// Methods
function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })
}

function exportToCSV() {
  const headers = ['Date', 'Source', 'Reason', 'Amount']
  const rows = userHandouts.value.map(h => [
    new Date(h.timestamp).toISOString(),
    h.source,
    `"${h.reason.replace(/"/g, '""')}"`,
    h.amount
  ])
  
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${username.value}-stats.csv`
  a.click()
  URL.revokeObjectURL(url)
}
</script>
