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
  },

  // Configuração para geração estática e deploy no Netlify
  ssr: false,

  // Nitro server config para Netlify
  nitro: {
    preset: 'netlify'
  },

  // Vite build options
  vite: {
    build: {
      rollupOptions: {
        external: ['googleapis', 'node:fs', 'node:path']
      }
    }
  }
})