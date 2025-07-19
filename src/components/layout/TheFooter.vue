<script setup lang="ts">
import { computed } from "vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import LinkedInIcon from "../icons/LinkedInIcon.vue";
import GitHubIcon from "../icons/GitHubIcon.vue";

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/teibeina001", icon: TwitterIcon },
  { name: "LinkedIn", url: "https://linkedin.com/in/aniebietafia", icon: LinkedInIcon },
  { name: "GitHub", url: "https://github.com/aniebietafia", icon: GitHubIcon },
];
</script>

<template>
  <!-- footer section -->
  <footer class="lora-about-me bg-gray-800 text-white py-6 px-4 shadow-lg">
    <div
        class="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4"
    >
      <div class="text-sm">
        &copy; {{ currentYear }} - Aniebiet's Portfolio. All rights reserved.
      </div>
      <div class="flex space-x-4">
        <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            :aria-label="`Link to my ${link.name} profile`"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <component :is="link.icon" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.lora-about-me {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>