<template lang="pug">
v-chart.chart(:option="option")
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import { ref } from "vue";

const option = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Char 4", "Char 3", "Char 2", "Char 1"],
  },
  series: [
    {
      name: "Physical",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [50, 50, 0, 100],
    },
    {
      name: "Pyro",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [0, 100, 200, 300],
    },
    {
      name: "Dendro",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [200, 0, 0, 0],
    },
  ],
});

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);
</script>

<style scoped>
.chart {
  min-height: 400px;
  min-width: 400px;
}
</style>
