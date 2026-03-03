<template>
  <div
    class="grid"
    :class="[gridClass, compact ? 'gap-2' : 'gap-4']"
  >
    <div
      v-for="item in items"
      :key="item._id"
      @click="$emit('select', item)"
      class="store-card rounded-lg overflow-hidden border transition-all hover:scale-105 cursor-pointer"
      :class="{
        'border-yellow-500/50 ring-1 ring-yellow-500/30': isFavorite?.(item.bot?.identifier),
        'border-gray-800/80 hover:border-cyan-500/70': !isFavorite?.(item.bot?.identifier),
        'opacity-50': isHidden?.(item.bot?.identifier)
      }"
    >
      <!-- Compact mode: image with overlaid key/price -->
      <div v-if="compact" class="relative bg-gray-800">
        <img
          :src="item.thumbnail || getDefaultThumbnail(item)"
          :alt="item.name"
          class="w-full h-fit object-fit aspect-[16/9]"
          loading="lazy"
          @error="handleImageError($event, item)"
        />
        <!-- Overlay bar at bottom -->
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-2 py-1.5">
          <div class="flex justify-between items-center text-xs">
            <span v-if="item.quantity.current > 1" class="flex items-center gap-1 text-green-400">
              🔑 {{ item.quantity.current }}
            </span>
            <span v-else></span>
            <span class="flex items-center gap-1 text-yellow-400">
              <Points currency="zC" :n="item.cost" />
            </span>
          </div>
        </div>
      </div>

      <!-- Full mode: thumbnail + info bar -->
      <template v-else>
        <div class="bg-gray-800 relative overflow-hidden">
          <img
            :src="item.thumbnail || getDefaultThumbnail(item)"
            :alt="item.name"
            class="w-full h-fit object-fit aspect-[16/9]"
            loading="lazy"
            @error="handleImageError($event, item)"
          />
          <!-- Featured Badge -->
          <div
            v-if="item.featured"
            class="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-black rounded text-xs font-bold"
          >
            ⭐ Featured
          </div>
          <!-- "New" Badge (added within last 14 days) -->
          <div
            v-if="showNewBadge && isNew(item)"
            class="absolute top-2 right-2 px-2 py-0.5 bg-green-500 text-white rounded text-[10px] font-bold"
          >
            NEW
          </div>
        </div>

        <!-- Info Bar -->
        <div class="p-3 bg-gray-950 border-t border-gray-800">
          <h3 class="font-bold text-white text-sm line-clamp-1 mb-2" :title="item.name">
            {{ item.name }}
          </h3>
          <div class="flex justify-between items-center text-sm">
            <!-- Keys -->
            <span class="flex items-center gap-1" :class="item.quantity.current > 0 ? 'text-green-400' : 'text-red-400'">
              🔑 {{ item.quantity.current }}
            </span>
            <!-- Price -->
            <span class="flex items-center gap-1">
              <Points currency="zC" :n="item.cost" />
            </span>
            <!-- Action Buttons (only if showActions) -->
            <div v-if="showActions" class="flex items-center gap-1">
              <!-- Favorite -->
              <button
                @click.stop="$emit('toggleFavorite', item.bot?.identifier)"
                :class="isFavorite?.(item.bot?.identifier) ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'"
                class="transition-colors"
                :title="isFavorite?.(item.bot?.identifier) ? 'Remove from favorites' : 'Add to favorites'"
              >
                <Star v-if="isFavorite?.(item.bot?.identifier)" class="w-5 h-5" />
                <StarOutline v-else class="w-5 h-5" />
              </button>
              <!-- Hide -->
              <button
                @click.stop="$emit('toggleHidden', item.bot?.identifier)"
                :class="isHidden?.(item.bot?.identifier) ? 'text-red-400' : 'text-gray-500 hover:text-red-400'"
                class="transition-colors"
                :title="isHidden?.(item.bot?.identifier) ? 'Unhide item' : 'Hide item'"
              >
                <EyeOffOutline class="w-5 h-5" />
              </button>
              <!-- Steam Link -->
              <a
                :href="getSteamLink(item)"
                target="_blank"
                @click.stop
                class="text-blue-400 hover:text-blue-300"
                title="View on Steam"
              >
                <Steam class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <!-- Empty State -->
  <div v-if="items.length === 0" class="text-center py-16 text-gray-500">
    <p class="text-4xl mb-4">🏪</p>
    <p>No items to display.</p>
  </div>
</template>

<script setup>
import { Steam, StarOutline, Star, EyeOffOutline } from 'mdue'
import Points from '@/components/Points.vue'
import { useStoreData } from '@/composables/useStoreData'

const { getSteamLink, getDefaultThumbnail, handleImageError } = useStoreData()

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  gridClass: {
    type: String,
    default: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
  },
  compact: {
    type: Boolean,
    default: false
  },
  showActions: {
    type: Boolean,
    default: true
  },
  showNewBadge: {
    type: Boolean,
    default: false
  },
  isFavorite: {
    type: Function,
    default: null
  },
  isHidden: {
    type: Function,
    default: null
  }
})

defineEmits(['select', 'toggleFavorite', 'toggleHidden'])

function isNew(item) {
  if (!item.createdAt) return false
  const created = new Date(item.createdAt)
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 14)
  return created > cutoff
}
</script>

<style scoped>
.store-card {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 15px rgba(6, 182, 212, 0.15),
    0 0 30px rgba(6, 182, 212, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}
.store-card:hover {
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(6, 182, 212, 0.35),
    0 0 60px rgba(6, 182, 212, 0.15),
    0 0 90px rgba(6, 182, 212, 0.06),
    inset 0 1px 0 rgba(6, 182, 212, 0.15);
}
</style>
