<template>
  <div class="topbar">
    <div class="topbar-wrapper">
      <div class="logo-wrapper" @click="navigateTo('/')">
        <img src="@/assets/logo.svg" alt="Logo" />
        <div class="logo-text">CTP</div>
      </div>
      <div class="menu-wrapper">
        <div
          class="menu-text"
          :class="{ 'menu-text-active': isActiveRoute(['/challenge']) }"
        >
          Challenge
        </div>
        <div
          class="menu-text"
          :class="{ 'menu-text-active': isActiveRoute(['/leaderboard']) }"
        >
          Leaderboard
        </div>
        <div
          class="menu-text"
          :class="{ 'menu-text-active': isActiveRoute(['/portfolio']) }"
        >
          Portfolio
        </div>
      </div>
      <div class="wallet-btn">
        <div class="wallet-text">Connect Wallet</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

// Methods
const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
  window.scrollTo(0, 0);
};

const route = useRoute();
const isActiveRoute = (routes) => {
  return routes.includes(route.path);
};
</script>

<style scoped>
.topbar {
  display: flex;
  padding: 30px 168px 26px 168px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.topbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
}

.logo-text {
  color: #000;
  font-family: Archivo;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu-text {
  color: #000;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
}

.menu-text-active {
  text-decoration-line: underline;
}

.wallet-btn {
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #4dc4cf;

  cursor: pointer;
}

.wallet-text {
  color: #000;
  text-align: right;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
