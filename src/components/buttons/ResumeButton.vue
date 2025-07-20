<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href?: string
  text?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'download'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  type?: 'view' | 'download'
  downloadFilename?: string
}

const props = withDefaults(defineProps<Props>(), {
  href: '',
  text: '',
  variant: 'primary',
  size: 'md',
  showIcon: true,
  type: 'view',
  downloadFilename: ''
})

// Auto-detect type based on href if not specified
const actionType = computed(() => {
  if (props.type !== 'view') return props.type
  return props.href.includes('http') ? 'view' : 'download'
})

// Set defaults based on type
const defaultText = computed(() => {
  if (props.text) return props.text
  return actionType.value === 'download' ? 'Download Resume' : 'View Resume'
})

const defaultHref = computed(() => {
  if (props.href) return props.href
  return actionType.value === 'download'
    ? '/java-developer-aniebietafia.pdf'
    : 'https://docs.google.com/document/d/1DIj7B9wx47pBMTD4-cg5ypzbcgWpr2_hJqspr79y0-M/edit?usp=sharing'
})

const defaultVariant = computed(() => {
  if (props.variant !== 'primary') return props.variant
  return actionType.value === 'download' ? 'download' : 'primary'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:transform hover:scale-105'

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500',
    download: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5',
    lg: 'text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5'
  }

  return `${base} ${variants[defaultVariant.value]} ${sizes[props.size]}`
})

const linkAttributes = computed(() => {
  const base = {
    href: defaultHref.value,
    'aria-label': `${defaultText.value}${actionType.value === 'view' ? ' - Opens in new tab' : ''}`
  }

  if (actionType.value === 'download') {
    return {
      ...base,
      download: props.downloadFilename || 'java-developer-aniebietafia.pdf'
    }
  } else {
    return {
      ...base,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
})

const handleClick = () => {
  // Track analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', `resume_${actionType.value}`, {
      event_category: 'engagement',
      event_label: `resume_${actionType.value}_button_click`
    })
  }
}
</script>

<template>
  <a
    v-bind="linkAttributes"
    :class="buttonClasses"
    @click="handleClick"
  >
    <!-- Resume/Download Icon -->
    <svg
      v-if="showIcon"
      class="w-4 h-4 md:w-5 md:h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <!-- Download Icon -->
      <path
        v-if="actionType === 'download'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
      <!-- View/Document Icon -->
      <path
        v-else
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>

    <span>{{ defaultText }}</span>

    <!-- External Link Icon (only for view) -->
    <svg
      v-if="actionType === 'view'"
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
