<template>
  <header class="app-header" :class="{ 'scrolled': scrolled }">
    <div class="header-container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <span class="logo-text">Sorteios Premium</span>
        </NuxtLink>
      </div>
      
      <nav class="nav-menu">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" exact>Início</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/experiencias" class="nav-link">Experiências</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/modelo" class="nav-link">Perfil</NuxtLink>
          </li>
        </ul>
      </nav>
      
      <div class="nav-actions">
        <UColorModeButton color="primary" class="mr-2" />
        <UButton 
          color="primary" 
          variant="solid"
          :ui="{
            rounded: 'rounded-full',
            variant: { 
              solid: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
            }
          }"
        >
          Entrar
        </UButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-header {
  @apply fixed top-0 left-0 w-full z-50 transition-all duration-300;
  @apply bg-white/80 dark:bg-gray-900/80;
  @apply backdrop-blur-md backdrop-saturate-150;
  @apply border-b border-primary-100 dark:border-primary-800;
}

.app-header.scrolled {
  @apply shadow-sm;
  @apply bg-white/95 dark:bg-gray-900/95;
}

.header-container {
  @apply flex justify-between items-center;
  @apply max-w-6xl mx-auto;
  @apply px-4 md:px-6;
  @apply h-16;
}

.logo-link {
  @apply flex items-center;
  @apply no-underline;
}

.logo-text {
  @apply text-xl font-bold font-serif;
  @apply text-primary-900 dark:text-primary-100;
}

.nav-list {
  @apply flex gap-8;
  @apply list-none m-0 p-0;
}

.nav-link {
  @apply text-sm font-medium;
  @apply text-gray-700 dark:text-gray-300;
  @apply hover:text-primary-600 dark:hover:text-primary-400;
  @apply transition-colors duration-200;
  @apply py-2;
}

.nav-link.router-link-active {
  @apply text-primary-600 dark:text-primary-400;
  @apply font-semibold;
}

@media (max-width: 768px) {
  .nav-menu {
    @apply hidden;
  }
}
</style> 