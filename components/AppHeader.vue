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
            <NuxtLink to="/trending" class="nav-link">Tendências</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/modelo" class="nav-link">Perfil</NuxtLink>
          </li>
        </ul>
      </nav>
      
      <div class="flex items-center gap-2">
        <UColorModeButton color="primary" class="mr-2" />
        <UButton 
          color="primary" 
          variant="solid"
          :ui="{
            rounded: 'rounded-full',
            variant: { 
              solid: 'bg-primary-500 hover:bg-primary-600'
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px) saturate(150%);
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  border-bottom: 1px solid rgb(243, 232, 255);
}

.dark .app-header {
  background-color: rgba(17, 24, 39, 0.8);
  border-bottom-color: rgb(107, 33, 168);
}

.app-header.scrolled {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 0.95);
}

.dark .app-header.scrolled {
  background-color: rgba(17, 24, 39, 0.95);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 64px;
}

@media (min-width: 768px) {
  .header-container {
    padding: 0 1.5rem;
  }
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(88, 28, 135);
}

.dark .logo-text {
  color: rgb(243, 232, 255);
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(55, 65, 81);
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  text-decoration: none;
}

.dark .nav-link {
  color: rgb(209, 213, 219);
}

.nav-link:hover {
  color: rgb(147, 51, 234);
}

.dark .nav-link:hover {
  color: rgb(192, 132, 252);
}

.nav-link.router-link-active {
  color: rgb(147, 51, 234);
  font-weight: 600;
}

.dark .nav-link.router-link-active {
  color: rgb(192, 132, 252);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style> 