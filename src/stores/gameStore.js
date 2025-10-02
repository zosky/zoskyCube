// Central data store for game history, as described in the FDD

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

// Helper function to safely parse timestamps
const parseTimestamp = (timestamp) => {
    if (!timestamp || timestamp === '' || timestamp === 'undefined') {
        console.warn('Invalid timestamp detected:', timestamp);
        return null;
    }
    
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
        console.warn('Failed to parse timestamp:', timestamp);
        return null;
    }
    
    return date.getTime() / 1000; // Convert to epoch seconds
}

// Helper function to safely get steamId from either steamID or steamId columns
const getSteamId = (entry) => {
    const steamId = entry?.steamID ?? entry?.steamId;
    if (!steamId || steamId === '' || steamId === 'undefined') {
        console.warn('Invalid steamId detected:', steamId);
        return null;
    }
    return steamId;
}

// Helper function to safely get player from entry
const getPlayer = (entry) => {
    const player = entry?.player;
    // Default to player 1 if no player column exists
    if (!player || player === '' || player === 'undefined') {
        return 1;
    }
    return Number(player) || 1;
}

// Helper function to map death column to lives for backward compatibility
const getLives = (entry) => {
    // Handle both 'death' and 'lives' columns, prioritize 'death' if it exists
    const deathValue = entry?.death ?? entry?.deaths;
    const livesValue = entry?.lives;
    
    // If we have a death value, use it as lives for backward compatibility
    if (deathValue !== undefined && deathValue !== null && deathValue !== '') {
        return Number(deathValue) || 0;
    }
    
    // Fall back to lives column if death column doesn't exist
    if (livesValue !== undefined && livesValue !== null && livesValue !== '') {
        return Number(livesValue) || 0;
    }
    
    console.warn('No valid death or lives value found:', entry);
    return 0;
}

export const useGameStore = () => {
    const rawData = ref([])
    const isLoading = ref(true)
    const error = ref(null)
    const steamNames = ref({}) // { steamId: gameName }
    const steamColors = ref({}) // { steamId: #hex }
    const youtubeVods = ref([]) // [{ id:(@YT), date(ofTTVvod), game:(name) }, ... ]
    
    // Group by steamId and player
    const groupedBySteamIdAndPlayer = computed(() => {
        const groups = {}
        rawData.value.forEach(entry => {
            const steamId = entry.steamId;
            const player = entry.player;
            
            if (steamId) {
                if (!groups[steamId]) {
                    groups[steamId] = {}
                }
                if (!groups[steamId][player]) {
                    groups[steamId][player] = []
                }
                groups[steamId][player].push(entry)
            }
        })
        return groups
    })

    // Legacy compatibility - group by steamId only (combines all players)
    const groupedBySteamId = computed(() => {
        const groups = {}
        rawData.value.forEach(entry => {
            const steamId = entry.steamId;
            if (steamId && !groups[steamId]) {
                groups[steamId] = []
            }
            if (steamId) {
                groups[steamId].push(entry)
            }
        })
        return groups
    })

    // Game-centric stats with player data embedded
    const gameStats = computed(() => {
        const stats = []
        Object.keys(groupedBySteamIdAndPlayer.value).forEach(steamId => {
            const playerData = groupedBySteamIdAndPlayer.value[steamId]
            const players = Object.keys(playerData).map(player => ({
                player: Number(player),
                playerName: `Player ${player}`,
                count: playerData[player].length,
                entries: playerData[player],
                lastDeath: playerData[player].at(-1)?.lives || 0
            })).sort((a, b) => a.player - b.player)
            
            stats.push({
                id: steamId,
                name: steamNames.value[steamId] || 'UnknownId:' + steamId,
                players: players,
                totalCount: players.reduce((sum, p) => sum + p.count, 0)
            })
        })
        return stats.sort((a, b) => a.name.localeCompare(b.name))
    })

    // Stats per steamId and player
    const steamIdPlayerStats = computed(() => {
        const stats = []
        Object.keys(groupedBySteamIdAndPlayer.value).forEach(steamId => {
            const playerData = groupedBySteamIdAndPlayer.value[steamId]
            Object.keys(playerData).forEach(player => {
                stats.push({
                    id: steamId,
                    player: Number(player),
                    name: steamNames.value[steamId] || 'UnknownId:' + steamId,
                    count: playerData[player].length,
                    playerName: `Player ${player}`
                })
            })
        })
        return stats.sort((a, b) => a.name.localeCompare(b.name) || a.player - b.player)
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
    
    // Legacy compatibility
    const steamIdStats = computed(() => {
        return Object.keys(groupedBySteamId.value).map(id => ({
            id,
            name: steamNames.value[id] || 'UnknownId:' + id,
            count: groupedBySteamId.value[id].length
        }))
    })
    
    async function fetchData(reload = false) {
        // Only fetch if reload is true, or if data is not loaded/loading already
        if (!reload && (isLoading.value || rawData.value.length > 0)) {
            return;
        }
        
        isLoading.value = true
        try {
            // fetch data from Google Sheets CSV export
            const sheetID = import.meta.env.VITE_GOOGLE_SHEETS_ID
            const gSheetCsvUrl = (sheet) => `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=${sheet}`
            const rawHistory = await fetchCsvToJson(gSheetCsvUrl('history'))
            const rawYoutube = await fetchCsvToJson(gSheetCsvUrl('ytVods'))
            const steamXref = await fetchCsvToJson(gSheetCsvUrl('steamXref'))
            // mash data to match old CSV/JSON files
            // inject timeStamp for backwards compatibility with old CSV data
            rawData.value = rawHistory
                .map(e => {
                    // Handle both 'timestamp' and 'Timestamp' column names
                    const timestampValue = e?.timestamp ?? e?.Timestamp;
                    const parsedTime = parseTimestamp(timestampValue);
                    
                    // Handle both 'steamID' and 'steamId' column names
                    const steamId = getSteamId(e);
                    
                    // Get player information
                    const player = getPlayer(e);
                    
                    // Map death column to lives for backward compatibility
                    const lives = getLives(e);
                    
                    return (parsedTime !== null && steamId !== null) ? 
                        { ...e, time: parsedTime, steamId: steamId, player: player, lives: lives } : null;
                })
                .filter(e => e !== null) // Remove entries with invalid timestamps or steamIds
                .sort((a,b)=>a.time - b.time) // sort by time asc
            // copy {name} to {game} for easier mapping
            youtubeVods.value = rawYoutube.map(vod => ({ ...vod, game: vod.name }))
            // sXreff reSeprated into steam{names,colors}.json objects for easy xRef
            const arrReducer = (prop) => steamXref.reduce((acc, entry) => { acc[entry.steamId] = entry[prop] ; return acc }, {})
            steamNames.value = arrReducer('name')
            steamColors.value = arrReducer('color')

        } catch (e) {
            error.value = e.message
        } finally {
            isLoading.value = false
        }
    }
    
    return {
        rawData,
        steamNames,
        steamColors,
        youtubeVods,
        youtubeVodsBySteamId,
        isLoading,
        error,
        groupedBySteamId,
        groupedBySteamIdAndPlayer,
        steamIdStats,
        steamIdPlayerStats,
        gameStats,
        fetchData
    }
}
