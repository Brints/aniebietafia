<script setup lang="ts">
import type { Blog } from '../../interfaces/blog.ts';

const props = defineProps<Blog>();
</script>

<template>
  <div class="font-lora flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full p-3">
    <img :src="props.image" :alt="props.alt" class="w-full h-48 object-cover rounded-t-md" />
    <div class="p-3 flex flex-col flex-grow">
      <h3 class="font-roboto text-xl font-semibold text-gray-200 mb-2">{{ props.title }}</h3>
      <p class="text-gray-400 mb-4">{{ props.description }}</p>

      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{{ props.datePublished }}</span>
        <span>{{ props.platform }}</span>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in props.tags" :key="tag" class="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs">{{ tag }}</span>
      </div>

      <div class="mb-4 flex items-center justify-between text-sm text-gray-500">
        <span>Views: {{ props.views }}</span>
        <span>Likes: {{ props.likes }}</span>
        <span>Comments: {{ props.comments }}</span>
      </div>
    </div>

    <a :href="props.link"
       target="_blank"
       rel="noopener noreferrer"
       class="block bg-indigo-600 text-white text-center py-2 px-4 hover:bg-indigo-700 transition-colors duration-300 w-full rounded-b-md mt-auto mb-1">
      Read More
    </a>
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
