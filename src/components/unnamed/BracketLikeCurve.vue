<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String as () => 'primary' | 'secondary' | 'accent',
    default: 'primary'
  },
  animated: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  }
});

const getVariantClasses = () => {
  const variants = {
    primary: 'text-indigo-400 border-indigo-400',
    secondary: 'text-amber-500 border-amber-500',
    accent: 'text-emerald-400 border-emerald-400'
  };
  return variants[props.variant];
};

const getSizeClasses = () => {
  const sizes = {
    sm: 'text-lg md:text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl'
  };
  return sizes[props.size];
};
</script>

<template>
  <div class="flex justify-center mb-8">
    <div
      class="section-title-wrapper font-roboto text-center font-bold relative"
      :class="[getVariantClasses(), getSizeClasses()]"
    >
      <!-- Decorative background glow -->
      <div
        v-if="animated"
        class="absolute inset-0 -z-10 opacity-20 blur-xl rounded-full"
        :class="{
          'bg-indigo-400': variant === 'primary',
          'bg-amber-500': variant === 'secondary',
          'bg-emerald-400': variant === 'accent'
        }"
      ></div>

      <!-- Left decorative line -->
      <div class="section-line-container">
        <div class="section-line" :class="{ 'animate-line-draw': animated }"></div>
        <div class="section-line-gradient"></div>
      </div>

      <!-- Left bracket with enhanced design -->
      <div class="bracket-container left">
        <svg
          class="section-bracket"
          :class="{ 'animate-bracket-draw': animated }"
          width="24"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4 Q6 24 20 44"
            stroke="currentColor"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="bracket-path"
            :style="animated ? 'stroke-dasharray: 80; stroke-dashoffset: 80;' : ''"
          />
          <!-- Inner accent line -->
          <path
            d="M18 6 Q8 24 18 42"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            opacity="0.4"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <!-- Title with enhanced styling -->
      <div class="title-container">
        <span
          class="section-title relative z-10"
          :class="{ 'animate-title-reveal': animated }"
        >
          {{ props.title }}
          <!-- Underline accent -->
          <div
            class="title-underline"
            :class="{ 'animate-underline': animated }"
          ></div>
        </span>
      </div>

      <!-- Right bracket (mirrored) -->
      <div class="bracket-container right">
        <svg
          class="section-bracket"
          :class="{ 'animate-bracket-draw': animated }"
          width="24"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: scaleX(-1)"
        >
          <path
            d="M20 4 Q6 24 20 44"
            stroke="currentColor"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="bracket-path"
            :style="animated ? 'stroke-dasharray: 80; stroke-dashoffset: 80;' : ''"
          />
          <!-- Inner accent line -->
          <path
            d="M18 6 Q8 24 18 42"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            opacity="0.4"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <!-- Right decorative line -->
      <div class="section-line-container">
        <div class="section-line-gradient"></div>
        <div class="section-line" :class="{ 'animate-line-draw': animated }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding: 1.5rem 0;
  gap: 1rem;
}

.section-line-container {
  display: flex;
  align-items: center;
  min-width: 60px;
  flex: 1;
  position: relative;
}

.section-line {
  height: 2px;
  background: currentColor;
  opacity: 0.6;
  flex: 1;
  border-radius: 1px;
  position: relative;
}

.section-line-gradient {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, currentColor, transparent);
  opacity: 0.3;
}

.bracket-container {
  display: flex;
  align-items: center;
  position: relative;
}

.section-bracket {
  height: 2.5em;
  width: auto;
  filter: drop-shadow(0 0 4px currentColor);
  transition: all 0.3s ease;
}

.section-bracket:hover {
  filter: drop-shadow(0 0 8px currentColor);
  transform: scale(1.05);
}

.title-container {
  position: relative;
  padding: 0 1.5rem;
}

.section-title {
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  letter-spacing: 0.025em;
  text-shadow: 0 0 20px currentColor;
}

.title-underline {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  border-radius: 1px;
  transition: width 0.6s ease;
}

/* Animations */
@keyframes lineDrawIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes bracketDraw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underlineExpand {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}

.animate-line-draw {
  animation: lineDrawIn 1s ease-out forwards;
  transform-origin: center;
}

.animate-bracket-draw .bracket-path {
  animation: bracketDraw 1.5s ease-out forwards;
  animation-delay: 0.3s;
}

.animate-title-reveal {
  animation: titleReveal 0.8s ease-out forwards;
  animation-delay: 0.8s;
}

.animate-underline {
  animation: underlineExpand 0.6s ease-out forwards;
  animation-delay: 1.2s;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title-wrapper {
    gap: 0.5rem;
    padding: 1rem 0;
  }

  .section-line-container {
    min-width: 40px;
  }

  .title-container {
    padding: 0 1rem;
  }

  .section-bracket {
    height: 2em;
  }
}

@media (max-width: 480px) {
  .section-line-container {
    min-width: 20px;
  }

  .title-container {
    padding: 0 0.5rem;
  }
}
</style>
