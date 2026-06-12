import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function ServiceDetailScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
    },
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
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
    content: {
      gap: Spacing.three,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
    },
    description: {
      fontSize: 13,
      color: theme.textSecondary,
      textAlign: 'center',
    },
    button: {
      marginTop: Spacing.three,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: '700', color: theme.text, flex: 1 }}>
          Service Details
        </Text>
      </View>
      <View style={styles.content}>
        <Icon name="APPLICATION" size="XXXLARGE" />
        <Text style={styles.title}>Service #{id}</Text>
        <Text style={styles.description}>
          TODO: Implement service detail screen with providers list and booking options
        </Text>
        <Button
          title="Browse Providers"
          onPress={() => router.back()}
          variant="primary"
        />
      </View>
    </View>
  );
}
