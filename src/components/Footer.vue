<template>
  <footer
    class="border-t border-white/10 py-6 px-4 md:px-8 bg-zinc-950 text-white z-20 relative"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center"
    >
      <div class="flex items-center gap-2">
        <span class="font-semibold">© {{ new Date().getFullYear() }} Let's PoP!</span>
        <span class="text-white/60">Propel Our Projects</span>
      </div>
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="hover:text-[#328eee] transition-colors"
          >Home</RouterLink
        >
        <RouterLink
          to="/terms-of-use"
          class="hover:text-[#328eee] transition-colors"
          >Terms of Use</RouterLink
        >
      </div>
    </div>
  </footer>
</template>
