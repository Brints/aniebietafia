<script setup lang="ts">
import { computed } from "vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import LinkedInIcon from "../icons/LinkedInIcon.vue";
import GitHubIcon from "../icons/GitHubIcon.vue";

const currentYear = computed(() => new Date().getFullYear());
const currentMonth = computed(() => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
});

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/teibeina001",
    icon: TwitterIcon,
    color: "hover:text-blue-400",
    description: "Follow me on Twitter"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aniebietafia",
    icon: LinkedInIcon,
    color: "hover:text-blue-600",
    description: "Connect with me professionally"
  },
  {
    name: "GitHub",
    url: "https://github.com/aniebietafia",
    icon: GitHubIcon,
    color: "hover:text-gray-300",
    description: "View my code repositories"
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <!-- Enhanced footer section -->
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-amber-500/20"></div>
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative z-10">
      <!-- Main footer content -->
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          <!-- Brand section -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="text-2xl font-bold">
                <span class="text-indigo-400">&lt;</span>
                <span class="text-white">Aniebiet</span>
                <span class="text-amber-500">Afia</span>
                <span class="text-indigo-400">/&gt;</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
              Passionate software engineer crafting scalable solutions with modern technologies.
              Building the future, one line of code at a time.
            </p>
            <div class="flex items-center gap-2 text-xs text-emerald-400">
              <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Available for exciting opportunities</span>
            </div>
          </div>

          <!-- Quick links -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div class="w-1 h-6 bg-indigo-400 rounded-full"></div>
              Quick Navigation
            </h3>
            <nav class="space-y-2">
              <a
                v-for="link in quickLinks"
                :key="link.name"
                :href="link.href"
                class="block text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                {{ link.name }}
              </a>
            </nav>
          </div>

          <!-- Social & contact -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <div class="w-1 h-6 bg-amber-500 rounded-full"></div>
              Let's Connect
            </h3>

            <!-- Social links with enhanced styling -->
            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                :aria-label="link.description"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:transform hover:translate-x-1 group"
                :class="link.color"
              >
                <div class="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/70 transition-colors duration-300">
                  <component :is="link.icon" class="w-5 h-5" />
                </div>
                <span class="text-sm">{{ link.description }}</span>
              </a>
            </div>

            <!-- Back to top button -->
            <button
              @click="scrollToTop"
              class="mt-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              aria-label="Scroll to top"
            >
              <div class="p-2 bg-gray-700/50 rounded-lg group-hover:bg-indigo-600/70 transition-colors duration-300">
                <svg class="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-700/50">
        <div class="container mx-auto px-6 py-6">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <!-- Copyright -->
            <div class="text-sm text-gray-400 text-center sm:text-left">
              <span>&copy; {{ currentMonth }} {{ currentYear }} Aniebiet Afia.</span>
              <span class="hidden sm:inline mx-2">•</span>
              <span class="block sm:inline">Crafted with</span>
              <span class="text-red-400 mx-1">♥</span>
              <span>and lots of</span>
              <span class="text-amber-400 mx-1">☕</span>
            </div>

            <!-- Tech stack badge -->
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span>Built with</span>
              <div class="flex items-center gap-1">
                <span class="px-2 py-1 bg-green-900/30 text-green-400 rounded border border-green-800/30">Vue.js</span>
                <span class="px-2 py-1 bg-blue-900/30 text-blue-400 rounded border border-blue-800/30">TypeScript</span>
                <span class="px-2 py-1 bg-cyan-900/30 text-cyan-400 rounded border border-cyan-800/30">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
    <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl"></div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

/* Smooth scroll behavior for quick links */
html {
  scroll-behavior: smooth;
}

/* Custom hover animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
}

.group:hover .w-5 {
  animation: float 2s ease-in-out infinite;
}
</style>