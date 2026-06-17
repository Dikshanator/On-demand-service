import React from "react";
import { Text, View } from "react-native";
import {
  Icons,
  IconSizes,
  type IconKey,
  type IconSizeKey,
} from "@/constants/icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/use-theme";

interface IconProps {
  name: IconKey;
  size?: IconSizeKey;
  // Optional now — if omitted, Icon resolves a color from the current
  // theme automatically. Pass an explicit color to override (e.g. a
  // status icon that should always be red/green regardless of theme).
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  testID?: string;
}

// Emoji fallback map — only used if a glyph name isn't a valid
// MaterialCommunityIcons icon (e.g. typo, or a name that doesn't exist
// in the MCI set). Keep this in sync with whatever IconKeys you have.
const EMOJI_FALLBACK_MAP: Record<string, string> = {
  home: "🏠",
  "arrow-left": "←",
  menu: "☰",
  camera: "📷",
  email: "✉️",
  lock: "🔒",
  eye: "👁️",
  "eye-off": "👁️‍🗨️",
  account: "👤",
  briefcase: "💼",
  "check-circle": "✓",
  clock: "🕐",
  cog: "⚙️",
  alert: "⚠️",
  "close-circle": "✕",
  "clipboard-list": "📋",
  bell: "🔔",
  "white-balance-sunny": "☀️",
  "moon-waning-crescent": "🌙",
  "file-document": "📄",
  upload: "⬆️",
  download: "⬇️",
  "lightning-bolt": "⚡",
  pipe: "🔧",
  wrench: "🔨",
  broom: "🧹",
  school: "🎓",
  toolbox: "🛠️",
  tools: "⚒️",
  pencil: "✏️",
  "trash-can": "🗑️",
  "map-marker": "📍",
  "arrow-right": "→",
  close: "✕",
  star: "⭐",
  "star-outline": "☆",
  "credit-card": "💳",
  wallet: "👛",
  cash: "💵",
  phone: "☎️",
  message: "💬",
  settings: "⚙️",
  "help-circle": "❓",
  check: "✓",
  "check-all": "✓✓",
  heart: "❤️",
  "heart-outline": "♡",
  "share-variant": "↗️",
  magnify: "🔍",
  filter: "⚙️",
  sort: "↕️",
  google: "G",
  apple: "A",
};

const DEFAULT_EMOJI = "•";

// MaterialCommunityIcons exposes its full glyph map as a static property.
// We use this to verify a given icon name is actually valid before
// rendering it, so unknown/typo'd names fall back to emoji instead of
// silently rendering nothing.
const MCI_GLYPH_MAP = (MaterialCommunityIcons as any).glyphMap as
  | Record<string, number>
  | undefined;

function isValidMCIName(name: string | undefined): name is string {
  if (!name) return false;
  if (!MCI_GLYPH_MAP) return true; // can't verify, assume valid
  return name in MCI_GLYPH_MAP;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = "MEDIUM",
  color,
  className = "",
  style = {},
  testID,
}) => {
  // useTheme() returns Colors[theme] directly (see src/hooks/use-theme.ts),
  // e.g. { text, background, textSecondary, primary, accent, error, ... }
  // There's no dedicated "icon" key in the theme, so we default to "text"
  // to match the rest of the app's foreground color.
  const theme = useTheme();
  const resolvedColor = color ?? theme.text;

  const iconName = Icons[name] as string | undefined;
  const fontSize = IconSizes[size];

  if (isValidMCIName(iconName)) {
    return (
      <MaterialCommunityIcons
        testID={testID}
        name={iconName as any}
        size={fontSize}
        color={resolvedColor}
        style={style}
      />
    );
  }

  // Fallback: render emoji as text if the MCI name isn't valid/recognized
  const emoji = EMOJI_FALLBACK_MAP[iconName ?? name] ?? DEFAULT_EMOJI;

  return (
    <Text
      testID={testID}
      allowFontScaling={false}
      style={{
        fontSize,
        lineHeight: fontSize,
        color: resolvedColor,
        ...style,
      }}
    >
      {emoji}
    </Text>
  );
};

/**
 * Icon Badge Component
 *
 * Displays an icon inside a circular background.
 * Useful for status indicators, success states, etc.
 *
 * Usage:
 * <IconBadge name="SUCCESS" bgColor="bg-teal-100" color="#10B981" />
 * <IconBadge name="PENDING" bgColor="bg-orange-100" color="#F59E0B" />
 */

interface IconBadgeProps {
  name: IconKey;
  bgColor?: string;
  color?: string; // omit to use theme default
  size?: "small" | "medium" | "large";
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  name,
  bgColor = "bg-gray-100",
  color,
  size = "medium",
  className = "",
}) => {
  const sizeMap = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const iconSizeMap = {
    small: "SMALL",
    medium: "MEDIUM",
    large: "LARGE",
  } as const;

  return (
    <View
      className={`${sizeMap[size]} ${bgColor} rounded-full items-center justify-center ${className}`}
    >
      <Icon name={name} size={iconSizeMap[size]} color={color} />
    </View>
  );
};

/**
 * Icon + Text Component
 *
 * Combines icon with text for consistent icon-text pairs
 *
 * Usage:
 * <IconWithText name="EMAIL" text="Email" color="#3B82F6" />
 * <IconWithText name="USER" text="Profile" textClassName="font-semibold" color="#10B981" />
 */

interface IconWithTextProps {
  name: IconKey;
  text: string;
  iconSize?: IconSizeKey;
  color?: string;
  textClassName?: string;
  gap?: string;
  className?: string;
}

export const IconWithText: React.FC<IconWithTextProps> = ({
  name,
  text,
  iconSize = "MEDIUM",
  color,
  textClassName = "text-sm text-gray-700",
  gap = "gap-2",
  className = "flex-row items-center",
}) => {
  return (
    <View className={`${className} ${gap}`}>
      <Icon name={name} size={iconSize} color={color} />
      <Text className={textClassName}>{text}</Text>
    </View>
  );
};

export default Icon;
