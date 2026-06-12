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

interface Job {
  id: string;
  title: string;
  clientName: string;
  location: string;
  time: string;
  amount: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
  date: string;
}

const getDaysOfWeek = () => {
  const today = new Date();
  const days = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    const dayNum = date.getDate();
    days.push({
      name: dayName,
      date: dayNum,
      fullDate: date.toISOString().split('T')[0],
      isToday: i === 0,
    });
  }
  return days;
};

export default function ProviderJobsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(getDaysOfWeek()[0].fullDate);

  const days = getDaysOfWeek();

  // TODO: Fetch from API based on selectedDate
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Appliance Repair',
      clientName: 'Deepak Thapa',
      location: 'Kathmandu',
      time: '7:00 AM - 8:45 AM',
      amount: 750,
      status: 'COMPLETED',
      date: days[0].fullDate,
    },
    {
      id: '2',
      title: 'Electrical Repair',
      clientName: 'Ram Sharma',
      location: 'Kathmandu',
      time: '9:00 AM - 11:00 AM',
      amount: 1200,
      status: 'IN_PROGRESS',
      date: days[0].fullDate,
    },
    {
      id: '3',
      title: 'Plumbing Fix',
      clientName: 'Sita Rai',
      location: 'Lalitpur',
      time: '11:30 AM',
      amount: 800,
      status: 'UPCOMING',
      date: days[0].fullDate,
    },
    {
      id: '4',
      title: 'AC Repair',
      clientName: 'Bikash Maharjan',
      location: 'Bhaktapur',
      time: '2:00 PM',
      amount: 1200,
      status: 'UPCOMING',
      date: days[0].fullDate,
    },
    {
      id: '5',
      title: 'Home Cleaning',
      clientName: 'Priya Shrestha',
      location: 'Kathmandu',
      time: '4:30 PM',
      amount: 900,
      status: 'UPCOMING',
      date: days[0].fullDate,
    },
  ];

  const todayStats = {
    jobs: 3,
    earnings: 3200,
    hours: 6.5,
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
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    scheduleButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notificationBar: {
      backgroundColor: theme.primary,
      padding: Spacing.two,
      borderRadius: 8,
      marginBottom: Spacing.three,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    notificationIcon: {
      color: '#FFFFFF',
    },
    notificationText: {
      flex: 1,
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    closeButton: {
      padding: Spacing.half,
    },
    closeButtonIcon: {
      color: '#FFFFFF',
    },
    weekDaysContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.three,
      paddingBottom: Spacing.two,
    },
    dayButton: {
      minWidth: 60,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 12,
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      alignItems: 'center',
    },
    dayButtonActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    dayName: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    dayNameActive: {
      color: '#FFFFFF',
    },
    dayNumber: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
    },
    dayNumberActive: {
      color: '#FFFFFF',
    },
    statsContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.three,
    },
    statCard: {
      flex: 1,
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 11,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.half,
    },
    statValue: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    jobsList: {
      marginBottom: Spacing.four,
    },
    timelineContainer: {
      paddingLeft: Spacing.three,
      gap: Spacing.one,
    },
    timelineItem: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.three,
    },
    timelineDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginTop: Spacing.one,
    },
    timelineContent: {
      flex: 1,
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
    },
    jobCard: {
      marginBottom: 0,
    },
    statusBadge: {
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.half,
      borderRadius: 6,
      marginBottom: Spacing.one,
      alignSelf: 'flex-start',
    },
    statusBadgeCompleted: {
      backgroundColor: theme.accentLight,
    },
    statusBadgeInProgress: {
      backgroundColor: theme.primaryLight,
    },
    statusBadgeUpcoming: {
      backgroundColor: theme.backgroundSelected,
    },
    statusText: {
      fontSize: 11,
      fontWeight: '600',
    },
    statusTextCompleted: {
      color: theme.accent,
    },
    statusTextInProgress: {
      color: theme.primary,
    },
    statusTextUpcoming: {
      color: theme.textSecondary,
    },
    jobTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    jobInfo: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    jobMeta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: Spacing.one,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
    },
    jobAmount: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.primary,
    },
    jobButtons: {
      flexDirection: 'row',
      gap: Spacing.one,
    },
    chatButton: {
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.border,
    },
    chatButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.text,
    },
    navigateButton: {
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 6,
      backgroundColor: theme.primary,
    },
    navigateButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.two,
    },
    emptyTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    emptyDescription: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    availabilityToggle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.accentLight,
      padding: Spacing.two,
      borderRadius: 8,
      marginTop: Spacing.two,
    },
    availabilityText: {
      fontSize: 12,
      color: theme.accent,
      fontWeight: '600',
    },
    availabilityToggleSwitch: {
      width: 40,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.accent,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: 2,
    },
    availabilityToggleDot: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
    },
  });

  const getTimelineDotColor = (status: string): string => {
    switch (status) {
      case 'COMPLETED':
        return theme.accent;
      case 'IN_PROGRESS':
        return theme.primary;
      default:
        return theme.textSecondary;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Schedule</Text>
          <Pressable style={styles.scheduleButton}>
            <Icon name="APPLICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Notification Banner */}
        <View style={styles.notificationBar}>
          <Icon name="NOTIFICATION" size="MEDIUM" style={styles.notificationIcon} />
          <Text style={styles.notificationText}>
            New job assigned – AC Repair at 5:00 PM
          </Text>
          <Pressable style={styles.closeButton}>
            <Text style={styles.closeButtonIcon}>✕</Text>
          </Pressable>
        </View>

        {/* Week Days Selector */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.weekDaysContainer}
          contentContainerStyle={{ paddingRight: Spacing.three }}
        >
          {days.map((day) => (
            <Pressable
              key={day.fullDate}
              style={[
                styles.dayButton,
                selectedDate === day.fullDate && styles.dayButtonActive,
              ]}
              onPress={() => setSelectedDate(day.fullDate)}
            >
              <Text
                style={[
                  styles.dayName,
                  selectedDate === day.fullDate && styles.dayNameActive,
                ]}
              >
                {day.name}
              </Text>
              <Text
                style={[
                  styles.dayNumber,
                  selectedDate === day.fullDate && styles.dayNumberActive,
                ]}
              >
                {day.date}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Today&apos;s Jobs</Text>
            <Text style={styles.statValue}>{todayStats.jobs}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Today&apos;s Earnings</Text>
            <Text style={styles.statValue}>Rs.{(todayStats.earnings / 1000).toFixed(1)}k</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Work Hours</Text>
            <Text style={styles.statValue}>{todayStats.hours} hrs</Text>
          </View>
        </View>

        {/* Jobs Timeline */}
        {jobs.length > 0 ? (
          <View style={styles.jobsList}>
            <View style={styles.timelineContainer}>
              {jobs.map((job) => (
                <View key={job.id} style={styles.timelineItem}>
                  <View
                    style={[
                      styles.timelineDot,
                      { backgroundColor: getTimelineDotColor(job.status) },
                    ]}
                  />
                  <View style={styles.timelineContent}>
                    <View
                      style={[
                        styles.statusBadge,
                        job.status === 'COMPLETED' && styles.statusBadgeCompleted,
                        job.status === 'IN_PROGRESS' && styles.statusBadgeInProgress,
                        job.status === 'UPCOMING' && styles.statusBadgeUpcoming,
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusText,
                          job.status === 'COMPLETED' && styles.statusTextCompleted,
                          job.status === 'IN_PROGRESS' && styles.statusTextInProgress,
                          job.status === 'UPCOMING' && styles.statusTextUpcoming,
                        ]}
                      >
                        {job.status}
                      </Text>
                    </View>
                    <Text style={styles.jobTitle}>{job.title}</Text>
                    <Text style={styles.jobInfo}>
                      {job.clientName} • {job.location}
                    </Text>
                    <Text style={styles.jobInfo}>{job.time}</Text>
                    <View style={styles.jobMeta}>
                      <Text style={styles.jobAmount}>Rs. {job.amount}</Text>
                      <View style={styles.jobButtons}>
                        <Pressable
                          style={styles.chatButton}
                          onPress={() => router.push({
                            pathname: '/provider/chat/[id]',
                            params: { id: job.clientName, clientName: job.clientName },
                          })}
                        >
                          <Text style={styles.chatButtonText}>Chat</Text>
                        </Pressable>
                        <Pressable
                          style={styles.navigateButton}
                          onPress={() => router.push({
                            pathname: '/provider/call/active',
                            params: { clientName: job.clientName },
                          })}
                        >
                          <Text style={styles.navigateButtonText}>Call</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <Text style={styles.emptyDescription}>No more jobs assigned for today</Text>

            {/* Availability Toggle */}
            <View style={styles.availabilityToggle}>
              <Text style={styles.availabilityText}>
                Available for new jobs
              </Text>
              <View style={styles.availabilityToggleSwitch}>
                <View style={styles.availabilityToggleDot} />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Icon name="APPLICATION" size="XXLARGE" style={{ color: theme.textTertiary }} />
            <Text style={styles.emptyTitle}>No Jobs Today</Text>
            <Text style={styles.emptyDescription}>
              You&apos;re all set! Check back later for new opportunities.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
