<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center min-h-screen py-16">
      <UIcon name="i-heroicons-clock" class="text-primary-600 dark:text-primary-400 w-16 h-16 animate-pulse mb-4" />
      <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Carregando experiência...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <UIcon name="i-heroicons-exclamation-triangle" class="text-rose-500 w-16 h-16 mb-4" />
      <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Oops! Algo deu errado.</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        Não foi possível carregar os detalhes desta experiência.
      </p>
      <UButton
        to="/experiencias"
        color="primary"
        variant="solid"
        :ui="{
          rounded: 'rounded-full',
          padding: 'px-6 py-2'
        }"
      >
        Ver Todas Experiências
      </UButton>
    </div>

    <!-- Experience Content -->
    <div v-else-if="experience" class="experience-page">
      <!-- Hero Section with Immersive Experience Viewport -->
      <section class="experience-hero relative overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="experience.heroImage" alt="Imagem da experiência" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
        </div>

        <UContainer class="relative z-10 h-full flex items-center">
          <div class="max-w-2xl text-white py-24 md:py-32">
            <UBadge
              size="lg"
              color="primary"
              variant="subtle"
              class="mb-6"
              :ui="{
                base: 'font-bold uppercase tracking-wider',
                size: { lg: 'text-sm px-4 py-1' }
              }"
            >
              Experiência Exclusiva
            </UBadge>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {{ experience.title }}
            </h1>

            <p class="text-xl md:text-2xl text-white/80 mb-8">
              {{ experience.subtitle }}
            </p>

            <div class="flex flex-wrap gap-4">
              <UButton
                color="white"
                variant="solid"
                icon="i-heroicons-sparkles"
                :ui="{
                  rounded: 'rounded-full',
                  padding: 'px-6 py-3'
                }"
              >
                Explorar Experiência
              </UButton>

              <UButton
                color="white"
                variant="outline"
                icon="i-heroicons-calendar"
                :ui="{
                  rounded: 'rounded-full',
                  padding: 'px-6 py-3',
                  variant: {
                    outline: 'border-2 bg-opacity-20 backdrop-blur-sm hover:bg-white/30'
                  }
                }"
              >
                Ver Disponibilidade
              </UButton>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Model Content Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <UContainer>
          <div class="text-center mb-12">
            <UBadge
              color="primary"
              variant="subtle"
              class="mb-4"
              :ui="{
                base: 'font-bold uppercase tracking-wider'
              }"
            >
              Conheça Sua Artista
            </UBadge>

            <h2 class="text-3xl md:text-4xl font-bold mb-4" style="background: linear-gradient(90deg, #9333ea, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
              {{ experience.modelName }}
            </h2>

            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Descubra quem irá criar uma experiência artística exclusiva para você
            </p>
          </div>

          <div class="max-w-6xl mx-auto">
            <!-- Model Profile Card - Enhanced Version -->
            <div class="mb-16 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div class="grid grid-cols-1 md:grid-cols-12">
                <!-- Left Column - Image & Quick Stats -->
                <div class="md:col-span-5 lg:col-span-4 relative">
                  <div class="h-full">
                    <img
                      :src="experience.modelProfileImage"
                      :alt="experience.modelName"
                      class="w-full h-full object-cover"
                    >
                    <!-- Floating Stats Card -->
                    <div class="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
                      <div class="flex justify-between items-center">
                        <div class="text-center">
                          <p class="text-xl font-bold text-primary-600 dark:text-primary-400">12</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Experiências</p>
                        </div>
                        <div class="text-center">
                          <p class="text-xl font-bold text-primary-600 dark:text-primary-400">98%</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Avaliação</p>
                        </div>
                        <div class="text-center">
                          <p class="text-xl font-bold text-primary-600 dark:text-primary-400">5.2k</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Seguidores</p>
                        </div>
                      </div>
                      <UButton
                        color="primary"
                        variant="solid"
                        class="w-full mt-3"
                        size="sm"
                        icon="i-heroicons-heart"
                        :ui="{
                          rounded: 'rounded-full',
                        }"
                      >
                        Seguir
                      </UButton>
                    </div>
                  </div>
                </div>

                <!-- Right Column - Model Details -->
                <div class="md:col-span-7 lg:col-span-8 p-6 md:p-8">
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ experience.modelName }}</h3>
                      <p class="text-sm text-primary-600 dark:text-primary-400">Especialista em {{ experience.badge?.toLowerCase() }}</p>
                    </div>
                    <UBadge
                      color="primary"
                      variant="soft"
                      size="lg"
                      :ui="{
                        base: 'font-bold uppercase',
                      }"
                    >
                      <span class="flex items-center gap-1">
                        <UIcon name="i-heroicons-check-badge" class="w-4 h-4" />
                        Verificada
                      </span>
                    </UBadge>
                  </div>

                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {{ experience.modelDescription }}
                  </p>

                  <div class="mb-6">
                    <h4 class="text-lg font-bold mb-3 text-gray-900 dark:text-white">Especialidades</h4>
                    <div class="flex flex-wrap gap-2">
                      <UBadge
                        v-for="(skill, idx) in modelSkills"
                        :key="idx"
                        color="gray"
                        variant="soft"
                        size="sm"
                      >
                        {{ skill }}
                      </UBadge>
                    </div>
                  </div>

                  <div class="mb-6">
                    <h4 class="text-lg font-bold mb-3 text-gray-900 dark:text-white">Disponibilidade</h4>
                    <p class="text-gray-700 dark:text-gray-300">
                      Disponível para esta experiência exclusiva através de sorteio. Participe agora para ter a chance de vivenciar momentos únicos com {{ experience.modelName }}.
                    </p>
                  </div>

                  <div class="flex gap-4">
                    <UButton
                      color="primary"
                      variant="solid"
                      icon="i-heroicons-ticket"
                      :ui="{
                        rounded: 'rounded-full',
                      }"
                    >
                      Participar do Sorteio
                    </UButton>

                    <UButton
                      color="gray"
                      variant="ghost"
                      icon="i-heroicons-chat-bubble-left-ellipsis"
                      :ui="{
                        rounded: 'rounded-full',
                      }"
                    >
                      Enviar Mensagem
                    </UButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Model Media Gallery -->
            <div class="mb-16">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <UIcon name="i-heroicons-photo" class="w-5 h-5 mr-2" />
                Galeria de Fotos
              </h3>

              <!-- Photos Grid -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                  v-for="(photo, idx) in modelPhotos"
                  :key="idx"
                  class="relative aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer"
                >
                  <img
                    :src="photo.url"
                    :alt="`Foto de ${experience.modelName} ${idx + 1}`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  >
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p class="text-white text-sm">{{ photo.caption }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Model Video Showcase -->
            <div class="mb-16">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <UIcon name="i-heroicons-film" class="w-5 h-5 mr-2" />
                Conheça Melhor {{ experience.modelName }}
              </h3>

              <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative">
                <!-- Video Placeholder -->
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <UIcon name="i-heroicons-play-circle" class="w-20 h-20 text-primary-600/80 dark:text-primary-400/80 mb-4" />
                  <p class="text-gray-700 dark:text-gray-300 text-center max-w-md px-4">
                    Assista ao vídeo de apresentação de {{ experience.modelName }} e descubra mais sobre esta experiência exclusiva
                  </p>
                  <UButton
                    color="primary"
                    variant="solid"
                    class="mt-6"
                    icon="i-heroicons-lock-closed"
                    :ui="{
                      rounded: 'rounded-full',
                    }"
                  >
                    Desbloquear Conteúdo Premium
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Testimonials -->
            <div class="mb-16">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 mr-2" />
                Depoimentos
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  v-for="(testimonial, idx) in modelTestimonials"
                  :key="idx"
                  class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
                >
                  <div class="flex items-start gap-4 mb-4">
                    <img
                      :src="testimonial.avatar"
                      :alt="testimonial.name"
                      class="w-12 h-12 rounded-full object-cover"
                    >
                    <div>
                      <p class="font-bold text-gray-900 dark:text-white">{{ testimonial.name }}</p>
                      <div class="flex text-yellow-400">
                        <UIcon
                          v-for="star in 5"
                          :key="star"
                          :name="star <= testimonial.rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
                          class="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-700 dark:text-gray-300 text-sm italic">{{ testimonial.content }}</p>
                </div>
              </div>
            </div>

            <!-- FAQ About the Model -->
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <UIcon name="i-heroicons-question-mark-circle" class="w-5 h-5 mr-2" />
                Perguntas Frequentes
              </h3>

              <UAccordion :items="modelFAQs" :ui="{
                wrapper: 'divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden'
              }" />
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Raffle Interaction Section -->
      <section class="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <!-- Subtle diagonal pattern background -->
        <div class="absolute inset-0 opacity-[0.02] pattern-diagonal" />

        <UContainer>
          <div class="text-center mb-12">
            <UBadge
              color="primary"
              variant="subtle"
              class="mb-4"
              :ui="{
                base: 'font-bold uppercase tracking-wider'
              }"
            >
              Sorteio Exclusivo
            </UBadge>

            <h2 class="text-3xl md:text-4xl font-bold mb-4" style="background: linear-gradient(90deg, #9333ea, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
              Participe do Sorteio
            </h2>

            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Concorra a prêmios exclusivos nesta experiência premium.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <!-- Prize Details -->
            <div class="space-y-8">
              <UCard
                class="overflow-hidden"
                :ui="{
                  base: 'overflow-hidden border-0',
                  body: { padding: 'p-0' },
                  ring: '',
                  divide: ''
                }"
              >
                <img
                  :src="experience.raffleMainPrizeImage"
                  alt="Prêmio principal"
                  class="w-full aspect-video object-cover"
                >

                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Prêmio Principal
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    {{ experience.raffleMainPrizeDescription }}
                  </p>
                </div>
              </UCard>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4">
                <UCard
                  class="text-center"
                  :ui="{
                    base: 'bg-primary-50 dark:bg-primary-950/30',
                    divide: '',
                    ring: 'ring-0'
                  }"
                >
                  <div>
                    <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {{ experience.ticketsSold }}/{{ experience.totalTickets }}
                    </div>
                    <p class="text-sm text-primary-700 dark:text-primary-300">
                      Bilhetes Vendidos
                    </p>
                  </div>
                </UCard>

                <UCard
                  class="text-center"
                  :ui="{
                    base: 'bg-rose-50 dark:bg-rose-950/30',
                    divide: '',
                    ring: 'ring-0'
                  }"
                >
                  <div>
                    <div class="text-2xl font-bold text-rose-600 dark:text-rose-400">
                      {{ experience.raffleTimeRemaining }}
                    </div>
                    <p class="text-sm text-rose-700 dark:text-rose-300">
                      Tempo Restante
                    </p>
                  </div>
                </UCard>
              </div>
            </div>

            <!-- Ticket Selection -->
            <div>
              <ExperienceCalendar
                v-model:selected-tickets="selectedTickets"
                :sold-tickets="soldTickets"
                :ticket-price="ticketPrice"
              />
            </div>
          </div>
        </UContainer>
      </section>

      <!-- Immersive Experience Details -->
      <section class="immersive-experience relative">
        <div class="parallax-container">
          <div class="parallax-bg" :style="{ backgroundImage: `url(${experience.parallaxBackground})` }" />
          <div class="parallax-content">
            <UContainer class="py-24 md:py-32 relative z-10 flex md:justify-end">
              <UCard
                class="max-w-lg backdrop-blur-md"
                :ui="{
                  base: 'bg-white/90 dark:bg-gray-900/90 overflow-hidden',
                  rounded: 'rounded-2xl',
                  shadow: 'shadow-2xl'
                }"
              >
                <h2 class="text-3xl font-bold mb-6" style="background: linear-gradient(90deg, #9333ea, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Uma Experiência Única</h2>
                <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {{ experience.longDescription }}
                </p>

                <div class="space-y-6 mb-8">
                  <div v-for="(feature, index) in experience.features" :key="index" class="flex gap-4">
                    <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/50 flex items-center justify-center">
                      <img :src="feature.icon" :alt="feature.title" class="w-6 h-6" >
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 dark:text-white mb-1">{{ feature.title }}</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>

                <UButton
                  color="primary"
                  variant="outline"
                  :ui="{
                    rounded: 'rounded-full',
                    padding: 'px-6 py-2'
                  }"
                >
                  Saiba Mais
                </UButton>
              </UCard>
            </UContainer>
          </div>
        </div>
      </section>

      <!-- Related Experiences -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900">
        <UContainer>
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4" style="background: linear-gradient(90deg, #9333ea, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Outras Experiências</h2>
            <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Você também pode se interessar por estas experiências exclusivas
            </p>
          </div>

          <div class="flex gap-6 pb-4 overflow-x-auto custom-scrollbar">
            <UCard
              v-for="(relatedExp, index) in otherExperiences"
              :key="index"
              class="experience-card min-w-[280px] md:min-w-[320px] flex-shrink-0"
              :ui="{
                base: 'overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col',
                body: { base: 'p-0 flex-1 flex flex-col' },
                rounded: 'rounded-xl',
                ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
                shadow: 'shadow-lg hover:shadow-primary-500/20'
              }"
              @click="navigateTo(`/experiencias/${relatedExp.id}`)"
            >
              <div class="relative">
                <img
                  :src="relatedExp.image"
                  :alt="relatedExp.title"
                  class="w-full h-48 object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-bold mb-2">{{ relatedExp.title }}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {{ relatedExp.description }}
                  </p>
                </div>

                <UButton
                  color="primary"
                  variant="ghost"
                  icon="i-heroicons-arrow-right"
                  size="sm"
                  trailing
                  :ui="{
                    rounded: 'rounded-full'
                  }"
                >
                  Ver Detalhes
                </UButton>
              </div>
            </UCard>
          </div>
        </UContainer>
      </section>
    </div>
  </div>
