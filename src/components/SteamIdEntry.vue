<template>
    <details :open="active" class="rounded shadow-sm h-full select-none">
        <summary 
            class="cursor-pointer hover:scale-105 flex justify-between items-center rounded-xl shadow shadow-md min-w-full"
            :class="active?'shadow-pink-500/50':'shadow-yellow-500/50 opacity-50'"
            :style="{ backgroundColor: color, borderColor: active ? color : '#444', color: textColor }">
            <img :src="coverImg" :alt="steamId" class="h-24 w-auto mr-2 rounded" />
            <span class="flex flex-grow leading-none max-h-24 overflow-hidden">{{ name }}</span>
            <span class="bubbleWrap">
                <span v-if="youtube?.length" class="bubble">
                    {{ youtube?.length }} <Youtube class="scale-150 mr-0.5" />
                </span>
                <span v-if="totalDuration" class="bubble">
                    {{ totalDuration }} <ClockEnd class="scale-150 mr-0.5" />
                </span>
                <span class="bubble">                    
                    <span v-if="avgDeathsPerMin" class="text-xs scale-75 origin-right">{{ `[~${avgDeathsPerMin}/hr]` }}</span>
                    {{ entries.at(-1).lives }} 
                    <SkullCrossbones class="scale-150 mr-0.5" />
                </span>                
            </span>
            </summary>
        <!-- <div class="p-4 bg-white bg-opacity-10 h-32 overflow-y-scroll">
            <div v-for="(entry, index) in entries.reverse()" :key="index" class="mb-2 p-2 bg-white bg-opacity-10 rounded shadow-sm">
                <div class="flex flex-row gap-2">
                    <div class="font-bold"><span>💀</span> {{ entry.lives }}</div>
                    <div><span class="font-medium">🗓️</span> {{ new Date(entry.time).toLocaleString() }}</div>
                </div>
            </div>
        </div> -->
    </details>
</template>

<script setup>
import { Twitch, Steam, GamepadVariantOutline, SkullCrossbones, Youtube, ClockEnd } from 'mdue'
const props = defineProps({
    steamId: { type: String, required: true },
    entryCount: { type: Number, required: true },
    entries: { type: Array, required: true },
    color: { type: String, required: true },
    active: { type: Boolean, required: false },
    name: {  type: String, required: false },
    youtube: { type: Array, required: true },
})
const avgDeathsPerMin = computed(() => {
    let lastDeath = props.entries.at(-1).lives || 0

    const startCountOffset = { 
        311690: 277, // enter the gungeon
        1030300: 350, // Hollow Knight
        2305840: 69, // catQuest III
    } 
    if (startCountOffset[props.steamId]) lastDeath-=startCountOffset[props.steamId] 

    const ttlSec = props?.youtube?.reduce((acc, vid) => acc + (vid.duration || 0), 0) || 0 
    if (lastDeath && ttlSec) {
        const hrs = ttlSec / 3600
        return Math.round(lastDeath/hrs)
    }
    return 0
})
const totalDuration = computed(()=>{ 
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
span.bubble { @apply 
    /* mr-2 px-2 py-1  */
    text-blue-100 text-sm font-medium
    min-w-max 
    flex flex-row items-center justify-end gap-1 
}
.bubbleWrap { @apply 
    flex flex-row flex-wrap 
    max-w-min content-end 
    items-center justify-end 
    mr-2 gap-0.5 
    bg-black bg-opacity-20 rounded-xl 
    px-2 py-1
}
</style>