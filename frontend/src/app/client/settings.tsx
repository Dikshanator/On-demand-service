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

interface SettingItem {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'action';
  value?: boolean;
}

export default function SettingsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [settings, setSettings] = useState<SettingItem[]>([
    {
      id: '1',
      title: 'Push Notifications',
      description: 'Get notified about bookings and updates',
      type: 'toggle',
      value: true,
    },
    {
      id: '2',
      title: 'Email Notifications',
      description: 'Receive booking confirmations via email',
      type: 'toggle',
      value: true,
    },
    {
      id: '3',
      title: 'SMS Notifications',
      description: 'Get SMS for important updates',
      type: 'toggle',
      value: false,
    },
    {
      id: '4',
      title: 'Location Services',
      description: 'Allow app to access your location',
      type: 'toggle',
      value: true,
    },
    {
      id: '5',
      title: 'Dark Mode',
      description: 'Use dark theme for the app',
      type: 'toggle',
      value: false,
    },
    {
      id: '6',
      title: 'Language',
      description: 'English',
      type: 'action',
    },
    {
      id: '7',
      title: 'Account Privacy',
      description: 'Manage your privacy settings',
      type: 'action',
    },
    {
      id: '8',
      title: 'Data & Privacy',
      description: 'View data and privacy information',
      type: 'action',
    },
  ]);

  const handleToggle = (id: string) => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id && setting.type === 'toggle'
          ? { ...setting, value: !setting.value }
          : setting
      )
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      backgroundColor: theme.background,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    section: {
      marginTop: Spacing.four,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: '700',
      color: theme.textSecondary,
      textTransform: 'uppercase',
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
    },
    settingItem: {
      backgroundColor: theme.backgroundElement,
      borderTopWidth: 0.5,
      borderTopColor: theme.divider,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingInfo: {
      flex: 1,
    },
    settingTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    settingDesc: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    settingAction: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const notificationSettings = settings.filter(
    (s) => s.id === '1' || s.id === '2' || s.id === '3'
  );
  const permissionSettings = settings.filter((s) => s.id === '4' || s.id === '5');
  const otherSettings = settings.filter(
    (s) => s.id === '6' || s.id === '7' || s.id === '8'
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Icon name="HOME" size="MEDIUM" style={{ color: theme.text }} />
        </Pressable>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Settings */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {notificationSettings.map((setting) => (
            <View key={setting.id} style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>{setting.title}</Text>
                <Text style={styles.settingDesc}>{setting.description}</Text>
              </View>
              {setting.type === 'toggle' && (
                <Switch
                  value={setting.value}
                  onValueChange={() => handleToggle(setting.id)}
                  trackColor={{ false: theme.divider, true: theme.primary + '50' }}
                  thumbColor={setting.value ? theme.primary : theme.textTertiary}
                />
              )}
            </View>
          ))}
        </View>

        {/* Permissions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          {permissionSettings.map((setting) => (
            <View key={setting.id} style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>{setting.title}</Text>
                <Text style={styles.settingDesc}>{setting.description}</Text>
              </View>
              {setting.type === 'toggle' && (
                <Switch
                  value={setting.value}
                  onValueChange={() => handleToggle(setting.id)}
                  trackColor={{ false: theme.divider, true: theme.primary + '50' }}
                  thumbColor={setting.value ? theme.primary : theme.textTertiary}
                />
              )}
            </View>
          ))}
        </View>

        {/* Other Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other</Text>
          {otherSettings.map((setting) => (
            <Pressable key={setting.id} style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>{setting.title}</Text>
                <Text style={styles.settingDesc}>{setting.description}</Text>
              </View>
              {setting.type === 'action' && (
                <Icon name="HOME" size="SMALL" style={{ color: theme.textSecondary }} />
              )}
            </Pressable>
          ))}
        </View>

        {/* Spacing */}
        <View style={{ height: Spacing.four }} />
      </ScrollView>
    </View>
  );
}
