<script setup lang="ts"></script>

<!-- Contact me that allows a form to be filled with fullname, email and message and the message is delivered to recipients email address -->

<template>
  <main class="bg-gray-900 text-gray-300">
    <!-- Title -->
    <div class="flex justify-center mb-6">
      <h2 class="font-roboto text-center text-2xl md:text-3xl font-bold text-indigo-400 pb-2 relative">
        Contact Me
        <span
          class="block absolute left-1/2 -translate-x-1/2 mt-2 w-[120%] h-0.5 bg-indigo-400"
          style="bottom: 0"
        ></span>
      </h2>
    </div>

    <section class="grid grid-cols-2 gap-4">
      <!-- Hero Section -->
      <section
        class="font-lora relative bg-gray-900 flex items-center justify-center min-h-[220px] md:min-h-[320px] overflow-hidden pr-6 md:pr-10"
      >
        <img
          src="../assets/images/contactme.jpeg"
          alt="Contact Me"
          class="absolute inset-0 w-full h-full object-cover opacity-60 rounded-lg m-4"
          style="z-index: 0"
        />
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <p class="text-gray-300 text-center text-lg md:text-xl font-semibold drop-shadow-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      <section
        class="font-lora p-6 md:p-12 bg-gray-900 text-gray-300 pl-6 md:pl-10"
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
        <form class="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="fullname" class="block text-gray-200 font-bold mb-2">Your Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-200 font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-200 font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-500 text-white font-bold py-2 rounded hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
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
</style>
