/**
 * Icon/Asset Management System
 * 
 * Uses react-native-vector-icons (MaterialCommunityIcons) for all icons.
 * Icons are rendered with proper colors through the Icon component.
 * 
 * Icon naming convention: Use the MaterialCommunityIcons icon name
 * Reference: https://icons.materialdesignicons.com/
 */

export const Icons = {
  // Navigation & UI
  HOME: 'home',
  BACK: 'arrow-left',
  MENU: 'menu',
  
  // Input & Forms
  CAMERA: 'camera',
  EMAIL: 'email',
  LOCK: 'lock',
  EYE: 'eye',
  EYE_HIDDEN: 'eye-off',
  
  // Users & Roles
  USER: 'account',
  PROFESSIONAL: 'briefcase',
  
  // Status & Indicators
  SUCCESS: 'check-circle',
  PENDING: 'clock',
  PROCESSING: 'cog',
  WARNING: 'alert',
  ERROR: 'close-circle',
  APPLICATION: 'clipboard-list',
  NOTIFICATION: 'bell',
  
  // Theme
  SUN: 'white-balance-sunny',
  MOON: 'moon-waning-crescent',
  
  // Social
  GOOGLE: 'google',
  APPLE: 'apple',
  
  // Documents & Files
  DOCUMENT: 'file-document',
  UPLOAD: 'upload',
  DOWNLOAD: 'download',
  
  // Service Categories
  ELECTRICIAN: 'lightning-bolt',
  PLUMBER: 'pipe',
  MECHANIC: 'wrench',
  CLEANER: 'broom',
  TUTOR: 'school',
  HANDYMAN: 'toolbox',
  REPAIR_TECH: 'tools',
  
  // Document Types
  EDIT: 'pencil',
  TRASH: 'trash-can',
  
  // Notifications & Alerts
  BELL: 'bell',
  MAIL: 'mailbox',
  
  // Generic
  ARROW_RIGHT: 'arrow-right',
  ARROW_LEFT: 'arrow-left',
  CLOSE: 'close',
  
  // Additional icons needed for ratings/reviews
  STAR: 'star',
  STAR_OUTLINE: 'star-outline',
  
  // Location
  LOCATION: 'map-marker',
  
  // Payment & Transactions
  CREDIT_CARD: 'credit-card',
  WALLET: 'wallet',
  CASH: 'cash',
  
  // Additional utility icons
  PHONE: 'phone',
  MESSAGE: 'message',
  SETTINGS: 'cog',
  HELP: 'help-circle',
  CHECKMARK: 'check',
  CHECK_ALL: 'check-all',
  HEART: 'heart',
  HEART_OUTLINE: 'heart-outline',
  SHARE: 'share-variant',
  SEARCH: 'magnify',
  FILTER: 'filter',
  SORT: 'sort',
} as const;

/**
 * Icon size presets
 * Use these for consistent icon sizing across the app
 */
export const IconSizes = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  XLARGE: 48,
  XXLARGE: 80,
} as const;

/**
 * Asset Requirements List
 * Professional assets needed for the application
 */
