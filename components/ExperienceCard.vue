<template>
  <UCard 
    :ui="{
      base: 'transition-all duration-300 hover:shadow-xl overflow-hidden',
      body: { base: 'p-0' },
      header: { base: 'p-0' },
      footer: { base: 'p-4 border-t' }
    }"
    :class="[
      'relative group',
      expanded ? 'scale-102 z-10 shadow-xl' : 'hover:scale-101 z-0'
    ]"
  >
    <!-- Faixa de progresso superior -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div 
        class="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500 ease-out"
        :style="{ width: `${progress || 30}%` }"
      ></div>
    </div>
    
    <!-- Card header -->
    <template #header>
      <div class="relative">
        <!-- Imagem de fundo com efeito gradiente -->
        <div class="relative aspect-video overflow-hidden">
          <img 
            :src="image || '/images/experience-default.jpg'" 
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <!-- Badges e status em overlay -->
        <div class="absolute top-3 left-3 flex gap-2">
          <UBadge v-if="type" color="white" class="shadow-md" variant="solid">{{ type }}</UBadge>
          <UBadge v-if="limited" color="rose" class="shadow-md" variant="solid">
            <template #default>
              <span class="flex items-center gap-1">
                <span class="i-heroicons-fire text-amber-300"></span>
                <span>Edição limitada</span>
              </span>
            </template>
          </UBadge>
        </div>
        
        <!-- Tags e preço em overlay -->
        <div class="absolute bottom-3 right-3 flex gap-2">
          <UBadge v-if="price" color="white" class="shadow-md text-lg font-medium" variant="solid">
            {{ price }}
          </UBadge>
        </div>

        <!-- Título em overlay -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h3 class="text-xl md:text-2xl font-semibold text-white">{{ title }}</h3>
          <p class="text-white/80 text-sm md:text-base">{{ subtitle }}</p>
        </div>
      </div>
    </template>
    
    <!-- Card body -->
    <div class="p-4">
      <!-- Estatísticas em ícones -->
      <div class="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div class="flex items-center gap-1">
          <span class="i-heroicons-clock"></span>
          <span>{{ duration || '2-3 horas' }}</span>
        </div>
        
        <div class="flex items-center gap-1">
          <span class="i-heroicons-user-group"></span>
          <span>{{ participants || '1 pessoa' }}</span>
        </div>
        
        <div class="flex items-center gap-1">
          <span class="i-heroicons-star"></span>
          <span>{{ rating || '4.9' }}</span>
        </div>
      </div>
      
      <!-- Barra de progresso detalhada -->
      <div class="mb-4">
        <div class="flex justify-between text-xs mb-1">
          <span class="text-gray-600 dark:text-gray-400">
            {{ availableSlots || 12 }} vagas disponíveis
          </span>
          <span class="font-medium" :class="spotsLeft <= 5 ? 'text-rose-500' : 'text-gray-700 dark:text-gray-300'">
            {{ Math.min(100, spotsLeft || 3) }} restantes
          </span>
        </div>
        <div class="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            class="h-full transition-all duration-500 ease-out rounded-full"
            :class="spotsLeft <= 5 ? 'bg-rose-500' : 'bg-gradient-to-r from-purple-600 to-pink-500'"
            :style="{ width: `${100 - (spotsLeft / availableSlots * 100) || 70}%` }"
          ></div>
        </div>
      </div>
      
      <!-- Descrição com expansão -->
      <div>
        <p 
          class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
          :class="expanded ? '' : 'line-clamp-3'"
        >
          {{ description || 'Uma experiência exclusiva que une relaxamento e prazer em um ambiente acolhedor, com técnicas personalizadas para proporcionar momentos inesquecíveis.' }}
        </p>
        
        <button 
          @click="expanded = !expanded" 
          class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mt-2 flex items-center"
        >
          <span>{{ expanded ? 'Menos detalhes' : 'Mais detalhes' }}</span>
          <span :class="expanded ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="ml-1"></span>
        </button>
      </div>
      
      <!-- Detalhes expandidos -->
      <div v-if="expanded" class="mt-4 space-y-4">
        <!-- Separador elegante -->
        <div class="flex items-center gap-2">
          <div class="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
          <span class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Detalhes</span>
          <div class="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>
        
        <!-- Destaques da experiência -->
        <div class="space-y-2">
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">Destaques</h4>
          <ul class="space-y-1">
            <li v-for="(highlight, index) in highlights || defaultHighlights" :key="index" class="flex items-start gap-2 text-sm">
              <span class="i-heroicons-check-circle text-green-500 mt-0.5"></span>
              <span class="text-gray-700 dark:text-gray-300">{{ highlight }}</span>
            </li>
          </ul>
        </div>
        
        <!-- O que está incluído -->
        <div class="space-y-2">
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">Incluso na experiência</h4>
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="(item, index) in includes || defaultIncludes" :key="index" class="flex items-center gap-2 text-sm">
              <span class="i-heroicons-check text-purple-600 dark:text-purple-400"></span>
              <span class="text-gray-700 dark:text-gray-300">{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <!-- Datas disponíveis -->
        <div class="space-y-2" v-if="availableDates?.length">
          <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">Datas disponíveis</h4>
          <div class="flex gap-2 flex-wrap">
            <UBadge 
              v-for="(date, index) in availableDates" 
              :key="index"
              color="gray"
              variant="subtle"
              class="cursor-pointer hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              {{ date }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Card footer -->
    <template #footer>
      <div class="flex items-center justify-between">
        <UButton
          color="white"
          variant="ghost"
          @click="$emit('details', id)"
          size="sm"
        >
          Ver detalhes completos
        </UButton>
        
        <UButton
          @click="$emit('select', id)"
          color="primary"
          size="md"
          :ui="{
            variant: { solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-md hover:shadow-lg transition-all duration-200' }
          }"
          class="relative overflow-hidden group/btn"
          :disabled="spotsLeft <= 0"
        >
          <span class="absolute inset-0 bg-white/10 w-0 group-hover/btn:w-full transition-all duration-500 ease-out rounded-md"></span>
          <span class="flex items-center gap-1 relative z-10">
            <span v-if="spotsLeft <= 5" class="animate-pulse i-heroicons-fire"></span>
            <span>{{ spotsLeft <= 0 ? 'Esgotado' : 'Selecionar' }}</span>
          </span>
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  id: {
    type: [String, Number],
    default: 1,
  },
  title: {
    type: String,
    default: 'Experiência Sensorial Premium',
  },
  subtitle: {
    type: String,
    default: 'Uma jornada única de relaxamento e prazer',
  },
  type: {
    type: String,
    default: 'Premium',
  },
  image: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: 'R$ 399',
  },
  duration: {
    type: String,
    default: null,
  },
  participants: {
    type: String,
    default: null,
  },
  rating: {
    type: String,
    default: null,
  },
  availableSlots: {
    type: Number,
    default: 12,
  },
  spotsLeft: {
    type: Number,
    default: 3,
  },
  progress: {
    type: Number,
    default: null,
  },
  highlights: {
    type: Array,
    default: null,
  },
  includes: {
    type: Array,
    default: null,
  },
  availableDates: {
    type: Array,
    default: null,
  },
  limited: {
    type: Boolean,
    default: false,
  },
})

const defaultHighlights = [
  'Experiência personalizada com base nas suas preferências',
  'Ambiente exclusivo e privativo',
  'Técnicas exclusivas de relaxamento e prazer',
  'Profissional com experiência internacional'
]

const defaultIncludes = [
  'Bebida de boas-vindas',
  'Aromaterapia exclusiva',
  'Óleos essenciais premium',
  'Playlist personalizada',
  'Acessórios sensoriais',
  'Ambiente climatizado'
]

// Estado local
const expanded = ref(false)

// Emitir eventos
defineEmits(['select', 'details'])
</script>

<style scoped>
.scale-101 {
  transform: scale(1.01);
}

.scale-102 {
  transform: scale(1.02);
}

/* Animação sutil para o card */
@keyframes pulse-subtle {
  0% { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
  50% { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
  100% { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
}

.hover\:shadow-xl:hover {
  animation: pulse-subtle 2s infinite ease-in-out;
}
</style> 