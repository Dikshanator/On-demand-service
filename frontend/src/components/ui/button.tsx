import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
  loading = false,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    primary: {
      backgroundColor: theme.primary,
      borderRadius: 12,
      paddingVertical: Spacing.three,
      marginVertical: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
    },
    secondary: {
      backgroundColor: theme.primaryLight,
      borderRadius: 12,
      paddingVertical: Spacing.three,
      marginVertical: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
    },
    outline: {
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: 12,
      paddingVertical: Spacing.three,
      marginVertical: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
    },
    primaryText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    secondaryText: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
    },
    outlineText: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
    },
  });

  const buttonStyle = styles[variant];
  const textStyle =
    variant === 'primary' ? styles.primaryText :
    variant === 'secondary' ? styles.secondaryText :
    styles.outlineText;

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Text style={textStyle}>{loading ? 'Loading...' : title}</Text>
    </Pressable>
  );
};
