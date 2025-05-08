<script setup>
defineEmits(['access-granted']);

const exitSite = () => {
  window.location.href = 'https://www.google.com';
};
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
      <div class="p-8 md:p-10 text-center">
        <UIcon name="i-heroicons-shield-check" class="w-16 h-16 mx-auto mb-6 text-primary-500 dark:text-primary-400" />
        
        <h1 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Verificação de Idade
        </h1>
        
        <p class="text-base text-gray-600 dark:text-gray-400 mb-8">
          Para acessar este conteúdo, você precisa ter pelo menos 18 anos de idade.
        </p>
        
        <div class="space-y-4 mb-8">
          <UButton 
            @click="$emit('access-granted')" 
            block
            :ui="{
              rounded: 'rounded-full',
              variant: { 
                solid: 'bg-primary-500 hover:bg-primary-600'
              },
              padding: 'py-3'
            }"
          >
            Tenho 18 anos ou mais
          </UButton>
          
          <UButton 
            @click="exitSite" 
            color="gray" 
            variant="ghost"
            block
            :ui="{
              rounded: 'rounded-full',
              padding: 'py-3'
            }"
          >
            Sair do site
          </UButton>
        </div>
        
        <p class="text-xs text-gray-500 dark:text-gray-500">
          Ao clicar em "Tenho 18 anos ou mais", você confirma que tem idade legal para visualizar o conteúdo deste site.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 