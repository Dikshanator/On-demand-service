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

export default function ApplicationSubmittedScreen() {
  const router = useRouter();
  const theme = useTheme();

  // Extract from params or use defaults
  const userName = 'Bijay';

  const isDark = theme.background === '#1A1A2E';

  // TODO: Replace icon names with actual icon assets for each step
  const steps = [
    {
      id: 1,
      title: 'Application Submitted',
      subtitle: 'Completed on Oct 24, 2023',
      status: 'completed',
      iconName: 'SUCCESS' as const,
    },
    {
      id: 2,
      title: 'Document Verification',
      subtitle: 'In progress',
      status: 'progress',
      iconName: 'DOCUMENT' as const,
    },
    {
      id: 3,
      title: 'Account Activation',
      subtitle: 'Pending verification',
      status: 'pending',
      iconName: 'LOCK' as const,
    },
  ];

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return theme.accent; // Teal for completed
      case 'progress':
        return isDark ? '#FB923C' : '#FF9500'; // Orange for in progress
      case 'pending':
        return theme.textTertiary; // Gray for pending
      default:
        return theme.border;
    }
  };

  const getStepBackground = (status) => {
    switch (status) {
      case 'completed':
        return isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(0, 160, 136, 0.1)';
      case 'progress':
        return isDark ? 'rgba(251, 146, 60, 0.1)' : 'rgba(255, 149, 0, 0.1)';
      case 'pending':
        return isDark ? 'rgba(128, 128, 128, 0.1)' : 'rgba(200, 200, 200, 0.1)';
      default:
        return theme.backgroundElement;
    }
  };

  return (
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
          hamroSewa
        </Text>
        <View className="w-8" />
      </View>

      {/* Main Content Card */}
      <View
        className="mx-4 rounded-2xl p-8 mb-8"
        style={{
          backgroundColor: isDark ? theme.backgroundElement : '#FFFFFF',
          borderWidth: 1,
          borderColor: isDark ? theme.border : '#E5E7EB',
        }}
      >
        {/* Application Icon */}
        <View className="items-center mb-8">
          <View
            className="w-28 h-28 rounded-full items-center justify-center mb-6"
            style={{
              backgroundColor: isDark ? '#5A3D2A' : '#FEF3C7',
            }}
          >
            {/* Clipboard/Application icon - TODO: Replace with clipboard+clock icon asset (orange color) */}
            <Icon name="APPLICATION" size="XXXLARGE" />
          </View>

          <Text
            className="text-3xl font-bold text-center mb-2"
            style={{ color: theme.text }}
          >
            Application Submitted!
          </Text>

          <Text
            className="text-base text-center leading-6 mb-6"
            style={{ color: theme.textSecondary }}
          >
            Thank you for joining hamroSewa, {userName}!
          </Text>

          <Text
            className="text-sm text-center leading-5"
            style={{ color: theme.textSecondary }}
          >
            Your application is currently being reviewed by our team. This process typically takes 24-48 hours.
          </Text>
        </View>

        {/* Progress Timeline */}
        <View className="mt-8 gap-0">
          {steps.map((step, index) => (
            <View key={step.id} className="flex-row gap-4 mb-6 last:mb-0">
              {/* Step Circle */}
              <View className="items-center">
                <View
                  className="w-12 h-12 rounded-full items-center justify-center"
                  style={{
                    backgroundColor: getStepBackground(step.status),
                  }}
                >
                  {/* Step status icon - TODO: Replace with status-specific icon assets */}
                  <Icon 
                    name={step.iconName} 
                    size="LARGE"
                    style={{ color: getStepColor(step.status) }}
                  />
                </View>

                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <View
                    className="w-1 flex-1"
                    style={{
                      backgroundColor: isDark ? theme.border : '#E5E7EB',
                      minHeight: 40,
                      marginTop: 8,
                    }}
                  />
                )}
              </View>

              {/* Step Text */}
              <View className="flex-1 justify-center pt-2">
                <Text
                  className="text-base font-semibold"
                  style={{
                    color: step.status === 'pending' ? theme.textTertiary : theme.text,
                  }}
                >
                  {step.title}
                </Text>
                <Text
                  className="text-sm"
                  style={{
                    color: step.status === 'pending' ? theme.textTertiary : theme.textSecondary,
                  }}
                >
                  {step.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* CTA Button */}
        <Pressable
          onPress={() => router.push('/dashboard')}
          style={{ backgroundColor: theme.primary }}
          className="rounded-2xl py-4 items-center justify-center mt-8 mb-6 flex-row gap-2"
        >
          {/* Home icon - TODO: Replace with home icon asset */}
          <Icon name="HOME" size="MEDIUM" style={{ color: 'white' }} />
          <Text className="text-white font-semibold text-base">
            Back to Home
          </Text>
        </Pressable>

        {/* Notification Info */}
        <View
          className="flex-row gap-3 p-4 rounded-lg items-start"
          style={{
            backgroundColor: isDark ? theme.background : '#F3F4F6',
          }}
        >
          {/* Notification bell icon - TODO: Replace with bell icon asset */}
          <Icon name="NOTIFICATION" size="MEDIUM" className="mt-1" />
          <Text
            className="flex-1 text-sm leading-5"
            style={{ color: theme.textSecondary }}
          >
            We will notify you via email and SMS once your account is approved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
