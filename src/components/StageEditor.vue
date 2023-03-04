<template lang="pug">
v-card(title="Stage")
  v-card-text
    v-list
      v-list-item(
        v-for="e in stage.enemies"
        :key="e"
        :title="e.name"
        )
</template>

<script lang="ts" setup>
const stage = {
  enemies: [
    { name: "Enemy 1" },
    { name: "Enemy 2" },
    { name: "Enemy 3" },
    { name: "Enemy 4" },
  ],
};
</script>

<style scoped></style>
