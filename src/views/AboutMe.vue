<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Image Section -->
    <div class="flex justify-center items-center">
      <img
        src="../assets/images/about-me.png"
        alt="About Me"
        class="rounded-lg shadow-xl max-w-full h-auto object-cover"
      />
    </div>

    <!-- Text Content -->
    <div>
      <h2 class="text-2xl md:text-3xl font-bold text-indigo-400 mb-4">About Me</h2>
      <div class="space-y-5 text-base leading-relaxed">
        <p>
          I am a passionate software engineer with a strong foundation in backend development. My expertise lies in
          Java, Spring Boot, Node.js, Nestjs, Express, TypeScript, and Python. I have a knack for building robust and
          scalable applications that meet the needs of users and businesses alike.
        </p>
        <p>
          My experience with Java and Spring Boot has equipped me with the skills to develop enterprise-level
          applications, while my proficiency in Node.js and TypeScript allows me to create fast and efficient
          server-side solutions.
        </p>
        <p>
          I am always eager to learn new technologies and improve my skills. I believe that continuous learning is key
          to staying relevant in the ever-evolving tech landscape.
        </p>
        <p>
          In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and
          staying updated with the latest trends in technology.
        </p>
        <p>
          I am looking forward to the next challenge in my career and am excited about the possibility of working with
          like-minded individuals who share my passion for technology and innovation.
        </p>
        <p>Feel free to reach out to me through the contact section or connect with me on LinkedIn.</p>
        <p class="text-indigo-300 font-semibold">Let's build something great together!</p>
      </div>
      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
        >
          View Resume
        </a>
        <a
          href="#contact"
          class="px-6 py-2 bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold rounded-lg transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
