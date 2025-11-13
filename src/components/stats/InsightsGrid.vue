<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div 
      v-for="insight in insights" 
      :key="insight.type"
      class="bg-white/10 backdrop-blur-md rounded-xl p-6 ring-1 ring-white/20 hover:ring-white/40 transition-all"
    >
      <div class="text-4xl mb-3">{{ insight.icon }}</div>
      <h3 class="text-lg font-bold text-white mb-2">{{ insight.title }}</h3>
      <p class="text-white/80 text-sm">{{ insight.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  insights: {
    type: Array,
    required: true
  }
})
</script>
