<template>
  <TopBar v-if="route.path != '/'" />
  <div class="router">
    <router-view />
  </div>
  <Footer v-if="route.path != '/'" />
</template>

<script setup>
import TopBar from "@/components/common/TopBar.vue";
import Footer from "@/components/common/Footer.vue";

import { useRoute, useRouter } from "vue-router";

// Reactive state
const route = useRoute();
</script>

<style>
body {
  background: url("@/assets/background.png");
  background-size: cover;
  margin: 0px;
}

.router {
  margin-top: 40px;
  min-height: calc(100vh - 361px);
}
</style>
