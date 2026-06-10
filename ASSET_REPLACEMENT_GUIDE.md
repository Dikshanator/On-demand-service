# Asset & Icon Replacement Guide

This guide explains how to replace all placeholder emotes and assets throughout the hamroSewa app without refactoring code.

## Overview

The app uses a **centralized icon system** that makes asset replacement seamless:
- All icon definitions are in `frontend/src/constants/icons.ts`
- A reusable `Icon` component renders icons in `frontend/src/components/ui/icon.tsx`
- Every placeholder has a TODO comment indicating where it should be replaced

## Quick Start: Replacing an Asset

### Method 1: Direct Emoji → Image Path (Recommended for PNG/JPG)

1. Open `frontend/src/constants/icons.ts`
2. Find the icon you want to replace (e.g., `HOME: '🏠'`)
3. Replace with a require path:

```typescript
// Before
HOME: '🏠',  // TODO: Replace with home icon asset

// After
HOME: require('@/assets/icons/home.png'),
```

### Method 2: Emoji → SVG Component

```typescript
// Import at top of icons.ts
import HomeIcon from '@/assets/icons/home.svg';

// In Icons object
HOME: HomeIcon,
```

### Method 3: Custom Implementation

For more control, update the `Icon` component in `frontend/src/components/ui/icon.tsx`:

```typescript
// In Icon component's render logic
case 'HOME':
  return <YourCustomHomeIcon size={sizeValue} color={color} />;
```

## Current Asset Structure

All placeholders use emotes and have clear TODO comments. Here's the complete mapping:

### Core Navigation & UI Icons
- `HOME` 🏠 - App logo and navigation
- `BACK` ← - Back button
- `MENU` ☰ - Menu/hamburger

### Input & Form Icons
- `CAMERA` 📷 - Photo/document upload
- `EMAIL` ✉️ - Email input, password reset
- `LOCK` 🔒 - Password protection, security
- `EYE` 👁️ - Show password
- `EYE_HIDDEN` 👁️‍🗨️ - Hide password

### User & Role Icons
- `USER` 👤 - User profile, selfie
- `PROFESSIONAL` 💼 - Professional/provider role

### Status & Indicators
- `SUCCESS` ✅ - Success checkmark
- `PENDING` ⏳ - Pending status
- `PROCESSING` ⚙️ - In progress
- `WARNING` ⚠️ - Warning alert
- `ERROR` ❌ - Error state
- `APPLICATION` 📋 - Application/clipboard
- `NOTIFICATION` 🔔 - Notification bell

### Theme Icons
- `SUN` ☀️ - Light theme toggle
- `MOON` 🌙 - Dark theme toggle

### Service Categories
- `ELECTRICIAN` ⚡ - Electrical services
- `PLUMBER` 🔧 - Plumbing services
- `MECHANIC` 🔨 - Mechanical services
- `CLEANER` 🧹 - Cleaning services
- `TUTOR` 🎓 - Tutoring services
- `HANDYMAN` 🛠️ - Handyman services
- `REPAIR_TECH` ⚙️ - Technical repair

### Document & File Icons
- `DOCUMENT` 📄 - Document/file
- `UPLOAD` 📤 - Upload action
- `DOWNLOAD` 📥 - Download action
- `EDIT` ✏️ - Edit action
- `TRASH` 🗑️ - Delete action

### Social & Authentication
- `GOOGLE` 🔵 - Google login
- `APPLE` 🍎 - Apple login
- `MAIL` 📬 - Mail notification

## Files Using Icons

### Authentication Screens
- `frontend/src/app/auth/login.tsx` - Logo, email, lock, eye icons
- `frontend/src/app/auth/role-selection.tsx` - Logo, user, professional icons, theme toggle
- `frontend/src/app/auth/account-created.tsx` - Email icon
- `frontend/src/app/auth/forgot-password.tsx` - Email icon, success checkmark
- `frontend/src/app/auth/application-submitted.tsx` - Application, document, lock, home, notification icons

