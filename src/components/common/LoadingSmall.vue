<template>
  <div class="loading-container">
    <div
      v-for="n in 3"
      :key="n"
      class="dot"
      :style="{ 'animation-delay': `${n * 0.2}s` }"
    ></div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
}

.dot {
  width: 7px;
  height: 7px;
  margin: 0 5px;
  background-color: rgb(157, 157, 157);
  border-radius: 50%;
  animation: pulse 1.5\s infinite ease-in-out;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}
</style>
