<script setup>
import { Twitch, Youtube, Steam, GamepadVariantOutline, SkullCrossbones } from 'mdue'
</script>

<template>
    <nav class="custom-cyan-shadow">
        <a href="/">
            <img src="@/assets/logo.png" alt="zoskyCube Logo" />
        </a>
        <a href="https://twitch.tv/zoskyCube" :title="'ttv:zoskyCube'">
            <ttv-status />
        </a>
        <header-bar-yt href="./videos" />
        <!-- <a href="https://youtube.com/@zoskyCube" :title="'yt:zoskyCube'">
            <Youtube />
            <p>{{ uniqueGames.length }} games • {{ totalVideosCount }} total videos</p>
        </a> -->
        <Steam />
        <SkullCrossbones             
            :class="$route.path=='./'?'text-yellow-400':''" 
            class="cursor-pointer"
            @click="$router.push('/')" />
        <GamepadVariantOutline />
    </nav>
</template>

<style scoped>
nav { 
    @apply text-2xl font-bold flex items-center gap-2 -mb-7 bg-blue-950 px-3 py-1; 
    filter: drop-shadow(0 10px 15px rgba(6, 182, 212, 0.5));
}
img { @apply h-20 -mt-20 -mb-20 }
a { @apply flex flex-row items-center hover:scale-105 transition-transform duration-200 }
</style>