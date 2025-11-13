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
    type: Array,
    required: true
  }
})

const chartData = computed(() => ({
  labels: props.data.map(m => {
    const [year, month] = m.month.split('-')
    const date = new Date(year, parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }),
  datasets: [
    {
      label: 'Total zC',
      data: props.data.map(m => m.total),
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const dataIndex = context.dataIndex
          const monthData = props.data[dataIndex]
          return [
            `Total: ${monthData.total} zC`,
            `Wins: ${monthData.count}`,
            `Active Days: ${monthData.activeDays}`,
            `Avg/Day: ${monthData.avgPerDay} zC`
          ]
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
      beginAtZero: true,
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
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-64 md:h-80;
}
</style>
