/**
 * User History Composable
 * Provides efficient caching and real-time updates for user handout history
 */

import { collection, query, where, orderBy, limit, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export function useUserHistory() {
  const username = ref('')
  const historyData = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  let unsubscribe = null
  
  /**
   * Load user history with smart caching
   */
  async function loadUserHistory(user) {
    if (!user) return
    
    username.value = user
    isLoading.value = true
    error.value = null
    
    try {
      // Step 1: Check localStorage cache
      const cacheKey = `zoskyCube_userHistory_${user}`
      const cached = localStorage.getItem(cacheKey)
      
      if (cached) {
        const cacheData = JSON.parse(cached)
        historyData.value = cacheData.records
        console.log(`📦 Loaded ${cacheData.records.length} cached records for ${user}`)
        
        // Step 2: Fetch only NEW records (after newest cached timestamp)
        const newerRecords = await fetchRecordsAfter(user, cacheData.newestTimestamp)
        
        if (newerRecords.length > 0) {
          console.log(`🆕 Found ${newerRecords.length} new records`)
          
          // Step 3: Merge and deduplicate
          const merged = mergeRecords(cacheData.records, newerRecords)
          historyData.value = merged
          
          // Step 4: Update cache
          updateCache(user, merged)
        } else {
          console.log(`✅ Cache is up to date`)
        }
      } else {
        // No cache - fetch all records
        console.log(`🔄 No cache found, fetching all records for ${user}`)
        const allRecords = await fetchAllRecords(user)
        historyData.value = allRecords
        
        // Save to cache
        if (allRecords.length > 0) {
          updateCache(user, allRecords)
        }
      }
    } catch (err) {
      console.error('❌ Error loading user history:', err)
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }
  
  /**
   * Fetch all records for a user
   */
  async function fetchAllRecords(user) {
    const q = query(
      collection(db, 'user_handouts', user, 'history'),
      orderBy('timestamp', 'desc'),
      limit(1000)  // Safety limit
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  }
  
  /**
   * Fetch only records newer than given timestamp
   */
  async function fetchRecordsAfter(user, afterTimestamp) {
    const q = query(
      collection(db, 'user_handouts', user, 'history'),
      where('timestamp', '>', afterTimestamp),
      orderBy('timestamp', 'desc'),
      limit(500)
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  }
  
  /**
   * Merge cached and new records, remove duplicates
   */
  function mergeRecords(cached, newer) {
    const merged = [...newer, ...cached]
    
    // Deduplicate by ID
    const unique = merged.reduce((acc, record) => {
      if (!acc.find(r => r.id === record.id)) {
        acc.push(record)
      }
      return acc
    }, [])
    
    // Sort by timestamp DESC
    return unique.sort((a, b) => 
      b.timestamp.seconds - a.timestamp.seconds
    )
  }
  
  /**
   * Update localStorage cache
   */
  function updateCache(user, records) {
    if (records.length === 0) return
    
    // Limit to last 1000 records to avoid localStorage overflow
    const limitedRecords = records.slice(0, 1000)
    
    const cacheData = {
      username: user,
      lastUpdated: new Date().toISOString(),
      newestTimestamp: limitedRecords[0].timestamp,  // First record (newest)
      records: limitedRecords
    }
    
    const cacheKey = `zoskyCube_userHistory_${user}`
    
    try {
      localStorage.setItem(cacheKey, JSON.stringify(cacheData))
      console.log(`💾 Cached ${limitedRecords.length} records for ${user}`)
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.warn('⚠️ localStorage quota exceeded, clearing old caches')
        // Clear all user history caches
        Object.keys(localStorage)
          .filter(key => key.startsWith('zoskyCube_userHistory_'))
          .forEach(key => localStorage.removeItem(key))
        
        // Retry with current data
        try {
          localStorage.setItem(cacheKey, JSON.stringify(cacheData))
        } catch (retryErr) {
          console.error('Failed to cache even after cleanup:', retryErr)
        }
      }
    }
  }
  
  /**
   * Setup real-time listener for new handouts
   */
  function setupRealtimeListener() {
    if (!username.value) return
    
    const historyRef = query(
      collection(db, 'user_handouts', username.value, 'history'),
      orderBy('timestamp', 'desc'),
      limit(1)
    )
    
    unsubscribe = onSnapshot(historyRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const newRecord = { 
            id: change.doc.id, 
            ...change.doc.data() 
          }
          
          // Check if already in local data
          const exists = historyData.value.find(r => r.id === newRecord.id)
          
          if (!exists) {
            console.log('🔔 New handout received in real-time:', newRecord)
            
            // Add to beginning (newest first)
            historyData.value.unshift(newRecord)
            
            // Update cache immediately
            updateCache(username.value, historyData.value)
          }
        }
      })
    }, (err) => {
      console.error('Listener error:', err)
    })
  }
  
  /**
   * Cleanup listener
   */
  function cleanupListener() {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }
  
  /**
   * Clear cache for current user
   */
  function clearCache() {
    if (!username.value) return
    const cacheKey = `zoskyCube_userHistory_${username.value}`
    localStorage.removeItem(cacheKey)
    console.log(`🗑️ Cache cleared for ${username.value}`)
  }
  
  return {
    username,
    historyData,
    isLoading,
    error,
    loadUserHistory,
    setupRealtimeListener,
    cleanupListener,
    clearCache
  }
}
