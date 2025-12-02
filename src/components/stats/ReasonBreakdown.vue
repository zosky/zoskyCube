<template>
  <div class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden ring-1 ring-white/20">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-white/5">
          <tr class="text-white/90 text-left">
            <th class="px-6 py-3 font-semibold">Reason</th>
            <th class="px-6 py-3 font-semibold text-right">Count</th>
            <th class="px-6 py-3 font-semibold text-right">Total <Points currency="zC" class="h-6 w-6 inline -mt-2" /></th>
            <th class="px-6 py-3 font-semibold">Most Common Source</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/10">
          <tr 
            v-for="reason in stats" 
            :key="reason.reason"
            class="text-white hover:bg-white/5 transition-colors"
          >
            <td class="px-6 py-4 font-medium">{{ reason.reason.replace(' zoskyZappers ', ' ') }}</td>
            <td class="px-6 py-4 text-right text-white/90">{{ reason.count }}</td>
            <td class="px-6 py-4 text-right text-yellow-400 font-bold">
              <Points currency="zC" :n="reason.total" />
            </td>
            <td class="px-6 py-4 text-white/80">
              <gameLogo :game="formatSource(reason.topSource)" class="h-10" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import vodVoteIcon from '../../assets/ttv/vodVote.png'
import pixelPower from '../../assets/ttv/pixelPower.png'
import squadRush from '../../assets/ttv/squadRush.png'
import zoskyZappers from '../../assets/ttv/zoskyZappers.png'
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
    vouchers: 'Vouchers',
    zoskyZappers: 'zoskyZappers'
  }
  return names[source] || source
}
</script>
