import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { ProgressIndicator } from '@/components/ui/progress-indicator';
import { useAuth } from '@/context/AuthContext';
import { Icon } from '@/components/ui/icon';
import { authApi } from '@/api/api';
import Toast from 'react-native-toast-message';

export default function ClientRegistrationStep2() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData, setAuthStep } = useAuth();
  const [hasPhoto, setHasPhoto] = useState(!!registrationData.profilePhoto);
  const [termsAgreed, setTermsAgreed] = useState(registrationData.termsAgreed);
  const [isLoading, setIsLoading] = useState(false);
  const { resetAuth } = useAuth();

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
    photoUploadContainer: {
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.border,
      borderRadius: 16,
      paddingVertical: Spacing.five,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: Spacing.four,
    },
    photoUploadContent: {
      alignItems: 'center',
    },
    photoIcon: {
      fontSize: 48,
      marginBottom: Spacing.two,
    },
    photoTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    photoSubtitle: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    editButton: {
      position: 'absolute',
      bottom: -Spacing.one,
      right: -Spacing.one,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accent,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.background,
    },
    editIcon: {
      fontSize: 20,
      color: '#FFFFFF',
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
  });

  const handleCreateAccount = async () => {
    updateRegistrationData({ termsAgreed });

    try {
      const payload = {
        name: registrationData.fullName,
        email: registrationData.email,
        phone: registrationData.phone,
        address: registrationData.address,
        password: registrationData.password,
        profile_image: registrationData.profilePhoto || "",
        role: "CLIENT",
      };
      setIsLoading(true);

      const response = await authApi.register(payload);
      
      Toast.show({
        type: "success",
        text1: "Account created successfully!",
        text2: response.result?.message,
        position: "bottom",
      });
      router.push('/auth/account-created');

    } catch (error: any) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Registration failed",
        text2: error.response?.data?.message || error.message || "An error occurred",
        position: "bottom",
      });
    } finally {
      setIsLoading(false);
      resetAuth();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Registration</Text>
        <Text style={styles.stepIndicator}>Step 1 of 3</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <ProgressIndicator currentStep={2} totalSteps={2} />
        </View>

        <Text style={styles.sectionTitle}>Profile Setup</Text>
        <Text style={styles.sectionSubtitle}>
          Add a profile photo to complete your account
        </Text>

        <Pressable style={styles.photoUploadContainer}>
          <View style={styles.photoUploadContent}>
            {/* Camera icon - TODO: Replace with camera icon asset */}
            <Icon name="CAMERA" size="XLARGE" />
            <Text style={styles.photoTitle}>Add Photo</Text>
            <Text style={styles.photoSubtitle}>Tap to upload a profile photo</Text>
          </View>
          {hasPhoto && (
            <View style={styles.editButton}>
              <Text style={styles.editIcon}>✏️</Text>
            </View>
          )}
        </Pressable>

        <Text style={{ fontSize: 12, color: theme.textSecondary, textAlign: 'center', marginVertical: Spacing.two }}>
          Tap to upload a profile photo
        </Text>
        <Text style={{ fontSize: 12, color: theme.textSecondary, textAlign: 'center' }}>
          Optional but recommended
        </Text>

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
          title="Create Account →"
          onPress={handleCreateAccount}
          disabled={!termsAgreed}
          loading={isLoading}
        />
      </View>
    </ScrollView>
  );
}
