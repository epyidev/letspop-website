<script setup lang="ts">
import BackgroundGrid from "./components/BackgroundGrid.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="relative overflow-x-hidden">
    <div class="text-white bg-zinc-950 relative">
      <BackgroundGrid class="pointer-events-none" />

      <main class="relative z-10">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>
