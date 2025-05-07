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
          限量版 • Edições Limitadas
        </UBadge>
        
        <h1 class="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-custom-purple to-custom-pink bg-clip-text text-transparent">
          Experiências Exclusivas
        </h1>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Encontre experiências únicas com seus modelos favoritos
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <UIcon name="i-heroicons-clock" class="text-primary-600 dark:text-primary-400 w-16 h-16 animate-pulse mb-4" />
        <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Carregando experiências...</p>
      </div>

      <!-- Experiences Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard 
          v-for="experience in experiences" 
          :key="experience.id"
          class="cursor-pointer transform translate-y-0 transition-all duration-300 hover:-translate-y-2"
          :ui="{
            base: 'overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col',
            body: { base: 'p-0 flex-1 flex flex-col' },
            rounded: 'rounded-xl',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
            shadow: 'shadow-lg hover:shadow-primary-500/20'
          }"
          @click="navigateToExperience(experience.id)"
        >
          <div class="relative">
            <img 
              :src="experience.image" 
              :alt="experience.title" 
              class="w-full h-48 md:h-56 object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <UBadge 
              v-if="experience.isNew"
              class="absolute top-3 right-3" 
              color="rose"
              variant="solid"
              :ui="{
                base: 'font-semibold uppercase tracking-wide px-2 py-0.5',
                rounded: 'rounded-md'
              }"
            >
              Novo
            </UBadge>
          </div>
          
          <div class="p-5 flex-1 flex flex-col">
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ experience.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ experience.subtitle }}</p>
            
            <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <span class="text-xs text-gray-500 dark:text-gray-400">Tickets</span>
                  <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {{ experience.ticketsSold }}/{{ experience.totalTickets }}
                  </span>
                </div>
                
                <div class="flex flex-col items-end">
                  <span class="text-xs text-gray-500 dark:text-gray-400">Tempo restante</span>
                  <span class="text-sm font-medium text-rose-600 dark:text-rose-400">
                    {{ experience.daysRemaining }} dias
                  </span>
                </div>
              </div>
              
              <UProgress 
                :value="(experience.ticketsSold / experience.totalTickets) * 100" 
                color="primary"
                class="mt-2"
                size="xs"
                :ui="{
                  base: 'relative overflow-hidden w-full rounded-full',
                  track: { background: 'bg-gray-200 dark:bg-gray-700' },
                  progress: { 
                    background: 'bg-gradient-to-r from-custom-purple to-custom-pink',
                    transition: 'width 0.5s ease-in-out'
                  }
                }"
              />
            </div>
          </div>
        </UCard>
      </div>
      
      <!-- Empty State (if needed) -->
      <div v-if="experiences.length === 0 && !loading" class="text-center py-16">
        <UIcon name="i-heroicons-face-frown" class="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nenhuma experiência encontrada</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Não encontramos experiências disponíveis no momento.
        </p>
      </div>
      
      <!-- Footer CTA -->
      <div class="text-center mt-16">
        <UButton 
          to="/" 
          color="white"
          variant="outline"
          icon="i-heroicons-sparkles"
          :ui="{
            base: 'font-medium',
            rounded: 'rounded-full',
            padding: 'px-6 py-3',
            variant: { outline: 'border-2 border-primary-300 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950' }
          }"
        >
          Voltar para página inicial
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const experiences = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    experiences.value = await $fetch('/api/experiencias');
  } catch (error) {
    console.error('Failed to load experiences:', error);
  } finally {
    loading.value = false;
  }
});

const navigateToExperience = async (id) => {
  await navigateTo(`/experiencias/${id}`);
};
</script>