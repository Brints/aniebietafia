<script setup lang="ts">
import { ref, computed } from 'vue';
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
// import SkillBadge from "../components/unnamed/SkillBadge.vue";
import BaseCard from "../components/UI/BaseCard.vue";

// Type definitions
interface Skill {
  name: string;
  level: number;
  years: number;
  shield: string;
  link: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface SkillsData {
  backend: SkillCategory;
  frameworks: SkillCategory;
  databases: SkillCategory;
  cloud: SkillCategory;
  frontend: SkillCategory;
  tools: SkillCategory;
}

type SkillLevel = 1 | 2 | 3 | 4 | 5;
type CategoryKey = keyof SkillsData;

// Skill proficiency levels
const skillLevels = {
  EXPERT: 5 as SkillLevel,
  ADVANCED: 4 as SkillLevel,
  INTERMEDIATE: 3 as SkillLevel,
  BEGINNER: 2 as SkillLevel,
  LEARNING: 1 as SkillLevel
};

// Enhanced skill data with proficiency and experience
const skillsData: SkillsData = {
  backend: {
    title: "Backend Languages",
    icon: "🚀",
    skills: [
      { name: "Java", level: skillLevels.EXPERT, years: 3, shield: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white", link: "https://www.java.com/" },
      { name: "Python", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", link: "https://www.python.org/" },
      { name: "Node.js", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white", link: "https://nodejs.org/" },
      { name: "Go", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white", link: "https://golang.org/" },
      { name: "Rust", level: skillLevels.LEARNING, years: 0.5, shield: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white", link: "https://www.rust-lang.org/" },
      { name: "C", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white", link: "https://en.wikipedia.org/wiki/C_(programming_language)" }
    ]
  },
  frameworks: {
    title: "Backend Frameworks",
    icon: "⚡",
    skills: [
      { name: "Spring Boot", level: skillLevels.EXPERT, years: 3, shield: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white", link: "https://spring.io/projects/spring-boot" },
      { name: "Express", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white", link: "https://expressjs.com/" },
      { name: "FastAPI", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white", link: "https://fastapi.tiangolo.com/" },
      { name: "Django", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white", link: "https://www.djangoproject.com/" },
      { name: "NestJS", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white", link: "https://nestjs.com/" }
    ]
  },
  databases: {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white", link: "https://www.mongodb.com/" },
      { name: "PostgreSQL", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white", link: "https://www.postgresql.org/" }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white", link: "https://aws.amazon.com/" },
      { name: "DigitalOcean", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white", link: "https://www.digitalocean.com/" },
      { name: "Heroku", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white", link: "https://www.heroku.com/" }
    ]
  },
  frontend: {
    title: "Frontend & Build Tools",
    icon: "🎨",
    skills: [
      { name: "Vue.js", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white", link: "https://vuejs.org/" },
      { name: "TypeScript", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white", link: "https://www.typescriptlang.org/" },
      { name: "JavaScript", level: skillLevels.ADVANCED, years: 3, shield: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "HTML", level: skillLevels.EXPERT, years: 4, shield: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white", link: "https://html.spec.whatwg.org/" },
      { name: "CSS", level: skillLevels.ADVANCED, years: 3, shield: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white", link: "https://www.w3.org/Style/CSS/" },
      { name: "Tailwind CSS", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", link: "https://tailwindcss.com/" },
      { name: "Vite", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white", link: "https://vitejs.dev/" },
      { name: "Webpack", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black", link: "https://webpack.js.org/" }
    ]
  },
  tools: {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: skillLevels.ADVANCED, years: 3, shield: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white", link: "https://git-scm.com/" },
      { name: "Docker", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white", link: "https://www.docker.com/" },
      { name: "NPM", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white", link: "https://www.npmjs.com/" },
      { name: "Yarn", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white", link: "https://yarnpkg.com/" },
      { name: "PNPM", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/PNPM-F69220?style=for-the-badge&logo=pnpm&logoColor=white", link: "https://pnpm.io/" },
      { name: "Maven", level: skillLevels.ADVANCED, years: 2, shield: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white", link: "https://maven.apache.org/" },
      { name: "GraphQL", level: skillLevels.INTERMEDIATE, years: 1, shield: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white", link: "https://www.graphql.com/" },
      { name: "REST API", level: skillLevels.ADVANCED, years: 3, shield: "https://img.shields.io/badge/REST-000000?style=for-the-badge&logo=rest&logoColor=white", link: "https://www.restapitutorial.com/" }
    ]
  }
};

// Filter state
const selectedFilter = ref<'all' | CategoryKey>('all');
const selectedLevel = ref<'all' | string>('all');

// Filter options
const filterOptions = [
  { value: 'all' as const, label: 'All Skills' },
  { value: 'backend' as const, label: 'Backend' },
  { value: 'frameworks' as const, label: 'Frameworks' },
  { value: 'databases' as const, label: 'Databases' },
  { value: 'cloud' as const, label: 'Cloud & DevOps' },
  { value: 'frontend' as const, label: 'Frontend' },
  { value: 'tools' as const, label: 'Tools' }
];

const levelOptions = [
  { value: 'all', label: 'All Levels' },
  { value: '5', label: 'Expert' },
  { value: '4', label: 'Advanced' },
  { value: '3', label: 'Intermediate' },
  { value: '2', label: 'Beginner' },
  { value: '1', label: 'Learning' }
];

// Computed filtered skills
const filteredSkills = computed((): Partial<SkillsData> => {
  let filtered: Partial<SkillsData> = { ...skillsData };

  if (selectedFilter.value !== 'all') {
    const categoryKey = selectedFilter.value as CategoryKey;
    filtered = { [categoryKey]: skillsData[categoryKey] };
  }

  if (selectedLevel.value !== 'all') {
    const levelValue = parseInt(selectedLevel.value) as SkillLevel;
    (Object.keys(filtered) as CategoryKey[]).forEach(category => {
      if (filtered[category]) {
        filtered[category] = {
          ...filtered[category]!,
          skills: filtered[category]!.skills.filter((skill: Skill) => skill.level === levelValue)
        };
      }
    });
  }

  return filtered;
});

// Helper functions
const getLevelText = (level: SkillLevel): string => {
  const levels: Record<SkillLevel, string> = {
    5: 'Expert',
    4: 'Advanced',
    3: 'Intermediate',
    2: 'Beginner',
    1: 'Learning'
  };
  return levels[level];
};

const getLevelColor = (level: SkillLevel): string => {
  const colors: Record<SkillLevel, string> = {
    5: 'bg-emerald-500',
    4: 'bg-blue-500',
    3: 'bg-yellow-500',
    2: 'bg-orange-500',
    1: 'bg-red-500'
  };
  return colors[level];
};
</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Skills" />

    <!-- Enhanced Description -->
    <div class="max-w-4xl mx-auto mb-8">
      <p class="font-lora text-lg leading-relaxed text-center opacity-90 hover:opacity-100 transition-opacity duration-300">
        I am a <span class="text-indigo-400 font-semibold">passionate full-stack developer</span> with expertise across multiple technologies.
        Below you'll find my technical skills with <span class="text-emerald-400 font-semibold">proficiency levels</span> and
        <span class="text-blue-400 font-semibold">years of experience</span>. I'm always eager to learn and grow!
      </p>
    </div>

    <!-- Filter Controls -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <div class="flex flex-col">
        <label class="text-sm text-gray-400 mb-2">Filter by Category</label>
        <select
          v-model="selectedFilter"
          class="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none"
        >
          <option v-for="option in filterOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <div class="flex flex-col">
        <label class="text-sm text-gray-400 mb-2">Filter by Level</label>
        <select
          v-model="selectedLevel"
          class="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:border-indigo-500 focus:outline-none"
        >
          <option v-for="option in levelOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="(category, key, index) in filteredSkills"
        :key="key"
        class="animate-fade-in-up"
        :style="`animation-delay: ${index * 0.1}s`"
      >
        <BaseCard
          v-if="category"
          customClass="h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
          customStyle="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 1px solid rgba(99, 102, 241, 0.2);"
        >
          <!-- Category Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ category.icon }}</span>
              <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
            </div>
            <div class="bg-indigo-500/20 px-3 py-1 rounded-full">
              <span class="text-indigo-300 text-sm font-medium">{{ category.skills.length }} skills</span>
            </div>
          </div>

          <!-- Skills List -->
          <div class="space-y-4">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skill.name"
              class="group relative bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 animate-slide-in-left"
              :style="`animation-delay: ${((index as number) * 0.1) + ((skillIndex as number) * 0.05)}s`"
            >
              <!-- Skill Header -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <a :href="skill.link" target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform duration-200">
                    <img :src="skill.shield" :alt="skill.name + ' Badge'" class="h-6" />
                  </a>
                  <div>
                    <h4 class="font-medium text-white">{{ skill.name }}</h4>
                    <p class="text-xs text-gray-400">{{ skill.years }}+ years experience</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-xs font-medium text-gray-300">{{ getLevelText(skill.level as SkillLevel) }}</span>
                </div>
              </div>

              <!-- Proficiency Bar -->
              <div class="relative">
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div
                    :class="getLevelColor(skill.level as SkillLevel)"
                    class="h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="`width: ${(skill.level / 5) * 100}%; animation-delay: ${((index as number) * 0.2) + ((skillIndex as number) * 0.1)}s`"
                  ></div>
                </div>
                <!-- Stars -->
                <div class="flex gap-1 mt-2">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-lg transition-colors duration-200"
                    :class="star <= skill.level ? 'text-yellow-400' : 'text-gray-600'"
                  >
                    ★
                  </span>
                </div>
              </div>

              <!-- Hover Info -->
              <div class="absolute inset-0 bg-indigo-600/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center text-white p-4">
                  <h5 class="font-bold mb-2">{{ skill.name }}</h5>
                  <p class="text-sm mb-2">{{ getLevelText(skill.level as SkillLevel) }} Level</p>
                  <p class="text-xs">{{ skill.years }}+ years of hands-on experience</p>
                  <div class="mt-2">
                    <a :href="skill.link" target="_blank" class="text-xs underline hover:text-indigo-200">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>

    <!-- Summary Stats -->
    <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-4 bg-gray-800/50 rounded-lg animate-pulse-slow">
        <div class="text-2xl font-bold text-emerald-400">{{ Object.values(skillsData).reduce((acc: number, cat: SkillCategory) => acc + cat.skills.filter((s: Skill) => s.level === 5).length, 0) }}</div>
        <div class="text-sm text-gray-400">Expert Level</div>
      </div>
      <div class="text-center p-4 bg-gray-800/50 rounded-lg animate-pulse-slow" style="animation-delay: 0.1s">
        <div class="text-2xl font-bold text-blue-400">{{ Object.values(skillsData).reduce((acc: number, cat: SkillCategory) => acc + cat.skills.filter((s: Skill) => s.level === 4).length, 0) }}</div>
        <div class="text-sm text-gray-400">Advanced</div>
      </div>
      <div class="text-center p-4 bg-gray-800/50 rounded-lg animate-pulse-slow" style="animation-delay: 0.2s">
        <div class="text-2xl font-bold text-yellow-400">{{ Object.values(skillsData).reduce((acc: number, cat: SkillCategory) => acc + cat.skills.filter((s: Skill) => s.level === 3).length, 0) }}</div>
        <div class="text-sm text-gray-400">Intermediate</div>
      </div>
      <div class="text-center p-4 bg-gray-800/50 rounded-lg animate-pulse-slow" style="animation-delay: 0.3s">
        <div class="text-2xl font-bold text-indigo-400">{{ Object.values(skillsData).reduce((acc: number, cat: SkillCategory) => acc + cat.skills.length, 0) }}</div>
        <div class="text-sm text-gray-400">Total Skills</div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}

/* Enhanced Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulse 3s infinite;
}

/* Smooth transitions for dynamic content */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Custom scrollbar for select elements */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

/* Progress bar animation */
@keyframes fillProgress {
  from {
    width: 0%;
  }
}

.animate-fill {
  animation: fillProgress 1.5s ease-out forwards;
}
</style>
