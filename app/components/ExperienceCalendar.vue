<template>
  <div class="calendar-wrapper">
    <UCard
      class="mb-4"
      :ui="{
        base: '',
        ring: '',
        divide: ''
      }"
    >
      <template #header>
        <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-bold">Escolha seus Números da Sorte</h3>
        </div>
      </template>

      <div class="ticket-grid p-4">
        <button
          v-for="n in 100"
          :key="n"
          :class="[
            'ticket-number',
            selectedTickets.includes(n) ? 'bg-primary-500! text-white!' : '',
            soldTickets.includes(n) ? 'bg-gray-200! dark:bg-gray-700! text-gray-400! dark:text-gray-500! cursor-not-allowed!' : ''
          ]"
          :disabled="soldTickets.includes(n)"
          @click="toggleTicket(n)"
        >
          {{ n }}
        </button>
      </div>
    </UCard>

    <UCard
      :ui="{
        base: 'bg-primary-50 dark:bg-primary-950/30',
        divide: '',
        ring: 'ring-0'
      }"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ selectedTickets.length }} número{{ selectedTickets.length !== 1 ? 's' : '' }} selecionado{{ selectedTickets.length !== 1 ? 's' : '' }}
          </div>
          <div class="text-xl font-bold text-primary-600 dark:text-primary-400">
            R$ {{ selectedTickets.length * ticketPrice }}
          </div>
        </div>

        <UButton
          color="primary"
          :disabled="selectedTickets.length === 0"
          icon="i-heroicons-shopping-cart"
        >
          Comprar Agora
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:selectedTickets']);

const props = defineProps({
  soldTickets: {
    type: Array,
    default: () => []
  },
  ticketPrice: {
    type: Number,
    default: 25
  },
  selectedTickets: {
    type: Array,
    default: () => []
  }
});

const toggleTicket = (number) => {
  if (props.soldTickets.includes(number)) {
    return;
  }

  const updatedTickets = [...props.selectedTickets];

  const index = updatedTickets.indexOf(number);
  if (index === -1) {
    updatedTickets.push(number);
  } else {
    updatedTickets.splice(index, 1);
  }

  emit('update:selectedTickets', updatedTickets);
};
</script>

<style scoped>
/* Ticket Grid */
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
</style>