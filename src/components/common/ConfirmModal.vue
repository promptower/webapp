<template>
  <div class="modal-background" @click="closeConfirmModal">
    <div class="modal" v-if="confirmType === 0">
      <img
        src="@/assets/resource/close.svg"
        alt="close"
        @click="closeConfirmModal"
      />
      <div class="img-wrapper">
        <img src="@/assets/confirm/hmm.svg" alt="imoji" />
        <div class="title-text">Hmm!</div>
        <div class="content-text">{{ message }}</div>
      </div>
    </div>

    <div class="modal" v-if="confirmType === 1" @click="closeConfirmModal">
      <img
        src="@/assets/resource/close.svg"
        alt="close"
        @click="closeConfirmModal"
      />
      <div class="img-wrapper">
        <img src="@/assets/confirm/yay.svg" alt="imoji" />
        <div class="title-text">Yay!</div>
        <div class="content-text">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  confirmType: Number,
  message: String,
});

// Emit event
const emit = defineEmits(["closeConfirmModal"]);

// Methods
const closeConfirmModal = () => {
  emit("closeConfirmModal");
};
</script>

<style scoped>
.modal-background {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(70, 70, 70, 0.3);

  z-index: 1001;
}

.modal {
  display: inline-flex;
  width: 340px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-end;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.modal img {
  cursor: pointer;
}

.img-wrapper {
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.title-text {
  color: #000;
  text-align: center;
  font-family: Archivo;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-text {
  color: #000;
  text-align: center;
  font-family: Archivo;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
