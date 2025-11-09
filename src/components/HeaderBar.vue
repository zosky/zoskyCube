<script setup>
import { Twitch, Youtube, Steam, GamepadVariantOutline, SkullCrossbones, Store, PlusBox, TrophyOutline, Account, HelpCircleOutline } from 'mdue'
</script>

<template>
    <nav class="custom-cyan-shadow">
        <a href="./">
            <img src="@/assets/logo.png" alt="zoskyCube Logo" />
        </a>
        <a href="https://twitch.tv/zoskyCube" :title="'ttv:zoskyCube'">
            <ttv-status />
        </a>
        <header-bar-yt />
        <Steam
            :class="{ 'active' : $route.path=='/collection' }" 
            class="cursor-pointer"
            @click="$router.push('./collection')"
            title="Game Collection" />
        <SkullCrossbones             
            :class="{ 'active' : $route.path=='/' }" 
            class="cursor-pointer"
            @click="$router.push('/')" />
        <PlusBox
            :class="$route.path=='/counter' ? 'active' : 'hidden' "
            class="cursor-pointer"
            @click="$router.push('/counter')"
            title="Add Death" />
        <TrophyOutline
            :class="{ 'active' : $route.path=='/winning' }" 
            class="cursor-pointer"
            @click="$router.push('/winning')"
            title="Completed Games" />
        <HelpCircleOutline
            :class="{ 'active' : $route.path.includes('/help/') }" 
            class="cursor-pointer"
            @click="$router.push('/help/')"
            title="Help Center" />
        <Account
            v-if="$route.path=='/auth'"
            :class="{ 'active' : $route.path=='/auth' }" 
            class="cursor-pointer"
            @click="$router.push('/auth')"
            title="Connect Gaming Accounts" />
        <HaloLogo
            :class="{ 'animate-pulse' : $route.path=='/halo' }" 
            class="cursor-pointer h-10 w-auto -mx-1"
            title="Halo campaign Stats"
            @click="$router.push('/halo')" />
        <ArkLogo 
            :class="{ 'animate-pulse' : $route.path=='/halo' }" 
            class="cursor-pointer w-10 h-auto -mx-2"
            title="arkTribe timeline"
            @click="$router.push('/ark')" />
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
.active { @apply text-yellow-400 scale-110 }
</style>