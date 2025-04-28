export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('notify', (options) => {
    // Import UNotification from Nuxt UI
    const { toast } = useToast()
    toast(options)
  })
}) 