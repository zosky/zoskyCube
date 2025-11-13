<template>
  <div class="compare-page min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-white text-center mt-8 mb-8">📊 Compare Users</h1>
      
      <!-- User Selectors -->
      <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20 mb-8">
        <div class="grid md:grid-cols-3 gap-4 items-end">
          <div class="flex flex-col gap-2">
            <label class="text-white/90 font-semibold">User 1:</label>
            <input 
              v-model="user1" 
              @keyup.enter="loadBothUsers"
              placeholder="Username"
              class="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-white/90 font-semibold">User 2:</label>
            <input 
              v-model="user2" 
              @keyup.enter="loadBothUsers"
              placeholder="Username"
              class="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            @click="loadBothUsers" 
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
          >
            Compare
          </button>
        </div>
      </div>
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <!-- Comparison Grid -->
      <div v-else-if="data1.length > 0 && data2.length > 0" class="space-y-6">
        <!-- Total Winnings -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Total Winnings</h3>
          <div class="flex items-center justify-between gap-4">
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats1.total, stats2.total)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user1 }}</div>
              <div class="text-3xl font-bold text-yellow-400">{{ stats1.total.toLocaleString() }} zC</div>
            </div>
            <div class="text-2xl font-bold text-white/40">VS</div>
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats2.total, stats1.total)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user2 }}</div>
              <div class="text-3xl font-bold text-yellow-400">{{ stats2.total.toLocaleString() }} zC</div>
            </div>
          </div>
          <div class="text-center text-white/70 text-sm mt-4">
            Difference: {{ Math.abs(stats1.total - stats2.total).toLocaleString() }} zC
            ({{ getDifferencePercent(stats1.total, stats2.total) }}%)
          </div>
        </div>
        
        <!-- Win Count -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Total Wins</h3>
          <div class="flex items-center justify-between gap-4">
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats1.count, stats2.count)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user1 }}</div>
              <div class="text-3xl font-bold text-white">{{ stats1.count }}</div>
            </div>
            <div class="text-2xl font-bold text-white/40">VS</div>
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats2.count, stats1.count)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user2 }}</div>
              <div class="text-3xl font-bold text-white">{{ stats2.count }}</div>
            </div>
          </div>
        </div>
        
        <!-- Average Per Win -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Avg Per Win</h3>
          <div class="flex items-center justify-between gap-4">
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats1.avg, stats2.avg)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user1 }}</div>
              <div class="text-3xl font-bold text-green-400">{{ stats1.avg }} zC</div>
            </div>
            <div class="text-2xl font-bold text-white/40">VS</div>
            <div 
              :class="['flex-1 p-6 rounded-lg text-center transition-all', getWinnerClass(stats2.avg, stats1.avg)]"
            >
              <div class="text-lg text-white/90 mb-2">{{ user2 }}</div>
              <div class="text-3xl font-bold text-green-400">{{ stats2.avg }} zC</div>
            </div>
          </div>
        </div>
        
        <!-- Side-by-side charts -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h3 class="text-xl font-bold text-white mb-4 text-center">{{ user1 }}'s Sources</h3>
            <SourcePieChart :data="data1" />
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20">
            <h3 class="text-xl font-bold text-white mb-4 text-center">{{ user2 }}'s Sources</h3>
            <SourcePieChart :data="data2" />
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-else class="bg-white/10 backdrop-blur-md rounded-xl p-12 ring-1 ring-white/20 text-center text-white">
        <p class="text-xl">Enter two usernames to compare their stats</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'

const route = useRoute()
const user1 = ref('')
const user2 = ref('')
const data1 = ref([])
const data2 = ref([])
const isLoading = ref(false)

onMounted(() => {
  // Parse query params
  const users = route.query.users?.split(',') || []
  if (users[0]) user1.value = users[0]
  if (users[1]) user2.value = users[1]
  
  if (user1.value && user2.value) {
    loadBothUsers()
  }
})

const stats1 = computed(() => calculateStats(data1.value))
const stats2 = computed(() => calculateStats(data2.value))

function calculateStats(data) {
  const total = data.reduce((sum, r) => sum + r.amount, 0)
  const count = data.length
  const avg = count > 0 ? Math.round(total / count) : 0
  return { total, count, avg }
}

function getWinnerClass(val1, val2) {
  if (val1 > val2) return 'bg-green-500/20 ring-2 ring-green-500 scale-105'
  if (val1 < val2) return 'bg-red-500/10 ring-1 ring-red-500/50'
  return 'bg-white/5 ring-1 ring-white/20'
}

function getDifferencePercent(val1, val2) {
  const max = Math.max(val1, val2)
  if (max === 0) return 0
  return Math.round(Math.abs(val1 - val2) / max * 100)
}

async function loadBothUsers() {
  if (!user1.value || !user2.value) return
  
  isLoading.value = true
  try {
    const [data1Result, data2Result] = await Promise.all([
      fetchAllRecords(user1.value),
      fetchAllRecords(user2.value)
    ])
    data1.value = data1Result
    data2.value = data2Result
  } catch (err) {
    console.error('Error loading comparison data:', err)
  } finally {
    isLoading.value = false
  }
}

async function fetchAllRecords(username) {
  const q = query(
    collection(db, 'user_handouts', username, 'history')
  )
  
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
</script>
