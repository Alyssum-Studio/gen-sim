<template lang="pug">
v-app
  v-app-bar(title="GenSim")
    v-btn(icon)
      v-icon mdi-earth
    v-btn(icon)
      v-icon mdi-github
  v-main
    router-view
</template>

<script setup lang="ts"></script>
