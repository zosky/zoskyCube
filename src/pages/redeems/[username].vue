<route lang="yaml">
meta:
  title: Redeems
</route>

<script setup>
import { useRedeemsData } from '../../composables/useRedeemsData'
import RedeemsIndex from './index.vue'

const route = useRoute()
const { selectedUser, loadData } = useRedeemsData()

// Set user filter from URL param before index component mounts
onBeforeMount(async () => {
  const username = route.params.username?.toLowerCase()
  if (username) {
    selectedUser.value = username
  }
})
</script>

<template>
  <RedeemsIndex />
</template>
