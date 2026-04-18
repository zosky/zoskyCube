<route lang="yaml">
meta:
  title: Home
</route>

<template>
  <div class="mx-auto p-4">

    <!-- Hero -->
    <div class="mt-10 mb-4 text-left">
      <!-- <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
        zoskyCube
      </h1> -->
      <p class="text-gray-400">
        Stream & Steam games, rewards, stats & more
      </p>
    </div>

    <!-- Quick Nav Cards -->
    <div class="flex flex-wrap gap-3 mb-10">
      <router-link
        v-for="link in quickLinks"
        :key="link.to"
        :to="link.to"
        class="nav-card bg-gray-900/80 rounded-lg p-4 text-center ring-1 ring-cyan-500/20 hover:ring-cyan-400/60 hover:scale-105 transition-all group min-w-[100px] flex-1"
      >
        <component :is="link.icon" class="w-7 h-7 mx-auto mb-1 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        <div class="text-xs text-gray-400 group-hover:text-white transition-colors">{{ link.label }}</div>
      </router-link>

      <!-- Auth card with service status icons -->
      <router-link
        to="/auth"
        class="nav-card bg-gray-900/80 rounded-lg p-4 text-center ring-1 ring-cyan-500/20 hover:ring-cyan-400/60 hover:scale-105 transition-all group min-w-[100px] flex-1"
      >
        <div class="flex items-center justify-center gap-1 mb-1">
          <img
            v-if="userAvatar"
            :src="userAvatar"
            :alt="currentUsername"
            class="w-7 h-7 rounded-full"
          />
          <Account v-else class="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        </div>
        <div class="flex items-center justify-center gap-1.5 mt-1">
          <Twitch class="w-4 h-4" :class="twitchConnected ? 'text-cyan-400' : 'text-gray-600'" />
          <Steam class="w-4 h-4" :class="steamConnected ? 'text-cyan-400' : 'text-gray-600'" />
          <Discord class="w-4 h-4" :class="discordConnected ? 'text-cyan-400' : 'text-gray-600'" />
        </div>
      </router-link>
    </div>

    <!-- Game Stats -->
    <details open class="mb-10 group">
      <summary class="flex items-center justify-between mb-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h2 class="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <GamepadVariant class="w-6 h-6" />
          Game Stats
        </h2>
        <div class="flex items-center gap-3">
          <router-link
            to="/stats"
            class="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            @click.stop
          >
            Leaderboard
            <ArrowRight class="w-4 h-4" />
          </router-link>
          <ChevronDown class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <div v-if="handoutsLoading" class="text-center py-8">
        <div class="animate-spin text-4xl">🎮</div>
      </div>
      <GameStats v-else :handouts="combinedHandouts" />
    </details>

    <!-- Newest Store Items -->
    <details open class="mb-10 group">
      <summary class="flex items-center justify-between mb-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h2 class="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <Store class="w-6 h-6" />
          New Rewards
        </h2>
        <div class="flex items-center gap-3">
          <router-link
            to="/store"
            class="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            @click.stop
          >
            View all
            <ArrowRight class="w-4 h-4" />
          </router-link>
          <ChevronDown class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <div v-if="storeLoading" class="text-center py-8">
        <div class="animate-spin text-4xl">🎮</div>
      </div>
      <StoreGrid
        v-else
        :items="newestStoreItems"
        :showActions="false"
        compact
        gridClass="grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
        @select="goToStore"
      />
    </details>

    <!-- Redeems Stats -->
    <details open class="mb-10 group">
      <summary class="flex items-center justify-between mb-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h2 class="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <ChartBar class="w-6 h-6" />
          Redeems Overview
        </h2>
        <ChevronDown class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
      </summary>
      <RedeemsStats
        :claimCount="claimCount"
        :uniqueUsers="uniqueUsers"
        :uniqueGames="uniqueGames"
        :uniqueSteamIds="uniqueSteamIds"
        :giftCardCount="giftCardCount"
        :totalCubesSpent="totalCubesSpent"
        :isFiltered="isOverviewFiltered"
        :filteredClaimCount="overviewStats.claimCount"
        :filteredUniqueUsers="overviewStats.uniqueUsers"
        :filteredUniqueGames="overviewStats.uniqueGames"
        :filteredUniqueSteamIds="overviewStats.uniqueSteamIds"
        :filteredGiftCardCount="overviewStats.giftCardCount"
        :filteredTotalCubesSpent="overviewStats.totalCubesSpent"
      />
    </details>

    <!-- Recent Redeems Section -->
    <details open class="mb-10 group">
      <summary class="flex items-center justify-between mb-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h2 class="text-xl font-bold text-cyan-400 flex items-center gap-2">
          <GiftOutline class="w-6 h-6" />
          Recent Redeems
        </h2>
        <div class="flex items-center gap-3">
          <!-- Toggle Buttons: Me / All / More -->
          <div class="flex rounded-lg overflow-hidden border border-gray-700" @click.stop>
            <button
              v-if="redeemsRef?.currentUsername"
              @click="redeemsRef.mode = 'me'"
              class="px-2.5 py-1.5 transition-colors flex items-center justify-center"
              :class="redeemsRef?.mode === 'me'
                ? 'bg-cyan-600'
                : 'bg-gray-800 hover:bg-gray-700'"
              :title="`${redeemsRef.currentUsername}'s redeems`"
            >
              <img
                v-if="redeemsRef?.userAvatar"
                :src="redeemsRef.userAvatar"
                :alt="redeemsRef.currentUsername"
                class="w-5 h-5 rounded-full"
              />
              <Account v-else class="w-5 h-5 text-cyan-400" />
            </button>
            <button
              @click="redeemsRef && (redeemsRef.mode = 'all')"
              class="px-2.5 py-1.5 transition-colors flex items-center justify-center"
              :class="!redeemsRef || redeemsRef?.mode === 'all'
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'"
              title="All redeems"
            >
              <AccountGroup class="w-5 h-5" />
            </button>
            <router-link
              :to="redeemsRef?.moreLink || '/redeems'"
              class="px-2.5 py-1.5 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-1"
              title="View all redeems"
              @click.stop
            >
              <ViewGrid class="w-5 h-5" />
              <span class="text-[10px] font-bold">{{ redeemsRef?.displayRedeems?.length || 0 }}</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
          <ChevronDown class="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <RedeemsRecent ref="redeemsRef" :limit="6" :hideHeader="true" />
    </details>

  </div>
