<script setup>
import { useGameStore } from '../stores/gameStore'
const { steamNames, fetchData } = useGameStore()
fetchData()

// Dynamically import all SVG files from deathFrames folder
const svgModules = import.meta.glob('/public/deathFrames/*.svg', { as: 'url' })

const files = computed(() => {
  return Object.keys(svgModules)
    .map(path => {
      // Extract filename without extension from path like '/public/deathFrames/1030300.svg'
      const filename = path.split('/').pop().replace('.svg', '')
      return filename
    })
    .filter(filename => filename !== 'generic' && filename !== 'current')
    .sort()
})
</script>

<template>
    <section class="grid grid-cols-12 mt-10 w-full gap-2 px-5">
        <article v-for="id of files" :key="id">
            <img :src="`/deathFrames/${id}.svg`" :alt="img" class="h-32 w-auto ring-1 rounded-t-xl ring-blue-900/50"/>
            <div class="w-full text-center text-xs bg-blue-900/50">{{ steamNames?.[id] }}</div>
            <div class="rounded-b-xl font-bold w-full text-center text-xs bg-blue-900/50">{{ id }}</div>
        </article>
    </section>
</template>