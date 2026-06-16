# Icon Color Coding Reference Guide

## Color Palette Used in Icon System

### Primary Colors
```
Primary Brand: #3B82F6 (Blue) - Used for primary actions, form icons
Accent: #06B6D4 (Cyan/Teal) - Used for highlights, success states
Secondary: #7C3AED (Purple) - Used for secondary elements
```

### Status Colors
```
Success/Complete: #10B981 (Green) - Checkmarks, verified badges
Warning/Pending: #F59E0B (Orange) - Clock icons, pending states
Error/Failed: #EF4444 (Red) - X icons, error states
Info: #3B82F6 (Blue) - Information icons
```

### Special Colors
```
Gold/Stars: #FCD34D (Yellow) - Rating stars
Love/Heart: #EC4899 (Pink) - Favorite/like actions
Neutral: #666666 (Gray) - Default icon color
```

---

## Icon Usage by Screen

### Authentication Screens
| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ✓ | SUCCESS | #06B6D4 | Account creation confirmation |
| 📍 | LOCATION | #3B82F6 | Address input field |
| 👤 | USER | #3B82F6 | Name/user input field |
| ✉️ | EMAIL | #3B82F6 | Email input field |
| 🔒 | LOCK | #3B82F6 | Password input field |
| 📋 | APPLICATION | #3B82F6 | Service category selection |
| 📄 | DOCUMENT | #3B82F6 | Document upload |
| 📤 | UPLOAD | #3B82F6 | Video/file upload |

### Client Screens
| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ⭐ | STAR | #FCD34D | 5-star rating display |
| ❤️ | HEART | #EC4899 | Favorite/liked service |
| 🗺️ | LOCATION | #3B82F6 | Address display |
| 💳 | CREDIT_CARD | #7C3AED | Payment method |
| 👤 | USER | #666666 | Default avatar |

### Payment Screens
| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ✓ | SUCCESS | #10B981 | Payment completed |
| ⏳ | PENDING | #F59E0B | Payment pending |
| ❌ | ERROR | #EF4444 | Payment failed |
| 💳 | CREDIT_CARD | #7C3AED | Card payment method |
| 💰 | CASH | #10B981 | Cash payment |
| 📱 | NOTIFICATION | #3B82F6 | Mobile money |

### Provider Screens
| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ⭐ | STAR | #FCD34D | Average rating |
| ✓ | SUCCESS | #10B981 | Verified status |
| 📋 | APPLICATION | #3B82F6 | New job request |
| 💼 | PROFESSIONAL | #3B82F6 | Service category |
| 💰 | WALLET | #10B981 | Earnings display |

### Call/Communication Screens
| Icon | Name | Color | Usage |
|------|------|-------|-------|
| ✓ | SUCCESS | #06B6D4 | Call ended/verified |
| ❤️ | HEART | #EC4899 | Call quality feedback |
| 💬 | MESSAGE | #3B82F6 | Chat/messaging |
| ☎️ | PHONE | #3B82F6 | Call indicator |
| ✉️ | EMAIL | #3B82F6 | Email contact |

---

## Design System Integration

### Icon Sizing
```tsx
SMALL    = 16px    // Badges, small indicators
MEDIUM   = 24px    // Standard form icons, list items
LARGE    = 32px    // Card icons, featured elements
XLARGE   = 48px    // Hero sections, avatars
XXLARGE  = 80px    // Splash screens, large displays
```

### Component Usage Examples

#### Success State
```tsx
<Icon name="SUCCESS" size="LARGE" color="#10B981" />
```

#### Rating Stars
```tsx
{[...Array(5)].map((_, i) => (
  <Icon key={i} name="STAR" size="MEDIUM" color="#FCD34D" />
))}
```

#### Status Badge
```tsx
<IconBadge 
  name="SUCCESS" 
  color="#10B981" 
  bgColor="bg-green-100" 
  size="medium"
/>
```

