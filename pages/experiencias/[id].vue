<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center min-h-screen py-16">
      <UIcon name="i-heroicons-clock" class="text-primary-600 dark:text-primary-400 w-16 h-16 animate-pulse mb-4" />
      <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Carregando experiência...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <UIcon name="i-heroicons-exclamation-triangle" class="text-rose-500 w-16 h-16 mb-4" />
      <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Oops! Algo deu errado.</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        Não foi possível carregar os detalhes desta experiência.
      </p>
      <UButton 
        to="/experiencias" 
        color="primary" 
        variant="solid"
        :ui="{
          rounded: 'rounded-full',
          padding: 'px-6 py-2'
        }"
      >
        Ver Todas Experiências
      </UButton>
    </div>

    <!-- Experience Content -->
    <div v-else-if="experience" class="experience-page">
      <!-- Hero Section with Immersive Experience Viewport -->
      <section class="experience-hero relative overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="experience.heroImage" alt="Imagem da experiência" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/40"></div>
        </div>
        
        <UContainer class="relative z-10 h-full flex items-center">
          <div class="max-w-2xl text-white py-24 md:py-32">
            <UBadge 
              size="lg" 
              color="primary" 
              variant="subtle" 
              class="mb-6"
              :ui="{ 
                base: 'font-bold uppercase tracking-wider',
                size: { lg: 'text-sm px-4 py-1' }
              }"
            >
              Experiência Exclusiva
            </UBadge>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {{ experience.title }}
            </h1>
            
            <p class="text-xl md:text-2xl text-white/80 mb-8">
              {{ experience.subtitle }}
            </p>
            
            <div class="flex flex-wrap gap-4">
              <UButton 
                color="white" 
                variant="solid" 
                icon="i-heroicons-sparkles"
                :ui="{
                  rounded: 'rounded-full',
                  padding: 'px-6 py-3'
                }"
              >
                Explorar Experiência
              </UButton>
              
              <UButton 
                color="white" 
                variant="outline" 
                icon="i-heroicons-calendar"
                :ui="{
                  rounded: 'rounded-full',
                  padding: 'px-6 py-3',
                  variant: {
                    outline: 'border-2 bg-opacity-20 backdrop-blur-sm hover:bg-white/30'
                  }
                }"
              >
                Ver Disponibilidade
              </UButton>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Model Content Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <UContainer>
          <div class="text-center mb-12">
            <UBadge 
              color="primary" 
              variant="subtle" 
              class="mb-4"
              :ui="{ 
                base: 'font-bold uppercase tracking-wider'
              }"
            >
              Conteúdo Exclusivo
            </UBadge>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Conheça {{ experience.modelName }}
            </h2>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Descubra o conteúdo exclusivo e experiências premium criadas especialmente para você.
            </p>
          </div>
          
          <div class="max-w-4xl mx-auto space-y-12">
            <!-- Model Profile -->
            <UCard
              :ui="{
                base: 'overflow-hidden',
                body: { padding: 'p-0' },
                ring: '',
                divide: 'divide-y divide-gray-100 dark:divide-gray-800'
              }"
            >
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3 relative overflow-hidden">
                  <img 
                    :src="experience.modelProfileImage" 
                    :alt="experience.modelName" 
                    class="w-full h-full md:h-full object-cover aspect-[4/3] md:aspect-auto"
                  />
                </div>
                <div class="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <h3 class="text-2xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                    {{ experience.modelName }}
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {{ experience.modelDescription }}
                  </p>
                  
                  <div class="flex gap-4 mt-6">
                    <UButton
                      color="gray"
                      variant="ghost"
                      icon="i-heroicons-user"
                      size="sm"
                      :ui="{
                        rounded: 'rounded-full'
                      }"
                    >
                      Ver Perfil
                    </UButton>
                    
                    <UButton
                      color="primary"
                      variant="ghost"
                      icon="i-heroicons-heart"
                      size="sm"
                      :ui="{
                        rounded: 'rounded-full'
                      }"
                    >
                      Seguir
                    </UButton>
                  </div>
                </div>
              </div>
            </UCard>
            
            <!-- Content Previews Grid -->
            <div>
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Prévia do Conteúdo
              </h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  v-for="(item, index) in experience.contentPreviews" 
                  :key="index" 
                  class="content-preview-card group"
                >
                  <div class="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <img 
                      :src="item.thumbnail" 
                      :alt="item.title" 
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                      <p class="text-white font-medium">{{ item.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Raffle Interaction Section -->
      <section class="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <!-- Subtle diagonal pattern background -->
        <div class="absolute inset-0 opacity-[0.02] pattern-diagonal"></div>
        
        <UContainer>
          <div class="text-center mb-12">
            <UBadge 
              color="primary" 
              variant="subtle" 
              class="mb-4"
              :ui="{ 
                base: 'font-bold uppercase tracking-wider'
              }"
            >
              Sorteio Exclusivo
            </UBadge>
            
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Participe da Rifa
            </h2>
            
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Concorra a prêmios exclusivos com a {{ experience.modelName }}.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <!-- Prize Details -->
            <div class="space-y-8">
              <UCard
                class="overflow-hidden"
                :ui="{
                  base: 'overflow-hidden border-0',
                  body: { padding: 'p-0' },
                  ring: '',
                  divide: ''
                }"
              >
                <img 
                  :src="experience.raffleMainPrizeImage" 
                  alt="Prêmio principal" 
                  class="w-full aspect-video object-cover"
                />
                
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Prêmio Principal
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    {{ experience.raffleMainPrizeDescription }}
                  </p>
                </div>
              </UCard>
              
              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4">
                <UCard
                  class="text-center"
                  :ui="{
                    base: 'bg-primary-50 dark:bg-primary-950/30',
                    divide: '',
                    ring: 'ring-0'
                  }"
                >
                  <div>
                    <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {{ experience.ticketsSold }}/{{ experience.totalTickets }}
                    </div>
                    <p class="text-sm text-primary-700 dark:text-primary-300">
                      Bilhetes Vendidos
                    </p>
                  </div>
                </UCard>
                
                <UCard
                  class="text-center"
                  :ui="{
                    base: 'bg-rose-50 dark:bg-rose-950/30',
                    divide: '',
                    ring: 'ring-0'
                  }"
                >
                  <div>
                    <div class="text-2xl font-bold text-rose-600 dark:text-rose-400">
                      {{ experience.raffleTimeRemaining }}
                    </div>
                    <p class="text-sm text-rose-700 dark:text-rose-300">
                      Tempo Restante
                    </p>
                  </div>
                </UCard>
              </div>
            </div>
            
            <!-- Ticket Selection -->
            <div>
              <UCard
                class="mb-4"
                :ui="{
                  base: '',
                  ring: '',
                  divide: ''
                }"
              >
                <template #header>
                  <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="text-lg font-bold">Escolha seus Números</h3>
                  </div>
                </template>
                
                <div class="ticket-grid p-4">
                  <button 
                    v-for="n in 100" 
                    :key="n" 
                    :class="[
                      'ticket-number',
                      selectedTickets.includes(n) ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : '',
                      soldTickets.includes(n) ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' : ''
                    ]"
                    @click="toggleTicket(n)"
                    :disabled="soldTickets.includes(n)"
                  >
                    {{ n }}
                  </button>
                </div>
              </UCard>
              
              <UCard
                :ui="{
                  base: 'bg-primary-50 dark:bg-primary-950/30',
                  divide: '',
                  ring: 'ring-0'
                }"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                      {{ selectedTickets.length }} números selecionados
                    </div>
                    <div class="text-xl font-bold text-primary-600 dark:text-primary-400">
                      R$ {{ selectedTickets.length * ticketPrice }}
                    </div>
                  </div>
                  
                  <UButton
                    color="primary"
                    :disabled="selectedTickets.length === 0"
                    icon="i-heroicons-shopping-cart"
                    :ui="{
                      rounded: 'rounded-full',
                      padding: 'px-6 py-2',
                      variant: { 
                        solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
                      }
                    }"
                  >
                    Comprar Agora
                  </UButton>
                </div>
              </UCard>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Immersive Experience Details -->
      <section class="immersive-experience relative">
        <div class="parallax-container">
          <div class="parallax-bg" :style="{ backgroundImage: `url(${experience.parallaxBackground})` }"></div>
          <div class="parallax-content">
            <UContainer class="py-24 md:py-32 relative z-10 flex md:justify-end">
              <UCard 
                class="max-w-lg backdrop-blur-md"
                :ui="{
                  base: 'bg-white/90 dark:bg-gray-900/90 overflow-hidden',
                  rounded: 'rounded-2xl',
                  shadow: 'shadow-2xl'
                }"
              >
                <h2 class="text-3xl font-bold mb-6 text-gradient">Uma Experiência Única</h2>
                <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {{ experience.longDescription }}
                </p>
                
                <div class="space-y-6 mb-8">
                  <div v-for="(feature, index) in experience.features" :key="index" class="flex gap-4">
                    <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center">
                      <img :src="feature.icon" :alt="feature.title" class="w-6 h-6" />
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 dark:text-white mb-1">{{ feature.title }}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
                
                <UButton
                  color="primary"
                  variant="outline"
                  :ui="{
                    rounded: 'rounded-full',
                    padding: 'px-6 py-2'
                  }"
                >
                  Saiba Mais
                </UButton>
              </UCard>
            </UContainer>
          </div>
        </div>
      </section>
      
      <!-- Related Experiences -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <UContainer>
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4 text-gradient">Outras Experiências</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Você também pode se interessar por estas experiências exclusivas
            </p>
          </div>
          
          <div class="flex gap-6 pb-4 overflow-x-auto custom-scrollbar">
            <UCard 
              v-for="index in 3" 
              :key="index"
              class="experience-card min-w-[280px] md:min-w-[320px] flex-shrink-0"
              :ui="{
                base: 'overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col',
                body: { base: 'p-0 flex-1 flex flex-col' },
                rounded: 'rounded-xl',
                ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
                shadow: 'shadow-lg hover:shadow-primary-500/20'
              }"
              @click="router.push(`/experiencias/${['yacht-party', 'beach-photoshoot', 'fashion-week'][index-1]}`)"
            >
              <div class="relative">
                <img 
                  :src="`/images/experiences/${['escape', 'boudoir', 'gatsby'][index-1]}.jpg`" 
                  alt="Experience" 
                  class="w-full h-48 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-bold mb-2">{{ ['Festa em Iate', 'Ensaio na Praia', 'Semana de Moda'][index-1] }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {{ ['Navegue com Juliana Costa', 'Um dia exclusivo com Mariana Santos', 'Backstage com Camila Oliveira'][index-1] }}
                  </p>
                </div>
                
                <UButton
                  color="primary"
                  variant="ghost"
                  icon="i-heroicons-arrow-right"
                  size="sm"
                  trailing
                  :ui="{
                    rounded: 'rounded-full'
                  }"
                >
                  Ver Detalhes
                </UButton>
              </div>
            </UCard>
          </div>
        </UContainer>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const experienceId = route.params.id;
