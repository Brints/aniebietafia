<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  customClass: {
    type: String,
    default: "",
  },
  customStyle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section
      class="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transition-transform transform"
      :class="customClass"
      :style="customStyle"
  >
    <slot></slot>
  </section>
</template>