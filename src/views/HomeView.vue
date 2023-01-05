<template lang="pug">
v-container
  v-row
    v-col
      PartyEditor(v-model:party="party")
    v-col
      StageEditor
  v-row
    v-col
      StageResultCard
</template>

<script lang="ts" setup>
import PartyEditor from "@/components/PartyEditor.vue";
import StageEditor from "@/components/StageEditor.vue";
import StageResultCard from "@/components/StageResultCard.vue";
import { Bennett, Party } from "@/models/characters";
import { Amber } from "@/models/characters/amber";

const party = new Party([new Amber(), new Bennett()]);
</script>
