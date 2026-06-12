import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface Address {
  id: string;
  type: string;
  address: string;
  default: boolean;
}

export default function SelectAddressScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState('1');

  const addresses: Address[] = [
    {
      id: '1',
      type: 'Home',
      address: 'House #42, Mahadev Marg, Kathmandu',
      default: true,
    },
    {
      id: '2',
      type: 'Work',
      address: 'Office 5th Floor, Tech Park, Kathmandu',
      default: false,
    },
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
    headerButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
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
    addressCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      borderWidth: 2,
      borderColor: theme.border,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    addressCardSelected: {
      borderColor: theme.primary,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxSelected: {
      borderColor: theme.primary,
      backgroundColor: theme.primary,
    },
    addressInfo: {
      flex: 1,
    },
    addressType: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    addressText: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      gap: Spacing.two,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={styles.headerTitle}>Select Address</Text>
      </View>

      <FlatList
        data={addresses}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.addressCard,
              selectedAddress === item.id && styles.addressCardSelected,
            ]}
            onPress={() => setSelectedAddress(item.id)}
          >
            <View
              style={[
                styles.checkbox,
                selectedAddress === item.id && styles.checkboxSelected,
              ]}
            >
              {selectedAddress === item.id && (
                <Icon name="SUCCESS" size="SMALL" style={{ color: '#FFFFFF' }} />
              )}
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressType}>{item.type}</Text>
              <Text style={styles.addressText}>{item.address}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.content}
      />

      <View style={styles.footer}>
        <Button
          title="Confirm Address"
          onPress={() => router.back()}
          variant="primary"
        />
      </View>
    </View>
  );
}
