<script setup lang="ts">
import { computed, ref, withDefaults, defineProps, defineEmits } from "vue";
import type { FormField } from "../../interfaces/form-field.ts";

interface Props extends FormField {
  error?: string
  success?: boolean
  disabled?: boolean
  loading?: boolean
  required?: boolean
  variant?: 'default' | 'compact'
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  error: '',
  success: false,
  disabled: false,
  loading: false,
  required: false,
  variant: 'default',
  icon: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

const isFocused = ref(false)

const fieldId = computed(() => props.name || `field-${Math.random().toString(36).substr(2, 9)}`)

const labelClasses = computed(() => {
  const base = 'flex items-center gap-2 text-sm font-medium mb-2 transition-colors duration-200'

  if (props.disabled) return `${base} text-gray-500`
  if (props.error) return `${base} text-red-400`
  if (props.success) return `${base} text-green-400`
  return `${base} text-gray-300`
})

const fieldClasses = computed(() => {
  const base = 'w-full px-3 py-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2'

  const variants = {
    default: 'text-sm md:text-base',
    compact: 'text-sm py-1.5'
  }

  const states = {
    normal: 'bg-gray-700 border-gray-600 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20',
    error: 'bg-gray-700 border-red-500 text-gray-300 focus:border-red-500 focus:ring-red-500/20',
    success: 'bg-gray-700 border-green-500 text-gray-300 focus:border-green-500 focus:ring-green-500/20',
    disabled: 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
  }

  let stateClass = states.normal
  if (props.disabled) stateClass = states.disabled
  else if (props.error) stateClass = states.error
  else if (props.success) stateClass = states.success

  return `${base} ${variants[props.variant]} ${stateClass}`
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const onFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const onBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<template>
  <div class="space-y-2">
    <!-- Label with icon and required indicator -->
    <label :for="fieldId" :class="labelClasses">
      <span v-if="icon" class="text-lg">{{ icon }}</span>
      {{ label }}
      <span v-if="required" class="text-red-400 ml-1" aria-label="Required">*</span>
    </label>

    <!-- Input wrapper -->
    <div class="relative">
      <!-- Input field -->
      <input
        v-if="type !== 'textarea'"
        :id="fieldId"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled || loading"
        :required="required"
        :class="fieldClasses"
        :aria-describedby="error ? `${fieldId}-error` : success ? `${fieldId}-success` : undefined"
        :aria-invalid="!!error"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />

      <!-- Textarea field -->
      <textarea
        v-else
        :id="fieldId"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled || loading"
        :required="required"
        :rows="variant === 'compact' ? 3 : 4"
        :class="fieldClasses"
        :aria-describedby="error ? `${fieldId}-error` : success ? `${fieldId}-success` : undefined"
        :aria-invalid="!!error"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      ></textarea>

      <!-- Loading spinner -->
      <div v-if="loading" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          class="animate-spin h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      <!-- Success/Error icons -->
      <div v-else-if="(success || error) && !loading" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <!-- Success icon -->
        <svg
          v-if="success"
          class="h-4 w-4 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>

        <!-- Error icon -->
        <svg
          v-else-if="error"
          class="h-4 w-4 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Error message -->
    <p
      v-if="error"
      :id="`${fieldId}-error`"
      class="text-sm text-red-400 flex items-center gap-1"
      role="alert"
    >
      <svg class="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      {{ error }}
    </p>

    <!-- Success message -->
    <p
      v-else-if="success && typeof success === 'string'"
      :id="`${fieldId}-success`"
      class="text-sm text-green-400 flex items-center gap-1"
    >
      <svg class="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      {{ success }}
    </p>
  </div>
</template>
