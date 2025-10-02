<template>
  <div ref="chartRef" class="w-full h-64 xl:h-96 z-10"></div>
</template>

<script setup>
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, MarkPointComponent, DataZoomComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkPointComponent,
  DataZoomComponent,
  CanvasRenderer
])

const props = defineProps({
  games: {
    type: Array,
    required: true
    // [{ name: string, id: number, player: number, entries: [{ time: number, lives: number }] }]
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

function getColor(gameId, player, idx) {
  // Use colorMap with player-specific key if available, otherwise fallback to ECharts default palette
  const key = `${gameId}-${player}`
  if (props.colorMap[key]) {
    return props.colorMap[key]
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
    tooltip: {
      trigger: 'item',
      backgroundColor: dark ? '#222' : '#fff',
      borderColor: dark ? '#444' : '#ccc',
      textStyle: { color: dark ? '#fff' : '#222' },
      formatter: params => {
        if (params.data[1] === null) return ''
        
        return [
          params.seriesName,
          new Date(params.data[0]).toLocaleString(),
          `${params.data[1]} lives`
        ].join('<br>')
      }
    },
    grid: { left: 40, right: 20, bottom: 80, top: 60 },
    xAxis: {
      type: 'time',
      axisLabel: { formatter: value => new Date(value).toLocaleString().replace(', ','\n'), color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee', type: 'dashed' }, show: true },
      splitNumber: 2
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      splitNumber: 3,
      axisLabel: { color: dark ? '#ccc' : '#222' },
      axisLine: { lineStyle: { color: dark ? '#888' : '#222' } },
      splitLine: { lineStyle: { color: dark ? '#444' : '#eee', type: 'dashed' } }
    },
    backgroundColor: dark ? '#0000' : '#fff',
    series: props.games.map((game, idx) => {
      let seriesData = []
      if (props.visible[idx]) {
        seriesData = game.entries.map(e => {
          const timeOffset = game.player > 1 ? (game.player - 1) * 1000 : 0
          return [e.time + timeOffset, e.lives]
        })
      }
      
      const gameHasMultiplePlayers = props.games.some(g => g.id === game.id && g.player !== game.player)
      
      const markPointData = []
      if (seriesData.length > 0) {
        const playersForThisGame = props.games.filter(g => g.id === game.id)
        const lowestPlayerNumber = Math.min(...playersForThisGame.map(g => g.player))
        
        if (game.player === lowestPlayerNumber) {
          markPointData.push({
            coord: seriesData[0],
            symbol: `image://https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/header.jpg`,
            symbolSize: [60, 28],
            symbolOffset: [0, -40],
            label: {
              show: false
            }
          })
          
          for (let i = 1; i < seriesData.length; i++) {
            const currentTime = seriesData[i][0]
            const prevTime = seriesData[i-1][0]
            const timeDiff = currentTime - prevTime
            
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
      }
      
      const color = getColor(game.id, game.player, idx)
      
      return {
        name: game.name,
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        data: seriesData,
        lineStyle: { width: 2, color: color },
        itemStyle: { color: color },
        emphasis: gameHasMultiplePlayers ? {} : { focus: 'series' },
        showSymbol: props.visible[idx],
        markPoint: {
          data: markPointData,
          silent: true
        }
      }
    }),
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: (() => {
          const allVisibleSeries = props.games.filter((game, idx) => props.visible[idx] && game.entries.length > 0)
          if (allVisibleSeries.length === 0) return 0
          
          let maxTime = 0
          allVisibleSeries.forEach(game => {
            game.entries.forEach(entry => {
              const timeOffset = game.player > 1 ? (game.player - 1) * 1000 : 0
              const adjustedTime = entry.time + timeOffset
              if (adjustedTime > maxTime) maxTime = adjustedTime
            })
          })
          
          let minTime = Infinity
          allVisibleSeries.forEach(game => {
            game.entries.forEach(entry => {
              const timeOffset = game.player > 1 ? (game.player - 1) * 1000 : 0
              const adjustedTime = entry.time + timeOffset
              if (adjustedTime < minTime) minTime = adjustedTime
            })
          })
          
          const seventyTwoHours = 72 * 60 * 60 * 1000
          const zoomStartTime = maxTime - seventyTwoHours
          const totalTimeRange = maxTime - minTime
          
          if (totalTimeRange <= 0) return 0
          return Math.max(0, ((zoomStartTime - minTime) / totalTimeRange) * 100)
        })(),
        end: 100,
        bottom: 10,
        height: 20,
        backgroundColor: dark ? '#2f2f2f' : '#f5f5f5',
        borderColor: dark ? '#444' : '#ccc',
        fillerColor: dark ? 'rgba(84, 112, 198, 0.2)' : 'rgba(84, 112, 198, 0.2)',
        handleStyle: {
          color: dark ? '#5470c6' : '#5470c6',
          borderColor: dark ? '#5470c6' : '#5470c6'
        },
        moveHandleStyle: {
          color: dark ? '#5470c6' : '#5470c6'
        },
        selectedDataBackground: {
          lineStyle: {
            color: dark ? '#5470c6' : '#5470c6'
          },
          areaStyle: {
            color: dark ? 'rgba(84, 112, 198, 0.3)' : 'rgba(84, 112, 198, 0.3)'
          }
        }
      },
      {
        type: 'inside',
        xAxisIndex: [0],
        start: (() => {
          const allVisibleSeries = props.games.filter((game, idx) => props.visible[idx] && game.entries.length > 0)
          if (allVisibleSeries.length === 0) return 0
          
          let maxTime = 0
          let minTime = Infinity
          allVisibleSeries.forEach(game => {
            game.entries.forEach(entry => {
              const timeOffset = game.player > 1 ? (game.player - 1) * 1000 : 0
              const adjustedTime = entry.time + timeOffset
              if (adjustedTime > maxTime) maxTime = adjustedTime
              if (adjustedTime < minTime) minTime = adjustedTime
            })
          })
          
          const seventyTwoHours = 72 * 60 * 60 * 1000
          const zoomStartTime = maxTime - seventyTwoHours
          const totalTimeRange = maxTime - minTime
          
          if (totalTimeRange <= 0) return 0
          return Math.max(0, ((zoomStartTime - minTime) / totalTimeRange) * 100)
        })(),
        end: 100
      }
    ]
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
