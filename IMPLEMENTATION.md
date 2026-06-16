# Implementation Guide - Service Provider Features

Complete reference for implementing the provider dashboard, notifications, chat, and voice call features.

**Based on:** v0_plans/fair-guide.md
**Status:** Phase 1-2 Implementation Guide
**Last Updated:** 2026-06-16

## Quick Reference

### Phases Overview

| Phase | Features | Status | Timeline |
|-------|----------|--------|----------|
| 1 | Provider navigation structure | ✓ Complete | Week 1 |
| 2 | Dashboard & core screens | In Progress | Week 2-3 |
| 3 | Provider profile (client view) | Planned | Week 4 |
| 4 | Notifications system | Planned | Week 5 |
| 5 | Shared chat system | Planned | Week 6 |
| 6 | Voice call system | Planned | Week 7-8 |

### File Structure

```
frontend/src/app/
├── provider/
│   ├── _layout.tsx                    # Provider stack layout
│   └── (tabs)/
│       ├── _layout.tsx                # Provider tabs layout
│       ├── home.tsx                   # Dashboard
│       ├── jobs.tsx                   # Job schedule
│       ├── earnings.tsx               # Earnings tracking
│       ├── notifications.tsx          # Job alerts
│       └── profile.tsx                # Provider profile
├── chat/
│   ├── index.tsx                      # Chat list
│   └── [id].tsx                       # Chat detail
├── call/
│   ├── incoming.tsx                   # Incoming call screen
│   ├── active.tsx                     # Active call screen
│   └── summary.tsx                    # Call summary
└── auth/
    └── login.tsx                      # Modified for role routing
```

## Phase 2: Provider Dashboard Implementation

### Home Screen (provider/(tabs)/home.tsx)

**Required Components:**
- Welcome greeting with provider name
- Availability toggle (online/offline status)
- Today's earnings card (green accent)
- This week earnings card
- Performance rating display (4.9 stars)
- Active job card (if any)
- New job requests list
- Service area section

**Code Pattern:**
```tsx
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/context/AuthContext';

export default function ProviderHome() {
  const theme = useTheme();
  const { user } = useAuth();

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      {/* Components here */}
    </ScrollView>
  );
}
```

