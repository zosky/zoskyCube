<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-3 opacity-50 flex items-center gap-2">
            <a 
                class="min-w-max flex items-center" 
                href="https://twitch.tv/zoskyCube">
                <Twitch /> zoskyCube</a>
            <Steam />
            <SkullCrossbones />
            <GamepadVariantOutline />
        </h1>
        <div v-if="isLoading" class="text-center py-8">
            <p>Loading data...</p>
        </div>
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {{ error }}
        </div>
        <div v-else>
            <GameLivesLineChart :games="gamesForChartFiltered" :visible="visibleFiltered" :colorMap="colorMap" class="mb-8" />
            <div class="mb-4">
                <input
                    v-model="searchTerm"
                    type="search"
                    placeholder="Search games..."
                    class="border-blue-900 bg-transparent w-full p-2 border rounded shadow focus:outline-none focus:ring"
                />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <SteamIdEntry 
                    v-for="(steamId, idx) in filteredSteamIdStats" 
                    :key="steamId.id"
                    :steam-id="steamId.id"
                    :entry-count="steamId.count"
                    :entries="groupedBySteamId[steamId.id]"
                    :color="colorMap[steamId.id]"
                    :name="steamNames[steamId.id] || 'UnknownId:' + steamId.id"
                    :active="visibleFiltered[idx]"
                    @click.prevent="toggleLineFiltered(idx)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Twitch, Steam, GamepadVariantOutline, SkullCrossbones } from 'mdue'
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

// Color palette and colorMap for chart/entries
const palette = [
  '#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE',
  '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
]
const colorMap = computed(() => {
  const map = {}
  steamIdStats.value?.forEach((s, idx) => {
    map[s.id] = palette[idx % palette.length]
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
        name: steamNames.value[s.id] || 'UnknownId:' + s.id,
        entries: (groupedBySteamId?.value[s.id] || []).map(e => ({
            time: e.time * 1000,
            lives: e.lives || e.deaths || 0
        }))
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