</template>

<script setup>

const route = useRoute();
const experienceId = route.params.id;
const experience = ref(null);
const loading = ref(true);
const error = ref(null);

const ticketPrice = 25; // Price per ticket
const selectedTickets = ref([]);
const soldTickets = ref([12, 15, 23, 37, 45, 56, 67, 72, 81, 88, 93]); // Mock sold tickets

// Related experiences data
const otherExperiences = [
  {
    id: 'trilha-jaragua',
    title: 'Trilha no Pico do Jaraguá',
    description: 'Aventura e intimidade com vista privilegiada',
    image: '/images/sorteios/jaragua-sunset.jpg'
  },
  {
    id: 'drive-in-sensual',
    title: 'Drive-in Sensual',
    description: 'Privacidade com clima de filme proibido',
    image: '/images/sorteios/drive-in-vintage.jpg'
  },
  {
    id: 'standup-airbnb',
    title: 'Workshop de Comidas Afrodisíacas',
    description: 'Descoberta do prazer através dos sentidos',
    image: '/images/sorteios/workshop-gourmet.jpg'
  },
  {
    id: 'fofoca-seducao',
    title: 'Fofoca & Sedução',
    description: 'Segredos, desejos e provocações',
    image: '/images/sorteios/fofoca-vintage.jpg'
  }
];

