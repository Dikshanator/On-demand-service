import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  editable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = 'default',
  editable = true,
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isFocused ? theme.primary : theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.three,
      backgroundColor: theme.backgroundElement,
      marginBottom: Spacing.three,
    },
    icon: {
      marginRight: Spacing.two,
    },
    input: {
      flex: 1,
      paddingVertical: Spacing.three,
      fontSize: 16,
      color: theme.text,
    },
    eyeIcon: {
      padding: Spacing.one,
    },
  });

  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={editable}
      />
      {secureTextEntry && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsSecure(!isSecure)}
        >
          {/* Eye visibility icon - TODO: Replace with eye icon asset */}
          <Icon 
            name={isSecure ? 'EYE_HIDDEN' : 'EYE'} 
            size="MEDIUM"
            style={{ color: theme.textSecondary }}
          />
        </Pressable>
      )}
    </View>
  );
};
