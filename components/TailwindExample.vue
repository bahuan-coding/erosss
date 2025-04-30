<template>
  <div class="example-wrapper">
    <div class="example-card">
      <h2 class="example-title">Tailwind CSS v4 Example</h2>
      <p class="example-text">This component demonstrates how to use Tailwind CSS v4 with the @reference directive.</p>
      <div class="example-positioned-box"></div>
    </div>
  </div>
</template>

<style>
/* Reference the tailwind utilities with the @reference directive */
@reference "~/assets/css/tailwind-utils.css";

.example-wrapper {
  @apply p-8 flex justify-center items-center;
}

.example-card {
  @apply bg-white rounded-lg shadow-lg p-6 max-w-md relative;
}

.example-title {
  @apply text-2xl font-bold text-primary-700 mb-4;
}

.example-text {
  @apply text-gray-700 mb-6;
}

.example-positioned-box {
  @apply absolute top-0 right-0 w-6 h-6 bg-primary-500 rounded-tr-lg;
}
</style> 