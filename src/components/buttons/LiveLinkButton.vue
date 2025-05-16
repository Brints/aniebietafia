<script setup lang="ts">
import { defineProps } from "vue";

const { link } = defineProps<{
  link: string;
}>();
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 text-center"
  >
    Live Link
  </a>
</template>
