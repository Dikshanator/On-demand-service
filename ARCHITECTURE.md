# HamroSewa React Native - Application Architecture

## Navigation Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        App Root (_layout.tsx)                     │
│                      AuthProvider + ThemeProvider                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │    Home Page (index.tsx)      │
          │  Redirect based on authStep   │
          └──────────────┬───────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼                                 ▼
   ┌──────────────────┐          ┌─────────────────┐
   │  Role Selection  │          │   Dashboard     │
   │  /auth/role-     │          │  /dashboard     │
   │  selection       │          │ (if authenticated)
   └────────┬─────────┘          └─────────────────┘
            │
    ┌───────┴──────────┐
    │                  │
    ▼                  ▼
┌─────────────┐   ┌─────────────────┐
│   Login     │   │ Client Role     │
│ /auth/login │   │ Provider Role   │
└──────┬──────┘   └────────┬────────┘
       │                   │
       └───────┬───────────┘
               │
        ┌──────┴───────────────────────────────────┐
        │                                          │
        ▼                                          ▼
  ┌──────────────┐                    ┌──────────────────────┐
  │ Client Flow  │                    │  Provider Flow       │
  │ (2 Steps)    │                    │ (4 Steps)            │
  └──────┬───────┘                    └──────────┬───────────┘
         │                                       │
    ┌────┴────┐                          ┌──────┴────────┐
    │          │                         │               │
    ▼          ▼                         ▼               ▼
┌────────┐ ┌────────┐                ┌────────────┐ ┌────────────┐
│Step 1: │ │Step 2: │                │ Step 1:    │ │ Step 2:    │
│Personal│ │Profile │                │ Personal   │ │ Service    │
│Info    │ │Setup   │                │ Info       │ │ Category   │
└────┬───┘ └───┬────┘                └────┬───────┘ └────┬───────┘
     │         │                          │             │
     └────┬────┘                          └────┬────────┘
          │                                   │
          ▼                                   ▼
    ┌──────────┐                      ┌────────────────┐
    │Dashboard │                      │ Step 3:        │
    └──────────┘                      │ Identity       │
                                      │ Verification   │
                                      └────┬───────────┘
                                           │
                                           ▼
                                      ┌────────────────┐
                                      │ Step 4:        │
                                      │ Professional   │
                                      │ Documents      │
                                      └────┬───────────┘
                                           │
                                           ▼
                                      ┌──────────┐
                                      │Dashboard │
                                      └──────────┘
```

## State Management Architecture

```
┌────────────────────────────────────────────────────┐
│             AuthContext (Global State)               │
├────────────────────────────────────────────────────┤
│                                                    │
│  State:                                            │
│  ├── userRole: 'client' | 'provider' | null       │
│  ├── authStep: 'initial' | 'role-selection' |    │
│  │             'login' | 'register' | 'auth'      │
│  └── registrationData: {                           │
│      ├── fullName, email, address                 │
│      ├── password, confirmPassword                │
│      ├── profilePhoto, serviceCategory            │
│      ├── documentType, documentNumber             │
│      ├── documentFrontPhoto, documentBackPhoto    │
│      ├── selfieWithId                             │
│      ├── trainingCertificate, introVideo          │
│      └── termsAgreed                              │
│  }                                                 │
│                                                    │
│  Actions:                                          │
│  ├── setUserRole(role)                            │
│  ├── setAuthStep(step)                            │
│  ├── updateRegistrationData(data)                 │
│  └── resetAuth()                                  │
│                                                    │
└────────────────────────────────────────────────────┘
        │                                │
        └────────────┬──────────────────┘
                     │
            ┌────────┴────────┐
            │                 │
            ▼                 ▼
    All Components      Theme Hooks
    Access via         (useTheme,
    useAuth()          useColorScheme)
