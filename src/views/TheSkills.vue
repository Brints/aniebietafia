<script setup lang="ts">
import SkillsDisplay from "../components/layout/SkillsDisplay.vue";
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <h2 class="font-roboto text-center text-2xl md:text-3xl font-bold text-indigo-400 mb-6">Skills</h2>

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
    >
      I am proficient in a variety of programming languages and frameworks. My expertise includes Java, Spring Boot,
      Node.js, Express, Vue.js, Python, FastAPI, Django and Tailwind CSS. I have also worked with various databases such
      as MongoDB and PostgresSQL. I am always eager to learn new technologies and improve my skills.
    </p>

    <!-- Skills List -->
    <div class="font-lora grid gap-4 justify-center" style="grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr))">
      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Backend Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="java.png" alt="Java" skill="Java" />
          <SkillsDisplay link="c.jpeg" alt="C-Programming" skill="C Programming" />
          <SkillsDisplay link="node.jpeg" alt="Node.js" skill="Node.js" />
          <SkillsDisplay link="python.jpeg" alt="Python" skill="Python" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Database Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="mongodb.png" alt="MongoDB" skill="MongoDB" />
          <SkillsDisplay link="postgres.jpeg" alt="PostgreSQL" skill="PostgreSQL" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Frontend Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="vue.png" alt="Vue.js" skill="Vue.js" />
          <SkillsDisplay link="angular.png" alt="Angular" skill="Angular" />
          <SkillsDisplay link="tailwindcss.png" alt="Tailwind CSS" skill="Tailwind CSS" />
          <SkillsDisplay link="typescript.png" alt="TypeScript" skill="TypeScript" />
          <SkillsDisplay link="js.jpeg" alt="JavaScript" skill="JavaScript" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Backend Frameworks</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="express.png" alt="Express" skill="Express" />
          <SkillsDisplay link="fastapi.png" alt="FastAPI" skill="FastAPI" />
          <SkillsDisplay link="django.png" alt="Django" skill="Django" />
          <SkillsDisplay link="spring.png" alt="Spring Boot" skill="Spring Boot" />
          <SkillsDisplay link="nest.png" alt="NestJS" skill="NestJS" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Testing Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="jest.png" alt="Jest" skill="Jest" />
          <SkillsDisplay link="junit.png" alt="JUnit" skill="JUnit" />
          <SkillsDisplay link="supertest.png" alt="Supertest" skill="Supertest" />
          <SkillsDisplay link="mockito.png" alt="Mockito" skill="Mockito" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Version Control</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="git.png" alt="Git" skill="Git" />
          <SkillsDisplay link="github.png" alt="GitHub" skill="GitHub" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Deployment Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="heroku.png" alt="Heroku" skill="Heroku" />
          <SkillsDisplay link="aws.png" alt="AWS" skill="AWS" />
          <SkillsDisplay link="docker.jpeg" alt="Docker" skill="Docker" />
          <SkillsDisplay link="linux.png" alt="Linux" skill="Linux" />
        </div>
      </div>

      <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Other Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2">
          <SkillsDisplay link="swagger.png" alt="Swagger" skill="Swagger" />
          <SkillsDisplay link="jwt.png" alt="JWT" skill="JWT" />
          <SkillsDisplay link="bcrypt.png" alt="Bcrypt" skill="Bcrypt" />
        </div>
      </div>
    </div>
  </section>
</template>
<!-- class="font-lora grid gap-4 justify-center" style="grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr)) -->
<style lang="css" scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
