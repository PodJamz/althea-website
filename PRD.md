# λLTHEλ Website Product Requirements Document (PRD) 

## 🎯 Current Status

### ✅ Completed Features
- Hero Section with Lambda Animation
- Advanced Text Hover Effect with gradient reveal
- Register Interest Form with User/Investor Flow
- Navigation Bar with Core Links
- Light/Dark Mode Implementation with Theme Toggle
- Shimmer Button Effects
- Aurora Background Effects
- Morphing Text Animations
- About Section with Interactive Bento Grid Layout

### 🚧 In Development
- Blog Posts Section (Basic Structure)
- Features Section (Basic Structure)
- Footer Component

## 🎨 Design System

### ✅ Theme Implementation
- Implemented next-themes provider
- Added theme toggle component
- Set up CSS variables for both modes
- Updated components to use theme variables
- Added smooth transitions between modes

### Color Palette
- ✅ Dark Mode: Implemented
- ✅ Light Mode: Implemented
- ✅ Accent: Purple/Violet gradients maintained across themes

## 📱 Page Requirements

### 1. Landing Page (/)
#### ✅ Hero Section
- Large centered λLTHEλ text with interactive hover effects
  - Gradient reveal on hover
  - Stroke animation on load
  - Responsive sizing and positioning
  - Theme-aware stroke colors
- Morphing subtitle text ("HEλLTH" ↔ "MEDICλL SUPERINTELLIGENCE")
- Interactive aurora background effect
- Call-to-action buttons
  - "Register Interest" with shimmer effect
  - "Learn more" with hover effect

#### ✅ Navigation
- Responsive layout
- Theme toggle
- Core navigation links
- Register interest button

#### 🔄 About Section
- Interactive bento grid layout
- Four key sections:
  - Our Vision
  - Our Mission
  - Our Team
  - λLTHEλ Foundation
- Smooth scroll navigation from hero
- Theme-aware styling
- Interactive hover effects
- Responsive design

## 📝 Content

### Vision & Mission
- **Mission Statement**: Every single person on earth should have the best possible technical understanding of their biological state.
- **Vision**: Medical Superintelligence will enable 360-degree evidence-based health decisions for everyone. Your medical history, real data, etc. providing the snapshot of your body matched with the highest ranked research informing triage and diagnosis alongside your doctors.
- **Team Vision**: We are a team of 5 people who are passionate about helping you understand you better.
- **λLTHEλ Foundation**: Model charity (1 1 1) 1% of revenue, 1% of time, 1% of equity goes to the foundation which is used to fund the development of social technology projects.

### Team Members
- 🔄 To be populated with team member details
- Fred Almeida - CEO
- James Spalding - Product
- Julian Heppekausen - Operations   
- Oğuz Genç - Digital Economy
- Michael Batista - Product Marketing


### Foundation Goals
- 🔄 To be expanded with specific objectives and initiatives

### Features Section

- 🔄 Features Section with basic structure

### Priority Features
1. 🧬 AI-Powered Health Intelligence
   - Real-time health metrics visualization
   - Personalized 360-degree evidence based insights and recommendations
   - Integration with wearable devices
   - Hyper personalization and contextual awareness.
   - And Althea will monitor and maintain regular contact with you throughout the day based on your communication style and preferences, through notifications, reminders, and proactive recommendations.

2. 🤖 Intelligent Symptom Analysis
   - Always on Althea consultation
   - Your symptoms description is tailored to your communication style
   - Triage and preliminary diagnosis
   - Lifestyle, Diet, Exercise, Sleep, Stress, etc. recommendations

3. 📱 Secure Patient Portal
   - Encrypted personal health records
   - Document upload and management
   - Granular privacy controls
   - Your medical history, real data, etc. providing the snapshot of your body matched with the highest ranked research informing triage and diagnosis alongside your doctors.

4. 👩‍⚕️ Virtual Care Suite
   - Video consultations with Althea
   - Appointments with your doctors and specialists
   - Secure messaging system between you, Althea and your doctors
   - Digital prescription and care plan management

5. 📊 Evidence-Based Insights
   - Research-backed health recommendations
   - Personalized risk assessments
   - Treatment effectiveness tracking

6. 🔄 Health Data Integration
   - EHR (Electronic Health Record) system connectivity
   - Lab results integration
   - Wearable device integration

