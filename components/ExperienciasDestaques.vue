<template>
  <section class="experiencias-destaques py-6">
    <UContainer>
      <h2 class="text-xl md:text-2xl font-semibold text-center text-purple-600 dark:text-purple-400 mb-6">
        Experiências exclusivas esperando por você
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div v-for="(experience, index) in experiences" :key="index" class="experience-highlight-card relative overflow-hidden rounded-lg">
          <!-- Background Image -->
          <img :src="experience.image" :alt="experience.title" class="w-full h-28 md:h-32 object-cover">
          
          <!-- Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 p-3 flex flex-col justify-between">
            <div class="flex justify-between items-start">
              <h3 class="text-sm md:text-base font-bold text-white line-clamp-2">{{ experience.title }}</h3>
              <UBadge v-if="experience.status" 
                :color="getBadgeColor(experience.status)" 
                variant="solid" 
                size="sm"
                class="ml-2 flex-shrink-0"
              >
                {{ experience.status }}
              </UBadge>
            </div>
            
            <UProgress
              :value="getProgressValue(experience.status)"
              :color="getProgressColor(experience.status)"
              class="mt-auto mb-2"
              :ui="{
                base: 'relative h-1 overflow-hidden rounded-full',
                track: { background: 'bg-gray-700' },
                progress: { background: 'bg-gradient-to-r from-{color}-500 to-{color}-400' }
              }"
            />
            
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-300">{{ getStatusText(experience.status) }}</span>
              <UButton 
                :to="`/experiencias/${getExperienceId(experience.title)}`"
                size="sm"
                color="white" 
                variant="ghost"
                :ui="{
                  base: 'font-medium',
                  rounded: 'rounded-full',
                  padding: 'px-3',
                  size: { sm: 'text-xs' }
                }"
              >
                Detalhes
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: "Show de Stand-Up e Role-Play Romântico",
    image: "/images/sorteios/standup.jpg",
    status: "8 vagas"
  },
  {
    title: "Concerto Intimista + Workshop",
    image: "/images/sorteios/concerto.jpg",
    status: "esgotado"
  },
  {
    title: "Cinema Temático + Cosplay",
    image: "/images/sorteios/cinema.jpg",
    status: "2 dias restantes"
  },
  {
    title: "Passeio Selvagem + Chá da Tarde",
    image: "/images/sorteios/passeio.jpg",
    status: "5 vagas"
  }
]

function getBadgeColor(status) {
  if (status === 'esgotado') return 'red'
  if (status.includes('dias')) return 'orange'
  return 'green'
}

function getProgressValue(status) {
  if (status === 'esgotado') return 100
  if (status.includes('dias')) return 80
  return 40
}

function getProgressColor(status) {
  if (status === 'esgotado') return 'red'
  if (status.includes('dias')) return 'orange'
  return 'green'
}

function getStatusText(status) {
  if (status === 'esgotado') return 'Esgotado'
  if (status.includes('dias')) return status
  return 'Disponível agora'
}

function getExperienceId(title) {
  const experienceIds = {
    "Show de Stand-Up e Role-Play Romântico": 'standup-roleplay',
    "Concerto Intimista + Workshop": 'concerto-workshop',
    "Cinema Temático + Cosplay": 'cinema-cosplay',
    "Passeio Selvagem + Chá da Tarde": 'passeio-cha-show'
  }
  
  return experienceIds[title] || 'experiencia-1'
}
</script>

<style scoped>
.experiencias-destaques {
  background-color: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.experience-highlight-card {
  transition: transform 0.3s ease;
}

.experience-highlight-card:hover {
  transform: translateY(-3px);
}
</style> 