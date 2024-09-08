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
          @click="navigateTo('/challenge')"
        >
          Challenges
        </div>
        <div
          class="menu-text"
          :class="{ 'menu-text-active': isActiveRoute(['/leaderboard']) }"
          @click="navigateTo('/leaderboard')"
        >
          Leaderboard
        </div>
        <div
          class="menu-text"
          :class="{ 'menu-text-active': isActiveRoute(['/portfolio']) }"
          @click="navigateTo('/portfolio')"
        >
          Portfolio
        </div>
      </div>
      <div class="wallet-btn" v-if="!isConnected" @click="connectWallet">
        <div class="wallet-text">Connect Wallet</div>
      </div>
      <div
        class="wallet-connected-btn"
        v-if="isConnected"
        @click="connectWallet"
      >
        <img :src="walletInfo.icon" alt="wallet" />
        <div class="wallet-connected-text">
          {{
            `${address.substring(0, 6)}...${address.substring(
              address.length - 4
            )}`
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

import { useWeb3Modal, useWalletInfo, useWeb3ModalAccount } from "@/utils";

// Reactive state
const modal = useWeb3Modal();
const { walletInfo } = useWalletInfo();
const { address, chainId, isConnected } = useWeb3ModalAccount();

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

const connectWallet = () => {
  modal.open();
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
  height: 16px;
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

.wallet-connected-btn {
  display: flex;
  padding: 12px 20px 12px 20px;
  height: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #cacaca;

  cursor: pointer;
}

.wallet-connected-btn img {
  width: 24px;
  height: 24px;
}

.wallet-connected-text {
  color: #000;
  text-align: right;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
