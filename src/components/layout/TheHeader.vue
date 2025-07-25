<script lang="ts" setup>
import { ref } from "vue";
import NavLinks from "./NavLinks.vue";
import TheLogo from "./TheLogo.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import CloseIcon from "../icons/CloseIcon.vue";

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <header
    class="bg-gray-800 text-white py-4 px-4 md:px-16 flex items-center justify-between relative"
  >
    <TheLogo />
    <!-- Desktop NavLinks -->
    <div class="hidden md:flex items-center space-x-8">
      <NavLinks />
      <img
        src="https://res.cloudinary.com/aniebietafia/image/upload/v1753433370/younger_f4hjkf.png"
        alt="Profile"
        class="h-10 w-10 rounded-full object-cover"
      />
    </div>
    <!-- Hamburger Icon for Mobile -->
    <button
      class="md:hidden focus:outline-none"
      @click="toggleMobileMenu"
      aria-label="Toggle navigation menu"
    >
      <MenuIcon v-if="!isMobileMenuOpen" />
      <CloseIcon v-else />
    </button>
    <!-- Mobile NavLinks -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 w-full bg-gray-800 md:hidden flex justify-center py-4 z-20"
      >
        <NavLinks :is-mobile="true" />
      </div>
    </transition>
  </header>
</template>

<style scoped>
.roboto-about-me {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
