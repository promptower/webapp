<template>
  <div v-if="!showModal && !showCreateModal" class="challenge">
    <div class="challenge-wrapper">
      <div class="challenge-title-text">Challenges</div>
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
        <div class="challenge-create-new-btn" @click="openCreateModal">
          + Create A New Challange
        </div>
      </div>
      <div class="nfts">
        <!-- repeat -->
        <div
          v-for="(item, index) in nftData"
          :key="item.id"
          class="nft-wrapper"
        >
          <div class="nft-content-wrapper">
            <div class="nft-content-top-wrapper">
              <img
                :src="item.imageUri ? item.imageUri : '@/assets/nft/0.png'"
                alt="nft"
              />
              <div class="nft-content-top-title-wrapper">
                <div class="live-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6.02026"
                      r="5.5"
                      :fill="item.status === 'Live' ? '#53926D' : '#CC0000'"
                    />
                  </svg>
                  <div class="live-text">
                    {{ item.status === "Live" ? "Live" : "End" }}
                  </div>
                </div>
                <div class="live-title-wrapper">
                  <div class="live-title-text">{{ item.name }}</div>
                  <div class="type-wrapper">
                    <div class="type-text">{{ item.gameType }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nft-description">{{ item.description }}</div>
            <div class="nft-date-wrapper">
              <div class="nft-date-text">Date</div>
              <div class="nft-date-content-wrapper">
                <div class="nft-date-content-text">
                  {{ formatDate(item.startDate) }}
                </div>
                <div class="nft-date-content-text">
                  ~ {{ formatDate(item.endDate) }}
                </div>
              </div>
            </div>
            <div class="nft-duration-wrapper">
              <div class="nft-duration-text">Duration</div>
              <div class="nft-duration-content-text">
                {{ calculateDuration(item.startDate, item.endDate) }} days
              </div>
            </div>
            <div class="nft-award-wrapper">
              <div class="nft-award-text">Award</div>
              <div class="nft-award-content-text">
                {{ formatAward(item.awards) }} USDC
              </div>
            </div>
          </div>
          <div
            class="nft-btn"
            :class="{ disabled: item.status === 'Solved' }"
            @click="item.status !== 'Solved' && openModal(item)"
          >
            <div class="nft-btn-text">
              {{
                item.status === "Solved"
                  ? formatAddress(item.winnerAddress)
                  : item.status === "Verified"
                  ? "Verified"
                  : "Challenge"
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div class="pagination-wrapper">
          <img src="@/assets/pagination/left.svg" alt="left" />
          <div class="number-wrapper">
            <div class="number-text" :class="{ 'is-pagination-active': true }">
              1
            </div>
            <div class="number-text">2</div>
            <div class="number-text">3</div>
            <div class="number-text">4</div>
            <div class="number-text">5</div>
          </div>
          <img src="@/assets/pagination/right.svg" alt="right" />
        </div>
      </div>
    </div>
  </div>

  <ChallengeModal
    v-if="showModal"
    :nft="selectedNft"
    @closeModal="closeModal"
  />
  <CreateModal v-if="showCreateModal" @closeCreateModal="closeCreateModal" />
</template>

<script setup>
import ChallengeModal from "./ChallengeModal.vue";
import CreateModal from "./CreateModal.vue";

import { getGames } from "@/utils/gameView";

import { ref, onMounted, onBeforeUnmount } from "vue";
import { ethers } from "ethers";

// Reactive state
const showModal = ref(false);
const showCreateModal = ref(false);

// State for selected NFT
const selectedNft = ref(null);

// State for NFT data
const nftData = ref([]);

// Methods for modals
const openModal = (item) => {
  selectedNft.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const openCreateModal = () => {
  showCreateModal.value = true;
};

const closeCreateModal = () => {
  showCreateModal.value = false;
};

const fetchNftData = async () => {
  const result = await getGames(0, 12); // TODO

  nftData.value = result
    .map((nft) => {
      const winnerAddress = nft[8];
      const currentTime = Math.floor(Date.now() / 1000);

      console.log(winnerAddress);
      let status = "Live";
      if (
        winnerAddress.toLowerCase() ===
        "0xffffffffffffffffffffffffffffffffffffffff"
      ) {
        status = "Verified";
      } else if (winnerAddress !== ethers.ZeroAddress) {
        status = "Solved";
      } else if (currentTime > Number(nft[6])) {
        status = "End";
      }

      return {
        status,
        winnerAddress,
        id: nft[0],
        name: nft[1],
        description: nft[2],
        gameType: nft[3],
        imageUri: nft[4],
        startDate: Number(nft[5]),
        endDate: Number(nft[6]),
        awards: Number(nft[7]),
      };
    })
    .reverse(); // Reverse the array here

  console.log(nftData.value);
};

// Utility methods
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;

  return `${month}.${day} ${formattedHour}:${minutes} ${period}`;
  // return date.toLocaleString("en-US", {
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
};

const calculateDuration = (startDate, endDate) => {
  const diffInSeconds = endDate - startDate;
  const days = diffInSeconds / (60 * 60 * 24);
  return Math.round(days);
};

const formatAward = (award) => {
  // return award;
  return ethers.formatUnits(award.toString(), 18);
};

const formatAddress = (address) => {
  if (address) {
    return `Winner: ${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  return address;
};

// Fetch data when component is mounted
onMounted(() => {
  fetchNftData();
});
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
}

.pagination-wrapper {
  display: flex;
  align-items: center;
  gap: 30px;
}

.pagination-wrapper img {
  cursor: pointer;
}

.number-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.number-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
}

.is-pagination-active {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
}
</style>
