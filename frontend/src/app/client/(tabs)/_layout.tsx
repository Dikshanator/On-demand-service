import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

export default function TabsLayout() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    tabBarContainer: {
      backgroundColor: theme.backgroundElement,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
    },
    tabBarLabel: {
      fontSize: 11,
      fontWeight: '600',
      marginTop: Spacing.half,
    },
    tabBarInactive: {
      color: theme.textSecondary,
    },
    tabBarActive: {
      color: theme.primary,
    },
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarContainer,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarShowLabel: true,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="HOME"
              size="MEDIUM"
              style={{ color }}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />

      {/* Bookings Tab */}
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="APPLICATION"
              size="MEDIUM"
              style={{ color }}
            />
          ),
          tabBarLabel: 'Bookings',
        }}
      />

      {/* Payments Tab */}
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="APPLICATION"
              size="MEDIUM"
              style={{ color }}
            />
          ),
          tabBarLabel: 'Payments',
        }}
      />

      {/* Notifications Tab */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="NOTIFICATION"
              size="MEDIUM"
              style={{ color }}
            />
          ),
          tabBarLabel: 'Notifications',
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="USER"
              size="MEDIUM"
              style={{ color }}
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}
