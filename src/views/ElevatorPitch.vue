<script setup lang="ts">
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
</script>

<template>

  <section
    class="elevator-pitch p-6 md:p-12 bg-gray-900 text-gray-300"
  >
    <BracketLikeCurve title="Elevator Pitch" />
    <!-- Left Section (Placeholder) -->
    <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="w-full md:w-1/2 p-4 flex justify-center">
      <div
        class="h-80 w-full bg-gray-800 rounded-lg flex items-center justify-center shadow-lg p-4"
      >
        <svg
          class="w-full h-full text-gray-700"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" fill="none" />
          <rect
            x="20"
            y="20"
            width="160"
            height="120"
            rx="8"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          />
          <path d="M80 70 l40 30 l-40 30 Z" fill="currentColor" />
          <rect x="20" y="150" width="160" height="8" rx="4" />
          <rect x="40" y="165" width="120" height="8" rx="4" />
        </svg>
      </div>
    </div>

    <!-- Right Section (Video) -->
    <div class="w-full md:w-1/2 p-4">
      <div class="video-wrapper rounded-lg overflow-hidden shadow-lg">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Elevator Pitch Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}
</style>