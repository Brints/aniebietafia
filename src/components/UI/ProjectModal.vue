<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
      @click="closeModal"
    >
      <div
        class="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl transform transition-all duration-300"
        @click.stop
      >
        <!-- Header -->
        <div class="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <h2 class="text-2xl font-bold text-white">{{ project?.title }}</h2>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {{ project?.category }}
              </span>
              <span
                :class="statusBadgeClass"
                class="px-3 py-1 rounded-full text-sm font-medium"
                v-if="project"
              >
                {{ project?.status.charAt(0).toUpperCase() + project?.status.slice(1).replace('-', ' ') }}
              </span>
            </div>
          </div>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
          >
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-6">
          <!-- Project Image -->
          <div v-if="project?.image" class="relative h-64 rounded-xl overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Stats Row -->
          <div v-if="project?.stats" class="flex items-center justify-center gap-8 p-4 bg-gray-900 rounded-xl">
            <div v-if="project.stats.stars" class="text-center">
              <div class="text-2xl font-bold text-yellow-400">{{ project.stats.stars }}</div>
              <div class="text-sm text-gray-400">Stars</div>
            </div>
            <div v-if="project.stats.forks" class="text-center">
              <div class="text-2xl font-bold text-blue-400">{{ project.stats.forks }}</div>
              <div class="text-sm text-gray-400">Forks</div>
            </div>
            <div v-if="project.stats.contributors" class="text-center">
              <div class="text-2xl font-bold text-green-400">{{ project.stats.contributors }}</div>
              <div class="text-sm text-gray-400">Contributors</div>
            </div>
          </div>

          <!-- Detailed Description -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">About This Project</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ project?.detailedDescription || project?.description }}
            </p>
          </div>

          <!-- Challenges & Achievements -->
          <div class="grid md:grid-cols-2 gap-6">
            <div v-if="project?.challenges?.length" class="space-y-3">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                🚧 Key Challenges
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="challenge in project.challenges"
                  :key="challenge"
                  class="text-gray-300 text-sm flex items-start gap-2"
                >
                  <span class="text-red-400 mt-1">•</span>
                  {{ challenge }}
                </li>
              </ul>
            </div>

            <div v-if="project?.achievements?.length" class="space-y-3">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                🏆 Achievements
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="achievement in project.achievements"
                  :key="achievement"
                  class="text-gray-300 text-sm flex items-start gap-2"
                >
                  <span class="text-green-400 mt-1">•</span>
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="space-y-3">
            <h4 class="text-lg font-semibold text-white">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tool in project?.tools"
                :key="tool"
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200"
              >
                {{ tool }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
            <a
              v-if="project?.liveLink"
              :href="project.liveLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              🚀 Live Demo
            </a>
            <a
              v-if="project?.codeLink"
              :href="project.codeLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              📝 View Code
            </a>
            <a
              v-if="project?.issueLink"
              :href="project.issueLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              🐛 Report Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '../../interfaces/project.ts';

const props = defineProps<{
  isOpen: boolean;
  project: Project | null;
}>();

const emit = defineEmits<{
  close: [];
}>();

const statusBadgeClass = computed(() => {
  if (!props.project) return '';

  switch (props.project.status) {
    case 'completed':
      return 'bg-green-500 text-white';
    case 'in-progress':
      return 'bg-yellow-500 text-gray-900';
    case 'planning':
      return 'bg-gray-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
});

const closeModal = () => {
  emit('close');
};
</script>
