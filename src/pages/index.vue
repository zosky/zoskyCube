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
                    v-for="(steamId, idx) in filteredSteamIdStats" 
                    :key="steamId.id"
                    :steam-id="steamId.id"
                    :entry-count="steamId.count"
                    :entries="groupedBySteamId[steamId.id]"
                    :color="colorMap[steamId.id]"
                    :name="steamNames[steamId.id] || 'UnknownId:' + steamId.id"
                    :active="visibleFiltered[idx]"
                    :youtube="youtubeVodsBySteamId[steamId.id] || []"
                    @click.prevent="toggleLineFiltered(idx)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, ref, watch } from 'vue'
import { useGameStore } from '../stores/gameStore'
import SteamIdEntry from '../components/SteamIdEntry.vue'
import GameLivesLineChart from '../components/GameLivesLineChart.vue'

const { 
    isLoading, 
    error, 
    groupedBySteamId, 
    steamIdStats, 
    steamNames,
    steamColors,
    youtubeVods,
    youtubeVodsBySteamId,
    fetchData 
} = useGameStore()

const gamesForChart = computed(() =>
    steamIdStats?.value?.map((s, idx) => ({
        id: s.id,
        name: steamNames.value[s.id] || 'UnknownId:' + s.id,
        entries: (groupedBySteamId?.value[s.id] || []).map(e => ({
            time: e.time * 1000,
            lives: e.lives || e.deaths || 0
        }))
    }))
)

// Color palette for fallback when steamId not in steamColors
const fallbackPalette = [
  '#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE',
  '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
]

// Generate a consistent color for a steamId (fallback)
function getFallbackColor(steamId) {
    // Use steamId as seed for consistent color selection
    const hash = steamId.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0)
        return a & a
    }, 0)
    return fallbackPalette[Math.abs(hash) % fallbackPalette.length]
}

const colorMap = computed(() => {
  const map = {}
  steamIdStats.value?.forEach((s) => {
    // Use steamColors if available, otherwise fallback to generated color
    map[s.id] = steamColors.value[s.id] || getFallbackColor(s.id)
  })
  return map
})

// Track which lines are visible
const visible = ref([])
watch(steamIdStats, (val) => {
  visible.value = val ? val.map(() => true) : []
}, { immediate: true })

function toggleLine(idx) {
    visible.value = visible.value.map((v, i) => i === idx ? !v : v)
    console.log(idx, 'now', visible.value[idx] ? 'visible' : 'hidden')
}

onMounted(() => {
    fetchData()
})

const searchTerm = ref("")

watch(searchTerm, (val) => {
    if (!val) {
        // Reset all to visible when search is cleared
        visible.value = (steamIdStats.value || []).map(() => true)
    } else {
        // Hide all rows, then show only filtered
        const filteredIds = new Set(filteredSteamIdStats.value.map(s => s.id))
        visible.value = (steamIdStats.value || []).map(s => filteredIds.has(s.id))
    }
})

const filteredSteamIdStats = computed(() => {
    if (!searchTerm.value) return steamIdStats.value || []
    const term = searchTerm.value.toLowerCase()
    return (steamIdStats.value || []).filter(s => {
        const name = steamNames.value[s.id] || ''
        return name.toLowerCase().includes(term)
    })
})

const gamesForChartFiltered = computed(() =>
    filteredSteamIdStats.value.map((s, idx) => ({
        id: s.id,
        name: steamNames.value[s.id] || 'UnknownId:' + s.id,
        entries: (groupedBySteamId?.value[s.id] || [])
            // inject null if entry gap > 3 hours to break line
            .reduce((acc, e) => {
                const entry = { time: e.time * 1000, lives: e.lives || e.deaths || 0 }
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
)

// Track which lines are visible for filtered list
const visibleFiltered = computed({
    get() {
        // Map visible to filteredSteamIdStats
        return filteredSteamIdStats.value.map(s => {
            const idx = (steamIdStats.value || []).findIndex(x => x.id === s.id)
            return visible.value[idx]
        })
    },
    set(newVal) {
        // Update visible for the filtered indices
        filteredSteamIdStats.value.forEach((s, i) => {
            const idx = (steamIdStats.value || []).findIndex(x => x.id === s.id)
            visible.value[idx] = newVal[i]
        })
    }
})

function toggleLineFiltered(idx) {
    const newVal = visibleFiltered.value.map((v, i) => i === idx ? !v : v)
    visibleFiltered.value = newVal
    console.log(idx, 'now', newVal[idx] ? 'visible' : 'hidden')
}
</script>
