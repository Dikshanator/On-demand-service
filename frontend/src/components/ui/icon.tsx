/**
 * Icon Component
 * 
 * Uses react-native-vector-icons (MaterialCommunityIcons) for rendering icons.
 * Supports color customization, sizing presets, and proper accessibility.
 * 
 * Usage:
 * <Icon name="HOME" size="LARGE" color="#2563EB" />
 * <Icon name="EMAIL" size="MEDIUM" />
 */

import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icons, IconSizes, type IconKey, type IconSizeKey } from '@/constants/icons';

interface IconProps {
  name: IconKey;
  size?: IconSizeKey;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  testID?: string;
}

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

  return (
    <MaterialCommunityIcons
      name={iconName as any}
      size={fontSize}
      color={color}
      testID={testID}
      style={style}
    />
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
