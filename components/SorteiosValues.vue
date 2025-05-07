<template>
  <section class="values-section">
    <UContainer>
      <div class="py-16 md:py-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-gradient">Nossa proposta de valor</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Uma plataforma que valoriza profissionais e entrega experiências exclusivas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard
            v-for="(card, index) in valueCards"
            :key="index"
            class="value-card"
            :ui="{
              base: 'transition-all duration-300 overflow-hidden',
              rounded: 'rounded-xl',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
              ring: 'ring-1 ring-primary-100 dark:ring-primary-800',
              shadow: 'shadow-sm hover:shadow-xl'
            }"
          >
            <div class="relative">
              <LazyImage
                :src="card.image"
                :alt="card.title"
                height="12rem"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div class="p-6 flex flex-col items-center text-center">
              <div class="icon-wrapper mb-4">
                <UIcon :name="card.icon" class="text-3xl" />
              </div>

              <h3 class="text-xl font-bold mb-3">{{ card.title }}</h3>

              <p class="text-gray-700 dark:text-gray-300">
                {{ card.text }}
              </p>
            </div>
          </UCard>
        </div>

        <!-- FAQ Section -->
        <div class="mt-20">
          <h3 class="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h3>

          <UAccordion :items="faqItems" :ui="{
            wrapper: 'divide-y divide-gray-100 dark:divide-gray-800',
            item: {
              base: 'py-4',
              heading: {
                size: 'text-lg font-medium'
              }
            }
          }" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const valueCards = [
  {
    icon: "i-lucide-crown",
    title: "Para Modelos",
    text: "Controle total da sua imagem e lucratividade. Ganhe R$3k-10k por experiência criada.",
    image: "/images/values/value1.jpg"
  },
  {
    icon: "i-heroicons-key",
    title: "Para Clientes",
    text: "Acesse sorteios que nenhum dinheiro convencional compra. Experiências feitas por profissionais, para conhecedores.",
    image: "/images/values/value2.jpg"
  },
  {
    icon: "i-heroicons-shield-check",
    title: "Segurança",
    text: "Verificação em 3 níveis. Seu conforto é lei.",
    image: "/images/values/value3.jpg"
  }
];

const faqItems = [
  {
    label: 'É seguro?',
    content: 'Verificamos cada participante como um clube privê de Dubai.',
    icon: 'i-heroicons-shield-check'
  },
  {
    label: 'Posso sugerir temas?',
    content: 'As modelos adoram desafios criativos - envie sua ideia!',
    icon: 'i-heroicons-light-bulb'
  }
]
</script>

<style scoped>
.values-section {
  background-color: rgba(250, 245, 255, 0.5);
  position: relative;
  overflow: hidden;
}

.dark .values-section {
  background-color: rgba(30, 20, 40, 0.3);
}

.text-gradient {
  background: linear-gradient(90deg, #9333ea, #d946ef);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.value-card {
  transform: translateY(0);
  transition: all 0.3s ease;
  height: 100%;
  backdrop-filter: blur(5px);
  border-left: 4px solid transparent;
}

.value-card:hover {
  transform: translateY(-8px);
  border-left: 4px solid var(--color-primary-500);
}

.value-card:nth-child(1) .icon-wrapper {
  background: linear-gradient(135deg, #9333ea, #4f46e5);
  color: white;
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(147, 51, 234, 0.3);
}

.value-card:nth-child(2) .icon-wrapper {
  background: linear-gradient(135deg, #d946ef, #ec4899);
  color: white;
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(217, 70, 239, 0.3);
}

.value-card:nth-child(3) .icon-wrapper {
  background: linear-gradient(135deg, #14b8a6, #0d9488);
  color: white;
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(14, 184, 166, 0.3);
}

/* Animated background */
.values-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm20 0l2.83-2.83 1.41 1.41L21.41 4.48H20V3.07zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83H20v-1.41zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83H20v-1.41zM3.07 40l2.83-2.83 1.41 1.41L4.48 41.41H3.07V40zm17.76 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V40zM3.07 20.83l2.83-2.83 1.41 1.41-2.83 2.83H3.07v-1.41zM20.83 40l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V40zm17.76 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V40zM39 38.59l-2.83 2.83H39V38.59zm0-17.76l-2.83 2.83H39v-1.41zm0-35.52l-2.83 2.83H39V3.07zm-17.76 0L18.41.24h1.41v1.41zm-17.76 0L.83.24H3.07v1.41zm0 17.76L.83 18.83H3.07v1.41zm0 17.76L.83 36.59H3.07V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  animation: pattern-shift 60s linear infinite;
}

@keyframes pattern-shift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}
</style>