### Registration Screens
- `frontend/src/app/auth/register/client/step2.tsx` - Camera icon
- `frontend/src/app/auth/register/provider/step2.tsx` - Service category icons
- `frontend/src/app/auth/register/provider/step3.tsx` - Lock, document, camera, user icons

### UI Components
- `frontend/src/components/ui/input.tsx` - Eye visibility icons
- `frontend/src/components/ui/icon.tsx` - Main icon renderer

## Adding New Icons

To add a new icon to the system:

1. Open `frontend/src/constants/icons.ts`
2. Add to the `Icons` object:

```typescript
NEW_ICON: '🎯',  // TODO: Replace with new-icon asset
```

3. Update TypeScript type (automatically includes new icon):

```typescript
export type IconKey = keyof typeof Icons;
```

4. Use in your component:

```typescript
import { Icon } from '@/components/ui/icon';

<Icon name="NEW_ICON" size="MEDIUM" />
```

## Icon Component Usage

The `Icon` component handles rendering and is already used throughout:

```typescript
// Basic usage
<Icon name="HOME" size="MEDIUM" />

// With color
<Icon name="HOME" size="MEDIUM" style={{ color: 'red' }} />

// With className
<Icon name="HOME" size="MEDIUM" className="mr-3" />

// Size options: SMALL, MEDIUM, LARGE, XLARGE, XXLARGE
```

## Replacement Priority

Replace assets in this order for best user experience:

1. **High Priority** (Most visible)
   - App logo (HOME) - frontend/src/app/auth/login.tsx
   - Social login icons (GOOGLE, APPLE) - frontend/src/app/auth/login.tsx
   - Service category icons - frontend/src/app/auth/register/provider/step2.tsx
   - Status indicators - frontend/src/app/auth/application-submitted.tsx

2. **Medium Priority**
   - Form input icons (EMAIL, LOCK, EYE) - frontend/src/app/auth/login.tsx
   - Document upload icons (CAMERA) - registration screens
   - Theme toggle icons (SUN, MOON) - frontend/src/app/auth/role-selection.tsx

3. **Low Priority** (Background usage)
   - Status badges (SUCCESS, PENDING, ERROR)
   - Navigation icons (BACK, MENU)
   - Generic icons (DOCUMENT, TRASH, EDIT)

## Size Guide

```typescript
// Icon size constants in pixels
SMALL: 16      // Badges, small indicators
MEDIUM: 24     // Standard icons in inputs and buttons
LARGE: 32      // Feature icons, role badges
XLARGE: 48     // Hero section icons, avatars
XXLARGE: 80    // Large displays, splash screens
```

## Asset Format Recommendations

- **PNG**: Best for photos, uploaded documents, profile pictures
- **SVG**: Best for icons, logos, illustrations (scalable, smaller file size)
- **WebP**: Best for performance-critical images

Store all assets in `frontend/assets/icons/` or appropriate subdirectory.

## No Code Refactoring Needed

Once you replace an icon in `frontend/src/constants/icons.ts`, it automatically updates everywhere:

```
icons.ts (single change) → Icon component → All screens using <Icon />
```

No need to modify individual screen files or components.

## Troubleshooting

### Icon not showing after replacement?
- Ensure the asset path is correct
- Clear app cache: `npm run clear-cache`
- Verify asset file exists in project

### Icon color not applying?
- Some image formats (PNG) need SVG for color override
- Use SVG or add color styling in Icon component
- Check theme colors in hooks/use-theme.ts

### Size too small/large?
- Adjust in `constants/icons.ts` → `IconSizes` object
- Or pass custom size to Icon component

## Questions?

Refer to:
- `frontend/src/constants/icons.ts` - Icon definitions
- `frontend/src/components/ui/icon.tsx` - Icon rendering
- TODO comments in each screen file for specific usage
