<template>
  <div class="modal">
    <div class="modal-container">
      <div class="title-text">Get started with a CTP</div>
      <div class="modal-wrapper">
        <div class="close-wrapper">
          <img
            src="@/assets/resource/close.svg"
            alt="close"
            @click="closeCreateModal"
          />
        </div>
        <div class="about-wrapper">
          <div class="about-text">Create A New Challenge</div>
        </div>
        <div class="content-wrapper">
          <div class="content-left-wrapper">
            <div class="name-wrapper">
              <div class="name-text">Name</div>
              <input
                class="name-input"
                v-model="metadata.name"
                placeholder="Name"
                type="text"
              />
            </div>
            <div class="description-wrapper">
              <div class="description-text">Description</div>
              <textarea
                class="description-input"
                v-model="metadata.description"
                placeholder="Description"
              />
            </div>
            <div class="date-wrapper">
              <div class="date-text">Start Date</div>
              <div class="date-input-wrapper">
                <input
                  class="date-input"
                  v-model="startDate"
                  type="datetime-local"
                />
                <!-- <input
                  class="date-input"
                  v-model="endDate"
                  type="datetime-local"
                /> -->
              </div>
            </div>
            <div class="date-wrapper">
              <div class="date-text">End Date</div>
              <div class="date-input-wrapper">
                <!-- <input
                  class="date-input"
                  v-model="startDate"
                  type="datetime-local"
                /> -->
                <input
                  class="date-input"
                  v-model="endDate"
                  type="datetime-local"
                />
              </div>
            </div>
            <div class="award-wrapper">
              <div class="award-text">Award</div>
              <div class="award-input-wrapper">
                <input class="award-input" v-model="award" type="number" />
                <div class="usdc-wrapper">
                  <div class="usdc-text">USDC</div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-right-wrapper">
            <div class="type-wrapper">
              <div class="type-text">Type</div>
              <div class="type-content-secret-wrapper">
                <div
                  class="type-content-wrapper"
                  :class="{ 'is-type-active': typeIndex == 0 }"
                  @click="changeTypeIndex(0)"
                >
                  <div class="type-content-text">Secret</div>
                </div>
                <div
                  class="type-content-wrapper"
                  :class="{ 'is-type-active': typeIndex == 1 }"
                >
                  <div class="type-content-text">Slang</div>
                </div>
                <div
                  class="type-content-wrapper"
                  :class="{ 'is-type-active': typeIndex == 2 }"
                >
                  <div class="type-content-text">Mismatch</div>
                </div>
              </div>
            </div>
            <div class="description-wrapper">
              <div class="description-text">Prompt</div>
              <textarea
                class="prompt-input"
                v-model="prompt"
                placeholder="Prompt"
              />
            </div>
            <div class="name-wrapper">
              <div class="name-text">Secret</div>
              <input
                class="name-input"
                v-model="secret"
                placeholder="Secret"
                type="text"
              />
            </div>
            <div class="submit-wrapper">
              <div class="empty-text"></div>
              <div class="submit-btn-wrapper" @click="submitMetadata">
                <div class="submit-btn-text">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ConfirmModal
    v-if="confirmType === 0 || confirmType === 1"
    :confirmType="confirmType"
    :message="confirmMessage"
    @closeConfirmModal="closeConfirmModal"
  />
</template>

<script setup>
import ConfirmModal from "@/components/common/ConfirmModal.vue";

import { ethers } from "ethers";
import { ref } from "vue";

import {
  // wallet
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  // fetch api
  postCreatePrompt,
} from "@/utils";
import { approve, mint } from "@/utils/game";

// Define emits
const emit = defineEmits(["closeCreateModal", "updateNftsData"]);

// State for inputs
const metadata = ref({
  name: "",
  description: "",
  award: "",
  gameType: "secret",
  prompt: "",
  secret: "",
  start: 0,
  end: 0,
  winner: ethers.ZeroAddress,
});

const award = ref("");
const prompt = ref("");
const secret = ref("");
const startDate = ref("");
const endDate = ref("");

const typeIndex = ref(0);

const confirmType = ref(null);
const confirmMessage = ref("");

const { walletProvider } = useWeb3ModalProvider();
const { address, chainId, isConnected } = useWeb3ModalAccount();

// Methods
const closeCreateModal = () => {
  emit("closeCreateModal");
};

const closeConfirmModal = () => {
  const preConfirmType = confirmType.value;

  confirmType.value = "";
  emit("closeConfirmModal");
  if (preConfirmType === 1) emit("closeCreateModal");
};

const changeTypeIndex = (index) => {
  typeIndex.value = index;
};

