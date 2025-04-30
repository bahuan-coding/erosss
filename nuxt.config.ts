// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Future-proof configuration for Nuxt 4 compatibility
  future: {
    compatibilityVersion: 4,
  },

  // Core settings
  devtools: { enabled: true },

  // CSS resources
  css: ['~/assets/css/main.css'],

  // Module configuration
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxt/content'
  ],

  // Runtime configuration (environment variables)
  runtimeConfig: {
    public: {
      builderApiKey: process.env.BUILDER_PUBLIC_KEY
    }
  },

  // Server configuration
  nitro: {
    preset: 'netlify'
  },
  // Module-specific configuration


  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false // Disable type checking to avoid vue-tsc errors
  },

  // Experimental features (aligned with latest best practices)
  

  compatibilityDate: '2025-04-30'
})