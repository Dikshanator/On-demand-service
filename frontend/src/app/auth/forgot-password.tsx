import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Icon } from '@/components/ui/icon';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 1500);
  };

  const isDark = theme.background === '#1A1A2E';

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
      style={{ backgroundColor: theme.background }}
    >
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Header */}
        <View className="flex-row items-center pt-4 px-5 pb-6">
          <Pressable onPress={() => router.back()} className="p-2">
            <Text className="text-2xl" style={{ color: theme.text }}>
              ←
            </Text>
          </Pressable>
          <Text
            className="flex-1 text-center text-2xl font-bold"
            style={{ color: theme.text }}
          >
            Forgot Password
          </Text>
          <View className="w-8" />
        </View>

        {/* Main Content */}
        <View className="flex-1 px-5 py-8 justify-center">
          {/* Icon Container */}
          <View className="items-center mb-12">
            <View
              className="w-32 h-32 rounded-full items-center justify-center mb-8"
              style={{
                backgroundColor: isDark ? '#3E3E5C' : '#E8F5F2',
              }}
            >
              {/* Email/Security icon - TODO: Replace with email+lock icon asset (80x80, cyan/teal color) */}
              <Icon name="EMAIL" size="XXLARGE" />
            </View>

            <Text
              className="text-3xl font-bold text-center mb-4"
              style={{ color: theme.text }}
            >
              Reset Password
            </Text>

            <Text
              className="text-base text-center leading-6"
              style={{ color: theme.textSecondary }}
            >
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </Text>
          </View>

          {/* Form Section */}
          {!emailSent ? (
            <View className="gap-6">
              {/* Email Input */}
              <View className="gap-3">
                <Text
                  className="text-sm font-semibold"
                  style={{ color: theme.text }}
                >
                  Email Address
                </Text>
                <View
                  className="flex-row items-center rounded-2xl pl-4 pr-4"
                  style={{
                    backgroundColor: theme.backgroundElement,
                    borderWidth: 1,
                    borderColor: theme.border,
                  }}
                >
                  {/* Email icon - TODO: Replace with email icon asset */}
                  <Icon name="EMAIL" size="MEDIUM" className="mr-3" />
                  <TextInput
                    placeholder="example@email.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor={theme.textTertiary}
                    className="flex-1 py-4 text-base"
                    style={{ color: theme.text }}
                  />
                </View>
              </View>

              {/* Send Reset Link Button */}
              <Pressable
                onPress={handleSendReset}
                disabled={isLoading || !email}
                style={{ backgroundColor: theme.primary }}
                className="rounded-2xl py-4 items-center justify-center"
              >
                <Text className="text-white font-semibold text-lg">
                  {isLoading ? 'Sending...' : 'Send Reset Link ▶'}
                </Text>
              </Pressable>

              {/* Sign In Link */}
              <View className="flex-row items-center justify-center gap-1">
                <Text
                  className="text-sm"
                  style={{ color: theme.textSecondary }}
                >
                  Remember password?
                </Text>
                <Pressable onPress={() => router.back()}>
                  <Text
                    className="text-sm font-semibold"
                    style={{ color: theme.accent }}
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            /* Success State */
            <View className="gap-4 items-center">
              <View
                className="w-16 h-16 rounded-full items-center justify-center"
                style={{ backgroundColor: theme.accent }}
              >
                {/* Checkmark icon - TODO: Replace with checkmark icon asset */}
                <Icon name="SUCCESS" size="XLARGE" />
              </View>
              <Text
                className="text-lg font-semibold text-center"
                style={{ color: theme.text }}
              >
                Email Sent!
              </Text>
              <Text
                className="text-sm text-center leading-5"
                style={{ color: theme.textSecondary }}
              >
                Check your email for instructions to reset your password.
              </Text>

              <Pressable
                onPress={() => router.push('/auth/login')}
                style={{ backgroundColor: theme.primary }}
                className="rounded-2xl py-3 px-8 items-center justify-center mt-4"
              >
                <Text className="text-white font-semibold">Back to Login</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
