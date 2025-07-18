<script setup lang="ts">
import ProjectsCard from "../components/UI/ProjectsCard.vue";
import LiveLinkButton from "../components/buttons/LiveLinkButton.vue";
import GitHubRepoButton from "../components/buttons/GitHubRepoButton.vue";
import TechTools from "../components/buttons/TechTools.vue";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";

const unravelDocsTools = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Spring Security",
  "Thymeleaf",
  "Maven",
  "JUnit",
  "Mockito",
  "JPA",
  "Apache Tika",
  "Apache POI",
  "Tesseract OCR",
  "Docker",
  "AWS S3",
  "Hibernate",
  "REST API",
  "Swagger",
  "Angular",
];

const brintsEstateTools = [
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "TypeORM",
  "Vue.js",
  "Pinia",
  "Tailwind CSS",
  "Jest",
  "Supertest",
  "Heroku",
  "JWT",
  "Bcrypt",
];

const salesAgent = ["Java", "Spring Boot", "PostgreSQL", "MistralAI API", "Docker"];
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
      <ProjectsCard>
        <template #header>
          <h3 class="text-lg font-semibold">UnravelDocs</h3>
        </template>
        <template #description>
          UnravelDocs is a document management system that allows users to upload hardcopy documents and convert them
          into digital format. It uses OCR technology and provides a user-friendly interface. It is built using Java and
          Spring Boot.
        </template>
        <template #tools>
          <h4 class="text-lg font-semibold">Tech Stack</h4>
          <TechTools :tools="unravelDocsTools" />
        </template>
        <template #actions>
          <div class="grid grid-cols-2 gap-8">
            <LiveLinkButton link="https://myproject.live" />
            <GitHubRepoButton link="https://github.com/Brints/UnravelDocs" />
          </div>
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
          <h4 class="text-lg font-semibold">Tech Stack</h4>
          <TechTools :tools="brintsEstateTools" />
        </template>
        <template #actions>
          <div class="grid grid-cols-2 gap-8">
            <LiveLinkButton link="https://myproject.live" />
            <GitHubRepoButton link="https://github.com/Brints/nestjs-brints-group-estate" />
          </div>
        </template>
      </ProjectsCard>

      <ProjectsCard>
        <template #header>
          <h3 class="text-lg font-semibold">Sales Agent</h3>
        </template>
        <template #description>
          Sales Agent is an AI-Powered Integration tool that introduces a cutting-edge solution for business owners to discover potential leads with ease. By specifying their business type and target audience through a simple chat with a sales agent, users receive a curated list of relevant leads in an organized format. This streamlined process enhances customer outreach and supports business growth.
        </template>
        <template #tools>
          <h4 class="text-lg font-semibold">Tech Stack</h4>
          <TechTools :tools="salesAgent" />
        </template>
        <template #actions>
          <div class="grid grid-cols-2 gap-8">
            <LiveLinkButton link="https://github.com/telexintegrations/sales-agent" />
            <GitHubRepoButton link="https://github.com/telexintegrations/sales-agent" />
          </div>
        </template>
      </ProjectsCard>

      <ProjectsCard>
        <template #header>
          <h3 class="text-lg font-semibold">MyPortfolio</h3>
        </template>
        <template #description>
          MyPortfolio is a personal portfolio website that showcases my skills, projects, and experience. It is built
          using Vue.js and Tailwind CSS.
        </template>
        <template #tools>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Vue.js</span>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Tailwind CSS</span>
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
          <h3 class="text-lg font-semibold">MyPortfolio</h3>
        </template>
        <template #description>
          MyPortfolio is a personal portfolio website that showcases my skills, projects, and experience. It is built
          using Vue.js and Tailwind CSS.
        </template>
        <template #tools>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Vue.js</span>
          <span class="bg-indigo-500 text-white px-2 py-1 rounded-full">Tailwind CSS</span>
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
