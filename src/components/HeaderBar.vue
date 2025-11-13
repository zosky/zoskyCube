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
  
  // Get avatar URL based on platform - match auth.vue field names
  if (platform === 'twitch' && userProfile.value.twitch?.profileImage) {
    return userProfile.value.twitch.profileImage
  } else if (platform === 'steam' && userProfile.value.steam?.avatar) {
    return userProfile.value.steam.avatar
  } else if (platform === 'discord' && userProfile.value.discord?.avatar && userProfile.value.discord?.id) {
    return `https://cdn.discordapp.com/avatars/${userProfile.value.discord.id}/${userProfile.value.discord.avatar}.png`
  }
  
  // Fallback to any available avatar
  return userProfile.value.twitch?.profileImage || 
         userProfile.value.steam?.avatar || 
         (userProfile.value.discord?.avatar && userProfile.value.discord?.id ? 
          `https://cdn.discordapp.com/avatars/${userProfile.value.discord.id}/${userProfile.value.discord.avatar}.png` : null)
})

// ChartBar icon - goes to leaderboard always
function navigateToLeaderboard() {
  router.push('/stats')
}

// Avatar icon - goes to user's personal stats
function navigateToMyStats() {
  if (user.value && userProfile.value?.twitch?.username) {
    router.push(`/stats/user?username=${userProfile.value.twitch.username}`)
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
            :class="{ 'active' : $route.path === '/stats' && !$route.query.username }" 
            class="cursor-pointer"
            @click="navigateToLeaderboard"
            title="Leaderboard / Table of Contents" />
        <Account
            v-if="$route.path=='/auth' || !user"
            :class="{ 'active' : $route.path=='/auth' }" 
            class="cursor-pointer"
            @click="$router.push('/auth')"
            title="Connect Gaming Accounts" />
        
          <!-- <section class="flex flex-row gap-3 bg-blue-900 px-5 justify-start translate-y-14">
            <gameLogo game="AI Art" class="scale-[1.2] translate-y-0" />
            <gameLogo game="VOD Vote" class="h-3 w-auto translate-y-1" />
            <gameLogo game="Squad Rush" class="translate-y-1" />
          </section> -->

        <!-- User Avatar (right side) - goes to personal stats -->
        <div 
            v-if="user && userProfile && currentAvatar" 
            class="user-avatar-container"
            :class="{ 'active' : $route.path.includes('/stats/user') }"
            @click="navigateToMyStats"
            @mousedown.middle.prevent="cycleAvatar"
            :title="`My Personal Stats (Middle-click to cycle avatar)`"
        >
            <img 
                :src="currentAvatar" 
                :alt="`${userProfile.twitch?.username || 'User'} avatar`"
                class="user-avatar"
            />
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