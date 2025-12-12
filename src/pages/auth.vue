<route lang="yaml">
meta:
  title: Whitelist Auth
</route>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-xl sm:text-4xl font-bold text-white/15 text-left mt-8 italic">
        whiteList@zoskyCube
      </h1>
      
            <div class="from-gray-900/30 to-gray-950/30 ring-1 ring-gray-500 shadow-gray-500 shadow-sm bg-gradient-to-br backdrop-blur-md rounded-xl p-6 mb-8">
        <div class="flex flex-col justify-center gap-2 items-center">
            <p class="text-center flex flex-row items-center gap-1 min-w-max">
              to win 
              <Points class="-my-4 w-10 h-10" currency="zc" title="zCubes (zC) [@streamElements]" /> 
              from <Twitch class="-my-4 w-8 h-8" /><span class="hidden sm:inline">liveStream miniGames </span>&
            </p>
            <div class="flex flex-col sm:flex-row gap-1 items-center text-center">
              <p class="flex flex-row gap-1 items-center">
                to use
                <Points class="-my-4 w-10 h-10" currency="zb" title="zBlocks (zB) [@TTV]" /> 
                vouchers for more 
                <Points class="-my-4 w-10 h-10" currency="zc" title="zCubes (zC) [@streamElements]" /> 
              </p>
              please connect
              <p class="flex flex-row gap-1 items-center">
                <Steam :class="['sm:-my-4 w-12 h-12', steamConnected ? 'text-green-400' : 'text-red-400']" />
                <Discord :class="['sm:-my-4 w-12 h-12', discordConnected ? 'text-green-400' : 'text-red-400']" />
                <Twitch :class="['sm:-my-4 w-12 h-12', twitchConnected ? 'text-green-400' : 'text-red-400']" />
              </p>
            </div>
          </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <!-- Steam Connection -->
        <div class="from-blue-800 to-blue-950 ring-1 ring-blue-600 shadow-blue-500 shadow-md bg-gradient-to-br backdrop-blur-md rounded-xl p-6 relative min-w-0">
          <!-- Platform icon - top left -->
           <div class="flex flex-row justify-center -space-x-8 items-center scale-[2]">
             <Steam class="w-auto h-[5.5em] text-blue-400" />
             <img v-if="steamConnected && userProfile?.steam?.avatar" 
                  :src="userProfile.steam.avatar" 
                  alt="Steam Avatar" 
                  class="w-auto h-[5em] rounded-full border-2 border-blue-400 aspect-square">
           </div>
          
          <!-- Avatar - top right -->
          
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <!-- <p class="text-white/70 text-sm mb-4">
              {{ steamConnected ? `Logged in as ${userProfile?.steam?.personaname || 'Steam User'}` : 'Connect your Steam account' }}
            </p> -->
            
            <!-- Single button with v-if/v-else -->
            <button v-if="!steamConnected"
              @click="connectSteam"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
              :disabled="loading.steam || loadingProfile"
            >
              <Loading v-if="loading.steam || loadingProfile" class="inline w-5 h-5 mr-2 animate-spin" />
              Connect
            </button>
            <button v-else
              @click="disconnectSteam"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200"
              :disabled="loadingProfile"
            >
              Disconnect
            </button>
            
            <!-- Profile Data -->
            <div v-if="steamConnected && userProfile?.steam" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-1">
                <!-- Row 1: Username and ID -->
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <div class="flex items-center gap-2 min-w-0 flex-1">
                    <Account class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.steam.username || userProfile.steam.personaname }}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-row-reverse min-w-0 flex-1">
                    <Identifier class="inline w-4 h-4 flex-shrink-0" />
                    <a v-if="userProfile.steam.profileUrl" :href="userProfile.steam.profileUrl" target="_blank" class="text-blue-400 hover:underline truncate text-[10px] sm:text-xs">
                      {{ userProfile.steam.id }}
                    </a>
                    <span v-else class="truncate text-[10px] sm:text-xs">{{ userProfile.steam.id }}</span>
                  </div>
                </div>
                <!-- Row 2: Last Sync -->
                <div v-if="userProfile.steam.lastSync" class="flex items-center gap-2 text-white/60">
                  <ClockOutline class="inline w-4 h-4 flex-shrink-0" />
                  <span class="text-[10px] sm:text-xs">{{ formatRelativeTime(userProfile.steam.lastSync) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Discord Connection -->
        <div class="bg-gradient-to-br backdrop-blur-md rounded-xl p-6 relative min-w-0 transition-all duration-300" 
             :class="discordVerificationStatus?.verified ? 
               'from-green-700 to-purple-900 ring-2 ring-green-400 shadow-green-400 shadow-lg' : 
               discordInServer ?
               'from-yellow-700 to-purple-900 ring-2 ring-yellow-400 shadow-yellow-400 shadow-lg' :
               'from-purple-800 to-purple-950 ring-1 ring-purple-600 shadow-purple-500 shadow-md'">
          <!-- Platform icon - top left -->
          <div class="flex flex-row justify-center -space-x-8 items-center scale-[2]">
            <Discord class="w-auto h-[5.5em] transition-all duration-300" 
                     :class="discordVerificationStatus?.verified ? 'text-green-400' : 
                             discordInServer ? 'text-yellow-400' : 
                             'text-indigo-400'" />
          
          <!-- Avatar - top right -->
            <img v-if="discordConnected && userProfile?.discord?.avatar" 
                :src="`https://cdn.discordapp.com/avatars/${userProfile.discord.id}/${userProfile.discord.avatar}.png`" 
                alt="Discord Avatar" 
                class="w-auto h-[5.5em] rounded-full border-2 aspect-square transition-all duration-300"
                :class="discordVerificationStatus?.verified ? 'border-green-400' : 
                        discordInServer ? 'border-yellow-400' : 
                        'border-indigo-400'" />
          </div>
            
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <!-- <p class="text-white/70 text-sm mb-4">
              {{ discordConnected ? `Logged in as ${userProfile?.discord?.username || 'Discord User'}` : 'Connect your Discord account' }}
            </p> -->
            
            <!-- Step 1: Connect Discord (OAuth + Auto-join Server) -->
            <div v-if="!discordConnected" class="space-y-2">
              <button
                @click="connectDiscord"
                class="w-full py-3 px-4 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200"
                :disabled="loading.discord || loadingProfile"
              >
                <Loading v-if="loading.discord || loadingProfile" class="inline w-5 h-5 mr-2 animate-spin" />
                Connect & Join Server
              </button>
            </div>
            
            <!-- Step 2: Verify Member Role (after joining) -->
            <div v-else class="space-y-2">
              <!-- Discord Verification Status -->
              <div v-if="discordVerificationStatus" class="mb-2 p-3 rounded-lg text-sm" :class="discordVerificationStatus.verified ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'">
                <CheckCircle v-if="discordVerificationStatus.verified" class="inline w-4 h-4 mr-1 -mt-0.5" />
                <AlertCircle v-else class="inline w-4 h-4 mr-1 -mt-0.5 animate-pulse" />
                {{ discordVerificationStatus.message }}
              </div>
              
              <!-- Check Member Role Button (only show if not verified) -->
              <button
                v-if="!discordVerificationStatus?.verified"
                @click="checkDiscordStatus"
                class="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-600 hover:bg-yellow-700 text-white transition-all duration-200 animate-pulse"
                :disabled="loading.discordVerify"
              >
                <Loading v-if="loading.discordVerify" class="inline w-5 h-5 mr-2 animate-spin" />
                Check Member Status
              </button>
              
              <!-- Disconnect Button -->
              <button
                @click="disconnectDiscord"
                class="w-full py-2 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200 text-sm"
                :disabled="loadingProfile"
              >
                Disconnect
              </button>
            </div>
            
            <!-- Profile Data -->
            <div v-if="discordConnected && userProfile?.discord" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-1">
                <!-- Row 1: Username and ID -->
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <div class="flex items-center gap-2 min-w-0 flex-1">
                    <Account class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.discord.username }}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-row-reverse min-w-0 flex-1">
                    <Identifier class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.discord.id }}</span>
                  </div>
                </div>
                <!-- Row 2: Email and Tag -->
                <div v-if="userProfile.discord.email || userProfile.discord.discriminator" class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <div v-if="userProfile.discord.email" class="flex items-center gap-2 min-w-0 flex-1">
                    <Email class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.discord.email }}</span>
                  </div>
                  <div v-if="userProfile.discord.discriminator" class="flex items-center gap-2 flex-row-reverse min-w-0">
                    <Tag class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">#{{ userProfile.discord.discriminator }}</span>
                  </div>
                </div>
                <!-- Row 3: Last Sync -->
                <div v-if="userProfile.discord.lastSync" class="flex items-center gap-2 text-white/60">
                  <ClockOutline class="inline w-4 h-4 flex-shrink-0" />
                  <span class="text-[10px] sm:text-xs">{{ formatRelativeTime(userProfile.discord.lastSync) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Twitch Connection -->
        <div class="from-pink-800 to-pink-950 ring-1 ring-pink-600 shadow-pink-500 shadow-md bg-gradient-to-br backdrop-blur-md rounded-xl p-6 relative min-w-0">
          <!-- Platform icon - top left -->
          <div class="flex flex-row justify-center -space-x-8 items-center scale-[2]">
            <Twitch class="w-auto h-[5.5em]  text-purple-400" />
          
          <!-- Avatar - top right -->
            <img v-if="twitchConnected && userProfile?.twitch?.profileImage" 
                :src="userProfile.twitch.profileImage" 
                alt="Twitch Avatar" 
                class="w-auto h-[5.5em] rounded-full border-2 border-purple-400 aspect-square">
          </div>
          <!-- Content with top margin to clear absolute elements -->
          <div class="mt-16 text-center">
            <!-- <p class="text-white/70 text-sm mb-4">
              {{ twitchConnected ? `Logged in as ${userProfile?.twitch?.displayName || 'Twitch User'}` : 'Connect your Twitch account' }}
            </p> -->
            
            <!-- Single button with v-if/v-else -->
            <button v-if="!twitchConnected"
              @click="connectTwitch"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200"
              :disabled="loading.twitch || loadingProfile"
            >
              <Loading v-if="loading.twitch || loadingProfile" class="inline w-5 h-5 mr-2 animate-spin" />
              Connect
            </button>
            <button v-else
              @click="disconnectTwitch"
              class="w-full py-3 px-4 rounded-lg font-semibold bg-red-600/20 hover:bg-red-600/40 text-red-300 transition-all duration-200"
              :disabled="loadingProfile"
            >
              Disconnect
            </button>
            
            <!-- Profile Data -->
            <div v-if="twitchConnected && userProfile?.twitch" class="mt-4 pt-4 border-t border-white/10 text-left">
              <div class="text-white/80 text-xs space-y-1">
                <!-- Row 1: Username and ID -->
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <div class="flex items-center gap-2 min-w-0 flex-1">
                    <Account class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.twitch.username || userProfile.twitch.displayName }}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-row-reverse min-w-0 flex-1">
                    <Identifier class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.twitch.id }}</span>
                  </div>
                </div>
                <!-- Row 2: Display Name and Email -->
                <div v-if="(userProfile.twitch.displayName && userProfile.twitch.username !== userProfile.twitch.displayName) || userProfile.twitch.email" class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                  <div v-if="userProfile.twitch.displayName && userProfile.twitch.username !== userProfile.twitch.displayName" class="flex items-center gap-2 min-w-0 flex-1">
                    <AccountCircle class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.twitch.displayName }}</span>
                  </div>
                  <div v-if="userProfile.twitch.email" class="flex items-center gap-2 flex-row-reverse min-w-0 flex-1">
                    <Email class="inline w-4 h-4 flex-shrink-0" />
                    <span class="truncate text-[10px] sm:text-xs">{{ userProfile.twitch.email }}</span>
                  </div>
                </div>
                <!-- Row 3: Last Sync -->
                <div v-if="userProfile.twitch.lastSync" class="flex items-center gap-2 text-white/60">
                  <ClockOutline class="inline w-4 h-4 flex-shrink-0" />
                  <span class="text-[10px] sm:text-xs">{{ formatRelativeTime(userProfile.twitch.lastSync) }}</span>
                </div>
              </div>
            </div>
            
            <!-- Referral Input - Only show if Twitch connected -->
            <div v-if="twitchConnected" class="mt-4 pt-4 border-t border-white/10">
              <label class="text-white/80 text-sm block mb-2">
                Referred By (optional)
              </label>
              <div class="flex gap-2">
                <input
                  v-model="referredByInput"
                  type="text"
                  placeholder="Enter Twitch username"
                  :disabled="referredByLocked || savingReferral"
                  :readonly="referredByLocked"
                  class="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
                  :class="referredByLocked ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none focus:border-purple-400'"
                />
                <button
                  v-if="!referredByLocked && referredByInput.trim()"
                  @click="saveReferral"
                  :disabled="savingReferral"
                  class="px-4 py-2 rounded-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white text-sm transition-all duration-200"
                >
                  <Loading v-if="savingReferral" class="inline w-4 h-4 animate-spin" />
                  <span v-else>Save</span>
                </button>
              </div>
              <p v-if="referredByLocked" class="text-green-400 text-xs mt-1">
                ✓ Referral saved (cannot be changed)
              </p>
              <p v-else class="text-white/60 text-xs mt-1">
                Who referred you to the channel?
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- All Connected Success Message -->
      <div v-if="allConnected" class="from-green-400/50 to-green-950/80 bg-gradient-to-br shadow-lg shadow-green-950 backdrop-blur-md rounded-xl p-6 text-center">
        <h3 class="text-2xl font-semibold text-white">
          <CheckCircle class="inline w-6 h-6 text-green-400 -mt-1 mr-1" />
          All Accounts Connected!
        </h3>
        <p class="text-white/80 mb-2">
          Your gaming profiles are now linked & synced.
        </p>
        <p class="text-white/60 text-sm">
          Check <Discord class="inline text-xl -mt-1" title="discord" /> 
          for more info or if you have any questions
        </p>
      </div>

      <!-- OAuth Callback Handler -->
      <div v-if="isProcessingCallback" class="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
        <Loading class="inline w-10 h-10 text-white mb-4 animate-spin" />
        <p class="text-white">Processing authentication...</p>
      </div>

      <!-- Error Display -->
            <!-- Error Display -->
      <div v-if="errorMessage" class="flex flex-col items-center justify-center py-8">
        <AlertCircle class="w-10 h-10 text-red-400 mb-4" />
        <p class="text-red-400 text-lg mb-4">{{ errorMessage }}</p>
        <button @click="errorMessage = ''" class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { onAuthStateChanged, signInWithCustomToken, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { auth, db, functions } from '../firebase'
import { useRouter, useRoute } from 'vue-router'
import { Twitch, Discord, Steam, Loading, CheckCircle, AlertCircle, Account, Identifier, Email, Tag, ClockOutline, AccountCircle } from 'mdue'
import Points from '../components/Points.vue'
import { trackEvent } from '../utils/analytics'

const router = useRouter()
const route = useRoute()

// Referral state
const referredByInput = ref('')
const referredByLocked = ref(false)
const savingReferral = ref(false)

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

// Mock data for development
const MOCK_USER_PROFILE = {
  steam: {
    id: '76561199444558028',
    username: 'SuperExtremelyLongUsernameWithManyCharacters_MaxLength',
    personaname: 'SuperExtremelyLongUsernameWithManyCharacters_MaxLength',
    profileUrl: 'https://steamcommunity.com/id/zosky/',
    avatar: 'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
    lastSync: { toDate: () => new Date(Date.now() - 3600000) } // 1 hour ago
  },
  discord: {
    id: '123456789012345678',
    username: 'ThisIsAnAbsurdlyLongDiscordUsernameToTestOverflow',
    discriminator: '1234',
    email: 'this.is.a.very.very.very.long.email.address.for.testing@example-domain-name.com',
    avatar: 'a_1234567890abcdef1234567890abcdef',
    lastSync: { toDate: () => new Date(Date.now() - 7200000) } // 2 hours ago
  },
  twitch: {
    id: '987654321',
    username: 'extremely_long_twitch_username_maximum_length_test',
    displayName: 'Super Mega Ultra Long Display Name With Many Words',
    email: 'another.extremely.long.email.address.for.layout.testing@twitch-partner-example.tv',
    profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/zosky-profile_image-70x70.png',
    lastSync: { toDate: () => new Date(Date.now() - 1800000) } // 30 minutes ago
  }
}

// Reactive state
const loading = ref({
  steam: false,
  discord: false,
  twitch: false,
  discordVerify: false
})
const loadingProfile = ref(false)

const user = ref(null)
const userProfile = ref(null)
const error = ref('')
const isProcessingCallback = ref(false)
const discordVerificationStatus = ref(null)
const discordInServer = ref(false)
const errorMessage = ref('')

// Computed properties
const steamConnected = computed(() => !!userProfile.value?.steam)
const discordConnected = computed(() => !!userProfile.value?.discord)
const twitchConnected = computed(() => !!userProfile.value?.twitch)
const allConnected = computed(() => steamConnected.value && discordConnected.value && twitchConnected.value)

// OAuth Functions - Now just redirect to Cloud Functions!
const connectSteam = () => {
  loading.value.steam = true
  
  // Track OAuth start
  trackEvent('oauth_start', {
    event_category: 'authentication',
    service: 'steam',
    twitch_username: userProfile.value?.twitch?.username || 'anonymous'
  })
  
  const returnOrigin = encodeURIComponent(window.location.origin)
  // Pass link_uuid for account linking (UUID from localStorage or current auth user)
  const linkUuid = localStorage.getItem('linkUuid') || auth.currentUser?.uid || ''
  window.location.href = `${OAUTH_ENDPOINTS.steam}?return_origin=${returnOrigin}&link_uuid=${linkUuid}`
}

const connectDiscord = () => {
  loading.value.discord = true
  
  // Track OAuth start
  trackEvent('oauth_start', {
    event_category: 'authentication',
    service: 'discord',
    twitch_username: userProfile.value?.twitch?.username || 'anonymous'
  })
  
  const returnOrigin = encodeURIComponent(window.location.origin)
  // Pass link_uuid for account linking (UUID from localStorage or current auth user)
  const linkUuid = localStorage.getItem('linkUuid') || auth.currentUser?.uid || ''
  // Note: Server join happens automatically in discordCallbackV2 cloud function
  window.location.href = `${OAUTH_ENDPOINTS.discord}?return_origin=${returnOrigin}&link_uuid=${linkUuid}`
}

const connectTwitch = () => {
  loading.value.twitch = true
  
  // Track OAuth start
  trackEvent('oauth_start', {
    event_category: 'authentication',
    service: 'twitch',
    twitch_username: 'anonymous'
  })
  
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
    
    // Track OAuth error
    trackEvent('oauth_complete', {
      event_category: 'authentication',
      service: success || 'unknown',
      success: false,
      error: decodeURIComponent(errorParam)
    })
    
    // Clean URL - use router to respect base path
    router.replace('/auth')
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
      
      // Track OAuth completion
      trackEvent('oauth_complete', {
        event_category: 'authentication',
        service: success,
        twitch_username: userProfile.value?.twitch?.username || 'anonymous',
        success: true
      })
      
      // Check if whitelist is now complete (all 3 services connected)
      if (steamConnected.value && discordConnected.value && twitchConnected.value) {
        trackEvent('whitelist_complete', {
          event_category: 'authentication',
          twitch_username: userProfile.value?.twitch?.username || 'anonymous'
        })
      }
      
      // Clean URL - use router to respect base path
      router.replace('/auth')
      
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
  loadingProfile.value = true
  try {
    // Store as link UUID for future account linking
    if (!localStorage.getItem('linkUuid')) {
      localStorage.setItem('linkUuid', uid)
    }
    
    // Fetch account_links document by UUID
    const linkDocRef = doc(db, 'account_links', uid)
    const linkDocSnap = await getDoc(linkDocRef)
    
    if (!linkDocSnap.exists()) {
      userProfile.value = null
      return
    }
    
    const linkData = linkDocSnap.data()
    
    // Build userProfile by fetching individual service profiles
    const profile = {}
    
    // Fetch Steam profile if linked
    if (linkData.steamId && linkData.steamId !== 'not-yet') {
      const steamDocRef = doc(db, 'steam_profiles', linkData.steamId)
      const steamDocSnap = await getDoc(steamDocRef)
      if (steamDocSnap.exists()) {
        profile.steam = steamDocSnap.data()
      }
    }
    
    // Fetch Discord profile if linked
    if (linkData.discordId && linkData.discordId !== 'not-yet') {
      const discordDocRef = doc(db, 'discord_profiles', linkData.discordId)
      const discordDocSnap = await getDoc(discordDocRef)
      if (discordDocSnap.exists()) {
        profile.discord = discordDocSnap.data()
      }
      
      // Load Discord server status from account_links
      discordInServer.value = linkData.discordInServer || false
      
      // Load Discord verification status from account_links
      if (linkData.discordVerified !== undefined) {
        discordVerificationStatus.value = {
          verified: linkData.discordVerified,
          inServer: linkData.discordInServer,
          hasMemberRole: linkData.discordHasMemberRole,
          hasNoobRole: linkData.discordHasNoobRole,
          message: linkData.discordVerified ? 
            '✅ Discord verified! DoubleCounter complete.' :
            linkData.discordInServer ?
            '⏳ Complete DoubleCounter verification, then check status' :
            '⏳ Join server first'
        }
      } else if (linkData.discordInServer) {
        // User is in server but hasn't checked status yet
        discordVerificationStatus.value = {
          verified: false,
          inServer: true,
          message: '⏳ Complete DoubleCounter verification, then check status'
        }
      }
    }
    
    // Fetch Twitch profile if linked
    if (linkData.twitchId && linkData.twitchId !== 'not-yet') {
      const twitchDocRef = doc(db, 'twitch_profiles', linkData.twitchId)
      const twitchDocSnap = await getDoc(twitchDocRef)
      if (twitchDocSnap.exists()) {
        profile.twitch = twitchDocSnap.data()
      }
    }
    
    // Load referredBy from account_links
    if (linkData.referredBy) {
      referredByInput.value = linkData.referredBy
      referredByLocked.value = true
    } else {
      referredByInput.value = ''
      referredByLocked.value = false
    }
    
    userProfile.value = profile
    
  } catch (err) {
    console.error('Error loading user profile:', err)
    error.value = 'Failed to load profile data'
  } finally {
    loadingProfile.value = false
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
    // In dev mode, just update local state
    if (import.meta.env.DEV) {
      userProfile.value.steam = null
      return
    }
    
    const linkUuid = localStorage.getItem('linkUuid')
    if (!linkUuid) {
      console.error('No link UUID found in localStorage')
      errorMessage.value = 'Cannot disconnect: No link UUID found'
      return
    }
    
    // Call Cloud Function to disconnect with history tracking
    const disconnectService = httpsCallable(functions, 'disconnectService')
    await disconnectService({ service: 'steam', linkUuid })
    
    // Reload user profile to reflect changes
    await loadUserProfile(linkUuid)
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
    }
  } catch (err) {
    console.error('Error disconnecting Steam:', err)
    errorMessage.value = 'Failed to disconnect Steam'
  }
}