#### Form Input
```tsx
<Input
  placeholder="Enter location"
  icon={<Icon name="LOCATION" size="MEDIUM" color="#3B82F6" />}
/>
```

#### Verified Badge
```tsx
<View>
  <Icon name="SUCCESS" size="SMALL" color="#10B981" />
  <Text>Verified</Text>
</View>
```

---

## Icon Color Combinations

### Light Background
```
Primary Text + Primary Icon:   Text: #000000, Icon: #3B82F6
Secondary Text + Accent Icon:  Text: #666666, Icon: #06B6D4
Success Text + Success Icon:   Text: #059669, Icon: #10B981
Error Text + Error Icon:       Text: #B91C1C, Icon: #EF4444
Warning Text + Warning Icon:   Text: #B45309, Icon: #F59E0B
```

### Dark Background
```
Primary Text + Primary Icon:   Text: #FFFFFF, Icon: #3B82F6
Secondary Text + Accent Icon:  Text: #E5E7EB, Icon: #06B6D4
Success Text + Success Icon:   Text: #A7F3D0, Icon: #10B981
Error Text + Error Icon:       Text: #FECACA, Icon: #EF4444
Warning Text + Warning Icon:   Text: #FCD34D, Icon: #F59E0B
```

---

## Accessibility Considerations

### Color Contrast Requirements (WCAG AA)
- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18pt+): 3:1 minimum contrast ratio
- **Icons on color**: 3:1 minimum contrast ratio

### Icon Color Usage for Accessibility
```
❌ DO NOT rely solely on color to convey status
✅ DO use color + shape + pattern together

Example:
// Good - uses color + icon shape
<Icon name="SUCCESS" color="#10B981" /> + Text: "Verified"

// Not ideal - only red color
<Icon name="ERROR" color="#EF4444" /> + Text: "Status"

// Better - color + shape + text
<Icon name="ERROR" color="#EF4444" /> + Pattern: "striped" + Text: "Failed"
```

### Dark Mode Support
All icons should have:
- Sufficient contrast in both light and dark modes
- Alternative color values for dark backgrounds
- Optional: Monochrome versions for high contrast mode

---

## Brand Color Specifications

### Primary Palette (RGB)
```
Primary Blue:      RGB(59, 130, 246)    / #3B82F6
Accent Cyan:       RGB(6, 182, 212)     / #06B6D4
Secondary Purple:  RGB(124, 58, 237)    / #7C3AED
```

### Status Palette (RGB)
```
Success Green:     RGB(16, 185, 129)    / #10B981
Warning Orange:    RGB(245, 158, 11)    / #F59E0B
Error Red:         RGB(239, 68, 68)     / #EF4444
Info Blue:         RGB(59, 130, 246)    / #3B82F6
```

### Special Palette (RGB)
```
Gold/Star Yellow:  RGB(252, 211, 77)    / #FCD34D
Love/Heart Pink:   RGB(236, 72, 153)    / #EC4899
Neutral Gray:      RGB(102, 102, 102)   / #666666
```

---

## Migration from Emoji to Icons

### What Changed
1. Emoji characters replaced with vector icons
2. No emoji fonts needed anymore
3. Colors are now customizable
4. Sizes are consistent with design system
5. Animations can be added to icons

### Benefits
- ✅ Professional appearance
- ✅ Consistent branding
- ✅ Better accessibility
- ✅ Smaller bundle size
- ✅ Customizable colors
- ✅ Works offline (no emoji downloads)
- ✅ Dark mode support
- ✅ Animation capabilities

### Breaking Changes
None - Icon component maintains backward compatibility

---

## Icon Reference Quick Link

[Material Community Icons Library](https://icons.materialdesignicons.com/)

All our icons come from this library, making it easy to:
- Preview icon appearance
- Find similar alternatives
- Export for prototyping
- Reference in design tools (Figma, Adobe XD)

---

**Document Version**: 1.0  
**Last Updated**: June 2026  
**Status**: Ready for design implementation
