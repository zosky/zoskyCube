<script setup>
defineProps({
  day: {type: [String, Number], default:'7' },
  events: {type:Array, default: () => [] },
  playerColors: {type:Object, default: () => ({})}
})
</script>

<template>
  <div 
    class="relative overflow-hidden border-b-4 border-gray-500/50 mb-1 even:bg-green-900/20 odd:bg-blue-900/20">
    <!-- Paper texture effect -->
    <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3C/svg%3E');"></div>
    
    <!-- Day Header -->
    <div class="hidden md:flex items-center gap-3 mt-1 w-full justify-between px-4 opacity-75 ">
      <div class="">
        <span class="text-2xl font-bold text-amber-900 dark:text-amber-200">Day {{ day }}</span>
      </div>
      <div class="text-sm text-amber-700 dark:text-amber-400">
        {{ events.length }} event{{ events.length !== 1 ? 's' : '' }}
      </div>
    </div>

    <!-- Events as bullet points -->
    <ul class="space-y-2 relative z-10 pb-1.5">
      <ArkEventItem 
        v-for="(event, i) in events" 
        :key="i"
        :event="event"
        :player-colors="playerColors"
        class="ml-1 border-b" />
    </ul>

  </div>
</template>
