import React from 'react';
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

export default function ClientLayout() {
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

      {/* Post Job Request - Modal style */}
      <Stack.Screen
        name="post-job"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Provider Profile */}
      <Stack.Screen
        name="provider/[id]"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Checkout */}
      <Stack.Screen
        name="checkout"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Job Completed */}
      <Stack.Screen
        name="job-completed"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Live Tracking */}
      <Stack.Screen
        name="live-tracking"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Address Selection */}
      <Stack.Screen
        name="select-address"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Browse Services */}
      <Stack.Screen
        name="browse-services"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Service Details */}
      <Stack.Screen
        name="service/[id]"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Map View */}
      <Stack.Screen
        name="map"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Booking Confirmation */}
      <Stack.Screen
        name="booking-confirmed"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Client Profile */}
      <Stack.Screen
        name="profile"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Job Posted Confirmation */}
      <Stack.Screen
        name="job-posted"
        options={{
          presentation: 'card',
        }}
      />

      {/* Edit Profile */}
      <Stack.Screen
        name="edit-profile"
        options={{
          presentation: 'card',
        }}
      />

      {/* Chat List */}
      <Stack.Screen
        name="chat"
        options={{
          presentation: 'card',
        }}
      />

      {/* Chat Detail */}
      <Stack.Screen
        name="chat/[id]"
        options={{
          presentation: 'card',
        }}
      />

      {/* Incoming Call */}
      <Stack.Screen
        name="call/incoming"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Active Call */}
      <Stack.Screen
        name="call/active"
        options={{
          presentation: 'transparentModal',
        }}
      />

      {/* Call Summary */}
      <Stack.Screen
        name="call/summary"
        options={{
          presentation: 'card',
        }}
      />
    </Stack>
  );
}
