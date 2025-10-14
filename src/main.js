import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useGameStore } from './stores/gameStore';
import arkDinoImages from './modules/arkDinoImages';
import './main.css';

const router = createRouter({history: createWebHistory()})
const app = createApp(App);

// Create a single instance of the game store and provide it globally
const gameStore = useGameStore();
app.provide('gameStore', gameStore);

// Add arkDinoImages module
app.use(arkDinoImages);

// Initial data fetch
gameStore.fetchData(true);

app.use(router);
app.mount('#app');