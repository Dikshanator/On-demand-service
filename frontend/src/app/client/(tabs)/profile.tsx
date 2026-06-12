import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';
import { useAuth } from '@/context/AuthContext';

interface MenuOption {
  id: string;
  icon: string;
  label: string;
  description?: string;
  action?: () => void;
}

export default function ProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { resetAuth } = useAuth();

  // TODO: Fetch user profile data from API
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+977 9800000000',
    image: 'https://via.placeholder.com/100',
    joinedDate: 'Jan 2024',
  };

  const menuOptions: MenuOption[] = [
    {
      id: '1',
      icon: 'USER',
      label: 'Edit Profile',
      description: 'Update your personal information',
      action: () => router.push('/client/edit-profile'),
    },
    {
      id: '2',
      icon: 'HOME',
      label: 'Saved Addresses',
      description: 'Manage your saved locations',
      action: () => router.push('/client/saved-addresses'),
    },
    {
      id: '3',
      icon: 'APPLICATION',
      label: 'Payment Methods',
      description: 'Manage payment options',
      action: () => router.push('/client/payment-methods'),
    },
    {
      id: '4',
      icon: 'NOTIFICATION',
      label: 'My Reviews',
      description: 'View your reviews and ratings',
      action: () => router.push('/client/my-reviews'),
    },
    {
      id: '5',
      icon: 'HOME',
      label: 'Settings',
      description: 'App preferences and notifications',
      action: () => router.push('/client/settings'),
    },
    {
      id: '6',
      icon: 'NOTIFICATION',
      label: 'Help & Support',
      description: 'Get help or contact support',
      action: () => router.push('/client/help-support'),
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.three,
    },
    profileCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.four,
      alignItems: 'center',
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.backgroundSelected,
      marginBottom: Spacing.two,
    },
    profileName: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    profileEmail: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    profilePhone: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.two,
    },
    profileMeta: {
      fontSize: 11,
      color: theme.textTertiary,
    },
    editButton: {
      marginTop: Spacing.two,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.one,
      backgroundColor: theme.primary,
      borderRadius: 8,
    },
    editButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 12,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      marginHorizontal: Spacing.three,
      marginTop: Spacing.three,
    },
    menuOption: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    menuIcon: {
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuInfo: {
      flex: 1,
    },
    menuLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    menuDescription: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    menuArrow: {
      fontSize: 16,
      color: theme.textSecondary,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      gap: Spacing.two,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
      marginTop: Spacing.four,
    },
    logoutButton: {
      paddingVertical: Spacing.two,
      alignItems: 'center',
    },
    logoutButtonText: {
      fontSize: 13,
      color: '#FF0000',
      fontWeight: '600',
    },
  });

  const handleLogout = () => {
    // TODO: API call to logout
    resetAuth();
    router.replace('/auth/login');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Card */}
      <View
        style={{
          paddingHorizontal: Spacing.three,
        }}
      >
        <View style={styles.profileCard}>
          <Image source={{ uri: user.image }} style={styles.profileImage} />
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileEmail}>{user.email}</Text>
          <Text style={styles.profilePhone}>{user.phone}</Text>
          <Text style={styles.profileMeta}>Member since {user.joinedDate}</Text>
          <Pressable
            style={styles.editButton}
            onPress={() => router.push('/client/edit-profile')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </Pressable>
        </View>
      </View>

      {/* Account Settings */}
      <Text style={styles.sectionTitle}>Account</Text>
      {menuOptions.slice(0, 3).map((option) => (
        <Pressable
          key={option.id}
          style={styles.menuOption}
          onPress={option.action}
        >
          <View style={styles.menuIcon}>
            <Icon name={option.icon as any} size="MEDIUM" />
          </View>
          <View style={styles.menuInfo}>
            <Text style={styles.menuLabel}>{option.label}</Text>
            <Text style={styles.menuDescription}>{option.description}</Text>
          </View>
          <Icon name="BACK" size="MEDIUM" style={styles.menuArrow} />
        </Pressable>
      ))}

      {/* More Options */}
      <Text style={styles.sectionTitle}>More</Text>
      {menuOptions.slice(3, 6).map((option) => (
        <Pressable
          key={option.id}
          style={styles.menuOption}
          onPress={option.action}
        >
          <View style={styles.menuIcon}>
            <Icon name={option.icon as any} size="MEDIUM" />
          </View>
          <View style={styles.menuInfo}>
            <Text style={styles.menuLabel}>{option.label}</Text>
            <Text style={styles.menuDescription}>{option.description}</Text>
          </View>
          <Icon name="BACK" size="MEDIUM" style={styles.menuArrow} />
        </Pressable>
      ))}

      {/* Logout */}
      <View style={styles.footer}>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
