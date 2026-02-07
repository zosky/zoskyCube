/**
 * Handouts Data Composable
 * Loads handout data from CSV files (current month + previous month)
 * Plus StreamElements leaderboard for current balances
 * Plus realtime Twitch chat data for live updates
 * No Firestore dependency - uses static CSV exports + SE API + IRC
 */

import { ref, computed, watch } from 'vue'
import { useTwitchChat } from './useTwitchChat'

// StreamElements config
const SE_CHANNEL_ID = '668816ac484cab966df79977'

// Shared state across all components using this composable
const allHandouts = ref([])
const seLeaderboard = ref([]) // StreamElements current balances
const isLoading = ref(false)
const error = ref(null)
const loadedMonths = ref([])

// Date range filter state
const dateFrom = ref(null) // null = use earliest data
const dateTo = ref(null)   // null = "now" mode (include realtime)
const isNowMode = ref(true) // When true, dateTo tracks "now" and includes realtime

// Computed: Min/max available dates from loaded data
const availableDateRange = computed(() => {
  if (allHandouts.value.length === 0) {
    return { min: null, max: null }
  }
  
  // allHandouts is sorted newest first, so:
  const newest = allHandouts.value[0]?.timestamp
  const oldest = allHandouts.value[allHandouts.value.length - 1]?.timestamp
  
  return {
    min: oldest ? new Date(oldest).toISOString().split('T')[0] : null,
    max: newest ? new Date(newest).toISOString().split('T')[0] : null
  }
})

/**
 * Parse CSV text into array of handout objects
 */
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []
  
  // Skip header
  return lines.slice(1).map(line => {
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
      username: values[0]?.toLowerCase() || '',
      amount: parseInt(values[1]) || 0,
      reason: values[2] || '',
      source: values[3] || '',
      timestamp: parseInt(values[4]) || 0,
      date: values[5] || '',
      day: values[6] || '',
      // Computed fields for compatibility with existing components
      hour: new Date(parseInt(values[4])).getHours(),
      dayOfWeek: new Date(parseInt(values[4])).getDay()
    }
  }).filter(h => h.username && h.timestamp)
}

/**
 * Load CSV file for a specific month
 */
async function loadMonthCSV(year, month) {
  const monthStr = String(month).padStart(2, '0')
  // Use BASE_URL to handle /zoskyCube/ prefix in production (GitHub Pages)
  const baseUrl = import.meta.env.BASE_URL || '/'
  const fileName = `${baseUrl}data/handouts-${year}-${monthStr}.csv`
  
  try {
    const response = await fetch(fileName)
    if (!response.ok) {
      console.warn(`⚠️ CSV not found: ${fileName}`)
      return []
    }
    
    const csvText = await response.text()
    const records = parseCSV(csvText)
    console.log(`✅ Loaded ${records.length} records from ${fileName}`)
    return records
  } catch (err) {
    console.warn(`⚠️ Error loading ${fileName}:`, err.message)
    return []
  }
}

/**
 * Load StreamElements leaderboard (top 100 by default, paginated)
 */
async function loadSELeaderboard() {
  try {
    // SE API returns top 100 per request, we'll get top 200 for better coverage
    const [page1, page2] = await Promise.all([
      fetch(`https://api.streamelements.com/kappa/v2/points/${SE_CHANNEL_ID}/top?limit=100&offset=0`),
      fetch(`https://api.streamelements.com/kappa/v2/points/${SE_CHANNEL_ID}/top?limit=100&offset=100`)
    ])
    
    const data1 = page1.ok ? await page1.json() : { users: [] }
    const data2 = page2.ok ? await page2.json() : { users: [] }
    
    // Combine and normalize usernames to lowercase
    const combined = [...(data1.users || []), ...(data2.users || [])]
      .map(u => ({
        username: u.username.toLowerCase(),
        points: u.points,
        rank: u.rank
      }))
    
    seLeaderboard.value = combined
    console.log(`✅ Loaded ${combined.length} users from StreamElements leaderboard`)
  } catch (err) {
    console.warn('⚠️ Error loading SE leaderboard:', err.message)
    seLeaderboard.value = []
  }
}

/**
 * Known CSV files available in public/data/
 * This list is used to discover all available months
 * TODO: Replace with aggregate monthly summary files for performance
 */
const AVAILABLE_MONTHS = [
  { year: 2025, month: 11 },
  { year: 2025, month: 12 },
  { year: 2026, month: 1 },
  { year: 2026, month: 2 }
]

/**
 * Load all available CSV files + SE leaderboard
 */
