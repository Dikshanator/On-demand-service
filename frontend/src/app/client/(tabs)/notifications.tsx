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

interface Notification {
  id: string;
  type: 'job_match' | 'request_accepted' | 'payment' | 'job_completed' | 'provider_on_way' | 'reminder';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  read: boolean;
  category: 'all' | 'jobs' | 'payments';
}

export default function NotificationsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'all' | 'jobs' | 'payments'>('all');

  // TODO: Fetch notifications from API
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'job_match',
      title: 'New Job Match',
      description: 'A plumber is available for your leaking pipe request in Lalitpur',
      timestamp: '2M AGO',
      icon: 'APPLICATION',
      read: false,
      category: 'jobs',
    },
    {
      id: '2',
      type: 'request_accepted',
      title: 'Request Accepted',
      description:
        'Suman Thapa has accepted your electrician job request. He will arrive by 11:00 AM',
      timestamp: '15M AGO',
      icon: 'SUCCESS',
      read: false,
      category: 'jobs',
    },
    {
      id: '3',
      type: 'payment',
      title: 'Payment Successful',
      description: 'Rs. 1,200 paid to Rita Gurung for cleaning service',
      timestamp: '1H AGO',
      icon: 'NOTIFICATION',
      read: false,
      category: 'payments',
    },
    {
      id: '4',
      type: 'job_completed',
      title: 'Job Completed',
      description: 'Please leave a review for Bijay Shrestha',
      timestamp: 'YESTERDAY, 4:30 PM',
      icon: 'SUCCESS',
      read: true,
      category: 'jobs',
    },
    {
      id: '5',
      type: 'provider_on_way',
      title: 'Provider On The Way',
      description: 'Ramesh Karki is on his way. Estimated arrival: 20 minutes',
      timestamp: 'YESTERDAY, 2:00 PM',
      icon: 'HOME',
      read: true,
      category: 'jobs',
    },
    {
      id: '6',
      type: 'reminder',
      title: 'Upcoming Booking Reminder',
      description: 'Plumbing appointment tomorrow at 9:00 AM with Hari Prasad',
      timestamp: '2 DAYS AGO',
      icon: 'NOTIFICATION',
      read: true,
      category: 'jobs',
    },
  ];

  const filteredNotifications =
    selectedTab === 'all'
      ? notifications
      : notifications.filter((n) => n.category === selectedTab);

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
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
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
    markAllLink: {
      fontSize: 13,
      color: theme.primary,
      fontWeight: '600',
    },
    tabsContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
    },
    tab: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.one,
      borderRadius: 20,
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
    },
    tabActive: {
      backgroundColor: theme.text,
      borderColor: theme.text,
    },
    tabText: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    tabTextActive: {
      color: theme.background,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
    },
    notificationCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    notificationCardUnread: {
      borderLeftWidth: 4,
      borderLeftColor: theme.primary,
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainerJobMatch: {
      backgroundColor: theme.primary,
    },
    iconContainerAccepted: {
      backgroundColor: theme.accent,
    },
    iconContainerPayment: {
      backgroundColor: '#F59E0B',
    },
    notificationContent: {
      flex: 1,
    },
    notificationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: Spacing.one,
    },
    notificationTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      flex: 1,
    },
    notificationTime: {
      fontSize: 11,
      color: theme.textSecondary,
      marginLeft: Spacing.one,
    },
    unreadDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.primary,
      marginLeft: Spacing.one,
    },
    notificationDescription: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 16,
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.two,
    },
    emptyIcon: {
      fontSize: 48,
    },
    emptyTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    emptyDescription: {
      fontSize: 13,
      color: theme.textSecondary,
    },
  });

  const getIconColor = (type: string): string => {
    switch (type) {
      case 'job_match':
        return theme.primary;
      case 'request_accepted':
      case 'job_completed':
        return theme.accent;
      case 'payment':
        return '#F59E0B';
      case 'provider_on_way':
        return theme.primary;
      case 'reminder':
        return theme.textSecondary;
      default:
        return theme.textSecondary;
    }
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <Pressable
      style={[styles.notificationCard, item.read === false && styles.notificationCardUnread]}
      onPress={() => {
        // TODO: Navigate to notification detail or related screen
        if (item.category === 'jobs') {
          router.push('/client/live-tracking');
        }
      }}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: getIconColor(item.type),
          },
        ]}
      >
        <Icon name={item.icon as any} size="MEDIUM" style={{ color: '#FFFFFF' }} />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          {item.read === false && <View style={styles.unreadDot} />}
          <Text style={styles.notificationTime}>{item.timestamp}</Text>
        </View>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.markAllLink}>Mark all read</Text>
        </Pressable>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['all', 'jobs', 'payments'] as const).map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.tabActive]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        <FlatList
          data={filteredNotifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.content}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="NOTIFICATION" size="XXXLARGE" style={{ color: theme.textTertiary }} />
          <Text style={styles.emptyTitle}>No Notifications</Text>
          <Text style={styles.emptyDescription}>
            You're all caught up! Check back soon.
          </Text>
        </View>
      )}
    </View>
  );
}
