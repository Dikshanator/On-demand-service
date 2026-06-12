import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface PaymentTransaction {
  id: string;
  status: 'completed' | 'pending' | 'failed';
  title: string;
  description: string;
  amount: number;
  date: string;
  icon: string;
  serviceName?: string;
}

export default function PaymentsScreen() {
  const theme = useTheme();

  // TODO: Fetch payment history from API
  const paymentHistory: PaymentTransaction[] = [
    {
      id: '1',
      status: 'completed',
      title: 'Payment to Suman Thapa',
      description: 'Electrical Repair Service',
      amount: 1200,
      date: '22 Jun 2026',
      icon: 'APPLICATION',
      serviceName: 'Electrical Repair',
    },
    {
      id: '2',
      status: 'completed',
      title: 'Payment to Priya Shrestha',
      description: 'Home Cleaning Service',
      amount: 800,
      date: '20 Jun 2026',
      icon: 'HOME',
      serviceName: 'Home Cleaning',
    },
    {
      id: '3',
      status: 'completed',
      title: 'Payment to Ram Sharma',
      description: 'Pipe Leakage Repair',
      amount: 950,
      date: '18 Jun 2026',
      icon: 'APPLICATION',
      serviceName: 'Plumbing',
    },
    {
      id: '4',
      status: 'failed',
      title: 'Payment to Bijay Shrestha',
      description: 'AC Repair Service',
      amount: 1500,
      date: '15 Jun 2026',
      icon: 'APPLICATION',
      serviceName: 'AC Repair',
    },
  ];

  const totalSpent = paymentHistory
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return theme.accent;
      case 'pending':
        return theme.warning || '#FF9800';
      case 'failed':
        return '#EF4444';
      default:
        return theme.textSecondary;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.three,
    },
    summaryCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.four,
    },
    summaryLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      fontWeight: '600',
      marginBottom: Spacing.one,
    },
    summaryAmount: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      marginHorizontal: Spacing.three,
    },
    paymentCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    paymentIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paymentInfo: {
      flex: 1,
    },
    paymentTitle: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    paymentDesc: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    paymentAmount: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
    },
    paymentDate: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: Spacing.one,
    },
    statusBadge: {
      paddingHorizontal: Spacing.one,
      paddingVertical: Spacing.half,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusText: {
      fontSize: 10,
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
    },
    emptyText: {
      fontSize: 14,
      color: theme.textSecondary,
      marginTop: Spacing.two,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment History</Text>
      </View>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total Amount Paid</Text>
        <Text style={styles.summaryAmount}>Rs. {totalSpent.toLocaleString()}</Text>
      </View>

      {/* Payment History */}
      {paymentHistory.length > 0 ? (
        <>
          <Text style={styles.sectionTitle}>Recent Payments</Text>
          {paymentHistory.map((payment) => (
            <View key={payment.id} style={styles.paymentCard}>
              <View
                style={[
                  styles.paymentIcon,
                  {
                    backgroundColor:
                      payment.status === 'completed'
                        ? 'rgba(6, 182, 212, 0.1)'
                        : payment.status === 'pending'
                        ? 'rgba(255, 152, 0, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                  },
                ]}
              >
                <Icon
                  name={payment.icon as any}
                  size="MEDIUM"
                  style={{
                    color: getStatusColor(payment.status),
                  }}
                />
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentTitle}>{payment.title}</Text>
                <Text style={styles.paymentDesc}>{payment.description}</Text>
                <Text style={styles.paymentDate}>{payment.date}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.paymentAmount,
                    { color: getStatusColor(payment.status) },
                  ]}
                >
                  Rs. {payment.amount.toLocaleString()}
                </Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(payment.status) + '20' },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: getStatusColor(payment.status) },
                    ]}
                  >
                    {payment.status}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </>
      ) : (
        <View style={styles.emptyState}>
          <Icon name="APPLICATION" size="XXLARGE" style={{ color: theme.textTertiary }} />
          <Text style={styles.emptyText}>No payments yet</Text>
        </View>
      )}
    </ScrollView>
  );
}
