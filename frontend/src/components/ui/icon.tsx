/**
 * Icon Component
 * 
 * Centralized icon rendering component that uses the Icons system.
 * Makes it easy to swap all icons at once by updating this single file
 * and the icons.ts constants file.
 * 
 * Usage:
 * <Icon name="HOME" size="LARGE" />
 * <Icon name="EMAIL" size="MEDIUM" className="text-blue-500" />
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Icons, IconSizes, type IconKey, type IconSizeKey } from '@/constants/icons';

interface IconProps {
  name: IconKey;
  size?: IconSizeKey;
  className?: string;
  style?: React.CSSProperties;
  testID?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'MEDIUM',
  className = '',
  style = {},
  testID,
}) => {
  const iconContent = Icons[name];
  const fontSize = IconSizes[size];

  return (
    <Text
      testID={testID}
      className={className}
      style={{
        fontSize,
        lineHeight: fontSize,
        ...style,
      }}
    >
      {iconContent}
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
 * <IconBadge name="SUCCESS" bgColor="bg-teal-100" />
 * <IconBadge name="PENDING" bgColor="bg-orange-100" />
 */

interface IconBadgeProps {
  name: IconKey;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  name,
  bgColor = 'bg-gray-100',
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
      <Icon name={name} size={iconSizeMap[size]} />
    </View>
  );
};

/**
 * Icon + Text Component
 * 
 * Combines icon with text for consistent icon-text pairs
 * 
 * Usage:
 * <IconWithText name="EMAIL" text="Email" />
 * <IconWithText name="USER" text="Profile" textClassName="font-semibold" />
 */

interface IconWithTextProps {
  name: IconKey;
  text: string;
  iconSize?: IconSizeKey;
  textClassName?: string;
  gap?: string;
  className?: string;
}

export const IconWithText: React.FC<IconWithTextProps> = ({
  name,
  text,
  iconSize = 'MEDIUM',
  textClassName = 'text-sm text-gray-700',
  gap = 'gap-2',
  className = 'flex-row items-center',
}) => {
  return (
    <View className={`${className} ${gap}`}>
      <Icon name={name} size={iconSize} />
      <Text className={textClassName}>{text}</Text>
    </View>
  );
};

export default Icon;
