<script setup>

const theData = ref(null);
fetch("https://corsproxy.io/?https://wort.gg/api/stats/zoskyb/campaign")
    .then(response => response.json())
    .then(data => { theData.value = data });

const timeAgo = computed(() => {
  if (!theData.value?.player_details?.last_updated) return '';
  
  const lastUpdated = new Date(theData.value.player_details.last_updated);
  const now = new Date();
  const diffMs = now - lastUpdated;
  
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  }
});

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

const hasNonZeroValues = (obj) => {
  return Object.values(obj).some(value => {
    if (typeof value === 'object' && value !== null) {
      return hasNonZeroValues(value);
    }
    return value > 0;
  });
};

const getGameStats = computed(() => {
  if (!theData.value?.stats?.Campaign?.Campaign) return [];
  
  const campaign = theData.value.stats.Campaign.Campaign;
  const games = [];
  
  // Process each game (Halo1, Halo2, etc.)
  Object.keys(campaign).forEach(gameKey => {
    if (gameKey === 'All') return; // Skip the 'All' summary
    
    const gameData = campaign[gameKey];
    if (gameData.Stats && hasNonZeroValues(gameData.Stats)) {
      games.push({
        name: gameKey,
        stats: gameData.Stats,
        missions: gameData.MissionsCompleted || {},
        weapons: gameData.Weapons || {}
      });
    }
  });
  
  return games;
});
</script>

