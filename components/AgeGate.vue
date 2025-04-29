<script setup>
defineEmits(['access-granted']);

const exitSite = () => {
  window.location.href = 'https://www.google.com';
};
</script>

<template>
  <div class="age-gate">
    <div class="age-gate-container">
      <div class="age-gate-content">
        <h1 class="age-gate-title">Verificação de Idade</h1>
        <p class="age-gate-description">
          Para acessar este conteúdo, você precisa ter pelo menos 18 anos de idade.
        </p>
        
        <div class="age-gate-buttons">
          <button @click="$emit('access-granted')" class="age-gate-button primary-button">
            Tenho 18 anos ou mais
          </button>
          <button @click="exitSite" class="age-gate-button secondary-button">
            Sair do site
          </button>
        </div>
        
        <p class="age-gate-notice">
          Ao clicar em "Tenho 18 anos ou mais", você confirma que tem idade legal para visualizar o conteúdo deste site.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.age-gate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.age-gate-container {
  max-width: 500px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.age-gate-content {
  padding: 2.5rem;
  text-align: center;
}

.age-gate-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111;
  letter-spacing: -0.02em;
}

.age-gate-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.age-gate-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.age-gate-button {
  width: 100%;
  padding: 14px 20px;
  border-radius: 980px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.age-gate-button.primary-button {
  background-color: #0071e3;
  color: white;
}

.age-gate-button.primary-button:hover {
  background-color: #0077ed;
  transform: scale(1.02);
}

.age-gate-button.secondary-button {
  background-color: transparent;
  color: #0071e3;
  border: 1px solid #0071e3;
}

.age-gate-button.secondary-button:hover {
  background-color: rgba(0, 113, 227, 0.05);
}

.age-gate-notice {
  font-size: 0.85rem;
  color: #777;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .age-gate-content {
    padding: 2rem 1.5rem;
  }
  
  .age-gate-title {
    font-size: 1.8rem;
  }
  
  .age-gate-description {
    font-size: 1rem;
  }
}
</style> 