<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  tools: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const formattedTools = computed(() => {
  return props.tools.map((tool) => tool.replace(/-/g, " "));
});
</script>

<template>
  <div class="flex flex-wrap gap-1 justify-start items-center">
    <div
      v-for="(tool, index) in formattedTools"
      :key="index"
      class="text-sm font-semibold py-1 px-2 shadow-md transition-transform hover:scale-105 rounded-lg even:bg-gray-500 even:text-gray-300 odd:bg-gray-600 odd:text-gray-100"
    >
      {{ tool }}
    </div>
  </div>
</template>