## 🛠️ Technical Requirements

### Core Technologies
- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ Shadcn/ui Components

### Performance
- ✅ Server-side Rendering
- ✅ Static Site Generation where applicable
- ✅ Image optimization
- ✅ Code splitting
- 🔄 Performance monitoring

### Accessibility
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast compliance
- 🔄 Accessibility testing

### SEO
- 🔄 Meta tags
- 🔄 Sitemap
- 🔄 Robots.txt
- 🔄 Structured data
- 🔄 Analytics integration

### Security
- 🔄 HTTPS/SSL
- 🔄 XSS protection
- 🔄 CSRF protection
- 🔄 Rate limiting
- 🔄 Input validation
- 🔄 Data encryption
- 🔄 Security headers

### Responsive Design
- 🔄 Mobile-Responsive checked
- ✅ Mobile-first approach
- ✅ Fluid typography
- ✅ Adaptive layouts
- ✅ Touch-friendly interactions
- 🔄 Cross-browser testing

### Deployment
- ✅ Vercel hosting
- ✅ Continuous Integration
- ✅ Automated builds
- 🔄 Environment configuration
- 🔄 Monitoring & logging
- 🔄 Backup strategy
- 🔄 Disaster recovery

## 🗺️ Sitemap & User Journey

### Big-Picture User Journey

#### 1. Awareness / Discovery
- Core Promise: "Everyone on Earth deserves to know how healthy they are"
- Initial user intrigue through word-of-mouth success stories
- Focus on data-driven health insights and personalization

#### 2. Landing Experience
- Positive Emotional Hook: "Take charge of your well-being"
- Key CTAs: "Start Your Health Journey" / "Discover Your Personalized Insights"
- Clear Value Proposition emphasizing universal health understanding

#### 3. Onboarding & Story Capture
- Personalized health goals and concerns collection
- Supportive, empathetic response system
- Transparent data permissions and security

#### 4. Dashboard & Profile Setup
- Health category selection and personalization
- Secure insurance document upload
- Tailored recommendations based on user interests

#### 5. AI Interaction & Recommendations
- Conversational AI health guidance
- Cost transparency and coverage analysis
- Evidence-based treatment options

#### 6. Proactive Engagement
- Smart health check-in notifications
- Lifestyle and habit tracking
- Future health forecasting

#### 7. Advanced Features
- Insurance plan comparison
- Healthcare provider reviews
- Optional community support system

#### 8. Long-Term Relationship
- Regular health assessments
- Progress tracking and celebrations
- Data-driven insights and guidance

### Detailed Site Structure

```
HOME
├── ABOUT US
│   ├── Our Story / Mission & Vision
│   │   └── Core Message: "Everyone deserves to know how healthy they are"
│   └── Careers (Optional)
│
├── FEATURES
│   ├── AI Recommendations
│   │   ├── Personalized Alerts
│   │   ├── Insurance Analysis
│   │   └── Healthcare Matching
│   └── Pricing & Plans
│
├── RESOURCES
│   ├── Blog / Insights
│   ├── Case Studies
│   ├── FAQ
│   └── Legal / Privacy
│
├── USER DASHBOARD
│   ├── Profile & Data Control
│   │   ├── Health Timeline
│   │   └── Insurance Management
│   ├── AI Chat Interface
│   ├── Notifications Center
│   └── Community Hub
│
└── CONTACT / SUPPORT
```

### Key Page Content Focus

#### Home Page
- Hero: "Everyone Deserves to Understand Their Health"
- Value Proposition: Smart healthcare decisions through AI
- Primary CTA: "Start Your Health Journey"

#### About / Mission
- Vision Statement: Universal health understanding
- Team Background: Patient and AI specialist founding
- Core Values: Data-driven, ethical healthcare

#### Features / AI
- Data-Driven Health Guidance
- Insurance Coverage Analysis
- Preventive Care Planning
- Evidence-Based Recommendations

#### Dashboard Experience
- Comprehensive Health Profile
- Secure Document Management
- Interactive AI Health Assistant
- Progress Tracking & Notifications

### Implementation Priority
1. Core Navigation Structure
2. Essential User Flows
3. AI Integration Points
4. Community Features
5. Advanced Analytics