// MCP Architecture - Model-related data
// Model Skills based on experience type
const modelSkillsMap = {
  'trilha-jaragua': ['Trilhas', 'Fotografia', 'Aventuras ao ar livre', 'Conhecimento em botânica', 'Primeiros socorros'],
  'drive-in-sensual': ['Cinema clássico', 'Vintage style', 'Mixologia', 'Storytelling', 'Photogenic'],
  'standup-airbnb': ['Humor Terapêutico', 'Arte da Comédia', 'Criação de Conexões', 'Relaxamento pelo Riso', 'Experiências Transformadoras'],
  'fofoca-seducao': ['Conversação', 'Confidências', 'Psicologia', 'Criação de ambiente', 'Empatia']
};

// Model Photos based on experience type
const modelPhotosMap = {
  'trilha-jaragua': [
    { url: '/images/sorteios/aventureira-profile.jpg', caption: 'No topo do Pico do Jaraguá' },
    { url: '/images/sorteios/jaragua-vista.jpg', caption: 'Apreciando o visual panorâmico' },
    { url: '/images/sorteios/jaragua-trilha.jpg', caption: 'Explorando trilhas secretas' },
    { url: '/images/sorteios/vista-panoramica.jpg', caption: 'Guiando para vistas exclusivas' }
  ],
  'drive-in-sensual': [
    { url: '/images/sorteios/cinema-modelo.jpg', caption: 'Com roupa inspirada em filmes clássicos' },
    { url: '/images/sorteios/drive-in-screen.jpg', caption: 'Preparando a experiência cinematic' },
    { url: '/images/sorteios/drive-in-vintage.jpg', caption: 'Ambientação com estilo vintage' },
    { url: '/images/sorteios/cinema-suite.jpg', caption: 'Arranjo especial na suíte Cinema Paradiso' }
  ],
  'standup-airbnb': [
    { url: '/images/sorteios/chef-modelo.jpg', caption: 'Conduzindo uma sessão de risoterapia' },
    { url: '/images/sorteios/chef-cooking.jpg', caption: 'No Comedy Club criando momentos de humor' },
    { url: '/images/sorteios/workshop-gourmet.jpg', caption: 'Preparando o Refúgio do Riso' },
    { url: '/images/sorteios/degustacao-casal.jpg', caption: 'Transformando risadas em conexões genuínas' }
  ],
  'fofoca-seducao': [
    { url: '/images/sorteios/fofoca-modelo.jpg', caption: 'Criando ambiente de confidências' },
    { url: '/images/sorteios/fofoca-elegante.jpg', caption: 'No salão de conversas exclusivo' },
    { url: '/images/sorteios/fofoca-vintage.jpg', caption: 'Preparando o ambiente com estilo' },
    { url: '/images/sorteios/bar-lounge.jpg', caption: 'Conversas no lounge privativo' }
  ]
};

