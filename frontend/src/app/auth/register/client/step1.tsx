import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProgressIndicator } from '@/components/ui/progress-indicator';
import { useAuth } from '@/context/AuthContext';

export default function ClientRegistrationStep1() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(registrationData.termsAgreed);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingTop: Spacing.three,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    backButton: {
      padding: Spacing.two,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    stepIndicator: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    content: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    progressContainer: {
      marginBottom: Spacing.four,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    sectionSubtitle: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: Spacing.four,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
      marginTop: Spacing.two,
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: theme.backgroundElement,
      padding: Spacing.three,
      borderRadius: 12,
      marginVertical: Spacing.three,
      borderWidth: 1,
      borderColor: theme.border,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 4,
      marginRight: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2,
    },
    checkboxChecked: {
      backgroundColor: theme.primary,
    },
    checkmark: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 14,
    },
    termsText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 20,
      color: theme.textSecondary,
    },
    termsLink: {
      color: theme.primary,
      fontWeight: '600',
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
    },
    loginLink: {
      marginTop: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.one,
    },
    loginText: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    loginLinkText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: '600',
    },
  });

  const handleNext = () => {
    if (!registrationData.fullName || !registrationData.email || !registrationData.address || !registrationData.password || !termsAgreed) {
      return;
    }
    updateRegistrationData({ termsAgreed });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/register/client/step2');
    }, 500);
  };

  const canContinue = registrationData.fullName && registrationData.email && 
                      registrationData.address && registrationData.password && 
                      registrationData.password === registrationData.confirmPassword &&
                      termsAgreed;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Create Account</Text>
          <Text style={styles.stepIndicator}>Step 1 of 2</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.progressContainer}>
            <ProgressIndicator currentStep={1} totalSteps={2} />
          </View>

          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.sectionSubtitle}>Tell us a little about yourself</Text>

          <Text style={styles.label}>Full Name</Text>
          <Input
            placeholder="Enter your full name"
            value={registrationData.fullName}
            onChangeText={(text) => updateRegistrationData({ fullName: text })}
            icon={<Text style={{ fontSize: 18 }}>👤</Text>}
          />

          <Text style={styles.label}>Email Address</Text>
          <Input
            placeholder="Enter your email address"
            value={registrationData.email}
            onChangeText={(text) => updateRegistrationData({ email: text })}
            icon={<Text style={{ fontSize: 18 }}>✉️</Text>}
            keyboardType="email-address"
          />
          <Text style={{ fontSize: 12, color: theme.textSecondary, marginBottom: Spacing.three }}>
            We&apos;ll send a verification link to this email
          </Text>

          <Text style={styles.label}>Address</Text>
          <Input
            placeholder="Your city or area (e.g. Kathmandu, Lalitpur)"
            value={registrationData.address}
            onChangeText={(text) => updateRegistrationData({ address: text })}
            icon={<Text style={{ fontSize: 18 }}>📍</Text>}
          />

          <Text style={styles.label}>Password</Text>
          <Input
            placeholder="Create a password"
            value={registrationData.password}
            onChangeText={(text) => updateRegistrationData({ password: text })}
            icon={<Text style={{ fontSize: 18 }}>🔒</Text>}
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password</Text>
          <Input
            placeholder="Confirm your password"
            value={registrationData.confirmPassword}
            onChangeText={(text) => updateRegistrationData({ confirmPassword: text })}
            icon={<Text style={{ fontSize: 18 }}>🔒</Text>}
            secureTextEntry
          />

          <Pressable
            style={[styles.termsContainer, termsAgreed && { borderColor: theme.accent }]}
            onPress={() => setTermsAgreed(!termsAgreed)}
          >
            <View style={[styles.checkbox, termsAgreed && styles.checkboxChecked]}>
              {termsAgreed && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Button
            title="Next →"
            onPress={handleNext}
            disabled={!canContinue}
            loading={isLoading}
          />
          <View style={styles.loginLink}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push('/auth/login')}>
              <Text style={styles.loginLinkText}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
