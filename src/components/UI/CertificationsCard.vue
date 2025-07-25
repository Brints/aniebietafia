<script setup lang="ts">
import { computed } from "vue";
import type { Certification } from "../../interfaces/certification.ts";

const props = defineProps<Certification>();

const imageSrc = computed(() => {
  return `https://res.cloudinary.com/aniebietafia/image/upload/v1752795445/certifications/${props.image}`;
});

const isExpiringSoon = computed(() => {
  if (!props.expirationDate) return false;
  const expirationDate = new Date(props.expirationDate);
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
  return expirationDate <= sixMonthsFromNow;
});
</script>

<!-- Certifications Card -->
<template>
  <div class="font-lora flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-indigo-500">
    <!-- Certificate Image -->
    <div class="relative">
      <img :src="imageSrc" :alt="alt" class="w-full h-48 object-cover" />
      <div class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
        {{ issuer }}
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-5 flex flex-col flex-grow">
      <!-- Title and Date -->
      <div class="mb-3">
        <h3 class="font-roboto text-lg font-bold text-gray-200 mb-1 leading-tight">{{ title }}</h3>
        <div class="flex items-center justify-between text-sm text-gray-400">
          <span>Earned: {{ dateEarned }}</span>
          <span v-if="expirationDate" :class="{ 'text-yellow-400': isExpiringSoon, 'text-red-400': isExpiringSoon }">
            Expires: {{ expirationDate }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <p class="font-lora text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
        {{ description }}
      </p>

      <!-- Skills Tags -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          <span
            v-for="skill in skills.slice(0, 3)"
            :key="skill"
            class="text-xs bg-indigo-900 text-indigo-200 px-2 py-1 rounded-full"
          >
            {{ skill }}
          </span>
          <span
            v-if="skills.length > 3"
            class="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
          >
            +{{ skills.length - 3 }} more
          </span>
        </div>
      </div>

      <!-- Credential ID -->
      <div v-if="credentialId" class="mb-4 text-xs text-gray-500">
        Credential ID: {{ credentialId }}
      </div>

      <!-- Action Button -->
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300 text-center text-sm font-medium"
      >
        View Certificate
      </a>
    </div>
  </div>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
</style>