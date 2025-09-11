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
            getting good</h1>
        <div v-if="isLoading" class="text-center py-8">
            <p>Loading data...</p>
        </div>
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {{ error }}
        </div>
        <div v-else>
            <GameLivesLineChart :games="gamesForChart" :visible="visible" :colorMap="colorMap" class="mb-8" />
            <div class="flex flex-row flex-wrap gap-x-3">
                <SteamIdEntry 
                    v-for="(steamId, idx) in steamIdStats" 
                    :key="steamId.id"
                    :steam-id="steamId.id"
                    :entry-count="steamId.count"
                    :entries="groupedBySteamId[steamId.id]"
                    :color="colorMap[steamId.id]"
                    :active="visible[idx]"
                    @click.prevent="toggleLine(idx)"
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
    fetchData 
} = useGameStore()

const gamesForChart = computed(() =>
    steamIdStats?.value?.map((s, idx) => ({
        name: s.id,
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
</script>
