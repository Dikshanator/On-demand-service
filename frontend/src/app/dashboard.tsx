import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

export default function DashboardScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { userRole, resetAuth } = useAuth();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
    },
    content: {
      alignItems: 'center',
      gap: Spacing.four,
    },
    emoji: {
      fontSize: 64,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
    },
    roleDisplay: {
      fontSize: 14,
      color: theme.primary,
      fontWeight: '600',
      marginTop: Spacing.two,
      backgroundColor: theme.primaryLight,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      borderRadius: 8,
    },
    logoutButton: {
      backgroundColor: theme.primary,
      paddingHorizontal: Spacing.four,
      paddingVertical: Spacing.three,
      borderRadius: 12,
      marginTop: Spacing.four,
    },
    logoutText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  const handleLogout = () => {
    resetAuth();
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>
          {userRole === 'client'
            ? 'Welcome, Client!'
            : 'Welcome, Professional!'}
        </Text>
        <Text style={styles.subtitle}>
          Your account has been successfully created. This is your dashboard.
        </Text>
        <Text style={styles.roleDisplay}>
          Role: {userRole === 'client' ? 'Service Seeker' : 'Service Provider'}
        </Text>
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout & Start Over</Text>
      </Pressable>
    </View>
  );
}
