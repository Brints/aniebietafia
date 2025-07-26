<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  shield: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="props.link" target="_blank" rel="noopener">
    <img :src="props.shield" :alt="props.alt" />
  </a>
</template>
