import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function BookingConfirmedScreen() {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/client/(tabs)/bookings');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
    },
    successIcon: {
      fontSize: 80,
      marginBottom: Spacing.four,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
      marginBottom: Spacing.two,
    },
    description: {
      fontSize: 14,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: Spacing.four,
      lineHeight: 20,
    },
    button: {
      marginTop: Spacing.three,
    },
  });

  return (
    <View style={styles.container}>
      <Icon name="SUCCESS" size="XXXLARGE" style={{ color: theme.accent, marginBottom: Spacing.four }} />
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.description}>
        Your service request has been confirmed. You will receive a notification once a provider
        accepts your booking.
      </Text>
      <Button
        title="View Booking"
        onPress={() => router.replace('/client/(tabs)/bookings')}
        variant="primary"
      />
    </View>
  );
}
