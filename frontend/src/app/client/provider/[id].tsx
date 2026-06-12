import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  priceType: string;
}

interface Review {
  id: string;
  authorInitials: string;
  authorName: string;
  rating: number;
  daysAgo: number;
  text: string;
}

export default function ProviderProfileScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // TODO: Fetch provider data from API using id
  const provider = {
    name: 'Bijay Shrestha',
    title: 'Master Electrician',
    location: 'Kathmandu, NP',
    rating: 4.8,
    reviews: 150,
    jobsDone: 150,
    availableToday: true,
    availableTime: '9:00 AM - 6:00 PM',
    about:
      'With over 8 years of experience in residential and commercial electrical systems, I provide reliable, safe, and efficient solutions for all your wiring needs. Certified by the National Vocational Institute, I specialize in modern smart home installations and complex fault repairs.',
    image: 'https://via.placeholder.com/400x300',
  };

  const services: Service[] = [
    {
      id: '1',
      name: 'Wiring & Repairs',
      description: 'Emergency fixes & new circuits',
      price: 500,
      priceType: 'hr',
    },
    {
      id: '2',
      name: 'Appliance Installation',
      description: 'AC, Geysers, Inverters',
      price: 800,
      priceType: 'fix',
    },
    {
      id: '3',
      name: 'Full Home Inspection',
      description: 'Safety check & reporting',
      price: 1200,
      priceType: 'fix',
    },
  ];

  const reviews: Review[] = [
    {
      id: '1',
      authorInitials: 'AS',
      authorName: 'Anjali Sharma',
      rating: 5,
      daysAgo: 2,
      text: '"Bijay was extremely professional and fixed our short circuit issue in less than an hour. Highly recommended!"',
    },
  ];

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
    banner: {
      position: 'relative',
      height: 250,
      backgroundColor: theme.backgroundSelected,
    },
    bannerImage: {
      width: '100%',
      height: '100%',
    },
    badge: {
      position: 'absolute',
      top: Spacing.three,
      left: Spacing.three,
      backgroundColor: theme.accent,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 20,
    },
    badgeText: {
      fontSize: 11,
      fontWeight: '700',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    providerName: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    providerRole: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: Spacing.three,
    },
    statsContainer: {
      flexDirection: 'row',
      gap: Spacing.three,
      marginBottom: Spacing.three,
    },
    statItem: {
      flex: 1,
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.two,
      alignItems: 'center',
    },
    statValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.primary,
      marginBottom: Spacing.half,
    },
    statLabel: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    availabilityBox: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.three,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    availabilityText: {
      flex: 1,
    },
    availabilityLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    availabilityTime: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
      marginTop: Spacing.three,
    },
    aboutText: {
      fontSize: 13,
      lineHeight: 18,
      color: theme.textSecondary,
      marginBottom: Spacing.three,
    },
    serviceItem: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    serviceInfo: {
      flex: 1,
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
    },
    servicePrice: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.primary,
    },
    reviewItem: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.two,
    },
    reviewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: Spacing.two,
    },
    reviewerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    reviewerAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    reviewerInitials: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 14,
    },
    reviewerName: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    reviewTime: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    reviewText: {
      fontSize: 13,
      lineHeight: 18,
      color: theme.textSecondary,
      fontStyle: 'italic',
    },
    viewAllLink: {
      fontSize: 14,
      color: theme.primary,
      fontWeight: '600',
      marginTop: Spacing.two,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      gap: Spacing.two,
    },
  });

  const renderStars = (rating: number) => {
    return (
      <View style={{ flexDirection: 'row', gap: Spacing.half }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="SUCCESS"
            size="SMALL"
            style={{ color: star <= rating ? theme.primary : theme.border }}
          />
        ))}
      </View>
    );
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
            Provider Profile
          </Text>
          <Pressable style={styles.headerButton} onPress={() => {}}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image source={{ uri: provider.image }} style={styles.bannerImage} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Verified Professional</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Provider Info */}
          <Text style={styles.providerName}>{provider.name}</Text>
          <Text style={styles.providerRole}>
            {provider.title} • {provider.location}
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Icon name="SUCCESS" size="LARGE" />
              <Text style={styles.statValue}>{provider.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="APPLICATION" size="LARGE" />
              <Text style={styles.statValue}>{provider.reviews}+</Text>
              <Text style={styles.statLabel}>Jobs Done</Text>
            </View>
          </View>

          {/* Availability */}
          <View style={styles.availabilityBox}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
            <View style={styles.availabilityText}>
              <Text style={styles.availabilityLabel}>Available Today</Text>
              <Text style={styles.availabilityTime}>{provider.availableTime}</Text>
            </View>
          </View>

          {/* About Section */}
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{provider.about}</Text>

          {/* Services Section */}
          <Text style={styles.sectionTitle}>Services & Pricing</Text>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceItem}>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
              <Text style={styles.servicePrice}>
                Rs. {service.price}/{service.priceType}
              </Text>
            </View>
          ))}

          {/* Reviews Section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.sectionTitle}>Reviews (42)</Text>
            <Pressable>
              <Text style={styles.viewAllLink}>View All</Text>
            </Pressable>
          </View>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewerInfo}>
                  <View style={styles.reviewerAvatar}>
                    <Text style={styles.reviewerInitials}>
                      {review.authorInitials}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.reviewerName}>{review.authorName}</Text>
                    <Text style={styles.reviewTime}>{review.daysAgo} days ago</Text>
                  </View>
                </View>
              </View>
              {renderStars(review.rating)}
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', gap: Spacing.two, marginBottom: Spacing.two }}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => router.push({
              pathname: '/chat/[id]',
              params: { id: id, providerName: provider.name },
            })}
          >
            <View
              style={{
                paddingVertical: Spacing.two,
                alignItems: 'center',
                backgroundColor: theme.backgroundElement,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: Spacing.one,
              }}
            >
              <Icon name="EMAIL" size="MEDIUM" style={{ color: theme.primary }} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: theme.primary }}>
                Chat
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => router.push({
              pathname: '/call/incoming',
              params: { providerName: provider.name, providerId: id },
            })}
          >
            <View
              style={{
                paddingVertical: Spacing.two,
                alignItems: 'center',
                backgroundColor: theme.accent,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: Spacing.one,
              }}
            >
              <Icon name="NOTIFICATION" size="MEDIUM" style={{ color: '#FFFFFF' }} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF' }}>
                Call
              </Text>
            </View>
          </Pressable>
        </View>
        <Button
          title="Book Now"
          onPress={() => router.push(`/client/checkout?provider=${id}`)}
          variant="primary"
        />
      </View>
    </View>
  );
}
