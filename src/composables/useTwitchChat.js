/**
 * Twitch Chat Composable
 * Anonymous connection to Twitch chat for realtime stats tracking
 * Parses zoskyCube bot responses to track in-memory game statistics
 * 
 * Usage:
 *   const { connect, realtimeStats, realtimeHandouts, isConnected } = useTwitchChat()
 *   await connect() // Auto-connects to #zoskycube
 *   
 * Patterns Tracked:
 *   - 🗳️ vodVote entries (+75 per vote)
 *   - 🚦 vodVote starts (+86)
 *   - 🎉 vodVote wins (+722)
 *   - 🎨 pixelPower submissions (+variable)
 *   - ⚡ zoskyZappers wins/losses
 *   - 🦍 zoskyZappers match starts
 *   - 🏆 Steam achievement unlocks
 *   - 💀⚰️ Death counter events
 *   - 💊 dailyDose redemptions
 *   - ✅ Voucher redemptions
 *   - 🏁 Game session end summaries
 */

import { ref, reactive, computed, onUnmounted, shallowRef } from 'vue'

// Twitch channel to monitor
const CHANNEL = 'zoskycube'
const BOT_USERNAME = 'zoskycube' // Bot responses come from this username

// Singleton state - shared across all component instances
const isConnected = ref(false)
const isConnecting = ref(false)
const connectionError = ref(null)
const lastMessage = ref(null)
const messageLog = shallowRef([]) // Last N messages for debugging
const MAX_LOG_SIZE = 500

// Realtime handouts - mirrored structure to CSV handouts
const realtimeHandouts = ref([])

// Realtime per-user stats (aggregated)
const realtimeStats = reactive({
  byUser: new Map(), // username -> { totalAmount, totalCount, byGame: { vodVote, art, zoskyZappers... } }
})

// TMI client reference
let client = null

/**
 * Pattern Definitions - Matching IRC Log Analyzer patterns
 * Updated to match all variations from overlay app and cloud functions
 */
const PATTERNS = {
  // VOD Vote patterns
  vodvote_entry: /🗳️ @([a-zA-Z0-9_]+) \+(\d+) = [\d.]+k? zoskycUbe vodVoted 4 "([^"]+)"/,
  vodvote_start: /🚦 @([a-zA-Z0-9_]+) \+(\d+) = [\d.]+k? zoskycUbe reStarted vodVote!/,
  vodvote_start_alt: /🚦 zoskycCubeGG @([a-zA-Z0-9_]+) started a new game/,
  vodvote_win: /🎉 \+(\d+) @([a-zA-Z0-9_]+) for picking "([^"]+)"/,
  vodvote_unpicked: /😢 No one picked "([^"]+)", & "([^"]+)" was picked the most/,
  
  // Pixel Power / Art patterns
  art_success: /🎨 @([a-zA-Z0-9_]+) ✅ '([^']+)'! \+(\d+) zoskycUbe = [\d.]+k? zoskycUbe/,
  art_success_alt: /🎨 @([a-zA-Z0-9_]+) \+(\d+) = [\d.]+k? zoskycUbe for "([^"]+)"/,
  art_penalty: /🎨 @([a-zA-Z0-9_]+) 🟨 (.+)/,
  art_wrong_letter: /🔤 @([a-zA-Z0-9_]+) each round needs words starting with the letter on stream!/,
  art_already_submitted: /🔄 @([a-zA-Z0-9_]+) You've added your word this round!/,
  art_not_dictionary: /📖 @([a-zA-Z0-9_]+) "([^"]+)" is not a valid/,
  art_duplicate: /❌ @([a-zA-Z0-9_]+) Word already submitted recently/,
  
  // zoskyZappers patterns
  zz_match_start: /🦍 goTime! ([a-zA-Z0-9_]+) vs ([a-zA-Z0-9_]+)\./,
  zz_pve_start: /🤖 PvE started: ([a-zA-Z0-9_]+) vs AI/,
  zz_win: /⚡ ✅ @([a-zA-Z0-9_]+).*?(\d+) Ws? win: (\d+)(?:\+(\d+))? = (\d+) zoskycUbe/,
  zz_win_first: /⚡ ✅ @([a-zA-Z0-9_]+) 🎉 1st W win: (\d+) zoskycUbe = (\d+) zoskycUbe/,
  zz_loss: /⚡ ☠️ @([a-zA-Z0-9_]+) \+(\d+) zoskycUbe for participation\. get gud/,
  zz_invalid_code: /🚫 @([a-zA-Z0-9_]+) invalid code\./,
  zz_wait_turn: /🤝 @([a-zA-Z0-9_]+) wait for your turn!/,
  
  // Achievement patterns
  achievement_unlock: /🏆 (.+?) \((\d+(?:\.\d+)?%?)\s*(?:rarity)?\) \+(\d+) = [\d,]+ zoskycUbe/,
  achievement_unlock_alt: /🏆 (.+) \((\d+)% rarity\) \+(\d+)zC = [\d,]+ zCubes/,
  
  // Death counter patterns
  death_event: /[💀⚰️] (?:Death )?(\d+)(?: deaths?)?\. .+ -(\d+) = [\d,]+ zoskycUbe/,
  death_event_alt: /[💀⚰️] (\d+) deaths?\. .+ -(\d+) = [\d,]+ zoskycUbe/,
  
  // Economy patterns
  dailydose: /@([a-zA-Z0-9_]+) = dailyDose \+1k @ 1:1 rate \| now has [\d,]+ zC 💊/,
  voucher: /@([a-zA-Z0-9_]+) ✅ ([\d,]+) zCubes awarded!/,
  milestone: /@([a-zA-Z0-9_]+) \d+(?:st|nd|rd|th) to \d+k\. .+ zoskycCubeGG/,
  
  // Game session patterns
  game_end: /🏁 (.+?) ⏰ [\d:]+ ☠️ (\d+) \(🟥(-?\d+)zC\) 🏆 (\d+) \(🟦\+?(\d+)zC\) = (-?\d+) zCubes/,
  
  // Whitelist patterns
  whitelist_complete: /🎉 @([a-zA-Z0-9_]+) whitelist complete!/,
  
  // Invalid command patterns
  invalid_vote: /🤖\? @([a-zA-Z0-9_]+) Invalid vote code!/,
  voting_not_open: /🚫 @([a-zA-Z0-9_]+) Voting is not open!/,
  
  // Feedback patterns
  feedback_submitted: /📺 @([a-zA-Z0-9_]+) feedback submitted!/,
}

