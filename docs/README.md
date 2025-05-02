# Nuxt UI Pro Configuration Documentation

This README provides essential information on the Nuxt UI Pro configuration used in our Sorteios Premium project to help prevent development loops and ensure consistency.

## Project Overview

Sorteios Premium is a premium raffle platform built with Nuxt 3 and Nuxt UI Pro, offering an elegant and engaging experience for users seeking luxury experiences.

## Core Configuration Files

- **nuxt.config.ts**: Main Nuxt configuration file defining modules, settings and build options
- **app.config.ts**: Application-level configuration for UI components and themes
- **content.config.ts**: Configuration for the Nuxt Content module
- **builder.config.js**: Configuration for Builder.io integration

## Nuxt UI Pro Setup

Our project leverages Nuxt UI Pro for a consistent, high-quality UI experience. Key aspects:

- **Component Library**: Extensive use of pre-built UI Pro components
- **Theming**: Custom theme applied through CSS variables and Tailwind configuration
- **Responsive Design**: Mobile-first approach with desktop adaptations

### Important Configuration Settings

In `nuxt.config.ts`:
```js
modules: [
  '@nuxt/eslint',
  '@nuxt/ui-pro',   // UI Pro is a core dependency
  '@nuxt/image',
  '@nuxt/content'
]
```

In `app.config.ts`, theme configuration:
```js
ui: {
  // Theme configuration
  // Primary color palette and other theming options
}
```

## Avoiding Common Development Loops

1. **Component Imports**: All Nuxt UI Pro components are auto-imported, no manual imports needed
2. **CSS Utilities**: Use Tailwind classes instead of custom CSS where possible
3. **API Integration**: API endpoints are defined in the `server/api` directory
4. **Content Management**: Use the `content` directory for Markdown and JSON content

## Development Workflow

1. Run the development server with `npm run dev`
2. Any changes to Nuxt UI Pro configuration should be made in `app.config.ts`
3. Custom components extending Nuxt UI Pro should be placed in `components/ui/`
4. For production builds, use `npm run build`

## Additional Resources

- [Nuxt UI Pro Documentation](https://ui.nuxt.com/pro)
- [Nuxt 3.x Documentation](https://nuxt.com/docs)
- [Project Architecture](./mcp/architecture.md) - Follow our Model-Component-Presenter pattern
- [Google Sheets Integration](../GOOGLE_SHEETS_SETUP.md) - For the admin backend
