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

interface Payout {
  id: string;
  title: string;
  amount: number;
  date: string;
  time: string;
  status: 'COMPLETED' | 'PROCESSING' | 'PENDING';
  icon: string;
}

export default function ProviderEarningsScreen() {
  const theme = useTheme();
  const router = useRouter();

  // TODO: Fetch from API
  const totalEarnings = 24500;
  const jobsDone = 42;
  const averageRating = 4.8;

  const payouts: Payout[] = [
    {
      id: '1',
      title: 'E-Sewa Payout',
      amount: 4200,
      date: 'Oct 24, 2023',
      time: '2:30 PM',
      status: 'COMPLETED',
      icon: 'NOTIFICATION',
    },
    {
      id: '2',
      title: 'Bank Transfer',
      amount: 8500,
      date: 'Oct 21, 2023',
      time: '10:15 AM',
      status: 'COMPLETED',
      icon: 'NOTIFICATION',
    },
    {
      id: '3',
      title: 'Weekly Settlement',
      amount: 11800,
      date: 'Oct 18, 2023',
      time: '09:00 AM',
      status: 'PROCESSING',
      icon: 'NOTIFICATION',
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
      marginBottom: Spacing.three,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    filterButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundElement,
      alignItems: 'center',
      justifyContent: 'center',
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
    statsRow: {
      flexDirection: 'row',
      gap: Spacing.two,
    },
    statItem: {
      flex: 1,
      backgroundColor: theme.backgroundSelected,
      borderRadius: 12,
      padding: Spacing.two,
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
    chartContainer: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 16,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      borderWidth: 1,
      borderColor: theme.border,
    },
    chartHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
    },
    chartTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    comparisonText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.accent,
    },
    chartBars: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 160,
      gap: Spacing.one,
      marginBottom: Spacing.two,
    },
    barContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: Spacing.half,
    },
    bar: {
      width: '100%',
      borderRadius: 8,
      backgroundColor: theme.primary,
    },
    barLabel: {
      fontSize: 11,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    barValue: {
      fontSize: 12,
      fontWeight: '700',
      color: theme.text,
      backgroundColor: theme.backgroundSelected,
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 4,
    },
    payoutsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
    },
    payoutsTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    viewAllLink: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.primary,
    },
    payoutCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.two,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      gap: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
    },
    payoutIcon: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    payoutIconEsewa: {
      backgroundColor: '#60A3D9',
    },
    payoutIconBank: {
      backgroundColor: '#6366F1',
    },
    payoutIconSettlement: {
      backgroundColor: '#F59E0B',
    },
    payoutContent: {
      flex: 1,
    },
    payoutHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.half,
    },
    payoutTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    payoutAmount: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.primary,
    },
    payoutMeta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    payoutDate: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    statusBadge: {
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 4,
    },
    statusBadgeCompleted: {
      backgroundColor: theme.accentLight,
    },
    statusBadgeProcessing: {
      backgroundColor: theme.primaryLight,
    },
    statusBadgePending: {
      backgroundColor: theme.backgroundSelected,
    },
    statusText: {
      fontSize: 10,
      fontWeight: '600',
    },
    statusTextCompleted: {
      color: theme.accent,
    },
    statusTextProcessing: {
      color: theme.primary,
    },
    statusTextPending: {
      color: theme.textSecondary,
    },
    requestPayoutButton: {
      backgroundColor: theme.primary,
      paddingVertical: Spacing.three,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: Spacing.two,
      marginBottom: Spacing.four,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.two,
    },
    requestPayoutText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });

  const weeklyData = [
    { day: 'MON', amount: 2500, height: 40 },
    { day: 'TUE', amount: 3200, height: 50 },
    { day: 'WED', amount: 1800, height: 30 },
    { day: 'THU', amount: 4200, height: 65 },
    { day: 'FRI', amount: 2100, height: 35 },
    { day: 'SAT', amount: 1500, height: 25 },
    { day: 'SUN', amount: 0, height: 5 },
  ];

  const getPayoutIconColor = (status: string): string => {
    switch (status) {
      case 'COMPLETED':
        return theme.accent;
      case 'PROCESSING':
        return theme.primary;
      case 'PENDING':
        return theme.textSecondary;
      default:
        return theme.textSecondary;
    }
  };

  const renderPayoutCard = ({ item }: { item: Payout }) => (
    <View style={styles.payoutCard}>
      <View
        style={[
          styles.payoutIcon,
          item.id === '1' && styles.payoutIconEsewa,
          item.id === '2' && styles.payoutIconBank,
          item.id === '3' && styles.payoutIconSettlement,
        ]}
      >
        <Icon name={item.icon as any} size="MEDIUM" style={{ color: '#FFFFFF' }} />
      </View>
      <View style={styles.payoutContent}>
        <View style={styles.payoutHeader}>
          <Text style={styles.payoutTitle}>{item.title}</Text>
          <Text style={styles.payoutAmount}>Rs. {item.amount}</Text>
        </View>
        <View style={styles.payoutMeta}>
          <Text style={styles.payoutDate}>{item.date} • {item.time}</Text>
          <View
            style={[
              styles.statusBadge,
              item.status === 'COMPLETED' && styles.statusBadgeCompleted,
              item.status === 'PROCESSING' && styles.statusBadgeProcessing,
              item.status === 'PENDING' && styles.statusBadgePending,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                item.status === 'COMPLETED' && styles.statusTextCompleted,
                item.status === 'PROCESSING' && styles.statusTextProcessing,
                item.status === 'PENDING' && styles.statusTextPending,
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My Earnings</Text>
          <Pressable style={styles.filterButton}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Total Earnings Card */}
        <View style={styles.earningsCard}>
          <Text style={styles.earningsLabel}>TOTAL EARNINGS</Text>
          <Text style={styles.earningsAmount}>Rs. {totalEarnings.toLocaleString()}</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Jobs Done</Text>
              <Text style={styles.statValue}>{jobsDone}</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Avg. Rating</Text>
              <Text style={styles.statValue}>⭐ {averageRating}</Text>
            </View>
          </View>
        </View>

        {/* Weekly Overview Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Weekly Overview</Text>
            <Text style={styles.comparisonText}>+12% vs last week</Text>
          </View>

          <View style={styles.chartBars}>
            {weeklyData.map((data, index) => (
              <View key={index} style={styles.barContainer}>
                <View
                  style={[
                    styles.bar,
                    { height: data.height === 5 ? 20 : Math.max(data.height, 20) },
                  ]}
                />
                <Text style={styles.barLabel}>{data.day}</Text>
              </View>
            ))}
          </View>

          {/* Bar value shown on highest bar */}
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.barValue}>Rs. 4.2k</Text>
          </View>
        </View>

        {/* Recent Payouts Header */}
        <View style={styles.payoutsHeader}>
          <Text style={styles.payoutsTitle}>Recent Payouts</Text>
          <Pressable onPress={() => {}}>
            <Text style={styles.viewAllLink}>View All</Text>
          </Pressable>
        </View>

        {/* Payouts List */}
        <FlatList
          data={payouts}
          renderItem={renderPayoutCard}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

        {/* Request Immediate Payout Button */}
        <Pressable style={styles.requestPayoutButton}>
          <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
          <Text style={styles.requestPayoutText}>Request Immediate Payout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
