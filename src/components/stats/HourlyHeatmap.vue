<template>
  <div class="chart-wrapper">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const sourceColors = {
  vodVote: 'rgb(59, 130, 246)',
  squadRush: 'rgb(16, 185, 129)',
  art: 'rgb(251, 146, 60)',
  manual: 'rgb(168, 85, 247)',
  storePurchases: 'rgb(236, 72, 153)',
  vouchers: 'rgb(234, 179, 8)'
}

const chartData = computed(() => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const sources = new Set()
  
  // Collect all sources
  Object.values(props.data).forEach(hour => {
    Object.keys(hour).forEach(source => sources.add(source))
  })
  
  const datasets = Array.from(sources).map(source => ({
    label: formatSource(source),
    data: hours.map(h => props.data[h]?.[source] || 0),
    backgroundColor: sourceColors[source] || 'rgb(156, 163, 175)'
  }))
  
  return {
    labels: hours.map(h => `${String(h).padStart(2, '0')}:00`),
    datasets
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgb(255, 255, 255)'
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y} zC`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Hour of Day',
        color: 'rgb(255, 255, 255, 0.9)'
      },
      ticks: {
        color: 'rgb(255, 255, 255, 0.7)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Total zCubes',
        color: 'rgb(255, 255, 255, 0.9)'
      },
      ticks: {
        color: 'rgb(255, 255, 255, 0.7)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
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
  @apply relative h-80;
}
</style>
