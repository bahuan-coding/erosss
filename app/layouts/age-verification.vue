<template>
  <div class="age-verification-layout">
    <slot />
  </div>
</template>

<style scoped>
.age-verification-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}
</style>
