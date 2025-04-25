<script setup>
const isAdult = ref(false)
const emit = defineEmits(['access-granted'])

const confirmAge = () => {
  if (isAdult.value) {
    emit('access-granted')
  }
}

const closeTab = () => {
  window.close()
}
</script>

<template>
  <div class="age-gate-overlay">
    <div class="smoke-animation"></div>
    
    <UCard class="age-gate-card" :ui="{ 
      base: 'backdrop-blur-md bg-black/50 border-2 border-primary-500/50',
      body: { base: 'p-8 sm:p-10' },
      rounded: 'rounded-xl',
      shadow: 'shadow-xl shadow-primary-900/20'
    }">
      <div class="text-center mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-white">ACESSO RESTRITO A CONHECEDORES</h1>
        <p class="text-lg text-gray-300 mb-8">Modelos profissionais criando experiências únicas para adultos exigentes</p>
        
        <div class="flex items-start space-x-3 justify-center mb-10">
          <UCheckbox v-model="isAdult" size="lg" name="age-confirmation" :ui="{
            wrapper: 'relative flex items-start',
            base: 'h-6 w-6 rounded border-2 border-primary-300 focus:ring-primary-500 text-primary-500',
            default: { checked: 'bg-gradient-to-r from-primary-600 to-purple-500' }
          }">
            <template #checkmark>
              <div class="absolute inset-0 flex items-center justify-center text-white">
                <UIcon name="i-heroicons-sparkles" class="h-4 w-4" />
              </div>
            </template>
          </UCheckbox>
          <label for="age-confirmation" class="text-white text-left cursor-pointer">
            Confirmo que sou maior de 18 anos e busco interações premium
          </label>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            size="xl" 
            :disabled="!isAdult" 
            @click="confirmAge"
            class="btn-primary"
            :ui="{
              base: 'font-bold text-white',
              rounded: 'rounded-full',
              padding: 'py-4 px-8',
              size: { xl: 'text-lg' },
              variant: { solid: 'shadow-lg transition-all duration-300' }
            }"
          >
            ENTRAR NO UNIVERSO
          </UButton>
          
          <UButton 
            size="xl" 
            color="gray" 
            variant="ghost" 
            @click="closeTab"
            class="btn-secondary"
            :ui="{
              base: 'font-medium transition-colors',
              rounded: 'rounded-full',
              padding: 'py-4 px-8',
              size: { xl: 'text-base' },
              variant: { ghost: 'text-gray-300 hover:text-white hover:bg-gray-800' }
            }"
          >
            Não me interessa
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
.age-gate-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background: rgba(0, 0, 0, 0.85);
  padding: 1rem;
}

.age-gate-card {
  max-width: 600px;
  width: 100%;
  position: relative;
  z-index: 10;
}

.smoke-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  background: url('https://assets.codepen.io/3364143/cloud-15.webp') no-repeat center center;
  background-size: cover;
  filter: hue-rotate(240deg);
  animation: smoke 20s infinite alternate;
  z-index: 0;
}

.btn-primary {
  background: linear-gradient(45deg, #8b5cf6, #6366f1, #7e22ce);
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
  border: none;
  transform: translateY(0);
  transition: all 0.3s;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(139, 92, 246, 0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@keyframes smoke {
  0% {
    transform: translate(-5%, -5%) scale(1);
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translate(5%, 5%) scale(1.1);
    opacity: 0.5;
  }
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
</style> 