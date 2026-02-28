/**
 * Handouts Data Composable
 * Loads handout data from CSV files (current month + previous month)
 * Plus StreamElements leaderboard for current balances
 * Plus realtime Twitch chat data for live updates
 * No Firestore dependency - uses static CSV exports + SE API + IRC
 * 
 * Features:
 * - Hourly CSV refresh with cache busting (?t=timestamp)
 * - Realtime IRC data pruning on refresh (removes overlap with CSV)
 * - Automatic refresh timer (every hour on the hour)
 */

import { ref, computed, watch, onUnmounted } from 'vue'
import { useTwitchChat } from './useTwitchChat'

// StreamElements config
const SE_CHANNEL_ID = '668816ac484cab966df79977'

// Refresh configuration
const REFRESH_INTERVAL_MS = 60 * 60 * 1000 // 1 hour

// Shared state across all components using this composable
const allHandouts = ref([])
const seLeaderboard = ref([]) // StreamElements current balances
const isLoading = ref(false)
const isRefreshing = ref(false) // Separate flag for refresh vs initial load
const error = ref(null)
const loadedMonths = ref([])
const lastRefreshTime = ref(null)
let refreshTimer = null

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
 * Load CSV file for a specific month from zoskyCube-archive repo
 * Dev: proxied via Vite to https://archive.zoskycube.com/
 * Prod: direct fetch from GitHub Pages (same path works!)
 * @param {boolean} bustCache - If true, append timestamp to URL for cache busting
 */
async function loadMonthCSV(year, month, bustCache = false) {
  const monthStr = String(month).padStart(2, '0')
  // In dev, Vite proxies archive.zoskycube.com >> GitHub Pages w/ CNAME file
  const isDev = import.meta.env.MODE === 'development'
  const fPreName = isDev ?'/zoskyCube-archive' : '//archive.zoskycube.com'
  let fileName = `${fPreName}/data/handouts-${year}-${monthStr}.csv`
  
  // Cache busting for hourly refresh
  if (bustCache) {
    fileName += `?t=${Date.now()}`
  }
  
  try {
    const response = await fetch(fileName)
    if (!response.ok) {
      console.warn(`⚠️ CSV not found: ${fileName}`)
      return []
    }
    
    const csvText = await response.text()
    const records = parseCSV(csvText)
    console.log(`✅ Loaded ${records.length} records from ${fileName}${bustCache ? ' (cache-busted)' : ''}`)
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
 * @param {boolean} isRefresh - If true, bust cache and prune realtime data
 */
async function loadData(isRefresh = false) {
  if (isLoading.value || isRefreshing.value) return
  
  // Skip if already loaded and not a refresh
  if (!isRefresh && allHandouts.value.length > 0) {
    console.log('📦 Using cached handouts data')
    return
  }
  
  if (isRefresh) {
    isRefreshing.value = true
    console.log('🔄 Refreshing CSV data with cache bust...')
  } else {
    isLoading.value = true
  }
  error.value = null
  
  try {
    // Load all CSVs in parallel (with cache busting on refresh)
    const csvPromises = AVAILABLE_MONTHS.map(({ year, month }) => 
      loadMonthCSV(year, month, isRefresh)
    )
    
    // Fire SE leaderboard load in parallel
    const sePromise = loadSELeaderboard()
    
    // Wait for all CSV loads
    const allCsvData = await Promise.all(csvPromises)
    await sePromise // Ensure SE data is loaded too
    
    // Combine all months and sort by timestamp (newest first)
    const newHandouts = allCsvData
      .flat()
      .sort((a, b) => b.timestamp - a.timestamp)
    
    // Get the newest timestamp from CSV data for pruning realtime
    const newestCsvTimestamp = newHandouts.length > 0 ? newHandouts[0].timestamp : 0
    
    allHandouts.value = newHandouts
    lastRefreshTime.value = Date.now()
    
    // Track which months were loaded
    loadedMonths.value = AVAILABLE_MONTHS.map(({ year, month }) => 
      `${year}-${String(month).padStart(2, '0')}`
    )
    
    console.log(`📊 Total handouts loaded: ${allHandouts.value.length} from ${AVAILABLE_MONTHS.length} months`)
    
    // Return newest timestamp for realtime pruning
    return newestCsvTimestamp
  } catch (err) {
    console.error('❌ Error loading handouts:', err)
    error.value = err.message
    return 0
  } finally {
    isLoading.value = false
    isRefreshing.value = false
  }
}

/**
 * Start hourly refresh timer
 * Schedules refresh to run on the hour (e.g., 2:00, 3:00, 4:00)
 */
function startRefreshTimer() {
  if (refreshTimer) return // Already running
  
  // Calculate time until next hour
  const now = new Date()
  const msUntilNextHour = (60 - now.getMinutes()) * 60 * 1000 - now.getSeconds() * 1000 - now.getMilliseconds()
  
  console.log(`⏰ Next CSV refresh in ${Math.round(msUntilNextHour / 60000)} minutes`)
  
  // First timeout to align to the hour, then interval
  setTimeout(() => {
    // Trigger first refresh
    triggerRefresh()
    
    // Then set up hourly interval
    refreshTimer = setInterval(triggerRefresh, REFRESH_INTERVAL_MS)
  }, msUntilNextHour + 5000) // Add 5 seconds buffer for GitHub Pages to update
}

/**
 * Stop refresh timer
 */
function stopRefreshTimer() {
  if (refreshTimer) {
    clearInterval(refreshTimer)
    refreshTimer = null
    console.log('⏹️ Stopped CSV refresh timer')
  }
}

/**
 * Trigger a refresh - called by timer or manually
 * This is defined later in useHandoutsData to access pruneRealtimeHandouts
 */
let triggerRefresh = null

export function useHandoutsData() {
  // Game sources for per-game stats
  const gameSources = ['zoskyZappers', 'vodVote', 'art', 'voucher', 'chevos']
  
  // Get realtime Twitch chat data
  const { 
    realtimeHandouts, 
    realtimeStats,
    connect: connectTwitchChat,
    isConnected: isTwitchConnected,
    pruneRealtimeHandouts
  } = useTwitchChat()
  
  // Wire up the triggerRefresh function now that we have access to pruning
  triggerRefresh = async () => {
    console.log('🔄 Hourly refresh triggered')
    const newestCsvTimestamp = await loadData(true)
    
    // Prune realtime data that's now covered by CSV
    if (newestCsvTimestamp > 0) {
      pruneRealtimeHandouts(newestCsvTimestamp)
    }
  }
  
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
   * Force reload data (clears cache)
   */
  async function reloadData() {
    allHandouts.value = []
    await loadData()
  }
  
  /**
   * Manually trigger a refresh with cache busting and pruning
   */
  async function refreshData() {
    const newestCsvTimestamp = await loadData(true)
    if (newestCsvTimestamp > 0) {
      pruneRealtimeHandouts(newestCsvTimestamp)
    }
  }
  
  /**
   * Connect to Twitch chat for realtime updates
   * Also starts the hourly refresh timer
   */
  async function connectRealtime() {
    // Start refresh timer when connecting to realtime
    startRefreshTimer()
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
    isRefreshing,
    error,
    loadedMonths,
    lastRefreshTime,
    
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
    refreshData,
    getUserHandouts,
    getUserRank,
    connectRealtime,
    setDateRange,
    toggleNowMode,
    startRefreshTimer,
    stopRefreshTimer
  }
}
