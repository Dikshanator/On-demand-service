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

export default function ProviderRegistrationStep4() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData, setAuthStep } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [hasCertificate, setHasCertificate] = useState(!!registrationData.trainingCertificate);
  const [hasVideo, setHasVideo] = useState(!!registrationData.introVideo);
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
      marginBottom: Spacing.three,
    },
    documentSection: {
      marginBottom: Spacing.four,
    },
    documentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: Spacing.two,
    },
    documentTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
    },
    requiredTag: {
      backgroundColor: '#FF6B6B',
      color: '#FFFFFF',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 4,
      fontSize: 10,
      fontWeight: '700',
    },
    optionalTag: {
      backgroundColor: theme.textSecondary,
      color: '#FFFFFF',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 4,
      fontSize: 10,
      fontWeight: '700',
    },
    documentDescription: {
      fontSize: 13,
      color: theme.textSecondary,
      marginBottom: Spacing.two,
      lineHeight: 18,
    },
    uploadBox: {
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.border,
      borderRadius: 16,
      paddingVertical: Spacing.four,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.two,
    },
    uploadIcon: {
      fontSize: 40,
      marginBottom: Spacing.one,
    },
    uploadTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    uploadSubtitle: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'center',
    },
    note: {
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: Spacing.one,
      fontStyle: 'italic',
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
      fontSize: 13,
      lineHeight: 18,
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
    footerNote: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: Spacing.two,
      fontStyle: 'italic',
    },
  });

  const handleSubmit = () => {
    if (!hasCertificate || !termsAgreed) return;
    updateRegistrationData({ termsAgreed });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep('authenticated');
      router.push('/dashboard');
    }, 1500);
  };

  const canSubmit = hasCertificate && termsAgreed;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.stepIndicator}>Step 4 of 4</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <ProgressIndicator currentStep={4} totalSteps={4} />
        </View>

        <Text style={styles.sectionTitle}>Professional Documents</Text>
        <Text style={styles.sectionSubtitle}>
          Show clients your skills and qualifications
        </Text>

        <View style={styles.documentSection}>
          <View style={styles.documentHeader}>
            <Text style={styles.documentTitle}>Training Certificate</Text>
            <Text style={styles.requiredTag}>REQUIRED</Text>
          </View>
          <Text style={styles.documentDescription}>
            Upload trade certificate, vocational training document, or any official skill certification.
          </Text>
          <Pressable
            style={styles.uploadBox}
            onPress={() => setHasCertificate(!hasCertificate)}
          >
            <Text style={styles.uploadIcon}>📄</Text>
            <Text style={styles.uploadTitle}>Tap to upload certificate</Text>
            <Text style={styles.uploadSubtitle}>
              {hasCertificate ? 'Certificate uploaded ✓' : 'Choose file'}
            </Text>
          </Pressable>
          <Text style={styles.note}>
            Users without a formal certificate can upload other proof of training or skill.
          </Text>
        </View>

        <View style={styles.documentSection}>
          <View style={styles.documentHeader}>
            <Text style={styles.documentTitle}>Introduction Video</Text>
            <Text style={styles.optionalTag}>OPTIONAL</Text>
          </View>
          <Text style={styles.documentDescription}>
            A 30-60 second intro video helps you stand out.
          </Text>
          <Pressable
            style={styles.uploadBox}
            onPress={() => setHasVideo(!hasVideo)}
          >
            <Text style={styles.uploadIcon}>🎥</Text>
            <Text style={styles.uploadTitle}>Upload Intro Video</Text>
            <Text style={styles.uploadSubtitle}>
              {hasVideo ? 'Video uploaded ✓' : 'Choose file'}
            </Text>
          </Pressable>
          <Text style={styles.note}>Max 50MB, MP4 format.</Text>
        </View>

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
          title="Submit Application →"
          onPress={handleSubmit}
          disabled={!canSubmit}
          loading={isLoading}
        />
        <Text style={styles.footerNote}>
          Your profile will be reviewed within 24-48 hours.
        </Text>
      </View>
    </ScrollView>
  );
}
