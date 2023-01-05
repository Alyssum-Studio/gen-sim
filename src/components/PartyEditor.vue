<template lang="pug">
v-card(title="隊伍設定")
  v-card-text
    v-list
      v-list-item(v-for="c in props.party.characters" :key="c" :title="c.name")
</template>

<script lang="ts" setup>
import { Party } from "@/models/characters";

const props = defineProps({
  party: Party,
});
</script>

<style scoped></style>