const validateConditions = () => {
  // metadata
  if (
    award.value === "" ||
    prompt.value == "" ||
    secret.value == "" ||
    startDate.value == "" ||
    endDate.value == ""
  ) {
    confirmType.value = 0;
    confirmMessage.value = "Please enter all the data.";
    return false;
  }
  
  // metadata
  if (!isConnected.value) {
    confirmType.value = 0;
    confirmMessage.value = "Please connect your wallet.";
    return false;
  }
  
  // condition1: prompt & secret
  if (!prompt.value.includes(secret.value)) {
    confirmType.value = 0;
    confirmMessage.value = "The prompt does not contain a secret.";
    return false;
  }
  
  // condition2: start & end timstamp
  const startTimstamp = new Date(startDate.value).getTime() / 1000;
  const endTimstamp = new Date(endDate.value).getTime() / 1000;
  if (startTimstamp >= endTimstamp) {
    confirmType.value = 0;
    confirmMessage.value = "The end time must be later than the start time.";
    return false;
  }

  return true;
};

const submitMetadata = async () => {
  if (validateConditions()) {
    // const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds

    metadata.value.start = new Date(startDate.value).getTime() / 1000; // Convert startDate to timestamp
    metadata.value.end = new Date(endDate.value).getTime() / 1000; // Convert endDate to timestamp
    metadata.value.prompt = ethers.keccak256(ethers.toUtf8Bytes(prompt.value));
    metadata.value.secret = ethers.keccak256(
      ethers.keccak256(ethers.toUtf8Bytes(secret.value))
    );

    const metadataAward = ethers.parseUnits(award.value.toString(), 18);

    // Output metadata object to console or use it in the application as needed
    // console.log("Metadata object:", metadata.value);
    // console.log("award:", metadataAward);
    /*
  {
      "name": "Project Nexus",
      "description": "A collaborative AI for streamlining communication between distributed teams.",
      "gameType": "secret",
      "prompt": "0x0ab12c567b7ad80c41147c3c8ea8f1531453e7c653da51e39c8b6c43964af8a5",
      "secret": "0x4eedc8faa297263c59be196499ae5e93ae9f6bada51cd9896af04487ddb2d3a5",
      "start": 1725840000,
      "end": 1725926400,
      "winner": "0x0000000000000000000000000000000000000000"
  }
  "award": "11000000000000000000",
    */

    await postCreatePrompt(
      metadata.value.prompt,
      prompt.value,
      metadata.value.secret,
      secret.value
    );

    await approve(walletProvider.value, metadataAward);

    await mint(
      walletProvider.value,
      address.value,
      metadata.value,
      metadataAward
    );

    confirmMessage.value = "You successfully registered the project.";
    confirmType.value = 1;

    emit("updateNftsData");
  }
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
  /* width: 944px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
}

.title-text {
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
  justify-content: center;
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

.close-wrapper img {
  cursor: pointer;
}

.about-wrapper {
  display: flex;
  padding: 0px 43px;
  align-items: center;
  gap: 3px;
  align-self: stretch;
}

.about-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-wrapper {
  display: flex;
  padding: 32px 43px;
  align-items: flex-start;
  gap: 60px;
  align-self: stretch;
}

.content-left-wrapper {
  display: flex;
  width: 448px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
}

.name-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.name-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.name-input {
  display: flex;
  height: 40px;
  padding: 8px 30px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

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

.description-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.description-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.description-input,
.prompt-input {
  display: flex;
  height: 201px;
  padding: 20px 30px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

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

.description-input {
  height: 111px;
}

.date-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.date-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.date-input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}

.date-input {
  display: flex;
  height: 40px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  /* flex: 1 0 0; */

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  box-sizing: border-box;

  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.award-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.award-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.award-input-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.award-input {
  display: flex;
  height: 40px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  box-sizing: border-box;
}

.award-input::-webkit-inner-spin-button,
.award-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.award-input:focus {
  outline: none;
}

.usdc-wrapper {
  display: flex;
  height: 40px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #cacaca;

  box-sizing: border-box;
}

.usdc-text {
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.content-right-wrapper {
  display: flex;
  width: 448px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  flex: 1 0 0;
}

.type-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.type-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.type-content-secret-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.type-content-wrapper {
  display: flex;
  height: 40px;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;

  cursor: pointer;
  box-sizing: border-box;
}

.is-type-active {
  background: #cacaca;
}

.type-content-text {
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.submit-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
}

.empty-text {
  height: 20px;
}

.submit-btn-wrapper {
  /* display: flex; */
  width: 175px;
  height: 40px;
  padding: 8px 30px;
  text-align: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #53926d;

  cursor: pointer;
  box-sizing: border-box;
}

.submit-btn-text {
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
</style>
