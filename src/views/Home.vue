<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const menuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 1200,
    offset: 100,
    once: true,
  });

  // Set up event listener for window resize
  window.addEventListener("resize", updateWindowWidth);
  updateWindowWidth(); // Initial call to set width on load
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});

function updateWindowWidth() {
  windowWidth.value = window.innerWidth;
}
</script>

<template>
  <div class="container my-12">
    <div class="row align-items-center">
      <!-- Main Content Section -->
      <div :class="['col-md-7', 'content-section']">
        <h1
          class="text-white mt-12 mb-4"
          data-aos="fade-down-left"
          :style="{ fontSize: windowWidth < 768 ? '24px' : '40px' }"
        >
          Hello, <span style="color: #3bf4fb">I am</span>
        </h1>
        <h1
          class="text-h3 text-white mb-4"
          data-aos="fade-right"
          :style="{ fontSize: windowWidth < 768 ? '24px' : '40px' }"
        >
          Tep Reaksmey
        </h1>
        <h5
          class="mb-6"
          :style="{
            color: '#3bf4fb',
            fontSize: windowWidth < 768 ? '16px' : '24px',
          }"
          data-aos="zoom-in"
        >
          Web Developer & Web Designer
        </h5>
        <p
          class="mb-6 text-white"
          data-aos="fade-left"
          :style="{ fontSize: windowWidth < 768 ? '12px' : '16px' }"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          asperiores, voluptates minus impedit assumenda laboriosam earum
          quibusdam tenetur sint repellendus, nam amet labore obcaecati.
          Molestias rerum reiciendis assumenda non quibusdam.
        </p>

        <div class="social-icons" data-aos="zoom-in">
          <a
            href="https://www.facebook.com/mrr.smeykm/"
            target="_blank"
            class="text-h5"
          >
            <v-icon color="#3bf4fb" class="mr-3">mdi-facebook</v-icon>
          </a>
          <a
            href="https://www.facebook.com/mrr.smeykm/"
            target="_blank"
            class="text-h5"
          >
            <v-icon color="#3bf4fb" class="mr-3">mdi-youtube</v-icon>
          </a>
          <a
            href="https://www.facebook.com/mrr.smeykm/"
            target="_blank"
            class="text-h5"
          >
            <v-icon color="#3bf4fb" class="mr-3">mdi-instagram</v-icon>
          </a>
        </div>

        <v-btn
          to="/contact"
          class="mt-4 contact-btn ml-1"
          data-aos="fade-right"
        >
          Contact Now &#8594;
        </v-btn>
      </div>

      <!-- Image Section -->
      <div class="col-md-5 mt-4 image-section" data-aos="fade-left">
        <v-img
          class="mx-auto d-block"
          :width="windowWidth < 768 ? 250 : 570"
          aspect-ratio="16/9"
          cover
          rounded="4"
          src="https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 100%;
  padding: 0 20px;
}

/* Responsive Layout */
@media (max-width: 768px) {
  .content-section {
    padding: 0;
    text-align: center;
    display: block;
  }

  .image-section {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
    display: flex;
    gap: 12px;
  }

  .contact-btn {
    display: inline-block;
    background-color: #3bf4fb;
  }
}

@media (min-width: 768px) {
  .content-section {
    padding: 0 40px;
  }

  .contact-btn {
    background-color: #3bf4fb;
    margin-left: 5%;
  }
}
</style>
