<template lang="pug">
v-chart.chart(:option="option")
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";

use([CanvasRenderer, BarChart, LineChart]);

const option = ref({
  xAxis: {
    type: "time",
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Element",
      type: "line",
      data: [0.8, 0, 0.4],
    },
    {
      name: "Damage",
      type: "bar",
      data: [1000, 500, 1200],
    },
  ],
});
</script>

<style scoped>
.chart {
  min-height: 200px;
  min-width: 400px;
}
</style>
