<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import ArkDayCard from '../components/ark/ArkDayCard.vue'
import ArkPlayerAvatar from '../components/ark/ArkPlayerAvatar.vue'

// Use gameStore which now includes arkTribe data
const gameStore = inject('gameStore')
const { arkTribe, isLoading, error } = gameStore

// Access dino images
const arkDinos = inject('arkDinos')

const playerColors = {
  madameD: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500' },
  ben: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500' }
}

// Computed properties using gameStore.arkTribe
const arkData = computed(() => {
  if (!arkTribe.value || arkTribe.value.length === 0) {
    return {
      events: [],
      statistics: {
        total_events: 0,
        players: { madameD: { deaths: 0, tamed: 0 }, ben: { deaths: 0, tamed: 0 } },
        deaths_by_creature: {}
      }
    }
  }

  const events = arkTribe.value
  const statistics = {
    total_events: events.length,
    players: { madameD: { deaths: 0, tamed: 0 }, ben: { deaths: 0, tamed: 0 } },
    deaths_by_creature: {}
  }

  // Process events to calculate statistics
  events.forEach(event => {
    // Count player deaths using the 'victim' field
    if (event.victim && statistics.players[event.victim]) {
      if (['pve_death', 'generic_death', 'death'].includes(event.type)) {
        statistics.players[event.victim].deaths++
      }
    }
    
    // Count tames using the 'player' field
    if (event.player && statistics.players[event.player]) {
      if (event.type === 'tame') {
        statistics.players[event.player].tamed++
      }
    }
    
    // Count deaths by creature - for pve_death events
    if (event.type === 'pve_death' && event.creature) {
      statistics.deaths_by_creature[event.creature] = 
        (statistics.deaths_by_creature[event.creature] || 0) + 1
    }
    
    // Also count generic deaths by creature if available
    if (event.type === 'generic_death' && event.creature) {
      statistics.deaths_by_creature[event.creature] = 
        (statistics.deaths_by_creature[event.creature] || 0) + 1
    }
  })

  return { events, statistics }
})

// Group events by day
const eventsByDay = computed(() => {
  const grouped = {}
  if (arkData.value.events) {
    arkData.value.events.forEach(event => {
      if (!grouped[event.day]) {
        grouped[event.day] = []
      }
      grouped[event.day].unshift(event)
    })
  }
  // Convert to array and sort by day descending (most recent first)
  return Object.entries(grouped)
    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    .map(([day, events]) => ({ day, events }))
})

const dinos = computed(()=>{
  const deaths = arkData?.value?.events?.filter(e=>e.type=='dino_death').length
  const tamed = Object.values(arkData?.value?.statistics?.players).reduce((a,b)=>a+b.tamed,0)
  const alive = tamed - deaths
  const babyDeaths = arkData?.value?.events?.filter(e=>e.type=='baby_death').length
  const babyClaims = arkData?.value?.events?.filter(e=>e.type=='baby_claim').length
  return { deaths, tamed, alive, babyClaims, babyDeaths }
})

</script>

