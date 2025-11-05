<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-white text-center mb-8">
        Connect Your Gaming Accounts
      </h1>
      
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
        <p class="text-white/80 text-center mb-4">
          Connect all three gaming platforms to unlock full features and sync your profile data.
        </p>
              <!-- Status Indicators -->
      <div class="flex justify-center gap-8 mb-4">
        <div class="flex items-center gap-2">
          <Steam :class="['w-6 h-6', steamConnected ? 'text-green-400' : 'text-red-400']" />
        </div>
        <div class="flex items-center gap-2">
          <Discord :class="['w-6 h-6', discordConnected ? 'text-green-400' : 'text-red-400']" />
        </div>
        <div class="flex items-center gap-2">
          <Twitch :class="['w-6 h-6', twitchConnected ? 'text-green-400' : 'text-red-400']" />
        </div>
      </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <!-- Steam Connection -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 relative">
          <!-- Platform icon - top left -->
          <Steam class="absolute top-4 left-4 w-8 h-8 text-blue-400" />
          
          <!-- Avatar - top right -->
          <img v-if="steamConnected && userProfile?.steam?.avatar" 
               :src="userProfile.steam.avatar" 
               alt="Steam Avatar" 
               class="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-blue-400">
          
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <p class="text-white/70 text-sm mb-4">
              {{ steamConnected ? `Logged in as ${userProfile?.steam?.personaname || 'Steam User'}` : 'Connect your Steam account' }}
            </p>
            
            <!-- Single button with v-if/v-else -->
            <button v-if="!steamConnected"
              @click="connectSteam"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
              :disabled="loading.steam"
            >
              <i v-if="loading.steam" class="mdi mdi-loading mdi-spin mr-2"></i>
              Connect
            </button>
            <button v-else
              @click="disconnectSteam"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200"
            >
              Disconnect
            </button>
            
            <!-- Profile Data -->
            <div v-if="steamConnected && userProfile?.steam" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-2">
                <div><strong>Username:</strong> {{ userProfile.steam.username || userProfile.steam.personaname }}</div>
                <div>
                  <strong>Steam ID:</strong> 
                  <a v-if="userProfile.steam.profileUrl" :href="userProfile.steam.profileUrl" target="_blank" class="text-blue-400 hover:underline">
                    {{ userProfile.steam.id }}
                  </a>
                  <span v-else>{{ userProfile.steam.id }}</span>
                </div>
                <div v-if="userProfile.steam.lastSync" class="text-white/60">
                  <strong>Last Sync:</strong> {{ formatRelativeTime(userProfile.steam.lastSync) }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Discord Connection -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 relative">
          <!-- Platform icon - top left -->
          <Discord class="absolute top-4 left-4 w-8 h-8 text-indigo-400" />
          
          <!-- Avatar - top right -->
          <img v-if="discordConnected && userProfile?.discord?.avatar" 
               :src="`https://cdn.discordapp.com/avatars/${userProfile.discord.id}/${userProfile.discord.avatar}.png`" 
               alt="Discord Avatar" 
               class="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-indigo-400">
          
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <p class="text-white/70 text-sm mb-4">
              {{ discordConnected ? `Logged in as ${userProfile?.discord?.username || 'Discord User'}` : 'Connect your Discord account' }}
            </p>
            
            <!-- Single button with v-if/v-else -->
            <button v-if="!discordConnected"
              @click="connectDiscord"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200"
              :disabled="loading.discord"
            >
              <i v-if="loading.discord" class="mdi mdi-loading mdi-spin mr-2"></i>
              Connect
            </button>
            <button v-else
              @click="disconnectDiscord"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200"
            >
              Disconnect
            </button>
            
            <!-- Profile Data -->
            <div v-if="discordConnected && userProfile?.discord" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-2">
                <div><strong>Username:</strong> {{ userProfile.discord.username }}</div>
                <div><strong>Discord ID:</strong> {{ userProfile.discord.id }}</div>
                <div v-if="userProfile.discord.email"><strong>Email:</strong> {{ userProfile.discord.email }}</div>
                <div v-if="userProfile.discord.discriminator"><strong>Tag:</strong> #{{ userProfile.discord.discriminator }}</div>
                <div v-if="userProfile.discord.lastSync" class="text-white/60">
                  <strong>Last Sync:</strong> {{ formatRelativeTime(userProfile.discord.lastSync) }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Twitch Connection -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 relative">
          <!-- Platform icon - top left -->
          <Twitch class="absolute top-4 left-4 w-8 h-8 text-purple-400" />
          
          <!-- Avatar - top right -->
          <img v-if="twitchConnected && userProfile?.twitch?.profileImage" 
               :src="userProfile.twitch.profileImage" 
               alt="Twitch Avatar" 
               class="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-purple-400">
          
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <p class="text-white/70 text-sm mb-4">
              {{ twitchConnected ? `Logged in as ${userProfile?.twitch?.displayName || 'Twitch User'}` : 'Connect your Twitch account' }}
            </p>
            
            <!-- Single button with v-if/v-else -->
            <button v-if="!twitchConnected"
              @click="connectTwitch"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
              :disabled="loading.twitch"
            >
              <i v-if="loading.twitch" class="mdi mdi-loading mdi-spin mr-2"></i>
              Connect
            </button>
            <button v-else
              @click="disconnectTwitch"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200"
            >
              Disconnect
            </button>
            
            <!-- Profile Data -->
            <div v-if="twitchConnected && userProfile?.twitch" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-2">
                <div><strong>Username:</strong> {{ userProfile.twitch.username || userProfile.twitch.displayName }}</div>
                <div><strong>Twitch ID:</strong> {{ userProfile.twitch.id }}</div>
                <div v-if="userProfile.twitch.email"><strong>Email:</strong> {{ userProfile.twitch.email }}</div>
                <div v-if="userProfile.twitch.displayName && userProfile.twitch.username !== userProfile.twitch.displayName">
                  <strong>Display Name:</strong> {{ userProfile.twitch.displayName }}
                </div>
                <div v-if="userProfile.twitch.lastSync" class="text-white/60">
                  <strong>Last Sync:</strong> {{ formatRelativeTime(userProfile.twitch.lastSync) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- All Connected Success Message -->
      <div v-if="allConnected" class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
        <h3 class="text-2xl font-semibold text-white mb-4">
          <i class="mdi mdi-check-circle text-green-400 mr-2"></i>
          All Accounts Connected!
        </h3>
        <p class="text-white/80 mb-2">
          Your gaming profiles are now linked and synced.
        </p>
        <p class="text-white/60 text-sm">
          Check your Discord server for your assigned roles!
        </p>
      </div>

      <!-- OAuth Callback Handler -->
      <div v-if="isProcessingCallback" class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
        <i class="mdi mdi-loading mdi-spin text-4xl text-white mb-4"></i>
        <p class="text-white">Processing authentication...</p>
      </div>

      <!-- Error Display -->
      <div v-if="error" class="bg-red-500/20 backdrop-blur-md rounded-xl p-6 text-center">
        <i class="mdi mdi-alert-circle text-4xl text-red-400 mb-4"></i>
        <p class="text-white">{{ error }}</p>
        <button 
          @click="error = ''"
          class="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { onAuthStateChanged, signInWithCustomToken, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useRouter, useRoute } from 'vue-router'
import { Twitch, Discord, Steam } from 'mdue'

const router = useRouter()
const route = useRoute()

// Cloud Functions URLs - use emulator in development
const CLOUD_FUNCTIONS_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:5001/zoskycube-bossbattle/us-central1'
  : 'https://us-central1-zoskycube-bossbattle.cloudfunctions.net'

console.log('DEV mode:', import.meta.env.DEV)
console.log('Cloud Functions Base URL:', CLOUD_FUNCTIONS_BASE_URL)

const OAUTH_ENDPOINTS = {
  twitch: `${CLOUD_FUNCTIONS_BASE_URL}/twitchAuthorizeV2`,
  discord: `${CLOUD_FUNCTIONS_BASE_URL}/discordAuthorizeV2`,
  steam: `${CLOUD_FUNCTIONS_BASE_URL}/steamAuthorizeV2`
}
console.log('OAuth Endpoints:', OAUTH_ENDPOINTS)

// Reactive state
const loading = ref({
  steam: false,
  discord: false,
  twitch: false
})

const user = ref(null)
const userProfile = ref(null)
const error = ref('')
const isProcessingCallback = ref(false)

// Computed properties
const steamConnected = computed(() => !!userProfile.value?.steam)
const discordConnected = computed(() => !!userProfile.value?.discord)
const twitchConnected = computed(() => !!userProfile.value?.twitch)
const allConnected = computed(() => steamConnected.value && discordConnected.value && twitchConnected.value)

// OAuth Functions - Now just redirect to Cloud Functions!
const connectSteam = () => {
  loading.value.steam = true
  const returnOrigin = encodeURIComponent(window.location.origin)
  // Pass link_uuid for account linking (UUID from localStorage or current auth user)
  const linkUuid = localStorage.getItem('linkUuid') || auth.currentUser?.uid || ''
  window.location.href = `${OAUTH_ENDPOINTS.steam}?return_origin=${returnOrigin}&link_uuid=${linkUuid}`
}

const connectDiscord = () => {
  loading.value.discord = true
  const returnOrigin = encodeURIComponent(window.location.origin)
  // Pass link_uuid for account linking (UUID from localStorage or current auth user)
  const linkUuid = localStorage.getItem('linkUuid') || auth.currentUser?.uid || ''
  window.location.href = `${OAUTH_ENDPOINTS.discord}?return_origin=${returnOrigin}&link_uuid=${linkUuid}`
}

const connectTwitch = () => {
  loading.value.twitch = true
  const returnOrigin = encodeURIComponent(window.location.origin)
  // Pass link_uuid for account linking (UUID from localStorage or current auth user)
  const linkUuid = localStorage.getItem('linkUuid') || auth.currentUser?.uid || ''
  window.location.href = `${OAUTH_ENDPOINTS.twitch}?return_origin=${returnOrigin}&link_uuid=${linkUuid}`
}

// Sign out function
const signOut = async () => {
  try {
    await firebaseSignOut(auth)
    userProfile.value = null
    router.push('/')
  } catch (err) {
    console.error('Sign out error:', err)
    error.value = 'Failed to sign out'
  }
}

// Handle OAuth callback with custom token
const handleOAuthCallback = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')
  const success = urlParams.get('success')
  const errorParam = urlParams.get('error')

  if (errorParam) {
    error.value = `Authentication failed: ${decodeURIComponent(errorParam)}`
    // Clean URL
    window.history.replaceState({}, document.title, '/auth')
    return
  }

  if (token && success) {
    isProcessingCallback.value = true
    try {
      console.log('🔥 Received custom token from Cloud Function')
      console.log('🔥 Provider:', success)
      
      // Sign in with the custom token from Cloud Functions
      const userCredential = await signInWithCustomToken(auth, token)
      user.value = userCredential.user
      
      console.log('🔥 Successfully signed in with custom token')
      console.log('🔥 User ID:', user.value.uid)
      
      // Fetch user profile from Firestore
      await loadUserProfile(user.value.uid)
      
      // Clean URL
      window.history.replaceState({}, document.title, '/auth')
      
    } catch (err) {
      console.error('🔥 Error signing in with custom token:', err)
      error.value = 'Failed to complete authentication: ' + err.message
    } finally {
      isProcessingCallback.value = false
    }
  }
}

// Load user profile from Firestore (NEW: UUID-based architecture)
const loadUserProfile = async (uid) => {
  try {
    console.log('🔥 Loading user profile for UUID:', uid)
    
    // Store as link UUID for future account linking
    if (!localStorage.getItem('linkUuid')) {
      localStorage.setItem('linkUuid', uid)
      console.log('🔥 Stored link UUID:', uid)
    }
    
    // Fetch account_links document by UUID
    const linkDocRef = doc(db, 'account_links', uid)
    const linkDocSnap = await getDoc(linkDocRef)
    
    if (!linkDocSnap.exists()) {
      console.log('🔥 No account_links found for UUID')
      userProfile.value = null
      return
    }
    
    const linkData = linkDocSnap.data()
    console.log('🔥 Account link loaded:', linkData)
    
    // Build userProfile by fetching individual service profiles
    const profile = {}
    
    // Fetch Steam profile if linked
    if (linkData.steamId && linkData.steamId !== 'not-yet') {
      const steamDocRef = doc(db, 'steam_profiles', linkData.steamId)
      const steamDocSnap = await getDoc(steamDocRef)
      if (steamDocSnap.exists()) {
        profile.steam = steamDocSnap.data()
        console.log('🔥 Steam profile loaded')
      }
    }
    
    // Fetch Discord profile if linked
    if (linkData.discordId && linkData.discordId !== 'not-yet') {
      const discordDocRef = doc(db, 'discord_profiles', linkData.discordId)
      const discordDocSnap = await getDoc(discordDocRef)
      if (discordDocSnap.exists()) {
        profile.discord = discordDocSnap.data()
        console.log('🔥 Discord profile loaded')
      }
    }
    
    // Fetch Twitch profile if linked
    if (linkData.twitchId && linkData.twitchId !== 'not-yet') {
      const twitchDocRef = doc(db, 'twitch_profiles', linkData.twitchId)
      const twitchDocSnap = await getDoc(twitchDocRef)
      if (twitchDocSnap.exists()) {
        profile.twitch = twitchDocSnap.data()
        console.log('🔥 Twitch profile loaded')
      }
    }
    
    userProfile.value = profile
    console.log('🔥 Full user profile assembled:', profile)
    
  } catch (err) {
    console.error('Error loading user profile:', err)
    error.value = 'Failed to load profile data'
  }
}

// Format relative time (e.g., "2 hours ago")
const formatRelativeTime = (timestamp) => {
  if (!timestamp) return 'Unknown'
  
  // Handle Firestore Timestamp
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const now = new Date()
  const diffMs = now - date
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffSecs < 60) return 'Just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
  if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`
  return date.toLocaleDateString()
}

// Disconnect individual services (NEW: Just update account_links to 'not-yet')
const disconnectSteam = async () => {
  if (!confirm('Are you sure you want to disconnect Steam?')) return
  
  try {
    const linkDocRef = doc(db, 'account_links', user.value.uid)
    await updateDoc(linkDocRef, {
      steamId: 'not-yet',
      steamUsername: 'not-yet',
      updatedAt: new Date()
    })
    
    userProfile.value.steam = null
    console.log('Steam disconnected')
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
      console.log('🔥 Cleared link UUID - all services disconnected')
    }
  } catch (err) {
    console.error('Error disconnecting Steam:', err)
    error.value = 'Failed to disconnect Steam'
  }
}

const disconnectDiscord = async () => {
  if (!confirm('Are you sure you want to disconnect Discord?')) return
  
  try {
    const linkDocRef = doc(db, 'account_links', user.value.uid)
    await updateDoc(linkDocRef, {
      discordId: 'not-yet',
      discordUsername: 'not-yet',
      updatedAt: new Date()
    })
    
    userProfile.value.discord = null
    console.log('Discord disconnected')
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
      console.log('🔥 Cleared link UUID - all services disconnected')
    }
  } catch (err) {
    console.error('Error disconnecting Discord:', err)
    error.value = 'Failed to disconnect Discord'
  }
}

const disconnectTwitch = async () => {
  if (!confirm('Are you sure you want to disconnect Twitch?')) return
  
  try {
    const linkDocRef = doc(db, 'account_links', user.value.uid)
    await updateDoc(linkDocRef, {
      twitchId: 'not-yet',
      twitchUsername: 'not-yet',
      updatedAt: new Date()
    })
    
    userProfile.value.twitch = null
    console.log('Twitch disconnected')
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
      console.log('🔥 Cleared link UUID - all services disconnected')
    }
  } catch (err) {
    console.error('Error disconnecting Twitch:', err)
    error.value = 'Failed to disconnect Twitch'
  }
}

// Listen for auth state changes
onMounted(() => {
  // Check for OAuth callback first
  handleOAuthCallback()
  
  // Listen for Firebase auth state
  onAuthStateChanged(auth, async (firebaseUser) => {
    user.value = firebaseUser
    
    if (firebaseUser) {
      console.log('🔥 User authenticated:', firebaseUser.uid)
      // Load user profile data from Firestore
      await loadUserProfile(firebaseUser.uid)
    } else {
      console.log('🔥 No user authenticated')
      userProfile.value = null
    }
  })
})
</script>
