<template>
  <UHeader
    :ui="{
      container: 'max-w-[480px] lg:max-w-6xl mx-auto',
    }"
  >
    <template #left>
      <div class="status-bar lg:hidden">
        <div class="time dark:text-white">10:30</div>
      </div>
      <UButton
        icon="i-lucide-menu"
        color="primary"
        variant="ghost"
        class="hidden lg:flex"
        aria-label="Menu"
      />
    </template>

    <template>
      <UPageHeader
        title="Sorteios Premium"
        :ui="{
          title:
            'text-2xl font-bold font-serif text-primary-900 dark:text-primary-100',
          description:
            'hidden lg:block text-sm text-primary-500 dark:text-primary-400',
        }"
        description="Experiências exclusivas para você"
      />
    </template>

    <template #right>
      <div class="status-icons-container lg:hidden">
        <div class="status-icons-wrapper">
          <UIcon name="i-lucide-wifi" class="status-icon" />
          <UIcon name="i-lucide-battery-full" class="status-icon" />
          <UIcon name="i-lucide-signal-medium" class="status-icon" />
        </div>
      </div>
      <div class="hidden lg:flex gap-4">
        <UButton
          icon="i-heroicons-magnifying-glass"
          color="primary"
          variant="ghost"
          aria-label="Search"
        />
        <UColorModeButton color="primary" />
        <UButton
          icon="i-heroicons-user-circle"
          color="primary"
          variant="soft"
          aria-label="Profile"
        />
      </div>
    </template>
  </UHeader>
</template>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
}

.status-icons-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.status-icons-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-icon {
  width: 18px;
  height: 18px;
  color: rgba(34, 34, 34, 1);
}

.dark .status-icon {
  color: rgba(255, 255, 255, 0.9);
}

@media (min-width: 1024px) {
  .status-bar,
  .status-icons-container {
    display: none;
  }
}
</style>
