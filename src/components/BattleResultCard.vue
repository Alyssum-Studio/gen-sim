<template lang="pug">
v-card(title="Battle Result")
  v-container(fluid)
    v-row
      v-col
        DamageTimeline
    v-row
      v-col
        v-row
          v-col DPS:
          v-col
            span.text-h2 100
        v-row
          v-col End Time:
          v-col
            span.text-h2 0:10
        v-row
          v-col Max Damage:
          v-col
            span.text-h2 300
      v-col
        DamageStackedBarChart
</template>

<script>
import { defineComponent } from "vue";
import DamageTimeline from "@/components/DamageTimeline.vue";
import DamageStackedBarChart from "@/components/DamageStackedBarChart.vue";

export default defineComponent({
  components: { DamageStackedBarChart, DamageTimeline },
});
</script>

<style scoped></style>