**Theme Usage:**
- Backgrounds: `theme.background`, `theme.backgroundElement`
- Text: `theme.text`, `theme.textSecondary`
- Accents: `theme.primary`, `theme.accent`
- Status: Green (#10B981), Orange (#F59E0B), Red (#EF4444)

### Jobs Screen (provider/(tabs)/jobs.tsx)

**Features:**
- Calendar date selector
- Today's summary (jobs count, earnings, hours)
- Job timeline with status badges
- Each job: name, location, time, price
- Chat and navigate buttons per job

**Status Colors:**
- COMPLETED: Green (#10B981)
- IN PROGRESS: Blue (#3B82F6)
- UPCOMING: Gray (#9CA3AF)

### Earnings Screen (provider/(tabs)/earnings.tsx)

**Displays:**
- Total lifetime earnings (bold, large)
- Stats cards: Jobs done, Average rating
- Weekly overview chart
- Recent payouts list
- Request payout button

**Data Structure:**
```tsx
interface EarningsStats {
  totalEarnings: number;
  jobsCompleted: number;
  averageRating: number;
  thisWeekEarnings: number;
  payouts: Payout[];
}
```

### Profile Screen (provider/(tabs)/profile.tsx)

**Sections:**
- Profile header (photo, name, rating)
- Edit profile button
- Certifications/qualifications list
- Service categories with verified status
- Additional settings options

**Verification Badge:**
Use `SUCCESS` icon with green color for verified items

## Phase 3: Navigation Flow

### Login Role Routing (auth/login.tsx)

Modify `handleLogin` function:

```tsx
const handleLogin = async (email: string, password: string, role: 'client' | 'provider') => {
  // ... authentication logic
  
  if (role === 'provider') {
    navigation.replace('provider');  // Go to provider tabs
  } else {
    navigation.replace('client');    // Go to client tabs
  }
};
```

### Tab Navigation

**Provider Tabs Layout:**
```
Home → Jobs → Earnings → Notifications → Profile
```

**Root Layout Integration:**
```tsx
// Root _layout.tsx
<Stack>
  <Stack.Screen name="auth" options={{ headerShown: false }} />
  <Stack.Screen name="client" options={{ headerShown: false }} />
  <Stack.Screen name="provider" options={{ headerShown: false }} />  // Add this
  <Stack.Screen name="chat" />
  <Stack.Screen name="call" />
</Stack>
```

## Component Patterns

### Using Theme Hook

```tsx
import { useTheme } from '@/hooks/use-theme';

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>Hello</Text>
    </View>
  );
};
```

### Icon Usage

```tsx
import { Icon } from '@/components/ui/icon';

<Icon name="HOME" size="MEDIUM" color={theme.primary} />
<Icon name="SUCCESS" size="LARGE" color="#10B981" />
```

### Status Badge Pattern

```tsx
import { IconBadge } from '@/components/ui/icon';

<IconBadge 
  name="SUCCESS" 
  bgColor="bg-green-100" 
  color="#10B981" 
  size="medium"
/>
```

## Color Reference

### Primary Colors
- Light Mode Primary: #003D99 (Navy Blue)
- Light Mode Accent: #00A088 (Teal)
- Dark Mode Primary: #7C3AED (Purple)
- Dark Mode Accent: #06B6D4 (Cyan)

### Status Colors
- Success: #10B981 (Green)
- Warning: #F59E0B (Orange)
- Error: #EF4444 (Red)
- Info: #3B82F6 (Blue)
- Pending: #9CA3AF (Gray)

## Icon Reference (50+)

### Navigation
- HOME, BACK, MENU, CLOSE, ARROW_RIGHT, ARROW_LEFT, SEARCH

### Status
- SUCCESS, PENDING, ERROR, WARNING, PROCESSING

### Communication
- EMAIL, PHONE, MESSAGE, BELL, NOTIFICATION

### Financial
- CREDIT_CARD, WALLET, CASH

### Service Categories
- ELECTRICIAN, PLUMBER, MECHANIC, CLEANER, TUTOR, HANDYMAN

### Other
- STAR, HEART, LOCATION, SETTINGS, HELP, DOCUMENT, UPLOAD

See `src/constants/icons.ts` for complete reference.

## Data Structures (TypeScript)

### Provider User
```tsx
interface ProviderUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto?: string;
  rating: number;
  totalReviews: number;
  isOnline: boolean;
  serviceCategories: ServiceCategory[];
  certifications: Certification[];
  availability: Availability;
  serviceArea: ServiceArea;
  earnings: EarningsData;
}
```

### Job Request
```tsx
interface JobRequest {
  id: string;
  clientName: string;
  serviceCategory: string;
  description: string;
  location: string;
  requestedTime: Date;
  budget: number;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  clientRating?: number;
  clientReview?: string;
}
```

### Chat Message
```tsx
interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  messageType: 'text' | 'image' | 'location' | 'quick_action';
}
```

## Placeholder Management

Use these patterns for assets that need replacement:

```tsx
// Logo placeholder
<Icon name="HOME" size="XXLARGE" color={theme.primary} />

// User avatar placeholder
<Icon name="USER" size="LARGE" color={theme.primary} />

// Service category icon placeholder
<Icon name="ELECTRICIAN" size="LARGE" color={theme.accent} />

// TODO comments for replacement
{/* TODO: Replace with actual user profile photo from API */}
{/* TODO: Replace with real service category icons */}
{/* TODO: Replace with real earnings chart library */}
```

## Testing Checklist

- [ ] Provider can login with role selection
- [ ] Redirects to provider/(tabs)/home after login
- [ ] Theme switches between light/dark correctly
- [ ] All icons render with proper colors
- [ ] Tab navigation works smoothly
- [ ] All screens render without errors
- [ ] Responsive on various screen sizes
- [ ] Data displays with proper formatting
- [ ] Status badges show correct colors
- [ ] Real-time availability toggle updates UI

## Accessibility Guidelines

- All icons include ARIA labels
- Status indicators use color + pattern
- Minimum 4.5:1 contrast for text
- Touch targets minimum 44x44 points
- Descriptive button labels
- Proper heading hierarchy
- Dark mode passes contrast checks

## Next Steps

1. Implement Phase 2 screens following patterns above
2. Add mock data for testing (TODOs for API integration)
3. Test navigation flows
4. Implement Phase 3-4 (chat system)
5. Add real-time WebSocket integration
6. Implement payment gateway

See v0_plans/fair-guide.md for complete detailed specifications.
