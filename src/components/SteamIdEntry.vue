<template>
    <details :open="active" class="rounded shadow-sm h-full select-none">
        <summary 
            class="cursor-pointer hover:scale-105 flex justify-between items-center rounded-xl shadow shadow-md min-w-full"
            :class="active?'shadow-pink-500/50':'shadow-yellow-500/50 opacity-50'"
            :style="{ backgroundColor: color, borderColor: active ? color : '#444' }">
            <img :src="coverImg" :alt="steamId" class="h-24 w-auto mr-2 rounded" />
            <span class="text-black flex flex-grow leading-none max-h-24 overflow-hidden">{{ name }}</span>
            <span class="bg-black bg-opacity-20 text-blue-100 px-2 py-1 rounded-full text-sm mr-2 min-w-max flex flex-row items-center gap-1 font-bold">
                  {{ entries.at(-1).lives }} <SkullCrossbones class="scale-150 mr-0.5" />
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
import { Twitch, Steam, GamepadVariantOutline, SkullCrossbones } from 'mdue'

const props = defineProps({
    steamId: {
        type: String,
        required: true
    },
    entryCount: {
        type: Number,
        required: true
    },
    entries: {
        type: Array,
        required: true
    },
    color: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: false
    },
    name: { 
        type: String,
        required: false
    }
})
const coverImg=`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${props.steamId}/header.jpg`
</script>
