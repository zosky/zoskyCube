<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">Total Winnings</div>
      <div class="text-2xl font-bold text-yellow-400">
        <Points currency="zC" :n="totalAmount" />
      </div>
    </div>
    
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">Total Wins</div>
      <div class="text-2xl font-bold text-white">{{ totalCount }}</div>
    </div>
    
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">Avg Per Win</div>
      <div class="text-2xl font-bold text-green-400">
        <Points currency="zC" :n="avgAmount" />
      </div>
    </div>
    
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">Best Source</div>
      <div class="text-lg font-bold text-blue-400">
        <!-- {{ formatSource(topSource) }} -->
        <gameLogo :game="formatSource(topSource)" />

      </div>
    </div>
    
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">Active Days</div>
      <div class="text-2xl font-bold text-purple-400">{{ activeDays }}</div>
    </div>
    
    <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 ring-1 ring-white/20">
      <div class="text-xs text-white/70 mb-1">First Win</div>
      <div class="text-sm font-bold text-white/90">{{ firstWinDate }}</div>
    </div>
  </div>
</template>

<script setup>
import Points from '../Points.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const totalAmount = computed(() => props.data.reduce((sum, h) => sum + h.amount, 0))
const totalCount = computed(() => props.data.length)
const avgAmount = computed(() => totalCount.value > 0 ? Math.round(totalAmount.value / totalCount.value) : 0)

const topSource = computed(() => {
  const sources = {}
  props.data.forEach(h => {
    sources[h.source] = (sources[h.source] || 0) + h.amount
  })
  const sorted = Object.entries(sources).sort((a, b) => b[1] - a[1])
  return sorted.length > 0 ? sorted[0][0] : 'N/A'
})

const activeDays = computed(() => {
  const days = new Set(props.data.map(h => h.date))
  return days.size
})

const firstWinDate = computed(() => {
  if (props.data.length === 0) return 'N/A'
  const sorted = [...props.data].sort((a, b) => a.timestamp.seconds - b.timestamp.seconds)
  return new Date(sorted[0].timestamp.seconds * 1000).toLocaleDateString()
})

function formatSource(source) {
  const names = {
    vodVote: 'VOD Vote',
    squadRush: 'Squad Rush',
    art: 'AI Art',
    manual: 'Manual',
    storePurchases: 'Store',
    vouchers: 'Vouchers'
  }
  return names[source] || source
}
</script>
