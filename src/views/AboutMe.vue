<script setup lang="ts">
import ContactMe from "../components/buttons/ContactMe.vue";
import ViewResume from "../components/buttons/ViewResume.vue";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Image -->
    <div class="w-full">
      <svg
        class="w-full h-auto object-cover transform scale-95 hover:scale-100 transition-transform duration-700 ease-in-out rounded-xl"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <rect width="800" height="600" fill="#111827" />
          <g filter="url(#filter0_f_1_2)">
            <circle cx="400" cy="300" r="100" fill="#6366F1" />
          </g>
          <g filter="url(#filter1_f_1_2)">
            <circle cx="200" cy="400" r="50" fill="#818CF8" />
          </g>
          <g filter="url(#filter2_f_1_2)">
            <circle cx="600" cy="200" r="75" fill="#A5B4FC" />
          </g>
        </g>
        <g class="text-gray-600" stroke="currentColor" stroke-width="2">
          <path d="M0 200 L800 200" />
          <path d="M0 400 L800 400" />
          <path d="M200 0 L200 600" />
          <path d="M400 0 L400 600" />
          <path d="M600 0 L600 600" />
        </g>
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-dasharray="500"
          class="text-6xl font-bold text-gray-500"
        >
          ABOUT ME
          <animate
            attributeName="stroke-dashoffset"
            values="500;0;0;500;500"
            keyTimes="0;0.5;0.7;0.9;1"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="none;none;currentColor;currentColor;none"
            keyTimes="0;0.5;0.7;0.9;1"
            dur="6s"
            repeatCount="indefinite"
          />
        </text>
        <defs>
          <filter
            id="filter0_f_1_2"
            x="200"
            y="100"
            width="400"
            height="400"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
            id="filter1_f_1_2"
            x="50"
            y="250"
            width="300"
            height="300"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
            id="filter2_f_1_2"
            x="425"
            y="25"
            width="350"
            height="350"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
        </defs>
      </svg>
    </div>

    <!-- Text Content -->
    <div>
      <BracketLikeCurve title="About Me" />

      <div class="lora-about-me space-y-4 text-base leading-relaxed">
        <p
            class="opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:translate-y-0 hover:opacity-100"
        >
          I am a passionate software engineer with a strong foundation in backend development. My expertise lies in
          Java, Spring Boot, Node.js, NestJS, Express, TypeScript, and Python.
        </p>

        <p
            class="opacity-80 border-l-4 border-indigo-500 pl-4 transform transition duration-700 ease-in-out translate-y-3 hover:translate-y-0 hover:opacity-100"
        >
          My experience with Java and Spring Boot has equipped me with the skills to develop enterprise-level
          applications, while my proficiency in Node.js and TypeScript allows me to create fast and efficient
          server-side solutions.
        </p>

        <p
            class="opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:translate-y-0 hover:opacity-100"
        >
          I am always eager to learn new technologies and improve my skills. I believe that continuous learning is key
          to staying relevant in the ever-evolving tech landscape.
        </p>

        <p
            class="opacity-80 border-l-4 border-indigo-500 pl-4 transform transition duration-700 ease-in-out translate-y-3 hover:translate-y-0 hover:opacity-100"
        >
          I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with
          the latest trends in technology.
        </p>

        <p
            class="opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:translate-y-0 hover:opacity-100"
        >
          I am looking forward to the next challenge in my career and am excited about the possibility of working with
          like-minded individuals who share my passion for technology and innovation.
        </p>

        <p class="text-indigo-300 font-medium italic transition duration-700 ease-in-out hover:text-indigo-400">
          Feel free to reach out to me through the contact section or connect with me on LinkedIn.
        </p>

        <p class="text-indigo-400 font-semibold text-lg animate-pulse">Let's build something great together!</p>
      </div>

      <div class="mt-8 flex flex-wrap gap-4">
        <ViewResume />
        <ContactMe />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lora-about-me {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>