/**
 * Game source mapping for categorization
 */
const sourceFromPattern = {
  vodvote_entry: 'vodVote',
  vodvote_start: 'vodVote',
  vodvote_start_alt: 'vodVote',
  vodvote_win: 'vodVote',
  art_success: 'art',
  art_success_alt: 'art',
  zz_win: 'zoskyZappers',
  zz_win_first: 'zoskyZappers',
  zz_loss: 'zoskyZappers',
  achievement_unlock: 'chevos',
  achievement_unlock_alt: 'chevos',
  dailydose: 'voucher',
  voucher: 'voucher',
  milestone: 'voucher',
}

/**
 * Initialize or get user stats object
 */
function getOrCreateUserStats(username) {
  const key = username.toLowerCase()
  if (!realtimeStats.byUser.has(key)) {
    realtimeStats.byUser.set(key, {
      username: key,
      totalAmount: 0,
      totalCount: 0,
      lastActivity: Date.now(),
      byGame: {
        vodVote: { amount: 0, count: 0 },
        art: { amount: 0, count: 0 },
        zoskyZappers: { amount: 0, count: 0 },
        chevos: { amount: 0, count: 0 },
        voucher: { amount: 0, count: 0 },
      }
    })
  }
  return realtimeStats.byUser.get(key)
}

/**
 * Add a realtime handout and update stats
 */
function addHandout(username, amount, reason, source) {
  const ts = Date.now()
  const handout = {
    username: username.toLowerCase(),
    amount,
    reason,
    source,
    timestamp: ts,
    date: new Date(ts).toISOString().split('T')[0],
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(ts).getDay()],
    hour: new Date(ts).getHours(),
    dayOfWeek: new Date(ts).getDay(),
    isRealtime: true // Flag to distinguish from CSV data
  }
  
  realtimeHandouts.value.unshift(handout) // Add to front (newest first)
  
  // Limit size
  if (realtimeHandouts.value.length > 1000) {
    realtimeHandouts.value.pop()
  }
  
  // Update user stats
  const userStats = getOrCreateUserStats(username)
  userStats.totalAmount += amount
  userStats.totalCount++
  userStats.lastActivity = ts
  
  // Update per-game stats
  if (source && userStats.byGame[source]) {
    userStats.byGame[source].amount += amount
    userStats.byGame[source].count++
  }
  
  console.log(`🎯 [TwitchChat] ${username} +${amount} (${source}): ${reason}`)
}

