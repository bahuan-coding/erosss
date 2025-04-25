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
            EDIÇÕES EXCLUSIVAS
          </UBadge>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gradient">Destaques do Mês</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Experiências exclusivas criadas por nossas modelos profissionais, disponíveis por tempo limitado.
          </p>
        </div>
        
        <!-- Grid layout 3x2 for experiences -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard 
            v-for="(exp, index) in experiences" 
            :key="index"
            class="experience-card"
            :ui="{
              base: 'overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col',
              body: { base: 'p-0 flex-1 flex flex-col' }, // Allow body to grow
              rounded: 'rounded-xl',
              ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
              shadow: 'shadow-lg hover:shadow-primary-500/20'
            }"
          >
            <div class="relative">
              <LazyImage :src="exp.image" :alt="exp.title" height="13rem" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <UBadge 
                class="absolute top-3 right-3" 
                size="xs"
                color="primary"
                variant="solid"
                :ui="{
                  base: 'font-semibold uppercase tracking-wide px-2 py-0.5',
                  rounded: 'rounded-md'
                }"
              >
                {{ exp.badge }}
              </UBadge>
            </div>
            
            <div class="p-5 flex-1 flex flex-col justify-between"> <!-- Flex column justify between -->
              <div> <!-- Content grouping div -->
                <h3 class="text-xl font-bold mb-3">{{ exp.title }}</h3>
                
                <div class="mb-4">
                  <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>{{ exp.remaining }} vagas restantes</span>
                    <span>{{ exp.total - exp.remaining }}/{{ exp.total }}</span>
                  </div>
                  
                  <UProgress 
                    :value="exp.progress" 
                    color="primary"
                    class="progress-bar"
                    size="sm"
                    :ui="{
                      base: 'relative overflow-hidden h-2 w-full rounded-full',
                      track: { background: 'bg-gray-200 dark:bg-gray-700' },
                      progress: { 
                        background: 'bg-gradient-to-r from-primary-500 to-pink-500',
                        transition: 'width 0.5s ease-in-out' // Added transition
                      }
                    }"
                  />
                </div>
              </div>
              
              <div class="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-800"> <!-- Added border -->
                <UButton 
                  size="sm" 
                  color="gray" 
                  variant="ghost"
                  :ui="{
                    base: 'font-medium',
                    rounded: 'rounded-full',
                    padding: 'px-4 py-1'
                  }"
                >
                  Ver detalhes
                </UButton>
                
                <UButton 
                  size="sm" 
                  color="primary" 
                  icon="i-heroicons-ticket"
                  :disabled="exp.remaining === 0"
                  :ui="{
                    base: 'font-medium',
                    rounded: 'rounded-full',
                    padding: 'px-4 py-1'
                  }"
                >
                  Participar
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
        
        <div class="flex justify-center mt-16">
          <UButton 
            color="white" 
            size="lg" 
            icon="i-heroicons-sparkles"
            variant="outline"
            trailing
            :ui="{
              base: 'font-medium',
              rounded: 'rounded-full',
              padding: 'px-8 py-3',
              variant: { outline: 'border-2 border-primary-300 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950' }
            }"
          >
            Ver todas as experiências
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "VIP Sunset Cocktail",
    badge: "EXPERIÊNCIA EXCLUSIVA",
    image: "/images/experiences/cocktail.jpg", 
    progress: 80,
    remaining: 2,
    total: 10
  },
  {
    title: "Masterclass de Fotografia Boudoir",
    badge: "APRENDA COM UMA PRO",
    image: "/images/experiences/boudoir.jpg",
    progress: 65,
    remaining: 4,
    total: 10
  },
  {
    title: "Degustação de Vinhos à Luz de Velas",
    badge: "NOITE ROMÂNTICA",
    image: "/images/experiences/wine.jpg", 
    progress: 95,
    remaining: 1,
    total: 10
  },
  {
    title: "Sessão de Perguntas e Respostas Íntima",
    badge: "CONHEÇA A MODELO",
    image: "/images/experiences/qa.jpg", 
    progress: 50,
    remaining: 5,
    total: 10
  },
  {
    title: "Festa Temática Anos 20",
    badge: "VAGAS LIMITADAS",
    image: "/images/experiences/gatsby.jpg", 
    progress: 70,
    remaining: 3,
    total: 10
  },
  {
    title: "Jogo de Poker Privado",
    badge: "APENAS CONVIDADOS",
    image: "/images/experiences/poker.jpg", 
    progress: 40,
    remaining: 6,
    total: 10
  },
  {
    title: "Noite de Mistério: Escape Room Sensorial", 
    badge: "DESVENDE OS SEGREDOS",
    image: "/images/experiences/escape.jpg", 
    progress: 55,
    remaining: 4,
    total: 8 
  }
]
</script>

<style scoped>
.experiences-section {
  background-color: rgba(249, 250, 251, 0.6); /* Slightly off-white */
  position: relative;
  overflow: hidden;
  width: 100%;
}

.dark .experiences-section {
  background-color: rgba(17, 24, 39, 0.6); /* Slightly darker gray */
}

.text-gradient {
  background: linear-gradient(90deg, #9333ea, #d946ef);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.experience-card {
  transform: translateY(0);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-6px);
}


/* Add subtle diagonal pattern */
.experiences-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.02;
  background-image: linear-gradient(135deg, #a78bfa 25%, transparent 25%), 
                    linear-gradient(225deg, #a78bfa 25%, transparent 25%), 
                    linear-gradient(45deg, #a78bfa 25%, transparent 25%), 
                    linear-gradient(315deg, #a78bfa 25%, transparent 25%);
  background-position: 30px 0, 30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
  pointer-events: none;
}
</style>
