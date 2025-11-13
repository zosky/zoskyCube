<script setup>
import { Twitch, Youtube, Steam, GamepadVariantOutline, SkullCrossbones, Store, PlusBox, TrophyOutline, Account, HelpCircleOutline, ChartBar } from 'mdue'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const route = useRoute()
const { user, userProfile } = useAuth()

const avatarIndex = ref(0) // 0=twitch, 1=steam, 2=discord

onMounted(() => {
  // Load saved avatar preference
  const savedIndex = localStorage.getItem('preferredAvatarIndex')
  if (savedIndex) {
    avatarIndex.value = parseInt(savedIndex)
  }
})

const currentAvatar = computed(() => {
  if (!userProfile.value) return null
  
  const platforms = ['twitch', 'steam', 'discord']
  const platform = platforms[avatarIndex.value % 3]
  
  // Get avatar URL based on platform
  if (platform === 'twitch' && userProfile.value.twitch?.profileImageUrl) {
    return userProfile.value.twitch.profileImageUrl
  } else if (platform === 'steam' && userProfile.value.steam?.avatar) {
    return userProfile.value.steam.avatar
  } else if (platform === 'discord' && userProfile.value.discord?.avatar) {
    return `https://cdn.discordapp.com/avatars/${userProfile.value.discord.id}/${userProfile.value.discord.avatar}.png`
  }
  
  // Fallback to any available avatar
  return userProfile.value.twitch?.profileImageUrl || 
         userProfile.value.steam?.avatar || 
         (userProfile.value.discord?.avatar ? `https://cdn.discordapp.com/avatars/${userProfile.value.discord.id}/${userProfile.value.discord.avatar}.png` : null)
})

function navigateToStats() {
  if (user.value && userProfile.value?.twitch?.username) {
    // Navigate to user's specific stats
    router.push(`/stats/${userProfile.value.twitch.username}`)
  } else {
    // Navigate to leaderboard
    router.push('/stats')
  }
}

function navigateToMyStats() {
  if (user.value && userProfile.value?.twitch?.username) {
    router.push(`/stats/${userProfile.value.twitch.username}`)
  }
}

function cycleAvatar(event) {
  event.preventDefault()
  avatarIndex.value = (avatarIndex.value + 1) % 3
  localStorage.setItem('preferredAvatarIndex', avatarIndex.value.toString())
}
</script>

<template>
    <nav class="custom-cyan-shadow">
        <a href="./">
            <img src="@/assets/logo.png" alt="zoskyCube Logo" />
        </a>
        <a href="https://twitch.tv/zoskyCube" :title="'ttv:zoskyCube'">
            <ttv-status />
        </a>
        <header-bar-yt />
        <Steam
            :class="{ 'active' : $route.path=='/collection' }" 
            class="cursor-pointer"
            @click="$router.push('./collection')"
            title="Game Collection" />
        <SkullCrossbones             
            :class="{ 'active' : $route.path=='/' }" 
            class="cursor-pointer"
            @click="$router.push('/')" />
        <PlusBox
            :class="$route.path=='/counter' ? 'active' : 'hidden' "
            class="cursor-pointer"
            @click="$router.push('/counter')"
            title="Add Death" />
        <TrophyOutline
            :class="{ 'active' : $route.path=='/winning' }" 
            class="cursor-pointer"
            @click="$router.push('/winning')"
            title="Completed Games" />
        <HelpCircleOutline
            :class="{ 'active' : $route.path.includes('/help/') }" 
            class="cursor-pointer"
            @click="$router.push('/help/')"
            title="Help Center" />
        <ChartBar
            :class="{ 'active' : $route.path.includes('/stats') }" 
            class="cursor-pointer"
            @click="navigateToStats"
            :title="user ? 'My Stats' : 'Leaderboard'" />
        <Account
            v-if="$route.path=='/auth' || !user"
            :class="{ 'active' : $route.path=='/auth' }" 
            class="cursor-pointer"
            @click="$router.push('/auth')"
            title="Connect Gaming Accounts" />
        
        <!-- User Avatar (right side) -->
        <div 
            v-if="user && userProfile" 
            class="user-avatar-container"
            @click="navigateToMyStats"
            @mousedown.middle.prevent="cycleAvatar"
            :title="`${userProfile.twitch?.username || 'My'} Stats (Middle-click to cycle avatar)`"
        >
            <img 
                v-if="currentAvatar"
                :src="currentAvatar" 
                :alt="`${userProfile.twitch?.username || 'User'} avatar`"
                class="user-avatar"
            />
            <Account v-else class="w-10 h-10 text-blue-400" />
        </div>
        <HaloLogo
            :class="{ 'animate-pulse' : $route.path=='/halo' }" 
            class="cursor-pointer h-10 w-auto -mx-1"
            title="Halo campaign Stats"
            @click="$router.push('/halo')" />
        <ArkLogo 
            :class="{ 'animate-pulse' : $route.path=='/halo' }" 
            class="cursor-pointer w-10 h-auto -mx-2"
            title="arkTribe timeline"
            @click="$router.push('/ark')" />
        <GamepadVariantOutline />
    </nav>
</template>

<style scoped>
nav { 
    @apply text-2xl font-bold flex items-center gap-2 -mb-7 bg-blue-950 px-3 py-1; 
    filter: drop-shadow(0 10px 15px rgba(6, 182, 212, 0.5));
}
img { @apply h-20 -mt-20 -mb-20 }
a { @apply flex flex-row items-center hover:scale-105 transition-transform duration-200 }
.active { @apply text-yellow-400 scale-110 }

.user-avatar-container {
    @apply justify-self-end cursor-pointer transition-transform duration-200 hover:scale-110;
    @apply flex items-center justify-center w-12 h-12 rounded-full overflow-hidden;
    @apply ring-2 ring-blue-400 hover:ring-yellow-400 ml-auto;
}

.user-avatar {
    @apply w-full h-full object-cover;
}
</style>