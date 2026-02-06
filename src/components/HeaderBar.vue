<script setup>
import { Twitch, Youtube, Steam, GamepadVariantOutline, SkullCrossbones, Store, PlusBox, TrophyOutline, Account, HelpCircleOutline, ChartBar } from 'mdue'
import { useAuth } from '../composables/useAuth'
import Points from './Points.vue'

const router = useRouter()
const route = useRoute()
const { user, userProfile } = useAuth()

// User points balance
const userPoints = ref(null)
const userPointsLoading = ref(false)
const SE_CHANNEL_ID = '668816ac484cab966df79977'

const fetchUserPoints = async (username) => {
  if (!username) return
  userPointsLoading.value = true
  try {
    const res = await fetch(`https://api.streamelements.com/kappa/v2/points/${SE_CHANNEL_ID}/${username}`)
    if (res.ok) {
      const data = await res.json()
      userPoints.value = data.points || 0
    }
  } catch (err) {
    console.error('Failed to fetch user points:', err)
  } finally {
    userPointsLoading.value = false
  }
}

// Watch for userProfile to load and fetch points
watch(() => userProfile.value?.twitch?.username, (username) => {
  if (username && userPoints.value === null) {
    fetchUserPoints(username)
  }
}, { immediate: true })

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
            <img id="logo" src="@/assets/logo.png" alt="zoskyCube Logo" />
        </a>
        <a href="https://twitch.tv/zoskyCube" :title="'ttv:zoskyCube'">
            <ttv-status />
        </a>
        <header-bar-yt />
        <div
          :class="{ 'active' : $route.path=='/collection' }" 
          class="cursor-pointer"
          @click="$router.push('./collection')"
          title="Game Collection">
          <Steam />
        </div>
        <div
          :class="{ 'active' : $route.path=='/store' }" 
          class="cursor-pointer"
          @click="$router.push('/store')"
          title="Reward Store">
          <Store />
        </div>
        <div
          :class="{ 'active' : $route.path=='/' }" 
          class="cursor-pointer"
          title="Death Counter"
          @click="$router.push('/')">
          <SkullCrossbones />
        </div>
        <div
          :class="$route.path=='/counter' ? 'active' : 'hidden' "
          class="cursor-pointer"
          @click="$router.push('/counter')"
          title="Add Death">
          <PlusBox />
        </div>
        <div
          :class="{ 'active' : $route.path=='/winning' }" 
          class="cursor-pointer"
          @click="$router.push('/winning')"
          title="Completed Games">
          <TrophyOutline />
        </div>
        <div
          :class="{ 'active' : $route.path.includes('/help/') }" 
          class="cursor-pointer"
          @click="$router.push('/help/')"
          title="Help Center">

          <HelpCircleOutline />
        </div>
        <div
          :class="{ 'active' : $route.path === '/stats' && !$route.query.username }" 
          class="cursor-pointer"
          @click="navigateToLeaderboard"
          title="Leaderboard / Table of Contents">
          <ChartBar />
        </div>
        <div             
          :class="{ 'active' : $route.path=='/auth' }" 
          class="cursor-pointer"
          @click="$router.push('/auth')"
          title="Connect Gaming Accounts">
          <Account />
        </div>
        <img 
          src="@/assets/ttv/pixelPower.png" 
          alt="PixelPower Art Collection" 
          title="PixelPower Art Collection" 
          :class="{ 'bg-purple-400/40' : $route.path=='/pixelPower' }" 
          class="inline h-14 -mb-4 -mt-3" 
          @click="$router.push('/pixelPower')" />
        
          <!-- <section class="flex flex-row gap-3 bg-blue-900 px-5 justify-start translate-y-14">
            <gameLogo game="AI Art" class="scale-[1.2] translate-y-0" />
            <gameLogo game="VOD Vote" class="h-3 w-auto translate-y-1" />
            <gameLogo game="Squad Rush" class="translate-y-1" />
          </section> -->

        <div               
          :class="{ 'animate-pulse' : $route.path=='/halo' }" 
          class="cursor-pointer h-10 w-auto -mx-1"
          title="Halo campaign Stats"
          @click="$router.push('/halo')">
          <HaloLogo />
        </div>
        <div
          :class="{ 'animate-pulse' : $route.path=='/halo' }" 
          class="cursor-pointer w-10 h-auto -mx-2"
          title="arkTribe timeline"
          @click="$router.push('/ark')">
          <ArkLogo />
        </div>
        <!-- <GamepadVariantOutline /> -->
        
        <!-- User Balance & Avatar (floating right side) -->
        <div 
            v-if="user && userProfile && currentAvatar" 
            class="user-balance-container"
        >
            <!-- Balance Display -->
            <div 
              v-if="userPoints !== null" 
              class="balance-display"
              title="Your zCube Balance"
            >
              <Points currency="zC" :n="userPoints" />
            </div>
            <div 
              v-else-if="userPointsLoading" 
              class="balance-display animate-pulse"
            >
              ...
            </div>
            
            <!-- Avatar -->
            <div 
                class="user-avatar-wrapper"
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
        </div>
    </nav>
</template>

<style scoped>
nav { 
    @apply text-2xl font-bold flex items-center gap-2 -mb-7 bg-blue-950 px-3 py-1; 
    filter: drop-shadow(0 10px 15px rgba(6, 182, 212, 0.5));
}
nav .cursor-pointer, nav a 
  { @apply hover:scale-110 transition-all }
#logo { @apply h-20 -mt-20 -mb-20 }
a { @apply flex flex-row items-center hover:scale-105 transition-transform duration-200 }
.active { @apply text-yellow-400 scale-110 }

.user-balance-container {
    @apply flex items-center gap-2 ml-auto;
}

.balance-display {
    @apply text-sm font-bold text-yellow-400 bg-gray-900/80 px-2 py-1 rounded-lg;
    @apply border border-yellow-500/30;
}

.user-avatar-wrapper {
    @apply cursor-pointer transition-transform duration-200 hover:scale-110;
    @apply flex items-center justify-center w-12 h-12 rounded-full overflow-hidden;
    @apply ring-2 ring-blue-400 hover:ring-yellow-400;
}

.user-avatar {
    @apply w-full h-full object-cover;
}
</style>