// Check Discord verification status (after DoubleCounter)
const checkDiscordStatus = async () => {
  loading.value.discordVerify = true
  errorMessage.value = ''
  
  try {
    // In dev mode, mock successful verification
    if (import.meta.env.DEV) {
      discordVerificationStatus.value = {
        verified: true,
        inServer: true,
        hasMemberRole: true,
        hasNoobRole: false,
        message: '✅ Discord verified! DoubleCounter complete.'
      }
      loading.value.discordVerify = false
      return
    }
    
    // Call Cloud Function to verify Discord membership
    const verifyMembership = httpsCallable(functions, 'verifyDiscordMembership')
    const result = await verifyMembership()
    
    discordVerificationStatus.value = result.data
    
    console.log('Discord verification result:', result.data)
  } catch (err) {
    console.error('Error checking Discord status:', err)
    errorMessage.value = `Failed to check Discord status: ${err.message}`
    discordVerificationStatus.value = {
      verified: false,
      message: '❌ Could not check Discord status'
    }
  } finally {
    loading.value.discordVerify = false
  }
}

const disconnectDiscord = async () => {
  if (!confirm('Are you sure you want to disconnect Discord?')) return
  
  try {
    // In dev mode, just update local state
    if (import.meta.env.DEV) {
      userProfile.value.discord = null
      discordVerificationStatus.value = null
      return
    }
    
    const linkUuid = localStorage.getItem('linkUuid')
    if (!linkUuid) {
      console.error('No link UUID found in localStorage')
      errorMessage.value = 'Cannot disconnect: No link UUID found'
      return
    }
    
    // Call Cloud Function to disconnect with history tracking
    const disconnectService = httpsCallable(functions, 'disconnectService')
    await disconnectService({ service: 'discord', linkUuid })
    
    // Clear verification status
    discordVerificationStatus.value = null
    
    // Reload user profile to reflect changes
    await loadUserProfile(linkUuid)
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
    }
  } catch (err) {
    console.error('Error disconnecting Discord:', err)
    errorMessage.value = 'Failed to disconnect Discord'
  }
}

