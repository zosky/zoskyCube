<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-cyan-500/15">
      <div class="text-2xl font-bold text-cyan-400 flex items-center justify-center gap-2">
        <template v-if="isFiltered">{{ filteredClaimCount }} <span class="text-sm text-gray-500">of {{ claimCount }}</span></template>
        <template v-else>{{ claimCount }}</template>
        <GiftOutline class="w-6 h-6" />
      </div>
      <div class="text-xs text-gray-400">Redeems</div>
    </div>
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-green-500/15">
      <div class="text-2xl font-bold text-green-400 flex items-center justify-center gap-2">
        <template v-if="isFiltered">{{ filteredUniqueUsers }} <span class="text-sm text-gray-500">of {{ uniqueUsers }}</span></template>
        <template v-else>{{ uniqueUsers }}</template>
        <Account class="w-6 h-6" />
      </div>
      <div class="text-xs text-gray-400">Players</div>
    </div>
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-purple-500/15">
      <div class="text-2xl font-bold text-purple-400 flex items-center justify-center gap-2">
        <template v-if="isFiltered">{{ filteredUniqueGames }} <span class="text-sm text-gray-500">of {{ uniqueGames }}</span></template>
        <template v-else>{{ uniqueGames }}</template>
        <Gamepad class="w-6 h-6" />
      </div>
      <div class="text-xs text-gray-400">Unique Games</div>
    </div>
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-blue-500/15">
      <div class="text-2xl font-bold text-blue-400 flex items-center justify-center gap-2">
        <template v-if="isFiltered">{{ filteredUniqueSteamIds }} <span class="text-sm text-gray-500">of {{ uniqueSteamIds }}</span></template>
        <template v-else>{{ uniqueSteamIds }}</template>
        <Steam class="w-6 h-6" />
      </div>
      <div class="text-xs text-gray-400">Steam IDs</div>
    </div>
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-orange-500/15">
      <div class="text-2xl font-bold text-orange-400 flex items-center justify-center gap-2">
        <template v-if="isFiltered">{{ filteredGiftCardCount }} <span class="text-sm text-gray-500">of {{ giftCardCount }}</span></template>
        <template v-else>{{ giftCardCount }}</template>
        <CreditCard class="w-6 h-6" />
      </div>
      <div class="text-xs text-gray-400">Gift Cards</div>
    </div>
    <div class="stat-card bg-gray-900/80 rounded-lg p-3 text-center ring-1 ring-yellow-500/15">
      <div class="text-2xl font-bold text-yellow-400">
        <Points currency="zC" :n="isFiltered ? filteredTotalCubesSpent : totalCubesSpent" relative />
      </div>
      <div v-if="isFiltered" class="text-xs text-gray-500">of <Points currency="zC" :n="totalCubesSpent" relative /></div>
      <div v-else class="text-xs text-gray-400">Spent</div>
    </div>
  </div>
</template>

<script setup>
import { GiftOutline, Account, Gamepad, Steam, CreditCard } from 'mdue'
import Points from './Points.vue'

defineProps({
  claimCount: { type: Number, default: 0 },
  uniqueUsers: { type: Number, default: 0 },
  uniqueGames: { type: Number, default: 0 },
  uniqueSteamIds: { type: Number, default: 0 },
  giftCardCount: { type: Number, default: 0 },
  totalCubesSpent: { type: Number, default: 0 },
  // Filtered stats (optional — only show "x of y" when isFiltered is true)
  isFiltered: { type: Boolean, default: false },
  filteredClaimCount: { type: Number, default: 0 },
  filteredUniqueUsers: { type: Number, default: 0 },
  filteredUniqueGames: { type: Number, default: 0 },
  filteredUniqueSteamIds: { type: Number, default: 0 },
  filteredGiftCardCount: { type: Number, default: 0 },
  filteredTotalCubesSpent: { type: Number, default: 0 }
})
</script>

<style scoped>
.stat-card {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(6, 182, 212, 0.15),
    0 0 30px rgba(6, 182, 212, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(4px);
}
.stat-card:hover {
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(6, 182, 212, 0.3),
    0 0 60px rgba(6, 182, 212, 0.12),
    inset 0 1px 0 rgba(6, 182, 212, 0.15);
}
</style>
