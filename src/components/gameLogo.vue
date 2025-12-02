<script setup>
import vodVoteIcon from '../assets/ttv/vodVote.png'
import pixelPower from '../assets/ttv/pixelPower.png'
import squadRush from '../assets/ttv/squadRush.png'
import zoskyZappers from '../assets/ttv/zoskyZappers.png'
defineProps({ game: { type: String, default: 'VOD Vote' } })
</script>

<template>
    <img v-if="game == 'VOD Vote'" :src="vodVoteIcon" alt="VOD Vote" class="inline" />
    <img v-else-if="game == 'AI Art'" :src="pixelPower" alt="pixelPower" class="inline"  />
    <img v-else-if="game == 'Squad Rush'" :src="squadRush" alt="squadRush" class="inline" />
    <img v-else-if="game == 'zoskyZappers'" :src="zoskyZappers" alt="zoskyZappers" class="inline" />
    <span v-else-if="game == 'Vouchers'">💰 → 🎮</span>
    <span v-else>{{ game }}</span>
</template>

