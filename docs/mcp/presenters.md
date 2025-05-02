# Presenters Documentation

This document outlines the presenter layer in our Sorteios Premium platform's MCP architecture.

## Presenter Role

In the MCP architecture, presenters serve as the intermediary between models and components:

- They process and transform data from models for component consumption
- They handle user interactions from components and update models
- They coordinate application flow and navigation
- They manage component state and UI logic

## Presenter Implementation

In our Nuxt.js application, presenters are implemented through several mechanisms:

### 1. Page Components

Nuxt page components (`pages/` directory) act as high-level presenters:

```javascript
// pages/experiencias/[id].vue
<script setup>
// Fetch data from API
const route = useRoute()
const { data: experience } = await useFetch(`/api/experiencias/${route.params.id}`)

// Transform for component consumption
const formattedExperience = computed(() => {
  if (!experience.value) return null
  return {
    ...experience.value,
    // Add derived properties for components
    formattedDate: formatDate(experience.value.date),
    progress: Math.round((experience.value.ticketsSold / experience.value.totalTickets) * 100)
  }
})

// Handle user interactions
function handlePurchase(quantity) {
  // Process purchase
}
</script>
```

### 2. Composables

Shared presenter logic is extracted into composables:

```javascript
// composables/useExperience.js
export function useExperience(experienceId) {
  // Reactive state
  const experience = ref(null)
  const isLoading = ref(true)
  const error = ref(null)
  
  // Data fetching
  async function fetchExperience() {
    isLoading.value = true
    try {
      const data = await $fetch(`/api/experiencias/${experienceId}`)
      experience.value = data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }
  
  // Actions
  async function purchaseTickets(quantity) {
    // Handle purchase logic
  }
  
  // Initial fetch
  fetchExperience()
  
  return {
    experience,
    isLoading,
    error,
    purchaseTickets
  }
}
```

### 3. API Routes as Presenters

Server API routes in Nuxt also act as presenters for server-side operations:

```javascript
// server/api/experiencias/[id].js
export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  
  // Get data from model/database
  const experienceData = getExperienceById(id)
  
  // Transform for API consumption
  return {
    ...experienceData,
    // Add API-specific properties
    _links: {
      self: `/api/experiencias/${id}`,
      purchase: `/api/experiencias/${id}/purchase`
    }
  }
})
```

## Presenter Responsibilities

### Data Transformation

Presenters transform model data into component-friendly formats:

```javascript
// Transform experience data for component consumption
function transformExperience(experienceData) {
  return {
    ...experienceData,
    // Add derived properties
    formattedPrice: formatCurrency(experienceData.price),
    isAlmostSoldOut: experienceData.ticketsSold >= experienceData.totalTickets * 0.9,
    timeLeft: formatRemainingTime(experienceData.endDate)
  }
}
```

### User Interaction

Presenters handle events from components:

```javascript
// Handle form submission
async function handleModelFormSubmit(formData) {
  // Validate input
  const errors = validateModelForm(formData)
  if (errors.length) {
    return { success: false, errors }
  }
  
  // Transform for API
  const apiData = transformFormToApi(formData)
  
  // Submit to API
  try {
    const result = await $fetch('/api/modelos', {
      method: 'POST',
      body: apiData
    })
    return { success: true, data: result }
  } catch (error) {
    return { success: false, errors: [error.message] }
  }
}
```

### State Management

Presenters maintain UI state:

```javascript
// Manage pagination state
const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(0)

// Computed state
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))
const isFirstPage = computed(() => currentPage.value === 1)
const isLastPage = computed(() => currentPage.value === totalPages.value)

// Actions
function nextPage() {
  if (!isLastPage.value) {
    currentPage.value++
    fetchItems()
  }
}

function previousPage() {
  if (!isFirstPage.value) {
    currentPage.value--
    fetchItems()
  }
}
```

## Presenter Best Practices

1. **Separation of Concerns**:
   - Keep UI logic in presenters, not components
   - Keep business logic in models, not presenters

2. **Error Handling**:
   - Gracefully handle all errors
   - Transform errors into user-friendly messages
   - Provide fallback behavior

3. **Testability**:
   - Make presenters easy to test
   - Use dependency injection for external services
   - Create pure functions where possible

4. **Performance**:
   - Optimize data transformations
   - Use caching for expensive operations
   - Debounce or throttle frequent user events

## Future Presenter Development

As we fully implement the MCP architecture:

1. Create formal presenter classes for complex features
2. Standardize presenter patterns across the application
3. Implement presenter tests
4. Document presenter APIs for component developers 