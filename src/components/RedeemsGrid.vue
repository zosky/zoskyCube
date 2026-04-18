<template>
  <div>
    <!-- Limit selector (only when showLimitSelector is true) -->
    <div v-if="showLimitSelector" class="mb-4 flex items-center gap-2">
      <span class="text-gray-400 text-sm">Show:</span>
      <button
        v-for="opt in limitOptions"
        :key="opt"
        @click="activeLimit = opt"
        class="px-3 py-1 text-sm rounded-lg transition-colors"
        :class="activeLimit === opt
          ? 'bg-cyan-600 text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'"
      >
        {{ opt }}
      </button>
    </div>

    <!-- Grid -->
    <div :class="gridClass">
      <div
        v-for="redeem in displayedRedeems"
        :key="redeem.timestamp + redeem.username"
        class="redeem-card bg-gray-900 rounded-lg overflow-hidden border transition-all hover:scale-105 group"
        :class="[
          redeem.isGiftCard ? 'border-orange-500/40' : 'border-gray-800/80 hover:border-cyan-500/70',
          redeem.isRefund ? 'opacity-40 grayscale' : ''
        ]"
      >
        <!-- Thumbnail -->
        <div class="relative aspect-[16/9] bg-gray-800 overflow-hidden">
          <!-- Steam game header image -->
          <img
            v-if="!redeem.isGiftCard && redeem.steamid"
            :src="getSteamHeader(redeem.steamid)"
            :alt="redeem.gamename"
            class="w-full h-full object-cover"
            loading="lazy"
            @error="handleImageError($event)"
          />
          <!-- Missing steamId placeholder -->
          <div
            v-else-if="!redeem.isGiftCard && !redeem.steamid"
            class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
          >
            <Gamepad class="text-5xl text-gray-600" />
          </div>
          <!-- Gift card placeholder -->
          <div
            v-else
            class="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900/50 to-yellow-900/50"
          >
            <WalletGiftcard class="text-6xl text-orange-400 opacity-60" />
          </div>

          <!-- Gift card badge -->
          <div
            v-if="redeem.isGiftCard"
            class="absolute top-2 left-2 px-2 py-0.5 bg-orange-500 text-black rounded text-[10px] font-bold"
          >
            🎁 Gift Card
          </div>
          <!-- Refund badge -->
          <div
            v-if="redeem.isRefund"
            class="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold"
          >
            ↩ Refunded
          </div>

          <!-- Info label: game name + date + avatar -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-2 py-1.5 flex items-end justify-between">
            <div class="min-w-0">
              <div class="text-gray-300 text-[10px] [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%),_0_0_6px_rgb(0_0_0_/_70%)]">{{ formatDate(redeem.timestamp) }}</div>
              <h4 class="text-white text-xs font-bold truncate [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%),_0_0_6px_rgb(0_0_0_/_70%)]" :title="redeem.gamename">
                <WalletGiftcard v-if="redeem.isGiftCard" class="inline w-3.5 h-3.5 text-orange-400 mr-1 -mt-0.5" />
                {{ redeem.gamename }}
              </h4>
            </div>
            <!-- Avatar: always visible, username tooltip on hover -->
            <div v-if="!hideAvatars && getAvatar(redeem.username)" class="relative flex-shrink-0 ml-1.5">
              <img
                :src="getAvatar(redeem.username)"
                :alt="redeem.username"
                class="w-6 h-6 rounded-full ring-1 ring-white/30 cursor-pointer peer"
              />
              <div class="absolute bottom-full right-0 mb-1 px-1.5 py-0.5 bg-black/90 text-white text-[10px] font-medium rounded whitespace-nowrap opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {{ redeem.username }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Gamepad, WalletGiftcard } from 'mdue'
import { useTwitchAvatars } from '../composables/useTwitchAvatars'

const { getAvatar } = useTwitchAvatars()

const props = defineProps({
  /** Array of redeem objects to display */
  redeems: { type: Array, required: true },
  /** Fixed limit (no selector shown). Use for homepage embeds like 6. */
  limit: { type: Number, default: null },
  /** Show the 32/64/128 limit selector buttons */
  showLimitSelector: { type: Boolean, default: false },
  /** Hide per-card avatars (e.g. when viewing a single user) */
  hideAvatars: { type: Boolean, default: false },
  /** Custom grid classes override */
  cols: { type: String, default: null }
})

const limitOptions = [30, 60, 120]
const activeLimit = ref(30)

const effectiveLimit = computed(() => {
  if (props.limit !== null) return props.limit
  if (props.showLimitSelector) return activeLimit.value
  return null // no limit — show all
})

// Collapse original+refund pairs: if a refund exists for a game+user, hide the original
const refundKeys = computed(() => {
  const keys = new Set()
  for (const r of props.redeems) {
    if (r.isRefund) keys.add(`${r.username}|${r.steamid}|${r.gamename}`)
  }
  return keys
})
const dedupedRedeems = computed(() =>
  props.redeems.filter(r => r.isRefund || !refundKeys.value.has(`${r.username}|${r.steamid}|${r.gamename}`))
)

const displayedRedeems = computed(() => {
  if (effectiveLimit.value === null) return dedupedRedeems.value
  return dedupedRedeems.value.slice(0, effectiveLimit.value)
})

const totalCount = computed(() => dedupedRedeems.value.length)
const hasMore = computed(() =>
  effectiveLimit.value !== null && dedupedRedeems.value.length > effectiveLimit.value
)

const gridClass = computed(() =>
  props.cols || 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'
)

function getSteamHeader(steamid) {
  if (!steamid || steamid === '0') return ''
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${steamid}/header.jpg`
}

function handleImageError(event) {
  event.target.src = 'https://via.placeholder.com/460x215?text=No+Image'
}

function formatDate(timestamp) {
  if (!timestamp) return ''
  const d = new Date(timestamp)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.redeem-card {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(6, 182, 212, 0.15),
    0 0 30px rgba(6, 182, 212, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.redeem-card:hover {
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(6, 182, 212, 0.35),
    0 0 60px rgba(6, 182, 212, 0.15),
    0 0 90px rgba(6, 182, 212, 0.06),
    inset 0 1px 0 rgba(6, 182, 212, 0.15);
}
</style>
