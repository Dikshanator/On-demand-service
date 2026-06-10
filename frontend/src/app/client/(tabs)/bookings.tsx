import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface Booking {
  id: string;
  serviceType: string;
  providerName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  providerImage: string;
}

export default function BookingsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  // TODO: Fetch bookings from API
  const bookings: Booking[] = [
    {
      id: '1',
      serviceType: 'Electrical Repair',
      providerName: 'Suman Thapa',
      date: 'Mon, 22 Jun 2026',
      time: '11:00 AM',
      status: 'upcoming',
      price: 4500,
      providerImage: 'https://via.placeholder.com/60',
    },
    {
      id: '2',
      serviceType: 'Plumbing Service',
      providerName: 'Rita Gurung',
      date: 'Sun, 21 Jun 2026',
      time: '2:30 PM',
      status: 'completed',
      price: 1200,
      providerImage: 'https://via.placeholder.com/60',
    },
  ];

  const filteredBookings = bookings.filter((b) => b.status === selectedTab);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    tabsContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      paddingHorizontal: Spacing.three,
      marginBottom: Spacing.three,
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
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    tabTextActive: {
      color: theme.background,
    },
    bookingCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    bookingImage: {
      width: 60,
      height: 60,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
    },
    bookingInfo: {
      flex: 1,
    },
    bookingServiceType: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    bookingProvider: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    bookingDateTime: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    bookingStatus: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      gap: Spacing.one,
    },
    bookingPrice: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.primary,
    },
    bookingStatusBadge: {
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 4,
      backgroundColor: theme.primaryLight,
    },
    bookingStatusText: {
      fontSize: 10,
      fontWeight: '600',
      color: theme.primary,
      textTransform: 'capitalize',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.two,
    },
    emptyText: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    emptySubtext: {
      fontSize: 13,
      color: theme.textSecondary,
    },
  });

  const renderBooking = ({ item }: { item: Booking }) => (
    <Pressable
      style={styles.bookingCard}
      onPress={() => {
        if (item.status === 'upcoming') {
          router.push('/client/live-tracking');
        } else if (item.status === 'completed') {
          router.push('/client/job-completed');
        }
      }}
    >
      <Image source={{ uri: item.providerImage }} style={styles.bookingImage} />
      <View style={styles.bookingInfo}>
        <Text style={styles.bookingServiceType}>{item.serviceType}</Text>
        <Text style={styles.bookingProvider}>{item.providerName}</Text>
        <Text style={styles.bookingDateTime}>
          {item.date} at {item.time}
        </Text>
      </View>
      <View style={styles.bookingStatus}>
        <Text style={styles.bookingPrice}>Rs. {item.price}</Text>
        <View style={styles.bookingStatusBadge}>
          <Text style={styles.bookingStatusText}>{item.status}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['upcoming', 'completed', 'cancelled'] as const).map((tab) => (
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

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <FlatList
          data={filteredBookings}
          renderItem={renderBooking}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="APPLICATION" size="XXXLARGE" style={{ color: theme.textTertiary }} />
          <Text style={styles.emptyText}>No {selectedTab} Bookings</Text>
          <Text style={styles.emptySubtext}>
            {selectedTab === 'upcoming'
              ? 'Book a service to get started'
              : 'Your bookings will appear here'}
          </Text>
        </View>
      )}
    </View>
  );
}
