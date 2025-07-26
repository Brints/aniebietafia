<script setup lang="ts">
import CertificationsCard from "../components/UI/CertificationsCard.vue";
import BracketLikeCurve from "../components/tools/BracketLikeCurve.vue";
import { certifications } from "../data/certifications";
</script>

<!-- Certifications section -->
<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Certifications" variant="secondary"/>

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8 max-w-4xl mx-auto"
    >
      I continuously invest in professional development through industry-recognized certifications.
      These credentials validate my expertise in cloud technologies, software engineering practices,
      and emerging technologies, ensuring I stay current with industry standards and best practices.
    </p>

    <!-- Certifications Statistics -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="text-2xl font-bold text-indigo-400">{{ certifications.length }}+</div>
        <div class="text-sm text-gray-400">Certifications Earned</div>
      </div>
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="text-2xl font-bold text-indigo-400">{{ new Set(certifications.map(c => c.issuer)).size }}+</div>
        <div class="text-sm text-gray-400">Certification Providers</div>
      </div>
      <div class="bg-gray-800 rounded-lg p-4">
        <div class="text-2xl font-bold text-indigo-400">{{ new Set(certifications.flatMap(c => c.skills)).size }}+</div>
        <div class="text-sm text-gray-400">Skills Validated</div>
      </div>
    </div>

    <div class="mt-3">
      <p class="font-lora text-gray-400 mb-4">
        Interested in verifying my credentials? All certifications can be independently verified through their respective providers.
      </p>
    </div>

    <!-- Certifications List -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <CertificationsCard
        v-for="certification in certifications"
        :key="certification.id"
        :id="certification.id"
        :title="certification.title"
        :description="certification.description"
        :link="certification.link"
        :image="certification.image"
        :alt="certification.alt"
        :issuer="certification.issuer"
        :date-earned="certification.dateEarned"
        :expiration-date="certification.expirationDate"
        :credential-id="certification.credentialId"
        :skills="certification.skills"
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
