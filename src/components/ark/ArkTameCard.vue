<script setup>
import { computed, inject } from 'vue'
import ArkLevelBadge from './ArkLevelBadge.vue'
import ArkPlayerAvatar from './ArkPlayerAvatar.vue'

const props = defineProps({
  event: { type: Object, default: () => ({}) },
  playerColors: { type: Object, default: () => ({}) }
})

// Inject dino images using the correct name
const arkDinos = inject('arkDinos', {})

// Get dino background image
const dinoImage = computed(() => {
  if (props.event.dino && arkDinos[props.event.dino]) {
    return arkDinos[props.event.dino]
  }
  return null
})

// Generate random animation delay for each card
const randomDelay = `${Math.random() * 5}s`
</script>

<template>
  <div 
    class="relative rounded-lg overflow-hidden h-56 group hover:scale-105 transition-transform duration-300 border shadow-lg wobble-card"
    :class="playerColors[event.player]?.border"
    :style="{ animationDelay: randomDelay }">
    <!-- Background Image -->
    <div 
      v-if="dinoImage"
      class="absolute -inset-0 bg-cover bg-center rounded-lg"
      :style="{ backgroundImage: `url(${dinoImage})` }">
    </div>
    
    <!-- Fallback gradient if no image -->
    <div 
      v-else
      class="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
    </div>
    
    <!-- Dark gradient overlay from bottom with player color -->
    <div 
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
      :class="playerColors[event.player]?.bg">
    </div>
    
    <!-- Tame icon badge at top right -->
    <div 
      class="absolute top-0 right-2 backdrop-blur-sm rounded-full p-2 "
      :class="[playerColors[event.player]?.bgXXX, playerColors[event.player]?.borderXXX]">
      <!-- <span class="text-2xl">🦖</span> -->
      <!-- Right: Level -->
      <div class="flex items-center">
        <ArkLevelBadge 
          v-if="event.dino_level"
          :level="event.dino_level" 
          class="scale-[1.5] origin-top-right" />
      </div>

    </div>
    
    <!-- Time stamp at top left -->
    <div class="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono text-amber-400">
      <b>{{ event.day }}d</b>
      {{ event.time }}
    </div>
    
    <!-- Info bar at bottom -->
    <div 
      class="absolute bottom-0 left-0 right-0 backdrop-blur-md p-3 border-t-2 rounded-b-xl"
      :class="[playerColors[event.player]?.bg, playerColors[event.player]?.border]">
      <div class="flex items-center justify-between gap-2">
        <!-- Left: Player Avatar -->
        <div class="flex items-center gap-2 -mb-3 -ml-3 h-0 overflow-visible">
          <ArkPlayerAvatar 
            v-if="event.player" 
            :player-name="event.player" 
            size="md" 
            :class="['-mt-10 scale-[2] ring-2', `ring-${playerColors[event.player]?.border?.split('-')[1] || 'purple'}-400`]" />
        </div>
        
        <!-- Center: Dino Name -->
        <div class="flex-1 text-right -mt-10 -mb-2 h-0 overflow-visible">
          <span 
            class="font-bold text-2xl leading-tight"
            :class="playerColors[event.player]?.text || 'text-white'">
            {{ event.dino }}
          </span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.wobble-card {
  animation: wobble 32.4s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes wobble {
  0%, 8% {
    transform: rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }
  2% {
    transform: rotate(-1.5deg) translateY(-3px) rotateX(5deg) rotateY(-8deg) translateZ(12px);
  }
  4% {
    transform: rotate(1.5deg) translateY(3px) rotateX(-5deg) rotateY(8deg) translateZ(12px);
  }
  6% {
    transform: rotate(-0.75deg) translateY(-1.5px) rotateX(3deg) rotateY(-4deg) translateZ(6px);
  }
}

.wobble-card:hover {
  animation-play-state: paused;
}
</style>
