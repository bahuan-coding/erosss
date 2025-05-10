export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css'],

  pages: true,

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxt/content'
  ],

  runtimeConfig: {
    public: {
      builderApiKey: process.env.BUILDER_PUBLIC_KEY
    }
  },

  nitro: {
    preset: 'netlify'
  },


  typescript: {
    strict: true,
    typeCheck: false
  },

  compatibilityDate: '2023-11-04'
})