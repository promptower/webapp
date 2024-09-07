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
            <img src="@/assets/nft/nft0.png" alt="nft" />
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
                <div class="title-text">MG12 Prompt</div>
                <div class="type-wrapper">
                  <div class="type-text">Secret</div>
                </div>
                <div class="title-description">
                  The first modular settlement layer designed to unlock
                  Bitcoin's liquidity across diverse blockchain ecosystems.
                </div>
              </div>
            </div>
          </div>
          <div class="modal-info-bottom">
            <div class="details-title-wrapper">
              <div class="details-title-text">Start Date</div>
              <div class="details-content-text">08.30 5:00 AM(UST)</div>
            </div>
            <div class="details-title-wrapper">
              <div class="details-title-text">End Date</div>
              <div class="details-content-text">08.30 5:00 AM(UST)</div>
            </div>
            <div class="details-title-wrapper">
              <div class="details-title-text">Duration</div>
              <div class="details-content-text">14 days</div>
            </div>
            <div class="details-title-wrapper">
              <div class="details-award-text">Awards</div>
              <div class="details-award-text">$6,000 in USDC</div>
            </div>
          </div>
        </div>
        <div class="bottom-wrapper">
          <div class="question-wrapper">
            <div class="question-title-text">Question</div>
            <div class="question-content-wrapper">
              <div class="question-content-input"></div>
              <div class="submit-btn">
                <div class="submit-text">Submit</div>
              </div>
            </div>
          </div>
          <div class="answer-wrapper">
            <div class="answer-title-text">Answer</div>
            <div class="answer-content-wrapper">
              <div class="answer-content-input"></div>
              <div class="empty-box"></div>
            </div>
          </div>
          <div class="pk-wrapper">
            <div class="pk-title-text">PK</div>
            <div class="pk-content-wrapper">
              <div class="pk-content-input"></div>
              <div class="submit-btn">
                <div class="submit-text">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define emits
const emit = defineEmits(["closeModal"]);

// Methods
const closeModal = () => {
  emit("closeModal");
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
  height: 80px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
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

.answer-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.answer-content-input {
  height: 40px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
}

.empty-box {
  display: flex;
  width: 120px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  height: 40px;
  flex: 1 0 0;

  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
}
</style>
