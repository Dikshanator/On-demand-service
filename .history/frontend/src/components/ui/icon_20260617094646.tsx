/**
 * Icon Component
 * 
 * Cross-platform icon rendering using Unicode symbols and fallback emojis.
 * Works reliably on web, iOS, and Android with Expo.
 * Supports color customization, sizing presets, and proper accessibility.
 * 
 * Usage:
 * <Icon name="HOME" size="LARGE" color="#2563EB" />
 * <Icon name="EMAIL" size="MEDIUM" />
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Icons, IconSizes, type IconKey, type IconSizeKey } from '@/constants/icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconProps {
  name: IconKey;
  size?: IconSizeKey;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  testID?: string;
}

// Icon mapping to Unicode symbols and emojis (fallback)
const ICON_MAP: Record<string, { unicode: string; emoji: string }> = {
  // Navigation
  home: { unicode: '🏠', emoji: '🏠' },
  'arrow-left': { unicode: '◀', emoji: '←' },
  menu: { unicode: '☰', emoji: '☰' },
  
  // Input & Forms
  camera: { unicode: '📷', emoji: '📷' },
  email: { unicode: '✉', emoji: '✉️' },
  lock: { unicode: '🔒', emoji: '🔒' },
  eye: { unicode: '👁', emoji: '👁️' },
  'eye-off': { unicode: '👁‍🗨', emoji: '👁️‍🗨️' },
  
  // Users
  account: { unicode: '👤', emoji: '👤' },
  briefcase: { unicode: '💼', emoji: '💼' },
  
  // Status
  'check-circle': { unicode: '✓', emoji: '✓' },
  clock: { unicode: '🕐', emoji: '🕐' },
  cog: { unicode: '⚙', emoji: '⚙️' },
  alert: { unicode: '⚠', emoji: '⚠️' },
  'close-circle': { unicode: '✕', emoji: '✕' },
  'clipboard-list': { unicode: '📋', emoji: '📋' },
  bell: { unicode: '🔔', emoji: '🔔' },
  
  // Theme
  'white-balance-sunny': { unicode: '☀', emoji: '☀️' },
  'moon-waning-crescent': { unicode: '🌙', emoji: '🌙' },
  
  // Documents
  'file-document': { unicode: '📄', emoji: '📄' },
  upload: { unicode: '⬆', emoji: '⬆️' },
  download: { unicode: '⬇', emoji: '⬇️' },
  
  // Service categories
  'lightning-bolt': { unicode: '⚡', emoji: '⚡' },
  pipe: { unicode: '🔧', emoji: '🔧' },
  wrench: { unicode: '🔨', emoji: '🔨' },
  broom: { unicode: '🧹', emoji: '🧹' },
  school: { unicode: '🎓', emoji: '🎓' },
  toolbox: { unicode: '🛠', emoji: '🛠️' },
  tools: { unicode: '⚒', emoji: '⚒️' },
  
  // Editing
  pencil: { unicode: '✏', emoji: '✏️' },
  'trash-can': { unicode: '🗑', emoji: '🗑️' },
  
  // Location & Navigation
  'map-marker': { unicode: '📍', emoji: '📍' },
  'arrow-right': { unicode: '▶', emoji: '→' },
  close: { unicode: '✕', emoji: '✕' },
  
  // Rating
  star: { unicode: '★', emoji: '⭐' },
  'star-outline': { unicode: '☆', emoji: '☆' },
  
  // Payment
  'credit-card': { unicode: '💳', emoji: '💳' },
  wallet: { unicode: '👛', emoji: '👛' },
  cash: { unicode: '💵', emoji: '💵' },
  phone: { unicode: '☎', emoji: '☎️' },
  message: { unicode: '💬', emoji: '💬' },
  
  // Additional
  settings: { unicode: '⚙', emoji: '⚙️' },
  'help-circle': { unicode: '❓', emoji: '❓' },
  check: { unicode: '✓', emoji: '✓' },
  'check-all': { unicode: '✓✓', emoji: '✓✓' },
  heart: { unicode: '♥', emoji: '❤️' },
  'heart-outline': { unicode: '♡', emoji: '♡' },
  'share-variant': { unicode: '↗', emoji: '↗️' },
  magnify: { unicode: '🔍', emoji: '🔍' },
  filter: { unicode: '⚙', emoji: '⚙️' },
  sort: { unicode: '↕', emoji: '↕️' },
  
  // Google/Apple
  google: { unicode: 'G', emoji: 'G' },
  apple: { unicode: 'A', emoji: 'A' },
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'MEDIUM',
  color = '#666666',
  className = '',
  style = {},
  testID,
}) => {
  const iconName = Icons[name];
  const fontSize = IconSizes[size];
  const iconData = ICON_MAP[iconName as string] || { unicode: '•', emoji: '•' };

  return (
    <Text
      testID={testID}
      allowFontScaling={false}
      style={{
        fontSize,
        lineHeight: fontSize,
        color,
        ...style,
      }}
    >
      {iconData.emoji}
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
  color?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  name,
  bgColor = 'bg-gray-100',
  color = '#666666',
  size = 'medium',
  className = '',
}) => {
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const iconSizeMap = {
    small: 'SMALL',
    medium: 'MEDIUM',
    large: 'LARGE',
  } as const;

  return (
    <View className={`${sizeMap[size]} ${bgColor} rounded-full items-center justify-center ${className}`}>
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
  iconSize = 'MEDIUM',
  color = '#666666',
  textClassName = 'text-sm text-gray-700',
  gap = 'gap-2',
  className = 'flex-row items-center',
}) => {
  return (
    <View className={`${className} ${gap}`}>
      <Icon name={name} size={iconSize} color={color} />
      <Text className={textClassName}>{text}</Text>
    </View>
  );
};

export default Icon;
