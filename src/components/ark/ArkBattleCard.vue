<script setup>
import { computed, inject } from 'vue'
import ArkLevelBadge from './ArkLevelBadge.vue'
import ArkPlayerAvatar from './ArkPlayerAvatar.vue'

const props = defineProps({
  event: {type:Object, default: () => ({}) },
  playerColors: {type:Object, default: () => ({}) },
})

// Inject dino images using the correct name
const arkDinos = inject('arkDinos', {})

const getEventIcon = (type) => {
  const icons = {
    tame: '🦖',
    pve_death: '💀',
    generic_death: '☠️',
    dino_death: '🦴',
    baby_death: '🍼💀',
    starvation_death: '😵'
  }
  return icons[type] || '📋'
}

const primaryLevel = computed(() => {
  if (props.event.type === 'pve_death' || props.event.type === 'generic_death') {
    return props.event.victim_level
  }
  if (props.event.type === 'dino_death' || props.event.type === 'baby_death' || props.event.type === 'starvation_death') {
    return props.event.dino_level
  }
  if (props.event.type === 'tame') {
    return null // player doesn't show level on tames
  }
  return null
})

const secondaryLevel = computed(() => {
  if (props.event.type === 'pve_death') {
    return props.event.creature_level
  }
  if (props.event.type === 'dino_death') {
    return props.event.killer_level
  }
  if (props.event.type === 'tame') {
    return props.event.dino_level
  }
  return null
})

const primaryName = computed(() => {
  if (props.event.type === 'pve_death' || props.event.type === 'generic_death') {
    return props.event.victim
  }
  if (props.event.type === 'dino_death' || props.event.type === 'baby_death' || props.event.type === 'starvation_death') {
    return props.event.dino_name
  }
  if (props.event.type === 'tame') {
    return props.event.player
  }
  return ''
})

const secondaryName = computed(() => {
  if (props.event.type === 'pve_death') {
    return props.event.creature
  }
  if (props.event.type === 'dino_death') {
    return props.event.killer_creature
  }
  if (props.event.type === 'tame') {
    return props.event.dino
  }
  return ''
})

const actionText = computed(() => {
  if (props.event.type === 'pve_death') return 'killed by'
  if (props.event.type === 'dino_death') return 'killed by'
  if (props.event.type === 'generic_death') return 'died'
  if (props.event.type === 'baby_death') return 'baby died'
  if (props.event.type === 'starvation_death') return 'starved'
  if (props.event.type === 'tame') return 'tamed'
  return ''
})

const isVsBattle = computed(() => {
  return (props.event.type === 'pve_death' || props.event.type === 'dino_death') && secondaryLevel.value
})
</script>

<template>
  <div class="flex flex-row items-center w-full justify-between sm:justify-start">
    <span class="flex gap-1 items-center pr-3 text-xs font-mono text-amber-700 dark:text-amber-500">
      <b class="flex sm:hidden">{{ event.day }}d</b> 
      {{ event.time.split(':').slice(0,2).join(':') }}
    </span>
    
    <div v-if="isVsBattle" class="flex flex-row w-full justtify-end items-center gap-1 -mt-1 -ml-3 scale-[1.5] origin-right py-2 h-24">
      <!-- Left side - Player -->
      <div 
        class="flex w-full items-start justify-end gap-2"
        :class="['madameD','ben'].includes(primaryName) ? '-mt-9 scale-125 origin-top-right' : '-mt-5'">
        <div class="flex flex-col items-end justity-start">
          <div class="flex flex-row items-end">
            <ArkLevelBadge 
              v-if="primaryLevel"
              :level="primaryLevel"
              :is-lower="primaryLevel < secondaryLevel" />
            <ArkPlayerAvatar :playerName="primaryName" size="md" />          
          </div>
          <span 
            class="text-xs w-full text-amber-900 dark:text-amber-200 font-medium text-right px-1 -mb-4"
            :class="['font-semibold text-base', playerColors[primaryName]?.text || 'text-amber-900 dark:text-amber-100']">
            {{ !['madameD','ben'].includes(primaryName) ? primaryName : '' }}
          </span>
        </div>
      </div>
      
      <!-- Center - VS -->
      <div class="flex flex-col items-center -mb-4 opacity-75 -mt-4">
        <span class="text-2xl">{{ getEventIcon(event.type) }}</span>
        <span class="text-xs text-center font-light text-red-400 tracking-wider leading-tight -mt-1">killed</span>
        <span class="text-xs text-center font-light text-red-400 tracking-wider leading-tight -mt-1">by</span>
      </div>
      
      <!-- Right side - Creature -->
      <div class="flex-1 flex items-center -mt-4">
        <div class="flex flex-col">
          <div class="flex flex-row items-center">
            <div class="flex flex-row items-center">
              <div class="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-2xl border-2 border-gray-600">
                <!-- <img v-if="arkDinoImages?.[secondaryName]" :src="arkDinoImages?.[secondaryName]" class="rounded-full w-10 h-10 -my-3 scale-[2] border-2 border-white"  />
                <span v-else>🦖</span> -->
                <div>🦖</div>
                <!-- <div class="text-xs">{{ secondaryName }}</div> -->
              </div>
              <ArkLevelBadge 
                v-if="secondaryLevel"
                :level="secondaryLevel"
                :is-higher="secondaryLevel > primaryLevel" />
            </div>
          </div>
          <span class="text-xs w-full text-amber-900 dark:text-amber-200 font-medium text-cetner px-1 -mb-4">
            {{ secondaryName }}
          </span>
        </div>

      </div>
    </div>
    
    <!-- Non-battle events (tames, generic deaths) -->
    <div v-else class="flex items-center justify-end gap-2 mt-1 scale-[1.4] origin-right my-2 self-end">
      <!-- Time + Icon + Avatar in one line -->
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="text-xl">{{ getEventIcon(event.type) }}</span>
        <ArkPlayerAvatar v-if="primaryName && (event.type === 'tame' || event.player || event.victim)" :playerName="primaryName" size="sm" />
        <span v-else class="text-sm font-bold text-amber-800 dark:text-amber-300">{{ primaryName.replace(/^.*?(?=Baby)/, '') }}</span>
      </div>

      <!-- Action text -->
      <span class="text-xs text-amber-800 dark:text-amber-300 italic flex-shrink-0">
        {{ actionText }}
      </span>
      
      <!-- Dino/Creature with level badge -->
      <div class="flex items-center gap-2 flex-1 min-w-0">
        <div v-if="event.type === 'tame'" class="rounded-full bg-gray-800/50 flex items-center justify-center text-sm border border-gray-600 flex-shrink-0 -z-10">
          <!-- <img v-if="arkDinoImages?.[secondaryName]" :src="arkDinoImages?.[secondaryName]" class="rounded-full w-10 h-10 -my-3 scale-[2] border-2 border-white"  />
          <span v-else>🦖</span> -->
          🦖
        </div>
        <span class="text-sm text-amber-900 dark:text-amber-200 font-medium truncate">
          {{ secondaryName }}
        </span>
        <ArkLevelBadge 
          v-if="secondaryLevel"
          :level="secondaryLevel"
          class="ml-auto flex-shrink-0" />
      </div>
    </div>
  </div>
</template>
