<template>
  <div class="bg-gray-800 p-4 rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-white">VODs Calendar</h2>
    <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div class="grid grid-cols-7 gap-2 items-start">
      <div v-for="day in visibleCalendarDays" :key="day.date" :class="[
        'relative rounded-md p-1 overflow-hidden  ',
        day.isWeekend ? 'bg-blue-400/10 shadow-blue-400 shadow-md' : 'bg-gray-900 shadow-blue-800 shadow-sm',
        day.isFirstOfMonth ? 'month-start' : '',
        'h-32'
      ]">
        <div v-if="day.isFirstOfMonth" class="month-label absolute text-xs font-bold uppercase text-purple-400">
          {{ day.monthName }}
        </div>
        <div class="absolute top-1 left-1 text-xs font-bold" :class="day.isToday ? 'text-blue-400' : 'text-gray-500'">
          {{ day.dayOfMonth }}
          <label v-if="day.games.length" class="ml-1 bg-red-600 text-white rounded-full px-2 text-xs font-normal">
            {{ day.games.length }}v
          </label>
        </div>
        <div v-if="day.games.length" 
             class="games-container mt-4 h-full overflow-y-auto"
             :class="{ 'grid grid-cols-2 gap-1': day.games.length >= 4 }">
          <div v-for="game in day.games" :key="game.id" 
               :class="day.games.length < 4 ? 'mb-1' : ''"
               class="aspect-[460/215] w-full">
            <img :src="getSteamThumbnailUrl(game.game)" :alt="game.game" class="w-full h-full object-cover rounded-sm" @error="handleImageError(game.id, $event)">
          </div>
        </div>
      </div>
    </div>
    <div v-if="hiddenDaysCount > 0" class="text-center mt-4">
      <button @click="showAll = !showAll" class="text-blue-400 hover:text-blue-300">
        Show {{ hiddenDaysCount }} more days
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';

const gameStore = inject('gameStore');
const { youtubeVods, steamNames } = gameStore;

const showAll = ref(false);

const vodsByDate = computed(() => {
  return youtubeVods.value.reduce((acc, vod) => {
    const date = new Date(vod.date).toISOString().split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(vod);
    return acc;
  }, {});
});

const earliestDate = computed(() => {
  if (youtubeVods.value.length === 0) return new Date();
  return new Date(Math.min(...youtubeVods.value.map(vod => new Date(vod.date))));
});

const calendarDays = computed(() => {
  if (youtubeVods.value.length === 0) return [];

  const days = [];
  const startDate = new Date(earliestDate.value);
  startDate.setDate(1); // Start from the first of the month
  const endDate = new Date(); // Today

  let currentDate = new Date(endDate);
  
  // Adjust to end the calendar on a Sunday
  const dayOfWeek = currentDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  if (dayOfWeek !== 0) { // if not Sunday
    currentDate.setDate(currentDate.getDate() + (7 - dayOfWeek));
  }

  const finalStartDate = new Date(startDate);
  // Adjust final start date to the beginning of its week (Monday)
  const finalStartDayOfWeek = finalStartDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const startOffset = (finalStartDayOfWeek === 0) ? 6 : finalStartDayOfWeek - 1;
  finalStartDate.setDate(finalStartDate.getDate() - startOffset);

  let weekOfDays = [];
  while (currentDate >= finalStartDate) {
    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const dayOfWeek = currentDate.getDay();
      weekOfDays.push({
        date: dateStr,
        dayOfMonth: currentDate.getDate(),
        isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
        isFirstOfMonth: currentDate.getDate() === 1,
        monthName: currentDate.toLocaleString('default', { month: 'short' }),
        isToday: dateStr === new Date().toISOString().split('T')[0],
        games: vodsByDate.value[dateStr] || [],
      });
      currentDate.setDate(currentDate.getDate() - 1);
    }
    days.push(...weekOfDays.reverse());
    weekOfDays = [];
  }

  return days;
});

const visibleCalendarDays = computed(() => {
  if (showAll.value) {
    return calendarDays.value;
  }
  return calendarDays.value.slice(0, 21);
});

const hiddenDaysCount = computed(() => {
  return Math.max(0, calendarDays.value.length - 21);
});

function getSteamThumbnailUrl(gameName) {
  const steamId = Object.entries(steamNames.value).find(([id, name]) => name === gameName)?.[0];
  if (steamId) {
    return `https://cdn.akamai.steamstatic.com/steam/apps/${steamId}/header.jpg`;
  }
  const vod = youtubeVods.value.find(v => v.game === gameName);
  if (vod) {
    return `https://img.youtube.com/vi/${vod.id}/mqdefault.jpg`;
  }
  return '';
}

function handleImageError(vodId, event) {
  event.target.src = `https://img.youtube.com/vi/${vodId}/mqdefault.jpg`;
}
</script>

<style scoped>
.month-start {
  overflow: visible;
}
.month-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  left: -1.2rem;
  top: 0;
  height: 100%;
  white-space: nowrap;
  text-align: center;
  @apply bg-blue-900/50 translate-x-full
}

.games-container::-webkit-scrollbar {
  display: none;
}

.games-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
