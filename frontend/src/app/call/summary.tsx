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

interface ActionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
}

export default function CallSummaryScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [callQualityRating, setCallQualityRating] = useState<'bad' | 'neutral' | 'good' | null>(null);

  // TODO: Fetch from API
  const callData = {
    name: 'Bijay Shrestha',
    duration: '02:34',
    timestamp: 'Today, 10:15 AM',
  };

  const actionCards: ActionCard[] = [
    {
      id: '1',
      title: 'View Job Request',
      description: 'Review the plumbing task details',
      icon: 'APPLICATION',
      onPress: () => router.push('/provider/(tabs)/jobs'),
    },
    {
      id: '2',
      title: 'Chat with Bijay',
      description: 'Send a message or follow up',
      icon: 'EMAIL',
      onPress: () => router.push('/chat/1'),
    },
    {
      id: '3',
      title: 'Book Again',
      description: 'Schedule another service session',
      icon: 'APPLICATION',
      onPress: () => {},
    },
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
      marginBottom: Spacing.four,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    doneButton: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.primary,
    },
    callInfoCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.four,
      marginBottom: Spacing.four,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
      gap: Spacing.two,
    },
    callerImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.accent,
      position: 'relative',
    },
    verifiedBadge: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.accent,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.backgroundElement,
    },
    callerName: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      marginTop: Spacing.one,
    },
    durationText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: Spacing.two,
    },
    statusBadge: {
      backgroundColor: theme.accentLight,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.accent,
    },
    statusText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.accent,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      marginTop: Spacing.three,
    },
    actionCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      gap: Spacing.two,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    actionIcon: {
      width: 50,
      height: 50,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionContent: {
      flex: 1,
    },
    actionTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    actionDescription: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    ratingContainer: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginVertical: Spacing.three,
      borderWidth: 1,
      borderColor: theme.border,
      gap: Spacing.two,
    },
    ratingLabel: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
    },
    ratingFaces: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: Spacing.two,
    },
    ratingOption: {
      alignItems: 'center',
      gap: Spacing.one,
    },
    ratingButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.border,
    },
    ratingButtonActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    ratingEmoji: {
      fontSize: 28,
    },
    doneButtonContainer: {
      marginTop: Spacing.four,
      marginBottom: Spacing.four,
    },
    doneButtonFull: {
      backgroundColor: theme.primary,
      paddingVertical: Spacing.three,
      borderRadius: 12,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.two,
    },
    doneButtonText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
    },
  });

  const handleDone = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Call Summary</Text>
          <Pressable onPress={handleDone}>
            <Text style={styles.doneButton}>Done</Text>
          </Pressable>
        </View>

        {/* Call Info */}
        <View style={styles.callInfoCard}>
          <View style={styles.callerImage}>
            <Icon name="USER" size="XXLARGE" />
            <View style={styles.verifiedBadge}>
              <Icon name="SUCCESS" size="SMALL" style={{ color: '#06B6D4' }} />
            </View>
          </View>

          <Text style={styles.callerName}>Call with {callData.name}</Text>
          <Text style={styles.durationText}>{callData.duration}</Text>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              <Icon name="SUCCESS" size="SMALL" style={{ color: '#06B6D4' }} /> SECURE CALL ENDED
            </Text>
          </View>
        </View>

        {/* Action Cards */}
        <Text style={styles.sectionTitle}>What next?</Text>
        {actionCards.map((card) => (
          <Pressable
            key={card.id}
            style={styles.actionCard}
            onPress={card.onPress}
          >
            <View style={styles.actionIcon}>
              <Icon name={card.icon as any} size="MEDIUM" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>{card.title}</Text>
              <Text style={styles.actionDescription}>{card.description}</Text>
            </View>
            <Icon name="HOME" size="SMALL" style={{ color: theme.textSecondary }} />
          </Pressable>
        ))}

        {/* Call Quality Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>RATE THE CALL QUALITY</Text>
          <View style={styles.ratingFaces}>
            <Pressable
              style={styles.ratingOption}
              onPress={() => setCallQualityRating('bad')}
            >
              <Pressable
                style={[
                  styles.ratingButton,
                  callQualityRating === 'bad' && styles.ratingButtonActive,
                ]}
              >
                <Text style={styles.ratingEmoji}>☹️</Text>
              </Pressable>
            </Pressable>

            <Pressable
              style={styles.ratingOption}
              onPress={() => setCallQualityRating('neutral')}
            >
              <Pressable
                style={[
                  styles.ratingButton,
                  callQualityRating === 'neutral' && styles.ratingButtonActive,
                ]}
              >
                <Text style={styles.ratingEmoji}>😐</Text>
              </Pressable>
            </Pressable>

            <Pressable
              style={styles.ratingOption}
              onPress={() => setCallQualityRating('good')}
            >
              <Pressable
                style={[
                  styles.ratingButton,
                  callQualityRating === 'good' && styles.ratingButtonActive,
                ]}
              >
                <Icon name="HEART" size="LARGE" style={{ color: '#EC4899' }} />
              </Pressable>
            </Pressable>
          </View>
        </View>

        {/* Done Button */}
        <View style={styles.doneButtonContainer}>
          <Pressable style={styles.doneButtonFull} onPress={handleDone}>
            <Icon name="SUCCESS" size="MEDIUM" style={{ color: '#FFFFFF' }} />
            <Text style={styles.doneButtonText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