export const AssetRequirements = {
  // Branding & Logo
  branding: {
    appLogo: {
      name: 'hamroSewa App Logo',
      formats: ['PNG (512x512)', 'SVG'],
      purpose: 'Main app icon and branding',
      locations: ['Splash screen', 'App icon', 'Authentication screens'],
    },
    logoDark: {
      name: 'hamroSewa Logo (Dark Mode)',
      formats: ['PNG (512x512)', 'SVG'],
      purpose: 'Logo variant for dark theme',
      locations: ['All screens in dark mode'],
    },
  },

  // Authentication Screens
  authentication: {
    onboardingHeroImage: {
      name: 'Onboarding Hero Illustration',
      formats: ['PNG', 'SVG'],
      dimensions: 'Full screen width',
      purpose: 'Welcome/splash screen background',
      locations: ['Role Selection Screen'],
    },
    socialIconGoogle: {
      name: 'Google Login Icon',
      formats: ['PNG', 'SVG'],
      dimensions: '48x48 or vector',
      purpose: 'Social login button',
      locations: ['Login screen', 'Registration screens'],
    },
    socialIconApple: {
      name: 'Apple Login Icon',
      formats: ['PNG', 'SVG'],
      dimensions: '48x48 or vector',
      purpose: 'Social login button',
      locations: ['Login screen', 'Registration screens'],
    },
    successCheckmark: {
      name: 'Success Checkmark Animation',
      formats: ['Lottie JSON', 'SVG'],
      purpose: 'Account created confirmation',
      locations: ['Account Created screen'],
    },
    emailVerificationIcon: {
      name: 'Email Verification Icon',
      formats: ['PNG', 'SVG'],
      dimensions: '64x64 or larger',
      purpose: 'Email confirmation visual',
      locations: ['Forgot Password', 'Email verification screens'],
    },
  },

  // Client-Facing Screens
  clientScreens: {
    emptyStateIllustration: {
      name: 'Empty State Illustrations',
      formats: ['SVG'],
      purpose: 'Show when no bookings, payments, reviews exist',
      locations: ['Bookings', 'Payments', 'My Reviews', 'Chat screens'],
    },
    providerDefaultAvatar: {
      name: 'Default Provider Avatar',
      formats: ['PNG'],
      dimensions: '128x128',
      purpose: 'Fallback when provider image unavailable',
      locations: ['All provider listings and profiles'],
    },
    locationPin: {
      name: 'Location Pin Icon (Colored)',
      formats: ['PNG', 'SVG'],
      purpose: 'Map location indicator',
      locations: ['Provider profiles', 'Live tracking', 'Saved addresses'],
    },
    serviceCategory: {
      name: 'Service Category Icons (12 types)',
      formats: ['PNG (64x64)', 'SVG'],
      types: ['Electrical', 'Plumbing', 'AC Repair', 'Cleaning', 'Painting', 'Carpentry', 'Tutoring', 'Fitness', 'Photography', 'IT Support', 'Appliance Repair', 'General Maintenance'],
      locations: ['Browse Services', 'Search results', 'Provider profiles'],
    },
  },

  // Provider-Facing Screens
  providerScreens: {
    jobRequestNotification: {
      name: 'Job Request Notification Icon',
      formats: ['PNG', 'SVG'],
      dimensions: '64x64',
      purpose: 'New job request indicator',
      locations: ['Home dashboard', 'Notifications'],
    },
    performanceRatingBadge: {
      name: 'Rating Star Badge',
      formats: ['PNG', 'SVG'],
      purpose: 'Performance rating display',
      locations: ['Dashboard', 'Profile', 'Earnings'],
    },
    documentVerificationBadge: {
      name: 'Document Verification Badge',
      formats: ['PNG', 'SVG'],
      purpose: 'Verified status indicator',
      locations: ['Provider profile', 'Registration complete screen'],
    },
  },

  // Maps & Location
  maps: {
    mapProvider: {
      name: 'Map Service',
      purpose: 'Live tracking and location services',
      note: 'Integrate Google Maps or equivalent',
      locations: ['Live tracking screen', 'Saved addresses', 'Provider proximity'],
    },
    userLocationPin: {
      name: 'User Location Pin',
      formats: ['PNG', 'SVG'],
      color: 'Primary brand color',
      locations: ['Live tracking map'],
    },
    providerLocationPin: {
      name: 'Provider Location Pin',
      formats: ['PNG', 'SVG'],
      color: 'Accent color',
      locations: ['Live tracking map'],
    },
  },

  // Payment & Transactions
  payments: {
    paymentMethodIcons: {
      name: 'Payment Method Icons',
      formats: ['PNG', 'SVG'],
      methods: ['Credit Card', 'Debit Card', 'Mobile Money', 'Bank Transfer', 'Cash on Delivery'],
      locations: ['Payment Methods screen', 'Checkout'],
    },
    transactionStatusIcons: {
      name: 'Transaction Status Icons',
      formats: ['PNG', 'SVG'],
      statuses: ['Completed (Green)', 'Pending (Orange)', 'Failed (Red)', 'Refunded (Blue)'],
      locations: ['Payment history', 'Transaction details'],
    },
  },

  // Communication
  communication: {
    chatBubbleIcons: {
      name: 'Chat Message Icons',
      formats: ['SVG'],
      purpose: 'Message delivery status indicators',
      statuses: ['Sent', 'Delivered', 'Read', 'Failed'],
      locations: ['Chat screens'],
    },
    callStatusIcons: {
      name: 'Call Status Icons',
      formats: ['SVG'],
      statuses: ['Incoming', 'Outgoing', 'Missed', 'Ended'],
      locations: ['Call screens', 'Chat integration'],
    },
    voiceWaveform: {
      name: 'Voice/Audio Waveform Animation',
      formats: ['Lottie JSON'],
      purpose: 'Active call indicator',
      locations: ['Active call screen', 'Voice message playback'],
    },
  },

  // Reviews & Ratings
  reviews: {
    starRatingGraphics: {
      name: 'Star Rating System',
      formats: ['SVG components'],
      ratings: ['1-star through 5-star variants'],
      colors: ['Filled (Gold)', 'Outlined', 'Half-filled'],
      locations: ['Reviews', 'Ratings display', 'Rating input'],
    },
    reviewDefaultAvatar: {
      name: 'Reviewer Avatar Placeholder',
      formats: ['PNG'],
      dimensions: '48x48',
      purpose: 'Default user avatar in reviews',
      locations: ['My Reviews screen', 'Review displays'],
    },
  },

  // Navigation & UI Components
  ui: {
    tabBarIcons: {
      name: 'Tab Navigation Icons (Filled & Outline)',
      formats: ['PNG', 'SVG'],
      tabs: ['Home', 'Search/Browse', 'Bookings', 'Chat', 'Profile', 'Payments'],
      states: ['Active (Filled)', 'Inactive (Outlined)'],
      locations: ['Bottom tab bar', 'All screens'],
    },
    notificationBadge: {
      name: 'Notification Badge/Counter',
      formats: ['SVG'],
      purpose: 'Unread messages/notifications indicator',
      locations: ['Tab bar', 'Chat list', 'Notification icons'],
    },
    loadingSpinner: {
      name: 'Loading Spinner Animation',
      formats: ['Lottie JSON', 'GIF'],
      purpose: 'Data loading indicator',
      locations: ['All data-loading screens'],
    },
    skeletonLoader: {
      name: 'Skeleton Loader Animations',
      formats: ['CSS/Lottie'],
      purpose: 'Content placeholder during loading',
      locations: ['Search results', 'Provider listings', 'Transaction history'],
    },
  },

  // Status Indicators
  statusIndicators: {
    onlineStatus: {
      name: 'Online/Offline Indicator',
      formats: ['SVG'],
      colors: ['Green (Online)', 'Gray (Offline)'],
      locations: ['Chat messages', 'Provider profiles', 'Contact cards'],
    },
    jobStatusBadges: {
      name: 'Job Status Badges',
      formats: ['SVG'],
      statuses: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
      colors: ['Orange', 'Blue', 'Green', 'Red'],
      locations: ['Job lists', 'Job details', 'Schedule'],
    },
    verificationStatus: {
      name: 'Verification Status Badges',
      formats: ['SVG'],
      statuses: ['Verified', 'Pending', 'Rejected'],
      locations: ['Provider profiles', 'Registration progress'],
    },
  },

  // Background & Decorative
  backgrounds: {
    gradientBackgrounds: {
      name: 'Gradient Background Assets',
      formats: ['SVG patterns or PNG'],
      purpose: 'Header backgrounds, accent sections',
      locations: ['All screen headers', 'CTA sections'],
    },
    decorativePatterns: {
      name: 'Decorative SVG Patterns',
      formats: ['SVG'],
      purpose: 'Visual enhancement without distraction',
      locations: ['Authentication screens', 'Success screens'],
    },
  },

  // Accessibility
  accessibility: {
    accessibilityIcons: {
      note: 'All icons should have proper ARIA labels and color contrast (4.5:1 for text)',
      colorBlindFriendly: 'Use patterns + color for status indicators',
      darkModeSupport: 'All assets should support dark theme with proper contrast',
    },
  },
} as const;

export type IconKey = keyof typeof Icons;
export type IconSizeKey = keyof typeof IconSizes;