/**
 * Parse a bot message and extract handout data
 */
function parseMessage(message) {
  // VOD Vote entry
  let match = message.match(PATTERNS.vodvote_entry)
  if (match) {
    const [, username, points, gameName] = match
    addHandout(username, parseInt(points), `VOD Voted for "${gameName}"`, 'vodVote')
    return true
  }
  
  // VOD Vote start
  match = message.match(PATTERNS.vodvote_start)
  if (match) {
    const [, username, points] = match
    addHandout(username, parseInt(points), 'Started VOD Vote', 'vodVote')
    return true
  }
  
  // VOD Vote win
  match = message.match(PATTERNS.vodvote_win)
  if (match) {
    const [, points, username, gameName] = match
    addHandout(username, parseInt(points), `VOD Vote win: "${gameName}"`, 'vodVote')
    return true
  }
  
  // Pixel Power success
  match = message.match(PATTERNS.art_success)
  if (match) {
    const [, username, word, points] = match
    addHandout(username, parseInt(points), `Pixel Power: "${word}"`, 'art')
    return true
  }
  
  // Pixel Power success (alt format)
  match = message.match(PATTERNS.art_success_alt)
  if (match) {
    const [, username, points, word] = match
    addHandout(username, parseInt(points), `Pixel Power: "${word}"`, 'art')
    return true
  }
  
  // zoskyZappers win (with streak)
  match = message.match(PATTERNS.zz_win)
  if (match) {
    const [, username, wins, base, bonus, total] = match
    const amount = parseInt(base) + (bonus ? parseInt(bonus) : 0)
    addHandout(username, amount, `zZ ${wins}W win`, 'zoskyZappers')
    return true
  }
  
  // zoskyZappers first win
  match = message.match(PATTERNS.zz_win_first)
  if (match) {
    const [, username, winAmount, balance] = match
    addHandout(username, parseInt(winAmount), 'zZ 1st W win', 'zoskyZappers')
    return true
  }
  
  // zoskyZappers loss (participation)
  match = message.match(PATTERNS.zz_loss)
  if (match) {
    const [, username, points] = match
    addHandout(username, parseInt(points), 'zZ participation', 'zoskyZappers')
    return true
  }
  
  // Achievement unlock
  match = message.match(PATTERNS.achievement_unlock)
  if (match) {
    const [, achievementName, rarity, points] = match
    addHandout('zoskycube', parseInt(points), `Achievement: ${achievementName}`, 'chevos')
    return true
  }
  
  // dailyDose
  match = message.match(PATTERNS.dailydose)
  if (match) {
    const [, username] = match
    addHandout(username, 1000, 'dailyDose redemption', 'voucher')
    return true
  }
  
  // Voucher redemption
  match = message.match(PATTERNS.voucher)
  if (match) {
    const [, username, pointsStr] = match
    const points = parseInt(pointsStr.replace(/,/g, ''))
    addHandout(username, points, 'Voucher redemption', 'voucher')
    return true
  }
  
  return false
}

/**
 * Handle incoming chat message
 */
function handleMessage(channel, tags, message, self) {
  // Store in log
  const logEntry = {
    timestamp: Date.now(),
    username: tags.username,
    message,
    displayName: tags['display-name']
  }
  
  messageLog.value = [logEntry, ...messageLog.value.slice(0, MAX_LOG_SIZE - 1)]
  lastMessage.value = logEntry
  
  // Only parse messages from the bot
  if (tags.username?.toLowerCase() === BOT_USERNAME) {
    parseMessage(message)
  }
}

/**
 * Connect to Twitch chat anonymously
 */
