<template>
  <div class="portfolio">
    <div class="portfolio-container">
      <!-- Maker Section -->
      <div class="maker">
        <div class="maker-wrapper">
          <div class="maker-text">Maker</div>
          <div
            v-if="makerPortfolio.nfts.length > 0"
            class="maker-content-wrapper"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="45"
              viewBox="0 0 27 45"
              fill="none"
            >
              <path
                d="M25.75 2.56444L2.05336 22.5L25.75 42.4356V2.56444Z"
                fill="#F5F3F3"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <div class="maker-nfts">
              <!-- Maker NFTs -->
              <div
                v-for="(nft, index) in makerPortfolio.nfts"
                :key="index"
                class="nft-wrapper"
                :class="{ 'is-verified-nft': nft.status === 'Verified' }"
              >
                <div class="nft-status-wrapper">
                  <div class="type-wrapper">
                    <div class="type-text">{{ nft.type }}</div>
                  </div>
                  <div class="live-wrapper">
                    <svg
                      v-if="nft.status !== 'Verified'"
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
                        :fill="nft.status === 'Live' ? '#53926D' : '#CC0000'"
                      />
                    </svg>
                    <svg
                      v-if="nft.status === 'Verified'"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <circle
                        cx="9.5"
                        cy="9.5"
                        r="8"
                        fill="#4DC4CF"
                        stroke="black"
                        stroke-width="2"
                      />
                      <rect
                        x="3.5"
                        y="7.91431"
                        width="2"
                        height="8.48528"
                        transform="rotate(-45 3.5 7.91431)"
                        fill="black"
                      />
                      <rect
                        width="2"
                        height="8.48563"
                        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.5 7.91431)"
                        fill="black"
                      />
                    </svg>
                    <div class="live-text">{{ nft.status }}</div>
                  </div>
                </div>
                <img :src="nft.image" alt="nft" />
                <div class="nft-title-wrapper">
                  <div class="nft-title">{{ nft.name }}</div>
                </div>
                <div class="nft-date-wrapper">
                  <div class="nft-date-text">Date</div>
                  <div class="nft-date-content-wrapper">
                    <div class="nft-date-content-text">
                      {{ formatDate(nft.startDate) }}
                    </div>
                    <div class="nft-date-content-text">
                      ~ {{ formatDate(nft.endDate) }}
                    </div>
                  </div>
                </div>
                <div class="nft-duration-wrapper">
                  <div class="nft-duration-text">Remaining</div>
                  <div class="nft-duration-content-text">
                    {{ calculateDuration(nft.startDate, nft.endDate) }} days
                  </div>
                </div>
                <div class="nft-award-wrapper">
                  <div
                    class="nft-award-text"
                    :class="{
                      'is-verified-nft-text': nft.status === 'Verified',
                      // 'is-solved-nft-text': nft.status === 'Solved',
                    }"
                  >
                    Award
                  </div>
                  <div
                    class="nft-award-text"
                    :class="{
                      'is-verified-nft-text': nft.status === 'Verified',
                      'is-solved-nft-text': nft.status === 'Solved',
                    }"
                  >
                    {{ formatAward(nft.award) + " USDC" }}
                  </div>
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="45"
              viewBox="0 0 27 45"
              fill="none"
            >
              <path
                d="M1.25 2.56444L24.9466 22.5L1.25 42.4356V2.56444Z"
                fill="#53926D"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div class="detail">
          <div class="detail-text">View Details</div>
          <div class="detail-table">
            <div class="detail-table-top">
              <div class="detail-title-text">Id</div>
              <div class="detail-title-name-text">Name</div>
              <div class="detail-title-text">Status</div>
              <div class="detail-title-text">Type</div>
              <div class="detail-title-date-text">Date</div>
              <div class="detail-title-text">Award</div>
            </div>
            <!-- Maker Details -->
            <div
              v-if="makerPortfolio.details.length != 0"
              v-for="(item, index) in makerPortfolio.details"
              :key="index"
              class="detail-table-content"
            >
              <div class="detail-content-text">{{ index + 1 }}</div>
              <div class="detail-content-name-text">{{ item.name }}</div>
              <div class="detail-content-text">{{ item.status }}</div>
              <div class="detail-content-text">{{ item.type }}</div>
              <div class="detail-content-date-text">
                {{ formatDate(item.startDate) }} ~
                {{ formatDate(item.endDate) }} (UST)
              </div>
              <div class="detail-content-text">
                {{ formatAward(item.award) }}
              </div>
            </div>
            <div
              v-if="makerPortfolio.details.length == 0"
              class="detail-table-content"
            >
              <div class="detail-content-text">{{ "" }}</div>
              <div class="detail-content-name-text">{{ "" }}</div>
              <div class="detail-content-text">{{ "" }}</div>
              <div class="detail-content-text">{{ "" }}</div>
              <div class="detail-content-date-text">{{ "" }}</div>
              <div class="detail-content-text">{{ "" }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Solver Section -->
      <div class="solver">
        <div class="solver-title-text">Solver</div>
        <div class="solver-table">
          <div class="solver-table-top">
            <div class="solver-top-text">Id</div>
            <div class="solver-top-name-text">Name</div>
            <div class="solver-top-name-text">Type</div>
            <div class="solver-top-date-text">Solved</div>
            <div class="solver-top-text">Award</div>
          </div>
          <!-- Solver Details -->
          <div
            v-if="solverPortfolio.details.length != 0"
            v-for="(item, index) in solverPortfolio.details"
            :key="index"
            class="solver-table-content"
          >
            <div class="solver-content-text">{{ index + 1 }}</div>
            <div class="solver-content-name-text">{{ item.name }}</div>
            <div class="solver-content-name-text">{{ item.type }}</div>
            <!-- TODO o & x -->
            <div class="detail-content-date-text">o</div>
            <div class="detail-content-text">{{ formatAward(item.award) }}</div>
          </div>
          <div
            v-if="solverPortfolio.details.length == 0"
            class="solver-table-content"
          >
            <div class="solver-content-text">{{ "" }}</div>
            <div class="solver-content-name-text">{{ "" }}</div>
            <div class="solver-content-text">{{ "" }}</div>
            <div class="solver-content-text">{{ "" }}</div>
            <div class="detail-content-date-text">{{ "" }}</div>
            <div class="detail-content-text">{{ "" }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@/utils";
import { getPortfolioMaker, getPortfolioSolver } from "@/utils/gameView";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ethers } from "ethers";

// Utility methods to format date and award
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds

  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;

  return `${month}.${day} ${formattedHour}:${minutes} ${period}`;
  // return `${month}.${day} ${formattedHour}:${minutes} ${period} (UTC)`;
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

// State to hold maker and solver portfolio data
const makerPortfolio = ref({
  nfts: [],
  details: [],
});

const solverPortfolio = ref({
  details: [],
});

const parsePortfolioResult = (result) => {
  const currentTime = Math.floor(Date.now() / 1000);

  return result.map((item) => ({
    id: item[0].toString(),
    tokenId: item[1],
    name: item[2],
    description: item[3],
    type: item[4],
    promptHash: item[5],
    secretHash: item[6],
    image: item[7],
    startDate: Number(item[8]),
    endDate: Number(item[9]),
    award: item[10],
    status:
      item[11].toLowerCase() === "0xffffffffffffffffffffffffffffffffffffffff" ||
      (item[11] === ethers.ZeroAddress && currentTime > Number(item[9]))
        ? "Verified"
        : item[11] !== ethers.ZeroAddress
        ? "Solved"
        : "Live",
  }));
};

const fetchMakerPortfolio = async () => {
  const { address } = useWeb3ModalAccount();

  try {
    const makerResult = await getPortfolioMaker(address.value);
    makerPortfolio.value = {
      nfts: parsePortfolioResult(makerResult.slice(-4)), // Select the last 4 NFTs
      details: parsePortfolioResult(makerResult.slice(-4)), // Select the last 4 details
    };
  } catch (error) {
    console.error("Error fetching Maker portfolio:", error);
  }
};

const fetchSolverPortfolio = async () => {
  const { address } = useWeb3ModalAccount();

  try {
    const solverResult = await getPortfolioSolver(address.value);
    solverPortfolio.value = {
      details: parsePortfolioResult(solverResult),
    };
  } catch (error) {
    console.error("Error fetching Solver portfolio:", error);
  }
};

let intervalId = null;

// Fetch data on component mount
onMounted(async () => {
  // console.log("portfolio:fetchMakerPortfolio");
  await fetchMakerPortfolio();
  await fetchSolverPortfolio();
  intervalId = setInterval(async () => {
    // console.log("portfolio:fetchMakerPortfolio");
    await fetchMakerPortfolio();
    await fetchSolverPortfolio();
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
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio-container {
  display: flex;
  /* width: 944px; */
  flex-direction: column;
  align-items: flex-end;
  gap: 70px;
}

.maker {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
  align-self: stretch;
}

.maker-wrapper {
  display: flex;
  width: 1032px;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.maker-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.maker-content-wrapper {
  display: flex;
  width: 1032px;
  justify-content: space-between;
  align-items: center;
}

.maker-nfts {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.nft-wrapper {
  display: flex;
  padding: 20px 20px 24px 20px;
  width: 180px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.is-verified-nft {
  background: #4dc4cf;
}

.nft-status-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
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
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

.nft-wrapper img {
  width: 130px;
  height: 130px;

  border-radius: 10px;
  border: 2px solid #000;
}

.nft-title-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
}

.nft-title {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-date-wrapper,
.nft-duration-wrapper,
.nft-award-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.nft-date-text,
.nft-duration-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.nft-date-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 7px;
  align-self: stretch;
}

.nft-date-content-text,
.nft-duration-content-text {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nft-award-text {
  color: #4dc4cf;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.is-verified-nft-text {
  color: #000f;
}

.is-solved-nft-text {
  text-decoration-line: line-through;
}

.nft-award-content-text {
  color: #4dc4cf;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.detail-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.detail-table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.detail-table-top {
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 20px 20px 0px 0px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #53926d;
}

.detail-title-text,
.detail-title-name-text,
.detail-title-date-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.detail-title-text {
  display: flex;
  width: 80px;
  align-items: center;
}

.detail-title-name-text {
  display: flex;
  width: 160px;
  align-items: center;
}

.detail-title-date-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
}

.detail-table-content {
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #f5f3f3;
}

.detail-table-content:last-child {
  border-radius: 0px 0px 20px 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.detail-content-text,
.detail-content-name-text,
.detail-content-date-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.detail-content-text {
  display: flex;
  width: 80px;
  align-items: center;
}

.detail-content-name-text {
  display: flex;
  width: 160px;
  align-items: center;
}

.detail-content-date-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
}

.solver {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.solver-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.solver-table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.solver-table-top {
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 20px 20px 0px 0px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #542234;
}

.solver-top-text,
.solver-top-name-text,
.solver-top-date-text {
  color: #f5f3f3;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.solver-top-text {
  display: flex;
  width: 80px;
  align-items: center;
}

.solver-top-name-text {
  display: flex;
  width: 160px;
  align-items: center;
}

.solver-top-date-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
}

.solver-table-content {
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #f5f3f3;
}

.solver-table-content:last-child {
  border-radius: 0px 0px 20px 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.solver-content-text,
.solver-content-name-text,
.solver-content-date-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.solver-content-text {
  display: flex;
  width: 80px;
  align-items: center;
}

.solver-content-name-text {
  display: flex;
  width: 160px;
  align-items: center;
}

.solver-content-date-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
}
</style>