</template>

<script setup>
import { Store, SkullCrossbones, TrophyOutline, ChartBar, Steam, HelpCircleOutline, Account, Twitch, Discord, ArrowRight, ChevronDown, GiftOutline, AccountGroup, ViewGrid, GamepadVariant } from 'mdue'
import { useAuth } from '../composables/useAuth'
import { useRedeemsData } from '../composables/useRedeemsData'
import { useStoreData } from '../composables/useStoreData'
import { useHandoutsData } from '../composables/useHandoutsData'
import RedeemsRecent from '../components/RedeemsRecent.vue'
import RedeemsStats from '../components/RedeemsStats.vue'
import StoreGrid from '../components/StoreGrid.vue'
import GameStats from '../components/GameStats.vue'

const { userProfile, twitchConnected, steamConnected, discordConnected } = useAuth()

const currentUsername = computed(() =>
  userProfile.value?.twitch?.username || null
)
const userAvatar = computed(() =>
  userProfile.value?.twitch?.profileImage || null
)

const {
  uniqueUsers,
  uniqueGames,
  uniqueSteamIds,
  giftCardCount,
  claimCount,
  totalCubesSpent,
  loadData,
  startRefreshTimer
} = useRedeemsData()

const {
  isLoading: storeLoading,
  fetchStoreItems,
  getNewest
} = useStoreData()

const {
  isLoading: handoutsLoading,
  combinedHandouts,
  loadData: loadHandouts,
  connectRealtime
} = useHandoutsData()

const newestStoreItems = getNewest(16)

const router = useRouter()
function goToStore(item) {
  router.push('/store')
}

const redeemsRef = ref(null)

const isOverviewFiltered = computed(() =>
  redeemsRef.value?.mode === 'me'
)

const overviewStats = computed(() => {
  const redeems = redeemsRef.value?.displayRedeems
  if (!redeems || !isOverviewFiltered.value) {
    return {
      claimCount: claimCount.value,
      uniqueUsers: uniqueUsers.value,
      uniqueGames: uniqueGames.value,
      uniqueSteamIds: uniqueSteamIds.value,
      giftCardCount: giftCardCount.value,
      totalCubesSpent: totalCubesSpent.value
    }
  }
  const users = new Set(redeems.map(r => r.username))
  const games = new Set(redeems.map(r => r.gamename))
  const steamIds = new Set(redeems.filter(r => r.steamid).map(r => r.steamid))
  return {
    claimCount: redeems.length,
    uniqueUsers: users.size,
    uniqueGames: games.size,
    uniqueSteamIds: steamIds.size,
    giftCardCount: redeems.filter(r => r.isGiftCard).length,
    totalCubesSpent: redeems.reduce((sum, r) => sum + r.cost, 0)
  }
})

const quickLinks = [
  { to: '/store', icon: Store, label: 'Store' },
  { to: '/failCount', icon: SkullCrossbones, label: 'failAttempts' },
  { to: '/winning', icon: TrophyOutline, label: 'Victories' },
  { to: '/stats', icon: ChartBar, label: 'Stats' },
  { to: '/help/', icon: HelpCircleOutline, label: 'Help' },
  { to: '/collection', icon: Steam, label: 'zosky\'s' },
]

onMounted(async () => {
  await Promise.all([loadData(), fetchStoreItems(), loadHandouts()])
  startRefreshTimer()
  // Connect to Twitch chat for realtime game stats
  connectRealtime().catch(err => console.warn('TwitchChat connect failed:', err))
})
</script>

<style scoped>
/* Cyberpunk neon glow for nav cards */
.nav-card {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(6, 182, 212, 0.15),
    0 0 30px rgba(6, 182, 212, 0.08),
    inset 0 1px 0 rgba(6, 182, 212, 0.1);
  backdrop-filter: blur(4px);
}
.nav-card:hover {
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(6, 182, 212, 0.35),
    0 0 60px rgba(6, 182, 212, 0.15),
    0 0 90px rgba(6, 182, 212, 0.06),
    inset 0 1px 0 rgba(6, 182, 212, 0.2);
}

/* Section headers glow */
:deep(details > summary h2) {
  text-shadow: 0 0 8px rgba(6, 182, 212, 0.5), 0 0 25px rgba(6, 182, 212, 0.25), 0 0 50px rgba(6, 182, 212, 0.1);
}

/* Border on collapsed sections to hint there's more */
details:not([open]) > summary {
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
  padding-bottom: 0.75rem;
  margin-bottom: 0 !important;
}
</style>