async function connect() {
  if (isConnected.value || isConnecting.value) {
    console.log('🔗 [TwitchChat] Already connected or connecting')
    return true
  }
  
  isConnecting.value = true
  connectionError.value = null
  
  try {
    // Dynamic import of tmi.js
    const tmi = await import('tmi.js')
    
    client = new tmi.default.Client({
      options: { debug: false },
      connection: {
        reconnect: true,
        secure: true
      },
      // Anonymous connection - no identity needed for read-only
      channels: [CHANNEL]
    })
    
    // Set up event handlers
    client.on('message', handleMessage)
    
    client.on('connected', (addr, port) => {
      console.log(`✅ [TwitchChat] Connected to ${addr}:${port}`)
      isConnected.value = true
      isConnecting.value = false
    })
    
    client.on('disconnected', (reason) => {
      console.log(`❌ [TwitchChat] Disconnected: ${reason}`)
      isConnected.value = false
    })
    
    client.on('reconnect', () => {
      console.log('🔄 [TwitchChat] Reconnecting...')
    })
    
    await client.connect()
    return true
  } catch (err) {
    console.error('❌ [TwitchChat] Connection failed:', err)
    connectionError.value = err.message
    isConnecting.value = false
    return false
  }
}

/**
 * Disconnect from Twitch chat
 */
async function disconnect() {
  if (!client) return
  
  try {
    await client.disconnect()
    client = null
    isConnected.value = false
    console.log('👋 [TwitchChat] Disconnected')
  } catch (err) {
    console.error('⚠️ [TwitchChat] Disconnect error:', err)
  }
}

/**
 * Get realtime stats for a specific user
 */
function getUserRealtimeStats(username) {
  return realtimeStats.byUser.get(username.toLowerCase()) || null
}

/**
 * Get realtime handouts for a specific user
 */
function getUserRealtimeHandouts(username) {
  const key = username.toLowerCase()
  return realtimeHandouts.value.filter(h => h.username === key)
}

/**
 * Merge realtime stats with existing stats object
 */
function mergeWithUserStats(username, existingStats) {
  const realtime = getUserRealtimeStats(username)
  if (!realtime) return existingStats
  
  return {
    ...existingStats,
    totalAmount: existingStats.totalAmount + realtime.totalAmount,
    totalCount: existingStats.totalCount + realtime.totalCount,
    byGame: {
      vodVote: {
        amount: (existingStats.byGame?.vodVote?.amount || 0) + realtime.byGame.vodVote.amount,
        count: (existingStats.byGame?.vodVote?.count || 0) + realtime.byGame.vodVote.count
      },
      art: {
        amount: (existingStats.byGame?.art?.amount || 0) + realtime.byGame.art.amount,
        count: (existingStats.byGame?.art?.count || 0) + realtime.byGame.art.count
      },
      zoskyZappers: {
        amount: (existingStats.byGame?.zoskyZappers?.amount || 0) + realtime.byGame.zoskyZappers.amount,
        count: (existingStats.byGame?.zoskyZappers?.count || 0) + realtime.byGame.zoskyZappers.count
      },
      chevos: {
        amount: (existingStats.byGame?.chevos?.amount || 0) + realtime.byGame.chevos.amount,
        count: (existingStats.byGame?.chevos?.count || 0) + realtime.byGame.chevos.count
      },
      voucher: {
        amount: (existingStats.byGame?.voucher?.amount || 0) + realtime.byGame.voucher.amount,
        count: (existingStats.byGame?.voucher?.count || 0) + realtime.byGame.voucher.count
      }
    }
  }
}

/**
 * Computed: All realtime stats as array (for leaderboard)
 */
const realtimeLeaderboard = computed(() => {
  return Array.from(realtimeStats.byUser.values())
    .sort((a, b) => b.totalAmount - a.totalAmount)
})

/**
 * Computed: Total realtime points distributed
 */
const realtimeTotalDistributed = computed(() => {
  return realtimeHandouts.value.reduce((sum, h) => sum + h.amount, 0)
})

/**
 * Composable export
 */
export function useTwitchChat() {
  // Auto-cleanup on component unmount (optional - shared state persists)
  onUnmounted(() => {
    // Don't disconnect - keep connection alive for other components
  })
  
  return {
    // Connection
    connect,
    disconnect,
    isConnected,
    isConnecting,
    connectionError,
    
    // Message data
    lastMessage,
    messageLog,
    
    // Realtime stats
    realtimeHandouts,
    realtimeStats,
    realtimeLeaderboard,
    realtimeTotalDistributed,
    
    // User-specific helpers
    getUserRealtimeStats,
    getUserRealtimeHandouts,
    mergeWithUserStats,
    
    // Pattern reference (for debugging/extension)
    PATTERNS
  }
}

export default useTwitchChat
