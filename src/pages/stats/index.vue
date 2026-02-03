<template>
  <div class="stats-index min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between mt-8 mb-8">
        <h1 class="text-4xl font-bold text-white">
          📊 zCube Winnings Leaderboard
        </h1>
        <button
          @click="$router.push('/stats/analytics')"
          class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors shadow-lg"
        >
          📈 View Analytics
        </button>
      </div>
      
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <div v-else>
        <!-- Summary Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Players</div>
            <div class="text-3xl font-bold text-white">{{ leaderboard.length }}</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Total Distributed</div>
            <div class="text-3xl font-bold text-yellow-400">{{ totalDistributed.toLocaleString() }} zC</div>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <div class="text-sm text-white/70 mb-1">Avg Per Player</div>
            <div class="text-3xl font-bold text-green-400">{{ avgPerPlayer.toLocaleString() }} zC</div>
          </div>
        </div>
        
        <!-- Leaderboard Table -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-white/5">
                <tr class="text-white/90 text-left">
                  <th class="px-6 py-3 font-semibold">Rank</th>
                  <th class="px-6 py-3 font-semibold">Username</th>
                  <th class="px-6 py-3 font-semibold text-right">Total Winnings</th>
                  <th class="px-6 py-3 font-semibold text-right">Total Wins</th>
                  <th class="px-6 py-3 font-semibold text-right">Avg Per Win</th>
                  <th class="px-6 py-3 font-semibold">Last Activity</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr 
                  v-for="(user, idx) in leaderboard" 
                  :key="user.username"
                  class="text-white hover:bg-blue-500/20 cursor-pointer transition-colors"
                  @click="$router.push(`/stats/user?username=${user.username}`)"
                >
                  <td class="px-6 py-4">
                    <span v-if="idx === 0" class="text-2xl">🥇</span>
                    <span v-else-if="idx === 1" class="text-2xl">🥈</span>
                    <span v-else-if="idx === 2" class="text-2xl">🥉</span>
                    <span v-else class="text-white/70">{{ idx + 1 }}</span>
                  </td>
                  <td class="px-6 py-4 font-semibold">{{ user.username }}</td>
                  <td class="px-6 py-4 text-right text-yellow-400 font-bold">{{ user.totalAmount.toLocaleString() }} zC</td>
                  <td class="px-6 py-4 text-right text-white/90">{{ user.totalCount }}</td>
                  <td class="px-6 py-4 text-right text-green-400">{{ user.avgAmount }} zC</td>
                  <td class="px-6 py-4 text-white/70 text-sm">{{ formatRelativeTime(user.lastActivity) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs, query, orderBy, limit, collectionGroup } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAuth } from '../../composables/useAuth'

const router = useRouter()
const { user, userProfile } = useAuth()

const leaderboard = ref([])
const isLoading = ref(true)

// Debug: Log db instance
console.log('🔥 Firebase db instance:', db)
console.log('🔥 Firebase app:', db.app.name)

onMounted(async () => {
  // Check if user is logged in and has a Twitch username
  if (user.value && userProfile.value?.twitch?.username) {
    // Redirect to user's stats page
    router.push(`/stats/user?username=${userProfile.value.twitch.username}`)
  } else {
    // Load leaderboard
    await loadLeaderboard()
  }
  
  isLoading.value = false
})

async function loadLeaderboard() {
  try {
    console.log('🏆 Leaderboard: Starting to fetch user_handouts using collectionGroup...')
    
    // Use collectionGroup to find all 'history' documents across all users
    // Then extract unique usernames from the paths
    const historyQuery = collectionGroup(db, 'history')
    console.log('🏆 Leaderboard: Collection group query created for "history"')
    
    const snapshot = await getDocs(historyQuery)
    console.log('🏆 Leaderboard: Found', snapshot.size, 'total history documents')
    
    // Extract unique usernames from document paths
    const usernamesSet = new Set()
    snapshot.docs.forEach(doc => {
      // Path format: user_handouts/{username}/history/{docId}
      const pathParts = doc.ref.path.split('/')
      if (pathParts.length >= 2 && pathParts[0] === 'user_handouts') {
        usernamesSet.add(pathParts[1])
      }
    })
    
    const usernames = Array.from(usernamesSet)
    console.log('🏆 Leaderboard: Found', usernames.length, 'unique users:', usernames)
    
    const userStats = await Promise.all(usernames.map(async (username) => {
      
      // Get latest history record for "last activity"
      const historyQuery = query(
        collection(db, 'user_handouts', username, 'history'),
        orderBy('timestamp', 'desc'),
        limit(1)
      )
      const historySnapshot = await getDocs(historyQuery)
      
      // Get all history docs to calculate totals
      const allHistoryQuery = query(
        collection(db, 'user_handouts', username, 'history')
      )
      const allHistorySnapshot = await getDocs(allHistoryQuery)
      
      let totalAmount = 0
      let totalCount = allHistorySnapshot.size
      
      allHistorySnapshot.forEach(doc => {
        totalAmount += doc.data().amount || 0
      })
      
      console.log('🏆 Leaderboard:', username, '- Count:', totalCount, 'Total:', totalAmount)
      
      return {
        username,
        totalAmount,
        totalCount,
        avgAmount: totalCount > 0 ? Math.round(totalAmount / totalCount) : 0,
        lastActivity: historySnapshot.empty ? null : historySnapshot.docs[0].data().timestamp
      }
    }))
    
    // Sort by total amount descending
    leaderboard.value = userStats.sort((a, b) => b.totalAmount - a.totalAmount)
    console.log('🏆 Leaderboard: Final leaderboard has', leaderboard.value.length, 'users')
  } catch (err) {
    console.error('Error loading leaderboard:', err)
  }
}

const totalDistributed = computed(() => 
  leaderboard.value.reduce((sum, user) => sum + user.totalAmount, 0)
)

const avgPerPlayer = computed(() => 
  leaderboard.value.length > 0 
    ? Math.round(totalDistributed.value / leaderboard.value.length)
    : 0
)

function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Never'
  const date = timestamp.toDate()
  const now = new Date()
  const diff = now - date
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}
</script>
