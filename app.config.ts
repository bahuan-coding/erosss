// https://nuxt.com/docs/getting-started/configuration#app-configuration
export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'zinc',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-right'
    }
  },
  // Add any other app-wide configuration settings here
  theme: {
    // Example of additional configuration that might be needed
    dark: true
  }
}) 