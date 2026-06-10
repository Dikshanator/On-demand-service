import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

export default function MapScreen() {
  const theme = useTheme();
  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
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
      paddingHorizontal: Spacing.three,
    },
    mapPlaceholder: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 12,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      gap: Spacing.two,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    description: {
      fontSize: 13,
      color: theme.textSecondary,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: '700', color: theme.text, flex: 1 }}>
          Nearby Providers
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.mapPlaceholder}>
          <Icon name="HOME" size="XXXLARGE" />
          <Text style={styles.title}>Map View</Text>
          <Text style={styles.description}>
            TODO: Integrate with map library (react-native-maps / Leaflet)
          </Text>
        </View>
      </View>
    </View>
  );
}
