<template>
  <div class="notebook">
    <img
      class="fixed-notebook"
      src="@/assets/landing/notebook.svg"
      alt="Notebook"
    />

    <div class="notebook-screen">
      <div class="notebook-screen-wrapper">
        <img class="fixed-logo" src="@/assets/landing/logo.svg" alt="Logo" />

        <div class="notebook-screen-title-wrapper">
          <div class="notebook-screen-title-text">Capture the Prompt</div>
          <div class="notebook-screen-content-text">
            Blockchain-Based AI Prompt Market via Capture-the-Flag
          </div>

          <div class="join-app-btn" @click="clickBtn">
            <div class="join-app-text">Let’s Play</div>
            <img src="@/assets/landing/join-arrow.svg" alt="Join-Arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <img class="fixed-flower" src="@/assets/landing/flower.svg" alt="Flower" />
  <img class="fixed-pencil" src="@/assets/landing/pencil.svg" alt="Pencil" />

  <div class="background-fixed"></div>
</template>

<script setup>
// Define emits
const emit = defineEmits(["clickBtn"]);

// Methods
const clickBtn = async () => {
  emit("clickBtn");
};
</script>

<style scoped>
.notebook {
  position: fixed;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.fixed-notebook {
  width: 100%;
  width: 640px;
}

.notebook-screen {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 512px;
  height: 330px;
  padding: 30px 46px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  border: 2px solid #000;
  background: #fff;

  z-index: 11;
}

.notebook-screen-wrapper {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.notebook-screen img {
  margin-bottom: 20px;
}

.notebook-screen-title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.notebook-screen-title-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.notebook-screen-content-text {
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.join-app-btn {
  display: flex;
  width: 150px;
  height: 40px;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #4dc4cf;

  cursor: pointer;
}

.join-app-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.fixed-flower {
  position: fixed;
  bottom: 20%;
  right: 0;
  width: 360px;
  height: auto;
  z-index: 10;
}

.fixed-pencil {
  position: fixed;
  bottom: 20%;
  left: 0;
  width: 280px;
  height: auto;
  z-index: 10;
}

.background-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background-color: #53926d;
  z-index: 0;
  pointer-events: none;

  border: 2px solid #000;
}
</style>
