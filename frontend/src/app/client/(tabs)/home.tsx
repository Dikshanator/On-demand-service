import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface ServiceCard {
  id: string;
  name: string;
  icon: string;
  nearby: number;
}

interface ExpertCard {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  distance: number;
  startingPrice: number;
  image: string;
}

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function ClientHomeScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [location, setLocation] = useState('Kathmandu, NP');

  const services: ServiceCard[] = [
    { id: '1', name: 'Electrician', icon: 'ELECTRICIAN', nearby: 12 },
    { id: '2', name: 'Plumber', icon: 'PLUMBER', nearby: 8 },
    { id: '3', name: 'Cleaner', icon: 'CLEANER', nearby: 15 },
    { id: '4', name: 'Tutor', icon: 'TUTOR', nearby: 20 },
    { id: '5', name: 'Mechanic', icon: 'MECHANIC', nearby: 6 },
    { id: '6', name: 'Handyman', icon: 'HANDYMAN', nearby: 10 },
  ];

  const experts: ExpertCard[] = [
    {
      id: '1',
      name: 'Suman Thapa',
      title: 'Expert Electrician',
      rating: 4.9,
      reviews: 124,
      distance: 1.2,
      startingPrice: 500,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      name: 'Rita Sharma',
      title: 'Expert Plumber',
      rating: 4.7,
      reviews: 89,
      distance: 2.1,
      startingPrice: 400,
      image: 'https://via.placeholder.com/100',
    },
  ];

  const benefits: BenefitCard[] = [
    {
      id: '1',
      title: 'Fully Insured',
      description: 'Protected by our global insurance policy.',
      icon: 'LOCK',
    },
    {
      id: '2',
      title: '24/7 Support',
      description: 'Dedicated assistance for all bookings.',
      icon: 'NOTIFICATION',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      backgroundColor: theme.background,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    locationText: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    locationValue: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    iconButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
    },
    banner: {
      marginHorizontal: Spacing.three,
      marginVertical: Spacing.three,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: theme.backgroundElement,
      minHeight: 200,
    },
    bannerImage: {
      width: '100%',
      height: 200,
      backgroundColor: theme.backgroundSelected,
    },
    bannerOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: Spacing.three,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    bannerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: Spacing.two,
    },
    bannerButton: {
      backgroundColor: theme.primary,
      paddingVertical: Spacing.two,
      paddingHorizontal: Spacing.three,
      borderRadius: 12,
      alignItems: 'center',
    },
    bannerButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 14,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      marginVertical: Spacing.three,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    viewAllLink: {
      fontSize: 14,
      color: theme.primary,
      fontWeight: '600',
    },
    serviceGrid: {
      paddingHorizontal: Spacing.three,
      gap: Spacing.two,
      marginBottom: Spacing.three,
    },
    serviceCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 120,
    },
    serviceIcon: {
      fontSize: 32,
      marginBottom: Spacing.one,
    },
    serviceName: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    serviceNearby: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    expertCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginRight: Spacing.three,
      minWidth: 280,
    },
    expertImage: {
      width: '100%',
      height: 120,
      borderRadius: 8,
      backgroundColor: theme.backgroundSelected,
      marginBottom: Spacing.two,
    },
    expertInfo: {
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.two,
    },
    expertDetails: {
      flex: 1,
    },
    expertName: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    expertTitle: {
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: Spacing.half,
    },
    ratingBadge: {
      backgroundColor: theme.primaryLight,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.half,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ratingText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.primary,
    },
    expertMeta: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: Spacing.two,
      paddingBottom: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    metaItem: {
      alignItems: 'center',
    },
    metaLabel: {
      fontSize: 11,
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    metaValue: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
    },
    priceSection: {
      marginBottom: Spacing.two,
    },
    priceLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    priceValue: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.primary,
    },
    bookButton: {
      backgroundColor: theme.primary,
      paddingVertical: Spacing.two,
      borderRadius: 8,
      alignItems: 'center',
    },
    bookButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 14,
    },
    benefitCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginRight: Spacing.three,
      minWidth: 160,
      alignItems: 'center',
      gap: Spacing.two,
    },
    benefitIcon: {
      fontSize: 32,
    },
    benefitTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
    },
    benefitDescription: {
      fontSize: 12,
      color: theme.textSecondary,
      textAlign: 'center',
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationSection}>
          <Icon name="HOME" size="MEDIUM" />
          <View>
            <Text style={styles.locationText}>YOUR LOCATION</Text>
            <Text style={styles.locationValue}>{location}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: Spacing.two }}>
          <Pressable style={styles.iconButton} onPress={() => {}}>
            {/* TODO: Replace with emergency icon */}
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
          <Pressable
            style={styles.iconButton}
            onPress={() => router.push('/client/profile')}
          >
            {/* TODO: Replace with user profile picture or icon */}
            <Icon name="USER" size="MEDIUM" />
          </Pressable>
        </View>
      </View>

      {/* Featured Banner */}
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x200' }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>
            Verified Experts at Your Doorstep
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 12, marginBottom: Spacing.two }}>
            Trusted professionals for any task within minutes.
          </Text>
          <Pressable
            style={styles.bannerButton}
            onPress={() => router.push('/client/browse-services')}
          >
            <Text style={styles.bannerButtonText}>Book Now</Text>
          </Pressable>
        </View>
      </View>

      {/* Our Services Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Pressable onPress={() => router.push('/client/browse-services')}>
          <Text style={styles.viewAllLink}>View All</Text>
        </Pressable>
      </View>

      <FlatList
        data={services}
        renderItem={({ item }) => (
          <Pressable
            style={styles.serviceCard}
            onPress={() => router.push(`/client/service/${item.id}`)}
          >
            <Icon name={item.icon as any} size="XLARGE" />
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.serviceNearby}>{item.nearby} Nearby</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false}
        columnWrapperStyle={{ gap: Spacing.two }}
        contentContainerStyle={styles.serviceGrid}
      />

      {/* Nearby Featured Experts */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Nearby Featured Experts</Text>
        <Pressable onPress={() => router.push('/client/map')}>
          <Text style={styles.viewAllLink}>See Map</Text>
        </Pressable>
      </View>

      <FlatList
        data={experts}
        renderItem={({ item }) => (
          <View style={styles.expertCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.expertImage}
            />
            <View style={styles.expertInfo}>
              <View style={styles.expertDetails}>
                <Text style={styles.expertName}>{item.name}</Text>
                <Text style={styles.expertTitle}>{item.title}</Text>
              </View>
              <View style={styles.ratingBadge}>
                <Icon name="SUCCESS" size="SMALL" />
                <Text style={styles.ratingText}>
                  {item.rating} ({item.reviews})
                </Text>
              </View>
            </View>
            <View style={styles.expertMeta}>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>Distance</Text>
                <Text style={styles.metaValue}>{item.distance} km</Text>
              </View>
            </View>
            <View style={styles.priceSection}>
              <Text style={styles.priceLabel}>STARTS AT</Text>
              <Text style={styles.priceValue}>Rs. {item.startingPrice}/hr</Text>
            </View>
            <Pressable
              style={styles.bookButton}
              onPress={() => router.push(`/client/provider/${item.id}`)}
            >
              <Text style={styles.bookButtonText}>Book</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Spacing.three }}
      />

      {/* Why Hamro Sewa Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Why Hamro Sewa?</Text>
      </View>

      <FlatList
        data={benefits}
        renderItem={({ item }) => (
          <View style={styles.benefitCard}>
            <Icon name={item.icon as any} size="XLARGE" />
            <Text style={styles.benefitTitle}>{item.title}</Text>
            <Text style={styles.benefitDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Spacing.three, paddingBottom: Spacing.four }}
      />
    </ScrollView>
  );
}
