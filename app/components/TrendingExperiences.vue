<template>
  <section class="trending-section py-12">
    <UContainer>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400">
          Experiências desejadas pela comunidade
        </h2>
        <UButton
          to="/trending"
          color="primary"
          variant="ghost"
          icon="i-heroicons-arrow-right"
          trailing
          :ui="{ rounded: 'rounded-full' }"
        >
          Ver todas
        </UButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          v-for="(experience, index) in trendingExperiences"
          :key="index"
          class="experience-card relative overflow-hidden rounded-xl shadow-lg border border-gray-700 transform translate-y-0 transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Background Image -->
          <div class="relative">
            <img
              :src="experience.image"
              :alt="experience.title"
              class="w-full h-48 object-cover"
            >
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <!-- Badge in top left -->
            <div class="absolute top-3 left-3">
              <UBadge
                :color="getTrendingBadgeColor(experience)"
                variant="solid"
                size="sm"
                class="font-semibold text-xs"
              >
                {{ experience.badge }}
              </UBadge>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4 bg-gray-800 flex flex-col">
            <h3 class="text-lg font-bold text-white mb-2 line-clamp-2">{{ experience.title }}</h3>

            <div class="flex items-center gap-2 mb-3">
              <UIcon :name="getTrendingIcon(experience)" :class="`text-${getProgressColor(experience)}-500 w-4 h-4`" />
              <div class="text-xs text-gray-300">
                <span>{{ experience.trending }}</span>
              </div>
            </div>

            <UProgress
              :value="getProgressValue(experience)"
              :color="getProgressColor(experience)"
              class="mb-3"
              :ui="{
                base: 'relative h-1.5 overflow-hidden rounded-full',
                track: { background: 'bg-gray-700' },
                progress: { background: `bg-gradient-to-r from-${getProgressColor(experience)}-600 to-${getProgressColor(experience)}-400` }
              }"
            />

            <div class="mt-auto flex justify-between items-center">
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-heart" :class="`${experience.userVoted ? 'text-rose-500' : 'text-gray-400'} w-4 h-4`" />
                <span class="text-xs text-gray-300">{{ experience.votes }} votos</span>
              </div>

              <UButton
                :to="`/trending#${experience.id}`"
                color="white"
                variant="ghost"
                size="xs"
                :ui="{
                  base: 'font-medium',
                  rounded: 'rounded-full',
                  padding: 'px-3',
                  size: { xs: 'text-xs' }
                }"
              >
                Ver detalhes
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Trending experiences data from API
const trendingExperiences = ref([])
const loading = ref(true)

// Fetch trending experiences
onMounted(async () => {
  try {
    trendingExperiences.value = await $fetch('/api/trending')
  } catch (error) {
    console.error('Failed to load trending experiences:', error)
  } finally {
    loading.value = false
  }
})

// Get badge color based on experience type
function getTrendingBadgeColor(experience) {
  if (experience.badge.includes('Hot')) return 'rose'
  if (experience.badge.includes('Raro')) return 'blue'
  if (experience.badge.includes('Trending')) return 'amber'
  return 'gray'
}

function getProgressValue(experience) {
  // Calcular progresso baseado nos votos como % do objetivo de votos
  const voteGoal = 1000 // Meta hipotética
  return Math.min(100, (experience.votes / voteGoal) * 100)
}

function getProgressColor(experience) {
  if (experience.badge.includes('Hot')) return 'rose'
  if (experience.badge.includes('Raro')) return 'blue'
  if (experience.userVoted) return 'green'
  if (experience.trending === "Em alta") return 'amber'
  return 'primary'
}

function getTrendingIcon(experience) {
  if (experience.trending.includes('Viral')) return 'i-heroicons-fire'
  if (experience.trending.includes('Em alta')) return 'i-heroicons-chart-bar'
  if (experience.trending.includes('Explosivo')) return 'i-heroicons-sparkles'
  if (experience.trending.includes('Único')) return 'i-heroicons-light-bulb'
  return 'i-heroicons-arrow-trending-up'
}
</script>

<style scoped>
.trending-section {
  background-color: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.experience-card {
  background-color: rgba(26, 32, 44, 0.95);
}

@media (hover: hover) {
  .experience-card:hover {
    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.2);
  }
}
</style>