import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function CheckoutScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { provider } = useLocalSearchParams();

  const [selectedDate, setSelectedDate] = useState('MON 22');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [selectedPayment, setSelectedPayment] = useState('digital-wallet');

  // TODO: Fetch booking data from API
  const booking = {
    serviceName: 'Deep Home Cleaning',
    serviceDescription: 'Professional 3-Bedroom Service',
    price: 4500,
    verified: true,
    serviceImage: 'https://via.placeholder.com/80',
  };

  const dates = [
    { day: 'MON', date: 22 },
    { day: 'TUE', date: 23 },
    { day: 'WED', date: 24 },
    { day: 'THU', date: 25 },
  ];

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '02:00 PM', available: true },
    { time: '04:00 PM', available: true },
    { time: '06:00 PM', available: true },
  ];

  const address = {
    type: 'Home',
    address1: 'House #42, Mahadev Marg, Mid-Baneshwor',
    address2: 'Kathmandu, Nepal',
  };

  const tax = Math.round((booking.price * 13) / 100);
  const total = booking.price + tax;

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
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    section: {
      marginBottom: Spacing.four,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    orderSummaryCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      flexDirection: 'row',
      gap: Spacing.two,
    },
    serviceImage: {
      width: 80,
      height: 80,
      borderRadius: 12,
      backgroundColor: theme.backgroundSelected,
    },
    serviceInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    serviceName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    serviceDescription: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    verifiedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.half,
    },
    verifiedText: {
      fontSize: 11,
      color: theme.accent,
      fontWeight: '600',
    },
    priceText: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.primary,
    },
    dateContainer: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.three,
    },
    dateButton: {
      flex: 1,
      borderWidth: 2,
      borderColor: theme.border,
      borderRadius: 12,
      paddingVertical: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
    },
    dateButtonActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    dateDay: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    dateDayActive: {
      color: theme.primary,
    },
    dateNumber: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    dateNumberActive: {
      color: theme.primary,
    },
    timeLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
      marginBottom: Spacing.two,
      marginTop: Spacing.three,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    timeGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: Spacing.two,
    },
    timeSlot: {
      flex: 0.3,
      minWidth: '30%',
      borderWidth: 2,
      borderColor: theme.border,
      borderRadius: 12,
      paddingVertical: Spacing.two,
      alignItems: 'center',
      backgroundColor: theme.backgroundElement,
    },
    timeSlotActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    timeText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    timeTextActive: {
      color: theme.primary,
    },
    addressCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
    },
    addressHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: Spacing.two,
    },
    addressType: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    addressTypeText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    changeLink: {
      color: theme.primary,
      fontWeight: '600',
      fontSize: 12,
    },
    addressText: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 18,
      marginLeft: Spacing.four,
    },
    paymentOption: {
      backgroundColor: theme.backgroundElement,
      borderWidth: 2,
      borderColor: theme.border,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    paymentOptionActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    paymentIcon: {
      width: 50,
      height: 50,
      borderRadius: 8,
      backgroundColor: '#7C3AED',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paymentInfo: {
      flex: 1,
    },
    paymentName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    paymentDesc: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    paymentCheckbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paymentCheckboxActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
    },
    pricingSummary: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.three,
    },
    pricingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.two,
      paddingBottom: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    pricingLabel: {
      fontSize: 13,
      color: theme.textSecondary,
    },
    pricingValue: {
      fontSize: 13,
      color: theme.text,
      fontWeight: '600',
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Spacing.two,
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    totalValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.primary,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
      backgroundColor: theme.background,
    },
    termsText: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: Spacing.two,
    },
    termsLink: {
      color: theme.primary,
      fontWeight: '600',
    },
  });

  const handleConfirmBooking = () => {
    // TODO: API integration for booking confirmation
    router.push('/client/booking-confirmed');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.headerButton} onPress={() => router.back()}>
            <Icon name="BACK" size="MEDIUM" />
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: '700', color: theme.text }}>
            Checkout
          </Text>
          <Pressable style={styles.headerButton} onPress={() => {}}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        <View style={styles.content}>
          {/* Order Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            <View style={styles.orderSummaryCard}>
              <Image
                source={{ uri: booking.serviceImage }}
                style={styles.serviceImage}
              />
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{booking.serviceName}</Text>
                <Text style={styles.serviceDescription}>
                  {booking.serviceDescription}
                </Text>
                <View style={styles.verifiedBadge}>
                  <Icon name="SUCCESS" size="SMALL" style={{ color: theme.accent }} />
                  <Text style={styles.verifiedText}>Verified Professional</Text>
                </View>
              </View>
              <Text style={styles.priceText}>
                Rs. {booking.price.toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Schedule Service */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Schedule Service</Text>
            <Text style={styles.timeLabel}>Select Date</Text>
            <View style={styles.dateContainer}>
              {dates.map((date, idx) => (
                <Pressable
                  key={idx}
                  style={[
                    styles.dateButton,
                    selectedDate === `${date.day} ${date.date}` &&
                      styles.dateButtonActive,
                  ]}
                  onPress={() => setSelectedDate(`${date.day} ${date.date}`)}
                >
                  <Text
                    style={[
                      styles.dateDay,
                      selectedDate === `${date.day} ${date.date}` &&
                        styles.dateDayActive,
                    ]}
                  >
                    {date.day}
                  </Text>
                  <Text
                    style={[
                      styles.dateNumber,
                      selectedDate === `${date.day} ${date.date}` &&
                        styles.dateNumberActive,
                    ]}
                  >
                    {date.date}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.timeLabel}>Select Time Slot</Text>
            <View style={styles.timeGrid}>
              {timeSlots.map((slot, idx) => (
                <Pressable
                  key={idx}
                  style={[
                    styles.timeSlot,
                    selectedTime === slot.time && styles.timeSlotActive,
                  ]}
                  onPress={() => setSelectedTime(slot.time)}
                  disabled={!slot.available}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === slot.time && styles.timeTextActive,
                    ]}
                  >
                    {slot.time}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Service Address */}
          <View style={styles.section}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.sectionTitle}>Service Address</Text>
              <Pressable onPress={() => router.push('/client/select-address')}>
                <Text style={styles.changeLink}>Change</Text>
              </Pressable>
            </View>
            <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                <View style={styles.addressType}>
                  <Icon name="HOME" size="MEDIUM" />
                  <Text style={styles.addressTypeText}>{address.type}</Text>
                </View>
              </View>
              <Text style={styles.addressText}>
                {address.address1}
                {'\n'}
                {address.address2}
              </Text>
            </View>
          </View>

          {/* Payment Method */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Method</Text>

            <Pressable
              style={[
                styles.paymentOption,
                selectedPayment === 'digital-wallet' && styles.paymentOptionActive,
              ]}
              onPress={() => setSelectedPayment('digital-wallet')}
            >
              <View style={styles.paymentIcon}>
                <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14 }}>
                  W
                </Text>
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>Digital Wallet</Text>
                <Text style={styles.paymentDesc}>Khalti / eSewa / IME Pay</Text>
              </View>
              <View
                style={[
                  styles.paymentCheckbox,
                  selectedPayment === 'digital-wallet' && styles.paymentCheckboxActive,
                ]}
              >
                {selectedPayment === 'digital-wallet' && (
                  <Icon name="SUCCESS" size="SMALL" style={{ color: '#FFFFFF' }} />
                )}
              </View>
            </Pressable>

            <Pressable
              style={[
                styles.paymentOption,
                selectedPayment === 'cash' && styles.paymentOptionActive,
              ]}
              onPress={() => setSelectedPayment('cash')}
            >
              <View style={{ ...styles.paymentIcon, backgroundColor: theme.accent }}>
                <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
              </View>
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>Cash after service</Text>
                <Text style={styles.paymentDesc}>Pay when job is done</Text>
              </View>
              <View
                style={[
                  styles.paymentCheckbox,
                  selectedPayment === 'cash' && styles.paymentCheckboxActive,
                ]}
              >
                {selectedPayment === 'cash' && (
                  <Icon name="SUCCESS" size="SMALL" style={{ color: '#FFFFFF' }} />
                )}
              </View>
            </Pressable>
          </View>

          {/* Pricing Summary */}
          <View style={styles.pricingSummary}>
            <View style={styles.pricingRow}>
              <Text style={styles.pricingLabel}>Subtotal</Text>
              <Text style={styles.pricingValue}>Rs. {booking.price.toLocaleString()}</Text>
            </View>
            <View style={styles.pricingRow}>
              <Text style={styles.pricingLabel}>Tax (13% VAT)</Text>
              <Text style={styles.pricingValue}>Rs. {tax.toLocaleString()}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>Rs. {total.toLocaleString()}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.termsText}>
          By confirming, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text>
        </Text>
        <Button
          title="Confirm Booking"
          onPress={handleConfirmBooking}
          variant="primary"
        />
      </View>
    </View>
  );
}
