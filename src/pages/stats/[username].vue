<template>
  <div class="user-stats-page min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb mb-6 print:hidden">
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
      <div v-else-if="historyData.length === 0" class="bg-white/10 backdrop-blur-md rounded-xl p-12 ring-1 ring-white/20 text-center text-white">
        <h2 class="text-2xl font-bold mb-4">No Data Found</h2>
        <p class="mb-6">No handout history found for {{ username }}</p>
        <button @click="$router.push('/stats')" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          ← Back to Leaderboard
        </button>
      </div>
      
      <!-- Stats Content -->
      <div v-else class="stats-content">
        <!-- Header with Export Toolbar -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 class="text-4xl font-bold text-white">
            📊 {{ username }}'s Stats
          </h1>
          
          <div class="export-toolbar flex gap-2 print:hidden">
            <button 
              @click="exportToCSV(username, historyData)" 
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
            >
              📥 Export CSV
            </button>
            <button 
              @click="printToPDF()" 
              class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
            >
              📄 Print PDF
            </button>
            <button 
              @click="clearCacheAndReload()" 
              class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
            >
              🗑️ Clear Cache
            </button>
          </div>
        </div>
        
        <!-- Summary Cards -->
        <section class="mb-8">
          <SummaryCards :data="historyData" />
        </section>
        
        <!-- Insights -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🔍 Insights</h2>
          <InsightsGrid :insights="insights" />
        </section>
        
        <!-- Charts Row -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <!-- Source Distribution -->
          <section class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-xl font-bold text-white mb-4">📊 Source Distribution</h2>
            <SourcePieChart :data="historyData" />
          </section>
          
          <!-- Hourly Activity -->
          <section class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h2 class="text-xl font-bold text-white mb-4">🕐 Hourly Activity</h2>
            <HourlyHeatmap :data="pivotData" />
          </section>
        </div>
        
        <!-- Game Breakdown -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">📊 Breakdown by Source</h2>
          <GameBreakdown :stats="gameStats" />
        </section>
        
        <!-- Reason Breakdown -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🎯 Breakdown by Reason</h2>
          <ReasonBreakdown :stats="reasonStats" />
        </section>
        
        <!-- Weekly Chart -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">📅 Weekly Trends</h2>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <WeeklyChart ref="weeklyChart" :data="weeklyStats" />
          </div>
        </section>
        
        <!-- Monthly Chart -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">📆 Monthly Trends</h2>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <MonthlyChart ref="monthlyChart" :data="monthlyStats" />
          </div>
        </section>
        
        <!-- Pivot Table -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">🕐 Hourly × Source Pivot Table</h2>
          <PivotTable :data="pivotData" :sources="sources" />
        </section>
        
        <!-- Recent History -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">📜 Recent Activity (Last 10 Entries)</h2>
          <RecentHistory :data="historyData" />
        </section>
        
        <!-- Footer Info -->
        <footer class="text-center text-white/50 text-sm mt-12 print:hidden">
          <p>Last cache update: {{ cacheTimestamp }}</p>
          <p class="mt-2">Data updates in real-time while viewing</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserHistory } from '../../composables/useUserHistory'
import { useExport } from '../../composables/useExport'

const route = useRoute()
const router = useRouter()

// Get username from route params
const username = computed(() => route.params.username)

// User history composable
const {
  historyData,
  isLoading,
  error,
  loadUserHistory,
  setupRealtimeListener,
  cleanupListener,
  clearCache
} = useUserHistory()

// Export composable
const { exportToCSV, exportChartToPNG, printToPDF } = useExport()

// Chart refs
const weeklyChart = ref(null)
const monthlyChart = ref(null)

// Load data on mount
onMounted(async () => {
  await loadUserHistory(username.value)
  setupRealtimeListener()
})

// Cleanup on unmount
onUnmounted(() => {
  cleanupListener()
})

// Watch for username changes
watch(username, async (newUsername) => {
  cleanupListener()
  await loadUserHistory(newUsername)
  setupRealtimeListener()
})

// Computed: Cache timestamp
const cacheTimestamp = computed(() => {
  const cacheKey = `zoskyCube_userHistory_${username.value}`
  const cached = localStorage.getItem(cacheKey)
  if (cached) {
    const cacheData = JSON.parse(cached)
    return new Date(cacheData.lastUpdated).toLocaleString()
  }
  return 'Never'
})

// Computed: Total stats
const totalAmount = computed(() => historyData.value.reduce((sum, h) => sum + h.amount, 0))
const totalCount = computed(() => historyData.value.length)
const avgAmount = computed(() => totalCount.value > 0 ? Math.round(totalAmount.value / totalCount.value) : 0)

// Computed: Game stats (by source)
const gameStats = computed(() => {
  const stats = {}
  
  historyData.value.forEach(item => {
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
    percentage: Math.round((data.total / totalAmount.value) * 100)
  })).sort((a, b) => b.total - a.total)
})

