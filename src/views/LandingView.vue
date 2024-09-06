<template>
  <LandingPage @clickBtn="clickBtn" />
</template>

<script setup>
import LandingPage from "../components/landing/LandingPage.vue";

// Define emits
const emit = defineEmits(["clickBtn"]);

// Methods
const clickBtn = async () => {
  emit("clickBtn");
};
</script>

<style></style>
