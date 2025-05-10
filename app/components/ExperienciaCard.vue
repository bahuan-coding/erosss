<template>
  <UCard
    class="experience-card overflow-hidden bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    :ui="{
      base: 'overflow-hidden transition-all duration-300 flex flex-col',
      body: { base: 'p-0 flex-1 flex flex-col' },
      rounded: 'rounded-xl',
      ring: '',
      shadow: 'shadow-lg hover:shadow-primary-500/20'
    }"
  >
    <!-- Image -->
    <div class="relative">
      <img
        :src="experience.image"
        :alt="experience.title"
        class="w-full h-48 object-cover rounded-t-xl"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div class="absolute top-3 left-3">
        <UBadge
          color="primary"
          variant="solid"
          class="font-semibold text-xs tracking-wide"
        >
          {{ experience.badge }}
        </UBadge>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="text-lg font-bold text-white mb-2 line-clamp-2">{{ experience.title }}</h3>

      <div class="flex items-center gap-2 mb-3">
        <UIcon name="i-heroicons-users" class="text-gray-400 w-4 h-4" />
        <div class="text-xs text-gray-300">
          <span class="font-semibold">{{ experience.total - experience.remaining }}/{{ experience.total }}</span> participantes
        </div>
      </div>

      <UProgress
        :value="experience.progress"
        color="primary"
        class="mb-3"
        :ui="{
          base: 'relative h-1.5 overflow-hidden rounded-full',
          track: { background: 'bg-gray-700 dark:bg-gray-800' },
          progress: { background: 'bg-primary-500' }
        }"
      />

      <div class="mt-auto flex justify-between items-center">
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-clock" class="text-gray-400 w-4 h-4" />
          <span class="text-xs text-gray-300">{{ experience.remaining }} vagas restantes</span>
        </div>

        <UButton
          color="white"
          variant="ghost"
          size="xs"
          :to="`/experiencias/${getExperienceId(experience.title)}`"
          :ui="{
            base: 'font-medium',
            rounded: 'rounded-full',
            padding: 'px-3',
            size: { xs: 'text-xs' }
          }"
        >
          Ver detalhes
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})

function getExperienceId(title) {
  const experienceIds = {
    'Trilha Íntima no Pico do Jaraguá + Chá da Tarde Proibido': 'trilha-jaragua',
    'Drive-in Sensual + Suíte Cinema Paradiso': 'drive-in-sensual',
    'Workshop de Comidas Afrodisíacas + Encontro na Suíte': 'workshop-afrodisiaco',
    'Encontro de Fofoca & Sedução': 'fofoca-seducao'
  }

  return experienceIds[title] || 'experiencia-1'
}
</script>

<style scoped>
.experience-card {
  background-color: rgba(26, 32, 44, 0.95);  /* Fundo escuro com leve transparência */
}
</style>