// Computed: Reason stats
const reasonStats = computed(() => {
  const stats = {}
  
  historyData.value.forEach(item => {
    // Clean up reason by extracting meaningful parts
    let cleanReason = item.reason || 'Unknown'
    
    // Extract "winning @ vodVote" type patterns (remove number prefix)
    const winningMatch = cleanReason.match(/winning\s+@\s+\w+/i)
    if (winningMatch) {
      cleanReason = winningMatch[0]
    } else {
      // For other patterns, take only part before colon (for "AI Art word: banana" -> "AI Art word")
      cleanReason = cleanReason.split(':')[0].trim()
    }
    
    if (!stats[cleanReason]) {
      stats[cleanReason] = { count: 0, total: 0, sources: {} }
    }
    stats[cleanReason].count++
    stats[cleanReason].total += item.amount
    stats[cleanReason].sources[item.source] = (stats[cleanReason].sources[item.source] || 0) + 1
  })
  
  return Object.entries(stats).map(([reason, data]) => ({
    reason,
    count: data.count,
    total: data.total,
    topSource: Object.entries(data.sources).sort((a, b) => b[1] - a[1])[0][0]
  })).sort((a, b) => b.total - a.total)
})

// Computed: Weekly stats
const weeklyStats = computed(() => {
  const weeks = {}
  
  historyData.value.forEach(item => {
    const date = new Date(item.timestamp.seconds * 1000)
    const weekStart = getWeekStart(date)
    const weekKey = weekStart.toISOString().split('T')[0]
    
    if (!weeks[weekKey]) {
      weeks[weekKey] = { count: 0, total: 0 }
    }
    
    weeks[weekKey].count++
    weeks[weekKey].total += item.amount
  })
  
  return Object.entries(weeks)
    .map(([week, data]) => ({
      week,
      count: data.count,
      total: data.total,
      avg: Math.round(data.total / data.count)
    }))
    .sort((a, b) => new Date(a.week) - new Date(b.week))
})

// Computed: Monthly stats
const monthlyStats = computed(() => {
  const months = {}
  
  historyData.value.forEach(item => {
    const date = new Date(item.timestamp.seconds * 1000)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    
    if (!months[monthKey]) {
      months[monthKey] = { count: 0, total: 0, days: new Set() }
    }
    
    months[monthKey].count++
    months[monthKey].total += item.amount
    months[monthKey].days.add(item.date)
  })
  
  return Object.entries(months)
    .map(([month, data]) => ({
      month,
      count: data.count,
      total: data.total,
      activeDays: data.days.size,
      avgPerDay: Math.round(data.total / data.days.size)
    }))
    .sort((a, b) => a.month.localeCompare(b.month))
})

// Computed: Pivot data (hour × source)
const pivotData = computed(() => {
  const pivot = {}
  
  historyData.value.forEach(item => {
    const hour = item.hour
    if (!pivot[hour]) pivot[hour] = {}
    pivot[hour][item.source] = (pivot[hour][item.source] || 0) + item.amount
  })
  
  return pivot
})

// Computed: All sources (for pivot table)
const sources = computed(() => {
  const sourcesSet = new Set(historyData.value.map(h => h.source))
  return Array.from(sourcesSet).sort()
})

// Computed: Insights
const insights = computed(() => {
  const patterns = []
  
  // Peak hour detection
  const hourTotals = {}
  historyData.value.forEach(item => {
    hourTotals[item.hour] = (hourTotals[item.hour] || 0) + item.amount
  })
  const peakHour = Object.entries(hourTotals).sort((a, b) => b[1] - a[1])[0]
  if (peakHour) {
    patterns.push({
      type: 'peak-hour',
      title: 'Peak Activity Hour',
      description: `Most active at ${String(peakHour[0]).padStart(2, '0')}:00 with ${peakHour[1]} zC earned`,
      icon: '⏰'
    })
  }
  
  // Favorite day detection
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayTotals = {}
  historyData.value.forEach(item => {
    dayTotals[item.dayOfWeek] = (dayTotals[item.dayOfWeek] || 0) + 1
  })
  const favDay = Object.entries(dayTotals).sort((a, b) => b[1] - a[1])[0]
  if (favDay) {
    patterns.push({
      type: 'favorite-day',
      title: 'Most Active Day',
      description: `${dayNames[favDay[0]]} with ${favDay[1]} wins`,
      icon: '📅'
    })
  }
  
  // Streak detection
  const dates = [...new Set(historyData.value.map(h => h.date))].sort()
  let currentStreak = 1
  let maxStreak = 1
  for (let i = 1; i < dates.length; i++) {
    const prevDate = new Date(dates[i - 1])
    const currDate = new Date(dates[i])
    const dayDiff = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24))
    
    if (dayDiff === 1) {
      currentStreak++
      maxStreak = Math.max(maxStreak, currentStreak)
    } else {
      currentStreak = 1
    }
  }
  patterns.push({
    type: 'streak',
    title: 'Longest Win Streak',
    description: `${maxStreak} consecutive days with wins`,
    icon: '🔥'
  })
  
  // Source diversity
  const uniqueSources = new Set(historyData.value.map(h => h.source)).size
  patterns.push({
    type: 'diversity',
    title: 'Source Diversity',
    description: `Earned zCubes from ${uniqueSources} different sources`,
    icon: '🎯'
  })
  
  // Big wins
  const bigWins = historyData.value.filter(h => h.amount >= 100).length
  if (bigWins > 0) {
    patterns.push({
      type: 'big-wins',
      title: 'Big Wins',
      description: `${bigWins} wins of 100+ zC`,
      icon: '💎'
    })
  }
  
  return patterns
})

// Helper: Get week start (Monday)
function getWeekStart(date) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  return new Date(d.setDate(diff))
}

// Helper: Clear cache and reload
function clearCacheAndReload() {
  clearCache()
  location.reload()
}
</script>

<style scoped>
@media print {
  .breadcrumb,
  .export-toolbar,
  footer {
    display: none;
  }
}
</style>
