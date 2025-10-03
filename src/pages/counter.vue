<script setup>
import { ref, computed, onMounted, watch, inject, nextTick } from 'vue'
import { Account, Magnify, Steam, SkullCrossbones } from 'mdue'

const gameStore = inject('gameStore')
const { steamLibrary, gameStats, fetchData } = gameStore

const player = ref(1)
const selectedGame = ref(localStorage.getItem('lastSelectedGame') || '')
const gameFilter = ref('')

const deathMap = computed(() => {
  if (!gameStats.value) return {}
  return gameStats.value.reduce((acc, game) => {
    const allEntries = game.players.flatMap(p => p.entries)
    if (allEntries.length > 0) {
      acc[game.id] = Math.max(...allEntries.map(e => e.lives || 0))
    } else {
      acc[game.id] = 0
    }
    return acc
  }, {})
})

const count = computed(() => {
  const maxDeath = deathMap.value[selectedGame.value]
  return (maxDeath !== undefined ? maxDeath : 0) + 1
})

const games = computed(() => {
  if (!steamLibrary.value || !Array.isArray(steamLibrary.value)) {
    return []
  }
  const filtered = steamLibrary.value
    .filter(game => !game.private && game.name.toLowerCase().includes(gameFilter.value.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  if (filtered.length === 1 && selectedGame.value !== filtered[0].appID) {
    nextTick(() => {
      selectedGame.value = filtered[0].appID
    });
  }

  return filtered
})

watch(gameFilter, () => {
  selectedGame.value = ''
})

watch(selectedGame, (newGameId) => {
  if (newGameId) {
    localStorage.setItem('lastSelectedGame', newGameId)
  }
})

onMounted(() => {
  if (gameStats.value.length === 0) {
    fetchData()
  }
})

async function onSubmit() {
  const steamID = selectedGame.value
  const next = count.value
  const PLAYER = player.value

  const url = "https://docs.google.com/forms/d/e/1FAIpQLSfW_NpTi2cUWss7yj-c3pmXG4n4QXHq3jv0u0BuEhj35U-0Dw/formResponse"
  const formData = new FormData()
  formData.append('entry.1260140789', steamID)
  formData.append('entry.657657652', next)
  formData.append('entry.1581882803', PLAYER)

  try {
    await fetch(url, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    console.log('Form submitted successfully')
    // refresh data after submit
    gameStore.fetchData(true)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<template>
  <div class="p-4 pt-10">
    <h1 class="text-2xl font-bold mb-2">☠️++</h1>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div class="relative flex items-center">
        <Magnify class="absolute left-3 text-gray-400 pointer-events-none" />
        <input type="text" id="game-filter" v-model="gameFilter" placeholder="Filter Games" class="pl-10 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      </div>
      <div class="relative flex items-center">
        <Steam class="absolute left-3 text-gray-400 pointer-events-none" />
        <select id="game" v-model="selectedGame" class="pl-9 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option disabled value="">{{ games.length }} games</option>
          <option v-for="game in games" :key="game.appID" :value="game.appID">
            {{ game.name }}
          </option>
        </select>
      </div>
      <div class="flex space-x-4">
        <div class="relative flex items-center w-1/2">
          <SkullCrossbones class="absolute left-3 text-gray-400 pointer-events-none" />
          <input type="number" id="count" v-model="count" readonly class="pl-10 block w-full p-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm sm:text-sm">
        </div>
        <div class="relative flex items-center w-1/2">
          <Account class="absolute left-3 text-gray-400 pointer-events-none" />
          <input type="number" id="player" v-model="player" placeholder="Player" class="pl-10 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>
      <button type="submit" class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  </div>
</template>
