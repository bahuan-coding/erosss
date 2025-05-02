# Experience Design in MCP Architecture

This document outlines how premium experiences are structured, designed, and implemented within our Sorteios Premium platform's MCP architecture.

## Experience Concept

In our platform, an "Experience" represents a premium encounter with a professional model that raffle winners can enjoy. Each experience is meticulously designed to create memorable moments while maintaining appropriate boundaries.

## Experience Model Structure

Within our MCP architecture, experiences are represented by the Experience model:

```javascript
interface Experience {
  // Core information
  id: string;                 // Unique identifier
  title: string;              // Main experience title
  subtitle: string;           // Subtitle/tagline for the experience
  image: string;              // Primary image path
  
  // Model information
  modelName: string;          // Name of the model hosting the experience
  modelDescription: string;   // Brief description of the model
  modelProfileImage: string;  // Profile image path for the model
  
  // Raffle details
  ticketsSold: number;        // Number of tickets sold
  totalTickets: number;       // Total available tickets
  raffleTimeRemaining: string; // Formatted time remaining
  daysRemaining: number;      // Days until raffle closes
  isNew: boolean;             // Whether this is a new experience
  
  // Experience content
  longDescription: string;    // Detailed description
  features: {                 // Key features of the experience
    title: string;            // Feature title
    description: string;      // Feature description
    icon: string;             // Icon path for the feature
  }[];
  
  // Future extensions for experience design
  signatureMoments?: {        // Special memorable moments
    preEvent?: any[];         // Pre-experience surprises
    during?: any[];           // During-experience moments
    postEvent?: any[];        // Post-experience follow-ups
  };
}
```

## Experience Design Phases

Our experiences follow a three-phase design approach:

### 1. Pre-Experience Phase

This phase focuses on building anticipation and setting expectations:

- **Tease Kit**: Physical or digital package sent to winners
- **Countdown Elements**: Digital content revealed as the experience approaches
- **Personalization Setup**: Collection of winner preferences

Components involved:
- `ExperienceCountdown.vue`: Displays time remaining to experience
- `TeaseKitTracking.vue`: Shows shipping/delivery status of physical items

### 2. During-Experience Phase

The main event where the winner and model participate in the planned activities:

- **Guided Interactions**: Structured activities and conversation prompts
- **Special Moments**: Planned surprises and memorable elements
- **Documentation**: Photo/video capture of appropriate moments

Components involved:
- `ExperienceTimeline.vue`: Displays the planned flow of the experience
- `MomentCapture.vue`: Interface for capturing and saving memories

### 3. Post-Experience Phase

Follow-up elements that extend the memory of the experience:

- **Delayed Surprises**: Messages or gifts sent after the experience
- **Digital Memorabilia**: Access to exclusive content or mementos
- **Feedback Collection**: Gathering impressions while memories are fresh

Components involved:
- `MemorabiliaGallery.vue`: Displays collected memories
- `FeedbackForm.vue`: Interface for providing experience feedback

## Experience Types

We offer several categories of premium experiences:

1. **Event-Based Experiences**
   - Attending exclusive events with the model
   - VIP access to venues and activities
   - Example: "Noite de Gala em Paris"

2. **Activity-Based Experiences**
   - Participating in specific activities with the model
   - Shared experiences like photoshoots or adventures
   - Example: "Ensaio na Praia"

3. **Dining & Conversation Experiences**
   - Premium dining experiences with the model
   - Intellectual and personal connection focus
   - Example: "Jantar VIP"

4. **Wellness Retreats**
   - Health and wellness activities with the model
   - Focus on rejuvenation and self-care
   - Example: "Retiro Tropical"

## Experience Implementation in MCP

### Model Layer

- `ExperienceModel.js`: Handles data validation and business rules
- `ExperienceService.js`: Manages API interactions for experiences
- Data transformation and relationship handling

### Component Layer

- Reusable UI components for displaying experience details
- Interactive elements for user engagement with experiences
- Visual design elements that convey the premium nature

### Presenter Layer

- `ExperiencePresenter.js`: Coordinates between models and components
- Handles user interactions with experiences (browsing, purchasing tickets)
- Manages state related to experience display and interaction

## Experience Creation Process

1. **Concept Development**: Initial experience idea and theme
2. **Model Collaboration**: Work with model to define unique elements
3. **Content Creation**: Photography, descriptions, and marketing assets
4. **Technical Implementation**: Building the digital representation
5. **Quality Assurance**: Review and approval process
6. **Publication**: Making the experience available for raffle

## Future Experience Enhancements

1. **Signature Moments System**: Formalized structure for creating memorable moments
2. **Gamification Elements**: Points, achievements, and collectibles
3. **AR/VR Components**: Digital extensions of physical experiences
4. **Personalization Engine**: AI-driven customization based on winner preferences

## Experience-Related Data Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Experience     │     │  Experience     │     │  Experience     │
│  Models         │◄────┤  Presenters     │◄────┤  Components     │
│                 │     │                 │     │                 │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  API/Database   │     │  Business Logic │     │  User Interface │
│  Interactions   │     │  & Workflows    │     │  Presentation   │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘ 