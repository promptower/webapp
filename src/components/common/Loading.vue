<template>
  <div class="loading-container">
    <div
      v-for="n in 5"
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
  justify-content: left;
  align-items: center;

  box-sizing: border-box;
}

.dot {
  width: 9px;
  height: 9px;
  margin: 0 5px;
  background-color: gray;
  border-radius: 50%;
  animation: pulse 2\s infinite ease-in-out;
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
