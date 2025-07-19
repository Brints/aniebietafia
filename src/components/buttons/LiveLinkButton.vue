<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  link: string;
  isIssue?: boolean;
}>();

const buttonText = computed(() => (props.isIssue ? "GitHub Issue Link" : "Live Link"));
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 text-center"
  >
    {{ buttonText }}
  </a>
</template>
