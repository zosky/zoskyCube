<template>
  <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead class="bg-white/5 sticky top-0">
          <tr class="text-white/90">
            <th class="px-4 py-3 font-semibold text-left sticky left-0 bg-white/5 z-10">Hour</th>
            <th 
              v-for="source in sources" 
              :key="source"
              class="px-4 py-3 font-semibold text-center"
            >
              {{ formatSource(source) }}
            </th>
            <th class="px-4 py-3 font-semibold text-center bg-white/10">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="hour in 24" 
            :key="hour"
            class="border-t border-white/10 hover:bg-white/5 transition-colors"
          >
            <td class="px-4 py-3 font-semibold text-white sticky left-0 bg-white/5">
              {{ String(hour).padStart(2, '0') }}:00
            </td>
            <td 
              v-for="source in sources" 
              :key="source"
              :class="getCellClass(data[hour]?.[source] || 0)"
              class="px-4 py-3 text-center font-medium transition-colors"
            >
              {{ data[hour]?.[source] || 0 }}
            </td>
            <td class="px-4 py-3 text-center font-bold text-white bg-white/5">
              {{ hourTotals[hour] || 0 }}
            </td>
          </tr>
        </tbody>
        <tfoot class="bg-white/10 font-bold">
          <tr class="text-white border-t-2 border-white/20">
            <th class="px-4 py-3 text-left">Total</th>
            <th 
              v-for="source in sources" 
              :key="source"
              class="px-4 py-3 text-center text-yellow-400"
            >
              {{ sourceTotals[source] || 0 }}
            </th>
            <th class="px-4 py-3 text-center text-green-400">
              {{ grandTotal }}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  sources: {
    type: Array,
    required: true
  }
})

const hourTotals = computed(() => {
  const totals = {}
  for (let hour = 0; hour < 24; hour++) {
    totals[hour] = props.sources.reduce((sum, source) => {
      return sum + (props.data[hour]?.[source] || 0)
    }, 0)
  }
  return totals
})

const sourceTotals = computed(() => {
  const totals = {}
  props.sources.forEach(source => {
    totals[source] = 0
    for (let hour = 0; hour < 24; hour++) {
      totals[source] += props.data[hour]?.[source] || 0
    }
  })
  return totals
})

const grandTotal = computed(() => {
  return Object.values(hourTotals.value).reduce((sum, val) => sum + val, 0)
})

function getCellClass(value) {
  if (value === 0) return 'text-white/30'
  if (value < 50) return 'bg-blue-500/20 text-blue-300'
  if (value < 100) return 'bg-blue-500/40 text-blue-200'
  if (value < 200) return 'bg-blue-500/60 text-white'
  return 'bg-blue-500/80 text-white font-bold'
}

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
