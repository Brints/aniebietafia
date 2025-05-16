<script setup lang="ts">
import CertificationsCard from "../components/UI/CertificationsCard.vue";
</script>

<!-- Certifications section -->
<template>
  <section class="p-6 md:p-12 bg-gray-900 text-gray-300">
    <!-- Title -->
    <div class="flex justify-center">
      <div
        class="certifications-title-wrapper font-roboto text-center text-2xl md:text-3xl font-bold text-indigo-400 mb-6"
      >
        <span class="certifications-line"></span>
        <!-- Left bracket-like curve -->
        <svg
          class="certifications-bracket"
          width="18"
          height="40"
          viewBox="0 0 18 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2 Q4 20 16 38" stroke="#fff" stroke-width="2" fill="none" />
        </svg>
        <span class="certifications-title text-indigo-400">Certifications</span>
        <!-- Right bracket-like curve (mirrored) -->
        <svg
          class="certifications-bracket"
          width="18"
          height="40"
          viewBox="0 0 18 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="transform: scaleX(-1)"
        >
          <path d="M16 2 Q4 20 16 38" stroke="#fff" stroke-width="2" fill="none" />
        </svg>
        <span class="certifications-line"></span>
      </div>
    </div>

    <!-- Description -->
    <p
      class="font-lora opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
    >
      I have completed several certifications that demonstrate my expertise in various technologies and methodologies.
      These certifications include AWS Certified Solutions Architect, AWS Certified Developer, and AWS Certified DevOps
      Engineer. I am always eager to learn new technologies and improve my skills.
    </p>

    <!-- Certifications List -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <CertificationsCard
        title="AWS Certified Solutions Architect - Associate"
        description="This certification validates the ability to design and deploy scalable systems on AWS."
        link="https://www.credly.com/badges/0c5f7a9b-fd4e-4b8c-bd1f-e0a5e7f3a0b5/public_url"
        image="aws-solutions.jpeg"
        alt="AWS Certified Solutions Architect - Associate"
      />
      <CertificationsCard
        title="AWS Certified Developer - Associate"
        description="This certification validates the ability to develop and maintain applications on AWS."
        link="https://www.credly.com/badges/0c5f7a9b-fd4e-4b8c-bd1f-e0a5e7f3a0b5/public_url"
        image="aws-developer.png"
        alt="AWS Certified Developer - Associate"
      />
      <CertificationsCard
        title="AWS Certified DevOps Engineer - Professional"
        description="This certification validates the ability to automate the testing and deployment of AWS infrastructure."
        link="https://www.credly.com/badges/0c5f7a9b-fd4e-4b8c-bd1f-e0a5e7f3a0b5/public_url"
        image="aws-devops-engineer-professional.png"
        alt="AWS Certified DevOps Engineer - Professional"
      />
      <CertificationsCard
        title="AWS Certified Cloud Practitioner"
        description="This certification validates the ability to demonstrate knowledge of AWS Cloud and its services."
        link="https://www.credly.com/badges/0c5f7a9b-fd4e-4b8c-bd1f-e0a5e7f3a0b5/public_url"
        image="aws-cloud-practitioner.png"
        alt="AWS Certified Cloud Practitioner"
      />
    </div>
  </section>
</template>

<style scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

.certifications-title-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 1rem 0;
  justify-content: center;
}

.certifications-line {
  flex: 1;
  height: 2px;
  background: #fff;
  opacity: 0.5;
}

.certifications-bracket {
  display: block;
  height: 2em;
  width: auto;
}

.certifications-title {
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 1rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
</style>
