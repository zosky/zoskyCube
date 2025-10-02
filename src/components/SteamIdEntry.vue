<template>
    <details :open="active" class="rounded shadow-sm h-full select-none">
        <summary 
            class="cursor-pointer hover:scale-105 flex justify-between items-center rounded-xl shadow-md min-w-full"
            :class="active?'shadow-pink-500/50':'shadow-yellow-500/50 opacity-50'"
            :style="{ backgroundColor: color, borderColor: active ? color : '#444', color: textColor }">
            <img :src="coverImg" :alt="steamId" class="h-24 w-auto mr-2 rounded" />
            <div class="flex flex-col flex-grow leading-none max-h-24 overflow-hidden">
                <span class="font-medium">{{ name }}</span>
                <!-- Remove the individual player display from here since it's moving to the bubble -->
            </div>
            <span class="bubbleWrap">
                <span v-if="youtube?.length" class="bubble">
                    {{ youtube?.length }} <Youtube class="scale-150 mr-0.5" />
                </span>
                <span v-if="totalDuration" class="bubble">
                    {{ totalDuration }} <ClockEnd class="scale-150 mr-0.5" />
                </span>
                <span class="bubble bubble-deaths">                    
                    <div class="flex flex-col items-end">
                        <div class="flex items-center gap-1">
                            <span v-if="avgDeathsPerMin" class="text-xs scale-75 origin-right">{{ `[~${avgDeathsPerMin}/hr]` }}</span>
                            {{ totalDeaths }} 
                            <SkullCrossbones class="scale-150 mr-0.5" />
                        </div>
                        <!-- Show player breakdown only if there are multiple players -->
                        <div v-if="players.length > 1" class="text-sm opacity-80 flex gap-0">
                            <span v-for="player in players" :key="player.player" class="flex flex-row items-center">
                                <Human v-if="player.player==1" />
                                <HumanChild v-else-if="player.player==2" />
                                <span v-else>P{{ player.player }}=</span>{{ player.lastDeath }}
                            </span>
                        </div>
                    </div>
                </span>                
            </span>
            </summary>
        <!-- <div class="p-4 bg-white bg-opacity-10 h-32 overflow-y-scroll">
            <div v-for="player in players" :key="player.player" class="mb-4">
                <h4 class="font-bold mb-2">{{ player.playerName }}</h4>
                <div v-for="(entry, index) in player.entries.slice(-5)" :key="index" class="mb-2 p-2 bg-white bg-opacity-10 rounded shadow-sm">
                    <div class="flex flex-row gap-2">
                        <div class="font-bold"><span>💀</span> {{ entry.lives }}</div>
                        <div><span class="font-medium">🗓️</span> {{ new Date(entry.time * 1000).toLocaleString() }}</div>
                    </div>
                </div>
            </div>
        </div> -->
    </details>
</template>

<script setup>
import { Twitch, Steam, GamepadVariantOutline, SkullCrossbones, Youtube, ClockEnd, Human, Baby, HumanChild } from 'mdue'
const props = defineProps({
    steamId: { type: String, required: true },
    players: { type: Array, required: true }, // [{ player: number, playerName: string, count: number, entries: Array, lastDeath: number }]
    entryCount: { type: Number, required: true },
    color: { type: String, required: true },
    active: { type: Boolean, required: false },
    name: { type: String, required: false },
    youtube: { type: Array, required: true },
})

const totalDeaths = computed(() => {
    return props.players.reduce((sum, player) => sum + player.lastDeath, 0)
})

const avgDeathsPerMin = computed(() => {
    if (!props.players.length) return 0
    
    let totalDeathsCalc = totalDeaths.value

    const startCountOffset = { 
        311690: 277, // enter the gungeon
        1030300: 350, // Hollow Knight
        2305840: 69, // catQuest III
    } 
    
    // Apply offset (total offset for all players)
    if (startCountOffset[props.steamId]) {
        totalDeathsCalc -= startCountOffset[props.steamId] * props.players.length
    }

    // For YouTube duration, we use the total for the game since VODs contain all players
    const ttlSec = props?.youtube?.reduce((acc, vid) => acc + (vid.duration || 0), 0) || 0 
    
    if (totalDeathsCalc && ttlSec) {
        const hrs = ttlSec / 3600
        return Math.round(totalDeathsCalc / hrs)
    }
    return 0
})

const totalDuration = computed(() => { 
    const sec = props?.youtube?.reduce((acc, vid) => acc + (vid.duration || 0), 0) || 0 
    let d = 0
    let h = Math.floor(sec / 3600) // hrs
    if (h >= 24) { 
        d = Math.floor(h / 24) // days
        h = Math.floor((sec-(d*24*3600))/ 3600) 
    }    
    let m = Math.floor((sec % 3600) / 60) // mins
    let s = sec % 60 // secs
    let output = []
    if (d) output.push(d)
    if (d||h) output.push(h)
    if (d||h||m) output.push(m)
    if (d||h||m||s) output.push(s)
    return output.join(":").replace(/:(\d)$/,":0$1").replace(/:(\d):/g,":0$1:")
})

// Calculate luminance to determine if text should be light or dark
const textColor = computed(() => {
    // Convert hex color to RGB
    const hex = props.color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255
    
    // Calculate relative luminance using sRGB formula
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    
    // Return white text for dark backgrounds, black text for light backgrounds
    return luminance > 0.5 ? '#000000' : '#ffffff'
})

const coverImg=`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${props.steamId}/header.jpg`
</script>

<style scoped>
.bubble {
    color: rgb(219 234 254);
    font-size: 0.875rem;
    font-weight: 500;
    min-width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 0.25rem;
}

.bubble-deaths {
    flex-direction: column;
    align-items: end;
}

.bubbleWrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: min-content;
    align-content: end;
    align-items: center;
    justify-content: end;
    margin-right: 0.5rem;
    gap: 0.125rem;
    background-color: rgb(0 0 0 / 0.2);
    border-radius: 0.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
</style>