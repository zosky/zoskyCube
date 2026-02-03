<template>
  <div class="analytics min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-8 mt-8">
        <h1 class="text-4xl font-bold text-white">
          📊 zCube Analytics Dashboard
        </h1>
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
        <!-- Summary Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Distributed</div>
            <div class="text-3xl font-bold text-yellow-400">{{ totalDistributed.toLocaleString() }} zC</div>
            <div class="text-xs text-white/50 mt-1">Last 30 days</div>
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

        <!-- Daily Distribution by Source (Stacked Area Chart) -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">💰 Daily Distribution by Source</h2>
          <div class="h-96">
            <Line :data="dailyBySourceData" :options="chartOptions" />
          </div>
        </div>

        <!-- Top 10 Players Over Time (Stacked Area Chart) -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h2 class="text-2xl font-bold text-white mb-4">🏆 Top 10 Players - Daily Earnings</h2>
          <div class="h-96">
            <Line :data="dailyByPlayerData" :options="chartOptions" />
          </div>
        </div>

        <!-- Source Breakdown (Pie Chart) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-2xl font-bold text-white mb-4">🎮 Distribution by Source</h2>
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line, Doughnut, Bar } from 'vue-chartjs'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
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

// State
const rawData = ref([])
const isLoading = ref(true)
const error = ref(null)

// Load CSV data
async function loadData() {
  try {
    isLoading.value = true
    error.value = null

    // Dynamically load the current month's file: handouts-YYYY-MM.csv
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const fileName = `/data/handouts-${year}-${month}.csv`
    const response = await fetch(fileName)
    if (!response.ok) {
      throw new Error('Failed to load data. Run: npm run analytics:export')
    }

    const csvText = await response.text()
    const lines = csvText.trim().split('\n')
    const headers = lines[0].split(',')

    // Parse CSV (skip header)
    rawData.value = lines.slice(1).map(line => {
      // Handle quoted fields
      const values = []
      let current = ''
      let inQuotes = false

      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
          values.push(current)
          current = ''
        } else {
          current += char
        }
      }
      values.push(current)

      return {
        username: values[0],
        amount: parseInt(values[1]),
        reason: values[2],
        source: values[3],
        timestamp: parseInt(values[4]),
        date: values[5],
        day: values[6]
      }
    })

    console.log(`✅ Loaded ${rawData.value.length} handouts`)
  } catch (err) {
    console.error('❌ Error loading data:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

// Computed stats
const totalDistributed = computed(() => 
  rawData.value.reduce((sum, h) => sum + h.amount, 0)
)

const uniquePlayers = computed(() => 
  new Set(rawData.value.map(h => h.username)).size
)

const totalHandouts = computed(() => rawData.value.length)

const avgPerDay = computed(() => {
  const dates = new Set(rawData.value.map(h => h.date))
  return dates.size > 0 ? Math.round(totalDistributed.value / dates.size) : 0
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
