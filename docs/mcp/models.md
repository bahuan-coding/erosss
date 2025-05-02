# Data Models Documentation

This document outlines the core data models used in the Sorteios Premium platform, based on our existing implementation and planned MCP architecture.

## Experience Model

The Experience model represents a premium raffle experience with a professional model that users can win through our platform.

```javascript
/**
 * Experience Model
 * Represents a premium raffle experience in the system
 */
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
  
  // Visual assets
  heroImage: string;          // Large hero image path
  parallaxBackground: string; // Background for parallax effects
  
  // Content
  longDescription: string;    // Detailed description
  contentPreviews: {          // Preview content items
    title: string;            // Title of preview content
    thumbnail: string;        // Thumbnail image path
  }[];
  
  // Raffle prize details
  raffleMainPrizeImage: string;       // Image of the main prize
  raffleMainPrizeDescription: string; // Description of what the winner gets
  
  // Experience features
  features: {                 // Key features of the experience
    title: string;            // Feature title
    description: string;      // Feature description
    icon: string;             // Icon path for the feature
  }[];
  
  // Signature Moments extension
  signatureMoments?: {
    preEvent?: Array<{
      type: 'physical' | 'digital';
      title: string;
      description: string;
      costLimit?: number;
      deliveryTimeline?: string;
    }>;
    during?: Array<{
      trigger: string;        // When this moment occurs
      action: string;         // What happens during this moment
      description: string;    // Detailed description of the moment
      isOptional: boolean;    // Whether this is a required moment
    }>;
    postEvent?: Array<{
      type: string;           // Type of follow-up
      timing: string;         // When it should be delivered
      content: string;        // What the content is
      isPersonalized: boolean; // Whether it's personalized to the winner
    }>;
  };
}
```

## Experience Type Model

Different categories of experiences follow specific templates:

```javascript
/**
 * Experience Type Model
 * Defines templates for different experience categories
 */
interface ExperienceType {
  id: string;                   // Unique identifier
  name: string;                 // Display name of the type
  description: string;          // Description of this type of experience
  defaultDuration: number;      // Typical duration in hours
  
  // Design guidelines
  recommendedLocations: string[]; // Where this experience works best
  requiredElements: string[];    // Elements that must be included
  optionalElements: string[];    // Elements that can be included
  
  // Sample moments
  sampleMoments: {
    preEvent: any[];
    during: any[];
    postEvent: any[];
  };
  
  // Experience flow
  defaultTimeline: {
    phase: string;
    duration: number;            // In minutes
    description: string;
  }[];
  
  // UI representation
  iconPath: string;              // Icon for this experience type
  accentColor: string;           // Recommended accent color
}
```

## Modelo (Model) Form Data Structure

For our model registration process, we use the following data structure:

```javascript
interface ModeloFormData {
  // Anti-stress options
  antiStress: string[];         // Selected anti-stress options
  antiStressOutro: string;      // Other anti-stress option
  
  // Descontração (relaxation) options
  descontracao: string;         // Selected relaxation style
  descontracaoOutro: string;    // Other relaxation description
  
  // Dynamic activities
  dinamica: string;             // Selected dynamic activity
  dinamicaOutro: string;        // Other dynamic activity description
  
  // Surprise elements
  surpresa: string;             // Selected surprise type
  surpresaDescricao: string;    // Surprise description
  
  // Bridge building activities
  ponte: string;                // Selected bridge-building activity
  ponteDescricao: string;       // Bridge activity description
  
  // Memorabilia options
  lembranca: string;            // Selected memorabilia type
  lembrancaDescricao: string;   // Memorabilia description
  
  // Extra services
  extras: string[];             // Selected extra services
  
  // Personal information
  nome: string;                 // Full name
  nomeArtistico: string;        // Stage/artistic name
  email: string;                // Email contact
  telefone: string;             // Phone number
  instagram: string;            // Instagram handle
  cidade: string;               // City of residence
  
  // Experience preferences
  experienceTypes: string[];    // Types of experiences the model is interested in
  availableDays: string[];      // Days of the week available
  specialSkills: string[];      // Special skills or interests
  dietaryRestrictions: string[]; // Dietary restrictions or preferences
}
```

## Signature Moments Model

For creating memorable moments within experiences:

```javascript
/**
 * Signature Moment Model
 * Defines special moments that create lasting memories
 */
interface SignatureMoment {
  id: string;                 // Unique identifier
  name: string;               // Name of this moment
  phase: 'preEvent' | 'during' | 'postEvent'; // When it occurs
  description: string;        // Description of this moment
  
  // Implementation details
  implementationGuide: string; // How to implement this moment
  requiredResources: string[]; // What's needed to create this moment
  estimatedCost: number;       // Approximate cost to implement
  
  // Customization options
  customizationOptions: {
    option: string;           // What can be customized
    possibleValues: string[]; // Possible customization values
  }[];
  
  // Technical requirements
  technicalRequirements: {
    type: string;             // Type of requirement
    description: string;      // Description of the requirement
  }[];
  
  // Associated experience types
  compatibleExperienceTypes: string[]; // Which experiences this works with
  
  // Example implementations
  examples: {
    description: string;      // Example description
    photoUrl?: string;        // Example photo if available
  }[];
}
```

## Safety Model

We implement strict safety measures through our Safety model:

```javascript
/**
 * Safety Model
 * Implements anti-abuse and protection systems
 */
interface Safety {
  ageVerified: boolean;        // Whether age verification is complete
  modelBlacklist: string[];    // IDs of blocked users
  contentModeration: {
    lastReview: Date;          // Last content review timestamp
    flags: {
      type: 'photo' | 'text';  // Type of flagged content
      resolved: boolean;       // Flag resolution status
    }[];
  };
}
```

## Winner Model

The Winner model represents a raffle winner:

```javascript
/**
 * Winner Model
 * Represents a raffle winner profile
 */
interface Winner {
  id: string;                 // Unique identifier
  experienceId: string;       // ID of won experience
  winDate: Date;              // Date when raffle was won
  fantasyProfile: {
    triggers: string[];       // Preference keywords
    limits: string[];         // Boundary definitions
  };
  memorabilia: {
    received: string[];       // Memorabilia already received
    pending: string[];        // Pending memorabilia items
  };
}
```

## Future Model Implementation

As we move toward a full MCP architecture, these implicit data structures will be formalized into proper model classes with:

1. **Validation logic**: Type checking and business rule validation
2. **Transformation methods**: Convert between API and UI-friendly formats
3. **Relationship handling**: Manage connections between related entities
4. **State management**: Track and update entity state

Example implementation pattern:

```javascript
export class ExperienceModel {
  constructor(data) {
    // Initialize with data and validate
    this.validate(data);
    Object.assign(this, data);
  }
  
  validate(data) {
    // Validation logic
  }
  
  toApiFormat() {
    // Transform for API submission
  }
  
  static fromApiResponse(response) {
    // Create from API response
  }
}
``` 