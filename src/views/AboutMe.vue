<script setup lang="ts">
import ContactMe from "../components/buttons/ContactMe.vue";
import ResumeButton from "../components/buttons/ResumeButton.vue";
import BracketLikeCurve from "../components/unnamed/BracketLikeCurve.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Image -->
    <div class="w-full hidden md:block">
      <svg
          class="w-full h-auto object-cover transform scale-95 hover:scale-100 transition-transform duration-700 ease-in-out rounded-xl"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <rect width="800" height="600" fill="#111827" />
          <g filter="url(#filter0_f_1_2)">
            <circle cx="400" cy="300" r="100" fill="#6366F1" />
          </g>
          <g filter="url(#filter1_f_1_2)">
            <circle cx="200" cy="400" r="50" fill="#818CF8" />
          </g>
          <g filter="url(#filter2_f_1_2)">
            <circle cx="600" cy="200" r="75" fill="#A5B4FC" />
          </g>
        </g>
        <g class="text-gray-600" stroke="currentColor" stroke-width="2">
          <!-- Grid Lines Animation -->
          <path stroke-dasharray="800" stroke-dashoffset="800" d="M0 200 L800 200">
            <animate attributeName="stroke-dashoffset" values="800;0;0;800" dur="7s" begin="0s" repeatCount="indefinite" />
          </path>
          <path stroke-dasharray="800" stroke-dashoffset="800" d="M0 400 L800 400">
            <animate attributeName="stroke-dashoffset" values="800;0;0;800" dur="7s" begin="0.2s" repeatCount="indefinite" />
          </path>
          <path stroke-dasharray="600" stroke-dashoffset="600" d="M200 0 L200 600">
            <animate attributeName="stroke-dashoffset" values="600;0;0;600" dur="7s" begin="0.4s" repeatCount="indefinite" />
          </path>
          <path stroke-dasharray="600" stroke-dashoffset="600" d="M400 0 L400 600">
            <animate attributeName="stroke-dashoffset" values="600;0;0;600" dur="7s" begin="0.6s" repeatCount="indefinite" />
          </path>
          <path stroke-dasharray="600" stroke-dashoffset="600" d="M600 0 L600 600">
            <animate attributeName="stroke-dashoffset" values="600;0;0;600" dur="7s" begin="0.8s" repeatCount="indefinite" />
          </path>
        </g>
        <text
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-dasharray="500"
            stroke-dashoffset="500"
            class="text-6xl font-bold text-gray-500"
        >
          ABOUT ME | ANIEBIET AFIA
          <!-- Text Drawing Animation - Draw in -->
          <animate
              attributeName="stroke-dashoffset"
              values="500;0"
              dur="2s"
              begin="1s"
              repeatCount="indefinite"
          />
          <!-- Text Drawing Animation - Erase -->
          <animate
              attributeName="stroke-dashoffset"
              values="0;500"
              dur="1s"
              begin="5s"
              repeatCount="indefinite"
          />
          <!-- Text Fill Animation - Fill in -->
          <animate
              attributeName="fill"
              values="none;currentColor"
              dur="1s"
              begin="2.5s"
              repeatCount="indefinite"
          />
          <!-- Text Fill Animation - Remove fill -->
          <animate
              attributeName="fill"
              values="currentColor;none"
              dur="1s"
              begin="5s"
              repeatCount="indefinite"
          />
          <!-- Main animation loop trigger -->
          <animate
              attributeName="opacity"
              values="1"
              dur="6.8s"
              repeatCount="indefinite"
          />
        </text>
        <defs>
          <filter
              id="filter0_f_1_2"
              x="200"
              y="100"
              width="400"
              height="400"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
              id="filter1_f_1_2"
              x="50"
              y="250"
              width="300"
              height="300"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
              id="filter2_f_1_2"
              x="425"
              y="25"
              width="350"
              height="350"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_1_2"
            />
          </filter>
        </defs>
      </svg>
    </div>

    <!-- Text Content -->
    <div>
      <BracketLikeCurve title="About Me" />

      <div class="lora-about-me space-y-6 text-base leading-relaxed">
        <!-- Opening Hook -->
        <div class="relative">
          <p class="text-lg font-medium text-gray-200 opacity-95 transform transition duration-700 ease-in-out translate-y-2 hover:translate-y-0 hover:opacity-100">
            Building scalable solutions that bridge <span class="text-indigo-400 font-semibold">innovation</span> and
            <span class="text-amber-500 font-semibold">reliability</span> — one line of code at a time.
          </p>
          <div class="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-amber-500 rounded-full opacity-60"></div>
        </div>

        <!-- Professional Overview -->
        <div class="bg-gray-800/30 rounded-lg p-4 border-l-4 border-indigo-500 backdrop-blur-sm transform transition duration-700 ease-in-out translate-y-3 hover:translate-y-0 hover:bg-gray-800/50">
          <p class="opacity-90 hover:opacity-100 transition-opacity duration-300">
            As a passionate <strong class="text-indigo-300">Software Engineer</strong> with expertise in backend development,
            I specialize in architecting robust systems using <span class="text-amber-400">Java & Spring Boot</span>,
            <span class="text-green-400">Node.js & TypeScript</span>, and <span class="text-blue-400">Python</span>.
            My focus lies in creating enterprise-grade applications that scale effortlessly and perform reliably under pressure.
          </p>
        </div>

        <!-- Technical Expertise -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <h3 class="text-indigo-400 font-semibold text-sm uppercase tracking-wide">Backend Mastery</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                Enterprise Java & Spring Boot ecosystems
              </li>
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                Modern Node.js with NestJS & Express
              </li>
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                Python for rapid prototyping & APIs
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="text-amber-500 font-semibold text-sm uppercase tracking-wide">Core Values</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                Clean, maintainable code architecture
              </li>
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                Test-driven development practices
              </li>
              <li class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                Continuous learning mindset
              </li>
            </ul>
          </div>
        </div>

        <!-- Personal Philosophy -->
        <div class="relative bg-gradient-to-r from-indigo-900/20 to-amber-900/20 rounded-lg p-4 border border-indigo-500/30">
          <div class="absolute top-2 left-2 text-indigo-400 text-2xl opacity-50">"</div>
          <p class="italic text-gray-300 pl-6 pr-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
            I believe technology should solve real problems elegantly. Every system I build is crafted with scalability,
            security, and user experience at its core. My approach combines technical excellence with pragmatic
            problem-solving to deliver solutions that stand the test of time.
          </p>
          <div class="absolute bottom-2 right-2 text-amber-500 text-2xl opacity-50 rotate-180">"</div>
        </div>

        <!-- Current Focus -->
        <div class="bg-gray-800/40 rounded-lg p-4 border border-gray-600">
          <h3 class="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Currently Exploring
          </h3>
          <p class="text-sm opacity-85 hover:opacity-100 transition-opacity duration-300">
            Diving deeper into <span class="text-indigo-300">cloud-native architectures</span>,
            <span class="text-amber-300">microservices patterns</span>, and
            <span class="text-green-300">AI/ML integration</span> to stay ahead of the technological curve.
            Always seeking opportunities to contribute to open-source projects and collaborate with fellow engineers.
          </p>
        </div>

        <!-- Call to Action -->
        <div class="text-center space-y-2">
          <p class="text-indigo-300 font-medium transition duration-700 ease-in-out hover:text-indigo-400">
            Ready to collaborate on your next innovative project?
          </p>
          <p class="text-amber-400 font-semibold text-lg">
            Let's create something
            <span class="bg-gradient-to-r from-indigo-400 to-amber-500 bg-clip-text text-transparent animate-pulse">
              extraordinary
            </span>
            together!
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 pb-3 flex flex-wrap justify-center gap-4">
        <ResumeButton
          text="View Resume"
          href='https://docs.google.com/document/d/1DIj7B9wx47pBMTD4-cg5ypzbcgWpr2_hJqspr79y0-M/edit?usp=sharing'
          variant="primary"
          size="md"
          showIcon
          actionType="view" />
        <ResumeButton
          text="Download Resume"
          href="/java-developer-aniebietafia.pdf"
          variant="secondary"
          size="md"
          showIcon
          actionType="download" />
        <ContactMe />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lora-about-me {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>