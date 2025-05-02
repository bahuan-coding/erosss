# Signature Moments in MCP Architecture

This document details the concept and implementation of "Signature Moments" within our Sorteios Premium platform - the special touches that transform a transaction into a core memory.

## Concept Overview

Signature Moments are carefully designed elements that create lasting memories throughout the experience journey. They follow the Disney-inspired approach of creating magical moments that surprise and delight winners.

## Moment Timing Structure

Our signature moments are organized into three distinct phases:

### Pre-Experience Magic

These moments build anticipation before the actual experience:

```javascript
interface PreExperienceMoment {
  type: 'physical' | 'digital';  // Delivery method
  title: string;                 // Name of the moment (e.g., "The Tease Kit")
  description: string;           // What this moment entails
  elements: {                    // What's included
    name: string;                // Element name
    description: string;         // Element description
    purpose: string;             // Why it's included
  }[];
  delivery: {
    timeline: string;            // When to deliver relative to experience
    method: string;              // How it's delivered
    tracking: boolean;           // Whether tracking is provided
  };
  costLimit: number;             // Budget constraint
}
```

#### Key Pre-Experience Examples

1. **"The Tease Kit"**
   - Physical or digital package containing:
     - Mystery scent vial related to experience theme
     - Puzzle piece (1 of 5 to be completed during experience)
     - "Burn After Reading" note with vanishing instructions

2. **"Countdown Theater"**
   - Custom microsite revealing daily content:
     - Day 3: Model's favorite song snippet
     - Day 1: 3-second video preview of venue lighting

### During-Experience Magic

These are the special moments that occur during the actual experience:

```javascript
interface DuringExperienceMoment {
  trigger: string;               // What initiates this moment
  action: string;                // What happens
  description: string;           // Detailed description
  timing: {
    phase: string;               // Which experience phase
    isTimeSensitive: boolean;    // Whether timing is critical
  };
  requirements: {
    props: string[];             // Physical items needed
    preparation: string;         // Preparation needed
    personnel: string[];         // Who needs to be involved
  };
  contingency: string;           // Backup plan if moment fails
}
```

#### Key During-Experience Examples

1. **"The Disney Touch"**
   - Hidden details inspired by Disney's approach:
     - Personalized details hidden in environment
     - Initials carved in ice cubes
   - Kinetic surprises:
     - Table that gently vibrates during key moments
     - Smart lighting synchronized to model's voice

2. **"Gamified Intimacy"**
   - Interactive elements:
     - Tactile wheel for determining next interaction
     - Point system for earning memorabilia items

### Post-Experience Magic

These moments extend the memory of the experience after it concludes:

```javascript
interface PostExperienceMoment {
  type: string;                  // Type of follow-up
  timing: string;                // When it's delivered
  content: string;               // What's delivered
  personalization: {
    isPersonalized: boolean;     // Whether it's customized
    personalizationMethod: string; // How it's personalized
  };
  delivery: {
    method: string;              // Delivery method
    packaging: string;           // How it's packaged
  };
}
```

#### Key Post-Experience Examples

1. **"Time-Delayed Surprises"**
   - Digital delivery one week post-experience:
     - Model's handwritten note (digitally reproduced)
     - Behind-the-scenes photo from the event

2. **"Yearbook Feature"**
   - Annual "Erosss Alumni" digital booklet
   - Personalized section featuring the winner's experience

## Technical Implementation in MCP

### Model Layer

The Signature Moment concept is implemented in our models:

```javascript
// In models/SignatureMomentModel.js
export class SignatureMomentModel {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.phase = data.phase;
    this.description = data.description;
    this.implementationGuide = data.implementationGuide;
    this.requiredResources = data.requiredResources || [];
    this.estimatedCost = data.estimatedCost;
    this.customizationOptions = data.customizationOptions || [];
    this.technicalRequirements = data.technicalRequirements || [];
    this.compatibleExperienceTypes = data.compatibleExperienceTypes || [];
    this.examples = data.examples || [];
  }
  
  // Methods to validate, apply to experience, calculate costs, etc.
}
```

