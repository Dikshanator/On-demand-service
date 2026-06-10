import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface TrackingStatus {
  step: number;
  label: string;
  completed: boolean;
  active: boolean;
}

export default function LiveTrackingScreen() {
  const theme = useTheme();
  const isDark = useColorScheme() === 'dark';
  const router = useRouter();

  const [eta, setEta] = useState('~8 min away');
  const [statusIndex, setStatusIndex] = useState(1);

  useEffect(() => {
    // TODO: Integrate with real-time tracking API
    // Update ETA and status from backend
  }, []);

  // TODO: Fetch provider data from API
  const provider = {
    name: 'Suman Thapa',
    rating: 4.9,
    reviews: 124,
    image: 'https://via.placeholder.com/100',
  };

  const booking = {
    serviceType: 'Electrician Service',
    totalCost: 4500,
  };

  const trackingSteps: TrackingStatus[] = [
    { step: 1, label: 'Accepted', completed: true, active: true },
    { step: 2, label: 'On the way', completed: true, active: true },
    { step: 3, label: 'Arrived', completed: false, active: false },
    { step: 4, label: 'Completed', completed: false, active: false },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    mapContainer: {
      height: '50%',
      backgroundColor: isDark ? theme.backgroundSelected : '#F0F0F0',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapPlaceholder: {
      width: '100%',
      height: '100%',
      backgroundColor: isDark
        ? 'rgba(255,255,255,0.05)'
        : 'rgba(0,0,0,0.02)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapImage: {
      width: '100%',
      height: '100%',
    },
    etaLabel: {
      position: 'absolute',
      top: Spacing.three,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    etaText: {
      fontSize: 13,
      fontWeight: '600',
      color: '#003D99',
    },
    statusLabel: {
      position: 'absolute',
      bottom: Spacing.three,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    statusText: {
      fontSize: 13,
      fontWeight: '600',
      color: '#1A1A2E',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
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
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
      flex: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    providerCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    providerImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.backgroundSelected,
    },
    providerInfo: {
      flex: 1,
    },
    providerName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    ratingText: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    actionButtons: {
      flexDirection: 'row',
      gap: Spacing.two,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timelineContainer: {
      marginBottom: Spacing.three,
    },
    timelineTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    timeline: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
      height: 40,
    },
    timelineStep: {
      flex: 1,
      height: 5,
      backgroundColor: theme.backgroundSelected,
      borderRadius: 3,
      position: 'relative',
    },
    timelineStepActive: {
      backgroundColor: theme.primary,
    },
    timelineStepCompleted: {
      backgroundColor: theme.primary,
    },
    timelineNode: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.background,
    },
    timelineNodeActive: {
      backgroundColor: theme.primary,
    },
    timelineNodeInactive: {
      backgroundColor: theme.backgroundSelected,
    },
    timelineLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: Spacing.two,
    },
    timelineLabel: {
      fontSize: 11,
      fontWeight: '600',
      color: theme.textSecondary,
      flex: 1,
      textAlign: 'center',
    },
    timelineLabelActive: {
      color: theme.primary,
      fontWeight: '700',
    },
    bookingDetails: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.three,
    },
    detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
      paddingBottom: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    detailRowLast: {
      borderBottomWidth: 0,
    },
    detailLabel: {
      fontSize: 13,
      color: theme.textSecondary,
      flex: 1,
    },
    detailValue: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'right',
    },
    cancelButton: {
      paddingVertical: Spacing.two,
      alignItems: 'center',
      marginBottom: Spacing.three,
    },
    cancelButtonText: {
      fontSize: 13,
      color: '#FF0000',
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      {/* Map Container */}
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          {/* TODO: Replace with actual map library (Google Maps, OpenStreetMap, Leaflet) */}
          {/* Integration needed: Install react-native-maps or expo-maps */}
          <Icon name="HOME" size="XXXLARGE" style={{ color: isDark ? '#666' : '#CCC' }} />
          <Text style={{ color: isDark ? '#666' : '#999', marginTop: Spacing.two }}>
            Map View - API Integration Required
          </Text>
        </View>

        <View style={styles.etaLabel}>
          <Icon name="NOTIFICATION" size="SMALL" style={{ color: '#003D99' }} />
          <Text style={styles.etaText}>{eta}</Text>
        </View>

        <View style={styles.statusLabel}>
          <Text style={styles.statusText}>Suman is on his way</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={styles.headerTitle}>Live Tracking</Text>
        <Pressable style={styles.headerButton} onPress={() => {}}>
          <Icon name="NOTIFICATION" size="MEDIUM" />
        </Pressable>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Provider Card */}
        <View style={styles.providerCard}>
          <Image source={{ uri: provider.image }} style={styles.providerImage} />
          <View style={styles.providerInfo}>
            <Text style={styles.providerName}>{provider.name}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="SUCCESS" size="SMALL" style={{ color: '#FFA500' }} />
              <Text style={styles.ratingText}>
                {provider.rating} ({provider.reviews} reviews)
              </Text>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <Pressable style={styles.actionButton}>
              <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
            </Pressable>
          </View>
        </View>

        {/* Timeline */}
        <View style={styles.timelineContainer}>
          <Text style={styles.timelineTitle}>Service Progress</Text>
          <View style={styles.timeline}>
            {trackingSteps.map((step, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === trackingSteps.length - 1;
              const isPreviousActive = idx < statusIndex;

              return (
                <View key={step.step} style={{ flex: 1, alignItems: 'center' }}>
                  {!isFirst && (
                    <View
                      style={[
                        styles.timelineStep,
                        isPreviousActive && styles.timelineStepActive,
                      ]}
                    />
                  )}
                  <View
                    style={[
                      styles.timelineNode,
                      idx <= statusIndex
                        ? styles.timelineNodeActive
                        : styles.timelineNodeInactive,
                    ]}
                  >
                    {idx < statusIndex && (
                      <Icon
                        name="SUCCESS"
                        size="SMALL"
                        style={{ color: '#FFFFFF' }}
                      />
                    )}
                    {idx === statusIndex && (
                      <Icon
                        name="APPLICATION"
                        size="SMALL"
                        style={{ color: '#FFFFFF' }}
                      />
                    )}
                  </View>
                  {!isLast && (
                    <View
                      style={[
                        styles.timelineStep,
                        idx < statusIndex - 1 && styles.timelineStepCompleted,
                      ]}
                    />
                  )}
                </View>
              );
            })}
          </View>
          <View style={styles.timelineLabels}>
            {trackingSteps.map((step) => (
              <Text
                key={step.step}
                style={[
                  styles.timelineLabel,
                  step.active && styles.timelineLabelActive,
                ]}
              >
                {step.label}
              </Text>
            ))}
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.bookingDetails}>
          <View style={styles.detailRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.one }}>
              <Icon name="APPLICATION" size="MEDIUM" />
              <View>
                <Text style={{ fontSize: 11, color: theme.textSecondary }}>
                  Service Type
                </Text>
                <Text style={styles.detailLabel}>{booking.serviceType}</Text>
              </View>
            </View>
            <Text style={styles.detailValue}>Rs. {booking.totalCost.toLocaleString()}</Text>
          </View>
          <View style={[styles.detailRow, styles.detailRowLast]}>
            <Text style={styles.detailLabel}>Total Cost</Text>
            <Text style={styles.detailValue}>Rs. {booking.totalCost.toLocaleString()}</Text>
          </View>
        </View>

        {/* Cancel Button */}
        <Pressable style={styles.cancelButton} onPress={() => {}}>
          <Text style={styles.cancelButtonText}>Cancel Booking</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
