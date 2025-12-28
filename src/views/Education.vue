<script setup>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div
    class="mt-12 container"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0"
  >
    <div class="whole">
      <div class="edu-exp">
        <button
          :class="{ active: $route.path === '/education/skill' }"
          @click="$router.push('/education/skill')"
        >
         MY SKILLS
        </button>
        <button
          :class="{ active: $route.path === '/education/edu' }"
          @click="$router.push('/education/edu')"
        >
          EDUCATION
        </button>
        
        <!-- <button
          :class="{ active: $route.path === '/education/exp' }"
          @click="$router.push('/education/exp')"
        >
          EXPERIENCES
        </button> -->
      </div>
      <div class="education">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Container styling */
.whole {
  padding-top: 20px;
  width: 90%;
  margin: 50px auto;
  border-radius: 10px;
  height: 70vh;
  box-shadow: rgba(65, 201, 255, 0.201) 10px 10px 70px 20px,
    rgba(231, 0, 0, 0.912) 0px 8px 16px -19px;
}

/* Button container */
.edu-exp {
  width: 50%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Button styling */
.edu-exp button {
  padding: 10px 20px;
  color: white;
  background-color: #000000;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edu-exp button:hover {
  background-color: #000000;
}

.edu-exp button.active {
  background-color: #32d1d3;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .whole {
    width: 95%;
    height: auto;
  }

  .edu-exp {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }

  .edu-exp button {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
  }
}
</style>
