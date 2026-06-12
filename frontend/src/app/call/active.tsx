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

export default function ActiveCallScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  // TODO: Fetch caller info from API
  const caller = {
    name: 'Bijay Shrestha',
    title: 'Master Electrician',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    router.push('/call/summary');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'space-between',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
    },
    backButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.three,
    },
    callerImage: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.accent,
      marginVertical: Spacing.two,
    },
    callerName: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    callerTitle: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.two,
    },
    durationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
      backgroundColor: theme.backgroundElement,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
    },
    durationIcon: {
      color: theme.textSecondary,
    },
    duration: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    statusText: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: '600',
      marginTop: Spacing.two,
    },
    controls: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.four,
      paddingVertical: Spacing.four,
      paddingHorizontal: Spacing.three,
    },
    controlButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    controlButtonActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    controlIcon: {
      color: theme.text,
    },
    controlIconActive: {
      color: '#FFFFFF',
    },
    controlLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
      marginTop: Spacing.one,
      textAlign: 'center',
    },
    controlLabelActive: {
      color: theme.primary,
    },
    footer: {
      alignItems: 'center',
      paddingBottom: Spacing.six,
    },
    endCallButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: theme.error,
      alignItems: 'center',
      justifyContent: 'center',
    },
    endCallIcon: {
      color: '#FFFFFF',
    },
  });

  const ControlButton = ({
    label,
    isActive,
    onPress,
  }: {
    label: string;
    isActive?: boolean;
    onPress: () => void;
  }) => (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.controlButton,
          isActive && styles.controlButtonActive,
        ]}
      >
        <Icon
          name={label === 'Mute' ? 'NOTIFICATION' : label === 'Speaker' ? 'NOTIFICATION' : 'HOME'}
          size="MEDIUM"
          style={[
            styles.controlIcon as any,
            isActive && (styles.controlIconActive as any),
          ]}
        />
      </View>
      <Text
        style={[
          styles.controlLabel,
          isActive && styles.controlLabelActive,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => {}}>
          <Icon name="BACK" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
        <Pressable style={styles.infoButton}>
          <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.callerImage}>
          <Icon name="USER" size="XXLARGE" />
        </View>

        <Text style={styles.callerName}>{caller.name}</Text>
        <Text style={styles.callerTitle}>{caller.title}</Text>

        <View style={styles.durationContainer}>
          <Icon name="NOTIFICATION" size="SMALL" style={styles.durationIcon} />
          <Text style={styles.duration}>{formatTime(callDuration)}</Text>
        </View>

        <Text style={styles.statusText}>Voice call in progress...</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <ControlButton
          label="Mute"
          isActive={isMuted}
          onPress={() => setIsMuted(!isMuted)}
        />
        <ControlButton
          label="Speaker"
          isActive={isSpeaker}
          onPress={() => setIsSpeaker(!isSpeaker)}
        />
        <ControlButton
          label="Keypad"
          onPress={() => {}}
        />
      </View>

      {/* Footer - End Call */}
      <View style={styles.footer}>
        <Pressable
          style={styles.endCallButton}
          onPress={handleEndCall}
        >
          <Icon name="NOTIFICATION" size="XLARGE" style={styles.endCallIcon} />
        </Pressable>
        <Text style={{ ...styles.controlLabel, marginTop: Spacing.two }}>
          End Call
        </Text>
      </View>
    </SafeAreaView>
  );
}
