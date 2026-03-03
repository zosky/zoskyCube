import { ref, computed, watch } from 'vue'

// Shared state (singleton across components)
const storeItems = ref([])
const isLoading = ref(false)
const error = ref(null)
let hasFetched = false

// StreamElements Channel ID (public)
const SE_CHANNEL_ID = '668816ac484cab966df79977'
const SE_API_URL = `https://api.streamelements.com/kappa/v2/store/${SE_CHANNEL_ID}/items`
const SE_POINTS_URL = `https://api.streamelements.com/kappa/v2/points/${SE_CHANNEL_ID}`

// Steam data cache (shared)
const steamCache = new Map()

export function useStoreData() {
  // Fetch store items (deduplicated)
  async function fetchStoreItems() {
    if (hasFetched && storeItems.value.length > 0) return
    if (isLoading.value) return

    isLoading.value = true
    error.value = null

    try {
      console.log('🏪 Fetching StreamElements store items...')
      const response = await fetch(SE_API_URL)
      if (!response.ok) throw new Error(`API error: ${response.status}`)
      const data = await response.json()
      console.log(`📦 Loaded ${data.length} store items`)
      storeItems.value = data
      hasFetched = true
    } catch (err) {
      console.error('❌ Failed to fetch store items:', err)
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  // Force refetch (for retry)
  async function refetchStoreItems() {
    hasFetched = false
    await fetchStoreItems()
  }

  // All enabled items
  const enabledItems = computed(() =>
    storeItems.value.filter(item => item.enabled)
  )

  // Total keys available
  const totalKeys = computed(() =>
    enabledItems.value.reduce((sum, item) => sum + (item.quantity?.current || 0), 0)
  )

  // Sort helper
  function sortItems(items, key, direction) {
    return [...items].sort((a, b) => {
      let aVal, bVal

      switch (key) {
        case 'name':
          aVal = a.name?.toLowerCase() || ''
          bVal = b.name?.toLowerCase() || ''
          break
        case 'cost':
          aVal = a.cost || 0
          bVal = b.cost || 0
          break
        case 'createdAt':
          aVal = new Date(a.createdAt).getTime()
          bVal = new Date(b.createdAt).getTime()
          break
        case 'quantity':
          aVal = a.quantity?.current || 0
          bVal = b.quantity?.current || 0
          break
        default:
          return 0
      }

      if (key === 'name') {
        const result = aVal.localeCompare(bVal)
        return direction === 'asc' ? result : -result
      }

      const result = aVal - bVal
      return direction === 'asc' ? result : -result
    })
  }

  // Newest items (sorted by createdAt desc)
  function getNewest(count) {
    return computed(() => {
      const sorted = sortItems(enabledItems.value, 'createdAt', 'desc')
      return sorted.slice(0, count)
    })
  }

  // Get Steam app ID from item
  function getSteamAppId(item) {
    const identifier = item.bot?.identifier || ''
    const match = identifier.match(/steam(\d+)/)
    return match ? match[1] : null
  }

  // Get Steam link
  function getSteamLink(item) {
    const identifier = item.bot?.identifier || ''
    const steamId = identifier.replace('steam', '')
    if (steamId && /^\d+$/.test(steamId)) {
      return `https://store.steampowered.com/app/${steamId}`
    }
    return 'https://store.steampowered.com'
  }

  // Get default thumbnail from Steam
  function getDefaultThumbnail(item) {
    const appId = getSteamAppId(item)
    if (appId) {
      return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
    }
    return 'https://via.placeholder.com/460x215?text=No+Image'
  }

  // Handle image error
  function handleImageError(event, item) {
    const appId = getSteamAppId(item)
    if (appId && !event.target.src.includes('steamstatic')) {
      event.target.src = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
    } else {
      event.target.src = 'https://via.placeholder.com/460x215?text=No+Image'
    }
  }

  // Format date
  function formatDate(dateStr) {
    if (!dateStr) return 'N/A'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    })
  }

  // Fetch user points from StreamElements
  async function fetchUserPoints(username) {
    if (!username) return null
    try {
      const response = await fetch(`${SE_POINTS_URL}/${username.toLowerCase()}`)
      if (!response.ok) throw new Error(`API error: ${response.status}`)
      const data = await response.json()
      return data.points || 0
    } catch (err) {
      console.error('❌ Failed to fetch user points:', err)
      return null
    }
  }

  return {
    storeItems,
    isLoading,
    error,
    enabledItems,
    totalKeys,
    fetchStoreItems,
    refetchStoreItems,
    sortItems,
    getNewest,
    getSteamAppId,
    getSteamLink,
    getDefaultThumbnail,
    handleImageError,
    formatDate,
    fetchUserPoints,
    steamCache
  }
}
