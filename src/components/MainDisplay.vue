<script setup lang="ts">
import TheHeader from "./layout/TheHeader.vue";
import AboutMe from "../views/AboutMe.vue";
import TheFooter from "./layout/TheFooter.vue";
import ProjectsSection from "../views/ProjectsSection.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header-section sticky top-0 z-50 bg-gray-900 shadow-md">
      <TheHeader />
    </div>

    <div class="about-me-section">
      <AboutMe />
    </div>

    <div class="projects-section">
      <ProjectsSection />
    </div>

    <div class="footer-section">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped></style>
