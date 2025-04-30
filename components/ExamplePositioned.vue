<template>
  <div class="relative h-40 w-full bg-gray-100 rounded">
    <div class="positioned-element absolute top-0 left-0 p-2 bg-purple-500 text-white rounded">
      Top-left positioned element
    </div>
  </div>
</template>

<style scoped>
@reference "../assets/css/main.css";

.positioned-element {
  @apply shadow-md;
}
</style> 