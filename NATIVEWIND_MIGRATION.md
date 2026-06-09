# NativeWind Migration Guide

## Overview
Successfully migrated the React Native authentication flow from StyleSheet CSS to NativeWind (Tailwind CSS for React Native). This provides better consistency, maintainability, and design system integration.

## What Was Changed

### 1. Login Screen (LoginPageLightTheme Integration)
- Converted from StyleSheet to NativeWind classes
- Integrated Locofy-generated design assets:
  - Google and Apple login image assets
  - Professional form inputs with icons
  - Proper color scheme matching Figma design (Navy Blue #000666)
  - Divider and social login sections
- Enhanced password visibility toggle
- Improved input field styling with background colors

**Key NativeWind Classes Used:**
```
- bg-white, bg-gray-100, bg-blue-900
- text-white, text-gray-900, text-gray-600
- rounded-2xl (16px radius for buttons/inputs)
- py-4, px-4 (padding utilities)
- flex-row, items-center, justify-center
- border, border-gray-300
- shadow-lg, shadow-md
```

### 2. Role Selection Screen
- Refactored all StyleSheet definitions to NativeWind utilities
- Maintained all functionality (theme toggle, role selection)
- Improved conditional styling with template literals
- Cleaner, more readable code structure

### 3. Global Configuration

#### Tailwind Config (`tailwind.config.js`)
- Custom theme colors for light and dark modes
- Extended spacing scale matching design system
- Rounded corner defaults (8px, 12px, 16px, full)
- Custom font sizes with line heights
- Border radius utilities

#### Global CSS (`src/global.css`)
- Tailwind directives (@tailwind base, components, utilities)
- Custom component layer classes for reusable patterns:
  - `.btn-primary`, `.btn-secondary`
  - `.input-field`
  - `.card`, `.card-elevation`
  - `.text-heading-*`, `.text-body`, `.text-caption`
  - `.form-group`, `.form-label`

#### Root Layout (`src/app/_layout.tsx`)
- Added global CSS import for NativeWind styles
- Ensures Tailwind styles are available throughout the app

## Benefits

1. **Consistency**: Single design system across all screens
2. **Maintainability**: Utility-first approach reduces code duplication
3. **Performance**: Tree-shaking unused styles automatically
4. **Developer Experience**: Familiar Tailwind syntax in React Native
5. **Scalability**: Easy to extend with custom utilities

## Color System

### Light Theme
- Primary: `#003D99` (Navy Blue)
- Accent: `#00A088` (Teal)
- Background: `#F5F5F7`
- Surface: `#FFFFFF`

### Dark Theme
- Primary: `#7C3AED` (Purple)
- Accent: `#06B6D4` (Cyan)
- Background: `#1A1A2E`
- Surface: `#2D2D4A`

## How to Use NativeWind

### Basic Layout
```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-2xl font-bold text-gray-900">
    Hello World
  </Text>
</View>
```

### Common Patterns
```tsx
// Button
<Pressable className="bg-blue-900 rounded-2xl py-4 px-6 items-center">
  <Text className="text-white font-semibold">Click me</Text>
</Pressable>

// Input
<TextInput className="bg-gray-100 rounded-2xl px-4 py-3 text-base" />

// Card
<View className="bg-white rounded-lg border border-gray-300 p-4 shadow-md">
  {/* content */}
</View>

// Flex Row
<View className="flex-row items-center justify-between">
  {/* content */}
</View>
```

## Migration Status

✅ **Completed:**
- Login Screen (Locofy Integration)
- Role Selection Screen
- NativeWind Configuration
- Global CSS Setup

📋 **To Be Completed:**
- Registration Screens (Client & Provider)
- Dashboard Screen
- Other Authentication Screens
- Component Library Refactoring

## Assets

Locofy-generated assets copied to `/frontend/assets/images/`:
- `Img-Google-margin@2x.png`
- `Img-Apple-margin@2x.png`
- Icon assets (SVG files)

## Installation & Setup

```bash
# Dependencies already installed
npm install nativewind

# Configure Tailwind
# (Already set up - tailwind.config.js created)

# Run dev server
npm start
```

## Best Practices

1. **Use Utility Classes First**: Prefer `className` over inline styles
2. **Responsive Design**: Use responsive prefixes (not yet needed for mobile-first)
3. **Consistency**: Follow established color and spacing scales
4. **Reusability**: Create component-level classes in global.css for repeated patterns
5. **Performance**: Avoid arbitrary values; use defined spacing/colors

## Troubleshooting

If styles aren't applying:
1. Ensure `../global.css` is imported in the root layout
2. Check that component paths are correct in tailwind.config.js
3. Restart the dev server after config changes
4. Verify the CSS class syntax (no typos)

## Next Steps

1. Convert remaining authentication screens to NativeWind
2. Create a component library with NativeWind-based UI components
3. Implement dark mode styling
4. Add responsive utilities for tablets/web
5. Performance optimization and testing
