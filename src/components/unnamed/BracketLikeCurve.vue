<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex justify-center">
    <div
      class="certifications-title-wrapper font-roboto text-center text-2xl md:text-3xl font-bold text-indigo-400 mb-6"
    >
      <span class="certifications-line"></span>
      <!-- Left bracket-like curve -->
      <svg
        class="certifications-bracket"
        width="18"
        height="40"
        viewBox="0 0 18 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2 Q4 20 16 38" stroke="#fff" stroke-width="2" fill="none" />
      </svg>
      <span class="roboto-text certifications-title text-indigo-400">{{ props.title }}</span>
      <!-- Right bracket-like curve (mirrored) -->
      <svg
        class="certifications-bracket"
        width="18"
        height="40"
        viewBox="0 0 18 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: scaleX(-1)"
      >
        <path d="M16 2 Q4 20 16 38" stroke="#fff" stroke-width="2" fill="none" />
      </svg>
      <span class="certifications-line"></span>
    </div>
  </div>
</template>

<style scoped>
.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.roboto-text {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

.certifications-title-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 1rem 0;
  justify-content: center;
}

.certifications-line {
  flex: 1;
  height: 2px;
  background: #fff;
  opacity: 0.5;
}

.certifications-bracket {
  display: block;
  height: 2em;
  width: auto;
}

.certifications-title {
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 1rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
</style>
