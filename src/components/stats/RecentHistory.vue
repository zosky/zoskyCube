<template>
  <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-white/5">
          <tr class="text-white/90 text-left">
            <th class="px-6 py-3 font-semibold">Date & Time</th>
            <th class="px-6 py-3 font-semibold">Source</th>
            <th class="px-6 py-3 font-semibold">Reason</th>
            <th class="px-6 py-3 font-semibold text-right">Amount</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr 
            v-for="entry in recentEntries" 
            :key="entry.id"
            class="text-white hover:bg-white/5 transition-colors"
          >
            <td class="px-6 py-4 text-sm">
              <div class="font-semibold">{{ formatDate(entry.timestamp) }}</div>
              <div class="text-white/60 text-xs">{{ formatTime(entry.timestamp) }}</div>
            </td>
            <td class="px-6 py-4">
              <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold" 
                    :style="{ backgroundColor: getSourceColor(entry.source) }">
                {{ formatSource(entry.source) }}
              </span>
            </td>
            <td class="px-6 py-4 text-white/90 text-sm max-w-md truncate" :title="entry.reason">
              {{ entry.reason }}
            </td>
            <td class="px-6 py-4 text-right">
              <span class="text-lg font-bold text-yellow-400">{{ entry.amount }}</span>
              <span class="text-sm text-white/70 ml-1">zC</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

// Get the 10 most recent entries (already sorted by timestamp desc)
const recentEntries = computed(() => props.data.slice(0, 10))

function formatDate(timestamp) {
  const date = new Date(timestamp.seconds * 1000)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

function formatTime(timestamp) {
  const date = new Date(timestamp.seconds * 1000)
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  })
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

function getSourceColor(source) {
  const colors = {
    vodVote: 'rgba(59, 130, 246, 0.6)',      // blue
    squadRush: 'rgba(16, 185, 129, 0.6)',    // green
    art: 'rgba(251, 146, 60, 0.6)',           // orange
    manual: 'rgba(168, 85, 247, 0.6)',        // purple
    storePurchases: 'rgba(236, 72, 153, 0.6)', // pink
    vouchers: 'rgba(234, 179, 8, 0.6)'        // yellow
  }
  return colors[source] || 'rgba(156, 163, 175, 0.6)'
}
</script>
