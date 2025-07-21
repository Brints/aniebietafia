<script setup lang="ts">
import TheHeader from "./layout/TheHeader.vue";
// import AboutMe from "../views/AboutMe.vue";
import TheFooter from "./layout/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header-section top-0 z-50 bg-gray-900 shadow-md">
      <TheHeader />
    </div>

    <router-view></router-view>

    <div class="footer-section">
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #1f2937; /* Gray-900 */
  color: #d1d5db; /* Gray-300 */
}
.header-section {
  background-color: #1f2937; /* Gray-900 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
