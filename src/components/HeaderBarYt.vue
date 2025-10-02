<script setup>
import { computed, inject } from 'vue'
import { Youtube } from 'mdue'
const router = useRouter()
// Inject the global game store
const gameStore = inject('gameStore')
const { youtubeVods } = gameStore

// Get the most recent video for a game
function getMostRecentVideo(game) {
  const gameVideos = youtubeVods.value
    .filter(video => video.game === game)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return gameVideos[0]
}

const totalVideosCount = computed(() => {
  return youtubeVods.value.length
})

const uniqueGames = computed(() => {
  const games = [...new Set(youtubeVods.value.map(video => video.game))]
  
  // Sort games by their most recent video date (newest first)
  return games.sort((gameA, gameB) => {
    const mostRecentA = getMostRecentVideo(gameA)
    const mostRecentB = getMostRecentVideo(gameB)
    return new Date(mostRecentB.date) - new Date(mostRecentA.date)
  })
})

// Calculate total duration of all videos
const totalDuration = computed(() => {
  const totalSeconds = youtubeVods.value.reduce((acc, video) => {
    return acc + (video.duration || 0)
  }, 0)
  
  if (totalSeconds === 0) return '0h'
  
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  
  if (days > 0) {
    return `${days}d${hours}h`
  } else if (hours > 0) {
    return `${hours}h${minutes}m`
  } else {
    return `${minutes}m`
  }
})
</script>

<template>
    <!-- href="https://youtube.com/@zoskyCube" -->
    <a :title="'yt:zoskyCube'" 
        class="-my-2"
        :class="$route.path == '/videos'?'text-yellow-300':'text-red-600'">
        <Youtube class="text-3xl" />
        <div class="flex flex-col items-center scale-75 origin-left -mr-2">
            <p class="text-sm"
                :title="`- games: ${ uniqueGames.length }\n - videos: ${ totalVideosCount }`">
                {{ uniqueGames.length }}•{{ totalVideosCount }}
            </p>
            <p class="text-xs opacity-75 -mt-1"
                :title="`Total duration: ${totalDuration}`">
                {{ totalDuration }}
            </p>
        </div>
    </a>
</template>