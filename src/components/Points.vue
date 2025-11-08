<template>
  <span v-if="n !== null && n !== undefined" class="points-container">
    <span class="points-number">
      <template v-if="isCAD">
        {{ cadDollars }}<sup v-if="cadCents !== '00'" class="cents-superscript">{{ cadCents }}</sup>
      </template>
      <template v-else>
        {{ formattedNumber }}
      </template>
    </span>
    <span v-if="isCAD" class="cad-icon">🍁</span>
    <img 
      v-else
      :src="currencyIcon" 
      :alt="currencyName"
      class="points-icon"
      :style="{ width: size, height: size }"
    />
  </span>
  <span v-else class="icon-only">
    <span v-if="isCAD" class="cad-icon">🍁</span>
    <img 
      v-else
      :src="currencyIcon" 
      :alt="currencyName"
      class="points-icon"
    />
  </span>
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
      return normalized === 'zb' || normalized === 'zc' || normalized === 'cad'
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

const isCAD = computed(() => {
  return props.currency.toLowerCase() === 'cad'
})

const cadDollars = computed(() => {
  if (!isCAD.value || props.n === null || props.n === undefined) return ''
  const num = typeof props.n === 'string' ? parseFloat(props.n) : props.n
  const dollars = Math.floor(num / 100)
  return `$${dollars.toLocaleString()}`
})

const cadCents = computed(() => {
  if (!isCAD.value || props.n === null || props.n === undefined) return '00'
  const num = typeof props.n === 'string' ? parseFloat(props.n) : props.n
  const cents = num % 100
  return cents.toString().padStart(2, '0')
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

.icon-only {
  display: inline-flex;
  align-items: center;
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

.cad-icon {
  font-size: 1.2em;
  line-height: 1;
}

.cents-superscript {
  text-decoration: underline;
  font-size: 0.75em;
  font-weight: 500;
}
</style>
