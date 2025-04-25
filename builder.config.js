module.exports = {
    framework: 'nuxt',
    apiKey: 'bpk-82e26de262204ec7ab54f73d193b33f6', // From Builder.io settings
    customStrategies: {
      nuxt: {
        projectPath: process.cwd(),
        componentsDir: './components/builder'
      }
    }
  }