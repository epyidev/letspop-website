<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

// Opacity starts at 1 and decreases linearly until the scroll position reaches 200 px.
const opacity = ref(1);

const updateOpacity = () => {
  const y = window.scrollY || 0;
  // Clamp between 0 and 1
  opacity.value = y >= 200 ? 0 : 1 - y / 200;
};

onMounted(() => {
  updateOpacity();
  window.addEventListener("scroll", updateOpacity, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateOpacity);
});

const indicatorStyle = computed(() => ({
  opacity: opacity.value,
}));
</script>

<template>
  <div
    class="absolute bottom-8 flex flex-col items-center animate-bounce"
    :style="indicatorStyle"
  >
    <span class="text-sm text-white/60 mb-3">Scroll Down</span>
    
    <!-- Animation de souris -->
    <div class="mouse-animation">
      <div class="mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mouse-animation {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mouse {
  width: 20px;
  height: 32px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  position: relative;
  background: transparent;
}

.scroll-wheel {
  width: 2px;
  height: 6px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-down 2s infinite;
}

@keyframes scroll-down {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(8px);
  }
}
</style>