The moments are associated with experiences:

```javascript
// In models/ExperienceModel.js
class ExperienceModel {
  // Other properties...
  
  signatureMoments = {
    preEvent: [],
    during: [],
    postEvent: []
  };
  
  addSignatureMoment(moment) {
    if (!['preEvent', 'during', 'postEvent'].includes(moment.phase)) {
      throw new Error('Invalid moment phase');
    }
    
    this.signatureMoments[moment.phase].push(moment);
  }
  
  // Methods to manage moments...
}
```

### Component Layer

UI components for displaying and managing signature moments:

```javascript
// Simplified component examples

// MomentTimeline.vue - Shows the timeline of moments
// MomentEditor.vue - Interface for creating and editing moments
// MomentPreview.vue - Displays how a moment will appear to winners
```

### Presenter Layer

Presenters coordinate the interaction between models and components:

```javascript
// In presenters/SignatureMomentsPresenter.js
export function useSignatureMoments(experienceId) {
  const moments = ref({
    preEvent: [],
    during: [],
    postEvent: []
  });
  
  // Load moments for an experience
  async function loadMoments() {
    // Implementation
  }
  
  // Add a new moment
  async function addMoment(moment) {
    // Implementation
  }
  
  // Edit an existing moment
  async function editMoment(momentId, updatedData) {
    // Implementation
  }
  
  return {
    moments,
    loadMoments,
    addMoment,
    editMoment
    // ...other actions
  };
}
```

## Technical Requirements

Signature moments often require specific technical implementations:

| Moment Type           | Technical Requirements                        | Implementation Path                         |
|-----------------------|-----------------------------------------------|--------------------------------------------|
| Tease Kit Tracking    | Shipment tracking API, notification system    | Integration with shipping providers         |
| Countdown Elements    | Time-based content revelation, secure storage | Time-triggered serverless functions        |
| Kinetic Table         | IoT vibration module, wireless triggering     | Hardware + mobile app control              |
| Smart Lighting        | Voice analysis, light control system          | Audio API + smart home integration         |
| Digital Memorabilia   | Secure storage, access control, expiry system | Cloud storage with timed access tokens     |

## Moment Design Process

1. **Conceptualization**:
   - Identify the emotion to evoke
   - Choose appropriate timing (pre/during/post)
   - Define the core surprise element

2. **Design**:
   - Detail the specific implementation
   - Define required resources and technologies
   - Create documentation for execution

3. **Testing**:
   - Prototype the moment
   - Test with focus groups
   - Refine based on feedback

4. **Implementation**:
   - Build technical components
   - Train staff/models on execution
   - Create contingency plans

5. **Evaluation**:
   - Gather winner feedback
   - Assess memorability impact
   - Iterate for improvement

## Integration with Experience Types

Different experience types have recommended signature moments:

### Event-Based Experiences
- Pre: VIP access pass with hidden features
- During: Secret room or area accessible only to winner
- Post: Personalized event program with model notes

### Activity-Based Experiences
- Pre: Equipment or clothing item for the activity
- During: Unexpected skill demonstration by model
- Post: Activity results or creation sent to winner

### Dining & Conversation
- Pre: Menu with personalized dishes named after winner
- During: Chef's table visit or kitchen access
- Post: Recipe book with model's favorites

### Wellness Retreats
- Pre: Personalized wellness assessment
- During: Surprise upgrade to premium service
- Post: Custom wellness plan for continued practice

## Future Development

1. **Moment Marketplace**: Library of pre-designed moments for experiences
2. **Personalization Engine**: AI-driven customization of moments
3. **Outcome Measurement**: Quantifying the impact of different moment types
4. **Model Training**: Specialized training for moment delivery
5. **Technical Infrastructure**: Purpose-built systems for moment management 