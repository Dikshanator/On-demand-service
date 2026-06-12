import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function EditProfileScreen() {
  const theme = useTheme();
  const router = useRouter();

  // TODO: Fetch user profile data from API
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('+977 9800000000');
  const [address, setAddress] = useState('Kathmandu, Nepal');
  const [bio, setBio] = useState('Love getting things done locally');
  const [isSaving, setIsSaving] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    headerButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    profileImageSection: {
      alignItems: 'center',
      marginBottom: Spacing.four,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: theme.backgroundElement,
      marginBottom: Spacing.two,
    },
    changePhotoButton: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      backgroundColor: theme.primary,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    changePhotoText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    formSection: {
      marginBottom: Spacing.four,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    inputGroup: {
      marginBottom: Spacing.two,
    },
    inputLabel: {
      fontSize: 12,
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
      fontSize: 13,
      color: theme.text,
    },
    inputPlaceholder: {
      color: theme.textSecondary,
    },
    bioInput: {
      minHeight: 80,
      textAlignVertical: 'top',
    },
    counter: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: Spacing.one,
      textAlign: 'right',
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      gap: Spacing.two,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
    },
    cancelButton: {
      paddingVertical: Spacing.two,
      alignItems: 'center',
    },
    cancelButtonText: {
      fontSize: 13,
      color: theme.textSecondary,
      fontWeight: '600',
    },
  });

  const handleSave = () => {
    setIsSaving(true);
    // TODO: API call to update profile
    setTimeout(() => {
      setIsSaving(false);
      router.back();
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Image Section */}
        <View style={styles.profileImageSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <Pressable style={styles.changePhotoButton}>
            <Icon name="NOTIFICATION" size="SMALL" style={{ color: '#FFFFFF' }} />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </Pressable>
        </View>

        {/* Personal Information Section */}
        <View style={styles.content}>
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name *</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
                placeholderTextColor={theme.textSecondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address *</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={theme.textSecondary}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number *</Text>
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone number"
                placeholderTextColor={theme.textSecondary}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Address Section */}
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Address</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Location *</Text>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter your address"
                placeholderTextColor={theme.textSecondary}
              />
            </View>
          </View>

          {/* Bio Section */}
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>About You</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Bio</Text>
              <TextInput
                style={[styles.input, styles.bioInput]}
                value={bio}
                onChangeText={setBio}
                placeholder="Tell us about yourself (optional)"
                placeholderTextColor={theme.textSecondary}
                multiline
                maxLength={300}
              />
              <Text style={styles.counter}>{bio.length}/300</Text>
            </View>
          </View>

          {/* Information Box */}
          <View
            style={{
              backgroundColor: theme.backgroundElement,
              borderRadius: 12,
              padding: Spacing.three,
              marginBottom: Spacing.four,
              borderLeftWidth: 4,
              borderLeftColor: theme.primary,
            }}
          >
            <Text style={{ fontSize: 12, color: theme.textSecondary, lineHeight: 18 }}>
              Keep your profile information up-to-date to help service providers better understand your needs and communicate with you effectively.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title={isSaving ? 'Saving...' : 'Save Changes'}
          onPress={handleSave}
          variant="primary"
        />
        <Pressable style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}
