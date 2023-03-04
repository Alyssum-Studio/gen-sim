<template lang="pug">
v-container
  v-row
    v-col
      PartyEditor
    v-col
      StageEditor
  v-row
    v-col
      BattleEditor
  v-row
    v-col
      BattleResultCard
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import PartyEditor from "@/components/PartyEditor.vue";
import StageEditor from "@/components/StageEditor.vue";
import BattleEditor from "@/components/BattleEditor.vue";
import BattleResultCard from "@/components/BattleResultCard.vue";

defineComponent({
  components: { BattleResultCard, BattleEditor, StageEditor, PartyEditor },
});
</script>
