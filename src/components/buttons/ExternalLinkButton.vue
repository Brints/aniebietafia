<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href: string
  text?: string
  type?: 'github' | 'live' | 'demo' | 'issue' | 'custom'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'custom',
  variant: 'primary',
  size: 'md',
  showIcon: true
})

// Auto-detect type based on URL if not specified
const linkType = computed(() => {
  if (props.type !== 'custom') return props.type

  const url = props.href.toLowerCase()
  if (url.includes('github.com')) {
    return url.includes('/issues/') ? 'issue' : 'github'
  }
  return 'live'
})

// Set default text based on type
const buttonText = computed(() => {
  if (props.text) return props.text

  const typeTexts = {
    github: 'View Code',
    live: 'Live Demo',
    demo: 'View Demo',
    issue: 'GitHub Issue',
    custom: 'Visit Link'
  }

  return typeTexts[linkType.value]
})

// Set variant based on type if not specified
const buttonVariant = computed(() => {
  if (props.variant !== 'primary') return props.variant

  const typeVariants = {
    github: 'secondary',
    live: 'primary',
    demo: 'primary',
    issue: 'outline',
    custom: 'primary'
  }

  return typeVariants[linkType.value]
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:transform hover:scale-105'

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-700 hover:bg-gray-800 text-white focus:ring-gray-500',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500'
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5',
    lg: 'text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5'
  }

  const currentVariant = buttonVariant.value as keyof typeof variants
  const currentSize = props.size as keyof typeof sizes

  return `${base} ${variants[currentVariant]} ${sizes[currentSize]}`
})

const handleClick = () => {
  // Track analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'external_link_click', {
      event_category: 'engagement',
      event_label: `${linkType.value}_link`,
      link_url: props.href
    })
  }
}
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
    :aria-label="`${buttonText} - Opens in new tab`"
    @click="handleClick"
  >
    <!-- GitHub Icon -->
    <svg
      v-if="showIcon && linkType === 'github'"
      class="w-4 h-4 md:w-5 md:h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>

    <!-- Live/Demo Icon -->
    <svg
      v-else-if="showIcon && (linkType === 'live' || linkType === 'demo')"
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
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>

    <!-- Issue Icon -->
    <svg
      v-else-if="showIcon && linkType === 'issue'"
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>

    <!-- Generic External Link Icon -->
    <svg
      v-else-if="showIcon"
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>

    <span>{{ buttonText }}</span>

    <!-- External Link Indicator -->
    <svg
      class="w-3 h-3 md:w-4 md:h-4 opacity-75"
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</template>
