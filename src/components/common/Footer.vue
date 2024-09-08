<template>
  <div class="footer">
    <div class="footer-content-wrapper">
      <div class="community-wrapper">
        <img src="@/assets/community/github.svg" alt="github">
      </div>
      <div class="copyright">ⓒ CTP. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  display: flex;
  margin-top: 70px;
  padding: 40px 170px 50px 170px;
  justify-content: space-between;
  align-items: flex-end;

  border-top: 2px solid #000;
  background: #fff;
}

.footer-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  flex: 1 0 0;
}

.community-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.copyright {
  color: #000;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.4px;
}
</style>
