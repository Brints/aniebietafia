<script setup lang="ts">
import { useRoute } from "vue-router";

interface NavLink {
  name: string;
  to: string;
  icon?: string;
}

const navLinks: NavLink[] = [
  { name: 'About', to: 'about', icon: '🧑‍💻' },
  { name: 'Projects', to: 'projects', icon: '🚀' },
  { name: 'Elevator Pitch', to: 'elevator-pitch', icon: '💡' },
  { name: 'Blogs', to: 'blogs', icon: '📝' },
  { name: 'Skills', to: 'skills', icon: '⚡' },
  { name: 'Certifications', to: 'certifications', icon: '🏆' },
  { name: 'Contact', to: 'contact', icon: '📧' }
];

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();

const isActive = (link: NavLink) => {
  return route.name === link.to;
};
</script>

<template>
  <nav role="navigation" aria-label="Main navigation">
    <ul
      :class="[
        'font-lora',
        'font-medium',
        'text-sm',
        'md:text-base',
        props.isMobile ? 'flex-col space-y-3' : 'flex space-x-8 lg:space-x-10',
      ]"
    >
      <li v-for="link in navLinks" :key="link.to" class="relative">
        <router-link
          :to="{ name: link.to }"
          class="nav-link group relative flex items-center gap-2 transition-all duration-300 ease-in-out"
          :class="[
            isMobile
              ? [
                  'p-3 rounded-xl text-center justify-center',
                  isActive(link)
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-700/50 hover:bg-gray-600 hover:text-white backdrop-blur-sm'
                ]
              : [
                  'px-2 py-1 rounded-md',
                  isActive(link)
                    ? 'text-indigo-400'
                    : 'text-gray-300 hover:text-white'
                ]
          ]"
          :aria-current="isActive(link) ? 'page' : undefined"
        >
          <!-- Icon (mobile only) -->
          <span v-if="isMobile && link.icon" class="text-lg">{{ link.icon }}</span>

          <!-- Link text -->
          <span class="relative z-10">{{ link.name }}</span>

          <!-- Desktop active indicator -->
          <div
            v-if="!isMobile"
            class="absolute bottom-0 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ease-out"
            :class="isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'"
          ></div>

          <!-- Desktop hover background -->
          <div
            v-if="!isMobile"
            class="absolute inset-0 bg-indigo-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>

          <!-- Active section indicator dot -->
          <div
            v-if="!isMobile && isActive(link)"
            class="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"
          ></div>
        </router-link>

        <!-- Mobile active indicator -->
        <div
          v-if="isMobile && isActive(link)"
          class="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-indigo-400 rounded-r-full"
        ></div>
      </li>
    </ul>

    <!-- Progress indicator for desktop -->
    <div v-if="!isMobile" class="hidden lg:block mt-4">
      <div class="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-indigo-400 to-amber-500 transition-all duration-500 ease-out rounded-full"
          :style="{ width: `${((navLinks.findIndex(link => isActive(link)) + 1) / navLinks.length) * 100}%` }"
        ></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>