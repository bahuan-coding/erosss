<template>
  <div class="bottom-navigation-wrapper" :class="ui.wrapper">
    <div class="bottom-navigation-container" :class="ui.container">
      <NuxtLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :class="[
          ui.item.base,
          link.active ? ui.item.active : ui.item.inactive
        ]"
      >
        <UIcon v-if="link.icon" :name="link.icon" class="text-xl" />
        <span v-if="link.label" class="bottom-nav-label" :class="ui.item.label">
          {{ link.label }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => []
  },
  ui: {
    type: Object,
    default: () => ({
      wrapper: 'fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800',
      container: 'grid grid-cols-5 gap-1',
      item: {
        base: 'flex flex-col items-center justify-center py-2',
        label: 'text-xs mt-1',
        active: 'text-primary-500 dark:text-primary-400',
        inactive: 'text-gray-500 dark:text-gray-400'
      }
    })
  }
})
</script>

<style scoped>
.bottom-navigation-wrapper {
  width: 100%;
}

.bottom-navigation-container {
  max-width: 480px;
  margin: 0 auto;
}

.bottom-nav-label {
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
</style> 