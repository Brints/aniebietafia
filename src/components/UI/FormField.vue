<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { FormField } from "../../interfaces/form-field.ts";

defineProps<FormField>();

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="mb-4">
    <label :for="name" class="block text-gray-300 text-sm font-bold mb-2">{{ label }}</label>
    <input
      v-if="type !== 'textarea'"
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
    />
    <textarea
      v-else
      :id="name"
      :name="name"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      rows="4"
      class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>
</template>

