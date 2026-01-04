<template>
  <div class="main">
    <div class="stand"></div>
    <div class="content">
      <div class="left">
        <p>2010 - 2016</p>
      </div>
      <div class="dot">
        <div class="in"></div>
      </div>
      <div class="right">
        <p>2Tnou Primary School</p>
      </div>
    </div>
    <div class="content1">
      <div class="left">
        <p>2016 - 2019</p>
      </div>
      <div class="dot">
        <div class="in"></div>
      </div>
      <div class="right">
        <p>Sorheu Secondary School</p>
      </div>
    </div>
    <div class="content1">
      <div class="left">
        <p>2020 - 2022</p>
      </div>
      <div class="dot">
        <div class="in"></div>
      </div>
      <div class="right">
        <p>Monivong High School & COERR Language Skills Center</p>
      </div>
    </div>
    <div class="content2">
      <div class="left">
        <p>2022</p>
      </div>
      <div class="dot">
        <div class="in"></div>
      </div>
      <div class="right">
        <p>Graduate Grade 12</p>
      </div>
    </div>
    <div class="content3">
      <div class="left">
        <p>2022 - Present</p>
      </div>
      <div class="dot">
        <div class="in"></div>
      </div>
      <div class="right">
        <p>National University of Battambang</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
</script>

<style scoped>
.main {
  position: relative;
  margin: 30px 0 10px 100px;
}

/* Vertical line */
.stand {
  width: 2px;
  height: 100%;
  background-color: white;
  position: absolute;
  left: 531px;
  transform: translateX(-50%);
  z-index: -100;
}

.content,
.content1,
.content2,
.content3 {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  flex-wrap: wrap;
  margin-left: 250px;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
  padding: 3px;
}

.in {
  background-color: rgb(0, 0, 0);
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.left {
  width: 100px;
  text-align: center;
  padding-left: 40px;
}

.right {
  width: 200px;
  text-align: left;
  padding-left: 40px;
}

/* Responsive adjustments for medium and larger screens */
@media (min-width: 768px) {
  .main {
    margin-left: 50px;
  }

  .left,
  .right {
    width: 250px;
  }

  .dot {
    width: 20px;
    height: 20px;
  }

  .content,
  .content1,
  .content2,
  .content3 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}

/* Responsive adjustments for small screens (mobile) */
@media (max-width: 767px) {
  .main {
    margin: 30px auto;
    padding: 0 20px;
  }

  .content,
  .content1,
  .content2,
  .content3 {
    flex-direction: column;
    /* Stack content vertically */
    align-items: flex-start;
    /* Align items to the left */
    gap: 10px;
    text-align: left;
  }

  .stand {
    left: 100px;
    /* Adjust position for mobile */
    height: 100%;
  }

  .dot {
    width: 12px;
    height: 12px;
  }

  .left,
  .right {
    width: auto;
    /* Allow text width to be flexible */
    padding-left: 0;
    text-align: left;
  }
}
</style>
