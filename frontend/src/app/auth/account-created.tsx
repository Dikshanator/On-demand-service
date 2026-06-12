import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Icon } from '@/components/ui/icon';

export default function AccountCreatedScreen() {
  const router = useRouter();
  const theme = useTheme();

  // Extract email from params or use default
  const userEmail = 'abhishek@example.com';
  const userName = 'Abhishek';

  const isDark = theme.background === '#1A1A2E';

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {/* Header */}
      <View className="pt-6 pb-8">
        <Text
          className="text-2xl font-bold text-center"
          style={{ color: theme.text }}
        >
          hamroSewa
        </Text>
      </View>

      {/* Main Content Card */}
      <View
        className="flex-1 mx-4 rounded-2xl p-8 mb-8"
        style={{
          backgroundColor: isDark ? theme.backgroundElement : '#FFFFFF',
          borderWidth: 1,
          borderColor: isDark ? theme.border : '#E5E7EB',
        }}
      >
        {/* Success Icon */}
        <View className="items-center mb-8">
          <View
            className="w-24 h-24 rounded-full items-center justify-center mb-6"
            style={{
              backgroundColor: isDark
                ? 'rgba(6, 182, 212, 0.1)'
                : 'rgba(0, 160, 136, 0.1)',
              borderWidth: 3,
              borderColor: theme.accent,
            }}
          >
            {/* TODO: Replace with actual checkmark SVG - Teal/cyan colored circle with checkmark */}
            <Text className="text-5xl" style={{ color: theme.accent }}>
              ✓
            </Text>
          </View>

          <Text
            className="text-3xl font-bold text-center mb-3"
            style={{ color: theme.text }}
          >
            Account Created!
          </Text>

          <Text
            className="text-base text-center leading-6"
            style={{ color: theme.textSecondary }}
          >
            Welcome, {userName}! Your journey with hamroSewa starts here.
          </Text>
        </View>

        {/* Email Display */}
        <View
          className="rounded-xl px-4 py-4 mb-6 flex-row items-center gap-3"
          style={{
            backgroundColor: isDark ? theme.background : '#F3F4F6',
          }}
        >
          {/* Email icon - TODO: Replace with email icon asset */}
          <Icon name="EMAIL" size="MEDIUM" />
          <Text
            className="text-base font-medium flex-1"
            style={{ color: theme.text }}
          >
            {userEmail}
          </Text>
        </View>

        {/* Verification Message */}
        <Text
          className="text-sm text-center leading-5 mb-8"
          style={{ color: theme.textSecondary }}
        >
          Please verify your email address to activate your account and start booking services.
        </Text>

        {/* Primary Button */}
        <Pressable
          onPress={() => router.push('/auth/login')}
          style={{ backgroundColor: theme.primary }}
          className="rounded-2xl py-4 items-center justify-center mb-4"
        >
          <Text className="text-white font-semibold text-base">Go to Sign In</Text>
        </Pressable>

        {/* Resend Email Link */}
        <Pressable onPress={() => {}}>
          <Text
            className="text-base font-semibold text-center"
            style={{ color: theme.accent }}
          >
            Resend verification email
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
