<template>
  <div ref="chartRef" class="w-full h-96"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
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

function getColor(idx) {
  // Use ECharts default color palette
  const palette = [
    '#5470C6', '#91CC75', '#EE6666', '#FAC858', '#73C0DE',
    '#3BA272', '#FC8452', '#9A60B4', '#EA7CCC'
  ]
  return palette[idx % palette.length]
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
        return params.map(p => `${p.seriesName}: ${p.data[1]} lives @ ${new Date(p.data[0]).toLocaleString()}`).join('<br/>')
      }
    },
    grid: { left: 40, right: 20, bottom: 40, top: 60 },
    xAxis: {
      type: 'time',
      name: 'Time',
      axisLabel: { formatter: value => new Date(value).toLocaleString(), color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee' } },
      splitNumber: 6 // Limit to max 6 labels
    },
    yAxis: {
      type: 'value',
      name: 'Lives',
      minInterval: 1,
      axisLabel: { color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee' } }
    },
    backgroundColor: dark ? '#000' : '#fff',
    series: props.games.map((game, idx) => ({
      name: game.name,
      type: 'line',
      symbol: 'circle',
      symbolSize: 7,
      data: props.visible[idx] ? game.entries.map(e => [e.time, e.lives]) : [],
      lineStyle: { width: 2, color: props.colorMap[game.name] || getColor(idx) },
      itemStyle: { color: props.colorMap[game.name] || getColor(idx) },
      emphasis: { focus: 'series' },
      showSymbol: props.visible[idx],
    }))
  }
}

function renderChart() {
  if (!chartInstance) {
    chartInstance = echarts.init(chartRef.value, isDark.value ? 'dark' : null)
  }
  chartInstance.setOption(getOption())
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
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
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
