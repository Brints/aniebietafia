<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "vue";
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const imageSrc = computed(() => {
  return `/src/assets/certifications/${props.image}`;
});
</script>

<!-- Certifications Card -->
<template>
  <div class="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
    <img :src="imageSrc" :alt="alt" class="w-full h-50 mb-4 rounded-2xl" />
    <h3 class="text-xl font-bold text-gray-200 mb-2">{{ title }}</h3>
    <p class="text-gray-400 mb-4">{{ description }}</p>
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300"
    >
      View Certification
    </a>
  </div>
</template>
