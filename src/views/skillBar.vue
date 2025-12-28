<template>
  <div class="skill-bar">
    <div
      class="d-flex flex-column flex-md-row justify-content-between pl-3 pb-1 mt-1"
    >
      <span>{{ skill }}</span>
      <span>{{ percentage }}%</span>
    </div>

    <div class="progress mb-6">
      <div class="progress-fill" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  skill: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.skill-bar {
  display: flex;
  flex-direction: column; /* Stack vertically by default */
  margin: 10px 0;
  color: #fff;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column; /* Stack items vertically on smaller screens */
}

.flex-md-row {
  flex-direction: row; /* On larger screens, align items horizontally */
}

.progress {
  background-color: #ddd;
  width: 100%; /* Ensure it fills the container on mobile */
  height: 10px;
  margin-top: 5px;
  position: relative;
}

.progress-fill {
  background-color: rgb(126, 240, 234);
  height: 100%;
  transition: width 0.3s ease;
}

/* Mobile responsiveness: adjust text and layout */
@media (max-width: 767px) {
  .progress {
    width: 100%; /* Full width on mobile */
  }

  .d-flex {
    flex-direction: column; /* Stack text vertically on mobile */
    text-align: center; /* Center text on mobile */
  }

  .progress-fill {
    background-color: rgb(126, 240, 234);
    transition: width 0.3s ease;
  }
}

@media (min-width: 768px) {
  .progress {
    width: 100%; /* Full width on medium and larger screens */
  }

  .d-flex {
    flex-direction: row; /* Horizontal alignment on larger screens */
  }
}
</style>
