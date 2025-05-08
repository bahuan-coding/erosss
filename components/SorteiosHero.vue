<template>
  <div class="hero-section">
    <UContainer class="py-16 md:py-24">
      <div class="max-w-5xl mx-auto">
        <!-- Animated Title Section -->
        <div class="text-center mb-16">
          <h1 class="title-animation text-5xl md:text-7xl font-extrabold mb-4 min-h-[80px]">
            {{ displayedTitle }}<span class="cursor" :class="{ 'hidden': isTitleComplete }">|</span>
          </h1>
          
          <!-- CTAs -->
          <div class="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <UButton 
              color="primary" 
              size="xl" 
              icon="i-heroicons-camera"
              :ui="{
                base: 'font-bold',
                rounded: 'rounded-xl',
                padding: 'py-4 px-8',
                size: { xl: 'text-lg' },
                variant: { solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-500/30 transform transition-all duration-300 hover:-translate-y-1' }
              }"
              @click="navigateToModelo"
            >
              SOU MODELO
            </UButton>
            
            <UButton 
              color="white" 
              size="xl" 
              icon="i-heroicons-ticket"
              :ui="{
                base: 'font-bold',
                rounded: 'rounded-xl',
                padding: 'py-4 px-8',
                size: { xl: 'text-lg' },
                variant: { outline: 'border-2 border-primary-300 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950 shadow-md transform transition-all duration-300 hover:-translate-y-1' }
              }"
              variant="outline"
            >
              QUERO PARTICIPAR
            </UButton>
          </div>
        </div>
        
        <!-- Sorteios Slider Cards -->
        <div class="mt-16">
          <h2 class="text-xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">
            Experiências exclusivas esperando por você
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(sorteio, index) in sorteios" :key="index" class="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div class="relative">
                <img :src="sorteio.image" :alt="sorteio.title" class="w-full h-32 object-cover" />
                <div class="absolute top-0 right-0 m-2">
                  <span v-if="sorteio.vagas === 0" class="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">esgotado</span>
                  <span v-else-if="sorteio.vagas < 0" class="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">{{ sorteio.days }}</span>
                  <span v-else class="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">{{ sorteio.vagas }} vagas</span>
                </div>
              </div>
              
              <div class="p-4">
                <h3 class="text-white font-bold mb-2">{{ sorteio.title }}</h3>
                
                <UProgress 
                  :value="sorteio.vagas === 0 ? 100 : sorteio.vagas < 0 ? 80 : 40" 
                  :color="sorteio.vagas === 0 ? 'red' : sorteio.vagas < 0 ? 'orange' : 'green'"
                  class="mb-3"
                  :ui="{
                    base: 'relative overflow-hidden rounded-full',
                    track: { background: 'bg-gray-700' },
                    progress: { background: 'bg-gradient-to-r from-{color}-500 to-{color}-400' }
                  }"
                />
                
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-400">
                    {{ sorteio.vagas > 0 ? 'Disponível agora' : sorteio.vagas === 0 ? 'Esgotado' : sorteio.status }}
                  </span>
                  <UButton 
                    size="sm" 
                    color="primary" 
                    :disabled="sorteio.vagas === 0"
                    variant="soft"
                    :to="`/experiencias/${sorteioToExperienceId(sorteio.title)}`"
                    :ui="{
                      base: 'font-medium',
                      rounded: 'rounded-full',
                      padding: 'px-4',
                      size: { sm: 'text-xs' }
                    }"
                  >
                    Detalhes
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const sorteios = [
  {
    title: "Show de Stand-Up e Role-Play Romântico",
    vagas: 8,
    status: "disponível",
    days: "",
    image: "/images/sorteios/standup.jpg"
  },
  {
    title: "Concerto Intimista + Workshop",
    vagas: 0,
    status: "esgotado",
    days: "",
    image: "/images/sorteios/concerto.jpg"
  },
  {
    title: "Cinema Temático + Cosplay",
    vagas: -1,
    status: "2 dias restantes",
    days: "2 dias restantes",
    image: "/images/sorteios/cinema.jpg"
  },
  {
    title: "Passeio Selvagem + Chá da Tarde",
    vagas: 5,
    status: "disponível",
    days: "",
    image: "/images/sorteios/passeio.jpg"
  }
]

// Typing effect data
const titles = ['ELAS CRIAM', 'VOCÊ É O PREMIADO']
const currentTitleIndex = ref(0)
const displayedTitle = ref('')
const currentCharIndex = ref(0)
const isDeleting = ref(false)
const isTitleComplete = ref(false)
const typingSpeed = 100
const deletingSpeed = 70
const pauseDuration = 1500

// Handle text typing animation
onMounted(() => {
  setTimeout(typeWriter, pauseDuration)
})

function typeWriter() {
  const currentFullTitle = titles[currentTitleIndex.value]

  if (!isDeleting.value) {
    if (currentCharIndex.value < currentFullTitle.length) {
      displayedTitle.value = currentFullTitle.substring(0, currentCharIndex.value + 1)
      currentCharIndex.value++
      setTimeout(typeWriter, typingSpeed)
    } else {
      isDeleting.value = true
      setTimeout(typeWriter, pauseDuration)
    }
  } else {
    if (currentCharIndex.value > 0) {
      displayedTitle.value = currentFullTitle.substring(0, currentCharIndex.value - 1)
      currentCharIndex.value--
      setTimeout(typeWriter, deletingSpeed)
    } else {
      isDeleting.value = false
      currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
      setTimeout(typeWriter, typingSpeed)
    }
  }
}

// Navigate to modelo page
async function navigateToModelo() {
  await navigateTo('/modelo')
}

// Map from sorteio title to experience id
function sorteioToExperienceId(title) {
  const mapping = {
    "Show de Stand-Up e Role-Play Romântico": 'standup-roleplay',
    "Concerto Intimista + Workshop": 'concerto-workshop',
    "Cinema Temático + Cosplay": 'cinema-cosplay',
    "Passeio Selvagem + Chá da Tarde": 'passeio-cha-show'
  }
  
  return mapping[title] || 'experiencia-1'
}
</script>

<style scoped>
.hero-section {
  background-image: 
    linear-gradient(to bottom right, rgba(255, 245, 255, 0.9), rgba(240, 220, 255, 0.9)),
    url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.dark .hero-section {
  background-image: 
    linear-gradient(to bottom right, rgba(30, 10, 60, 0.9), rgba(15, 5, 30, 0.9)),
    url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
}

.title-animation {
  background: linear-gradient(90deg, #7e22ce, #d946ef, #8b5cf6);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
}

.cursor {
  animation: blink 1s step-end infinite;
}

.sorteio-card {
  transform: translateY(0);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.sorteio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Add subtle particle effect */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 35%, rgba(126, 34, 206, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 75% 60%, rgba(217, 70, 239, 0.1) 0%, transparent 50%);
  pointer-events: none;
}
</style>
