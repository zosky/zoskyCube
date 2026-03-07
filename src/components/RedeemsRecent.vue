<template>
  <div>
    <!-- Section Header with toggle buttons -->
    <div v-if="!hideHeader" class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-cyan-400 flex items-center gap-2">
        <GiftOutline class="w-6 h-6" />
        <template v-if="mode === 'me' && currentUsername">
          {{ currentUsername }}'s Redeems
        </template>
        <template v-else>
          Recent Redeems
        </template>
      </h2>

      <!-- Toggle Buttons: Me / All / More -->
      <div class="flex rounded-lg overflow-hidden border border-gray-700">
        <!-- Me: user avatar -->
        <button
          v-if="currentUsername"
          @click="mode = 'me'"
          class="px-2.5 py-1.5 transition-colors flex items-center justify-center"
          :class="mode === 'me'
            ? 'bg-cyan-600'
            : 'bg-gray-800 hover:bg-gray-700'"
          :title="`${currentUsername}'s redeems`"
        >
          <img
            v-if="userAvatar"
            :src="userAvatar"
            :alt="currentUsername"
            class="w-5 h-5 rounded-full"
          />
          <Account v-else class="w-5 h-5 text-cyan-400" />
        </button>
        <!-- All: group icon -->
        <button
          @click="mode = 'all'"
          class="px-2.5 py-1.5 transition-colors flex items-center justify-center"
          :class="mode === 'all'
            ? 'bg-cyan-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'"
          title="All redeems"
        >
          <AccountGroup class="w-5 h-5" />
        </button>
        <!-- More: grid icon with count + arrow -->
        <router-link
          :to="moreLink"
          class="px-2.5 py-1.5 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-1"
          title="View all redeems"
        >
          <ViewGrid class="w-5 h-5" />
          <span class="text-[10px] font-bold">{{ displayRedeems.length }}</span>
          <ArrowRight class="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-8">
      <div class="animate-spin text-4xl mb-2">🎁</div>
      <p class="text-gray-500 text-sm">Loading redeems...</p>
    </div>

    <!-- No redeems for this user -->
    <div v-else-if="mode === 'me' && displayRedeems.length === 0" class="text-center py-8">
      <p class="text-gray-500 text-sm">No redeems yet — go spend some <Points currency="zC" class="w-4 inline" />!</p>
    </div>

    <!-- Grid -->
    <RedeemsGrid
      v-else
      :redeems="displayRedeems"
      :limit="limit"
      :hideAvatars="mode === 'me'"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { GiftOutline, Account, AccountGroup, ViewGrid, ArrowRight } from 'mdue'
import { useAuth } from '../composables/useAuth'
import { useRedeemsData } from '../composables/useRedeemsData'
import RedeemsGrid from './RedeemsGrid.vue'
import Points from './Points.vue'

const props = defineProps({
  /** Number of cards to show (default 6 for homepage) */
  limit: { type: Number, default: 6 },
  /** Hide the built-in header (when parent provides its own) */
  hideHeader: { type: Boolean, default: false }
})

const { userProfile } = useAuth()
const { allRedeems, isLoading, loadData, startRefreshTimer } = useRedeemsData()

const mode = ref('all') // 'me' | 'all'

const currentUsername = computed(() =>
  userProfile.value?.twitch?.username?.toLowerCase() || null
)

const userAvatar = computed(() =>
  userProfile.value?.twitch?.profileImage || null
)

const displayRedeems = computed(() => {
  if (mode.value === 'me' && currentUsername.value) {
    return allRedeems.value.filter(
      r => r.username.toLowerCase() === currentUsername.value
    )
  }
  return allRedeems.value
})

const moreLink = computed(() => {
  if (mode.value === 'me' && currentUsername.value) {
    return `/redeems?u=${currentUsername.value}`
  }
  return '/redeems'
})

defineExpose({ displayRedeems, mode, moreLink, currentUsername, userAvatar })

onMounted(async () => {
  await loadData()
  startRefreshTimer()
})
</script>
