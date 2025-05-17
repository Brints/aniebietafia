<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "vue";

const props = defineProps({
  tools: {
    type: Array as () => string[],
    required: true,
  },
});
const tools = computed(() => {
  return props.tools.map((tool) => {
    return tool.replace(/-/g, " ");
  });
});
</script>

<template>
  <div class="flex flex-wrap gap-1 justify-between items-center">
    <div
      v-for="(tool, index) in tools"
      :key="index"
      class="bg-gray-700 text-gray-200 text-sm font-semibold py-1 px-2 shadow-md transition-transform hover:scale-105 rounded-lg cursor-pointer"
      :class="{
        'bg-gray-500 text-gray-300': index % 2 === 0,
        'bg-gray-600 text-gray-100': index % 2 !== 0,
      }"
    >
      {{ tool }}
    </div>
  </div>
</template>
