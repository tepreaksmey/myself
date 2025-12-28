<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200, // Speed up animations (400ms for faster effect)
  offset: 100, // Trigger animations a bit sooner
  once: true, // Animation occurs only once
});
</script>

<template>
  <div class="container my-5">
    <div class="row" style="margin: 70px 0">
      <div
        class="col-12 col-md-5 mt-12 pl-0 pl-md-5"
        style="padding: 0"
        data-aos="fade-right"
      >
        <v-img
          class="float-md-right"
          :width="500"
          aspect-ratio="16/9"
          cover
          rounded="4"
          src="https://scontent.fpnh24-1.fna.fbcdn.net/v/t39.30808-6/472217786_2064813683946224_3875151365123861474_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnZkDETp5tHuPouGbgwa2LvSycJFXUthu9LJwkVdS2GxK_kOMgnZFmHr1RskEXEiEC_ZAn39Fsbz-KBVAdtxGU&_nc_ohc=FGjV__KtS9UQ7kNvwGfdwxz&_nc_oc=AdmlGrczRQ0L2N4c6avA0MnqOmXTGrVB4brKBYHMzDkEXnllzzrrBS4cMkdTOD_HRm4&_nc_zt=23&_nc_ht=scontent.fpnh24-1.fna&_nc_gid=ueaGmJzCddddB5ojCLQZpQ&oh=00_AfP1rTpPyBdivJwUmzT2FqbXYAYzDvcgUC8KGDy9rMYQJg&oe=685458C2"
        ></v-img>
      </div>
      <div class="col-12 col-md-7 my-12 pl-0 pl-md-5">
        <h1
          class="text-white mt-12 mb-6 fw-bold pl-9"
          style="font-size: 40px"
          data-aos="fade-down-left"
        >
          About<span style="color: #3bf4fb" class="fw-bold">Me</span>
        </h1>
        <p
          class="text-white mb-6"
          style="width: 90%; font-size: 25px; margin: 0 auto"
          data-aos="fade-left"
        >
          Hello Guy! My name is
          <span style="color: #3bf4fb" class="fw-bold">Tep Reaksmey</span>. I'm
          studying at NUBB. Thank you for visiting my website and getting to
          know me better. I hope you enjoyed reading my blog posts and found
          them useful and informative. If you want to read more of my posts or
          projects, please contact me. If you have feedback or suggestions,
          please let me know. I'd love to hear from you.
        </p>
        <v-btn
          class="mt-4 ml-9"
          style="background-color: #3bf4fb"
          data-aos="fade-left"
        >
          <a
            href="https://web.facebook.com/mrr.smeykm/"
            target="_blank"
            class="text-decoration-none text-black"
            >Read more</a
          >
        </v-btn>
      </div>
    </div>
  </div>
</template>
