/**
 * Twitch Avatar Composable
 * Fetches Twitch profile images via decapi.me (no auth required)
 * Caches results in memory to avoid repeated API calls
 */

import { ref } from 'vue'

// Shared cache across all components
const avatarCache = ref({})
const pendingFetches = {}

/**
 * Fetch a Twitch user's avatar URL
 * Uses decapi.me which returns the CDN URL as plain text
 * @param {string} username - Twitch username
 * @returns {Promise<string|null>} - Avatar URL or null
 */
async function fetchAvatar(username) {
  if (!username) return null
  const lower = username.toLowerCase()

  // Return cached
  if (avatarCache.value[lower]) return avatarCache.value[lower]

  // Deduplicate in-flight requests
  if (pendingFetches[lower]) return pendingFetches[lower]

  pendingFetches[lower] = (async () => {
    try {
      const res = await fetch(`https://decapi.me/twitch/avatar/${lower}`)
      if (!res.ok) return null
      const url = (await res.text()).trim()
      // Validate it looks like a Twitch CDN URL
      if (url.startsWith('https://static-cdn.jtvnw.net/')) {
        avatarCache.value[lower] = url
        return url
      }
      return null
    } catch {
      return null
    } finally {
      delete pendingFetches[lower]
    }
  })()

  return pendingFetches[lower]
}

export function useTwitchAvatars() {
  /**
   * Get avatar URL (returns cached value or null, triggers fetch in background)
   * Use this in computed/template — it's reactive via avatarCache ref
   */
  function getAvatar(username) {
    if (!username) return null
    const lower = username.toLowerCase()
    if (avatarCache.value[lower]) return avatarCache.value[lower]
    // Trigger async fetch (will update cache reactively)
    fetchAvatar(lower)
    return null
  }

  return {
    avatarCache,
    getAvatar,
    fetchAvatar
  }
}
