<template lang="pug">
v-card
  v-container(fluid)
    v-row
      v-col
        DamageTimeline
    v-row
      v-col
        v-row
          v-col DPS:
        v-row
          v-col 時間推估:
      v-col
        DamageStackedBarChart
</template>

<script lang="ts" setup>
import DamageTimeline from "@/components/DamageTimeline.vue";
import DamageStackedBarChart from "@/components/DamageStackedBarChart.vue";
</script>

<style scoped></style>
