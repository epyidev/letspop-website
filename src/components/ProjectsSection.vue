<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  logo: string;
  link: string;
}

const projects = ref<Project[]>([]);
const loading = ref(true);
const error = ref(false);
const selectedProject = ref<Project | null>(null);
const showModal = ref(false);

const loadProjects = async () => {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) throw new Error('Failed to load projects');
    const data = await response.json();
    projects.value = data.projects || [];
  } catch (err) {
    console.error('Error loading projects:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const openProjectModal = (project: Project) => {
  selectedProject.value = project;
  showModal.value = true;
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  selectedProject.value = null;
  // Restore body scroll
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <section id="projects" class="py-32 px-4 relative">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-[#328eee] to-[#5241d9] bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p class="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
          Discover the innovative projects we're developing and launching through Let's PoP!
        </p>
      </div>

      <!-- Projects Grid -->
      <div v-if="loading" class="text-center py-20">
        <div class="w-16 h-16 mx-auto mb-8 border-4 border-[#328eee] border-t-transparent rounded-full animate-spin"></div>
        <p class="text-white/60 text-lg">Loading projects...</p>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center">
          <Icon icon="lucide:alert-triangle" class="text-6xl text-red-500" />
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">Error Loading Projects</h3>
        <p class="text-white/60 text-lg max-w-md mx-auto">
          Unable to load projects. Please try again later.
        </p>
      </div>

      <div v-else-if="projects.length === 0" class="text-center py-20">
        <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#328eee]/20 to-[#5241d9]/20 rounded-full flex items-center justify-center">
          <Icon icon="lucide:rocket" class="text-6xl text-[#328eee]" />
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">Coming Soon</h3>
        <p class="text-white/60 text-lg max-w-md mx-auto">
          Exciting projects are in development. Stay tuned for amazing innovations!
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group relative"
        >
          <!-- Project Card -->
          <div class="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#328eee]/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#328eee]/10 flex flex-col">
            
            <!-- Project Header -->
            <div class="flex items-center space-x-4 mb-6">
              <!-- Project Logo -->
              <div class="relative">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#328eee]/20 to-[#5241d9]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    v-if="project.logo"
                    :src="project.logo"
                    :alt="project.name"
                    class="w-10 h-10 object-contain"
                  />
                  <Icon v-else icon="lucide:box" class="text-[#328eee] text-2xl" />
                </div>
                <div class="absolute -inset-1 bg-gradient-to-r from-[#328eee] to-[#5241d9] rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <!-- Project Info -->
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-[#328eee] transition-colors duration-300">
                  {{ project.name }}
                </h3>
              </div>
            </div>

            <!-- Project Description -->
            <div class="flex-1 mb-6">
              <p class="text-white/80 text-lg leading-relaxed line-clamp-3">
                {{ project.shortDescription }}
              </p>
              <button
                @click="openProjectModal(project)"
                class="text-[#328eee] hover:text-[#2980d9] font-medium mt-2 inline-flex items-center space-x-1 transition-colors duration-200 group/readmore cursor-pointer"
              >
                <span>Read more</span>
                <Icon icon="lucide:arrow-right" class="text-sm group-hover/readmore:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <!-- Project Actions -->
            <div class="flex justify-end items-center mt-auto">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#328eee] to-[#5241d9] text-white rounded-xl font-semibold hover:from-[#2980d9] hover:to-[#4930c4] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#328eee]/25"
              >
                <span>Visit Project</span>
                <Icon icon="lucide:external-link" class="text-sm" />
              </a>
            </div>

            <!-- Hover Effect Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#328eee]/5 to-[#5241d9]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Popup -->
    <Transition name="modal" appear>
      <div
        v-if="showModal && selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Modal Backdrop -->
        <Transition name="backdrop" appear>
          <div class="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
        </Transition>
        
        <!-- Modal Content -->
        <Transition name="modal-content" appear>
          <div
            class="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/[0.12] to-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl modal-content"
            @click.stop
          >
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#328eee]/20 to-[#5241d9]/20 flex items-center justify-center">
                <img
                  v-if="selectedProject.logo"
                  :src="selectedProject.logo"
                  :alt="selectedProject.name"
                  class="w-10 h-10 object-contain"
                />
                <Icon v-else icon="lucide:box" class="text-[#328eee] text-2xl" />
              </div>
              <h2 class="text-3xl font-bold text-white">
                {{ selectedProject.name }}
              </h2>
            </div>
            
            <button
              @click="closeModal"
              class="p-2 hover:bg-white/10 rounded-xl transition-colors duration-200 group cursor-pointer"
            >
              <Icon icon="lucide:x" class="text-white text-2xl group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <!-- Short Description -->
          <div class="mb-6 p-6 bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl">
            <h3 class="text-lg font-semibold text-[#328eee] mb-3">Overview</h3>
            <p class="text-white/90 text-base leading-relaxed">
              {{ selectedProject.shortDescription }}
            </p>
          </div>

          <!-- Full Description -->
          <div class="mb-8 p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
            <h3 class="text-xl font-semibold text-white mb-4">About this project</h3>
            <p class="text-white/85 text-lg leading-relaxed">
              {{ selectedProject.fullDescription }}
            </p>
          </div>

          <!-- Modal Actions -->
          <div class="flex justify-end space-x-4">
            <a
              v-if="selectedProject.link"
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#328eee] to-[#5241d9] text-white rounded-xl font-semibold hover:from-[#2980d9] hover:to-[#4930c4] transition-all duration-300 transform hover:scale-105"
            >
              <span>Visit Project</span>
              <Icon icon="lucide:external-link" class="text-sm" />
            </a>
          </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Beautiful Modal Animations */
.modal-enter-active {
  transition: all 0.1s ease-out;
}

.modal-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Backdrop Animation - appears first and faster */
.backdrop-enter-active {
  transition: all 0.25s ease-out;
}

.backdrop-leave-active {
  transition: all 0.3s ease-in-out;
}

.backdrop-enter-from {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.backdrop-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* Modal Content Animation - appears after backdrop with nice effect */
.modal-content-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 0.1s;
}

.modal-content-leave-active {
  transition: all 0.25s ease-in-out;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(30px);
  filter: blur(4px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
  filter: blur(2px);
}

/* Enhanced hover effects for read more */
.group\/readmore:hover .lucide-arrow-right {
  animation: arrowBounce 0.6s ease-in-out infinite;
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}

/* Prevent scroll when modal is open */
body.modal-open {
  overflow: hidden;
}

/* Enhanced scrollbar for modal content */
.modal-content::-webkit-scrollbar {
  width: 10px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  margin: 8px 0;
}

.modal-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #328eee 0%, #5241d9 100%);
  border-radius: 6px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #2980d9 0%, #4930c4 100%);
  background-clip: content-box;
}

/* Enhanced card animations */
.group:hover .absolute.inset-0 {
  animation: cardGlow 0.5s ease-out forwards;
}

@keyframes cardGlow {
  0% {
    opacity: 0;
    box-shadow: 0 0 0 rgba(50, 142, 238, 0);
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 30px rgba(50, 142, 238, 0.15);
  }
}
</style>
