/**
 * Icon/Asset Management System
 * 
 * This file centralizes all icon and asset definitions used throughout the app.
 * To replace with your own assets/icons:
 * 1. Replace the emoji strings with require() paths to image files
 * 2. Or replace with SvgIcon components
 * 3. No other files need to be modified
 * 
 * Example replacement:
 * OLD: HOME: '🏠',
 * NEW: HOME: require('@/assets/icons/home.svg'),
 */

export const Icons = {
  // Navigation & UI
  HOME: '🏠',           // TODO: Replace with home icon asset
  BACK: '←',            // TODO: Replace with back arrow asset
  MENU: '☰',            // TODO: Replace with menu icon asset
  
  // Input & Forms
  CAMERA: '📷',         // TODO: Replace with camera icon asset
  EMAIL: '✉️',          // TODO: Replace with email/envelope icon asset
  LOCK: '🔒',           // TODO: Replace with lock icon asset
  EYE: '👁️',           // TODO: Replace with eye/visibility icon asset
  EYE_HIDDEN: '👁️‍🗨️',  // TODO: Replace with eye-hidden icon asset
  
  // Users & Roles
  USER: '👤',           // TODO: Replace with user/person icon asset
  PROFESSIONAL: '💼',  // TODO: Replace with briefcase icon asset
  
  // Status & Indicators
  SUCCESS: '✅',        // TODO: Replace with checkmark icon asset
  PENDING: '⏳',        // TODO: Replace with pending/clock icon asset
  PROCESSING: '⚙️',    // TODO: Replace with gear/processing icon asset
  WARNING: '⚠️',        // TODO: Replace with warning icon asset
  ERROR: '❌',          // TODO: Replace with error/X icon asset
  APPLICATION: '📋',   // TODO: Replace with clipboard/application icon asset
  NOTIFICATION: '🔔',  // TODO: Replace with notification bell icon asset
  
  // Theme
  SUN: '☀️',            // TODO: Replace with sun icon asset
  MOON: '🌙',           // TODO: Replace with moon icon asset
  
  // Social
  GOOGLE: '🔵',         // TODO: Use actual Google icon or image
  APPLE: '🍎',          // TODO: Use actual Apple icon or image
  
  // Documents & Files
  DOCUMENT: '📄',       // TODO: Replace with document icon asset
  UPLOAD: '📤',         // TODO: Replace with upload icon asset
  DOWNLOAD: '📥',       // TODO: Replace with download icon asset
  
  // Service Categories (for provider registration)
  ELECTRICIAN: '⚡',    // TODO: Replace with electrician icon asset
  PLUMBER: '🔧',        // TODO: Replace with wrench/plumber icon asset
  MECHANIC: '🔨',       // TODO: Replace with hammer icon asset
  CLEANER: '🧹',        // TODO: Replace with broom/cleaning icon asset
  TUTOR: '🎓',          // TODO: Replace with graduation cap icon asset
  HANDYMAN: '🛠️',       // TODO: Replace with toolbox icon asset
  REPAIR_TECH: '⚙️',    // TODO: Replace with settings/repair icon asset
  
  // Document Types
  EDIT: '✏️',           // TODO: Replace with edit/pencil icon asset
  TRASH: '🗑️',          // TODO: Replace with delete/trash icon asset
  
  // Notifications & Alerts
  BELL: '🔔',           // TODO: Replace with bell icon asset
  MAIL: '📬',           // TODO: Replace with mailbox icon asset
  
  // Generic
  ARROW_RIGHT: '→',     // TODO: Replace with right arrow icon asset
  ARROW_LEFT: '←',      // TODO: Replace with left arrow icon asset
  CLOSE: '✕',           // TODO: Replace with close/X icon asset
} as const;

/**
 * Icon size presets
 * Use these for consistent icon sizing across the app
 */
export const IconSizes = {
  SMALL: 16,    // For badges, small indicators
  MEDIUM: 24,   // For standard icons
  LARGE: 32,    // For feature icons, avatars
  XLARGE: 48,   // For hero sections, large displays
  XXLARGE: 80,  // For splash screens, large illustrations
} as const;

/**
 * Asset placeholder mapping
 * For tracking where real assets should go
 * 
 * Structure:
 * - screen/component name
 * - location in component
 * - current placeholder
 * - intended purpose
 */
export const AssetPlaceholders = {
  // Logo & Branding
  APP_LOGO: {
    current: '🏠',
    description: 'App logo - Home/House icon',
    replacement: 'assets/images/logo.png or SVG component',
  },
  
  // Authentication Screens
  LOGIN_SOCIAL_GOOGLE: {
    current: '🔵', // using Google icon
    description: 'Google login button icon',
    replacement: 'assets/images/google-icon.png',
    files: ['src/app/auth/login.tsx'],
  },
  LOGIN_SOCIAL_APPLE: {
    current: '🍎', // using Apple icon
    description: 'Apple login button icon',
    replacement: 'assets/images/apple-icon.png',
    files: ['src/app/auth/login.tsx'],
  },
  
  // Account Created Screen
  ACCOUNT_CREATED_SUCCESS: {
    current: '✅',
    description: 'Success checkmark icon',
    replacement: 'assets/images/success-checkmark.svg or PNG',
    files: ['src/app/auth/account-created.tsx'],
  },
  
  // Application Submitted Screen
  APPLICATION_CLIPBOARD: {
    current: '📋',
    description: 'Application/clipboard icon',
    replacement: 'assets/images/application-clipboard.svg or PNG',
    files: ['src/app/auth/application-submitted.tsx'],
  },
  APPLICATION_CHECKMARK: {
    current: '✅',
    description: 'Application submitted checkmark',
    replacement: 'assets/images/checkmark-teal.svg or PNG',
    files: ['src/app/auth/application-submitted.tsx'],
  },
  DOCUMENT_VERIFICATION_ICON: {
    current: '🏛️',
    description: 'Document verification icon',
    replacement: 'assets/images/document-verification.svg or PNG',
    files: ['src/app/auth/application-submitted.tsx'],
  },
  ACCOUNT_LOCK_ICON: {
    current: '🔒',
    description: 'Account lock/pending icon',
    replacement: 'assets/images/lock-pending.svg or PNG',
    files: ['src/app/auth/application-submitted.tsx'],
  },
  
  // Forgot Password Screen
  FORGOT_PASSWORD_ICON: {
    current: '💌',
    description: 'Email/forgot password icon',
    replacement: 'assets/images/email-security.svg or PNG',
    files: ['src/app/auth/forgot-password.tsx'],
  },
} as const;

export type IconKey = keyof typeof Icons;
export type IconSizeKey = keyof typeof IconSizes;
