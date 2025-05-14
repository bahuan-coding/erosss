export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('notify', (options) => {
    // Use Nuxt UI's useToast composable
    const toast = useToast()

    // Make sure the notification includes description text
    const enhancedOptions = {
      ...options,
      // If text isn't provided, add a default based on the color
      text: options.text ||
        (options.color === 'green' ? 'Operação concluída com sucesso!' :
         options.color === 'red' ? 'Ocorreu um erro. Por favor, tente novamente.' :
         'Aguarde enquanto processamos sua solicitação.'),
      // Add default timeout if not specified
      timeout: options.timeout || 3000
    }

    toast.add(enhancedOptions)
  })
})