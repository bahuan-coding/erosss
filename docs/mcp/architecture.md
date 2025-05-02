# MCP Architecture for Sorteios Premium

This project follows the Model-Component-Presenter (MCP) architecture pattern, a variation of MVC adapted for modern frontend frameworks like Nuxt.js.

## Architecture Overview

```
src/
├── models/        # Data models and business logic
├── components/    # UI components (Vue)
├── presenters/    # Logic that connects models and components
├── server/        # API endpoints and server-side logic
├── pages/         # Nuxt pages (act as high-level presenters)
└── content/       # Content stored as Markdown/JSON
```

## Core Concepts

### Models

Models represent the data structures and business logic of our application. They handle:

- Data validation
- Business rules
- API interactions
- State management

### Components

Components are responsible for the UI representation and user interactions:

- Reusable UI elements
- Presentation logic
- User input handling
- Events emission

### Presenters

Presenters act as intermediaries between models and components:

- Data transformation for views
- Handling user interactions
- Coordinating between multiple models
- Managing application flow

## Implementation in Sorteios Premium

### Models

Our primary data models include:

- **Experience**: Represents a raffle experience with model details, features, and content
- **User**: Represents platform users, including authentication and profile data
- **Raffle**: Contains raffle logic, ticketing, and winner selection

Example from our Experience model:
```javascript
// Experience structure (implicit in our API)
{
  id: string;
  title: string;
  subtitle: string;
  image: string;
  modelName: string;
  modelDescription: string;
  modelProfileImage: string;
  ticketsSold: number;
  totalTickets: number;
  // ...other properties
}
```

### Components

Our UI components follow a hierarchical organization:

- **Base Components**: Fundamental UI elements (buttons, cards, inputs)
- **Composite Components**: Combinations of base components (headers, footers)
- **Page-Specific Components**: Components designed for specific pages or features

Example component structure:
- `AppHeader.vue`: Main application header
- `SorteiosHero.vue`: Hero section for experiences
- `SorteiosExperiences.vue`: Experience listing component
- `ExperienceCard.vue`: Individual experience card

### Presenters

In our Nuxt.js implementation, presenters are implemented as:

- Page components in the `pages/` directory
- Composables for shared presenter logic
- API endpoints in the `server/api/` directory

## Data Flow

1. **API Request**: Server API endpoints fetch or update data
2. **Model Processing**: Models process and validate the data
3. **Presenter Coordination**: Presenters transform data for components
4. **Component Rendering**: Components display data to users
5. **User Interaction**: User actions trigger events
6. **Presenter Handling**: Presenters handle events and update models

## Feature-Specific Architecture

Our MCP architecture adapts to specific feature domains:

- [**Experience Design**](./experiences.md): Premium experiences with professional models
- [**Signature Moments**](./signature-moments.md): Creating memorable moments within experiences
- [**Language & Localization**](./localization.md): Brazilian Portuguese implementation
- **User Management**: Authentication, profiles, and preferences
- **Raffle System**: Ticket purchasing and winner selection
- **Payment Processing**: Secure handling of financial transactions

## Language & Localization

Our platform follows these language and localization guidelines:

- **Primary Language**: Brazilian Portuguese (pt-BR) for all user-facing content
- **Secondary Language**: English (en-US) for code only
- **Cultural Nuances**: Preserving Brazilian terminology (e.g., "Sorteio" not "Raffle")
- **Metric System**: Using R$ for currency and metric measurements

For detailed implementation guidance, see the [Language & Localization](./localization.md) documentation.

## Best Practices

1. **Separation of Concerns**: 
   - Components should not directly interact with APIs
   - Models should not contain UI logic
   - Presenters should handle coordination

2. **Component Design**:
   - Keep components focused on a single responsibility
   - Use props for input and events for output
   - Follow Nuxt UI Pro design patterns

3. **Model Design**:
   - Keep models immutable where possible
   - Include validation logic
   - Document expected data structures

4. **Presenter Design**:
   - Use composables for shared presenter logic
   - Handle asynchronous operations
   - Transform data into component-friendly formats 