// Model Testimonials based on experience type
const modelTestimonialsMap = {
  'trilha-jaragua': [
    {
      name: 'Ricardo M.',
      avatar: '/images/avatars/avatar-1.jpg',
      rating: 5,
      content: 'Uma experiência inesquecível! A guia conhecia trilhas que eu jamais encontraria sozinho, com vistas de tirar o fôlego. O chá da tarde no ponto mais alto foi um toque especial que tornou o momento ainda mais mágico.'
    },
    {
      name: 'Marcela L.',
      avatar: '/images/avatars/avatar-2.jpg',
      rating: 5,
      content: 'Ganhei esse sorteio e fui com meu namorado. A aventureira nos guiou com muita segurança e conhecimento, além de criar momentos perfeitos para fotos românticas. Recomendo muito essa experiência para casais!'
    }
  ],
  'drive-in-sensual': [
    {
      name: 'Fernando C.',
      avatar: '/images/avatars/avatar-3.jpg',
      rating: 5,
      content: 'A atmosfera criada pela hostess foi incrível! Ela conhecia cada detalhe dos filmes clássicos e transformou a noite em algo saído diretamente de Hollywood. A suíte temática superou todas as expectativas.'
    },
    {
      name: 'Patrícia S.',
      avatar: '/images/avatars/avatar-4.jpg',
      rating: 4,
      content: 'Uma viagem no tempo! A atenção aos detalhes vintage e a seleção de filmes foi perfeita. A hostess sabe realmente como criar um ambiente romântico e nostálgico.'
    }
  ],
  'standup-airbnb': [
    {
      name: 'Guilherme N.',
      avatar: '/images/avatars/avatar-5.jpg',
      rating: 5,
      content: 'Uma experiência verdadeiramente mágica! O Comedy Club Secreto já seria incrível por si só, mas a presença da artista elevou tudo a outro nível. A Mesa Dourada ofereceu uma visão perfeita do show, e os drinks temáticos eram deliciosos e criativos. O momento que mais me surpreendeu foi a transição para o Refúgio do Riso - caminhar pelas ruas de Pinheiros descobrindo pequenos segredos da cidade foi fascinante. E o Airbnb? Cada detalhe meticulosamente planejado, desde a iluminação que mudava sutilmente até o terraço com vista para as estrelas. Uma obra de arte experiencial!'
    },
    {
      name: 'Rodrigo M.',
      avatar: '/images/avatars/avatar-3.jpg',
      rating: 5,
      content: 'Participei do sorteio sem grandes expectativas e fui completamente surpreendido. O show de stand-up foi apenas o começo de uma noite extraordinária. A artista tem um talento único para criar momentos de conexão genuína, misturando perfeitamente humor e intimidade. Cada espaço do Refúgio do Riso conta uma história diferente, e o "Baú de Conexões" nos proporcionou conversas surpreendentemente profundas e divertidas. As taças que se iluminam ao brinde são um toque mágico que não vou esquecer. Uma experiência premium que valeu cada centavo do bilhete!'
    }
  ],
  'fofoca-seducao': [
    {
      name: 'Gabriela M.',
      avatar: '/images/avatars/avatar-7.jpg',
      rating: 5,
      content: 'Nunca pensei que me sentiria tão confortável para compartilhar histórias íntimas com minhas amigas. A Confidente criou um ambiente mágico de cumplicidade que nos permitiu abrir o coração com muitas risadas e alguns segredos revelados.'
    },
    {
      name: 'Carolina T.',
      avatar: '/images/avatars/avatar-8.jpg',
      rating: 4,
      content: 'Os jogos de revelações foram sensacionais e a condução da experiência pela Confidente foi impecável. Saímos de lá mais unidas do que nunca, com histórias que só nós conhecemos. Vale cada centavo!'
    }
  ]
};

