<script setup>
import { computed, inject } from 'vue'
import ArkBattleCard from './ArkBattleCard.vue'
import ArkPlayerAvatar from './ArkPlayerAvatar.vue'
import ArkTameCard from './ArkTameCard.vue'

const props = defineProps({
  event: {type:Object, default: () => ({}) },
  playerColors: {type:Object, default: () => ({}) },
})

// Inject dino images using the correct name
const arkDinos = inject('arkDinos', {})

const getEventIcon = (type) => {
  const icons = {
    tribe_join: '👥',
    tribe_promotion: '👑',
    tame: '🦖',
    pve_death: '💀',
    generic_death: '☠️',
    destroyed: '💥',
    demolish: '🔨',
    dino_death: '🦴',
    baby_death: '🍼💀',
    baby_claim: '🥚',
    starvation_death: '😵'
  }
  return icons[type] || '📋'
}

const getEventColor = (type) => {
  const colors = {
    tribe_join: 'text-green-400',
    tribe_promotion: 'text-yellow-400',
    tame: 'text-purple-400',
    pve_death: 'text-red-400',
    generic_death: 'text-orange-400',
    destroyed: 'text-gray-400',
    demolish: 'text-amber-400',
    dino_death: 'text-red-600',
    baby_death: 'text-pink-500',
    baby_claim: 'text-cyan-400',
    starvation_death: 'text-red-700'
  }
  return colors[type] || 'text-gray-400'
}

const getEventBgColor = (type) => {
  const colors = {
    tribe_join: 'bg-green-500/20 dark:bg-green-500/10 border-l-4 border-green-500',
    tribe_promotion: 'bg-yellow-500/20 dark:bg-yellow-500/10 border-l-4 border-yellow-500',
    tame: 'bg-purple-500/20 dark:bg-purple-500/10 border-l-4 border-purple-500',
    pve_death: 'bg-red-500/50 dark:bg-red-500/40 border-l-4 border-red-500',
    generic_death: 'bg-orange-500/20 dark:bg-orange-500/10 border-l-4 border-orange-500',
    destroyed: 'bg-gray-500/20 dark:bg-gray-500/10 border-l-4 border-gray-500',
    demolish: 'bg-amber-500/20 dark:bg-amber-500/10 border-l-4 border-amber-500',
    dino_death: 'bg-red-600/50 dark:bg-red-600/40 border-l-4 border-red-600',
    baby_death: 'bg-pink-500/30 dark:bg-pink-500/20 border-l-4 border-pink-500',
    baby_claim: 'bg-cyan-500/20 dark:bg-cyan-500/10 border-l-4 border-cyan-500',
    starvation_death: 'bg-red-700/50 dark:bg-red-700/40 border-l-4 border-red-700'
  }
  return colors[type] || 'bg-gray-500/10'
}

const isBattleEvent = computed(() => {
  return ['pve_death', 'tame', 'generic_death', 'dino_death', 'baby_death', 'starvation_death'].includes(props.event.type)
})

const isSimpleEvent = computed(() => {
  return ['tribe_join', 'tribe_promotion', 'destroyed', 'demolish', 'baby_claim'].includes(props.event.type)
})

const getSimpleEventText = () => {
  switch(props.event.type) {
  case 'tribe_join':
    return { name: props.event.player, action: 'joined the tribe' }
  case 'tribe_promotion':
    return { name: props.event.player, action: 'was promoted' }
  case 'destroyed':
    return { name: props.event.item, action: 'was destroyed' }
  case 'demolish':
    return { name: props.event.player, action: `demolished ${props.event.structure}` }
  case 'baby_claim':
    return { name: props.event.player, action: `claimed ${props.event.dino}` }
  default:
    return { name: '', action: '' }
  }
}

// Get dino background image if available
const dinoBackground = computed(() => {
  // Check for creature in pve_death events
  if (props.event.type === 'pve_death' && props.event.creature) {
    if (arkDinos[props.event.creature]) {
      return arkDinos[props.event.creature]
    }
  }
  // Check for dino in tame events
  if (props.event.type === 'tame' && props.event.dino) {
    if (arkDinos[props.event.dino]) {
      return arkDinos[props.event.dino]
    }
  }
  return null
})
</script>

<template>
  <!-- Special card for tame events -->
  <li v-if="event.type === 'tame'" class="col-span-1">
    <ArkTameCard :event="event" :player-colors="playerColors" />
  </li>
  
  <!-- Regular cards for other events -->
  <li 
    v-else :class="[
      'flex items-start gap-3 group rounded-md px-3 transition-colors relative overflow-hidden', 
      getEventBgColor(event.type),
      event.type.includes('_death') ? 'animate-pulse' : ''
    ]">    
    <!-- Overlay to darken background and make text readable -->
    <div v-if="dinoBackground" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    
    <!-- Content with higher z-index -->
    <div class="relative z-10 flex-1 flex items-start gap-3">
      <!-- Battle/Complex Events -->
      <div v-if="isBattleEvent" class="flex-1">
        <ArkBattleCard :event="event" :player-colors="playerColors" />
      </div>
      
      <!-- Simple Events -->
      <div v-else-if="isSimpleEvent" class="items-start gap-3 flex w-full">
        <div class="flex gap-1 w-20 text-xs font-mono text-amber-700 dark:text-amber-500 mt-1 min-w-max self-center">
          <b>{{ event.day }}d</b>
          {{ event.time.split(':').slice(0,2).join(':') }}
        </div>
        
        <div class="flex-shrink -mt-1">
          <span :class="['text-2xl', getEventColor(event.type)]">
            {{ getEventIcon(event.type) }}
          </span>
        </div>
        
        <div class="flex gap-1 flex-row justify-between w-full space-y-1 min-w-max">
          <div>
            <span 
              v-if="['ben','madameD'].includes(getSimpleEventText().name)"
              :class="['font-semibold text-base', event.player && playerColors[event.player] ? playerColors[event.player].text : 'text-amber-900 dark:text-amber-100']">
              <ArkPlayerAvatar :player-name="getSimpleEventText().name" size="md" class="-mt-1" />
            </span>
            <span v-else class="font-light text-orange-400">
              {{ getSimpleEventText().name }}
            </span>
          </div>
          <div class="text-sm text-amber-800 dark:text-amber-300 italic">
            {{ getSimpleEventText().action?.replace('was ','') }}
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
