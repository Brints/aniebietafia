<script setup lang="ts">
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
</script>

<template>
  <BracketLikeCurve title="Elevator Pitch" />
  <section class="elevator-pitch flex flex-col items-center p-6 md:p-12 text-gray-300">
    <div class="video-wrapper">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Elevator Pitch Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.elevator-pitch {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16/9;
  margin-top: 1rem;
}
.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
}
</style>