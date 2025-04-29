<script setup>
import { ref } from 'vue'

const ageVerified = ref(false)

const handleAgeVerification = () => {
  ageVerified.value = true
}
</script>

<template>
  <div>
    <!-- Age Gate -->
    <AgeGate v-if="!ageVerified" @access-granted="handleAgeVerification" />

    <!-- Main Application Layout (Only visible after age verification) -->
    <div v-else class="app-layout">
      <!-- Site Header -->
      <AppHeader />

      <!-- Main Content -->
      <main class="main-content">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-6xl mx-auto py-12 px-4 md:px-6">
          <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div class="text-center md:text-left">
              <div class="text-xl font-bold font-serif text-primary-900 dark:text-primary-100 mb-2">Sorteios Premium</div>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                © {{ new Date().getFullYear() }} Todos os direitos reservados.
              </p>
            </div>
            
            <div class="flex gap-8">
              <div class="space-y-4">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Links</h4>
                <ul class="space-y-3">
                  <li>
                    <NuxtLink to="/" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Início
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/experiencias" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Experiências
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/modelo" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Modelos
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Legal</h4>
                <ul class="space-y-3">
                  <li>
                    <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Termos de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.main-content {
  flex: 1;
  padding-top: 64px; /* Matches the header height */
}
</style> 