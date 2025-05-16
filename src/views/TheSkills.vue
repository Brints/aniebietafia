<script setup lang="ts"></script>

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
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/java.png" alt="Java" class="w-100 h-30 mb-2" />
        <p class="text-gray-200">Java</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/spring.png" alt="Spring Boot" class="w-100 h-30 mb-2" />
        <p class="text-gray-200">Spring Boot</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/nodejs.png" alt="Node.js" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">Node.js</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/vuejs.png" alt="Vue.js" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">Vue.js</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/python.png" alt="Python" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">Python</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/fastapi.png" alt="FastAPI" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">FastAPI</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/django.png" alt="Django" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">Django</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/tailwind.png" alt="Tailwind CSS" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">Tailwind CSS</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/mongodb.png" alt="MongoDB" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">MongoDB</p>
      </div>
      <div class="flex flex-col items-center w-32 mb-4">
        <img src="../assets/skills/postgresql.png" alt="PostgreSQL" class="w-16 h-16 mb-2" />
        <p class="text-gray-200">PostgreSQL</p>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
