<template>
  <div class="min-h-screen bg-gray-900 text-white p-4 pt-10">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="text-lg">Loading videos...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-400 text-center p-4">
      Error: {{ error }}
    </div>

    <!-- Main Content -->
    <div v-else class="max-w-full">
      <!-- Selected Video Player with XL Layout -->
      <div v-if="selectedVideo" class="mb-8 mx-auto">
        <div class="xl:flex xl:gap-6">
          <!-- Video Player - 3/4 width on XL -->
          <div class="xl:w-3/4">
            <div class="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe
                :src="`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=0&rel=0`"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            
            <!-- Video Info -->
            <div class="bg-gray-800 rounded-lg p-4">
              <h2 class="text-xl font-bold mb-2">{{ selectedVideo.game }}</h2>
              <p class="text-gray-300 text-sm">{{ formatDate(selectedVideo.date) }}</p>
              <!-- <p class="text-gray-400 text-xs mt-1">Video ID: {{ selectedVideo.id }}</p> -->
            </div>
          </div>

          <!-- Related Videos Sidebar - 1/4 width on XL -->
          <div v-if="selectedVideo" class="xl:w-1/4 mt-6 xl:mt-0">
            <div class="bg-gray-800 rounded-lg overflow-hidden h-full">
              <div class="p-4 border-b border-gray-700">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                  </svg>
                  More {{ selectedVideo.game }}
                </h3>
                <p class="text-sm text-gray-400">{{ getRelatedVideosForSelected().length }} videos</p>
              </div>
              
              <div class="relative xl:h-[calc(100vh-20rem)]">
                <div class="h-full xl:h-[calc(100vh-20rem)] overflow-y-auto scrollable-related p-4">
                  <div class="space-y-3 h-full">
                    <div
                      v-for="video in getRelatedVideosForSelected()"
                      :key="video.id"
                      class="bg-gray-700 rounded-lg p-3 cursor-pointer hover:bg-gray-600 transition-colors group"
                      :class="{
                        'ring-2 ring-blue-500 bg-blue-900/30': selectedVideo?.id === video.id
                      }"
                      @click="selectVideo(video)"
                    >
                      <div class="flex flex-col space-y-2">
                        <div class="relative w-full h-20 bg-black rounded overflow-hidden">
                          <img
                            :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
                            :alt="video.game"
                            class="w-full h-full object-cover"
                          />
                          <!-- Mini play button -->
                          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                            <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                              <svg class="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 5v10l8-5-8-5z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p class="text-sm text-gray-300 font-medium">{{ formatDate(video.date) }}</p>
                          <!-- <p class="text-xs text-gray-400 mt-1">{{ video.id }}</p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Fade effect at bottom - moved lower -->
                <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Games Grid -->
      <div class="overflow-x-auto pb-4">
        <div class="flex gap-6" style="width: max-content;">
          <div
            v-for="game in uniqueGames"
            :key="game"
            class="flex-none w-80 bg-gray-800 rounded-lg overflow-hidden"
          >
            <!-- Game Header with Steam Thumbnail -->
            <div class="relative">
              <div class="w-full h-48 bg-black cursor-pointer group" @click="selectVideo(getMostRecentVideo(game))">
                <img
                  :src="getSteamThumbnailUrl(game)"
                  :alt="game"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
                <!-- Play button overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Game Title - overlaid on bottom -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
                <h3 class="text-lg font-bold text-white mb-2">{{ game }}</h3>
                <div class="flex justify-between items-center text-sm">
                  <div class="flex items-center gap-1 text-gray-300">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
                    </svg>
                    {{ getVideosByGame(game).length }}
                  </div>
                  <div class="flex items-center gap-1 text-gray-400">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
                    </svg>
                    {{ formatShortDate(getMostRecentVideo(game).date) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- All Videos for This Game -->
            <div class="relative h-96">
              <div class="h-full overflow-y-auto scrollable-videos p-3">
                <div class="space-y-2">
                  <div
                    v-for="video in getVideosByGame(game)"
                    :key="video.id"
                    class="bg-gray-700 rounded-lg p-2 cursor-pointer hover:bg-gray-600 transition-colors group"
                    :class="{
                      'ring-2 ring-blue-500 bg-blue-900/30': selectedVideo?.id === video.id
                    }"
                    @click="selectVideo(video)"
                  >
                    <div class="flex items-center space-x-3">
                      <div class="relative w-16 h-12 bg-black rounded overflow-hidden flex-shrink-0">
                        <img
                          :src="`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`"
                          :alt="video.game"
                          class="w-full h-full object-cover"
                        />
                        <!-- Mini play button -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <svg class="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 5v10l8-5-8-5z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-300 truncate font-medium">{{ video.game }}</p>
                        <p class="text-xs text-gray-400">{{ formatDate(video.date) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Fade effect at bottom -->
              <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Info -->
      <div class="mt-8 text-center text-gray-400">
        <p>{{ uniqueGames.length }} games • {{ totalVideosCount }} total videos</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Inject the global game store
const gameStore = inject('gameStore')
const { youtubeVods, steamNames, isLoading, error } = gameStore

const selectedVideo = ref(null)
const selectedGame = ref(null)

// Sort videos by date (most recent first)
const sortedVideos = computed(() => {
  let videos = [...youtubeVods.value]
  
  // Filter by selected game if any
  if (selectedGame.value) {
    videos = videos.filter(video => video.game === selectedGame.value)
  }
  
  // Sort by date (newest first)
  return videos.sort((a, b) => new Date(b.date) - new Date(a.date))
})

// Get unique games ordered by most recently played
const uniqueGames = computed(() => {
  const games = [...new Set(youtubeVods.value.map(video => video.game))]
  
  // Sort games by their most recent video date (newest first)
  return games.sort((gameA, gameB) => {
    const mostRecentA = getMostRecentVideo(gameA)
    const mostRecentB = getMostRecentVideo(gameB)
    return new Date(mostRecentB.date) - new Date(mostRecentA.date)
  })
})

// Get videos by game
function getVideosByGame(game) {
  return youtubeVods.value
    .filter(video => video.game === game)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get the most recent video for a game
function getMostRecentVideo(game) {
  const gameVideos = getVideosByGame(game)
  return gameVideos.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
}

// Select a video
function selectVideo(video) {
  selectedVideo.value = video
}

// Format date for display
function formatDate(dateString) {
  if (!dateString) return 'Unknown date'
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    return dateString
  }
}

// Auto-select most recent video when videos are loaded
watch(youtubeVods, (newVideos) => {
  if (newVideos.length > 0 && !selectedVideo.value) {
    // Get the most recent video across all games
    const allVideosSorted = [...newVideos].sort((a, b) => new Date(b.date) - new Date(a.date))
    selectedVideo.value = allVideosSorted[0]
  }
}, { immediate: true })

// Get filtered games based on selection
const filteredGames = computed(() => {
  if (selectedGame.value) {
    return [selectedGame.value]
  }
  return uniqueGames.value
})

// Total videos count for "All Games" button
const totalVideosCount = computed(() => {
  return youtubeVods.value.length
})

// Get Steam thumbnail URL for a game
function getSteamThumbnailUrl(gameName) {
  // Try exact match only
  const steamId = Object.entries(steamNames.value).find(([id, name]) => name === gameName)?.[0]
  
  if (steamId) {
    return `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/header.jpg`
  }
  
  // Fallback to most recent YouTube thumbnail if no exact Steam ID match found
  const mostRecentVideo = getMostRecentVideo(gameName)
  return `https://img.youtube.com/vi/${mostRecentVideo.id}/maxresdefault.jpg`
}

// Handle image load errors (fallback to YouTube thumbnail)
function handleImageError(event) {
  const img = event.target
  const gameName = img.alt
  const mostRecentVideo = getMostRecentVideo(gameName)
  img.src = `https://img.youtube.com/vi/${mostRecentVideo.id}/maxresdefault.jpg`
}

// Get related videos for the currently selected video
function getRelatedVideosForSelected() {
  if (!selectedVideo.value) return []
  
  return youtubeVods.value
    .filter(video => video.game === selectedVideo.value.game)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Format date for display (short version)
function formatShortDate(dateString) {
  if (!dateString) return 'N/A'
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    return dateString
  }
}
</script>

<style scoped>
/* Custom scrollbar for the horizontal games scroll */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}

/* Custom scrollbar for video lists in each game column */
.scrollable-videos::-webkit-scrollbar {
  width: 6px;
}

.scrollable-videos::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

.scrollable-videos::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 3px;
}

.scrollable-videos::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}

/* Custom scrollbar for related videos sidebar */
.scrollable-related::-webkit-scrollbar {
  width: 6px;
}

.scrollable-related::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

.scrollable-related::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 3px;
}

.scrollable-related::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}
</style>