// Model FAQs based on experience type
const modelFAQsMap = {
  'trilha-jaragua': [
    {
      title: 'Qual é o nível de dificuldade da trilha?',
      content: 'Nossa Guia Aventureira adapta o percurso de acordo com a experiência e condicionamento físico dos participantes. Existem trilhas para todos os níveis, sempre garantindo vistas espetaculares e momentos especiais.'
    },
    {
      title: 'Preciso levar equipamentos específicos?',
      content: 'Não é necessário. Todo equipamento especializado será fornecido pela guia. Recomendamos apenas roupas confortáveis, protetor solar e uma câmera para registrar os momentos.'
    },
    {
      title: 'Posso escolher o horário da trilha?',
      content: 'A experiência é planejada para aproveitar o melhor horário do pôr do sol, mas a guia entrará em contato previamente para ajustar detalhes conforme sua disponibilidade.'
    }
  ],
  'drive-in-sensual': [
    {
      title: 'Os filmes exibidos podem ser escolhidos pelo participante?',
      content: 'Sim, a hostess oferece uma curadoria de filmes clássicos, mas você pode solicitar previamente títulos específicos que gostaria de assistir durante a experiência.'
    },
    {
      title: 'É permitido levar um(a) convidado(a) para a experiência?',
      content: 'Sim, a experiência é projetada para casais. O vencedor do sorteio pode trazer um(a) convidado(a) para desfrutar da experiência completa.'
    },
    {
      title: 'Como funciona a hospedagem na suíte temática?',
      content: 'A suíte Cinema Paradiso está completamente ambientada com referências cinematográficas vintage. A pernoite inclui todo o conforto de um hotel boutique premium, com serviços extras inspirados no cinema clássico.'
    }
  ],
  'standup-airbnb': [
    {
      title: 'Como funciona o Comedy Club Secreto?',
      content: 'O Comedy Club Secreto é um espaço exclusivo com acesso limitado, localizado em um charmoso porão vintage no coração de Pinheiros. Você e nossa artista terão acesso privilegiado através de uma entrada discreta, onde serão recebidos por um anfitrião dedicado que os conduzirá à Mesa Dourada, estrategicamente posicionada para uma experiência perfeita de visualização sem interações indesejadas com outros espectadores ou comediantes.'
    },
    {
      title: 'O que inclui o Kit Risadas Premium?',
      content: 'O Kit Risadas Premium é uma experiência sensorial completa que acompanha o show de stand-up. Inclui um card personalizado com uma mensagem exclusiva da artista sobre o poder transformador do riso, degustação de 3 drinks temáticos inspirados em piadas clássicas, e um menu de finger food gourmet cuidadosamente elaborado para ser servido em momentos estratégicos entre as apresentações, complementando perfeitamente os momentos de humor.'
    },
    {
      title: 'Como é a experiência no Refúgio do Riso?',
      content: 'O Refúgio do Riso é um Airbnb exclusivamente preparado com ambientação temática que evolui ao longo da noite. Possui três espaços distintos: a "Cabine de Risos" com sofá-cama ultra macio e almofadas especiais, o "Recanto das Histórias" com bar intimista e seleção premium de vinhos, e o "Spa de Relaxamento" com aromaterapia e luzes especiais. Momentos assinatura incluem o "Baú de Conexões" com jogos personalizados, taças que se iluminam ao brinde, e um livro de memórias para registrar momentos especiais. A experiência culmina no terraço privativo, onde a artista conduz uma sessão de relaxamento sensorial sob o céu estrelado de São Paulo.'
    }
  ],
  'fofoca-seducao': [
    {
      title: 'Como funciona a dinâmica de conversas e jogos?',
      content: 'A Confidente conduz jogos de revelações e dinâmicas de conversas de forma gradual, respeitando o nível de conforto das participantes. Tudo acontece de forma natural e divertida, sem pressões.'
    },
    {
      title: 'Quantas amigas posso levar para a experiência?',
      content: 'A experiência está estruturada para até 4 participantes (a ganhadora do sorteio mais 3 amigas convidadas) para manter a intimidade e qualidade das interações.'
    },
    {
      title: 'Há consumo de bebidas alcoólicas durante a experiência?',
      content: 'Sim, a experiência inclui um bar de drinks premium com bartender especializado, mas o consumo é opcional e sempre incentivamos a moderação para aproveitar plenamente as dinâmicas de conversação.'
    }
  ]
};

