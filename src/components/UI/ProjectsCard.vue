<script setup lang="ts">
withDefaults(
  defineProps<{
    cardClass?: string;
  }>(),
  {
    cardClass: "",
  }
);
</script>

<template>
  <article
    :class="`bg-gray-800 text-gray-200 rounded-xl shadow-lg transition-transform hover:scale-[1.02] hover:shadow-2xl p-6 space-y-4 max-w-md w-full ${cardClass}`"
    class="flex flex-col justify-between items-start"
  >
    <!-- Header Slot -->
    <header class="font-roboto text-lg font-bold text-indigo-400 mb-4">
      <slot name="header" />
    </header>

    <!-- Description Slot -->
    <section class="font-lora text-sm md:text-base leading-relaxed text-gray-300">
      <slot name="description" />
    </section>

    <!-- Tools Slot -->
    <div class="font-roboto flex flex-wrap items-center gap-2 text-xs md:text-sm text-indigo-300 font-medium">
      <slot name="tools" />
    </div>

    <!-- Actions Slot -->
    <footer class="font-roboto flex gap-4 mt-2">
      <slot name="actions" />
    </footer>
  </article>
</template>

<style scoped>
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>
