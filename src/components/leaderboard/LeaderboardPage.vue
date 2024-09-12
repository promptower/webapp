<template>
  <div class="leaderboard">
    <div class="leaderboard-container">
      <div class="overview-wrapper">
        <div class="overview-text">Overview</div>
        <div class="overview-content-wrapper">
          <div class="data-wrapper">
            <div class="title-wrapper">
              <div class="title-text">Total Challenges</div>
              <div class="content-text">{{ overview.totalChallenges }}</div>
            </div>
            <div class="title-wrapper">
              <div class="title-text">Live Challenges</div>
              <div class="content-text">{{ overview.ongoingChallenges }}</div>
            </div>
            <div class="title-wrapper">
              <div class="title-text">Solved Challenges</div>
              <div class="content-text">{{ overview.solvedChallenges }}</div>
            </div>
            <div class="title-wrapper">
              <div class="title-verified-text">Verified Challenges</div>
              <div class="content-verified-text">
                {{ overview.verifiedChallenges }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="leaderboard-wrapper">
        <div class="leaderboard-text">Leaderboard</div>
        <div class="table">
          <div class="table-title-wrapper">
            <div class="rank-text">Rank</div>
            <div class="challenger-text">Challenger</div>
            <div class="award-text">Total Award</div>
            <div class="solved-text">Solved</div>
          </div>
          <!-- Leaderboard items -->
          <div
            v-for="(solver, index) in leaderboard"
            :key="index"
            class="table-content-wrapper"
          >
            <div class="rank-content-text">
              {{ solver.award == "" ? "" : index + 1 }}
            </div>
            <div class="challenger-content-text">
              {{ formatAddress(solver.address) }}
            </div>
            <div class="award-content-text">
              {{ formatAward(solver.award) }}
            </div>
            <div class="solved-content-text">{{ solver.solved }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getStatus, getTopSolvers } from "@/utils/gameView";

import { ref, onMounted, onBeforeUnmount } from "vue";
import { ethers } from "ethers";

const overview = ref({
  totalChallenges: 0,
  ongoingChallenges: 0,
  solvedChallenges: 0,
  verifiedChallenges: 0,
});

const leaderboard = ref([{ address: "", solved: "", award: "" }]);

const fetchOverview = async () => {
  try {
    const status = await getStatus();
    overview.value.totalChallenges = status[0];
    overview.value.ongoingChallenges = status[1];
    overview.value.solvedChallenges = status[2];
    overview.value.verifiedChallenges = status[3];
  } catch (error) {
    console.error("Error fetching overview data:", error);
  }
};

const fetchLeaderboard = async () => {
  try {
    const result = await getTopSolvers(10);
    if (result[0].length != 0) {
      leaderboard.value = result[0]
        .map((address, index) => ({
          address,
          solved: result[1][index],
          award: result[2][index].toString(),
        }))
        .sort((a, b) => b.award - a.award); // Sort by award in descending order
    }
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
  }
};

const formatAward = (award) => {
  // return award;
  if (award == "") return "";
  return ethers.formatUnits(award.toString(), 18);
};

const formatAddress = (address) => {
  if (address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
  return address;
};

let intervalId = null;

// Fetch data when the component is mounted
onMounted(async () => {
  // console.log("leaderboard:fetchLeaderboard");
  await fetchOverview();
  await fetchLeaderboard();
  intervalId = setInterval(async () => {
    // console.log("leaderboard:fetchLeaderboard");
    await fetchOverview();
    await fetchLeaderboard();
  }, 15000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    // console.log("Interval cleared");
  }
});
</script>

<style scoped>
.leaderboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leaderboard-container {
  display: flex;
  width: 945px;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
}

.overview-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.overview-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.overview-content-wrapper {
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.data-wrapper {
  display: flex;
  padding: 0px 44px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px 58px;
  align-self: stretch;
  flex-wrap: wrap;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
}

.title-text {
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.title-verified-text {
  color: #4DC4CF;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-verified-text {
  color: #4DC4CF;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.leaderboard-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.leaderboard-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.table-title-wrapper {
  display: flex;
  padding: 20px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 20px 20px 0px 0px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #4dc4cf;
}

.rank-text,
.challenger-text,
.award-text,
.solved-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rank-text {
  display: flex;
  width: 98px;
  align-items: center;
}

.challenger-text,
.award-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.solved-text {
  display: flex;
  width: 83px;
  align-items: center;
}

.table-content-wrapper {
  display: flex;
  padding: 16px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #f5f3f3;
}

.table-content-wrapper:last-child {
  border-radius: 0px 0px 20px 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.challenger-content-text,
.award-content-text,
.solved-content-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.rank-content-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  width: 98px;
  align-items: center;
}

.challenger-content-text,
.award-content-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.solved-content-text {
  display: flex;
  width: 83px;
  align-items: center;
}
</style>
