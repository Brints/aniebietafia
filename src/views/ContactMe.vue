<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
import FormField from "../components/UI/FormField.vue";

const fullName = ref("");
const email = ref("");
const message = ref("");
const formStatus = ref<"idle" | "submitting" | "success" | "error">("idle");
const formMessage = ref("");

const handleSubmit = async () => {
  formStatus.value = "submitting";
  formMessage.value = "";

  if (!fullName.value || !email.value || !message.value) {
    formStatus.value = "error";
    formMessage.value = "Please fill out all fields before submitting.";
    return;
  }

  try {
    // TODO: Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_5ebutin";
    const templateID = "template_cxnzwif";
    const publicKey = "hLCIOa6lJcn3wtPj9";

    const templateParams = {
      from_name: fullName.value,
      from_email: email.value,
      message: message.value,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);

    formStatus.value = "success";
    formMessage.value = "Your message has been sent successfully! Thank you for reaching out.";
    fullName.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    formStatus.value = "error";
    formMessage.value = "Sorry, there was an error sending your message. Please try again later.";
    console.error("EmailJS error:", error);
  }
};
</script>

<template>
  <main class="bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Contact Me" />

    <section class="grid grid-cols-2 gap-4">
      <!-- Hero Section -->
      <section
        class="hero-section font-lora relative bg-gray-900 flex items-center justify-center min-h-[220px] md:min-h-[320px] overflow-hidden pr-6 md:pr-10"
      >
        <svg
          class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg m-4 z-0"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_2)">
            <path
              d="M-10 610L610 -10"
              stroke="url(#paint0_linear_1_2)"
              stroke-width="40"
            />
            <path
              d="M190 810L810 190"
              stroke="url(#paint1_linear_1_2)"
              stroke-width="40"
            />
            <path
              d="M490 910L910 490"
              stroke="url(#paint2_linear_1_2)"
              stroke-width="40"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="290"
              y1="290"
              x2="320"
              y2="320"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#818CF8" />
              <stop offset="1" stop-color="#C4B5FD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2"
              x1="490"
              y1="490"
              x2="520"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#60A5FA" />
              <stop offset="1" stop-color="#3B82F6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_2"
              x1="690"
              y1="690"
              x2="720"
              y2="720"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F472B6" />
              <stop offset="1" stop-color="#EC4899" />
            </linearGradient>
            <clipPath id="clip0_1_2">
              <rect width="800" height="600" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p class="text-gray-300 text-center text-lg md:text-xl font-semibold drop-shadow-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      <section
        class="form-section font-lora p-6 md:p-12 bg-gray-900 text-gray-300 pl-6 md:pl-10"
        style="border-left: 2px dotted #6366f1"
      >
        <!-- Description -->
        <p
          class="opacity-90 transform transition duration-700 ease-in-out translate-y-2 hover:opacity-100 text-base leading-relaxed mb-8"
        >
          If you have any questions or would like to get in touch, please feel free to reach out to me using the form
          below. I look forward to hearing from you!
        </p>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <FormField
            label="Your Full Name"
            name="fullname"
            type="text"
            placeholder="John Doe"
            v-model="fullName"
          />
          <FormField
            label="Your Email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            v-model="email"
          />
          <FormField
            label="Your Message"
            name="message"
            type="textarea"
            placeholder="I'd like to discuss..."
            v-model="message"
          />
          <button
            type="submit"
            :disabled="formStatus === 'submitting'"
            class="w-full bg-indigo-500 text-white font-bold py-2 rounded hover:bg-indigo-600 transition duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {{ formStatus === 'submitting' ? 'Sending...' : 'Send Message' }}
          </button>
          <div
            v-if="formMessage"
            class="mt-4 text-center p-2 rounded-lg"
            :class="{
              'bg-green-800 text-green-200': formStatus === 'success',
              'bg-red-800 text-red-200': formStatus === 'error',
            }"
          >
            {{ formMessage }}
          </div>
        </form>
      </section>
    </section>
  </main>
</template>

<style lang="css" scoped>
.font-lora {
  font-family: "Lora", serif;
  font-weight: 400;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}

/* for smaller screens, remove the hero section that contains the image. let only the form section be displayed and in one column */
@media (max-width: 768px) {
  .hero-section {
    display: none;
  }
  .form-section {
    grid-column: 1 / -1;
    border-left: none;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
