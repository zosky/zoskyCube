<template>
  <div class="chart-wrapper">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const sourceColors = {
  vodVote: 'rgb(59, 130, 246)',      // blue
  squadRush: 'rgb(16, 185, 129)',    // green
  art: 'rgb(251, 146, 60)',           // orange
  manual: 'rgb(168, 85, 247)',        // purple
  storePurchases: 'rgb(236, 72, 153)', // pink
  vouchers: 'rgb(234, 179, 8)'        // yellow
}

const chartData = computed(() => {
  const grouped = {}
  props.data.forEach(item => {
    if (!grouped[item.source]) {
      grouped[item.source] = 0
    }
    grouped[item.source] += item.amount
  })
  
  const sources = Object.keys(grouped)
  
  return {
    labels: sources.map(s => formatSource(s)),
    datasets: [{
      data: sources.map(s => grouped[s]),
      backgroundColor: sources.map(s => sourceColors[s] || 'rgb(156, 163, 175)'),
      borderWidth: 2,
      borderColor: '#1e293b'
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'rgb(255, 255, 255)',
        padding: 15
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || ''
          const value = context.parsed || 0
          const total = context.dataset.data.reduce((a, b) => a + b, 0)
          const percentage = Math.round((value / total) * 100)
          return `${label}: ${value} zC (${percentage}%)`
        }
      }
    }
  }
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

<style scoped>
.chart-wrapper {
  @apply relative h-64;
}
</style>
