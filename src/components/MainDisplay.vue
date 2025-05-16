<script setup lang="ts">
import TheHeader from "./layout/TheHeader.vue";
import AboutMe from "../views/AboutMe.vue";
import TheFooter from "./layout/TheFooter.vue";
import ProjectsSection from "../views/ProjectsSection.vue";
import TheSkills from "../views/TheSkills.vue";
import CertificationSection from "../views/CertificationSection.vue";
import ContactMe from "../views/ContactMe.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header-section sticky top-0 z-50 bg-gray-900 shadow-md">
      <TheHeader />
    </div>

    <div class="about-me-section" id="about">
      <AboutMe />
    </div>

    <div class="projects-section" id="projects">
      <ProjectsSection />
    </div>

    <div class="skills-section">
      <TheSkills />
    </div>

    <div class="certification-section" id="certifications">
      <CertificationSection />
    </div>

    <div class="contact-me-section" id="contact">
      <ContactMe />
    </div>

    <div class="footer-section">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped></style>
