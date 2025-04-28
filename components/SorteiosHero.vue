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
              @click="showModeloForm = true"
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
          <h2 class="text-xl font-semibold mb-6 text-center text-primary-600 dark:text-primary-400">
            Experiências exclusivas esperando por você
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard 
              v-for="(sorteio, index) in sorteios" 
              :key="index" 
              class="sorteio-card"
              :ui="{
                base: 'overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                body: { base: 'p-0' },
                ring: 'ring-1 ring-primary-100 dark:ring-primary-800',
                rounded: 'rounded-xl'
              }"
            >
              <LazyImage 
                :src="sorteio.image" 
                :alt="sorteio.title"
                height="12rem"
                class="w-full"
              />
              
              <div class="p-5">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-bold text-lg">{{ sorteio.title }}</h3>
                  <UBadge 
                    :color="sorteio.vagas === 0 ? 'red' : sorteio.vagas < 0 ? 'orange' : 'green'" 
                    size="sm"
                    :ui="{ 
                      base: 'font-medium',
                      variant: { solid: 'shadow-sm' }
                    }"
                  >
                    {{ sorteio.vagas > 0 ? `${sorteio.vagas} vagas` : sorteio.status }}
                  </UBadge>
                </div>
                
                <UProgress 
                  :value="sorteio.vagas === 0 ? 100 : sorteio.vagas < 0 ? 80 : 40" 
                  :color="sorteio.vagas === 0 ? 'red' : sorteio.vagas < 0 ? 'orange' : 'green'"
                  class="mb-3"
                  :ui="{
                    base: 'relative overflow-hidden rounded-full',
                    track: { background: 'bg-gray-100 dark:bg-gray-800' },
                    progress: { background: 'bg-gradient-to-r from-{color}-500 to-{color}-400' }
                  }"
                />
                
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{ sorteio.vagas > 0 ? 'Disponível agora' : sorteio.vagas === 0 ? 'Esgotado' : sorteio.status }}
                  </span>
                  <UButton 
                    size="sm" 
                    color="primary" 
                    :disabled="sorteio.vagas === 0"
                    icon="i-heroicons-arrow-right-circle"
                    variant="soft"
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
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Modelo Form Modal -->
    <ModeloForm v-model="showModeloForm" @submit="handleModeloFormSubmit" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModeloForm = ref(false)

const sorteios = [
  {
    title: "Jantar Italiano",
    vagas: 8,
    status: "disponível",
    image: "/images/sorteios/dinner.jpg"
  },
  {
    title: "Piquenique Virtual",
    vagas: 0,
    status: "esgotado",
    image: "/images/sorteios/picnic.jpg"
  },
  {
    title: "Encontro Retro",
    vagas: -1,
    status: "2 dias restantes",
    image: "/images/sorteios/retro.jpg"
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

// Handle modelo form submission
function handleModeloFormSubmit(formData) {
  console.log('Formulário de modelo enviado:', formData)
  // Aqui você pode implementar a lógica para salvar os dados do modelo
  // Por exemplo, enviando para uma API, salvando no localStorage, etc.
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
