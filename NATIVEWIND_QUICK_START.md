# NativeWind Quick Start Guide

## What is NativeWind?
NativeWind brings Tailwind CSS to React Native - write styles using familiar Tailwind utility classes instead of StyleSheet objects.

## Installation ✅
Already completed! NativeWind is installed and configured.

```bash
npm install nativewind  # Already done
```

## Quick Examples

### Layout Basics
```tsx
import { View, Text } from 'react-native';

// Flexbox column (default)
<View className="flex-1 p-4 gap-2">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</View>

// Flexbox row
<View className="flex-row items-center justify-between gap-4">
  <Text>Left</Text>
  <Text>Right</Text>
</View>
```

### Buttons
```tsx
// Primary button (Navy blue)
<Pressable className="bg-blue-900 rounded-2xl py-4 px-6 items-center">
  <Text className="text-white font-semibold text-lg">Click Me</Text>
</Pressable>

// Secondary button (outlined)
<Pressable className="border border-gray-300 rounded-2xl py-3 px-6 items-center">
  <Text className="text-gray-900 font-semibold">Secondary</Text>
</Pressable>
```

### Input Fields
```tsx
// Email input with icon
<View className="flex-row items-center bg-gray-100 rounded-2xl px-4">
  <Text className="text-lg mr-2">✉️</Text>
  <TextInput
    placeholder="Email"
    className="flex-1 py-4 text-base"
    placeholderTextColor="#9CA3AF"
  />
</View>

// Password input with show/hide toggle
<View className="flex-row items-center bg-gray-100 rounded-2xl px-4">
  <Text className="text-lg mr-2">🔒</Text>
  <TextInput
    placeholder="Password"
    secureTextEntry={!showPassword}
    className="flex-1 py-4 text-base"
  />
  <Pressable onPress={() => setShowPassword(!showPassword)}>
    <Text className="text-lg">👁️</Text>
  </Pressable>
</View>
```

### Cards
```tsx
<View className="bg-white rounded-lg border border-gray-300 p-4 shadow-md">
  <Text className="text-lg font-bold text-gray-900">Card Title</Text>
  <Text className="text-sm text-gray-600 mt-2">Card content</Text>
</View>
```

### Typography
```tsx
// Heading 1
<Text className="text-3xl font-bold text-gray-900">Heading 1</Text>

// Heading 2
<Text className="text-2xl font-bold text-gray-900">Heading 2</Text>

// Body text
<Text className="text-base text-gray-600">Body text</Text>

// Caption
<Text className="text-sm text-gray-500">Caption</Text>
```

### Colors
```tsx
// Text colors
className="text-gray-900"    // Dark text
className="text-gray-600"    // Medium text
className="text-gray-400"    // Light text
className="text-blue-600"    // Blue accent

// Background colors
className="bg-white"         // White
className="bg-gray-100"      // Light gray
className="bg-blue-900"      // Navy blue (primary)
className="bg-blue-50"       // Light blue (hover state)

// Border colors
className="border-gray-300"  // Default border
className="border-blue-900"  // Accent border
```

### Spacing
```tsx
className="p-4"              // 16px padding all sides
className="px-4"             // 16px horizontal padding
className="py-3"             // 12px vertical padding
className="px-4 py-3"        // Combined horizontal & vertical
className="mt-2"             // 8px margin top
className="gap-4"            // 16px gap in flex layouts
```

### Border Radius
```tsx
className="rounded-lg"       // 8px corners
className="rounded-2xl"      // 16px corners (most common)
className="rounded-full"     // Circular (for avatars)
className="rounded-none"     // No corners (sharp)
```

### Shadow & Elevation
```tsx
className="shadow-sm"        // Subtle shadow
className="shadow-md"        // Medium shadow
className="shadow-lg"        // Large shadow
```

### Conditional Classes
```tsx
<View className={`p-4 rounded-lg ${
  isActive ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-900'
}`}>
  Content
</View>

// Using template literals
<Pressable className={isPressed ? 'opacity-75' : 'opacity-100'}>
  Text
</Pressable>
```

## Common Patterns from Login Screen

