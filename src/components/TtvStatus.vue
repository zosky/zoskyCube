<script setup>
import { Twitch, EyeOutline, ClockOutline } from 'mdue'

import { useGameStore } from '@/stores/gameStore'
const { steamNames, fetchData } = useGameStore()
fetchData()

const props = defineProps({
  streamer: {
    type: String,
    required: true,
    default: 'zoskyCube'
  }
})
const streamerName = ref(props.streamer)
const streamerData = ref(null)
const streamData = ref(null)
const loading = ref(false)
const error = ref('')

const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_TWITCH_CLIENT_SECRET
let accessToken = ''

const isOnline = computed(() => {
  return streamData.value && streamData.value.type === 'live'
})

async function getAccessToken() {
  try {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get access token')
    }

    const data = await response.json()
    accessToken = data.access_token
    return accessToken
  } catch (err) {
    throw new Error('Authentication failed: ' + err.message)
  }
}

async function fetchStreamerInfo(username) {
  const response = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch streamer info')
  }

  const data = await response.json()
  return data.data[0]
}

async function fetchStreamInfo(userId) {
  const response = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
    headers: {
      'Client-ID': CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch stream info')
  }

  const data = await response.json()
  return data.data[0] || null
}

async function checkStreamerStatus() {
  if (!streamerName.value.trim()) return

  loading.value = true
  error.value = ''
  streamerData.value = null
  streamData.value = null

  try {
    // Get access token if we don't have one
    if (!accessToken) {
      await getAccessToken()
    }

    // Get streamer info
    const userInfo = await fetchStreamerInfo(streamerName.value.trim())
    
    if (!userInfo) {
      throw new Error('Streamer not found')
    }

    streamerData.value = userInfo

    // Check if they're currently streaming
    const currentStream = await fetchStreamInfo(userInfo.id)
    streamData.value = currentStream

  } catch (err) {
    error.value = err.message
    console.error('Error checking streamer status:', err)
  } finally {
    loading.value = false
  }
}

function formatStreamStartTime(startTime) {
  if (!startTime) return 'Unknown'
  
  const start = new Date(startTime)
  const now = new Date()
  const diffMs = now - start
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`
  } else {
    return `${diffMinutes}m`
  }
}

const steamGamePix=computed(()=> {
  // Find steamId by matching game name in steamNames
  {{ streamData.value?.game_name }}
  // return Object.entries(steamNames?.value).find(name => name[1] === (streamData.value?.game_name || '')) || null 
  const gameName = streamData.value?.game_name || ''
  if (!gameName) return null
  const steamId = Object.entries(steamNames?.value).find(name => name[1] === gameName)?.[0]
  if (!steamId) return null
  return getSteamGameImageUrl(steamId)
})

function getSteamGameImageUrl(gameId) {
  if (!gameId) return null
  return `https://cdn.akamai.steamstatic.com/steam/apps/${gameId}/header.jpg`
}

checkStreamerStatus() // initial check on load

// Auto-refresh timer
let refreshTimer = null

function startAutoRefresh() {
  if (refreshTimer) {
    clearInterval(refreshTimer)
  }
  
  // Check every minute if online, every 10 minutes if offline
  const interval = isOnline.value ? 60000 : 600000 // 1 min or 10 min in milliseconds
  
  refreshTimer = setInterval(() => {
    checkStreamerStatus()
  }, interval)
}

// Watch for online status changes to adjust refresh rate
watch(isOnline, () => {
  startAutoRefresh()
})

// Start initial timer after first check
// onMounted(async () => {
//   if (!gameStore.steamNames || Object.keys(gameStore.steamNames).length === 0) {
//     await gameStore.fetchData()
//   }
//   setTimeout(() => {
//     startAutoRefresh()
//   }, 1000) // Start timer 1 second after initial check
// })

// Clean up timer when component unmounts
// onUnmounted(() => {
//   if (refreshTimer) {
//     clearInterval(refreshTimer)
//   }
// })

</script>

<template>
  <div class="flex flex-row gap-1 rounded-lg shadow-md" @click.middle="checkStreamerStatus">

    <div v-if="loading" class="flex items-center justify-center">
      <!-- <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div> -->
      <Twitch class="animate-pulse text-purple-600" />
      <!-- <span class="ml-2 text-gray-300">Checking status...</span> -->
    </div>

    <div v-if="error" class="flex flex-row items-center self-center text-red-700 rounded">
      <Twitch />
      <span class="text-xs" :title="error">GRR?!</span>
    </div>

    <div id="playing"></div>

    <div 
      v-if="streamerData && !loading" 
      class="flex flex-row items-center gap-1"
      :class="isOnline ? 'text-green-500 animate-pulse' : 'text-red-500'">

      <Twitch class="text-2xl" />
      <ul v-if="isOnline && streamData">
        <teleport to="#playing">
          <img v-if="steamGamePix"
              :src="steamGamePix" 
              :alt="streamData.game_name" 
              class="w-auto h-10 -mb-4 rounded-md border-b border-blue-400"
            />
          </teleport>

        <!-- <li>
          <strong>Title:</strong> {{ streamData.title || 'No title' }}
        </li> -->
        <li>
          <EyeOutline />
          {{ streamData.viewer_count?.toLocaleString() || 0 }}
        </li>
        <li>
          <ClockOutline />
          {{ formatStreamStartTime(streamData.started_at) }}
        </li>
      </ul>

      <!-- <div v-if="streamerData" class="text-sm text-gray-600">
        <p><strong>Followers:</strong> {{ streamerData.follower_count?.toLocaleString() || 'N/A' }}</p>
        <p><strong>Description:</strong> {{ streamerData.description || 'No description' }}</p>
      </div> -->
    </div>
  </div>
</template>


<style scoped>
ul { @apply flex flex-col-reverse gap-1 text-xs }
li { @apply flex flex-row-reverse items-center font-light -my-1 }
/* Additional custom styles if needed */
</style>