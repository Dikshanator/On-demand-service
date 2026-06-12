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

// TODO: Replace icon names with actual image/SVG assets for each service
const SERVICES = [
  { id: 'electrician', name: 'Electrician', iconName: 'ELECTRICIAN' as const },
  { id: 'plumber', name: 'Plumber', iconName: 'PLUMBER' as const },
  { id: 'mechanic', name: 'Mechanic', iconName: 'MECHANIC' as const },
  { id: 'cleaner', name: 'Cleaner', iconName: 'CLEANER' as const },
  { id: 'tutor', name: 'Tutor', iconName: 'TUTOR' as const },
  { id: 'handyman', name: 'Handyman', iconName: 'HANDYMAN' as const },
  { id: 'repair', name: 'Repair Tech', iconName: 'REPAIR_TECH' as const },
];

export default function ProviderRegistrationStep2() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(registrationData.serviceCategory);

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
      marginVertical: Spacing.three,
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
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.background,
    },
    editIcon: {
      fontSize: 20,
    },
    serviceQuestion: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
      marginTop: Spacing.four,
      marginBottom: Spacing.three,
    },
    servicesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: Spacing.three,
    },
    serviceCard: {
      width: '47%',
      aspectRatio: 1,
      borderRadius: 16,
      padding: Spacing.three,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.border,
      backgroundColor: theme.backgroundElement,
    },
    serviceCardSelected: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    serviceIcon: {
      fontSize: 32,
      marginBottom: Spacing.two,
    },
    serviceName: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      textAlign: 'center',
    },
    serviceCheckmark: {
      position: 'absolute',
      top: Spacing.two,
      right: Spacing.two,
      fontSize: 18,
    },
    note: {
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: Spacing.three,
      fontStyle: 'italic',
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
    },
  });

  const handleNext = () => {
    if (!selectedService) return;
    updateRegistrationData({ serviceCategory: selectedService });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/auth/register/provider/step3');
    }, 500);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Create Account</Text>
        <Text style={styles.stepIndicator}>Step 2 of 4</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <ProgressIndicator currentStep={2} totalSteps={4} />
        </View>

        <Text style={styles.sectionTitle}>Profile & Service Category</Text>
        <Text style={styles.sectionSubtitle}>Set up your provider profile</Text>

        <View style={styles.photoUploadContainer}>
          <Text style={styles.photoIcon}>📷</Text>
          <Text style={styles.photoTitle}>Add Photo</Text>
          <Text style={styles.photoSubtitle}>Tap to upload a profile photo</Text>
          <View style={styles.editButton}>
            <Text style={styles.editIcon}>➕</Text>
          </View>
        </View>

        <Text style={styles.serviceQuestion}>What service do you provide?</Text>

        <View style={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <Pressable
              key={service.id}
              style={[
                styles.serviceCard,
                selectedService === service.id && styles.serviceCardSelected,
              ]}
              onPress={() => setSelectedService(service.id)}
            >
              {selectedService === service.id && (
                <Text style={styles.serviceCheckmark}>✓</Text>
              )}
              {/* Service category icon - TODO: Replace with service-specific icon assets */}
              <Icon name={service.iconName} size="LARGE" />
              <Text style={styles.serviceName}>{service.name}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.note}>You can only register under one category.</Text>
      </View>

      <View style={styles.footer}>
        <Button
          title="Next →"
          onPress={handleNext}
          disabled={!selectedService}
          loading={isLoading}
        />
      </View>
    </ScrollView>
  );
}
