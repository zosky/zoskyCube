import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useGameStore } from './stores/gameStore';
import arkDinoImages from './modules/arkDinoImages';
import { initializeGA, trackPageView } from './utils/analytics';
import './main.css';

// Use base path for GitHub Pages - must match vite.config.js base
const basePath = import.meta.env.MODE === 'production' ? '/zoskyCube/' : '/'
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

// Initialize GA4 AFTER router is registered
initializeGA();

// Track page views on route change
router.afterEach((to) => {
  trackPageView(to.path, to.meta.title || document.title)
});

app.mount('#app');