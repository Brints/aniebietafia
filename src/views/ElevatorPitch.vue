<script setup lang="ts">
import BracketLikeCurve from "../components/tools/BracketLikeCurve.vue";
</script>

<template>

  <section
    class="elevator-pitch p-6 md:p-12 bg-gray-900 text-gray-300"
  >
    <BracketLikeCurve title="Elevator Pitch" variant="secondary"/>

    <!-- Left Section (Placeholder) -->
    <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="hidden md:flex w-full md:w-1/2 p-4 justify-center">
      <div
        class="h-80 w-full bg-gray-800 rounded-lg flex items-center justify-center shadow-lg p-4"
      >
        <svg
          class="w-full h-full text-gray-700 md:block"
          fill="currentColor"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" fill="none" />

          <!-- Animated "MY ELEVATOR PITCH" text -->
          <text
            x="100"
            y="20"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="none"
            stroke="currentColor"
            stroke-width="0.5"
            stroke-dasharray="200"
            stroke-dashoffset="200"
            class="text-sm font-bold"
          >
            MY ELEVATOR PITCH
            <animate
              attributeName="stroke-dashoffset"
              values="200;0;0;200;200"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill"
              values="none;none;currentColor;currentColor;none"
              dur="6s"
              repeatCount="indefinite"
            />
          </text>

          <!-- Animated subtitle text -->
          <text
            x="100"
            y="35"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="none"
            stroke="currentColor"
            stroke-width="0.3"
            stroke-dasharray="150"
            stroke-dashoffset="150"
            class="text-xs"
          >
            Get to know me in 60 seconds
            <animate
              attributeName="stroke-dashoffset"
              values="150;0;0;150;150"
              dur="6s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill"
              values="none;none;currentColor;currentColor;none"
              dur="6s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </text>

          <!-- Animated video frame -->
          <rect
            x="20"
            y="40"
            width="160"
            height="100"
            rx="8"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
            stroke-dasharray="320"
            stroke-dashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-320;-320;0"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="4;6;4"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>

          <!-- Animated play button -->
          <path
            d="M85 75 l30 20 l-30 20 Z"
            fill="currentColor"
            transform-origin="100 95"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>

          <!-- Animated progress bars -->
          <rect x="20" y="160" width="160" height="6" rx="3">
            <animate
              attributeName="width"
              values="0;160;160;0"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="40" y="170" width="120" height="6" rx="3">
            <animate
              attributeName="width"
              values="0;120;120;0"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>

          <!-- Floating dots animation -->
          <circle cx="50" cy="60" r="2" fill="currentColor" opacity="0.6">
            <animate
              attributeName="cy"
              values="60;50;60"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="150" cy="70" r="2" fill="currentColor" opacity="0.4">
            <animate
              attributeName="cy"
              values="70;60;70"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="70" cy="120" r="1.5" fill="currentColor" opacity="0.5">
            <animate
              attributeName="cx"
              values="70;80;70"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>

    <!-- Right Section (Video) -->
    <div class="w-full md:w-1/2 p-4">
      <div class="video-wrapper rounded-lg overflow-hidden shadow-lg">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/orzHd6DsSWw"
          title="Elevator Pitch Video"
          border="0"
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