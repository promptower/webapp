<template>
  <div class="leaderboard">
    <div class="leaderboard-container">
      <div class="overview-wrapper">
        <div class="overview-text">Overview</div>
        <div class="overview-content-wrapper">
          <div class="data-wrapper">
            <div class="title-wrapper">
              <div class="title-text">Total Challenges</div>
              <div class="content-text">100</div>
            </div>
            <div class="title-wrapper">
              <div class="title-text">Ongoing Challenges</div>
              <div class="content-text">10</div>
            </div>
            <div class="title-wrapper">
              <div class="title-text">Solved Challenges</div>
              <div class="content-text">30</div>
            </div>
            <div class="title-wrapper">
              <div class="title-verified-text">Verified Challenges</div>
              <div class="content-verified-text">60</div>
            </div>
          </div>
        </div>
      </div>
      <div class="leaderboard-wrapper">
        <div class="leaderboard-text">Leaderboard</div>
        <div class="table">
          <div class="table-title-wrapper">
            <div class="rank-text">Rank</div>
            <div class="challenger-text">Challenger</div>
            <div class="award-text">Total Award</div>
            <div class="solved-text">Solved</div>
          </div>
          <!-- repeat -->
          <div v-for="(item, index) in 6" class="table-content-wrapper">
            <div class="rank-content-text">1</div>
            <div class="challenger-content-text">0x1234...1234</div>
            <div class="award-content-text">$5,000</div>
            <div class="solved-content-text">7</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.leaderboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leaderboard-container {
  display: flex;
  width: 945px;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
}

.overview-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.overview-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.overview-content-wrapper {
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  border-radius: 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.data-wrapper {
  display: flex;
  padding: 0px 44px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px 58px;
  align-self: stretch;
  flex-wrap: wrap;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
}

.title-text {
  color: rgba(0, 0, 0, 0.7);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.title-verified-text {
  color: rgba(252, 75, 59, 0.7);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content-verified-text {
  color: #fc4b3b;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.leaderboard-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
}

.leaderboard-text {
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Archivo;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.table-title-wrapper {
  display: flex;
  padding: 20px 62px 10px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 20px 20px 0px 0px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #4dc4cf;
}

.rank-text,
.challenger-text,
.award-text,
.solved-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rank-text {
  display: flex;
  width: 98px;
  align-items: center;
}

.challenger-text,
.award-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.solved-text {
  display: flex;
  width: 83px;
  align-items: center;
}

.table-content-wrapper {
  display: flex;
  padding: 10px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-top: 2px solid #000;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
  background: #f5f3f3;
}

.table-content-wrapper:last-child {
  display: flex;
  padding: 10px 62px 10px 62px;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 0px 0px 20px 20px;
  border: 2px solid #000;
  background: #f5f3f3;
}

.challenger-content-text,
.award-content-text,
.solved-content-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.rank-content-text {
  color: #000;
  font-family: Archivo;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  width: 98px;
  align-items: center;
}

.challenger-content-text,
.award-content-text {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.solved-content-text {
  display: flex;
  width: 83px;
  align-items: center;
}
</style>
