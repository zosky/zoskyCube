// Central data store for game history, as described in the FDD
import { ref, computed } from 'vue'

const fetchCsvToJson = async (url) => {
    const response = await fetch(url)
    const text = await response.text()
    const lines = text.split('\n').filter(line => line.trim() !== '');    
    // Extract headers from first line
    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));

    // Process data rows
    const jsonARR = lines.slice(1).map(line => {
        const values = line.split(',').map(val => val.replace(/"/g, ''));
        const obj = {};
        headers.forEach((header, index) => {
            // Convert to number if it's numeric
            const value = values[index];
            obj[header] = !isNaN(Number(value)) ? Number(value) : value;
        });
        return obj;
    });

    return jsonARR
}

export const useGameStore = () => {
    const rawData = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const steamNames = ref({}) // { steamId: gameName }
    const youtubeVods = ref([]) // [{ id:(@YT), date(ofTTVvod), game:(name) }, ... ]
    
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

    const youtubeVodsBySteamId = computed(() => {
        const rawD = youtubeVods.value
        const steamNamesMap = Object.entries(steamNames.value).map(([id, name]) => ({id, name}))
        const mapD = rawD.map(vod => vod={ 
            ...vod, 
            steamId: steamNamesMap.find(sn => sn.name === vod.game)?.id || null
        })

        const groupD = mapD.reduce((acc, vod) => {
            if (!acc?.[vod.steamId]?.length) acc[vod.steamId] = []
            acc[vod.steamId].push(vod)
            return acc
        },{})
        return groupD
    })
    
    const steamIdStats = computed(() => {
        return Object.keys(groupedBySteamId.value).map(id => ({
            id,
            name: steamNames.value[id] || 'UnknownId:' + id,
            count: groupedBySteamId.value[id].length
        }))
    })
    
    async function fetchData() {
        isLoading.value = true
        try {
            rawData.value = await fetchCsvToJson('./history.csv')
            youtubeVods.value = await fetchCsvToJson('./youtube.csv')
            steamNames.value = await fetch('./steamNames.json').then(r=>r.json())
        } catch (e) {
            error.value = e.message
        } finally {
            isLoading.value = false
        }
    }
    
    return {
        rawData,
        steamNames,
        youtubeVods,
        youtubeVodsBySteamId,
        isLoading,
        error,
        groupedBySteamId,
        steamIdStats,
        fetchData
    }
}
