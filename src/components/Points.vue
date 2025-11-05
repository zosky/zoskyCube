<template>
  <span v-if="n !== null && n !== undefined" class="points-container">
    <span class="points-number">{{ formattedNumber }}</span>
    <img 
      :src="currencyIcon" 
      :alt="currencyName"
      class="points-icon"
      :style="{ width: size, height: size }"
    />
  </span>
  <img 
    v-else
    :src="currencyIcon" 
    :alt="currencyName"
    class="points-icon"
  />

</template>

<script setup>
import { computed } from 'vue'
import zBlockIcon from '../assets/ttv/zBlock.png'
import zCubeIcon from '../assets/ttv/zCube.png'

const props = defineProps({
  currency: {
    type: String,
    required: true,
    validator: (value) => {
      const normalized = value.toLowerCase()
      return normalized === 'zb' || normalized === 'zc'
    }
  },
  n: {
    type: [Number, String],
    default: null
  },
  size: {
    type: String,
    default: '1.5em'
  }
})

const currencyIcon = computed(() => {
  const normalized = props.currency.toLowerCase()
  return normalized === 'zb' ? zBlockIcon : zCubeIcon
})

const currencyName = computed(() => {
  const normalized = props.currency.toLowerCase()
  return normalized === 'zb' ? 'zBlock' : 'zCube'
})

const formattedNumber = computed(() => {
  if (props.n === null || props.n === undefined) return ''
  const num = typeof props.n === 'string' ? parseFloat(props.n) : props.n
  return num.toLocaleString()
})
</script>

<style scoped>
.points-container {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  vertical-align: middle;
}

.points-number {
  font-weight: 600;
  line-height: 1;
}

.points-icon {
  display: inline-block;
  vertical-align: middle;
  object-fit: contain;
}
</style>
