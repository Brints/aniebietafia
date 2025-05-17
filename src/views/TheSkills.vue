<script setup lang="ts">
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Skills" />

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
    >
      I am proficient in a variety of programming languages and frameworks. My expertise includes Java, Spring Boot,
      Node.js, Express, Vue.js, Python, FastAPI, Django and Tailwind CSS. I have also worked with various databases such
      as MongoDB and PostgresSQL. I am always eager to learn new technologies and improve my skills.
    </p>

    <!-- Skills List -->
    <div class="font-lora flex flex-wrap gap-4">
      <!-- <div class="col-span-full"> -->
      <!-- <h3 class="text-lg font-bold text-gray-300">Backend Tools</h3> -->
      <!-- <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://www.java.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
          alt="Java Badge"
        />
      </a>
      <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
          alt="C Programming Badge"
        />
      </a>
      <a href="https://nodejs.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
          alt="Node.js Badge"
        />
      </a>
      <a href="https://www.python.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
          alt="Python Badge"
        />
      </a>
      <!-- </div> -->
      <!-- </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Database Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://www.mongodb.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
          alt="MongoDB Badge"
        />
      </a>
      <a href="https://www.postgresql.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"
          alt="PostgreSQL Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Frontend Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://vuejs.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"
          alt="Vue.js Badge"
        />
      </a>
      <a href="https://angular.io/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
          alt="Angular Badge"
        />
      </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="Tailwind CSS Badge"
        />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
          alt="TypeScript Badge"
        />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="JavaScript Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Backend Frameworks</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://expressjs.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"
          alt="Express Badge"
        />
      </a>
      <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"
          alt="FastAPI Badge"
        />
      </a>
      <a href="https://www.djangoproject.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
          alt="Django Badge"
        />
      </a>
      <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"
          alt="Spring Boot Badge"
        />
      </a>
      <a href="https://nestjs.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"
          alt="NestJS Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Testing Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://jestjs.io/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
          alt="Jest Badge"
        />
      </a>
      <a href="https://junit.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white"
          alt="JUnit Badge"
        />
      </a>
      <a href="https://github.com/visionmedia/supertest" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Supertest-333333?style=for-the-badge&logo=supertest&logoColor=white"
          alt="Supertest Badge"
        />
      </a>
      <a href="https://site.mockito.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Mockito-4CAF50?style=for-the-badge&logo=mockito&logoColor=white"
          alt="Mockito Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Version Control</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://git-scm.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
          alt="Git Badge"
        />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
          alt="GitHub Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Deployment Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://www.heroku.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
          alt="Heroku Badge"
        />
      </a>
      <a href="https://aws.amazon.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
          alt="AWS Badge"
        />
      </a>
      <a href="https://www.docker.com/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
          alt="Docker Badge"
        />
      </a>
      <a href="https://www.linux.org/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
          alt="Linux Badge"
        />
      </a>
      <!-- </div>
      </div> -->

      <!-- <div class="col-span-full">
        <h3 class="text-lg font-bold text-gray-300">Other Tools</h3>
        <div class="flex flex-wrap gap-4 mt-2"> -->
      <a href="https://swagger.io/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"
          alt="Swagger Badge"
        />
      </a>
      <a href="https://jwt.io/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
          alt="JWT Badge"
        />
      </a>
      <a href="https://github.com/kelektiv/node.bcrypt.js/" target="_blank" rel="noopener">
        <img
          src="https://img.shields.io/badge/Bcrypt-004488?style=for-the-badge&logo=lock&logoColor=white"
          alt="Bcrypt Badge"
        />
      </a>
      <!-- </div>
      </div> -->
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