const experience = ref(null);
const loading = ref(true);
const error = ref(null);

const ticketPrice = 25; // Price per ticket
const selectedTickets = ref([]);
const soldTickets = ref([12, 15, 23, 37, 45, 56, 67, 72, 81, 88, 93]); // Mock sold tickets

onMounted(async () => {
  try {
    experience.value = await $fetch(`/api/experiencias/${experienceId}`);
    document.title = `${experience.value.title} - Experiências`;
  } catch (e) {
    console.error('Failed to load experience:', e);
    error.value = e;
    if (e.response?.status === 404) {
      router.push('/experiencias');
    }
  } finally {
    loading.value = false;
  }
});

const toggleTicket = (number) => {
  if (soldTickets.value.includes(number)) return;
  
  const index = selectedTickets.value.indexOf(number);
  if (index === -1) {
    selectedTickets.value.push(number);
  } else {
    selectedTickets.value.splice(index, 1);
  }
};

onMounted(() => {
  // Animation and parallax effects initialization would go here
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  // Handle parallax scrolling effect
  // This would be implemented with actual calculations based on scroll position
};
</script>

<style scoped>
/* Base Styles with dark mode support */
.experience-page {
  @apply overflow-x-hidden;
}

.text-gradient {
  @apply bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent;
}

/* Hero Section */
.experience-hero {
  @apply h-screen;
}

/* Pattern Background */
.pattern-diagonal {
  background-image: linear-gradient(135deg, #a78bfa 25%, transparent 25%), 
                  linear-gradient(225deg, #a78bfa 25%, transparent 25%), 
                  linear-gradient(45deg, #a78bfa 25%, transparent 25%), 
                  linear-gradient(315deg, #a78bfa 25%, transparent 25%);
  background-position: 30px 0, 30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
}

/* Ticket Grid */
.ticket-grid {
  @apply grid grid-cols-5 sm:grid-cols-10 gap-2;
}

.ticket-number {
  @apply w-full aspect-square flex items-center justify-center rounded-md text-sm font-medium
  bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
  text-gray-900 dark:text-gray-100 transition-all duration-200 cursor-pointer;
}

/* Parallax Section */
.immersive-experience {
  @apply h-screen overflow-hidden;
}

.parallax-container {
  @apply h-full relative;
}

.parallax-bg {
  @apply absolute inset-0 bg-cover bg-center z-0;
}

.parallax-bg::after {
  content: '';
  @apply absolute inset-0 bg-black/50 dark:bg-black/60;
}

.parallax-content {
  @apply relative z-10 h-full;
}

/* Features */
.feature-card {
  @apply bg-white dark:bg-gray-800 p-4 rounded-xl;
}

/* Experience Card Styles */
.experience-card {
  @apply transform transition-all duration-300 cursor-pointer;
}

.experience-card:hover {
  @apply -translate-y-2;
}

/* Custom Scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(147, 51, 234, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  @apply h-1;
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-primary-300 dark:bg-primary-700 rounded-full;
}
</style>
