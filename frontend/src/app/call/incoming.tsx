import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

export default function IncomingCallScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [callDuration, setCallDuration] = useState(0);

  // TODO: Fetch caller info from API
  const caller = {
    name: 'Suman Thapa',
    title: 'Master Electrician',
    isOnline: true,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAccept = () => {
    router.push('/call/active');
  };

  const handleDecline = () => {
    router.back();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'space-between',
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingTop: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    closeButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.three,
    },
    badge: {
      backgroundColor: 'rgba(0,160,136,0.2)',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.accent,
    },
    badgeText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.accent,
    },
    callerImage: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 4,
      borderColor: theme.accent,
      marginVertical: Spacing.two,
    },
    callerName: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    callerTitle: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: '600',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.four,
      paddingBottom: Spacing.six,
      paddingHorizontal: Spacing.three,
    },
    actionButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    declineButton: {
      backgroundColor: theme.error,
    },
    acceptButton: {
      backgroundColor: theme.accent,
    },
    actionIcon: {
      color: '#FFFFFF',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={handleDecline}>
          <Icon name="BACK" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
        <Pressable style={styles.infoButton}>
          <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🔒 Secure In-App Call</Text>
        </View>

        <View style={styles.callerImage}>
          <Icon name="USER" size="XXLARGE" />
        </View>

        <Text style={styles.callerName}>{caller.name}</Text>
        <Text style={styles.callerTitle}>{caller.title}</Text>
      </View>

      {/* Footer - Action Buttons */}
      <View style={styles.footer}>
        <Pressable
          style={[styles.actionButton, styles.declineButton]}
          onPress={handleDecline}
        >
          <Icon name="NOTIFICATION" size="XLARGE" style={styles.actionIcon} />
        </Pressable>
        <Pressable
          style={[styles.actionButton, styles.acceptButton]}
          onPress={handleAccept}
        >
          <Icon name="NOTIFICATION" size="XLARGE" style={styles.actionIcon} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
