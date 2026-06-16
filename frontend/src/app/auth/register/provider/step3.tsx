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
import { Input } from '@/components/ui/input';
import { ProgressIndicator } from '@/components/ui/progress-indicator';
import { useAuth } from '@/context/AuthContext';
import { Icon } from '@/components/ui/icon';

const DOCUMENT_TYPES = [
  { id: 'citizenship', label: 'Citizenship' },
  { id: 'passport', label: 'Passport' },
  { id: 'driving', label: 'Driving License' },
];

export default function ProviderRegistrationStep3() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDocType, setSelectedDocType] = useState(registrationData.documentType || 'citizenship');
  const [docNumber, setDocNumber] = useState(registrationData.documentNumber || '');
  const [hasFrontPhoto, setHasFrontPhoto] = useState(!!registrationData.documentFrontPhoto);
  const [hasBackPhoto, setHasBackPhoto] = useState(!!registrationData.documentBackPhoto);
  const [hasSelfie, setHasSelfie] = useState(!!registrationData.selfieWithId);

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
      marginBottom: Spacing.two,
    },
    warningBox: {
      backgroundColor: theme.backgroundElement,
      padding: Spacing.three,
      borderRadius: 12,
      marginBottom: Spacing.four,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    warningText: {
      flex: 1,
      fontSize: 13,
      color: theme.textSecondary,
      lineHeight: 18,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.two,
      marginTop: Spacing.three,
    },
    documentTypeButtons: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.four,
      flexWrap: 'wrap',
    },
    documentTypeButton: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.backgroundElement,
    },
    documentTypeButtonActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primary,
    },
    documentTypeText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    documentTypeTextActive: {
      color: '#FFFFFF',
    },
    uploadBox: {
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.border,
      borderRadius: 16,
      paddingVertical: Spacing.four,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.three,
    },
    uploadIcon: {
      fontSize: 40,
      marginBottom: Spacing.two,
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
    },
    requiredTag: {
      backgroundColor: '#FF6B6B',
      color: '#FFFFFF',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 4,
      fontSize: 10,
      fontWeight: '700',
      marginLeft: Spacing.two,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
    },
  });

  const canContinue = selectedDocType && docNumber && hasFrontPhoto && hasBackPhoto && hasSelfie;

  const handleNext = () => {
    if (!canContinue) return;
    updateRegistrationData({
      documentType: selectedDocType,
      documentNumber: docNumber,
    });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/register/provider/step4');
    }, 500);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.stepIndicator}>Step 3 of 4</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <ProgressIndicator currentStep={3} totalSteps={4} />
        </View>

        <Text style={styles.sectionTitle}>Identity Verification</Text>
        <Text style={styles.sectionSubtitle}>We verify all providers to ensure client safety</Text>

        <View style={styles.warningBox}>
          {/* Lock icon - TODO: Replace with lock icon asset */}
          <Icon name="LOCK" size="LARGE" />
          <Text style={styles.warningText}>
            Documents are encrypted and only used for verification, not shared publicly.
          </Text>
        </View>

        <Text style={styles.label}>Select Document Type</Text>
        <View style={styles.documentTypeButtons}>
          {DOCUMENT_TYPES.map((doc) => (
            <Pressable
              key={doc.id}
              style={[
                styles.documentTypeButton,
                selectedDocType === doc.id && styles.documentTypeButtonActive,
              ]}
              onPress={() => setSelectedDocType(doc.id)}
            >
              <Text
                style={[
                  styles.documentTypeText,
                  selectedDocType === doc.id && styles.documentTypeTextActive,
                ]}
              >
                {doc.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Document Number</Text>
        {/* TODO: Replace with numeric/document number icon asset */}
        <Input
          placeholder="Enter document number"
          value={docNumber}
          onChangeText={setDocNumber}
          icon={<Icon name="DOCUMENT" size="MEDIUM" />}
        />

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.label}>Document Front Photo</Text>
            <Text style={styles.requiredTag}>REQUIRED</Text>
          </View>
          <Pressable style={styles.uploadBox} onPress={() => setHasFrontPhoto(!hasFrontPhoto)}>
            {/* Camera icon - TODO: Replace with camera icon asset */}
            <Icon name="CAMERA" size="XLARGE" />
            <Text style={styles.uploadTitle}>Tap to upload front</Text>
            <Text style={styles.uploadSubtitle}>{hasFrontPhoto ? 'Photo added' : 'Upload document front'}</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.label}>Document Back Photo</Text>
          <Pressable style={styles.uploadBox} onPress={() => setHasBackPhoto(!hasBackPhoto)}>
            {/* Camera icon - TODO: Replace with camera icon asset */}
            <Icon name="CAMERA" size="XLARGE" />
            <Text style={styles.uploadTitle}>Tap to upload back</Text>
            <Text style={styles.uploadSubtitle}>{hasBackPhoto ? 'Photo added' : 'Upload document back'}</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.label}>Photo Holding Your Document</Text>
          <Pressable style={styles.uploadBox} onPress={() => setHasSelfie(!hasSelfie)}>
            {/* User/selfie icon - TODO: Replace with user icon asset */}
            <Icon name="USER" size="XLARGE" />
            <Text style={styles.uploadTitle}>Selfie with ID</Text>
            <Text style={styles.uploadSubtitle}>Ensure your face and ID details are clearly visible</Text>
          </Pressable>
          {hasSelfie && <Text style={{ fontSize: 12, color: theme.accent, marginTop: Spacing.one }}><Icon name="SUCCESS" size="SMALL" style={{ color: theme.accent }} /> Selfie added</Text>}
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Next Step →"
          onPress={handleNext}
          disabled={!canContinue}
          loading={isLoading}
        />
      </View>
    </ScrollView>
  );
}
