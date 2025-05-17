<script lang="ts" setup></script>

<template>
  <header class="bg-gray-800 text-white py-4 px-16 flex items-center justify-between">
    <div class="roboto-about-me text-2xl font-bold flex flex-col items-center">
      <h2>Aniebiet <span class="text-amber-700 uppercase">Afia</span></h2>
      <h2 class="text-indigo-400">Portfolio</h2>
    </div>
    <nav>
      <ul class="font-lora flex space-x-10 text-sm md:text-base font-medium">
        <li>
          <a
            href="#about"
            class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
            >About</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="#skills"
            class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
            >Skills</a
          >
        </li>
        <li>
          <a
            href="#certifications"
            class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
            >Certifications</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="css" scoped>
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

.font-lora {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