```

## Component Hierarchy

```
App (_layout.tsx)
├── AuthProvider
│   └── ThemeProvider
│       ├── AnimatedSplashOverlay
│       └── Stack Navigator
│           ├── Home (index.tsx)
│           │   └── Redirects based on authStep
│           │
│           ├── Auth Routes
│           │   ├── Role Selection
│           │   │   ├── Button (primary, navigation)
│           │   │   └── Theme Toggle
│           │   │
│           │   ├── Login
│           │   │   ├── Input (email, password)
│           │   │   ├── Button (sign in, social)
│           │   │   └── Link (forgot password)
│           │   │
│           │   └── Registration Routes
│           │       ├── Client
│           │       │   ├── Step 1: Personal Info
│           │       │   │   ├── Input (4x text fields)
│           │       │   │   ├── Checkbox (terms)
│           │       │   │   ├── ProgressIndicator
│           │       │   │   └── Button (next)
│           │       │   │
│           │       │   └── Step 2: Profile Setup
│           │       │       ├── Photo Upload Area
│           │       │       ├── Checkbox (terms)
│           │       │       ├── ProgressIndicator
│           │       │       └── Button (create)
│           │       │
│           │       └── Provider
│           │           ├── Step 1: Personal Info
│           │           │   ├── Input (5x fields)
│           │           │   ├── ProgressIndicator
│           │           │   └── Button (next)
│           │           │
│           │           ├── Step 2: Service Category
│           │           │   ├── Photo Upload
│           │           │   ├── Service Grid (7 items)
│           │           │   ├── ProgressIndicator
│           │           │   └── Button (next)
│           │           │
│           │           ├── Step 3: Identity Verify
│           │           │   ├── Document Type Buttons
│           │           │   ├── Input (doc number)
│           │           │   ├── Photo Uploads (3x)
│           │           │   ├── ProgressIndicator
│           │           │   └── Button (next)
│           │           │
│           │           └── Step 4: Documents
│           │               ├── Certificate Upload
│           │               ├── Video Upload
│           │               ├── Checkbox (terms)
│           │               ├── ProgressIndicator
│           │               └── Button (submit)
│           │
│           └── Dashboard (authenticated)
│               ├── Success Message
│               ├── Role Display
│               └── Button (logout)
```

## Theme System Architecture

```
┌─────────────────────────────────────────────────────┐
│         Theme System (constants/theme.ts)             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Colors Object:                                     │
│  ├── light: {                                       │
│  │   ├── text: '#000000'                            │
│  │   ├── background: '#F5F5F7'                      │
│  │   ├── primary: '#003D99' (Navy Blue)             │
│  │   ├── accent: '#00A088' (Teal)                   │
│  │   ├── border: '#D0D0D5'                          │
│  │   └── ... (10 more properties)                   │
│  │                                                  │
│  └── dark: {                                        │
│      ├── text: '#FFFFFF'                            │
│      ├── background: '#1A1A2E'                      │
│      ├── primary: '#7C3AED' (Purple)                │
│      ├── accent: '#06B6D4' (Cyan)                   │
│      ├── border: '#3E3E5C'                          │
│      └── ... (10 more properties)                   │
│                                                     │
│  Fonts & Spacing:                                   │
│  ├── Platform-specific font families                │
│  └── Spacing scale (half, one, two, ... six)        │
│                                                     │
└─────────────────────────────────────────────────────┘
        │
        └─────────────┬──────────────────┐
                      │                  │
            ┌─────────▼──────┐   ┌──────▼─────────┐
            │  useTheme Hook  │   │ useColorScheme │
            │  (hooks/use-    │   │ (hooks/use-    │
            │   theme.ts)     │   │ color-scheme)  │
            └────────┬────────┘   └──────┬─────────┘
                     │                   │
        ┌────────────┴───────────────────┴───┐
        │                                    │
        ▼                                    ▼
    All Components              Returns system preference
    Call useTheme()             'light' | 'dark'
    and get current colors
```

## Data Flow During Registration

```
User Input
    │
    ▼
┌─────────────────────┐
│ Form Component      │
│ (step1.tsx, etc.)   │
└──────────┬──────────┘
           │ onChange event
           ▼
┌──────────────────────────────┐
│ useAuth() Hook               │
│ - gets context               │
└──────────┬───────────────────┘
           │ calls updateRegistrationData()
           ▼
┌──────────────────────────────┐
│ AuthContext State Update      │
│ - registrationData merged     │
│ - all components re-render    │
└──────────┬───────────────────┘
           │ updated data
           ▼
┌──────────────────────────────┐
│ Component Re-renders          │
│ - displays new data           │
│ - validates form              │
│ - enables/disables button     │
└──────────────────────────────┘

On Submit:
    │
    ▼
┌──────────────────────────┐
│ useAuth() - Final Data   │
└──────────┬───────────────┘
           │ updateRegistrationData() + setAuthStep()
           ▼
┌──────────────────────────┐
│ State Updated + Navigate │
└──────────┬───────────────┘
           │ router.push(nextScreen)
           ▼
┌──────────────────────────┐
│ Next Screen Rendered     │
│ - Data preserved in      │
│   registrationData       │
└──────────────────────────┘
```

## Key Principles

### 1. **Separation of Concerns**
- Screens handle UI and user interaction
- Components handle reusable UI elements
- Context handles state management
- Hooks provide utilities and theme access

### 2. **Data Persistence**
- Registration data lives in AuthContext
- Data survives navigation between steps
- Can be reset with resetAuth()

### 3. **Theme Consistency**
- All colors come from useTheme hook
- No hardcoded colors in components
- Automatic theme switching based on system preference

### 4. **Validation Flow**
- Input validation happens in components
- Button disabled state prevents invalid submission
- Error states can be added for user feedback

### 5. **Role-Based Routing**
- userRole determines which registration flow
- Different file structures for client vs provider
- Code reuse through shared components

## Component Reusability

```
Shared Components:
├── Button
│   ├── Used in: All screens
│   ├── Props: onPress, title, variant, disabled, loading
│   └── Variants: primary, secondary, outline
│
├── Input
│   ├── Used in: All form screens
│   ├── Props: placeholder, value, onChangeText, icon, etc.
│   └── Features: icon support, password toggle
│
└── ProgressIndicator
    ├── Used in: All registration steps
    ├── Props: currentStep, totalSteps
    └── Features: completed checkmark, active highlight

Context:
├── AuthContext
│   ├── Used in: All screens needing auth data
│   ├── Hook: useAuth()
│   └── Data: role, step, registration data
```

## Performance Considerations

- **Memoization**: Re-renders only when relevant data changes
- **Context Usage**: Single provider wraps entire app
- **Component Size**: Screens kept focused on their domain
- **Theme Hook**: Optimized to prevent unnecessary re-renders

This architecture ensures scalability, maintainability, and consistent user experience across the application.
