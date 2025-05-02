# Components Documentation

This document outlines the component architecture of the Sorteios Premium platform following the MCP pattern.

## Component Architecture

Components in our MCP architecture are responsible for UI representation and user interactions. They're designed to be:

- **Reusable**: Components can be used across multiple views
- **Self-contained**: Each component focuses on a specific UI concern
- **Declarative**: Components describe what should render based on props
- **Event-driven**: Communication happens through Vue events

## Component Hierarchy

Our components follow a hierarchical organization:

```
components/
├── ui/                 # Base UI components
├── layout/             # Layout components
├── forms/              # Form-related components
└── feature-specific/   # Domain-specific components
    ├── experiences/    # Experience-related components
    ├── raffles/        # Raffle-related components
    └── models/         # Model-related components
```

## Key Components

### Page Layout Components

- **AppHeader.vue**: Main application header with navigation
- **SorteiosHeader.vue**: Specialized header for the sorteios section
- **SorteiosFooter.vue**: Footer with site-wide links and information

### Experience Components

- **SorteiosHero.vue**: Hero section showcasing premium experiences
- **SorteiosExperiences.vue**: Grid display of available experiences
- **SorteiosValues.vue**: Display of platform values and benefits
- **ExperienceCard.vue**: Card component for individual experiences

### Model Components

- **AgeGate.vue**: Age verification component for access control

## Component Implementation Pattern

Our Vue components follow a consistent implementation pattern:

```vue
<template>
  <!-- UI structure with minimal logic -->
  <div class="component-container">
    <slot name="header"></slot>
    <div class="component-content">
      {{ formattedTitle }}
    </div>
    <button @click="emitAction">{{ buttonText }}</button>
  </div>
</template>

<script setup>
// Imports from Vue and utilities
import { computed, ref } from 'vue'

// Props declaration
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Submit'
  }
})

// Emits declaration
const emit = defineEmits(['action'])

// Local state
const isActive = ref(false)

// Computed properties
const formattedTitle = computed(() => {
  return props.title.toUpperCase()
})

// Methods
function emitAction() {
  emit('action', { isActive: isActive.value })
}
</script>

<style scoped>
/* Component-specific styles */
.component-container {
  /* styles */
}
</style>
```

## Component Communication

Components communicate through:

1. **Props**: Data passed from parent to child
2. **Events**: Notifications emitted from child to parent
3. **Provide/Inject**: For deeply nested component trees
4. **Store**: Global state for cross-component communication

## Component Best Practices

1. **Single Responsibility Principle**:
   - Each component should focus on a single aspect of UI or functionality
   - Break complex components into smaller, focused ones

2. **Props Validation**:
   - Always define prop types and requirements
   - Use default values where appropriate
   - Document complex props

3. **Event Naming**:
   - Use descriptive event names
   - Include relevant data with events
   - Document expected payloads

4. **Performance Optimization**:
   - Use `v-memo` for complex list rendering
   - Leverage computed properties for derived values
   - Consider lazy-loading for heavy components

5. **Testing Considerations**:
   - Design components with testability in mind
   - Keep template logic minimal
   - Extract complex logic to composables

## Integration with Presenters

Components receive data and callbacks from presenters, typically through:

1. **Page Components**: The main entry point where presenters connect with components
2. **Composables**: Shared logic that can be used across multiple components
3. **Global State**: When complex state needs to be shared across components

## Future Component Development

As we move toward a complete MCP architecture:

1. Create a comprehensive UI component library
2. Develop presenter-specific components that connect models to UI
3. Implement component documentation with Storybook
4. Establish thorough component testing 