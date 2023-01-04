<template lang="pug">
v-container
  v-row
    v-col
      | 陣容設定
      v-list
        v-list-item(title="角色1")
        v-list-item(title="角色2")
        v-list-item(title="角色3")
        v-list-item(title="角色4")
    v-col
      v-form
        v-select(label="敵人")
        v-select(label="環境")
  v-row
    v-col
      v-row
        v-col 輸出手法
          v-text-field
      v-row
        v-col
          | 時間軸
          v-chart
  v-row
    v-col
      v-card
        v-container(fluid)
          v-row
            v-col DPS:
          v-row
            v-col 時間推估:
    v-col
      | 元素、角色傷害占比圖
      v-chart
</template>

<script lang="ts" setup>
import VChart from "vue-echarts"

</script>
