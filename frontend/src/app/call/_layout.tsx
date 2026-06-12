import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

export default function CallLayout() {
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
      {/* Incoming Call Screen */}
      <Stack.Screen
        name="incoming"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Active Call Screen */}
      <Stack.Screen
        name="active"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Call Summary Screen */}
      <Stack.Screen
        name="summary"
        options={{
          presentation: 'card',
        }}
      />
    </Stack>
  );
}
