<script setup lang="ts">
import { ref, computed } from 'vue';
import ProjectsCard from "../components/UI/ProjectsCard.vue";
import ProjectModal from "../components/UI/ProjectModal.vue";
import ProjectFilter from "../components/UI/ProjectFilter.vue";
import LiveLinkButton from "../components/buttons/LiveLinkButton.vue";
import GitHubRepoButton from "../components/buttons/GitHubRepoButton.vue";
import TechTools from "../components/buttons/TechTools.vue";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
import { projects, projectCategories, projectStatuses } from "../data/projects";
import { type Project } from "../interfaces/project";

// Reactive state for filtering
const searchQuery = ref('');
const selectedCategory = ref('All');
const selectedStatus = ref('All');
const showFeaturedOnly = ref(false);

// Modal state
const isModalOpen = ref(false);
const selectedProject = ref<Project | null>(null);

// Computed filtered projects
const filteredProjects = computed(() => {
  let filtered = [...projects];

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tools.some(tool => tool.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(project => project.category === selectedCategory.value);
  }

  // Status filter
  if (selectedStatus.value !== 'All') {
    filtered = filtered.filter(project => project.status === selectedStatus.value);
  }

  // Featured filter
  if (showFeaturedOnly.value) {
    filtered = filtered.filter(project => project.featured);
  }

  return filtered;
});

// Sort projects: featured first, then by status
const sortedProjects = computed(() => {
  return [...filteredProjects.value].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    const statusOrder = { 'completed': 0, 'in-progress': 1, 'planning': 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });
});

// Filter handlers
const updateSearch = (query: string) => {
  searchQuery.value = query;
};

const updateCategory = (category: string) => {
  selectedCategory.value = category;
};

const updateStatus = (status: string) => {
  selectedStatus.value = status;
};

const updateFeatured = (featured: boolean) => {
  showFeaturedOnly.value = featured;
};

const clearFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = 'All';
  selectedStatus.value = 'All';
  showFeaturedOnly.value = false;
};

// Modal handlers
const openModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300 min-h-screen">
    <!-- Title with enhanced animation -->
    <div class="transform transition-all duration-1000 ease-out">
      <BracketLikeCurve title="Projects" variant="accent" size="lg"/>
    </div>

    <!-- Description with staggered animation -->
    <p
      class="font-lora opacity-90 transform transition-all duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8 max-w-4xl mx-auto"
    >
      Here are some of the projects I have worked on. Each one showcases my skills and expertise in various
      technologies. These technologies include Java, Spring Boot, Node.js, Express, Vue.js, Python, FastAPI, Django and
      Tailwind CSS. I have also worked with various databases such as MongoDB and PostgresSQL. Each project is a
      testament to my ability to adapt and learn new technologies quickly.
    </p>

    <!-- Filter Component -->
    <div class="mb-8 transform transition-all duration-500 ease-out delay-200">
      <ProjectFilter
        :categories="projectCategories"
        :statuses="projectStatuses"
        :project-count="filteredProjects.length"
        @update:search="updateSearch"
        @update:category="updateCategory"
        @update:status="updateStatus"
        @update:featured="updateFeatured"
        @clear="clearFilters"
      />
    </div>

    <!-- Featured Projects Section -->
    <div v-if="!showFeaturedOnly && sortedProjects.some(p => p.featured)" class="mb-12">
      <h3 class="font-roboto text-2xl font-bold text-white mb-6 flex items-center gap-2">
        ⭐ Featured Projects
      </h3>
      <div class="font-lora grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div
          v-for="(project, index) in sortedProjects.filter(p => p.featured)"
          :key="`featured-${project.title}`"
          class="transform transition-all duration-500 ease-out"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <ProjectsCard :project="project" @open-modal="openModal">
            <template #header>
              <h3 class="font-roboto text-lg font-semibold text-white">{{ project.title }}</h3>
            </template>
            <template #description>
              {{ project.description }}
            </template>
            <template #tools>
              <h4 class="text-lg font-semibold mb-2">Tech Stack</h4>
              <TechTools :tools="project.tools" variant="colorful" size="sm"/>
            </template>
            <template #actions>
              <div class="flex flex-wrap gap-2">
                <LiveLinkButton v-if="project.liveLink" :link="project.liveLink" />
                <LiveLinkButton v-if="project.issueLink" :link="project.issueLink" :is-issue="true" />
                <GitHubRepoButton v-if="project.codeLink" :link="project.codeLink" />
              </div>
            </template>
          </ProjectsCard>
        </div>
      </div>
    </div>

    <!-- All Projects Grid with enhanced responsive layout -->
    <div v-if="!showFeaturedOnly || sortedProjects.some(p => !p.featured)">
      <h3 v-if="!showFeaturedOnly" class="font-roboto text-2xl font-bold text-white mb-6">
        {{ sortedProjects.some(p => p.featured) ? 'All Projects' : 'Projects' }}
      </h3>

      <!-- Enhanced responsive grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 auto-rows-fr">
        <div
          v-for="(project, index) in showFeaturedOnly ? sortedProjects : sortedProjects.filter(p => !p.featured || !sortedProjects.some(fp => fp.featured))"
          :key="project.title"
          class="font-roboto transform transition-all duration-500 ease-out hover:-translate-y-2"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <ProjectsCard :project="project" @open-modal="openModal" class="h-full">
            <template #header>
              <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
            </template>
            <template #description>
              {{ project.description }}
            </template>
            <template #tools>
              <h4 class="text-lg font-semibold mb-2">Tech Stack</h4>
              <TechTools :tools="project.tools" variant="compact"/>
            </template>
            <template #actions>
              <div class="flex flex-wrap gap-2">
                <LiveLinkButton v-if="project.liveLink" :link="project.liveLink" />
                <LiveLinkButton v-if="project.issueLink" :link="project.issueLink" :is-issue="true" />
                <GitHubRepoButton v-if="project.codeLink" :link="project.codeLink" />
              </div>
            </template>
          </ProjectsCard>
        </div>
      </div>
    </div>

    <!-- Show all projects when featured filter is active -->
    <div v-if="showFeaturedOnly" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 auto-rows-fr">
      <div
        v-for="(project, index) in sortedProjects"
        :key="project.title"
        class="transform transition-all duration-500 ease-out hover:-translate-y-2"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <ProjectsCard :project="project" @open-modal="openModal" class="h-full">
          <template #header>
            <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          </template>
          <template #description>
            {{ project.description }}
          </template>
          <template #tools>
            <h4 class="text-lg font-semibold mb-2">Tech Stack</h4>
            <TechTools :tools="project.tools" size="lg" variant="compact"/>
          </template>
          <template #actions>
            <div class="flex flex-wrap gap-2">
              <LiveLinkButton v-if="project.liveLink" :link="project.liveLink" />
              <LiveLinkButton v-if="project.issueLink" :link="project.issueLink" :is-issue="true" />
              <GitHubRepoButton v-if="project.codeLink" :link="project.codeLink" />
            </div>
          </template>
        </ProjectsCard>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16">
      <div class="text-6xl mb-4 opacity-50">🔍</div>
      <h3 class="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
      <p class="text-gray-500">Try adjusting your filters or search query</p>
      <button
        @click="clearFilters"
        class="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
      >
        Clear Filters
      </button>
    </div>

    <!-- Project Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}

.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Responsive grid enhancements */
@media (min-width: 1536px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

/* Smooth hover transitions */
.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}
</style>
