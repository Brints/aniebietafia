<script setup lang="ts">
import { computed } from "vue";

interface TechToolsProps {
  tools: string[];
  variant?: 'default' | 'compact' | 'colorful';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<TechToolsProps>(), {
  variant: 'default',
  size: 'md'
});

const formattedTools = computed(() => {
  return props.tools.map((tool) => tool.replace(/-/g, " "));
});

const getToolClasses = computed(() => {
  const baseClasses = "font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 rounded-lg border";

  const sizeClasses = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-1.5 px-3",
    lg: "text-base py-2 px-4"
  };

  const variantClasses = {
    default: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700",
    compact: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 dark:hover:bg-blue-900/50",
    colorful: ""
  };

  return `${baseClasses} ${sizeClasses[props.size]} ${variantClasses[props.variant]}`;
});

const getColorfulClasses = (index: number) => {
  if (props.variant !== 'colorful') return '';

  const colors = [
    "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    "bg-green-100 text-green-800 border-green-200 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
    "bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
  ];

  return colors[index % colors.length];
};
</script>

<template>
  <div
    class="flex flex-wrap gap-2 justify-start items-center"
    role="list"
    aria-label="Technologies used"
  >
    <div
      v-for="(tool, index) in formattedTools"
      :key="tool"
      :class="[
        getToolClasses,
        props.variant === 'colorful' ? getColorfulClasses(index) : ''
      ]"
      role="listitem"
      :aria-label="`Technology: ${tool}`"
      class="cursor-default select-none"
    >
      {{ tool }}
    </div>
  </div>
</template>
