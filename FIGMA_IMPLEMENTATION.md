# Figma to React Native Implementation - HamroSewa

## Overview
This document details the complete conversion of the HamroSewa Figma designs into a fully functional React Native/Expo application with support for both light and dark themes.

## Implemented Screens

### 1. **Role Selection Screen**
**Path:** `/auth/role-selection`
- Welcome landing page with HamroSewa branding
- Two role options: "I need a Service" (Client) and "I am a Professional" (Service Provider)
- Theme toggle button in header
- Continue button that becomes enabled after role selection
- Light & Dark theme variants implemented

### 2. **Login Screen**
**Path:** `/auth/login`
- "Welcome Back" heading with branding
- Email/Phone number input field
- Password input field with show/hide toggle
- Forgot Password link
- Sign In button
- Social login options (Google & Apple)
- Create Account link for new users
- Light & Dark theme variants

### 3. **Client Registration Flow (2 Steps)**

#### Step 1: Personal Information
**Path:** `/auth/register/client/step1`
- Progress indicator (2/2 steps)
- Full Name input
- Email Address input with verification notice
- Address input (City/Area)
- Password input with eye toggle
- Confirm Password input with eye toggle
- Terms & Privacy Policy agreement checkbox
- Next button (disabled until all fields valid & terms agreed)
- Sign In link for existing users

#### Step 2: Profile Setup
**Path:** `/auth/register/client/step2`
- Progress indicator (1/2 complete)
- Profile photo upload area (dashed border)
- Optional but recommended notice
- Terms & Privacy Policy agreement checkbox
- Create Account button

### 4. **Service Provider Registration Flow (4 Steps)**

#### Step 1: Personal Information
**Path:** `/auth/register/provider/step1`
- Progress indicator (1/4 steps)
- Same fields as client registration
- Personal information form (Full Name, Email, Address, Password, Confirm Password)

#### Step 2: Profile & Service Category
**Path:** `/auth/register/provider/step2`
- Progress indicator (2/4 steps)
- Profile photo upload area
- Service category selection grid with 7 options:
  - ⚡ Electrician
  - 🔧 Plumber
  - 🧰 Mechanic
  - 🧹 Cleaner
  - 📚 Tutor
  - 🔨 Handyman
  - 🔌 Repair Tech
- Single selection (only one category per registration)
- Checkmark indicator on selected service

#### Step 3: Identity Verification
**Path:** `/auth/register/provider/step3`
- Progress indicator (3/4 steps)
- Document type selection (Citizenship, Passport, Driving License)
- Document number input
- Three photo upload areas:
  - Document Front Photo (Required)
  - Document Back Photo (Required)
  - Selfie with ID (Required)
- Security notice about document encryption
- Next Step button

#### Step 4: Professional Documents
**Path:** `/auth/register/provider/step4`
- Progress indicator (4/4 steps)
- Training Certificate upload (Required)
- Introduction Video upload (Optional - 30-60 seconds, max 50MB)
- Terms & Privacy Policy agreement checkbox
- Submit Application button
- 24-48 hour review notice

### 5. **Dashboard Screen**
**Path:** `/dashboard`
- Placeholder screen showing successful registration
- Displays user role (Client or Service Provider)
- Logout & Start Over button
- Responsive styling with theme colors

## Theme System

### Color Palette

#### Light Theme
- Background: `#F5F5F7`
- Text: `#000000`
- Primary: `#003D99` (Navy Blue)
- Accent: `#00A088` (Teal)
- Borders: `#D0D0D5`

#### Dark Theme
- Background: `#1A1A2E` (Dark Navy)
- Text: `#FFFFFF`
- Primary: `#7C3AED` (Purple/Lavender)
- Accent: `#06B6D4` (Cyan)
- Borders: `#3E3E5C`

## Components

### Reusable UI Components

#### 1. **Input Component** (`components/ui/input.tsx`)
- Icon support
- Placeholder text with custom color
- Secure text entry with eye toggle
- Focus state styling with primary color border
- Support for different keyboard types

#### 2. **Button Component** (`components/ui/button.tsx`)
- Three variants: `primary`, `secondary`, `outline`
- Disabled state with reduced opacity
- Loading state with custom text
- Consistent spacing and rounded corners

