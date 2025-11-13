<template>
  <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-white/5">
          <tr class="text-white/90 text-left">
            <th class="px-6 py-3 font-semibold">Source</th>
            <th class="px-6 py-3 font-semibold text-right">Total Wins</th>
            <th class="px-6 py-3 font-semibold text-right">Total zC</th>
            <th class="px-6 py-3 font-semibold text-right">Avg Per Win</th>
            <th class="px-6 py-3 font-semibold text-right">% of Total</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr 
            v-for="game in stats" 
            :key="game.source"
            class="text-white hover:bg-white/5 transition-colors"
          >
            <td class="px-6 py-4 font-semibold">{{ formatSource(game.source) }}</td>
            <td class="px-6 py-4 text-right text-white/90">{{ game.count }}</td>
            <td class="px-6 py-4 text-right text-yellow-400 font-bold">{{ game.total.toLocaleString() }} zC</td>
            <td class="px-6 py-4 text-right text-green-400">{{ game.avg }} zC</td>
            <td class="px-6 py-4 text-right text-blue-400 font-bold">{{ game.percentage }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  }
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
