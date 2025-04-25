// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Add CSS file to config
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui-pro'
  ],
  
  // Fix warning about NuxtPage component
  pages: true,
  
  runtimeConfig: {
    public: {
      builderApiKey: process.env.BUILDER_PUBLIC_KEY
    }
  }
})