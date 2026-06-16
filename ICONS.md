# Icon System & Professional Assets

Master guide for icons, design system, and professional asset requirements for hamroSewa.

## Table of Contents

1. [Icon System Overview](#icon-system-overview)
2. [Icon Reference](#icon-reference)
3. [Color Palette](#color-palette)
4. [Component Usage](#component-usage)
5. [Professional Assets](#professional-assets)
6. [Implementation Timeline](#implementation-timeline)

---

## Icon System Overview

The project uses **Material Community Icons** from `react-native-vector-icons` for all UI icons. All emojis have been replaced with proper colored icons.

### Quick Facts

- **Library:** MaterialCommunityIcons from react-native-vector-icons
- **Total Icons:** 50+
- **Size Presets:** 5 (16px to 80px)
- **Color Support:** Full customization
- **Dark Mode:** Fully supported
- **Status:** Production-ready

### Component Usage

```tsx
import { Icon } from '@/components/ui/icon';

// Basic usage
<Icon name="HOME" size="MEDIUM" color="#3B82F6" />

// With badge
<Icon name="SUCCESS" size="LARGE" color="#10B981" />

// With text
<IconWithText name="EMAIL" text="Contact" color="#3B82F6" />
```

---

## Icon Reference

### Navigation & UI

| Icon | Name | Usage |
|------|------|-------|
| 🏠 | HOME | Navigation, home screens |
| ← | BACK | Back navigation |
| ☰ | MENU | Menu toggle |
| ✕ | CLOSE | Close buttons |
| → | ARROW_RIGHT | Next/forward actions |

### Status & Validation

| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ✓ | SUCCESS | #10B981 (Green) | Success states, verified |
| ⏳ | PENDING | #F59E0B (Orange) | Loading, pending states |
| ✕ | ERROR | #EF4444 (Red) | Errors, failures |
| ⚠️ | WARNING | #F59E0B (Orange) | Warnings |
| ⚙️ | PROCESSING | #3B82F6 (Blue) | Processing |

### Communication

| Icon | Name | Usage |
|------|------|-------|
| ✉️ | EMAIL | Email, messaging |
| 📞 | PHONE | Phone calls |
| 💬 | MESSAGE | Chat, messages |
| 🔔 | BELL/NOTIFICATION | Notifications |

### Input & Forms

| Icon | Name | Usage |
|------|------|-------|
| 📷 | CAMERA | Photo upload |
| 🔒 | LOCK | Password, security |
| 👁️ | EYE | Show password |
| 👁️‍🗨️ | EYE_HIDDEN | Hide password |
| 🔍 | SEARCH | Search input |

### Payment & Transactions

| Icon | Name | Usage |
|------|------|-------|
| 💳 | CREDIT_CARD | Payment methods |
| 💰 | WALLET | Wallet, funds |
| 💵 | CASH | Cash payment |
| ✓ | SUCCESS | Payment complete |

### Service Categories

| Icon | Name | Usage |
|------|------|-------|
| ⚡ | ELECTRICIAN | Electrical services |
| 🔧 | PLUMBER | Plumbing services |
| 🛠️ | MECHANIC | Mechanical services |
| 🧹 | CLEANER | Cleaning services |
| 🎓 | TUTOR | Education services |

### Other Icons

| Icon | Name | Usage |
|------|------|-------|
| ⭐ | STAR | Ratings, favorites |
| ❤️ | HEART | Likes, favorites |
| 📍 | LOCATION | Location, maps |
| ⚙️ | SETTINGS | Settings |
| ❓ | HELP | Help, support |

---

## Color Palette

### Brand Colors

```
Primary Blue:       #3B82F6
Accent Cyan:        #06B6D4
Secondary Purple:   #8B5CF6
```

### Status Colors

```
Success Green:      #10B981
Warning Orange:     #F59E0B
Error Red:          #EF4444
Info Blue:          #3B82F6
```

### UI Colors

```
Gold (Stars):       #FCD34D
Pink (Love):        #EC4899
Gray (Disabled):    #9CA3AF
Dark Gray:          #6B7280
```

### Usage Examples

```tsx
// Success state
<Icon name="SUCCESS" size="LARGE" color="#10B981" />

// Warning
<Icon name="WARNING" size="MEDIUM" color="#F59E0B" />

// Error
<Icon name="ERROR" size="MEDIUM" color="#EF4444" />

// Star rating
<Icon name="STAR" size="MEDIUM" color="#FCD34D" />

// Love/Like
<Icon name="HEART" size="MEDIUM" color="#EC4899" />
```

---

## Component Usage

### Icon Sizes

```
SMALL:    16px  - Badges, small indicators
MEDIUM:   24px  - Standard icons
LARGE:    32px  - Featured icons, avatars
XLARGE:   48px  - Hero sections
XXLARGE:  80px  - Splash screens
```

### Icon Badge Component

```tsx
import { IconBadge } from '@/components/ui/icon';

// Success badge
<IconBadge name="SUCCESS" bgColor="bg-green-100" color="#10B981" />

// Error badge
<IconBadge name="ERROR" bgColor="bg-red-100" color="#EF4444" />
```

### Icon with Text

```tsx
import { IconWithText } from '@/components/ui/icon';

<IconWithText 
  name="EMAIL" 
  text="Email Support" 
  color="#3B82F6"
  iconSize="MEDIUM"
/>
```

---

## Professional Assets

All specifications organized by feature area. See **ASSETS_REQUIREMENTS.md** for detailed requirements.

### Must-Have Assets (MVP)

1. **App Logo** (light & dark) - 512x512 PNG/SVG
2. **12 Service Category Icons** - 64x64 SVG
3. **5 Payment Method Icons** - SVG
4. **4 Status Badges** - SVG (Pending, Complete, Failed, Verified)
5. **6 Empty State Illustrations** - SVG

### Should-Have Assets (v1.0)

- Tab bar icons (6 icons × 2 states)
- Social login icons (Google, Apple)
- Verification badges (blue checkmark, etc.)
- Chat status icons (online, offline, typing)
- Loading animations (Lottie JSON)

### Nice-to-Have Assets (v1.1+)

- Detailed feature illustrations
- Onboarding flow animations
- Success screen effects
- Advanced dark mode graphics

### Budget & Timeline

| Category | Budget | Timeline |
|----------|--------|----------|
| MVP | $1,200-2,400 | 3-4 weeks |
| Full v1.0 | $2,400-5,000 | 6-8 weeks |
| All Assets | $5,000-8,000 | 8-11 weeks |

### Where to Find Designers

1. **Upwork** - freelance designers
2. **Fiverr** - design packages
3. **99designs** - design contests
4. **Local agencies** - custom work
5. **Dribbble** - portfolio showcases

---

## Updated Screens with Icons

### Authentication
- Account created success screen ✓
- Client registration steps 1-2 ✓
- Provider registration steps 1-4 ✓

### Provider Dashboard
- Home screen with performance rating ⭐
- Earnings page with statistics ⭐
- Profile with verification status ✓

### Communication
- Call summary with checkmark & heart icons ✓
- Chat integration icons ✓

---

## Implementation Timeline

### Week 1-2: Logo & Brand
- Design brand identity
- Create app logo (light & dark)
- Design brand guidelines

### Week 2-3: Icon System
- Design 50+ icons
- Create variants (filled, outlined)
- Dark mode versions

### Week 3-4: Illustrations
- Empty state illustrations
- Service category artwork
- Status indicators

### Week 4-5: Animations & Polish
- Loading spinners (Lottie)
- Transition effects
- Micro-interactions

### Week 5-6: Testing & Finalization
- Accessibility audit
- Dark mode testing
- Quality assurance

---

## Security & Accessibility

### Color Contrast
- All text: Minimum 4.5:1 contrast
- Icons: At least 3:1 contrast
- Status indicators: Use pattern + color

### Dark Mode Support
- All assets have dark variants
- Proper contrast in both modes
- Test with vision simulators

### Accessibility
- All icons have proper ARIA labels
- Use descriptive icon names
- Combine with text for clarity
- Avoid relying on color alone

---

## Code File References

- **Icon Component:** `src/components/ui/icon.tsx`
- **Icon Constants:** `src/constants/icons.ts`
- **Color Theme:** `src/constants/theme.ts`
- **Usage Examples:** See individual screen files

---

## Next Steps

1. Review icon specifications in this document
2. Plan asset design timeline (6-11 weeks)
3. Allocate budget ($2,400-8,000)
4. Hire design team
5. Start with logo & brand guidelines
6. Share color palette with designers
7. Request dark mode variants for all assets

For complete asset specifications, see **ASSETS_REQUIREMENTS.md**.
