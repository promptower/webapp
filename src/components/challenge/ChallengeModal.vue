<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-title-text">Challenge</div>
      <div class="modal-wrapper">
        <div class="close-wrapper">
          <img
            src="@/assets/resource/close.svg"
            alt="close"
            @click="closeModal"
          />
        </div>
        <div class="modal-info">
          <div class="modal-info-top">
            <!-- Bind dynamic NFT image -->
            <img :src="nft.imageUri || '@/assets/nft/0.png'" alt="nft" />
            <div class="modal-info-title-wrapper">
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
              <div class="title-wrapper">
                <!-- Bind dynamic NFT title and game type -->
                <div class="title-text">{{ nft.name }}</div>
                <div class="type-wrapper">
                  <div class="type-text">{{ nft.gameType }}</div>
                </div>
                <!-- Bind dynamic NFT description -->
                <div class="title-description">{{ nft.description }}</div>
              </div>
            </div>
          </div>
          <div class="modal-info-bottom">
            <!-- Bind dynamic start date -->
            <div class="details-title-wrapper">
              <div class="details-title-text">Start Date</div>
              <div class="details-content-text">
                {{ formatDate(nft.startDate) }}
              </div>
            </div>
            <!-- Bind dynamic end date -->
            <div class="details-title-wrapper">
              <div class="details-title-text">End Date</div>
              <div class="details-content-text">
                {{ formatDate(nft.endDate) }}
              </div>
            </div>
            <!-- Bind dynamic duration -->
            <div class="details-title-wrapper">
              <div class="details-title-text">Remaining</div>
              <div class="details-content-text">
                {{ calculateDuration(nft.startDate, nft.endDate) }} days
              </div>
            </div>
            <!-- Bind dynamic awards -->
            <div class="details-title-wrapper">
              <div class="details-award-text">Awards</div>
              <div class="details-award-text">
                {{ formatAward(nft.awards) }} USDC
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-wrapper">
          <!-- Existing bottom section remains the same -->
          <div class="question-wrapper">
            <div class="question-title-text">Question</div>
            <div class="question-content-wrapper">
              <textarea
                class="question-content-input"
                type="text"
                v-model="question"
              />
              <div class="submit-btn" @click="callGPT()">
                <div class="submit-text">Submit</div>
              </div>
            </div>
          </div>
          <div class="answer-wrapper">
            <div class="answer-title-text">Answer</div>
            <div class="answer-content-input">
              {{ answer }}
            </div>
          </div>
          <div class="pk-wrapper">
            <div class="pk-title-text">Secret</div>
            <div class="pk-content-wrapper">
              <textarea class="pk-content-input" type="text" v-model="secret" />
              <div class="submit-btn" @click="submitSecret()">
                <div class="submit-text">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmModal />
</template>

<script setup>
import ConfirmModal from "@/components/common/ConfirmModal.vue";

import { ref } from "vue";

import {
  useWeb3Modal,
  useWalletInfo,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@/utils";
import { solve } from "@/utils/game";

// Reactive state
const modal = useWeb3Modal();
const { walletInfo } = useWalletInfo();
const { walletProvider } = useWeb3ModalProvider();
const { address, chainId, isConnected } = useWeb3ModalAccount();

// Props
const props = defineProps({
  nft: {
    type: Object,
    required: true,
  },
});

// Emit event to close the modal
const emit = defineEmits(["closeModal"]);
const question = ref("");
const answer = ref("");
const secret = ref("");

const callGPT = async () => {
  const url =
    "https://ib9fm6yjjg.execute-api.ap-northeast-2.amazonaws.com/ctp/ctp/qa";
  const data = {
    token_id: props.nft.id.toString(),
    user: address.value,
    prompt_hash: props.nft.promptHash,
    question: question.value,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result.message);

    answer.value = result.message;
  } catch (error) {
    console.error("Error:", error);
  }
};

const submitSecret = async () => {
  // TODO loading
  const { status, hash } = await solve(
    walletProvider.value,
    props.nft.tokenId,
    secret.value
  );

  if (status) {
  } else {
  }
};

const closeModal = () => {
  emit("closeModal");
};

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
  const days = diffInSeconds / (60 * 60 * 24); // Convert from seconds to days
  return Math.round(days);
};

const formatAward = (award) => {
  return (award / 1e18).toFixed(2); // Assuming award is in Wei, convert to Ether/USDC
};
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-container {
  display: flex;
  /*  */
  width: 944px;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
}

.modal-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.modal-wrapper {
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.close-wrapper {
  display: flex;
  padding: 0px 10px;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  align-self: stretch;
}

.close-wrapper {
  cursor: pointer;
}

.modal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.modal-info-top {
  display: flex;
  padding: 10px 43px;
  align-items: center;
  gap: 18px;
  align-self: stretch;
}

.modal-info-top img {
  width: 138px;
  height: 138px;

  border-radius: 10px;
  border: 2px solid #000;
}

.modal-info-title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
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

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
}

.title-text {
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

.title-description {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.modal-info-bottom {
  display: flex;
  padding: 0px 44px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px 58px;
  align-self: stretch;
  flex-wrap: wrap;
}

.details-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.details-title-text {
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.details-content-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.details-award-text {
  color: #4dc4cf;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.details-award-text {
  color: #4dc4cf;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.bottom-wrapper {
  display: flex;
  padding: 20px 41px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.question-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.question-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.question-content-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
  align-self: stretch;
}

.question-content-input {
  height: 112px;
  flex: 1 0 0;
  padding: 20px 30px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  box-sizing: border-box;
}

.submit-btn {
  display: flex;
  width: 120px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #53926d;

  cursor: pointer;
}

.submit-text {
  color: #000;
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.answer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.answer-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.answer-content-input {
  padding: 20px 30px;
  min-height: 40px;
  width: 100%;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  box-sizing: border-box;
  overflow-wrap: break-word;
  white-space: normal;
}

.pk-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}

.pk-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.pk-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.pk-content-input {
  display: flex;
  padding: 8px 30px;
  height: 40px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  box-sizing: border-box;
}
</style>
