<template>
    <div class="p-2">
      <h1 class="text-2xl font-bold mt-8 mb-1">Completed Games</h1>
  
      <div v-if="isLoading || zzLoading" class="text-center">
        <p>Loading...</p>
      </div>
  
      <div v-if="error || zzError" class="text-center text-red-500">
        <p>Error loading data: {{ error || zzError }}</p>
      </div>
  
      <div v-if="!isLoading && !error && !zzLoading && !zzError" 
        class="grid grid-cols-1 md:flex md:flex-row flex-wrap gap-4">
        <div v-for="(monthData, month) in groupedWinnings" :key="month" class="bg-gray-800 p-2 rounded-lg shadow-lg border-2 border-blue-500/50 inline-block w-full md:w-40 mb-4">
            <h2 class="text-sm font-semibold mb-2">{{ monthData.monthName }}</h2>
            <ul class="space-y-2">
              <li v-for="game in monthData.games" :key="game.id" class="relative">
                <span class="absolute -top-1 -left-3 bg-blue-900 rounded-xl px-2 text-xs ">{{ formatDay(game.day) }}</span>
                <img v-if="game.type === 'steam'" :src="`https://steamcdn-a.akamaihd.net/steam/apps/${game.steamId}/header.jpg`" class="w-full h-auto rounded" />
                <img v-else-if="game.type === 'zoskyZappers'" src="@/assets/ttv/zoskyZappers.png" class="w-full h-auto rounded" />
                <div class="absolute -bottom-1 -right-2">
                  <span v-if="game.completedByBoth" class="text-2xl">
                    👥
                  </span>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, inject, onMounted } from 'vue'
import { getFirestore, collection, query, where, getDocs, orderBy } from 'firebase/firestore'
  
  const gameStore = inject('gameStore')
  const { winningGames, steamNames, isLoading, error } = gameStore
  
  const zzMatches = ref([])
  const zzLoading = ref(false)
  const zzError = ref(null)
  
  onMounted(async () => {
    gameStore.fetchData()
    await fetchZoskyZappersMatches()
  })
  
  async function fetchZoskyZappersMatches() {
    zzLoading.value = true
    zzError.value = null
    try {
      const db = getFirestore()
      const gamesRef = collection(db, 'zoskyZappers_games')
      const q = query(
        gamesRef,
        where('status', '==', 'completed'),
        orderBy('endedAt', 'desc')
      )
      const snapshot = await getDocs(q)
      zzMatches.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().endedAt || doc.data().startedAt
      }))
      console.log('[Winning] Loaded zoskyZappers matches:', zzMatches.value.length)
    } catch (err) {
      console.error('[Winning] Error loading zoskyZappers matches:', err)
      zzError.value = err.message
    } finally {
      zzLoading.value = false
    }
  }
  
  const formatDay = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:  return `${day}st`;
      case 2:  return `${day}nd`;
      case 3:  return `${day}rd`;
      default: return `${day}th`;
    }
  }

  const groupedWinnings = computed(() => {
    const groups = {}
  
    // Process Steam games from Google Sheets
    winningGames.value.forEach(game => {
      const timestamp = new Date(game.Timestamp)
      const year = timestamp.getFullYear()
      const month = timestamp.getMonth()
      const day = timestamp.getDate()
      const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`
  
      if (!groups[monthKey]) {
        groups[monthKey] = {
          monthName: timestamp.toLocaleString('default', { month: 'long', year: 'numeric' }),
          games: []
        }
      }
  
      const existingGame = groups[monthKey].games.find(g => g.type === 'steam' && g.steamId === game.steamId)
  
      if (existingGame) {
        existingGame.completedByBoth = true
      } else {
        groups[monthKey].games.push({
          id: `steam-${game.steamId}-${day}`,
          type: 'steam',
          steamId: game.steamId,
          name: steamNames.value[game.steamId] || `Unknown Game (${game.steamId})`,
          day: day,
          completedByBoth: false
        })
      }
    })
    
    // Process zoskyZappers matches from Firestore
    zzMatches.value.forEach(match => {
      const timestamp = new Date(match.timestamp)
      const year = timestamp.getFullYear()
      const month = timestamp.getMonth()
      const day = timestamp.getDate()
      const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`
  
      if (!groups[monthKey]) {
        groups[monthKey] = {
          monthName: timestamp.toLocaleString('default', { month: 'long', year: 'numeric' }),
          games: []
        }
      }
      
      // Check if there's already a zoskyZappers match on this day
      const existingZZ = groups[monthKey].games.find(g => g.type === 'zoskyZappers' && g.day === day)
      
      if (!existingZZ) {
        groups[monthKey].games.push({
          id: `zz-${match.id}`,
          type: 'zoskyZappers',
          name: 'zoskyZappers',
          day: day,
          completedByBoth: false
        })
      }
    })
  
    // Sort games within each month by day
    for (const monthKey in groups) {
      groups[monthKey].games.sort((a, b) => a.day - b.day)
    }
  
    // Sort months in reverse chronological order
    const sortedMonthKeys = Object.keys(groups).sort().reverse()
  
    const sortedGroups = {}
    sortedMonthKeys.forEach(key => {
      sortedGroups[key] = groups[key]
    })
  
    return sortedGroups
  })
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
