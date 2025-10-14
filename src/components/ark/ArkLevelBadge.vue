<script setup>
defineProps({
  level: Number,
  isHigher: Boolean,
  isLower: Boolean
})
</script>

<template>
  <div class="relative inline-block">
    <div 
      :class="[
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-semibold border relative',
        isHigher 
          ? 'bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-300 border-green-500'
          : isLower
            ? 'bg-red-500/20 dark:bg-red-500/30 text-red-700 dark:text-red-300 border-red-500'
            : 'bg-white/80 dark:bg-white/20 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600'
      ]">
      <span class="mx-1">{{ level }}</span>
      <span class="absolute -top-2 -right-2 text-base">🛡️</span>
    </div>
  </div>
</template>
