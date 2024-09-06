<template>
  <LandingView v-if="!showChallengePage" @clickBtn="clickPlayBtn" />
  <div v-if="showChallengePage">{{ showChallengePage }}</div>
</template>

<script setup>
import LandingView from "@/views/LandingView.vue";

import { ref } from "vue";

// Reactive state
const showChallengePage = ref(false);

// Methods
const clickPlayBtn = async () => {
  showChallengePage.value = true;
};
</script>

<style scoped></style>
