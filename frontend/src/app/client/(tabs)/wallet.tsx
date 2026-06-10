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

interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit';
  title: string;
  description: string;
  amount: number;
  date: string;
  icon: string;
}

export default function WalletScreen() {
  const theme = useTheme();

  // TODO: Fetch wallet data from API
  const walletBalance = 5420;
  const transactions: WalletTransaction[] = [
    {
      id: '1',
      type: 'debit',
      title: 'Payment to Suman Thapa',
      description: 'Electrical Repair Service',
      amount: 1200,
      date: '22 Jun 2026',
      icon: 'APPLICATION',
    },
    {
      id: '2',
      type: 'credit',
      title: 'Wallet Top-up',
      description: 'Via Khalti',
      amount: 5000,
      date: '21 Jun 2026',
      icon: 'NOTIFICATION',
    },
  ];

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
    balanceCard: {
      backgroundColor: theme.primary,
      borderRadius: 16,
      padding: Spacing.four,
      marginBottom: Spacing.four,
      alignItems: 'center',
    },
    balanceLabel: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.8)',
      marginBottom: Spacing.one,
    },
    balanceAmount: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: Spacing.three,
    },
    balanceButtonsContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      width: '100%',
    },
    balanceButton: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 12,
      paddingVertical: Spacing.two,
      alignItems: 'center',
    },
    balanceButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 12,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      marginHorizontal: Spacing.three,
    },
    transactionCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    transactionIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    transactionInfo: {
      flex: 1,
    },
    transactionTitle: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    transactionDesc: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    transactionAmount: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
    },
    transactionAmountCredit: {
      color: theme.accent,
    },
    transactionAmountDebit: {
      color: theme.text,
    },
    transactionDate: {
      fontSize: 11,
      color: theme.textSecondary,
      marginTop: Spacing.one,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wallet</Text>
      </View>

      {/* Balance Card */}
      <View
        style={{
          paddingHorizontal: Spacing.three,
          marginBottom: Spacing.four,
        }}
      >
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>Rs. {walletBalance.toLocaleString()}</Text>
          <View style={styles.balanceButtonsContainer}>
            <Pressable style={styles.balanceButton}>
              <Text style={styles.balanceButtonText}>Add Money</Text>
            </Pressable>
            <Pressable style={styles.balanceButton}>
              <Text style={styles.balanceButtonText}>Withdraw</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionCard}>
          <View
            style={[
              styles.transactionIcon,
              {
                backgroundColor:
                  transaction.type === 'credit'
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'rgba(124, 58, 237, 0.1)',
              },
            ]}
          >
            <Icon
              name={transaction.icon as any}
              size="MEDIUM"
              style={{
                color:
                  transaction.type === 'credit' ? '#06B6D4' : '#7C3AED',
              }}
            />
          </View>
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>
            <Text style={styles.transactionDesc}>{transaction.description}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
          <View>
            <Text
              style={[
                styles.transactionAmount,
                transaction.type === 'credit'
                  ? styles.transactionAmountCredit
                  : styles.transactionAmountDebit,
              ]}
            >
              {transaction.type === 'credit' ? '+' : '-'}Rs.{' '}
              {transaction.amount.toLocaleString()}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
