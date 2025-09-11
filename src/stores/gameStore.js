// Central data store for game history, as described in the FDD
import { ref, computed } from 'vue'

export const useGameStore = () => {
    const rawData = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    
    const groupedBySteamId = computed(() => {
        const groups = {}
        rawData.value.forEach(entry => {
            if (!groups[entry.steamId]) {
                groups[entry.steamId] = []
            }
            groups[entry.steamId].push(entry)
        })
        return groups
    })
    
    const steamIdStats = computed(() => {
        return Object.keys(groupedBySteamId.value).map(id => ({
            id,
            count: groupedBySteamId.value[id].length
        }))
    })
    
    async function fetchData() {
        isLoading.value = true
        try {
            const response = await fetch('/history.json')
            rawData.value = await response.json()
        } catch (e) {
            error.value = e.message
        } finally {
            isLoading.value = false
        }
    }
    
    return {
        rawData,
        isLoading,
        error,
        groupedBySteamId,
        steamIdStats,
        fetchData
    }
}
