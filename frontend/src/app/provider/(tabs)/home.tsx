import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface JobRequest {
  id: string;
  title: string;
  location: string;
  distance: number;
  estimatedPay: number;
  icon: string;
  status: 'new' | 'active';
}

interface ActiveJob {
  id: string;
  title: string;
  clientName: string;
  location: string;
  startTime: string;
  status: 'IN_PROGRESS' | 'UPCOMING' | 'COMPLETED';
  estimatedPay: number;
}

export default function ProviderHomeScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);

  // TODO: Fetch from API
  const providerName = "Bijay";
  const todayEarnings = 1750;
  const weekEarnings = 12400;
  const rating = 4.9;
  const reviewCount = 128;
  const jobsDoneToday = 3;

  const jobRequests: JobRequest[] = [
    {
      id: '1',
      title: 'Electrician Service',
      location: 'Koteshwor',
      distance: 2.4,
      estimatedPay: 800,
      icon: 'APPLICATION',
      status: 'new',
    },
    {
      id: '2',
      title: 'Pipe Leakage Repair',
      location: 'Baneshwor',
      distance: 1.8,
      estimatedPay: 650,
      icon: 'APPLICATION',
      status: 'new',
    },
  ];

  const activeJob: ActiveJob = {
    id: '1',
    title: 'Ceiling Fan Repair',
    clientName: 'Anil J.',
    location: 'Mid-Baneshwor',
    startTime: '10:30 AM',
    status: 'IN_PROGRESS',
    estimatedPay: 500,
  };

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
      marginBottom: Spacing.three,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    profileCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: theme.accent,
    },
    greeting: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    greetingName: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    notificationButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
    },
    availabilityCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },
    availabilityContent: {
      flex: 1,
    },
    availabilityLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.half,
    },
    availabilityStatus: {
      fontSize: 16,
      fontWeight: '700',
      color: isOnline ? theme.accent : theme.error,
    },
    toggleSwitch: {
      width: 50,
      height: 28,
      borderRadius: 14,
      backgroundColor: isOnline ? theme.accent : theme.textTertiary,
      justifyContent: 'center',
      alignItems: isOnline ? 'flex-end' : 'flex-start',
      paddingHorizontal: 2,
    },
    switchDot: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
    },
    earningsCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      borderWidth: 1,
      borderColor: theme.border,
    },
    earningsLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.one,
    },
    earningsAmount: {
      fontSize: 36,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.three,
    },
    earningsRow: {
      flexDirection: 'row',
      gap: Spacing.two,
    },
    earningsSubCard: {
      flex: 1,
      backgroundColor: theme.backgroundSelected,
      borderRadius: 12,
      padding: Spacing.two,
      alignItems: 'center',
    },
    earningsSubLabel: {
      fontSize: 11,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.half,
    },
    earningsSubAmount: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    ratingCard: {
      backgroundColor: theme.primary,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ratingLeft: {
      flex: 1,
    },
    ratingLabel: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.8)',
      fontWeight: '600',
      marginBottom: Spacing.one,
    },
    ratingScore: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    ratingRight: {
      alignItems: 'center',
    },
    starsContainer: {
      flexDirection: 'row',
      gap: Spacing.half,
      marginBottom: Spacing.one,
    },
    reviewCount: {
      fontSize: 12,
      fontWeight: '600',
      color: 'rgba(255,255,255,0.8)',
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    scheduleLink: {
      fontSize: 12,
      color: theme.primary,
      fontWeight: '600',
    },
    activeJobCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      borderWidth: 1,
      borderColor: theme.border,
    },
    activeJobStatus: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
    },
    statusBadge: {
      backgroundColor: theme.accentLight,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.half,
      borderRadius: 8,
    },
    statusBadgeText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.accent,
    },
    jobTime: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '600',
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    jobSubtitle: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.three,
    },
    viewDetailsButton: {
      backgroundColor: theme.backgroundSelected,
      paddingVertical: Spacing.two,
      borderRadius: 12,
      alignItems: 'center',
    },
    viewDetailsText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    newJobRequestsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
      marginBottom: Spacing.two,
    },
    badgeCount: {
      backgroundColor: theme.error,
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 6,
      minWidth: 24,
      alignItems: 'center',
    },
    badgeCountText: {
      fontSize: 11,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    jobRequestCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    jobRequestIcon: {
      width: 50,
      height: 50,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    jobRequestContent: {
      flex: 1,
    },
    jobRequestTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    jobRequestSubtitle: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    jobRequestFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    jobPay: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.accent,
    },
    jobButtons: {
      flexDirection: 'row',
      gap: Spacing.one,
    },
    declineButton: {
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
    },
    declineButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    acceptButton: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      backgroundColor: '#FFA500',
    },
    acceptButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    serviceAreaCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.four,
      borderWidth: 1,
      borderColor: theme.border,
    },
    serviceAreaContent: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.two,
    },
    serviceAreaText: {
      flex: 1,
    },
    serviceAreaLabel: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    serviceAreaLocations: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    updateCoverageButton: {
      backgroundColor: theme.primaryLight,
      paddingVertical: Spacing.two,
      borderRadius: 12,
      alignItems: 'center',
    },
    updateCoverageText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.primary,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.profileCircle}>
              <Icon name="USER" size="LARGE" />
            </View>
            <View>
              <Text style={styles.greeting}>Welcome back,</Text>
              <Text style={styles.greetingName}>{providerName}!</Text>
            </View>
          </View>
          <Pressable style={styles.notificationButton}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Availability Toggle */}
        <View style={styles.availabilityCard}>
          <View style={styles.availabilityContent}>
            <Text style={styles.availabilityLabel}>AVAILABILITY</Text>
            <Text style={styles.availabilityStatus}>
              {isOnline ? 'YOU ARE ONLINE' : 'YOU ARE OFFLINE'}
            </Text>
          </View>
          <Pressable
            style={styles.toggleSwitch}
            onPress={() => setIsOnline(!isOnline)}
          >
            <View style={styles.switchDot} />
          </Pressable>
        </View>

        {/* Earnings Card */}
        <View style={styles.earningsCard}>
          <Text style={styles.earningsLabel}>Today&apos;s Total Earnings</Text>
          <Text style={styles.earningsAmount}>Rs. {todayEarnings.toLocaleString()}</Text>
          <View style={styles.earningsRow}>
            <View style={styles.earningsSubCard}>
              <Text style={styles.earningsSubLabel}>THIS WEEK</Text>
              <Text style={styles.earningsSubAmount}>Rs. {(weekEarnings / 1000).toFixed(1)}k</Text>
            </View>
            <View style={styles.earningsSubCard}>
              <Text style={styles.earningsSubLabel}>JOBS DONE</Text>
              <Text style={styles.earningsSubAmount}>{jobsDoneToday} Today</Text>
            </View>
          </View>
        </View>

        {/* Performance Rating */}
        <View style={styles.ratingCard}>
          <View style={styles.ratingLeft}>
            <Text style={styles.ratingLabel}>Performance Rating</Text>
            <Text style={styles.ratingScore}>{rating}</Text>
          </View>
          <View style={styles.ratingRight}>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Text key={i} style={{ fontSize: 18 }}>
                  ⭐
                </Text>
              ))}
            </View>
            <Text style={styles.reviewCount}>{reviewCount} REVIEWS</Text>
          </View>
        </View>

        {/* Active Job Section */}
        {activeJob && (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Active Job</Text>
              <Pressable onPress={() => router.push('/provider/(tabs)/jobs')}>
                <Text style={styles.scheduleLink}>SCHEDULE</Text>
              </Pressable>
            </View>

            <View style={styles.activeJobCard}>
              <View style={styles.activeJobStatus}>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusBadgeText}>{activeJob.status}</Text>
                </View>
                <Text style={styles.jobTime}>{activeJob.startTime}</Text>
              </View>
              <Text style={styles.jobTitle}>{activeJob.title}</Text>
              <Text style={styles.jobSubtitle}>
                {activeJob.clientName} • {activeJob.location}
              </Text>
              <Pressable style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>VIEW DETAILS →</Text>
              </Pressable>
            </View>
          </>
        )}

        {/* New Job Requests Section */}
        {jobRequests.length > 0 && (
          <>
            <View style={styles.newJobRequestsHeader}>
              <Text style={styles.sectionTitle}>New Job Requests</Text>
              <View style={styles.badgeCount}>
                <Text style={styles.badgeCountText}>{jobRequests.length}</Text>
              </View>
            </View>

            {jobRequests.map((job) => (
              <View key={job.id} style={styles.jobRequestCard}>
                <View style={styles.jobRequestIcon}>
                  <Icon name={job.icon as any} size="MEDIUM" />
                </View>
                <View style={styles.jobRequestContent}>
                  <Text style={styles.jobRequestTitle}>{job.title}</Text>
                  <Text style={styles.jobRequestSubtitle}>
                    {job.distance} km ({job.location})
                  </Text>
                  <View style={styles.jobRequestFooter}>
                    <Text style={styles.jobPay}>EST. PAY</Text>
                    <View style={styles.jobButtons}>
                      <Pressable style={styles.declineButton}>
                        <Text style={styles.declineButtonText}>Decline</Text>
                      </Pressable>
                      <Pressable style={styles.acceptButton}>
                        <Text style={styles.acceptButtonText}>Accept Job</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* Add another job request card */}
            <View style={styles.jobRequestCard}>
              <View style={styles.jobRequestIcon}>
                <Icon name="APPLICATION" size="MEDIUM" />
              </View>
              <View style={styles.jobRequestContent}>
                <Text style={styles.jobRequestTitle}>Pipe Leakage Repair</Text>
                <Text style={styles.jobRequestSubtitle}>
                  1.8 km (Baneshwor)
                </Text>
                <View style={styles.jobRequestFooter}>
                  <Text style={styles.jobPay}>EST. PAY</Text>
                  <View style={styles.jobButtons}>
                    <Pressable style={styles.declineButton}>
                      <Text style={styles.declineButtonText}>Decline</Text>
                    </Pressable>
                    <Pressable style={styles.acceptButton}>
                      <Text style={styles.acceptButtonText}>Accept Job</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}

        {/* Service Area Section */}
        <View style={styles.serviceAreaCard}>
          <View style={styles.serviceAreaContent}>
            <Icon name="HOME" size="XLARGE" />
            <View style={styles.serviceAreaText}>
              <Text style={styles.serviceAreaLabel}>Service Area</Text>
              <Text style={styles.serviceAreaLocations}>
                Koteshwor, Baneshwor, Shantinagar
              </Text>
            </View>
          </View>
          <Pressable style={styles.updateCoverageButton}>
            <Text style={styles.updateCoverageText}>UPDATE COVERAGE</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
