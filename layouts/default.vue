<script setup>
import { ref } from 'vue'

const ageVerified = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sorteios', href: '/sorteios' },
  { name: 'Vencedores', href: '/vencedores' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' }
]

const handleAgeVerification = () => {
  ageVerified.value = true
}
</script>

<template>
  <div>
    <!-- Age Gate -->
    <AgeGate v-if="!ageVerified" @access-granted="handleAgeVerification" />

    <!-- Main Application Layout (Only visible after age verification) -->
    <div v-else class="min-h-screen flex flex-col">
      <!-- Header with Navigation -->
      <UHeader
        :links="navigation"
        :search="{ placeholder: 'Pesquisar sorteios...' }"
      >
        <template #logo>
          <NuxtLink to="/" class="flex items-center gap-2">
            <UIcon name="i-heroicons-trophy" class="text-primary-500 w-8 h-8" />
            <span class="font-bold text-xl">Sorteios Premium</span>
          </NuxtLink>
        </template>
        
        <template #right>
          <div class="flex items-center gap-4">
            <UColorModeButton />
            <UButton color="primary">Entrar</UButton>
            <UButton color="gray" variant="ghost">Cadastrar</UButton>
          </div>
        </template>
      </UHeader>

      <!-- Page Content Slot -->
      <main class="flex-grow">
        <slot />
      </main>

      <!-- Newsletter Section -->
      <UContainer class="py-12 bg-gray-100 dark:bg-gray-800">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">Receba Atualizações</h2>
          <p class="mb-6">Inscreva-se em nossa newsletter para receber as últimas novidades sobre sorteios e ofertas especiais.</p>
          <div class="max-w-md mx-auto">
            <form @submit.prevent class="flex space-x-2">
              <UInput placeholder="Digite seu email" type="email" class="flex-grow" />
              <UButton color="primary" label="Inscrever-se" />
            </form>
          </div>
        </div>
      </UContainer>

      <!-- Footer -->
      <SorteiosFooter />
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can remain if needed, or be moved to a global CSS file */
</style> 