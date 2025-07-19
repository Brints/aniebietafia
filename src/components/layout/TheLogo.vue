<template>
  <div class="logo-container group cursor-pointer">
    <!-- Main Logo -->
    <div class="logo roboto-about-me flex flex-col items-center relative">
      <!-- Decorative element -->
      <div class="absolute -top-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full opacity-70 animate-pulse"></div>
      <div class="absolute -bottom-2 -right-2 w-2 h-2 bg-amber-700 rounded-full opacity-70 animate-pulse delay-300"></div>

      <!-- Name -->
      <div class="name-section flex items-center gap-2 mb-1">
        <div class="bracket text-indigo-400 text-xl font-light opacity-60">&lt;</div>
        <h2 class="text-xl md:text-2xl font-bold transition-all duration-300 group-hover:text-white">
          Aniebiet
          <span class="text-amber-700 uppercase relative">
            Afia
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-500 group-hover:w-full"></div>
          </span>
        </h2>
        <div class="bracket text-indigo-400 text-xl font-light opacity-60">/&gt;</div>
      </div>

      <!-- Portfolio label -->
      <div class="portfolio-section relative">
        <h2 class="text-indigo-400 text-sm md:text-base font-medium tracking-wider uppercase relative z-10">
          Portfolio
        </h2>
        <!-- Subtle background accent -->
        <div class="absolute inset-0 bg-indigo-400 opacity-0 group-hover:opacity-10 rounded-md transition-all duration-300 transform scale-110"></div>
      </div>

      <!-- Professional indicator -->
      <div class="indicator mt-1 flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <div class="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
        <span class="text-emerald-400 text-xs font-light">Software Engineer</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roboto-about-me {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

.logo-container {
  position: relative;
  padding: 0.5rem;
}

.logo {
  position: relative;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%);
  border: 1px solid rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
}

.logo:hover {
  border-color: rgba(99, 102, 241, 0.3);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}

/* Alternative minimalist version */
.logo-minimal {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
}

/* Animation delays */
.animate-pulse.delay-300 {
  animation-delay: 300ms;
}

@media (max-width: 768px) {
  .logo {
    padding: 0.75rem 1rem;
  }

  .indicator {
    display: none;
  }
}
</style>
