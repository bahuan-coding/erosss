<template>
  <div class="lazy-image-container" :style="{ height: height || 'auto' }">
    <img
      v-if="!error"
      :src="src"
      :alt="alt || 'Image'"
      class="lazy-image"
      @error="handleError"
      @load="loaded = true"
      :class="{ 'lazy-image-loaded': loaded }"
    />
    <div v-else class="fallback-container">
      <div class="fallback-content">
        <UIcon name="i-heroicons-photo" class="fallback-icon" />
        <span class="fallback-text">{{ alt || 'Image' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
});

const error = ref(false);
const loaded = ref(false);

function handleError() {
  error.value = true;
  console.warn(`Failed to load image: ${props.src}`);
}
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: rgba(200, 200, 200, 0.2);
}

.lazy-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lazy-image-loaded {
  opacity: 1;
}

.fallback-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
}

.dark .fallback-container {
  background: linear-gradient(45deg, #1f2937, #111827);
}

.fallback-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}

.dark .fallback-content {
  color: #9ca3af;
}

.fallback-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.fallback-text {
  font-size: 0.875rem;
  text-align: center;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>