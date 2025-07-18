<script setup lang="ts">
import { ref, defineProps } from 'vue';

interface NavLink {
  name: string;
  to: string;
}

const navLinks = ref<NavLink[]>([
  { name: 'About', to: '#about' },
  { name: 'Projects', to: '#projects' },
  { name: 'Elevator Pitch', to: '#elevator-pitch' },
  { name: 'Skills', to: '#skills' },
  { name: 'Certifications', to: '#certifications' },
  { name: 'Contact', to: '#contact' }
]);

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <nav>
    <ul :class="['font-lora', 'font-medium', 'text-sm', 'md:text-base', props.isMobile ? 'flex-col space-y-6' : 'flex space-x-10']">
      <li v-for="link in navLinks" :key="link.to">
        <a
          :href="link.to"
          class="hover:text-indigo-400 hover:border-b-2 hover:border-indigo-400 transition-colors duration-300 border-b-2 border-transparent pb-1"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
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