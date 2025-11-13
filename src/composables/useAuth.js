/**
 * Auth Composable
 * Provides reactive authentication state and user profile management
 */

import { ref, computed } from 'vue'
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const user = ref(null)
const userProfile = ref(null)
const loading = ref(true)
const error = ref('')

// Computed properties
const isAuthenticated = computed(() => !!user.value)
const steamConnected = computed(() => !!userProfile.value?.steam)
const discordConnected = computed(() => !!userProfile.value?.discord)
const twitchConnected = computed(() => !!userProfile.value?.twitch)
const allConnected = computed(() => 
  steamConnected.value && discordConnected.value && twitchConnected.value
)

// Load user profile from Firestore (UUID-based architecture)
const loadUserProfile = async (uid) => {
  try {
    console.log('🔥 useAuth: Loading user profile for UID:', uid)
    
    // Store as link UUID for future account linking
    if (!localStorage.getItem('linkUuid')) {
      localStorage.setItem('linkUuid', uid)
    }
    
    // Fetch account_links document by UUID
    const linkDocRef = doc(db, 'account_links', uid)
    const linkDocSnap = await getDoc(linkDocRef)
    
    if (!linkDocSnap.exists()) {
      console.log('🔥 useAuth: No account links found in Firestore')
      userProfile.value = null
      return
    }
    
    const linkData = linkDocSnap.data()
    console.log('🔥 useAuth: Account links loaded:', linkData)
    
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
    }
    
    // Fetch Twitch profile if linked
    if (linkData.twitchId && linkData.twitchId !== 'not-yet') {
      const twitchDocRef = doc(db, 'twitch_profiles', linkData.twitchId)
      const twitchDocSnap = await getDoc(twitchDocRef)
      if (twitchDocSnap.exists()) {
        profile.twitch = twitchDocSnap.data()
      }
    }
    
    userProfile.value = profile
    console.log('🔥 useAuth: User profile built:', profile)
    
  } catch (err) {
    console.error('🔥 useAuth: Error loading user profile:', err)
    error.value = 'Failed to load profile data'
    throw err
  }
}

// Refresh user profile from Firestore
const refreshProfile = async () => {
  if (!user.value) {
    console.warn('🔥 useAuth: Cannot refresh profile - no user authenticated')
    return
  }
  
  await loadUserProfile(user.value.uid)
}

// Sign out
const signOut = async () => {
  try {
    await firebaseSignOut(auth)
    user.value = null
    userProfile.value = null
    console.log('🔥 useAuth: User signed out successfully')
  } catch (err) {
    console.error('🔥 useAuth: Sign out error:', err)
    error.value = 'Failed to sign out'
    throw err
  }
}

// Initialize auth state listener (call once on app mount)
let authStateInitialized = false
const initAuthState = () => {
  if (authStateInitialized) {
    console.warn('🔥 useAuth: Auth state already initialized')
    return
  }
  
  authStateInitialized = true
  console.log('🔥 useAuth: Initializing auth state listener')
  
  onAuthStateChanged(auth, async (firebaseUser) => {
    loading.value = true
    user.value = firebaseUser
    
    if (firebaseUser) {
      console.log('🔥 useAuth: User authenticated:', firebaseUser.uid)
      try {
        await loadUserProfile(firebaseUser.uid)
      } catch (err) {
        console.error('🔥 useAuth: Failed to load profile on auth state change:', err)
      }
    } else {
      console.log('🔥 useAuth: No user authenticated')
      userProfile.value = null
    }
    
    loading.value = false
  })
}

export function useAuth() {
  // Initialize on first use
  if (!authStateInitialized) {
    initAuthState()
  }
  
  return {
    // State
    user,
    userProfile,
    loading,
    error,
    
    // Computed
    isAuthenticated,
    steamConnected,
    discordConnected,
    twitchConnected,
    allConnected,
    
    // Methods
    refreshProfile,
    signOut
  }
}
