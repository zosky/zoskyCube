<route lang="yaml">
meta:
  title: Game Stats
</route>

<template>
    <div class="mx-auto p-4">
        <div v-if="isLoading" class="text-center py-8">
            <p>Loading data...</p>
        </div>
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {{ error }}
        </div>
        <div v-else>
            <GameLivesLineChart 
                :games="gamesForChartFiltered" 
                :visible="visibleFiltered" 
                :colorMap="colorMap" 
                class="mb-8" />
            <div class="mb-4">
                <input
                    v-model="searchTerm"
                    type="search"
                    placeholder="Search games..."
                    class="border-blue-900 bg-transparent w-full p-2 border rounded shadow focus:outline-none focus:ring"
                />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                <SteamIdEntry 
                    v-for="game in filteredGameStats" 
                    :key="game.id"
                    :steam-id="game.id"
                    :players="game.players"
                    :entry-count="game.totalCount"
                    :color="getGameColor(game.id)"
                    :name="game.name"
                    :active="gameVisibility[game.id]"
                    :youtube="youtubeVodsBySteamId[game.id] || []"
                    @click.prevent="toggleGame(game.id)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
// Inject the global game store
const gameStore = inject('gameStore')
const { 
    isLoading, 
    error, 
    gameStats, 
    steamColors,
    youtubeVodsBySteamId,
} = gameStore

// Generate chart data with separate series for each player
const gamesForChart = computed(() => {
    const chartSeries = []
    gameStats.value?.forEach(game => {
        game.players.forEach(player => {
            chartSeries.push({
                id: game.id,
                player: player.player,
                name: game.players.length > 1 ? `${game.name} (${player.playerName})` : game.name,
                entries: player.entries.map(e => ({
                    time: e.time * 1000,
                    lives: e.lives || e.deaths || 0
                }))
            })
        })
    })
    return chartSeries
})

// Color palette for fallback when steamId not in steamColors
const fallbackPalette = [
  '#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE',
  '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
]

// Generate a consistent color for a steamId (fallback)
function getFallbackColor(steamId) {
    const hash = steamId.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0)
        return a & a
    }, 0)
    return fallbackPalette[Math.abs(hash) % fallbackPalette.length]
}

// Get base game color
function getGameColor(steamId) {
    return steamColors.value[steamId] || getFallbackColor(steamId)
}

// Generate player-specific colors by adjusting brightness/saturation
function getPlayerColor(steamId, player) {
    const baseColor = getGameColor(steamId)
    
    if (player === 1) {
        return baseColor // Player 1 gets the base color
    }
    
    // Player 2+ gets a darker variant
    const hex = baseColor.replace('#', '')
    let r = parseInt(hex.substr(0, 2), 16)
    let g = parseInt(hex.substr(2, 2), 16)
    let b = parseInt(hex.substr(4, 2), 16)
    
    // Darken for player 2+
    const darkenAmount = (player - 1) * 30
    r = Math.max(0, r - darkenAmount)
    g = Math.max(0, g - darkenAmount)
    b = Math.max(0, b - darkenAmount)
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

const colorMap = computed(() => {
  const map = {}
  gamesForChart.value?.forEach((series) => {
    const key = `${series.id}-${series.player}`
    map[key] = getPlayerColor(series.id, series.player)
  })
  return map
})

// Track game visibility (true = show all players for this game)
const gameVisibility = ref({})
watch(gameStats, (val) => {
  const newVisibility = {}
  val?.forEach(game => {
    newVisibility[game.id] = true
  })
  gameVisibility.value = newVisibility
}, { immediate: true })

function toggleGame(gameId) {
    gameVisibility.value[gameId] = !gameVisibility.value[gameId]
    console.log(`Game ${gameId} now`, gameVisibility.value[gameId] ? 'visible' : 'hidden')
}

const searchTerm = ref("")

const filteredGameStats = computed(() => {
    if (!searchTerm.value) return gameStats.value || []
    const term = searchTerm.value.toLowerCase()
    return (gameStats.value || []).filter(game => {
        return game.name.toLowerCase().includes(term)
    })
})

const gamesForChartFiltered = computed(() => {
    const filteredGameIds = new Set(filteredGameStats.value.map(g => g.id))
    return gamesForChart.value
        .filter(series => filteredGameIds.has(series.id))
        .map(series => ({
            ...series,
            entries: series.entries
                // inject null if entry gap > 3 hours to break line
                .reduce((acc, e) => {
                    const entry = { time: e.time, lives: e.lives }
                    if (acc.length > 0) {
                        const lastEntry = acc[acc.length - 1]
                        if (entry.time - lastEntry.time > 3 * 3600 * 1000) {
                            acc.push({ time: lastEntry.time + 1, lives: null })
                        }
                    }
                    acc.push(entry)
                    return acc
                }, [])
        }))
})

// Track which chart series are visible (based on game visibility and filtering)
const visibleFiltered = computed(() => {
    return gamesForChartFiltered.value.map(series => {
        return gameVisibility.value[series.id] || false
    })
})
</script>
