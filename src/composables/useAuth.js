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

// Load user profile from Firestore
const loadUserProfile = async (uid) => {
  try {
    console.log('🔥 useAuth: Loading user profile for UID:', uid)
    
    const userDocRef = doc(db, 'users', uid)
    const userDocSnap = await getDoc(userDocRef)
    
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data()
      console.log('🔥 useAuth: User profile loaded:', userData)
      
      userProfile.value = {
        twitch: userData.twitch,
        discord: userData.discord,
        steam: userData.steam
      }
    } else {
      console.log('🔥 useAuth: No user profile found in Firestore')
      userProfile.value = null
    }
    
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
