<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  text?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  smooth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  to: 'contact',
  text: 'Contact Me',
  variant: 'outline',
  size: 'md',
  showIcon: true,
  smooth: true
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:transform hover:scale-105'

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white focus:ring-indigo-500 bg-transparent'
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5',
    lg: 'text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5'
  }

  return `${base} ${variants[props.variant]} ${sizes[props.size]}`
})

// const handleClick = (event: Event) => {
//   // Only handle smooth scrolling for internal anchors
//   if (props.href.startsWith('#') && props.smooth) {
//     event.preventDefault()
//     const targetId = props.href.substring(1)
//     const targetElement = document.getElementById(targetId)
//
//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       })
//     }
//   }
//
//   // Track analytics
//   if (typeof window !== 'undefined' && 'gtag' in window) {
//     (window as any).gtag('event', 'contact_button_click', {
//       event_category: 'engagement',
//       event_label: 'contact_me_button'
//     })
//   }
// }

const handleClick = () => {
  // Track analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'contact_button_click', {
      event_category: 'engagement',
      event_label: 'contact_me_button'
    })
  }
  // Optionally scroll to top after navigation
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <router-link
    :to="{ name: props.to }"
    :class="buttonClasses"
    :aria-label="`${text} - Scroll to contact section`"
    @click="handleClick"
  >
    <!-- Contact Icon -->
    <svg
      v-if="showIcon"
      class="w-4 h-4 md:w-5 md:h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>

    <span>{{ text }}</span>
  </router-link>
</template>

<style scoped lang="css"></style>
