// Central data store for game history, as described in the FDD

const fetchCsvToJson = async (url) => {
    const response = await fetch(url)
    const text = await response.text()
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    // Proper CSV parsing function that handles quoted fields
    const parseCSVLine = (line) => {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const nextChar = line[i + 1];
            
            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    // Handle escaped quotes ("")
                    current += '"';
                    i++; // Skip next quote
                } else {
                    // Toggle quote state
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                // Field separator found outside quotes
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        // Add the last field
        result.push(current);
        return result;
    };
    
    // Extract headers from first line
    const headers = parseCSVLine(lines[0]);
    console.log('Headers found:', headers);

    // Find the private column index for debugging
    const privateColumnIndex = headers.indexOf('private');
    console.log('Private column index:', privateColumnIndex);

    // Process data rows
    const jsonARR = lines.slice(1).map((line, index) => {
        const values = parseCSVLine(line);
        const obj = {};
        
        // Log first few rows to see raw private values
        if (index < 5 && privateColumnIndex >= 0) {
            console.log(`Row ${index + 1} raw private value:`, JSON.stringify(values[privateColumnIndex]));
        }
        
        headers.forEach((header, headerIndex) => {
            const value = values[headerIndex] || ''; // Handle undefined values
            
            // Special handling for the private column
            if (header === 'private') {
                // Log the conversion process
                const isEmpty = !value || value.trim() === '';
                const isFalse = value && value.toLowerCase() === 'false';
                const result = value && value.toLowerCase() !== 'false' && value.trim() !== '';
                
                if (index < 5) {
                    console.log(`Private field processing - Raw: "${value}", isEmpty: ${isEmpty}, isFalse: ${isFalse}, result: ${result}`);
                }
                
                obj[header] = result;
            } else {
                // Convert to number if it's numeric, otherwise keep as string
                obj[header] = !isNaN(Number(value)) && value.trim() !== '' ? Number(value) : value;
            }
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
    const steamLibrary = ref({}) // [ { Timestamp, appID, ITADid, store, name, note, date, discount, price, hisoricLow, currentLow, private }]
    const youtubeVods = ref([]) // [{ id:(@YT), date(ofTTVvod), game:(name) }, ... ]
    const winningGames = ref([])
    const arkTribe = ref([]) // [{ steamId, player, arkTribe, arkRole }, ... ]
    
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
        return youtubeVods.value.reduce((acc, vod) => {
            if (vod.steamId) {
                if (!acc[vod.steamId]) {
                    acc[vod.steamId] = []
                }
                acc[vod.steamId].push(vod)
            }
            return acc
        }, {})
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
            const rawWinning = await fetchCsvToJson(gSheetCsvUrl('winning'))
            const steamXref = await fetchCsvToJson(gSheetCsvUrl('steamXref'))
            const collection = await fetchCsvToJson(gSheetCsvUrl('invested'))
            const arkTribeRAW = await fetchCsvToJson(gSheetCsvUrl('arkTribe'))
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
            winningGames.value = rawWinning
            // sXreff reSeprated into steam{names,colors}.json objects for easy xRef
            const arrReducer = (prop) => steamXref.reduce((acc, entry) => { acc[entry.steamId] = entry[prop] ; return acc }, {})
            steamNames.value = arrReducer('name')
            steamColors.value = arrReducer('color')
            steamLibrary.value = collection
            arkTribe.value = arkTribeRAW

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
        steamLibrary,
        youtubeVods,
        winningGames,
        youtubeVodsBySteamId,
        isLoading,
        error,
        groupedBySteamId,
        groupedBySteamIdAndPlayer,
        steamIdStats,
        steamIdPlayerStats,
        gameStats,
        arkTribe,
        fetchData
    }
}
