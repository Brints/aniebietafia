<script setup lang="ts">
import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
import BracketLikeCurve from "../components/tools/BracketLikeCurve.vue";
import FormField from "../components/UI/FormField.vue";
import HandShake from "../svgs/HandShake.vue";

const fullName = ref("");
const email = ref("");
const message = ref("");
const formStatus = ref<"idle" | "submitting" | "success" | "error">("idle");
const formMessage = ref("");

const fieldErrors = ref({
  fullName: "",
  email: "",
  message: ""
});

const fieldSuccess = ref({
  fullName: false,
  email: false,
  message: false
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateFullName = () => {
  if (!fullName.value.trim()) {
    fieldErrors.value.fullName = "Full name is required";
    fieldSuccess.value.fullName = false;
  } else if (fullName.value.trim().length < 2) {
    fieldErrors.value.fullName = "Name must be at least 2 characters";
    fieldSuccess.value.fullName = false;
  } else {
    fieldErrors.value.fullName = "";
    fieldSuccess.value.fullName = true;
  }
};

const validateEmail = () => {
  if (!email.value.trim()) {
    fieldErrors.value.email = "Email address is required";
    fieldSuccess.value.email = false;
  } else if (!emailRegex.test(email.value)) {
    fieldErrors.value.email = "Please enter a valid email address";
    fieldSuccess.value.email = false;
  } else {
    fieldErrors.value.email = "";
    fieldSuccess.value.email = true;
  }
};

const validateMessage = () => {
  if (!message.value.trim()) {
    fieldErrors.value.message = "Message is required";
    fieldSuccess.value.message = false;
  } else if (message.value.trim().length < 10) {
    fieldErrors.value.message = "Message must be at least 10 characters";
    fieldSuccess.value.message = false;
  } else {
    fieldErrors.value.message = "";
    fieldSuccess.value.message = true;
  }
};

const isFormValid = computed(() => {
  return fieldSuccess.value.fullName &&
         fieldSuccess.value.email &&
         fieldSuccess.value.message &&
         !fieldErrors.value.fullName &&
         !fieldErrors.value.email &&
         !fieldErrors.value.message;
});

const handleSubmit = async () => {
  validateFullName();
  validateEmail();
  validateMessage();

  if (!isFormValid.value) {
    formStatus.value = "error";
    formMessage.value = "Please fix the errors above before submitting.";
    return;
  }

  formStatus.value = "submitting";
  formMessage.value = "";

  try {
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

    // Reset form fields
    fullName.value = "";
    email.value = "";
    message.value = "";
    fieldErrors.value = { fullName: "", email: "", message: "" };
    fieldSuccess.value = { fullName: false, email: false, message: false };
  } catch (error) {
    formStatus.value = "error";
    formMessage.value = "Sorry, there was an error sending your message. Please try again later.";
    console.error("EmailJS error:", error);
  }
};

// Handle field blur events for validation
const handleFullNameBlur = () => {
  if (fullName.value.trim()) validateFullName();
};

const handleEmailBlur = () => {
  if (email.value.trim()) validateEmail();
};

const handleMessageBlur = () => {
  if (message.value.trim()) validateMessage();
};
</script>

<template>
  <main class="bg-gray-900 text-gray-300">
    <!-- Title -->
    <BracketLikeCurve title="Contact Me" variant="accent" size="lg"/>

    <section class="grid grid-cols-2 gap-4">
      <!-- Hero Section -->
      <section
        class="hero-section font-lora relative bg-gray-900 flex items-center justify-center min-h-[220px] md:min-h-[320px] overflow-hidden pr-6 md:pr-10"
      >
        <HandShake />
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
        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          <FormField
            label="Your Full Name"
            name="fullname"
            type="text"
            placeholder="John Doe"
            v-model="fullName"
            :error="fieldErrors.fullName"
            :success="fieldSuccess.fullName"
            :loading="formStatus === 'submitting'"
            :required="true"
            icon="👤"
            @blur="handleFullNameBlur"
          />

          <FormField
            label="Your Email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            v-model="email"
            :error="fieldErrors.email"
            :success="fieldSuccess.email"
            :loading="formStatus === 'submitting'"
            :required="true"
            icon="📧"
            @blur="handleEmailBlur"
          />

          <FormField
            label="Your Message"
            name="message"
            type="textarea"
            placeholder="I'd love to discuss about that exciting project! 😊"
            v-model="message"
            :error="fieldErrors.message"
            :success="fieldSuccess.message"
            :loading="formStatus === 'submitting'"
            :required="true"
            icon="💬"
            @blur="handleMessageBlur"
          />

          <button
            type="submit"
            :disabled="formStatus === 'submitting' || !isFormValid"
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <svg
              v-if="formStatus === 'submitting'"
              class="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ formStatus === 'submitting' ? 'Sending Message...' : 'Send Message' }}</span>
          </button>

          <!-- Enhanced success/error messages -->
          <div
            v-if="formMessage"
            class="p-4 rounded-lg flex items-start gap-3 transition-all duration-300"
            :class="{
              'bg-green-900/50 border border-green-500/20': formStatus === 'success',
              'bg-red-900/50 border border-red-500/20': formStatus === 'error',
            }"
          >
            <!-- Success icon -->
            <svg
              v-if="formStatus === 'success'"
              class="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>

            <!-- Error icon -->
            <svg
              v-else-if="formStatus === 'error'"
              class="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>

            <div>
              <p
                class="text-sm font-medium"
                :class="{
                  'text-green-300': formStatus === 'success',
                  'text-red-300': formStatus === 'error',
                }"
              >
                {{ formMessage }}
              </p>
              <p
                v-if="formStatus === 'success'"
                class="text-xs text-green-400 mt-1"
              >
                I'll get back to you as soon as possible!
              </p>
            </div>
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

/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-bounce-slow {
  animation: bounce 2s infinite;
}

.animate-pulse-slow {
  animation: pulse 2s infinite;
}
</style>
