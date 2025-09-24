<template>
  <div ref="chartRef" class="w-full h-64 xl:h-96 z-10"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, MarkPointComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkPointComponent,
  CanvasRenderer
])

const props = defineProps({
  games: {
    type: Array,
    required: true
    // [{ name: string, id: number, entries: [{ time: number, lives: number }] }]
  },
  visible: {
    type: Array,
    required: true
  },
  colorMap: {
    type: Object,
    required: true
  }
})

const chartRef = ref(null)
let chartInstance = null
const isDark = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

function getColor(gameId, idx) {
  // Use colorMap if available, otherwise fallback to ECharts default palette
  if (props.colorMap[gameId]) {
    return props.colorMap[gameId]
  }
  
  const palette = [
    '#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE',
    '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
  ]
  return palette[idx % palette.length]
}

function getSplitNumber() {
  if (!chartRef.value) return 6
  const width = chartRef.value.offsetWidth
  if (width < 400) return 2
  if (width < 600) return 3
  if (width < 900) return 4
  return 6
}

function getOption() {
  const dark = isDark.value
  return {
    // title: {
    //   text: 'Lives Over Time by Game',
    //   textStyle: { color: dark ? '#fff' : '#222' }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross', lineStyle: { color: dark ? '#aaa' : '#333' } },
      backgroundColor: dark ? '#222' : '#fff',
      borderColor: dark ? '#444' : '#ccc',
      textStyle: { color: dark ? '#fff' : '#222' },
      formatter: params => {
        return params.map(p => 
            [ p.seriesName, new Date(p.data[0]).toLocaleString(), `${p.data[1]} lives`].join('<br>')
        ).join('<br/>')
      }
    },
    grid: { left: 40, right: 20, bottom: 40, top: 60 },
    xAxis: {
      type: 'time',
      // name: 'Time',
      axisLabel: { formatter: value => new Date(value).toLocaleString().replace(', ','\n'), color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee', type: 'dashed' }, show: true },
      splitNumber: 2 // getSplitNumber() // Dynamically set based on width
    },
    yAxis: {
      type: 'value',
      // name: 'Lives',
      minInterval: 1,
      splitNumber: 3,
      axisLabel: { color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee', type: 'dashed' } }
    },
    backgroundColor: dark ? '#0000' : '#fff',
    series: props.games.map((game, idx) => {
      const seriesData = props.visible[idx] ? game.entries.map(e => [e.time, e.lives]) : []
      
      // Find points where images should be placed (first point and after null values)
      const markPointData = []
      if (seriesData.length > 0) {
        // Add image at the first point
        markPointData.push({
          coord: seriesData[0],
          symbol: `image://https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/logo.jpg`,
          symbolSize: [60, 28], // Approximate Steam header aspect ratio
          symbolOffset: [0, -40], // Position above the point
          label: {
            show: false
          }
        })
        
        // Check for points that follow null values (game switches)
        // In this case, we'll add images at significant gaps in time (more than 1 hour)
        for (let i = 1; i < seriesData.length; i++) {
          const currentTime = seriesData[i][0]
          const prevTime = seriesData[i-1][0]
          const timeDiff = currentTime - prevTime
          
          // If there's a gap of more than 1 hour (3600000 ms), add an image
          if (timeDiff > 3600000) {
            markPointData.push({
              coord: seriesData[i],
              symbol: `image://https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/header.jpg`,
              symbolSize: [60, 28],
              symbolOffset: [0, -40],
              label: {
                show: false
              }
            })
          }
        }
      }
      
      return {
        name: game.name,
        type: 'line',
        symbol: 'circle',
        symbolSize: 7,
        data: seriesData,
        lineStyle: { width: 2, color: getColor(game.id, idx) },
        itemStyle: { color: getColor(game.id, idx) },
        emphasis: { focus: 'series' },
        showSymbol: props.visible[idx],
        markPoint: {
          data: markPointData,
          silent: true // Make the images non-interactive
        }
      }
    })
  }
}

function renderChart() {
  if (!chartInstance) {
    chartInstance = echarts.init(chartRef.value, isDark.value ? 'dark' : null)
  }
  chartInstance.setOption(getOption())
}

function handleResize() {
  if (chartInstance) {
    chartInstance.resize()
  }
}

onMounted(() => {
  renderChart()
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      isDark.value = e.matches
      if (chartInstance) {
        chartInstance.dispose()
        chartInstance = null
      }
      renderChart()
    })
  }
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', handleResize)
})

watch([() => props.games, () => props.visible, () => props.colorMap, isDark], () => {
  if (chartInstance) renderChart()
}, { deep: true })
</script>

<style scoped>
.w-full {
  width: 100%;
}
.h-96 {
  height: 24rem;
}
</style>
