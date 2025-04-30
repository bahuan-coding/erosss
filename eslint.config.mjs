// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  // Your custom configs here
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      // Add your custom rules here
    }
  },
  // For new Nuxt 4 directory structure (optional)
  {
    files: ['app/**/*.{js,ts,vue}'],
    rules: {
      // Add specific rules for app directory
    }
  }
])