const disconnectTwitch = async () => {
  if (!confirm('Are you sure you want to disconnect Twitch?')) return
  
  try {
    // In dev mode, just update local state
    if (import.meta.env.DEV) {
      userProfile.value.twitch = null
      return
    }
    
    const linkUuid = localStorage.getItem('linkUuid')
    if (!linkUuid) {
      console.error('No link UUID found in localStorage')
      errorMessage.value = 'Cannot disconnect: No link UUID found'
      return
    }
    
    // Call Cloud Function to disconnect with history tracking
    const disconnectService = httpsCallable(functions, 'disconnectService')
    await disconnectService({ service: 'twitch', linkUuid })
    
    // Reload user profile to reflect changes
    await loadUserProfile(linkUuid)
    
    // Clear localStorage if all services disconnected
    if (!userProfile.value.steam && !userProfile.value.discord && !userProfile.value.twitch) {
      localStorage.removeItem('linkUuid')
    }
  } catch (err) {
    console.error('Error disconnecting Twitch:', err)
    errorMessage.value = 'Failed to disconnect Twitch'
  }
}

// Save referral relationship
const saveReferral = async () => {
  const referrer = referredByInput.value.trim().toLowerCase()
  
  if (!referrer) {
    errorMessage.value = 'Please enter a Twitch username'
    return
  }
  
  if (!userProfile.value?.twitch?.username) {
    errorMessage.value = 'You must be logged into Twitch first'
    return
  }
  
  const referred = userProfile.value.twitch.username.toLowerCase()
  
  // Prevent self-referral
  if (referrer === referred) {
    errorMessage.value = 'You cannot refer yourself'
    return
  }
  
  savingReferral.value = true
  errorMessage.value = ''
  
  try {
    // In dev mode, just update local state
    if (import.meta.env.DEV) {
      referredByLocked.value = true
      console.log('Mock: Referral saved', { referrer, referred })
      return
    }
    
    const linkUuid = localStorage.getItem('linkUuid')
    if (!linkUuid) {
      errorMessage.value = 'Cannot save referral: No link UUID found'
      return
    }
    
    // Call Cloud Function to save referral
    const saveReferralFunc = httpsCallable(functions, 'saveReferral')
    const result = await saveReferralFunc({ 
      linkUuid, 
      referredBy: referrer 
    })
    
    console.log('Referral saved:', result.data)
    
    // Lock the input
    referredByLocked.value = true
    
    // Track referral link event
    trackEvent('referral_link', {
      event_category: 'referral',
      referrer: referrer,
      referred: referred,
      twitch_username: referred
    })
    
  } catch (err) {
    console.error('Error saving referral:', err)
    errorMessage.value = `Failed to save referral: ${err.message}`
  } finally {
    savingReferral.value = false
  }
}

// Load mock data for development
const loadMockData = () => {
  user.value = { uid: 'mock-uuid-12345' }
  userProfile.value = { ...MOCK_USER_PROFILE }
  localStorage.setItem('linkUuid', 'mock-uuid-12345')
  
  // Mock Discord as joined to server but not verified (yellow state)
  discordInServer.value = true
  discordVerificationStatus.value = {
    verified: false,
    inServer: true,
    hasMemberRole: false,
    hasNoobRole: true,
    message: '⏳ Complete DoubleCounter verification, then check status'
  }
}

// Listen for auth state changes
onMounted(() => {
  // Track auth page view
  trackEvent('auth_page_view', {
    event_category: 'authentication',
    referrer: document.referrer || 'direct'
  })
  
  // In development, load mock data
  if (import.meta.env.DEV) {
    loadMockData()
    return
  }
  
  // Production: Check for OAuth callback first
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
