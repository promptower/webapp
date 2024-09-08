<template>
  <TopBar v-if="route.path != '/'" />
  <router-view />
  <Footer v-if="route.path != '/'" />
</template>

<script setup>
import TopBar from "@/components/common/TopBar.vue";
import Footer from "@/components/common/Footer.vue";

import { useRoute, useRouter } from "vue-router";

// Reactive state
const route = useRoute();
</script>

<style scoped></style>
