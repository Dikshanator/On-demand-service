import React, { useState } from 'react';
import {
  Appearance,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Colors, Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RoleSelectionScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { setUserRole, setAuthStep } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'client' | 'provider' | null>(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const toggleTheme = () => {
    Appearance.setColorScheme(isDark ? 'light' : 'dark');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingTop: Spacing.five,
      paddingHorizontal: Spacing.three,
      alignItems: 'center',
    },
    headerTopRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: Spacing.four,
    },
    themeToggleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.three,
    },
    logoContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.four,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    logo: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    welcomeText: {
      fontSize: 32,
      fontWeight: '700',
      color: isDark ? '#FFFFFF' : theme.text,
      marginBottom: Spacing.two,
      textAlign: 'center',
    },
    subtitleText: {
      fontSize: 16,
      color: isDark ? '#B0B4BA' : theme.textSecondary,
      textAlign: 'center',
      marginBottom: Spacing.five,
      lineHeight: 24,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.four,
      flex: 1,
    },
    choosePathText: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      textAlign: 'center',
    },
    questionText: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: Spacing.four,
    },
    roleCard: {
      padding: Spacing.three,
      borderRadius: 16,
      marginBottom: Spacing.three,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    roleCardActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    roleCardInactive: {
      borderColor: theme.border,
      backgroundColor: theme.backgroundElement,
    },
    roleCardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    roleIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: Spacing.three,
    },
    roleText: {
      flex: 1,
    },
    roleTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    roleDescription: {
      fontSize: 14,
      color: theme.textSecondary,
      lineHeight: 20,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
    },
    disclaimerText: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: Spacing.three,
    },
    wave: {
      height: 60,
      backgroundColor: 'transparent',
      marginVertical: Spacing.three,
    },
    themeToggleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.backgroundElement,
    },
    themeToggleText: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <Pressable
            onPress={toggleTheme}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            style={({ pressed }) => [styles.themeToggleButton, pressed && { opacity: 0.75 }]}
          >
            <Text style={{ color: theme.text, fontSize: 14 }}>{isDark ? '🌙' : '☀️'}</Text>
            <Text style={styles.themeToggleText}>{isDark ? 'Dark' : 'Light'}</Text>
          </Pressable>
        </View>
        <View style={styles.logoContainer}>
          <Text style={{ fontSize: 40 }}>🏠</Text>
        </View>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subtitleText}>
          Reliable local services for every home and business across Nepal.
        </Text>
      </View>

      <View style={styles.wave} />

      <View style={styles.content}>
        <Text style={styles.choosePathText}>Choose Your Path</Text>
        <Text style={styles.questionText}>
          Are you looking for service or joining our team?
        </Text>

        <Pressable
          onPress={() => setSelectedRole('client')}
          style={[
            styles.roleCard,
            selectedRole === 'client' ? styles.roleCardActive : styles.roleCardInactive,
          ]}
        >
          <View style={styles.roleCardContent}>
            <View style={styles.roleIcon}>
              <Text style={{ fontSize: 24 }}>👤</Text>
            </View>
            <View style={styles.roleText}>
              <Text style={styles.roleTitle}>I need a Service</Text>
              <Text style={styles.roleDescription}>
                Access top-rated professionals for your home, office, or event maintenance.
              </Text>
            </View>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setSelectedRole('provider')}
          style={[
            styles.roleCard,
            selectedRole === 'provider' ? styles.roleCardActive : styles.roleCardInactive,
          ]}
        >
          <View style={styles.roleCardContent}>
            <View style={styles.roleIcon}>
              <Text style={{ fontSize: 24 }}>💼</Text>
            </View>
            <View style={styles.roleText}>
              <Text style={styles.roleTitle}>I am a Professional</Text>
              <Text style={styles.roleDescription}>
                Join Nepal&apos;s largest service network and grow your business effectively.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={() => {
            if (selectedRole) {
              setUserRole(selectedRole);
              setAuthStep('login');
              router.push('/auth/login');
            }
          }}
          disabled={!selectedRole}
        />
        <Text style={styles.disclaimerText}>
          By continuing, you agree to our Terms of Service
        </Text>
      </View>
    </ScrollView>
  );
}