// MCP Architecture - Computed properties (Presenter layer)
const modelSkills = computed(() => modelSkillsMap[experienceId] || []);
const modelPhotos = computed(() => modelPhotosMap[experienceId] || []);
const modelTestimonials = computed(() => modelTestimonialsMap[experienceId] || []);
const modelFAQs = computed(() =>
  modelFAQsMap[experienceId]?.map(faq => ({
    label: faq.title,
    icon: 'i-heroicons-question-mark-circle',
    content: faq.content
  })) || []
);

onMounted(async () => {
  try {
    experience.value = await $fetch(`/api/experiencias/${experienceId}`);
    document.title = `${experience.value.title} - Experiências`;
  } catch (e) {
    console.error('Failed to load experience:', e);
    error.value = e;
    if (e.response?.status === 404) {
      await navigateTo('/experiencias');
    }
  } finally {
    loading.value = false;
  }
});

</script>

<style scoped>
.experience-page {
  overflow-x: hidden;
}

.experience-hero {
  height: 100vh;
}

.pattern-diagonal {
  background-image: linear-gradient(135deg, #a78bfa 25%, transparent 25%),
                  linear-gradient(225deg, #a78bfa 25%, transparent 25%),
                  linear-gradient(45deg, #a78bfa 25%, transparent 25%),
                  linear-gradient(315deg, #a78bfa 25%, transparent 25%);
  background-position: 30px 0, 30px 0, 0 0, 0 0;
  background-size: 60px 60px;
  background-repeat: repeat;
}

.ticket-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .ticket-grid {
    grid-template-columns: repeat(10, 1fr);
  }
}

.ticket-number {
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #f3f4f6;
  color: #111827;
  transition: all 0.2s;
  cursor: pointer;
  border: 2px solid transparent;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.ticket-number::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.2s;
}

.ticket-number:not([disabled]):hover {
  background-color: #e5e7eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.ticket-number:not([disabled]):active {
  transform: translateY(0);
}

.dark .ticket-number {
  background-color: #1f2937;
  color: #f9fafb;
}

.dark .ticket-number:not([disabled]):hover {
  background-color: #374151;
}

.ticket-number[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}

.ticket-number.bg-gradient-to-r {
  border: 2px solid #8b5cf6;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

/* Parallax Section */
.immersive-experience {
  height: 100vh;
  overflow: hidden;
}

.parallax-container {
  height: 100%;
  position: relative;
}

.parallax-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.parallax-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dark .parallax-bg::after {
  background-color: rgba(0, 0, 0, 0.6);
}

.parallax-content {
  position: relative;
  z-index: 10;
  height: 100%;
}

/* Experience Card Styles */
.experience-card {
  transform: translateY(0);
  transition: all 0.3s;
  cursor: pointer;
}

.experience-card:hover {
  transform: translateY(-0.5rem);
}

/* Custom Scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(147, 51, 234, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 0.25rem;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(216, 180, 254);
  border-radius: 9999px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(126, 34, 206);
}
</style>
