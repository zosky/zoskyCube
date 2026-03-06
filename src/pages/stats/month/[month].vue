<route lang="yaml">
meta:
  title: Monthly Community Report
</route>

<script setup>
/**
 * Dynamic month route: /stats/month/:month
 * e.g. /stats/month/5 loads epoch month 5 (March 2026).
 *
 * Simply renders the same MonthlyReport page.
 * index.vue reads route.params.month on mount and watches
 * for changes, so both /stats/month and /stats/month/5 work.
 */
import MonthlyReport from './index.vue'
</script>

<template>
  <MonthlyReport />
</template>
