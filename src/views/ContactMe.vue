<script setup lang="ts">
import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
import FormField from "../components/UI/FormField.vue";

const fullName = ref("");
const email = ref("");
const message = ref("");
const formStatus = ref<"idle" | "submitting" | "success" | "error">("idle");
const formMessage = ref("");

// Individual field validation states
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

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation functions
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

// Check if form is valid
const isFormValid = computed(() => {
  return fieldSuccess.value.fullName &&
         fieldSuccess.value.email &&
         fieldSuccess.value.message &&
         !fieldErrors.value.fullName &&
         !fieldErrors.value.email &&
         !fieldErrors.value.message;
});

const handleSubmit = async () => {
  // Validate all fields before submission
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

    // Reset form
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
        <svg
          class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg m-4 z-0"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Left Hand -->
          <g id="leftHand" transform="translate(150, 250)">
            <path
              d="M0 80 Q20 60, 40 80 L40 120 Q40 140, 20 140 L0 140 Z"
              fill="url(#handGradient1)"
              stroke="#818CF8"
              stroke-width="2"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 20,0; 0,0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <!-- Fingers -->
            <rect x="40" y="70" width="8" height="25" rx="4" fill="url(#handGradient1)">
              <animate attributeName="height" values="25;30;25" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="50" y="65" width="8" height="30" rx="4" fill="url(#handGradient1)">
              <animate attributeName="height" values="30;35;30" dur="2.2s" repeatCount="indefinite" />
            </rect>
            <rect x="60" y="70" width="8" height="25" rx="4" fill="url(#handGradient1)">
              <animate attributeName="height" values="25;30;25" dur="2.4s" repeatCount="indefinite" />
            </rect>
            <rect x="70" y="75" width="8" height="20" rx="4" fill="url(#handGradient1)">
              <animate attributeName="height" values="20;25;20" dur="2.6s" repeatCount="indefinite" />
            </rect>
          </g>

          <!-- Right Hand -->
          <g id="rightHand" transform="translate(550, 250)">
            <path
              d="M80 80 Q60 60, 40 80 L40 120 Q40 140, 60 140 L80 140 Z"
              fill="url(#handGradient2)"
              stroke="#60A5FA"
              stroke-width="2"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -20,0; 0,0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
            <!-- Fingers -->
            <rect x="32" y="70" width="8" height="25" rx="4" fill="url(#handGradient2)">
              <animate attributeName="height" values="25;30;25" dur="2.8s" repeatCount="indefinite" />
            </rect>
            <rect x="22" y="65" width="8" height="30" rx="4" fill="url(#handGradient2)">
              <animate attributeName="height" values="30;35;30" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="12" y="70" width="8" height="25" rx="4" fill="url(#handGradient2)">
              <animate attributeName="height" values="25;30;25" dur="3.2s" repeatCount="indefinite" />
            </rect>
            <rect x="2" y="75" width="8" height="20" rx="4" fill="url(#handGradient2)">
              <animate attributeName="height" values="20;25;20" dur="3.4s" repeatCount="indefinite" />
            </rect>
          </g>

          <!-- Connection Lines (representing the handshake) -->
          <path
            d="M270 320 Q400 280, 530 320"
            stroke="url(#connectionGradient)"
            stroke-width="6"
            fill="none"
            stroke-dasharray="20 10"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-30;0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="6;8;6"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M280 340 Q400 300, 520 340"
            stroke="url(#connectionGradient)"
            stroke-width="4"
            fill="none"
            stroke-dasharray="15 8"
            opacity="0.7"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-23;0"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>

          <!-- Floating connection particles -->
          <circle cx="350" cy="300" r="3" fill="#F472B6" opacity="0.8">
            <animate attributeName="cy" values="300;280;300" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>

          <circle cx="400" cy="290" r="2" fill="#818CF8" opacity="0.6">
            <animate attributeName="cy" values="290;270;290" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="cx" values="400;410;400" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
          </circle>

          <circle cx="450" cy="305" r="2.5" fill="#60A5FA" opacity="0.7">
            <animate attributeName="cy" values="305;285;305" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
          </circle>

          <!-- Background decorative elements -->
          <circle cx="200" cy="150" r="40" fill="none" stroke="#818CF8" stroke-width="2" opacity="0.3">
            <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
          </circle>

          <circle cx="600" cy="450" r="35" fill="none" stroke="#60A5FA" stroke-width="2" opacity="0.4">
            <animate attributeName="r" values="35;45;35" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>

          <defs>
            <linearGradient id="handGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#818CF8" />
              <stop offset="100%" stop-color="#C4B5FD" />
            </linearGradient>

            <linearGradient id="handGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#60A5FA" />
              <stop offset="100%" stop-color="#3B82F6" />
            </linearGradient>

            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#818CF8" />
              <stop offset="50%" stop-color="#F472B6" />
              <stop offset="100%" stop-color="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p class="text-gray-300 text-center text-lg md:text-xl font-semibold drop-shadow-lg animate-fade-in-up">
            <span class="inline-block animate-bounce-slow">Contact</span>
            <span class="inline-block animate-pulse-slow delay-200">Me</span>
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
            placeholder="Tell me about your project, idea, or just say hello! I'd love to hear from you..."
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
