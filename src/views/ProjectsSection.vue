<script setup lang="ts">
import ProjectsCard from "../components/UI/ProjectsCard.vue";
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <h2 class="font-roboto text-center text-2xl md:text-3xl font-bold text-indigo-400 mb-6">Projects</h2>

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
    >
      Here are some of the projects I have worked on. Each one showcases my skills and expertise in various
      technologies.
    </p>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <ProjectsCard>
        <template #header>
          <h3 class="text-lg font-semibold">UnravelDocs</h3>
        </template>
        <template #description>
          UnravelDocs is a document management system that allows users to upload hardcopy documents and convert them
          into digital format. It uses OCR technology and provides a user-friendly interface.
        </template>
        <template #tools>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Java</span>
          <span class="bg-gray-700 px-2 py-1 rounded-full">Spring Boot</span>
        </template>
        <template #actions>
          <a href="https://myproject.live" target="_blank" class="action-btn bg-indigo-600 hover:bg-indigo-700">
            Live Demo
          </a>
          <a href="https://example.com" target="_blank" class="action-btn bg-gray-600 hover:bg-gray-700"> View Code </a>
        </template>
      </ProjectsCard>

      <ProjectsCard>
        <template #header>
          <h3 class="text-lg font-semibold">Brints Estate</h3>
        </template>
        <template #description>
          Brints Estate is a real estate management system that allows users to search for properties, schedule visits,
          and manage their listings. It provides a comprehensive solution for real estate agents and buyers.
        </template>
        <template #tools>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Node.js</span>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Express</span>
        </template>
        <template #actions>
          <a href="https://myproject.live" target="_blank" class="action-btn bg-indigo-600 hover:bg-indigo-700">
            Live Demo
          </a>
          <a href="https://example.com" target="_blank" class="action-btn bg-gray-600 hover:bg-gray-700"> View Code </a>
        </template>
      </ProjectsCard>
    </div>
  </section>
</template>

<style scoped>
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
