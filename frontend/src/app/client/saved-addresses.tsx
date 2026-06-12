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
import { Icon } from '@/components/ui/icon';

interface SavedAddress {
  id: string;
  label: string;
  address: string;
  details: string;
  isDefault: boolean;
}

export default function SavedAddressesScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [addresses, setAddresses] = useState<SavedAddress[]>([
    {
      id: '1',
      label: 'Home',
      address: 'Kathmandu, Nepal',
      details: '123 Main St, Apartment 4B',
      isDefault: true,
    },
    {
      id: '2',
      label: 'Office',
      address: 'Thamel, Kathmandu',
      details: '456 Business Ave, Suite 200',
      isDefault: false,
    },
  ]);

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
    addButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addressCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    addressInfo: {
      flex: 1,
    },
    addressLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    addressMain: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    addressDetails: {
      fontSize: 11,
      color: theme.textTertiary,
    },
    defaultBadge: {
      backgroundColor: theme.accent + '20',
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 6,
      marginBottom: Spacing.one,
      alignSelf: 'flex-start',
    },
    defaultBadgeText: {
      fontSize: 10,
      fontWeight: '600',
      color: theme.accent,
    },
    actions: {
      flexDirection: 'row',
      gap: Spacing.one,
    },
    actionButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
    },
    emptyText: {
      fontSize: 14,
      color: theme.textSecondary,
      marginTop: Spacing.two,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Icon name="HOME" size="MEDIUM" style={{ color: theme.text }} />
        </Pressable>
        <Text style={styles.headerTitle}>Saved Addresses</Text>
        <Pressable style={styles.addButton}>
          <Icon name="HOME" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
      </View>

      {/* Addresses List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <View key={address.id} style={styles.addressCard}>
              <View style={styles.addressInfo}>
                {address.isDefault && (
                  <View style={styles.defaultBadge}>
                    <Text style={styles.defaultBadgeText}>Default</Text>
                  </View>
                )}
                <Text style={styles.addressLabel}>{address.label}</Text>
                <Text style={styles.addressMain}>{address.address}</Text>
                <Text style={styles.addressDetails}>{address.details}</Text>
              </View>
              <View style={styles.actions}>
                <Pressable style={styles.actionButton}>
                  <Icon name="USER" size="SMALL" style={{ color: theme.text }} />
                </Pressable>
                <Pressable style={styles.actionButton}>
                  <Icon name="HOME" size="SMALL" style={{ color: theme.text }} />
                </Pressable>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Icon name="HOME" size="XXLARGE" style={{ color: theme.textTertiary }} />
            <Text style={styles.emptyText}>No saved addresses</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
