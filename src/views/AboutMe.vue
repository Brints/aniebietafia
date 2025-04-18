<script setup lang="ts">
import ContactMe from "../components/buttons/ContactMe.vue";
import ViewResume from "../components/buttons/ViewResume.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Image Section -->
    <div class="flex justify-center items-center">
      <div
        class="w-full max-w-xl md:max-w-2xl lg:max-w-3xl overflow-hidden rounded-xl shadow-2xl transition-all duration-500"
      >
        <img
          src="../assets/images/about-me.png"
          alt="About Me"
          class="w-full h-auto object-cover transform scale-95 hover:scale-100 transition-transform duration-700 ease-in-out rounded-xl"
        />
      </div>
    </div>

    <!-- Text Content -->
    <div>
      <h2 class="roboto-about-me text-center text-2xl md:text-3xl font-bold text-indigo-400 mb-6">About Me</h2>

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
.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.roboto-about-me {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

.noto-color-emoji-regular {
  font-family: "Noto Color Emoji", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.playfair-display-about-me {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.lora-about-me {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
