<template>
  <header class="app-header" :class="{ 'scrolled': scrolled }">
    <div class="header-container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          Experiências
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
        <button class="action-button">
          Entrar
        </button>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
}

.app-header.scrolled {
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  background-color: rgba(255, 255, 255, 0.95);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  height: 60px;
}

.logo-link {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 0.95rem;
  color: #444;
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #0071e3;
}

.nav-link.router-link-active {
  color: #0071e3;
  font-weight: 600;
}

.action-button {
  background-color: #0071e3;
  color: #fff;
  border: none;
  border-radius: 980px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background-color: #0077ed;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .header-container {
    padding: 0.8rem 1rem;
  }
}
</style> 