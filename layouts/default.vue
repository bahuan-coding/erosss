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
      <!-- Apple-inspired Header -->
      <AppHeader />

      <!-- Main Content with Top Padding for Fixed Header -->
      <main class="main-content">
        <slot />
      </main>

      <!-- Simple Footer -->
      <footer class="app-footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-logo">Experiências</div>
            <p class="footer-copyright">© {{ new Date().getFullYear() }} Todos os direitos reservados.</p>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">Política de Privacidade</a>
            <a href="#" class="footer-link">Termos de Uso</a>
            <a href="#" class="footer-link">Contato</a>
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
  padding-top: 60px; /* Same as header height */
}

.app-footer {
  background-color: #f5f5f7;
  padding: 3rem 1.5rem;
  color: #666;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 0.5rem;
}

.footer-copyright {
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #0071e3;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style> 