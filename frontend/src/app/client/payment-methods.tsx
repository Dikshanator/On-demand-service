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

interface PaymentMethod {
  id: string;
  type: 'card' | 'wallet' | 'bank';
  label: string;
  details: string;
  isDefault: boolean;
}

export default function PaymentMethodsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [methods, setMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      label: 'Visa Card',
      details: '**** **** **** 4242',
      isDefault: true,
    },
    {
      id: '2',
      type: 'wallet',
      label: 'Khalti Wallet',
      details: '+977 98XXXXXXXX',
      isDefault: false,
    },
    {
      id: '3',
      type: 'bank',
      label: 'Bank Transfer',
      details: 'Standard Chartered Bank',
      isDefault: false,
    },
  ]);

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case 'card':
        return 'APPLICATION';
      case 'wallet':
        return 'HOME';
      case 'bank':
        return 'USER';
      default:
        return 'NOTIFICATION';
    }
  };

  const getPaymentColor = (type: string) => {
    switch (type) {
      case 'card':
        return '#6366F1';
      case 'wallet':
        return '#EC4899';
      case 'bank':
        return '#3B82F6';
      default:
        return theme.primary;
    }
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
    addButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    methodCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    methodIcon: {
      width: 50,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: Spacing.two,
    },
    methodInfo: {
      flex: 1,
    },
    methodLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    methodDetails: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    defaultBadge: {
      backgroundColor: theme.accent + '20',
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 6,
    },
    defaultBadgeText: {
      fontSize: 10,
      fontWeight: '600',
      color: theme.accent,
    },
    actionButton: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    methodRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
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
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <Pressable style={styles.addButton}>
          <Icon name="HOME" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
      </View>

      {/* Payment Methods List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {methods.length > 0 ? (
          methods.map((method) => (
            <View key={method.id} style={styles.methodCard}>
              <View style={styles.methodRow}>
                <View
                  style={[
                    styles.methodIcon,
                    { backgroundColor: getPaymentColor(method.type) + '20' },
                  ]}
                >
                  <Icon
                    name={getPaymentIcon(method.type) as any}
                    size="MEDIUM"
                    style={{ color: getPaymentColor(method.type) }}
                  />
                </View>
                <View style={styles.methodInfo}>
                  <Text style={styles.methodLabel}>{method.label}</Text>
                  <Text style={styles.methodDetails}>{method.details}</Text>
                </View>
              </View>
              {method.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultBadgeText}>Default</Text>
                </View>
              )}
              <Pressable style={styles.actionButton}>
                <Icon name="HOME" size="SMALL" style={{ color: theme.text }} />
              </Pressable>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Icon name="APPLICATION" size="XXLARGE" style={{ color: theme.textTertiary }} />
            <Text style={styles.emptyText}>No payment methods added</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
