<script setup>
import { computed } from 'vue'

const props = defineProps({
  playerName: {type:String, default: 'ben'},
  size: { type: String, default: 'md' /* sm, md, lg */ }
})

// Map ARK player names to Steam farming bots
const avatarHash = {
  madameD: 'e28746a6e27310227dd53db103f3d41ac4bf8c1d',
  ben: '7c01e2873dbf9e27eea168d1b8df3bb4e8f6e5ec'
}

const avatarImg = (hash) => `https://avatars.akamai.steamstatic.com/${hash}_full.jpg`

const playerAvatar = computed(() => {
  if (!avatarHash?.[props.playerName]) return 
  const url = avatarImg(avatarHash[props.playerName])
  console.log(`ArkPlayerAvatar for ${props.playerName}:`, url)
  return url
})

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16'
}
</script>

<template>
  <img 
    v-if="playerAvatar"
    :src="playerAvatar" 
    :alt="playerName"
    :class="['rounded-full border-2 border-white', sizeClasses[size]]"
    :title="playerName"
    @error="console.log('Avatar failed to load for', playerName)"
    @load="console.log('Avatar loaded successfully for', playerName)" />
  <div 
    v-else
    :class="['rounded-full bg-gray-700 flex items-center justify-center text-white font-bold', sizeClasses[size]]"
    :title="playerName">
    {{ playerName?.charAt(0)?.toUpperCase() }}
  </div>
</template>
