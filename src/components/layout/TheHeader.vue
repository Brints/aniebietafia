<script lang="ts" setup>
import { ref } from 'vue';
import NavLinks from "./NavLinks.vue";

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <header class="bg-gray-800 text-white py-4 px-4 md:px-16 flex items-center justify-between relative">
    <div class="logo roboto-about-me text-2xl font-bold flex flex-col items-center">
      <h2>Aniebiet <span class="text-amber-700 uppercase">Afia</span></h2>
      <h2 class="text-indigo-400">Portfolio</h2>
    </div>
    <!-- Desktop NavLinks -->
    <div class="hidden md:block">
      <NavLinks />
    </div>
    <!-- Hamburger Icon for Mobile -->
    <button
      class="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      @click="toggleMobileMenu"
      aria-label="Toggle navigation menu"
    >
      <span class="block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></span>
      <span class="block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
      <span class="block w-7 h-0.5 bg-white rounded transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></span>
    </button>
    <!-- Mobile NavLinks -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-gray-900 z-50 flex flex-col items-center py-4 md:hidden shadow-lg"
      >
        <NavLinks :isMobile="true" />
      </div>
    </transition>
  </header>
</template>

<style lang="css" scoped>
.roboto-about-me {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
