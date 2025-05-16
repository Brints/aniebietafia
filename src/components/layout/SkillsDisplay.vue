<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "vue";
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
});
const imageSrc = computed(() => {
  return `/src/assets/skills/${props.link}`;
});
</script>

<template>
  <div class="flex flex-col items-center w-32 mb-4">
    <img :src="imageSrc" :alt="alt" class="w-100 h-30 mb-2" />
    <p class="text-gray-200">
      {{ props.skill }}
    </p>
  </div>
</template>
