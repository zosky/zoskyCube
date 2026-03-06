import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useGameStore } from './stores/gameStore';
import arkDinoImages from './modules/arkDinoImages';
import { initializeGA, trackPageView } from './utils/analytics';
import './main.css';

const basePath = '/'
const router = createRouter({history: createWebHistory(basePath)})
const app = createApp(App);

// Create a single instance of the game store and provide it globally
const gameStore = useGameStore();
app.provide('gameStore', gameStore);

// Add arkDinoImages module
app.use(arkDinoImages);

// Initial data fetch
gameStore.fetchData(true);

app.use(router);

// Handle stale chunk errors after redeployment
// When GitHub Pages deploys new assets with different hashes,
// cached index.js may reference old chunk filenames that 404.
// Detect this and force a full page reload to get fresh assets.
router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    console.warn('🔄 Stale chunk detected, reloading page...', error.message)
    window.location.href = to.fullPath
  }
})

// Initialize GA4 AFTER router is registered
initializeGA();

// Track page views on route change
router.afterEach((to) => {
  trackPageView(to.path, to.meta.title || document.title)
});

app.mount('#app');