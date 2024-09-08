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
          <div class="about-text">Create A New Challange</div>
        </div>
        <div class="content-wrapper">
          <div class="content-left-wrapper">
            <div class="name-wrapper">
              <div class="name-text">Name</div>
              <input class="name-input" placeholder="Name" type="text" />
            </div>
            <div class="description-wrapper">
              <div class="description-text">Description</div>
              <input
                class="description-input"
                placeholder="Description"
                type="text"
              />
            </div>
            <div class="date-wrapper">
              <div class="date-text">Date</div>
              <div class="date-input-wrapper">
                <input class="date-input" type="date" />
                <input class="date-input" type="date" />
              </div>
            </div>
            <div class="award-wrapper">
              <div class="award-text">Award</div>
              <div class="award-input-wrapper">
                <input class="award-input" type="text" />
                <div class="usdc-wrapper">
                  <div class="usdc-text">USDC</div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-right-wrapper">
            <div class="type-wrapper">
              <div class="type-text">type</div>
              <div class="type-content-secret-wrapper">
                <div class="type-content-wrapper">
                  <div class="type-content-text">Secret</div>
                </div>
                <!-- <div class="type-content-wrapper">
                  <div class="type-content-text">Slang</div>
                </div> -->
              </div>
            </div>
            <div class="description-wrapper">
              <div class="description-text">Prompt</div>
              <input
                class="description-input"
                placeholder="Prompt"
                type="text"
              />
            </div>
            <div class="name-wrapper">
              <div class="name-text">Secret</div>
              <input class="name-input" placeholder="Secret" type="text" />
            </div>
            <div class="submit-wrapper">
              <div class="empty-text"></div>
              <div class="submit-btn-wrapper">
                <div class="submit-btn-text">Submit</div>
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
const emit = defineEmits(["closeCreateModal"]);

// Methods
const closeCreateModal = () => {
  emit("closeCreateModal");
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
  height: 24px;
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

.description-input {
  display: flex;
  height: 201px;
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
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
}

.date-input {
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
  background: #cacaca;

  box-sizing: border-box;
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
  display: flex;
  /* width: 179.5px; */
  height: 40px;
  padding: 8px 30px;
  text-align: center;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid #000;
  background: #53926d;

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
