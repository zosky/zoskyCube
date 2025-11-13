<template>
  <div class="chart-wrapper">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const chartData = computed(() => ({
  labels: props.data.map(w => w.week),
  datasets: [
    {
      label: 'Total zC',
      data: props.data.map(w => w.total),
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y'
    },
    {
      label: 'Win Count',
      data: props.data.map(w => w.count),
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y1'
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgb(255, 255, 255)'
      }
    },
    title: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || ''
          if (label) {
            label += ': '
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y
            if (context.datasetIndex === 0) {
              label += ' zC'
            } else {
              label += ' wins'
            }
          }
          return label
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'rgb(255, 255, 255, 0.7)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
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
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Win Count',
        color: 'rgb(255, 255, 255, 0.9)'
      },
      ticks: {
        color: 'rgb(255, 255, 255, 0.7)'
      },
      grid: {
        drawOnChartArea: false
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-64 md:h-80;
}
</style>
