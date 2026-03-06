<route lang="yaml">
meta:
  title: Redeems
</route>

<template>
  <div class="mx-auto p-4 max-w-7xl">
    <!-- Header -->
    <div class="mt-6">
      <h1 class="text-3xl font-bold mb-2 text-cyan-400 flex items-center gap-3">
        <template v-if="selectedUser">
          <img 
            v-if="getAvatar(selectedUser)"
            :src="getAvatar(selectedUser)" 
            :alt="selectedUser"
            class="w-10 h-10 rounded-full ring-2 ring-cyan-400"
          />
          {{ selectedUser }}'s Redeems
        </template>
        <template v-else>
          🎁 Redeems
        </template>
      </h1>
      <p class="text-gray-400">
        Games redeemed from the
        <span class="text-yellow-400 font-semibold"><Points currency="zC" class="w-6"/></span>
        reward store
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-16">
      <div class="animate-spin text-6xl mb-4">🎁</div>
      <p class="text-gray-400">Loading redeems...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-900/50 border border-red-500 text-red-300 px-6 py-4 rounded-lg mt-6">
      <p class="font-bold">Failed to load redeems</p>
      <p class="text-sm">{{ error }}</p>
    </div>

    <!-- Content -->
    <div v-else>
      <!-- Stats Bar -->
      <RedeemsStats
        class="mt-6 mb-6"
        :claimCount="claimCount"
        :uniqueUsers="uniqueUsers"
        :uniqueGames="uniqueGames"
        :uniqueSteamIds="uniqueSteamIds"
        :giftCardCount="giftCardCount"
        :totalCubesSpent="totalCubesSpent"
        :isFiltered="isFiltered"
        :filteredClaimCount="filteredClaimCount"
        :filteredUniqueUsers="filteredUniqueUsers"
        :filteredUniqueGames="filteredUniqueGames"
        :filteredUniqueSteamIds="filteredUniqueSteamIds"
        :filteredGiftCardCount="filteredGiftCardCount"
        :filteredTotalCubesSpent="filteredTotalCubesSpent"
      />

      <!-- Filters Bar -->
      <div class="mb-6 flex flex-wrap gap-4 items-center bg-gray-900/50 p-4 rounded-lg ring-1 ring-white/10">
        <!-- Game Filter -->
        <div class="flex items-center gap-2">
          <label class="text-gray-400 text-sm font-medium">Game:</label>
          <select
            v-model="selectedGame"
            class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 max-w-xs"
          >
            <option :value="null">All Games ({{ uniqueGames }})</option>
            <option v-for="opt in gameOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>

        <!-- User Filter -->
        <div class="flex items-center gap-2">
          <label class="text-gray-400 text-sm font-medium">User:</label>
          <select
            v-model="selectedUser"
            @change="selectedUser ? router.push(`/redeems/${selectedUser}`) : router.push('/redeems')"
            class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 max-w-xs"
          >
            <option :value="null">All Users ({{ uniqueUsers }})</option>
            <option v-for="opt in userOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>

        <!-- Result count -->
        <div class="text-sm text-gray-400 ml-auto">
          Showing <span class="text-cyan-400 font-bold">{{ filteredRedeems.length }}</span> redeems
        </div>

        <!-- Reset -->
        <button
          v-if="selectedGame || selectedUser"
          @click="selectedGame = null; selectedUser = null; router.push('/redeems')"
          class="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          🔄 Reset
        </button>
      </div>

      <!-- Grid with limit selector -->
      <RedeemsGrid
        :redeems="filteredRedeems"
        :hideAvatars="!!selectedUser"
        showLimitSelector
      />

      <!-- Empty State -->
      <div v-if="filteredRedeems.length === 0 && !isLoading" class="text-center py-16">
        <div class="text-6xl mb-4">🎁</div>
        <p class="text-gray-400">No redeems found matching filters</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRedeemsData } from '../../composables/useRedeemsData'
import { useTwitchAvatars } from '../../composables/useTwitchAvatars'
import Points from '../../components/Points.vue'
import RedeemsStats from '../../components/RedeemsStats.vue'
import RedeemsGrid from '../../components/RedeemsGrid.vue'

const route = useRoute()
const router = useRouter()
const { getAvatar } = useTwitchAvatars()

const {
  filteredRedeems,
  isLoading,
  error,
  selectedGame,
  selectedUser,
  gameOptions,
  userOptions,
  uniqueUsers,
  uniqueGames,
  uniqueSteamIds,
  giftCardCount,
  claimCount,
  totalCubesSpent,
  isFiltered,
  filteredClaimCount,
  filteredUniqueUsers,
  filteredUniqueGames,
  filteredUniqueSteamIds,
  filteredGiftCardCount,
  filteredTotalCubesSpent,
  loadData,
  startRefreshTimer
} = useRedeemsData()

onMounted(async () => {
  await loadData()
  startRefreshTimer()
  // Pick up username from route param (e.g. /redeems/valase)
  const username = route.params.username?.toLowerCase()
  if (username && !selectedUser.value) {
    selectedUser.value = username
  }
})
</script>
