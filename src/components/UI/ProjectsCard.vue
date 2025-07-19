<script setup lang="ts">
import { computed } from "vue";
import type { Project } from "../../interfaces/project.ts";

const props = defineProps<{
  project: Project;
}>();

defineEmits<{
  openModal: [project: Project];
}>();

const statusBadgeClass = computed(() => {
  switch (props.project.status) {
    case "completed":
      return "bg-green-500 text-white";
    case "in-progress":
      return "bg-yellow-500 text-gray-900";
    case "planning":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
});
</script>

<template>
  <div class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 group">
    <!-- Project Image -->
    <div v-if="project.image" class="relative h-48 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

      <!-- Status Badge -->
      <div class="absolute top-3 right-3">
        <span
          :class="statusBadgeClass"
          class="px-2 py-1 rounded-full text-xs font-medium"
        >
          {{ project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ') }}
        </span>
      </div>

      <!-- Featured Badge -->
      <div v-if="project.featured" class="absolute top-3 left-3">
        <span class="bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
          ⭐ Featured
        </span>
      </div>
    </div>

    <!-- Default gradient background when no image -->
    <div v-else class="relative h-48 bg-gradient-to-br from-blue-600 to-purple-700">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-6xl opacity-20">
          {{ project.category === 'Frontend' ? '🎨' : project.category === 'Backend' ? '⚙️' : '💻' }}
        </div>
      </div>

      <!-- Status Badge -->
      <div class="absolute top-3 right-3">
        <span
          :class="statusBadgeClass"
          class="px-2 py-1 rounded-full text-xs font-medium"
        >
          {{ project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ') }}
        </span>
      </div>

      <!-- Featured Badge -->
      <div v-if="project.featured" class="absolute top-3 left-3">
        <span class="bg-yellow-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
          ⭐ Featured
        </span>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-6 space-y-4">
      <!-- Header with Category -->
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <slot name="header"></slot>
          <span class="inline-block mt-1 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
            {{ project.category }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <div class="text-gray-300 text-sm leading-relaxed">
        <slot name="description"></slot>
      </div>

      <!-- Stats (if available) -->
      <div v-if="project.stats" class="flex items-center gap-4 text-xs text-gray-400">
        <div v-if="project.stats.stars" class="flex items-center gap-1">
          <span>⭐</span>
          <span>{{ project.stats.stars }}</span>
        </div>
        <div v-if="project.stats.forks" class="flex items-center gap-1">
          <span>🍴</span>
          <span>{{ project.stats.forks }}</span>
        </div>
        <div v-if="project.stats.contributors" class="flex items-center gap-1">
          <span>👥</span>
          <span>{{ project.stats.contributors }}</span>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="space-y-2">
        <slot name="tools"></slot>
      </div>

      <!-- Actions -->
      <div class="pt-4 border-t border-gray-700">
        <div class="flex items-center justify-between">
          <slot name="actions"></slot>
          <button
            @click="$emit('openModal', project)"
            class="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