<template>
  <div class="p-0 sm:p-6 space-y-6">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="text-lg">Loading ark data...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-400 text-center p-4">
      Error: {{ error }}
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Statistics Cards -->
      <div class="z-20 sticky top-0 flex flex-col sm:flex-row items-center justify-between">
        <!-- Total Events -->
        <div class="flex flex-row">
          <ark-logo class="w-40 h-40 -my-10 -mb-24 md:mb-0 md:-mr-16" />
          <div class="flex flex-row md:flex-col items-center justify-center">
            <div class="min-w-max text-xs md:text-xl font-light">Tribe Stats</div>
            <div class="flex flex-row xl:flex-row bg-surface-dark rounded-lg px-4 justify-center items-center">
              <div class="min-w-max text-base md:text-3xl font-bold text-primary">{{ arkData.statistics?.total_events || 0 }}</div>
              <span class="min-w-max text-xs md:text-2xl">📊 events</span>
              <!-- <div class="flex items-center gap-2 mb-2">
                <div class="text-sm text-gray-400">Total Events</div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-span-2 flex flex-row justify-center items-center gap-0">
          <!-- Player Stats - madameD -->
          <div class="min-w-max backdrop-blur text-2xl md:text-4xl flex flex-row-reverse justify-between items-center gap-2 mb-2 pl-10 border-r-0 shadow-lg shadow-blue-500" :class="['rounded-l-full p-4 border', playerColors.madameD.bg, playerColors.madameD.border, playerColors.madameD.text]">
            <ArkPlayerAvatar playerName="madameD" size="lg" />
            <!-- <div :class="['text-sm font-semibold', playerColors.madameD.text]">madameD</div> -->
            <div class="flex-col md:flex-row">
              <div class="min-w-max font-bold">
                ☠️{{ arkData.statistics?.players?.madameD?.deaths || 0 }}
              </div>
              <div class="min-w-max">
                🦖 {{ arkData.statistics?.players?.madameD?.tamed }}
              </div>
            </div>
          </div>
          <div class="backdrop-blur-sm flex flex-col items-center justify-center text-gray-400 text-6xl px-4 py-10 -my-10 shadow-lg shadow-gray-500 rounded-t-full border-t border-gray-400 rounded-b-full -mx-2 z-10 bg-black/50 font-bold" >
            <div class="-mt-4 flex flex-row items-end -my-1">
              <div>
                {{  Object.values(arkData.statistics?.players).reduce((a,b)=>a+b.deaths,0) }}
              </div>
              <span class="text-xs self-end max-w-min mb-2">🧍☠️</span>
            </div>
            <div class="flex flex-row gap-1 items-end">
              <div class="text-sm">
                {{ dinos.alive }}🦖
              </div>
              <div class="text-sm">
                {{ dinos.deaths }}☠️
              </div>
            </div>
            <div class="flex flex-row gap-1 items-end -mb-3">
              <div class="text-sm">
                {{ dinos.babyClaims - dinos.babyDeaths }}🍼
              </div>
              <div class="text-sm">
                {{ dinos.babyDeaths }}☠️
              </div>
            </div>
          </div>
          <!-- Player Stats - ben -->
          <div  class="backdrop-blur min-w-max text-2xl md:text-4xl flex justify-between items-center gap-2 mb-2 md:pr-10 border-l-0 shadow-lg shadow-red-500" :class="['rounded-r-full p-4 border', playerColors.ben.bg, playerColors.ben.border, playerColors.ben.text]">
            <ArkPlayerAvatar playerName="ben" size="lg" />
            <div class="flex-col md:flex-row">
              <div class="font-bold">
                {{ arkData.statistics?.players?.ben?.deaths || 0 }}☠️
              </div>
              <div class="min-w-max">
                {{ arkData.statistics?.players?.ben?.tamed }}🦖
              </div>
            </div>
          </div>

        </div>

        <!-- Deaths by Creature -->
        <div class="hidden sm:flex w-full md:max-w-min bg-surface-dark rounded-lg p-4 border border-orange-500/20">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-base">💀</span>
            <div class="text-sm text-gray-400 min-w-max">Most Deadly</div>
          </div>
          <div v-if="arkData.statistics?.deaths_by_creature">
            <div 
              v-for="(count, creature) in arkData.statistics.deaths_by_creature" 
              :key="creature"
              class="flex justify-between text-sm">
              <span class="text-orange-400">{{ creature }}</span>
              <span class="font-bold">{{ count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Events Log - Grouped by Day -->
      <div class="space-y-4">
        <!-- <div class="flex items-center gap-2 mb-4">
          <span class="text-2xl">📜</span>
          <h2 class="text-2xl font-bold">Event Log</h2>
        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <ArkDayCard 
            v-for="dayData in eventsByDay" 
            :key="dayData.day"
            :day="dayData.day"
            :events="dayData.events"
            :player-colors="playerColors" />
        </div>
      </div>
    </div>
  </div>
</template>

