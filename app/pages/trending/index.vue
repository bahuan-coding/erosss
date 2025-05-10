<template>
  <div>
    <UContainer class="py-16 md:py-24">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <UBadge 
          size="lg" 
          color="primary" 
          variant="subtle" 
          class="mb-4"
          :ui="{ 
            base: 'font-bold uppercase tracking-wider',
            size: { lg: 'text-sm px-4 py-1' }
          }"
        >
          🔥 Tendências • Trending
        </UBadge>
        
        <h1 class="text-3xl md:text-5xl font-bold mb-4" style="background: linear-gradient(90deg, #9333ea, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
          Ideias da Comunidade
        </h1>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore e vote nas ideias de experiências da comunidade. As mais votadas serão realizadas pelas nossas modelos.
        </p>
      </div>

      <!-- Filter/Sort Controls -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div class="flex flex-wrap gap-2">
          <UButton 
            size="sm"
            color="primary" 
            variant="soft" 
            :ui="{ rounded: 'rounded-full' }"
          >
            Em Alta
          </UButton>
          <UButton 
            size="sm"
            color="gray" 
            variant="soft" 
            :ui="{ rounded: 'rounded-full' }"
          >
            Recentes
          </UButton>
          <UButton 
            size="sm"
            color="gray" 
            variant="soft" 
            :ui="{ rounded: 'rounded-full' }"
          >
            Controversos
          </UButton>
          <UButton 
            size="sm"
            color="gray" 
            variant="soft" 
            :ui="{ rounded: 'rounded-full' }"
          >
            Mais Votados
          </UButton>
        </div>
        
        <UButton 
          color="primary"
          variant="solid"
          icon="i-heroicons-plus"
          :ui="{ rounded: 'rounded-full' }"
        >
          Criar Nova Ideia
        </UButton>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <UIcon name="i-heroicons-clock" class="text-primary-600 dark:text-primary-400 w-16 h-16 animate-pulse mb-4" />
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Carregando tendências...</p>
      </div>

      <!-- Trending Ideas Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="(experience, index) in trendingExperiences" :key="index" class="trending-card relative">
          <div class="bg-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <div class="p-5">
              <!-- Title with trending badge -->
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-bold text-white line-clamp-2">{{ experience.title }}</h3>
                <UBadge 
                  :color="getTrendingBadgeColor(experience)"
                  variant="solid"
                  class="flex-shrink-0 text-xs font-bold"
                >
                  {{ experience.badge }}
                </UBadge>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 text-sm mb-4 line-clamp-3">{{ experience.description }}</p>
              
              <!-- User desire quote -->
              <div class="quote-box bg-gray-700/50 rounded-lg p-3 mb-4">
                <p class="text-xs text-gray-300 italic mb-2 line-clamp-2">
                  <span class="text-primary-400">"</span>{{ experience.quote }}<span class="text-primary-400">"</span>
                </p>
                <div class="flex justify-between items-center">
                  <p class="text-xs text-gray-400">{{ experience.userName }}</p>
                  <p class="text-xs text-primary-400">{{ experience.likes }}K likes</p>
                </div>
              </div>
              
              <!-- Stats -->
              <div class="flex flex-col space-y-2 text-xs text-gray-400 mb-4">
                <div v-for="(stat, statIndex) in experience.stats" :key="statIndex" class="flex items-center">
                  <UIcon name="i-heroicons-chart-bar" class="mr-1 w-4 h-4 text-primary-400" />
                  <span>{{ stat.label }}: <span class="text-gray-300">{{ stat.value }}</span></span>
                </div>
                <div class="flex items-center mt-1">
                  <UIcon name="i-heroicons-fire" class="mr-1 w-4 h-4 text-rose-500" />
                  <span>{{ experience.trending }}</span>
                </div>
              </div>
              
              <!-- Vote Actions -->
              <div class="flex justify-between items-center">
                <UButton
                  size="xs"
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-chat-bubble-left-ellipsis"
                  :ui="{
                    rounded: 'rounded-full',
                    padding: 'px-3'
                  }"
                >
                  {{ experience.comments }}
                </UButton>
                
                <div class="flex items-center gap-2">
                  <UButton
                    size="xs"
                    color="white"
                    :variant="experience.userVoted ? 'solid' : 'ghost'"
                    icon="i-heroicons-heart"
                    :ui="{
                      rounded: 'rounded-full',
                      padding: 'px-4',
                      variant: {
                        solid: 'bg-rose-500 text-white border-rose-500'
                      }
                    }"
                    @click="toggleVote(index)"
                  >
                    {{ experience.votes }}
                  </UButton>
                  
                  <UButton
                    size="xs"
                    color="primary"
                    variant="ghost"
                    icon="i-heroicons-bell"
                    :ui="{
                      rounded: 'rounded-full',
                      padding: 'px-3'
                    }"
                    :disabled="!experience.canNotify"
                  >
                    Avisar
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div class="flex justify-center mb-12">
        <UPagination
          v-model="page"
          :page-count="5"
          :ui="{ rounded: 'rounded-full' }"
        />
      </div>
      
      <!-- Submit Your Idea -->
      <div class="mt-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 text-center max-w-2xl mx-auto">
        <UIcon name="i-heroicons-light-bulb" class="w-12 h-12 mx-auto mb-4 text-primary-500" />
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tem uma ideia de experiência?</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Compartilhe sua fantasia e veja-a ganhar vida se a comunidade aprovar!
        </p>
        <UButton 
          color="primary"
          variant="solid"
          icon="i-heroicons-sparkles"
          :ui="{
            rounded: 'rounded-full',
            padding: 'px-6 py-2'
          }"
        >
          Criar Experiência
        </UButton>
      </div>
      
      <!-- How it Works -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Como Funciona</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-primary-50 dark:bg-primary-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-light-bulb" class="text-primary-500 w-8 h-8" />
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">1. Compartilhe sua Ideia</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Descreva sua fantasia de experiência. Seja detalhista e criativo.
            </p>
          </div>
          <div class="text-center">
            <div class="bg-primary-50 dark:bg-primary-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-heart" class="text-primary-500 w-8 h-8" />
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">2. Receba Votos</h3>
            <p class="text-gray-600 dark:text-gray-400">
              A comunidade vota nas melhores ideias. As mais populares ganham o selo "Hot".
            </p>
          </div>
          <div class="text-center">
            <div class="bg-primary-50 dark:bg-primary-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-sparkles" class="text-primary-500 w-8 h-8" />
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">3. Veja Acontecer</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Nossas modelos transformam as melhores ideias em sorteios reais de experiências exclusivas.
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Trending experiences data from API
const trendingExperiences = ref([])
const loading = ref(true)
const page = ref(1)

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

// Toggle vote function
function toggleVote(index) {
  const experience = trendingExperiences.value[index]
  experience.userVoted = !experience.userVoted
  
  if (experience.userVoted) {
    experience.votes += 1
  } else {
    experience.votes -= 1
  }
}

// Get badge color based on experience type
function getTrendingBadgeColor(experience) {
  if (experience.badge.includes('Hot')) return 'rose'
  if (experience.badge.includes('Raro')) return 'blue'
  if (experience.badge.includes('Trending')) return 'amber'
  return 'gray'
}
</script>

<style scoped>
.trending-card {
  transition: transform 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-5px);
}

.quote-box {
  position: relative;
}

.quote-box::before {
  content: '"';
  position: absolute;
  top: -8px;
  left: 8px;
  font-size: 30px;
  color: rgba(139, 92, 246, 0.3);
  font-family: serif;
}
</style> 