async function loadData() {
  if (isLoading.value) return
  if (allHandouts.value.length > 0) {
    console.log('📦 Using cached handouts data')
    return
  }
  
  isLoading.value = true
  error.value = null
  
  try {
    // Load all CSVs in parallel
    const csvPromises = AVAILABLE_MONTHS.map(({ year, month }) => 
      loadMonthCSV(year, month)
    )
    
    // Fire SE leaderboard load in parallel
    const sePromise = loadSELeaderboard()
    
    // Wait for all CSV loads
    const allCsvData = await Promise.all(csvPromises)
    await sePromise // Ensure SE data is loaded too
    
    // Combine all months and sort by timestamp (newest first)
    allHandouts.value = allCsvData
      .flat()
      .sort((a, b) => b.timestamp - a.timestamp)
    
    // Track which months were loaded
    loadedMonths.value = AVAILABLE_MONTHS.map(({ year, month }) => 
      `${year}-${String(month).padStart(2, '0')}`
    )
    
    console.log(`📊 Total handouts loaded: ${allHandouts.value.length} from ${AVAILABLE_MONTHS.length} months`)
  } catch (err) {
    console.error('❌ Error loading handouts:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

export function useHandoutsData() {
  // Game sources for per-game stats
  const gameSources = ['zoskyZappers', 'vodVote', 'art', 'voucher', 'chevos']
  
  // Get realtime Twitch chat data
  const { 
    realtimeHandouts, 
    realtimeStats,
    connect: connectTwitchChat,
    isConnected: isTwitchConnected
  } = useTwitchChat()
  
  // Computed: Filter handouts by date range
  const filteredHandouts = computed(() => {
    let result = allHandouts.value
    
    // Apply date filters
    if (dateFrom.value) {
      const fromTimestamp = new Date(dateFrom.value).getTime()
      result = result.filter(h => h.timestamp >= fromTimestamp)
    }
    
    if (dateTo.value && !isNowMode.value) {
      // Add 24 hours to include the entire "to" day
      const toTimestamp = new Date(dateTo.value).getTime() + (24 * 60 * 60 * 1000)
      result = result.filter(h => h.timestamp <= toTimestamp)
    }
    
    return result
  })
  
  // Computed: Include realtime only in "now" mode
  const includeRealtime = computed(() => isNowMode.value)
  
  // Computed: Combine CSV handouts with realtime handouts (respecting date filter)
  const combinedHandouts = computed(() => {
    // Only include realtime if in "now" mode
    if (includeRealtime.value) {
      return [...realtimeHandouts.value, ...filteredHandouts.value]
    }
    return filteredHandouts.value
  })
  
  // Computed: Get unique usernames with their stats (CSV + realtime)
  const leaderboard = computed(() => {
    const userStats = {}
    
    // First, process filtered CSV handouts (respects date range)
    filteredHandouts.value.forEach(h => {
      if (!userStats[h.username]) {
        userStats[h.username] = {
          username: h.username,
          totalAmount: 0,
          totalCount: 0,
          lastActivity: 0,
          currentBalance: 0,
          realtimeAmount: 0, // Track realtime additions separately
          realtimeCount: 0,
          // Per-game stats
          byGame: {}
        }
        // Initialize per-game counters
        gameSources.forEach(g => {
          userStats[h.username].byGame[g] = { amount: 0, count: 0 }
        })
      }
      
      // Exclude 'redeem' from totals (negative values = spent, not earned)
      if (h.source !== 'redeem') {
        userStats[h.username].totalAmount += h.amount
        userStats[h.username].totalCount++
      }
      
      if (h.timestamp > userStats[h.username].lastActivity) {
        userStats[h.username].lastActivity = h.timestamp
      }
      
      // Track per-game stats (including redeem for breakdown display)
      if (h.source && userStats[h.username].byGame[h.source]) {
        userStats[h.username].byGame[h.source].amount += h.amount
        userStats[h.username].byGame[h.source].count++
      }
    })
    
    // Then, add realtime handouts on top (only in "now" mode)
    if (includeRealtime.value) {
      realtimeHandouts.value.forEach(h => {
        if (!userStats[h.username]) {
        userStats[h.username] = {
          username: h.username,
          totalAmount: 0,
          totalCount: 0,
          lastActivity: 0,
          currentBalance: 0,
          realtimeAmount: 0,
          realtimeCount: 0,
          byGame: {}
        }
        gameSources.forEach(g => {
          userStats[h.username].byGame[g] = { amount: 0, count: 0 }
        })
      }
      
      // Exclude 'redeem' from totals (negative values = spent, not earned)
      if (h.source !== 'redeem') {
        userStats[h.username].totalAmount += h.amount
        userStats[h.username].totalCount++
        userStats[h.username].realtimeAmount += h.amount
        userStats[h.username].realtimeCount++
      }
      
      if (h.timestamp > userStats[h.username].lastActivity) {
        userStats[h.username].lastActivity = h.timestamp
      }
      
      // Track per-game stats (including redeem for breakdown display)
      if (h.source && userStats[h.username].byGame[h.source]) {
        userStats[h.username].byGame[h.source].amount += h.amount
        userStats[h.username].byGame[h.source].count++
      }
    })
    } // End realtime block
    
    // Merge in SE leaderboard data for current balances
    const seMap = {}
    seLeaderboard.value.forEach(u => {
      seMap[u.username] = u.points
    })
    
    return Object.values(userStats)
      .map(user => ({
        ...user,
        currentBalance: seMap[user.username] || 0,
        avgAmount: user.totalCount > 0 
          ? Math.round(user.totalAmount / user.totalCount) 
          : 0
      }))
      .sort((a, b) => b.currentBalance - a.currentBalance) // Sort by current balance
  })
  
  // Computed: Total distributed (respecting date filter + realtime in now mode)
  // Excludes 'redeem' source since those are spent points, not earned
  const totalDistributed = computed(() => {
    const csvTotal = filteredHandouts.value
      .filter(h => h.source !== 'redeem')
      .reduce((sum, h) => sum + h.amount, 0)
    const realtimeTotal = includeRealtime.value 
      ? realtimeHandouts.value
          .filter(h => h.source !== 'redeem')
          .reduce((sum, h) => sum + h.amount, 0) 
      : 0
    return csvTotal + realtimeTotal
  })
  
  // Computed: Realtime total only (for "since page load" indicator)
  // Excludes 'redeem' source
  const realtimeTotalDistributed = computed(() => 
    realtimeHandouts.value
      .filter(h => h.source !== 'redeem')
      .reduce((sum, h) => sum + h.amount, 0)
  )
  
  // Computed: Unique player count
  const uniquePlayers = computed(() => leaderboard.value.length)
  
  // Computed: Average per player
  const avgPerPlayer = computed(() => 
    uniquePlayers.value > 0 
      ? Math.round(totalDistributed.value / uniquePlayers.value) 
      : 0
  )
  
  /**
   * Get handouts for a specific user (respects date filter + realtime in now mode)
   */
  function getUserHandouts(username) {
    if (!username) return []
    const lowerUsername = username.toLowerCase()
    // Use combinedHandouts which respects date filter and includes realtime
    return combinedHandouts.value.filter(h => h.username === lowerUsername)
  }
  
  /**
   * Get user rank
   */
  function getUserRank(username) {
    if (!username) return 0
    const lowerUsername = username.toLowerCase()
    const idx = leaderboard.value.findIndex(u => u.username === lowerUsername)
    return idx >= 0 ? idx + 1 : 0
  }
  
  /**
   * Force reload data
   */
  async function reloadData() {
    allHandouts.value = []
    await loadData()
  }
  
  /**
   * Connect to Twitch chat for realtime updates
   */
  async function connectRealtime() {
    return await connectTwitchChat()
  }
  
  /**
   * Set date range filter
   * @param {string|null} from - Start date (YYYY-MM-DD) or null for earliest
   * @param {string|null} to - End date (YYYY-MM-DD) or null for "now" mode
   * @param {boolean} nowMode - If true, include realtime data and ignore "to" date
   */
  function setDateRange(from, to, nowMode = true) {
    dateFrom.value = from
    dateTo.value = to
    isNowMode.value = nowMode
  }
  
  /**
   * Toggle "now" mode - when enabled, includes realtime data
   */
  function toggleNowMode(enabled) {
    isNowMode.value = enabled
    if (enabled) {
      dateTo.value = null
    }
  }
  
  return {
    // State
    allHandouts,
    combinedHandouts,
    filteredHandouts,
    isLoading,
    error,
    loadedMonths,
    
    // Date filter state
    dateFrom,
    dateTo,
    isNowMode,
    availableDateRange,
    
    // Realtime state
    realtimeHandouts,
    realtimeStats,
    isTwitchConnected,
    realtimeTotalDistributed,
    
    // Computed
    leaderboard,
    totalDistributed,
    uniquePlayers,
    avgPerPlayer,
    
    // Methods
    loadData,
    reloadData,
    getUserHandouts,
    getUserRank,
    connectRealtime,
    setDateRange,
    toggleNowMode
  }
}