### Email/Password Form
```tsx
// Label
<Text className="text-sm font-semibold text-gray-900">Email</Text>

// Input field
<View className="flex-row items-center bg-gray-100 rounded-2xl pl-4 pr-4">
  <Text className="text-lg mr-3">✉️</Text>
  <TextInput
    placeholder="Email or phone number"
    placeholderTextColor="#9ca3af"
    className="flex-1 py-4 text-base text-gray-900"
  />
</View>

// Forgot password link
<Pressable className="self-end mt-2">
  <Text className="text-sm font-semibold text-blue-600">Forgot Password?</Text>
</Pressable>

// Submit button
<Pressable className="bg-blue-900 rounded-2xl py-4 items-center justify-center mt-4">
  <Text className="text-white font-semibold text-lg">Sign In</Text>
</Pressable>
```

### Divider with Text
```tsx
<View className="flex-row items-center px-5 my-8 gap-4">
  <View className="flex-1 h-px bg-gray-300" />
  <Text className="text-sm font-semibold text-gray-600">or</Text>
  <View className="flex-1 h-px bg-gray-300" />
</View>
```

### Social Login Buttons
```tsx
<Pressable className="flex-row items-center justify-center border border-gray-300 rounded-2xl py-3 gap-2">
  <Image 
    source={require('@/assets/images/Img-Google-margin@2x.png')} 
    className="w-7 h-5"
  />
  <Text className="font-semibold text-gray-900">Google</Text>
</Pressable>
```

## Tailwind Color Palette

### Grays (Neutral)
- `gray-50` - Lightest
- `gray-100` - Input backgrounds
- `gray-200` - Disabled states
- `gray-300` - Borders
- `gray-400` - Tertiary text
- `gray-600` - Secondary text
- `gray-900` - Primary text (darkest)

### Blues (Primary/Accent)
- `blue-50` - Hover state background
- `blue-600` - Link color
- `blue-900` - Primary button (#000666)

## Common Mistakes to Avoid

❌ **Wrong**: Using StyleSheet objects
```tsx
const styles = StyleSheet.create({
  container: { flex: 1 }
});
```

✅ **Right**: Using className strings
```tsx
<View className="flex-1">
```

❌ **Wrong**: Hardcoded pixel values
```tsx
className="p-[16px]"
```

✅ **Right**: Using Tailwind spacing scale
```tsx
className="p-4"  // 16px
```

❌ **Wrong**: Mixing both approaches
```tsx
<View className="flex-1" style={{ marginTop: 10 }}>
```

✅ **Right**: Use className for everything
```tsx
<View className="flex-1 mt-2">
```

## Available Spacing Values
- `0` - 0px
- `1` - 4px
- `2` - 8px
- `3` - 12px
- `4` - 16px (most common)
- `5` - 20px
- `6` - 24px
- `8` - 32px
- `10` - 40px
- `12` - 48px
- `16` - 64px

## Useful Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **NativeWind Docs**: https://www.nativewind.dev
- **Color Reference**: https://tailwindcss.com/docs/customizing-colors
- **Spacing Scale**: https://tailwindcss.com/docs/customizing-spacing

## Converting Existing Code

### From StyleSheet
```tsx
// Before
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  text: { fontSize: 16, color: '#1a1a1a', fontWeight: '600' }
});

<View style={styles.container}>
  <Text style={styles.text}>Hello</Text>
</View>

// After
<View className="flex-1 bg-white p-4">
  <Text className="text-base text-gray-900 font-semibold">Hello</Text>
</View>
```

## Pro Tips

1. **Use Search**: VS Code can search Tailwind classes with autocomplete
2. **Breakpoints**: Not needed for mobile-first, but `md:` and `lg:` exist for responsive design
3. **Dark Mode**: Can be added with `dark:` prefix if needed
4. **Custom Colors**: Defined in `tailwind.config.js`
5. **Component Reuse**: Create component wrapper classes in `global.css`

## Need Help?

1. Check the login screen example: `frontend/src/app/auth/login.tsx`
2. Check the role-selection screen: `frontend/src/app/auth/role-selection.tsx`
3. See all available utilities in `tailwind.config.js`
4. Read the full migration guide: `NATIVEWIND_MIGRATION.md`

---

**Happy Styling! 🎨**
