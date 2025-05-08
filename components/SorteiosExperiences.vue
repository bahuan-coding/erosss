<template>
  <div class="experiences-section">
    <UContainer>
      <div class="py-16 md:py-24">
        <div class="text-center mb-12">
          <UBadge 
            size="lg" 
            color="primary" 
            variant="subtle" 
            class="mb-4"
            :ui="{ 
              base: 'font-bold uppercase tracking-wider',
              size: { lg: 'text-sm px-4 py-1' }
            }"
          >
            限量版 • Edições Limitadas
          </UBadge>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experiências Exclusivas</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Experiências exclusivas criadas por nossas modelos profissionais, disponíveis por tempo limitado.
          </p>
        </div>
        
        <!-- Grid layout 2x2 for experiences -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExperienciaCard 
            v-for="experience in experiences" 
            :key="experience.title"
            :experience="experience"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import ExperienciaCard from '@/components/ExperienciaCard.vue'

const experiences = [
  {
    title: "Show de Stand-Up e Role-Play Romântico",
    badge: "EXPERIÊNCIA EXCLUSIVA",
    image: "/images/sorteios/standup.jpg", 
    progress: 75,
    remaining: 3,
    total: 12
  },
  {
    title: "Concerto Intimista + Workshop de Dança ou Culinária",
    badge: "ARTE & CONEXÃO",
    image: "/images/sorteios/concerto.jpg",
    progress: 65,
    remaining: 4,
    total: 10
  },
  {
    title: "Noite de Cinema Temático + Sessão de Cosplay & Cuddle",
    badge: "DIVERSÃO INTIMISTA",
    image: "/images/sorteios/cinema.jpg", 
    progress: 85,
    remaining: 2,
    total: 12
  },
  {
    title: "Passeio Selvagem + Chá da Tarde + Mini Show de Canção",
    badge: "AVENTURA & ROMANCE",
    image: "/images/sorteios/passeio.jpg", 
    progress: 60,
    remaining: 5,
    total: 12
  }
]
</script>

<style scoped>
.text-gradient {
  @apply bg-gradient-to-r from-custom-purple to-custom-pink bg-clip-text text-transparent;
}

.experiences-section {
  position: relative;
  background-image: radial-gradient(circle at center, rgba(79, 29, 120, 0.08), rgba(0, 0, 0, 0.02));
  overflow: hidden;
}

.experiences-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
  pointer-events: none;
}
</style>
