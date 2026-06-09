/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#000000",
    background: "#F5F5F7",
    backgroundElement: "#FFFFFF",
    backgroundSelected: "#E0E1E6",
    textSecondary: "#60646C",
    textTertiary: "#999999",
    primary: "#003D99", // Navy blue
    primaryLight: "#E8F0FF",
    accent: "#00A088", // Teal
    accentLight: "#E8F5F2",
    success: "#00A088",
    error: "#FF4444",
    border: "#D0D0D5",
    divider: "#EFEFEF",
  },
  dark: {
    text: "#FFFFFF",
    background: "#1A1A2E",
    backgroundElement: "#2D2D4A",
    backgroundSelected: "#3E3E5C",
    textSecondary: "#B0B4BA",
    textTertiary: "#808080",
    primary: "#7C3AED", // Purple/Lavender
    primaryLight: "#2D1B4E",
    accent: "#06B6D4", // Cyan
    accentLight: "#1A4D57",
    success: "#06B6D4",
    error: "#FF6B6B",
    border: "#3E3E5C",
    divider: "#2D2D4A",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
