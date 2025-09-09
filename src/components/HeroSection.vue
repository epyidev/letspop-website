<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { siteConfig } from '../config/site';
</script>

<template>
  <div class="text-center max-w-5xl mx-auto mt-20 mb-16 relative">
    <!-- Logo brut -->
    <div class="mb-12 flex justify-center">
      <img src="/src/assets/logo_white.png" alt="Let's PoP! Logo" class="w-96 h-auto object-contain logo-float" />
    </div>
    
    <!-- Description -->
    <p class="text-white/80 text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
      {{ siteConfig.description }}
    </p>

    <!-- Call to action buttons -->
    <div class="flex justify-center mb-16">
      <a
        href="#projects"
        class="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#328eee] to-[#5241d9] text-white rounded-2xl font-semibold text-lg hover:from-[#2980d9] hover:to-[#4930c4] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#328eee]/25"
      >
        <span>Explore Our Projects</span>
        <Icon icon="lucide:arrow-down" class="text-lg group-hover:translate-y-1 transition-transform duration-300" />
      </a>
    </div>

  <!-- ...existing code... -->
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.logo-float {
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(50, 142, 238, 0.3));
  transform-origin: center center;
}
</style>
