<script setup lang="ts">
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
import SkillBadge from "../components/unnamed/SkillBadge.vue";
import BaseCard from "../components/UI/BaseCard.vue";
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
    <div class="font-lora grid gap-4 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <BaseCard
        customClass="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"
        customStyle="transform transition duration-700 ease-in-out"
      >
        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Backend Tools</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.java.com/"
              alt="Java Badge"
              shield="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
            />
            <SkillBadge
              link="https://en.wikipedia.org/wiki/C_(programming_language)"
              alt="C Programming Badge"
              shield="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
            />
            <SkillBadge
              link="https://www.rust-lang.org/"
              alt="Rust Badge"
              shield="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white"
            />
            <SkillBadge
              alt="Go Badge"
              link="https://golang.org/"
              shield="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white"
            />
            <SkillBadge
              link="https://nodejs.org/"
              alt="Node.js Badge"
              shield="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            />
            <SkillBadge
              link="https://www.python.org/"
              alt="Python Badge"
              shield="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Backend Frameworks</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://expressjs.com/"
              shield="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"
              alt="Express Badge"
            />
            <SkillBadge
              link="https://fastapi.tiangolo.com/"
              shield="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"
              alt="FastAPI Badge"
            />
            <SkillBadge
              link="https://www.djangoproject.com/"
              shield="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
              alt="Django Badge"
            />
            <SkillBadge
              link="https://spring.io/projects/spring-boot"
              shield="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"
              alt="Spring Boot Badge"
            />
            <SkillBadge
              link="https://nestjs.com/"
              shield="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"
              alt="NestJS Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Database Tools</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.mongodb.com/"
              shield="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB Badge"
            />
            <SkillBadge
              link="https://www.postgresql.org/"
              shield="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Cloud Services</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.digitalocean.com/"
              shield="https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white"
              alt="DigitalOcean Badge"
            />
            <SkillBadge
              link="https://www.heroku.com/"
              shield="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
              alt="Heroku Badge"
            />

            <SkillBadge
              link="https://aws.amazon.com/"
              shield="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
              alt="AWS Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">APIs</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.graphql.com/"
              shield="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
              alt="GraphQL Badge"
            />
            <SkillBadge
              link="https://www.restapitutorial.com/"
              shield="https://img.shields.io/badge/REST-000000?style=for-the-badge&logo=rest&logoColor=white"
              alt="REST Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Package Managers</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.npmjs.com/"
              shield="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white"
              alt="NPM Badge"
            />
            <SkillBadge
              link="https://yarnpkg.com/"
              shield="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"
              alt="Yarn Badge"
            />
            <SkillBadge
              link="https://www.npmjs.com/"
              shield="https://img.shields.io/badge/Pip-3776AB?style=for-the-badge&logo=pypi&logoColor=white"
              alt="Pip Badge"
            />
            <SkillBadge
              link="https://pnpm.io/"
              shield="https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white"
              alt="PNPM Badge"
            />
            <SkillBadge
                link="https://maven.apache.org/"
                shield="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"
                alt="Maven Badge"
            />
          </div>
        </div>
      </BaseCard>

      <BaseCard
        customClass="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"
        customStyle="transform transition duration-700 ease-in-out"
      >
        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Frontend & Build Tools</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://webpack.js.org/"
              shield="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black"
              alt="Webpack Badge"
            />
            <SkillBadge
              link="https://vitejs.dev/"
              shield="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"
              alt="Vite Badge"
            />

            <SkillBadge
              link="https://html.spec.whatwg.org/"
              shield="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML Badge"
            />

            <SkillBadge
              link="https://www.w3.org/Style/CSS/"
              shield="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS Badge"
            />

            <SkillBadge
              link="https://www.typescriptlang.org/"
              shield="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript Badge"
            />
            <SkillBadge
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              shield="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Frontend Frameworks</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://vuejs.org/"
              shield="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D"
              alt="Vue.js Badge"
            />
            <SkillBadge
              link="https://angular.io/"
              shield="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
              alt="Angular Badge"
            />
            <SkillBadge
              link="https://tailwindcss.com/"
              shield="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="Tailwind CSS Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Testing Tools</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://jestjs.io/"
              shield="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
              alt="Jest Badge"
            />
            <SkillBadge
              link="https://junit.org/"
              shield="https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white"
              alt="JUnit Badge"
            />
            <SkillBadge
              link="https://github.com/visionmedia/supertest"
              shield="https://img.shields.io/badge/Supertest-333333?style=for-the-badge&logo=supertest&logoColor=white"
              alt="Supertest Badge"
            />
            <SkillBadge
              link="https://site.mockito.org/"
              shield="https://img.shields.io/badge/Mockito-4CAF50?style=for-the-badge&logo=mockito&logoColor=white"
              alt="Mockito Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Version Control</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://git-scm.com/"
              shield="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git Badge"
            />
            <SkillBadge
              link="https://github.com/"
              shield="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Deployment Tools & Containerization</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://www.docker.com/"
              shield="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker Badge"
            />
            <SkillBadge
              link="https://www.linux.org/"
              shield="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
              alt="Linux Badge"
            />

            <SkillBadge
              link="https://www.ansible.com/"
              shield="https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white"
              alt="Ansible Badge"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h3 class="text-lg font-bold text-gray-300">Other Tools</h3>
          <div class="flex flex-wrap gap-4 mt-2">
            <SkillBadge
              link="https://swagger.io/"
              shield="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"
              alt="Swagger Badge"
            />
            <SkillBadge
              link="https://jwt.io/"
              shield="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
              alt="JWT Badge"
            />
            <SkillBadge
              link="https://github.com/kelektiv/node.bcrypt.js/"
              shield="https://img.shields.io/badge/Bcrypt-004488?style=for-the-badge&logo=lock&logoColor=white"
              alt="Bcrypt Badge"
            />
          </div>
        </div>
      </BaseCard>
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
