<script setup lang="ts">
import BracketLikeCurve from "../components/tools/BracketLikeCurve.vue";
import { blogs } from "../data/blogs";
import BlogCard from "../components/UI/BlogCard.vue";

</script>

<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <BracketLikeCurve title="Blogs" variant="accent" size="lg"/>

    <p class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8 max-w-4xl mx-auto">
      Explore my latest blogs where I share insights on cloud technologies, software engineering practices, and emerging trends in the tech industry.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :description="blog.description"
        :link="blog.link"
        :image="blog.image"
        :alt="blog.alt"
        :date-published="blog.datePublished"
        :content="blog.content"
        :tags="blog.tags"
        :platform="blog.platform"
        :views="blog.views"
        :likes="blog.likes"
        :comments="blog.comments"
      />
    </div>
  </section>

</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
</style>