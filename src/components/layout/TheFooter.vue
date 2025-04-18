<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date().getFullYear());
const year = ref(date.value);
const month = ref<string>("");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

month.value = months[new Date().getMonth()];
year.value = new Date().getFullYear();

setInterval(() => {
  date.value = new Date().getFullYear();
  month.value = months[new Date().getMonth()];
  year.value = new Date().getFullYear();
}, 1000 * 60 * 60 * 24); // Update every day

const socialLinks = ref([
  { name: "Twitter", url: "https://twitter.com/teibeina001" },
  { name: "LinkedIn", url: "https://linkedin.com/in/aniebietafia" },
  { name: "GitHub", url: "https://github.com/aniebietafia" },
]);
</script>

<template>
  <!-- footer section -->
  <footer class="lora-about-me bg-gray-900 text-white py-4 mt-0.5 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-sm flex flex-col">
        &copy; {{ month }} {{ year }} - Aniebiet's Portfolio
        <span class="text-gray-400">All rights reserved</span>
      </div>
      <div class="flex space-x-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="text-gray-400 hover:text-white"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
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
