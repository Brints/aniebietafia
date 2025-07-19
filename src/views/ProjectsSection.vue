<script setup lang="ts">
import ProjectsCard from "../components/UI/ProjectsCard.vue";
import LiveLinkButton from "../components/buttons/LiveLinkButton.vue";
import GitHubRepoButton from "../components/buttons/GitHubRepoButton.vue";
import TechTools from "../components/buttons/TechTools.vue";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
import { projects } from "../data/projects";
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Projects" />

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
    >
      Here are some of the projects I have worked on. Each one showcases my skills and expertise in various
      technologies. These technologies include Java, Spring Boot, Node.js, Express, Vue.js, Python, FastAPI, Django and
      Tailwind CSS. I have also worked with various databases such as MongoDB and PostgresSQL. Each project is a
      testament to my ability to adapt and learn new technologies quickly.
    </p>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <ProjectsCard v-for="(project, index) in projects" :key="index">
        <template #header>
          <h3 class="text-lg font-semibold">{{ project.title }}</h3>
        </template>
        <template #description>
          {{ project.description }}
        </template>
        <template #tools>
          <h4 class="text-lg font-semibold">Tech Stack</h4>
          <TechTools :tools="project.tools" />
        </template>
        <template #actions>
          <div class="grid grid-cols-2 gap-8">
            <LiveLinkButton v-if="project.liveLink" :link="project.liveLink" />
            <LiveLinkButton v-if="project.issueLink" :link="project.issueLink" :is-issue="true" />
            <GitHubRepoButton v-if="project.codeLink" :link="project.codeLink" />
          </div>
        </template>
      </ProjectsCard>
    </div>
  </section>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
