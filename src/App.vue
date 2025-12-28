<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const drawer = ref(false);
const windowWidth = ref(window.innerWidth);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function closeDrawer() {
  if (windowWidth.value < 960) {
    drawer.value = false;
  }
}

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value >= 960) {
    drawer.value = false; // close drawer on desktop since no sidebar
  }
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<template>
  <v-app class="bg-dark" style="color: #3bf4fb">
    <!-- Navigation Drawer for mobile only -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      width="260"
      class="bg-dark"
      v-if="windowWidth < 960"
    >
      <!-- Close Button -->
      <div class="d-flex justify-end pa-2">
        <v-btn icon @click="closeDrawer">
          <v-icon color="#3bf4fb">mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Mobile Navigation Links -->
      <v-list nav dense>
        <v-list-item>
          <router-link to="/" class="menu-link" @click="closeDrawer"
            >Home</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="/about" class="menu-link" @click="closeDrawer"
            >About</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="/education" class="menu-link" @click="closeDrawer"
            >Experience</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="/project" class="menu-link" @click="closeDrawer"
            >Project</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="/contact" class="menu-link" @click="closeDrawer"
            >Contact</router-link
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar
      app
      flat
      color="transparent"
      class="d-flex justify-space-between align-center"
    >
      <v-container
        class="d-flex justify-space-between align-center pa-0 mt-10"
        style="width: 80%; margin: 0 auto"
      >
        <h2
          class="text-h4 font-weight-bold"
          style="color: #3bf4fb; user-select: none"
        >
          Junior Web.
        </h2>

        <!-- Desktop Horizontal Menu -->
        <div
          v-if="windowWidth >= 960"
          class="d-flex gap-6"
          style="font-weight: 500; font-size: 22px"
        >
          <router-link to="/" class="menu-link">Home</router-link>
          <router-link to="/about" class="menu-link">About</router-link>
          <router-link to="/education" class="menu-link"
            >Experience</router-link
          >
          <router-link to="/project" class="menu-link">Project</router-link>
          <router-link to="/contact" class="menu-link">Contact</router-link>
        </div>

        <!-- Hamburger toggle only on mobile -->
        <v-btn icon @click="toggleDrawer" class="d-md-none">
          <v-icon color="#3bf4fb" size="28">mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container class="py-8">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.menu-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 16px;
  display: block;
  transition: color 0.3s;
  user-select: none;
}

.menu-link:hover,
.router-link-active {
  color: #3bf4fb;
}

/* Desktop horizontal menu links should be inline */
.d-flex.gap-6 > .menu-link {
  display: inline-block;
  padding: 10px 12px;
}
</style>
