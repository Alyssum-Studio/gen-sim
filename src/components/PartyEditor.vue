<template lang="pug">
v-card(title="Party")
  v-card-text
    v-list
      v-list-item(
        v-for="c in party.characters"
        :key="c"
        :title="c.name"
      )
</template>

<script lang="ts" setup>
const party = {
  characters: [
    { name: "Char 1" },
    { name: "Char 2" },
    { name: "Char 3" },
    { name: "Char 4" },
  ],
};
</script>

<style scoped></style>
