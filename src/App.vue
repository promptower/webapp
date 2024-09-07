<template>
  <TopBar v-if="route.path != '/'" />
  <router-view />
</template>

<script setup>
import TopBar from "@/components/common/TopBar.vue";

import { useRoute, useRouter } from "vue-router";

// Reactive state
const route = useRoute();
</script>

<style scoped></style>
