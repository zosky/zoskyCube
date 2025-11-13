<script setup>
import vodVoteIcon from '../assets/ttv/vodVote.png'
import pixelPower from '../assets/ttv/pixelPower.png'
import squadRush from '../assets/ttv/squadRush.png'
defineProps({ game: { type: String, default: 'VOD Vote' } })
</script>

<template>
    <img v-if="game == 'VOD Vote'" :src="vodVoteIcon" alt="VOD Vote" class="inline h-10" />
    <img v-else-if="game == 'AI Art'" :src="pixelPower" alt="pixelPower" class="inline h-16"  />
    <img v-else-if="game == 'Squad Rush'" :src="squadRush" alt="squadRush" class="inline h-12" />
    <span v-else>{{ game }}</span>
</template>

