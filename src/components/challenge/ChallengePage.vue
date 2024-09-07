<template>
  <div v-if="!showModal" class="challenge">
    <div class="challenge-wrapper">
      <div class="challenge-title-text">Challenge</div>
      <div class="challenge-live-filter">
        <div
          class="challenge-live-filter-btn"
          :class="{ 'is-live-active': true }"
        >
          All
        </div>
        <div
          class="challenge-live-filter-btn"
          :class="{ 'is-live-active': false }"
        >
          Live
        </div>
        <div
          class="challenge-live-filter-btn"
          :class="{ 'is-live-active': false }"
        >
          End
        </div>
      </div>
      <div class="challenge-type-filter-wrapper">
        <div class="challenge-type-filter">
          <div
            class="challenge-type-filter-btn"
            :class="{ 'is-type-active': true }"
          >
            <div
              class="challenge-type-filter-btn-text"
              :class="{ 'is-type-text-active': true }"
            >
              All Type
            </div>
          </div>
          <div
            class="challenge-type-filter-btn"
            :class="{ 'is-type-active': false }"
          >
            <div
              class="challenge-type-filter-btn-text"
              :class="{ 'is-type-text-active': false }"
            >
              Secret
            </div>
          </div>
          <div
            class="challenge-type-filter-btn"
            :class="{ 'is-type-active': false }"
          >
            <div
              class="challenge-type-filter-btn-text"
              :class="{ 'is-type-text-active': false }"
            >
              Slang
            </div>
          </div>
          <div
            class="challenge-type-filter-btn"
            :class="{ 'is-type-active': false }"
          >
            <div
              class="challenge-type-filter-btn-text"
              :class="{ 'is-type-text-active': false }"
            >
              Missmatch
            </div>
          </div>
        </div>
        <div class="challenge-create-new-btn">+Create New Challange</div>
      </div>
      <div class="nfts">
        <!-- repeat -->
        <div v-for="(item, index) in 6" class="nft-wrapper">
          <div class="nft-content-wrapper">
            <div class="nft-content-top-wrapper">
              <img src="@/assets/nft/nft0.png" alt="nft" />
              <div class="nft-content-top-title-wrapper">
                <div class="live-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle cx="6" cy="6.02026" r="5.5" fill="#53926D" />
                  </svg>
                  <div class="live-text">Live</div>
                </div>
                <div class="live-title-wrapper">
                  <div class="live-title-text">MG12 Prompt</div>
                  <div class="type-wrapper">
                    <div class="type-text">Secret</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nft-description">
              The first modular settlement layer designed to unlock Bitcoin's
              liquidity across diverse blockchain ecosystems.
            </div>
            <div class="nft-date-wrapper">
              <div class="nft-date-text">Date</div>
              <div class="nft-date-content-wrapper">
                <div class="nft-date-content-text">08.30 5:00 AM(UST)</div>
                <div class="nft-date-content-text">~ 09.13 5:00 AM(UST)</div>
              </div>
            </div>
            <div class="nft-duration-wrapper">
              <div class="nft-duration-text">Duration</div>
              <div class="nft-duration-content-text">14 days</div>
            </div>
            <div class="nft-award-wrapper">
              <div class="nft-award-text">Award</div>
              <div class="nft-award-content-text">6,000 USDC</div>
            </div>
          </div>
          <div class="nft-btn" @click="openModal">
            <div class="nft-btn-text">Challenge</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ChallengeModal v-if="showModal" @closeModal="closeModal" />
</template>

<script setup>
import ChallengeModal from "./ChallengeModal.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

// Reactive state
const showModal = ref(false);

// Methods
const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.challenge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.challenge-wrapper {
  display: flex;
  /* 324*3+16*2 */
  width: 1004px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.challenge-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.challenge-live-filter {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.challenge-live-filter-btn {
  color: #747474;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  cursor: pointer;
}

.is-live-active {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;

  cursor: pointer;
}

.challenge-type-filter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.challenge-type-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.challenge-type-filter-btn {
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 1px solid #000;
  background: #fff;
}

.is-type-active {
  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.challenge-type-filter-btn-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.is-type-text-active {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.challenge-create-new-btn {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  cursor: pointer;
}

.nfts {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
}

.nft-wrapper {
  display: flex;
  /*  */
  width: 280px;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.nft-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}

.nft-content-top-wrapper {
  display: flex;
  align-items: center;
  gap: 18px;
  align-self: stretch;
}

.nft-content-top-wrapper img {
  width: 130px;
  height: 130px;

  border-radius: 10px;
  border: 2px solid #000;
}

.nft-content-top-title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
  flex: 1 0 0;
  align-self: stretch;
}

.live-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.live-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.live-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
}

.live-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.type-wrapper {
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 1px solid #000;
  background: #fff;
}

.type-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nft-description {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.nft-date-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.nft-date-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-date-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
}

.nft-date-content-text {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nft-duration-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.nft-duration-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-duration-content-text {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nft-award-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.nft-award-text {
  color: #4dc4cf;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-award-content-text {
  color: #4dc4cf;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-btn {
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #53926d;

  cursor: pointer;
}

.nft-btn-text {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
