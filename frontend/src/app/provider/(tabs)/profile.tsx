import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface ServiceCategory {
  id: string;
  name: string;
  verified: boolean;
}

export default function ProviderProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // TODO: Fetch from API
  const profile = {
    name: 'Bijay Shrestha',
    title: 'Master Electrician',
    rating: 4.9,
    reviews: 128,
    jobsDone: 342,
    responseTime: '2 min',
    joinDate: 'Jan 2022',
    phone: '+977-9861234567',
    email: 'bijay@hamrosewa.com',
  };

  const serviceCategories: ServiceCategory[] = [
    { id: '1', name: 'Electrical Repair', verified: true },
    { id: '2', name: 'Maintenance', verified: true },
    { id: '3', name: 'Installation', verified: false },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContent: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.three,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    settingsButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.two,
      borderWidth: 3,
      borderColor: theme.accent,
    },
    profileName: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    profileTitle: {
      fontSize: 13,
      color: theme.textSecondary,
      marginBottom: Spacing.two,
    },
    profileStats: {
      flexDirection: 'row',
      gap: Spacing.two,
      width: '100%',
      marginBottom: Spacing.two,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: Spacing.two,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
    },
    statValue: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    statLabel: {
      fontSize: 11,
      color: theme.textSecondary,
      fontWeight: '600',
    },
    editProfileButton: {
      backgroundColor: theme.primary,
      paddingVertical: Spacing.two,
      paddingHorizontal: Spacing.four,
      borderRadius: 12,
      flexDirection: 'row',
      gap: Spacing.one,
      alignItems: 'center',
      justifyContent: 'center',
    },
    editProfileText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    section: {
      marginBottom: Spacing.three,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    sectionContent: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      overflow: 'hidden',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    contactItemLast: {
      borderBottomWidth: 0,
    },
    contactIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactText: {
      flex: 1,
    },
    contactLabel: {
      fontSize: 11,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.half,
    },
    contactValue: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
    },
    categoryCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    categoryCardLast: {
      borderBottomWidth: 0,
    },
    categoryIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryContent: {
      flex: 1,
    },
    categoryName: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    categoryStatus: {
      fontSize: 11,
      color: theme.accent,
      fontWeight: '600',
    },
    categoryStatusUnverified: {
      color: theme.error,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    settingItemLast: {
      borderBottomWidth: 0,
    },
    settingLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
    },
    settingDescription: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: Spacing.half,
    },
    logoutButton: {
      backgroundColor: theme.error,
      paddingVertical: Spacing.two,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: Spacing.three,
      marginBottom: Spacing.four,
    },
    logoutText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
          <Pressable style={styles.settingsButton} onPress={() => {}}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileImage}>
            <Icon name="USER" size="XLARGE" />
          </View>
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileTitle}>{profile.title}</Text>

          {/* Stats */}
          <View style={styles.profileStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{profile.rating}</Text>
              <Text style={styles.statLabel}>Rating <Icon name="STAR" size="MEDIUM" color="#FCD34D" /></Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{profile.reviews}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{profile.jobsDone}</Text>
              <Text style={styles.statLabel}>Jobs Done</Text>
            </View>
          </View>

          <Pressable
            style={styles.editProfileButton}
            onPress={() => {}}
          >
            <Icon name="USER" size="MEDIUM" style={{ color: '#FFFFFF' }} />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </Pressable>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.sectionContent}>
            <View style={styles.contactItem}>
              <View style={styles.contactIcon}>
                <Icon name="HOME" size="MEDIUM" />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>PHONE</Text>
                <Text style={styles.contactValue}>{profile.phone}</Text>
              </View>
            </View>
            <View style={[styles.contactItem, styles.contactItemLast]}>
              <View style={styles.contactIcon}>
                <Icon name="EMAIL" size="MEDIUM" />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>EMAIL</Text>
                <Text style={styles.contactValue}>{profile.email}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Service Categories */}
        <View style={styles.section}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.two }}>
            <Text style={styles.sectionTitle}>Service Categories</Text>
            <Pressable onPress={() => {}}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: theme.primary }}>Manage</Text>
            </Pressable>
          </View>
          <View style={styles.sectionContent}>
            {serviceCategories.map((category, index) => (
              <View
                key={category.id}
                style={[
                  styles.categoryCard,
                  index === serviceCategories.length - 1 && styles.categoryCardLast,
                ]}
              >
                <View style={styles.categoryIcon}>
                  <Icon name="APPLICATION" size="MEDIUM" />
                </View>
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text
                    style={[
                      styles.categoryStatus,
                      !category.verified && styles.categoryStatusUnverified,
                    ]}
                  >
                    {category.verified ? <><Icon name="SUCCESS" size="SMALL" style={{ color: '#10B981' }} /> Verified</> : 'Pending Verification'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.sectionContent}>
            <View style={styles.settingItem}>
              <View>
                <Text style={styles.settingLabel}>Online Status</Text>
                <Text style={styles.settingDescription}>Available for new jobs</Text>
              </View>
              <Switch
                value={isOnline}
                onValueChange={setIsOnline}
                trackColor={{ false: theme.border, true: theme.accent }}
                thumbColor={isOnline ? theme.accent : theme.textSecondary}
              />
            </View>
            <View style={styles.settingItem}>
              <View>
                <Text style={styles.settingLabel}>Notifications</Text>
                <Text style={styles.settingDescription}>New jobs and updates</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: theme.border, true: theme.accent }}
                thumbColor={notificationsEnabled ? theme.accent : theme.textSecondary}
              />
            </View>
            <View style={[styles.settingItem, styles.settingItemLast]}>
              <Pressable onPress={() => {}}>
                <Text style={styles.settingLabel}>Privacy Policy</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <Pressable
          style={styles.logoutButton}
          onPress={() => {
            // TODO: Implement logout
            router.push('/auth/login');
          }}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
