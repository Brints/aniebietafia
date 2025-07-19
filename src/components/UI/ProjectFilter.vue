<template>
  <div class="font-lora space-y-4">
    <!-- Filter Controls -->
    <div class="flex flex-wrap gap-4 items-center">
      <!-- Category Filter -->
      <div class="space-y-2">
        <label class="pr-2 text-sm font-medium text-gray-400">Category</label>
        <select
          v-model="selectedCategory"
          @change="$emit('update:category', selectedCategory)"
          class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-200"
        >
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Status Filter -->
      <div class="space-y-2">
        <label class="pr-2 text-sm font-medium text-gray-400">Status</label>
        <select
          v-model="selectedStatus"
          @change="$emit('update:status', selectedStatus)"
          class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-200"
        >
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ') }}
          </option>
        </select>
      </div>

      <!-- Featured Toggle -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-400">Show Featured Only</label>
        <label class="flex items-center cursor-pointer">
          <input
            v-model="showFeaturedOnly"
            type="checkbox"
            @change="$emit('update:featured', showFeaturedOnly)"
            class="sr-only"
          />
          <div class="relative">
            <div
              :class="showFeaturedOnly ? 'bg-blue-600' : 'bg-gray-600'"
              class="block w-10 h-6 rounded-full transition-colors duration-200"
            ></div>
            <div
              :class="showFeaturedOnly ? 'translate-x-4' : 'translate-x-0'"
              class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200"
            ></div>
          </div>
        </label>
      </div>

      <!--  Search Bar    -->
      <div class="relative">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects..."
            class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            @input="$emit('update:search', searchQuery)"
        />
        <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>

      <!-- Clear Filters -->
      <button
        @click="clearFilters"
        class="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 border border-gray-700 rounded-lg hover:border-gray-600"
      >
        Clear Filters
      </button>
    </div>

    <!-- Results Count -->
    <div class="text-sm text-gray-400">
      Showing {{ projectCount }} project{{ projectCount !== 1 ? 's' : '' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  categories: string[];
  statuses: string[];
  projectCount: number;
}>();

const emit = defineEmits<{
  'update:search': [query: string];
  'update:category': [category: string];
  'update:status': [status: string];
  'update:featured': [featured: boolean];
  'clear': [];
}>();

const searchQuery = ref('');
const selectedCategory = ref('All');
const selectedStatus = ref('All');
const showFeaturedOnly = ref(false);

const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'All';
  selectedStatus.value = 'All';
  showFeaturedOnly.value = false;
  emit('clear');
};

// Watch for prop changes to sync internal state
watch(() => props.categories, () => {
  if (!props.categories.includes(selectedCategory.value)) {
    selectedCategory.value = 'All';
  }
});
</script>