#### 3. **Progress Indicator** (`components/ui/progress-indicator.tsx`)
- Circular step indicators
- Completed steps show checkmark
- Active step highlighted in primary color
- Connecting lines between steps
- Completed steps use accent color

### Context & State Management

#### Auth Context (`context/AuthContext.tsx`)
Manages:
- User role (client | provider)
- Auth step tracking
- Registration data across multi-step flows
- Reset functionality

State properties:
```typescript
- userRole: 'client' | 'provider' | null
- authStep: 'initial' | 'role-selection' | 'login' | 'register' | 'authenticated'
- registrationData: {
    fullName, email, address, password, confirmPassword,
    profilePhoto, serviceCategory, documentType, documentNumber,
    documentFrontPhoto, documentBackPhoto, selfieWithId,
    trainingCertificate, introVideo, termsAgreed
  }
```

## Navigation Flow

```
/ (Home - Redirect based on auth state)
├── /auth/role-selection (Initial landing)
│   ├── Select Client → /auth/login
│   └── Select Provider → /auth/login
├── /auth/login
│   ├── Sign In → /dashboard
│   └── Create Account → /auth/register/{role}/step1
└── /auth/register
    ├── /client/step1 → /client/step2
    ├── /client/step2 → /dashboard
    ├── /provider/step1 → /provider/step2
    ├── /provider/step2 → /provider/step3
    ├── /provider/step3 → /provider/step4
    └── /provider/step4 → /dashboard
```

## Key Features Implemented

1. **Dual Theme Support**
   - System preference detection
   - Custom color palette per theme
   - Consistent styling across all screens

2. **Multi-Step Registration**
   - Role-based registration flows
   - Client: 2-step flow
   - Provider: 4-step flow
   - Progress tracking with visual indicators

3. **Form Validation**
   - Email validation
   - Password confirmation matching
   - Mandatory field checks
   - Terms acceptance required

4. **User Experience**
   - Smooth transitions between screens
   - Back button on all registration screens
   - Clear progress indicators
   - Loading states on submission buttons
   - Helpful hints and descriptions

5. **Accessibility**
   - Clear label hierarchies
   - Touch-friendly button sizes
   - Descriptive placeholder text
   - Proper color contrast

## Running the Application

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Choose platform to run (web, iOS, Android)
```

## File Structure

```
frontend/src/
├── app/
│   ├── _layout.tsx (Root layout with AuthProvider)
│   ├── index.tsx (Redirect handler)
│   ├── dashboard.tsx (Post-auth dashboard)
│   └── auth/
│       ├── role-selection.tsx
│       ├── login.tsx
│       └── register/
│           ├── client/
│           │   ├── step1.tsx
│           │   └── step2.tsx
│           └── provider/
│               ├── step1.tsx
│               ├── step2.tsx
│               ├── step3.tsx
│               └── step4.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── progress-indicator.tsx
├── context/
│   └── AuthContext.tsx
├── hooks/
│   ├── use-theme.ts
│   └── use-color-scheme.ts
└── constants/
    └── theme.ts
```

## Testing the Flows

### Client Registration Flow
1. Start app → Role Selection
2. Select "I need a Service"
3. Proceed through Step 1 (Personal Info)
4. Complete Step 2 (Profile Setup)
5. View Dashboard

### Provider Registration Flow
1. Start app → Role Selection
2. Select "I am a Professional"
3. Complete Step 1 (Personal Info)
4. Complete Step 2 (Service Category)
5. Complete Step 3 (Identity Verification)
6. Complete Step 4 (Professional Documents)
7. View Dashboard

### Theme Toggle
- Both light and dark themes apply consistently across all screens
- Colors update in real-time based on system preference

## Future Enhancements

1. **API Integration**
   - Connect to backend for user registration
   - Implement authentication with tokens
   - File upload functionality

2. **Form Persistence**
   - Save registration data to local storage
   - Draft functionality for incomplete registrations
   - Resume incomplete flows

3. **Image Handling**
   - Camera integration for photo uploads
   - Image cropping functionality
   - Image compression for uploads

4. **Validation Improvements**
   - Real-time email verification
   - Phone number formatting
   - Document number validation by type

5. **Additional Features**
   - Password strength indicator
   - Email confirmation flow
   - Two-factor authentication
   - Profile photo preview
