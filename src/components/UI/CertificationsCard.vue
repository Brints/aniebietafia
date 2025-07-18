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
  return `https://res.cloudinary.com/aniebietafia/image/upload/v1752795445/certifications/${props.image}`;
});
</script>

<!-- Certifications Card -->
<template>
  <div class="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <img :src="imageSrc" :alt="alt" class="w-full h-52 object-cover" />
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="font-roboto text-xl font-bold text-gray-200 mb-2">{{ title }}</h3>
      <p class="font-lora text-gray-400 mb-4 flex-grow">{{ description }}</p>
      <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300 self-center"
      >
        View Certification
      </a>
    </div>
  </div>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
</style>