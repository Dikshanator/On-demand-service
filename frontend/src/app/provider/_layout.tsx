import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

export default function ProviderLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      {/* Tab-based navigation for main screens */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* Chat Screen */}
      <Stack.Screen
        name="chat/[id]"
        options={{
          presentation: 'card',
        }}
      />

      {/* Incoming Call Screen */}
      <Stack.Screen
        name="call/incoming"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Active Call Screen */}
      <Stack.Screen
        name="call/active"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Call Summary Screen */}
      <Stack.Screen
        name="call/summary"
        options={{
          presentation: 'card',
        }}
      />

      {/* Job Details */}
      <Stack.Screen
        name="job/[id]"
        options={{
          presentation: 'card',
        }}
      />
    </Stack>
  );
}