<template>
  <div class="p-5 max-w-6xl mx-auto font-sans">
    <div v-if="!theData" class="text-center py-12">
      <h1 class="text-3xl font-bold">Loading Halo MCC Stats...</h1>
    </div>
    
    <div v-else class="space-y-3">
      <!-- Header -->
      <div class="bg-gradient-to-br from-blue-800 to-blue-600 text-white pt-4 rounded-xl mt-5">
        <div class="flex flex-row align-top gap-1">
            <div class="text-4xl font-bold -mt-3">
                <HaloLogo class="h-20" />
            </div>
            <div class="">
                <h1 class="text-4xl font-bold">MCC Campaign Stats</h1>
                <p class="text-sm -mt-1 mb-3 opacity-50 px-0.5">Last updated: {{ timeAgo }}.</p>
            </div>
        </div>
        <div>
          <!-- <h2 class="text-3xl font-bold text-yellow-300 mb-0">{{ theData.gamertag }}</h2> -->
          <!-- <div class="flex gap-5 mt-4">
            <span class="bg-white/20 px-4 py-2 rounded-full font-bold">Tier {{ theData.xp.tier }}</span>
            <span class="bg-white/20 px-4 py-2 rounded-full font-bold">{{ theData.xp.total.toLocaleString() }} XP</span>
          </div> -->
        </div>
      </div>

      <!-- Overall Campaign Stats -->
      <div id="stats">
        <h3>📊 Overall Campaigns</h3>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <article>
            <div>{{ theData.stats.Campaign.Campaign.All.Stats.kills.toLocaleString() }}</div>
            <label>Total Kills</label>
          </article>
          <article>
            <div>{{ theData.stats.Campaign.Campaign.All.Stats.deaths.toLocaleString() }}</div>
            <label>Deaths</label>
          </article>
          <article>
            <div>{{ theData.stats.Campaign.Campaign.All.Stats.missions_completed }}</div>
            <label>Missions Completed</label>
          </article>
          <article>
            <div>{{ formatTime(theData.stats.Campaign.Campaign.All.Stats.time_played_MS) }}</div>
            <label>Time Played</label>
          </article>
          <article>
            <div>{{ (theData.stats.Campaign.Campaign.All.Stats.kills / theData.stats.Campaign.Campaign.All.Stats.deaths).toFixed(2) }}</div>
            <label>K/D Ratio</label>
          </article>
          <article>
            <div>{{ theData.stats.minutes_played }} min</div>
            <label>Total Minutes</label>
          </article>
        </div>
      </div>

      <!-- Individual Game Stats -->
      <div id="games">
        <h3>🎯 Game Progress</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div v-for="game in getGameStats" :key="game.name" class="border-2 border-gray-300 rounded-xl p-5 bg-gradient-to-br from-gray-50 to-gray-100 shadow-md shadow-blue-900 bg-white">
            <h4 class="text-xl font-semibold text-blue-800 text-left -mt-5 -mx-5 px-5 py-1 bg-black bg-opacity-50 mb-4 rounded-t-xl border-b border-gray-400">{{ game.name.replace('Halo', 'Halo ') }}</h4>
            
            <div class="stats grid grid-cols-4 gap-2 mb-3">
              <div>
                <div>{{ game.stats.kills.toLocaleString() }}</div>
                <span>Kills</span>
              </div>
              <div>
                <div>{{ game.stats.deaths }}</div>
                <span>Deaths</span>
              </div>
              <div>
                <div>{{ game.stats.missions_completed }}</div>
                <span>Missions</span>
              </div>
              <div>
                <div>{{ formatTime(game.stats.time_played_MS) }}</div>
                <span>Time</span>
              </div>
            </div>

            <!-- Mission Progress (if any completed) -->
            <div v-if="Object.values(game.missions).some(m => m > 0)" class="mt-4 pt-4 border-t border-gray-300">
              <h5 class="text-base font-semibold text-gray-700 mb-3">Completed Missions:</h5>
              <div class="flex flex-wrap gap-2">
                <span v-for="(count, missionKey) in game.missions" :key="missionKey" 
                      v-if="count != 0" class="bg-green-600 text-white px-3 py-1 rounded-full text-xs capitalize"
                      :class="count == 0?'bg-yellow-300':'bg-blue-800 order-first'">
                  {{ missionKey.replace(/^H\d+?_/, '').replace(/_/g, ' ') }}
                  <!-- {{  missionKey }} -->
                </span>
              </div>
            </div>

            <!-- Top Weapons (if weapon data exists) -->
            <div v-if="game.weapons && Object.values(game.weapons).some(w => w > 0)" class="mt-4 pt-4 border-t border-gray-300">
              <h5 class="text-base font-semibold text-gray-700 mb-3">Top Weapons:</h5>
              <div class="flex flex-col gap-1">
                <div v-for="[weapon, kills] in Object.entries(game.weapons).filter(([w, k]) => k > 0).sort((a, b) => b[1] - a[1]).slice(0, 3)" 
                     :key="weapon" class="flex justify-between items-center px-3 py-1 bg-white rounded text-sm">
                  <span class="capitalize">{{ weapon.replace(/_/g, ' ') }}</span>
                  <span class="font-bold text-red-600">{{ kills }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Leaderboard Rankings -->
      <!-- <div v-if="theData.ranks && theData.ranks.length > 0" class="bg-white rounded-xl p-6 shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-800 mb-5 pb-3 border-b-2 border-gray-200">🏆 Leaderboard Rankings</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="rank in theData.ranks" :key="rank.playlist_name" class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-400">
            <div class="text-2xl font-bold text-blue-800 min-w-12">#{{ rank.rank }}</div>
            <div class="text-gray-800 font-medium">{{ rank.playlist_name }}</div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="px-3 m-2 text-center text-xs opacity-75"> 
        <em>powered by 
            <a href="https://wort.gg">wort.gg</a> 
            & 
            <a href="https://corsproxy.io">corsproxy.io</a>
        </em>        
    </div>
  </div>
</template>

<style scoped>
h3 { @apply opacity-75 text-xl font-semibold text-gray-800 mb-1 border-gray-200 }
#stats label { @apply text-gray-600 opacity-75 text-xs min-w-max font-medium }
#stats article { @apply shadow-md shadow-blue-900 text-center bg-gray-50 p-5 rounded-lg border-2 border-gray-200 hover:-translate-y-1 transition-transform duration-200 hover:shadow-xl }
#stats article div { @apply text-3xl min-w-max font-bold text-blue-800 mb-1 }
#games .stats > div { @apply text-center p-1 bg-white rounded-lg }
#games .stats > div > div { @apply block text-xl font-bold text-blue-800 }
#games .stats > div > span { @apply text-sm text-gray-600 }
</style>