import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
}

export default function PostJobScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('electrician');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

  const categories: ServiceCategory[] = [
    { id: 'electrician', name: 'Electrician', icon: 'ELECTRICIAN' },
    { id: 'plumber', name: 'Plumber', icon: 'PLUMBER' },
    { id: 'mechanic', name: 'Mechanic', icon: 'MECHANIC' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
      gap: Spacing.two,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      flex: 1,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    sectionLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: Spacing.two,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    categoryContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.four,
    },
    categoryButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: Spacing.one,
      paddingVertical: Spacing.two,
      paddingHorizontal: Spacing.three,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.border,
      backgroundColor: theme.backgroundElement,
    },
    categoryButtonActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    categoryButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    categoryButtonTextActive: {
      color: theme.primary,
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    input: {
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      fontSize: 14,
      color: theme.text,
      marginBottom: Spacing.three,
    },
    descriptionInput: {
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      fontSize: 14,
      color: theme.text,
      minHeight: 120,
      textAlignVertical: 'top',
      marginBottom: Spacing.one,
    },
    characterCount: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'right',
      marginBottom: Spacing.three,
    },
    photoContainer: {
      marginBottom: Spacing.three,
    },
    photoGrid: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.two,
    },
    photoBox: {
      flex: 1,
      aspectRatio: 1,
      borderRadius: 12,
      backgroundColor: theme.backgroundElement,
      borderWidth: 2,
      borderColor: theme.border,
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
    },
    photoBoxFilled: {
      borderStyle: 'solid',
    },
    photoBoxText: {
      fontSize: 32,
      marginBottom: Spacing.one,
    },
    photoBoxLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    photoNote: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.three,
    },
    helperText: {
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: Spacing.one,
      marginBottom: Spacing.three,
    },
    linkText: {
      color: theme.primary,
      fontWeight: '600',
    },
    infoBox: {
      backgroundColor: theme.backgroundElement,
      borderLeftWidth: 4,
      borderLeftColor: theme.primary,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      marginBottom: Spacing.four,
      borderRadius: 8,
    },
    infoText: {
      fontSize: 13,
      color: theme.textSecondary,
      lineHeight: 18,
    },
    budgetInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.two,
      marginBottom: Spacing.three,
    },
    budgetPrefix: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.textSecondary,
      marginRight: Spacing.one,
    },
    budgetInput: {
      flex: 1,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.two,
      fontSize: 14,
      color: theme.text,
    },
  });

  const handleAddPhoto = () => {
    if (photos.length < 3) {
      setPhotos([...photos, `photo_${photos.length}`]);
    }
  };

  const handleSubmit = () => {
    // TODO: API integration for job submission
    router.push('/client/job-posted');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Icon name="BACK" size="MEDIUM" />
          </Pressable>
          <Text style={styles.headerTitle}>Post a Job Request</Text>
        </View>

        <View style={styles.content}>
          {/* Service Category */}
          <Text style={styles.sectionLabel}>Service Category</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon as any} size="MEDIUM" />
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.id &&
                      styles.categoryButtonTextActive,
                  ]}
                >
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Job Title */}
          <Text style={styles.sectionLabel}>Job Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Fix electrical wiring in bedroom"
            placeholderTextColor={theme.textSecondary}
            value={jobTitle}
            onChangeText={setJobTitle}
          />

          {/* Description */}
          <Text style={styles.sectionLabel}>Describe Your Problem</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe the issue in detail..."
            placeholderTextColor={theme.textSecondary}
            value={description}
            onChangeText={setDescription}
            maxLength={500}
            multiline
          />
          <Text style={styles.characterCount}>{description.length}/500</Text>

          {/* Photos */}
          <Text style={styles.sectionLabel}>Attach Photos (Optional)</Text>
          <View style={styles.photoGrid}>
            {[0, 1, 2].map((index) => (
              <Pressable
                key={index}
                style={[
                  styles.photoBox,
                  photos.length > index && styles.photoBoxFilled,
                ]}
                onPress={handleAddPhoto}
              >
                {photos.length > index ? (
                  <Text>{photos[index]}</Text>
                ) : (
                  <>
                    {index === 0 ? (
                      <>
                        <Icon name="CAMERA" size="XLARGE" />
                        <Text style={styles.photoBoxLabel}>Add Photo</Text>
                      </>
                    ) : (
                      <Icon name="CAMERA" size="LARGE" />
                    )}
                  </>
                )}
              </Pressable>
            ))}
          </View>
          <Text style={styles.photoNote}>Max 3 photos allowed</Text>

          {/* Location */}
          <Text style={styles.sectionLabel}>Service Location</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: theme.backgroundElement,
              borderWidth: 1,
              borderColor: theme.border,
              borderRadius: 12,
              paddingHorizontal: Spacing.three,
              marginBottom: Spacing.two,
            }}
          >
            <Icon name="HOME" size="MEDIUM" />
            <TextInput
              style={{
                flex: 1,
                paddingHorizontal: Spacing.two,
                paddingVertical: Spacing.two,
                fontSize: 14,
                color: theme.text,
              }}
              placeholder="Enter your address"
              placeholderTextColor={theme.textSecondary}
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <Pressable style={{ marginBottom: Spacing.three }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.one }}>
              <Icon name="HOME" size="MEDIUM" style={{ color: theme.primary }} />
              <Text style={{ color: theme.primary, fontWeight: '600' }}>
                Use Current Location
              </Text>
            </View>
          </Pressable>

          {/* Budget */}
          <Text style={styles.sectionLabel}>Estimated Budget (Optional)</Text>
          <View style={styles.budgetInputContainer}>
            <Text style={styles.budgetPrefix}>Rs.</Text>
            <TextInput
              style={styles.budgetInput}
              placeholder="0.00"
              placeholderTextColor={theme.textSecondary}
              value={budget}
              onChangeText={setBudget}
              keyboardType="decimal-pad"
            />
          </View>
          <Text style={styles.helperText}>
            Leave empty to receive open quotations from providers
          </Text>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Service providers in your area will be notified
            </Text>
          </View>

          {/* Submit Button */}
          <Button
            title="Submit Request"
            onPress={handleSubmit}
            variant="primary"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
