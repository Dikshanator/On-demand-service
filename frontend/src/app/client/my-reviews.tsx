import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface Review {
  id: string;
  provider: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export default function MyReviewsScreen() {
  const theme = useTheme();
  const router = useRouter();

  const reviews: Review[] = [
    {
      id: '1',
      provider: 'Suman Thapa',
      service: 'Electrical Repair',
      rating: 5,
      comment: 'Excellent service! Very professional and quick. Highly recommended.',
      date: '22 Jun 2026',
    },
    {
      id: '2',
      provider: 'Priya Shrestha',
      service: 'Home Cleaning',
      rating: 4,
      comment: 'Good service overall. Could have been a bit more thorough.',
      date: '20 Jun 2026',
    },
    {
      id: '3',
      provider: 'Ram Sharma',
      service: 'Plumbing',
      rating: 5,
      comment: 'Perfect! Fixed the issue immediately. Very satisfied.',
      date: '18 Jun 2026',
    },
  ];

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

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
      paddingVertical: Spacing.three,
      backgroundColor: theme.background,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    statsCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.four,
      alignItems: 'center',
    },
    statsLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.one,
    },
    statsValue: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.primary,
      marginBottom: Spacing.one,
    },
    starsContainer: {
      flexDirection: 'row',
      gap: Spacing.half,
    },
    reviewCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
    },
    reviewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: Spacing.two,
    },
    reviewProvider: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    reviewService: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    reviewRating: {
      flexDirection: 'row',
      gap: Spacing.half,
    },
    reviewComment: {
      fontSize: 12,
      color: theme.text,
      lineHeight: 18,
      marginBottom: Spacing.two,
      fontStyle: 'italic',
    },
    reviewDate: {
      fontSize: 11,
      color: theme.textTertiary,
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

  const renderStar = (filled: boolean) => (
    <Icon
      name="USER"
      size="SMALL"
      style={{
        color: filled ? '#FFB800' : theme.textTertiary,
      }}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Icon name="HOME" size="MEDIUM" style={{ color: theme.text }} />
        </Pressable>
        <Text style={styles.headerTitle}>My Reviews</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <Text style={styles.statsLabel}>Average Rating</Text>
        <Text style={styles.statsValue}>{averageRating.toFixed(1)}</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => renderStar(star <= Math.floor(averageRating)))}
        </View>
      </View>

      {/* Reviews List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.reviewProvider}>{review.provider}</Text>
                  <Text style={styles.reviewService}>{review.service}</Text>
                </View>
                <View style={styles.reviewRating}>
                  {[1, 2, 3, 4, 5].map((star) =>
                    renderStar(star <= review.rating)
                  )}
                </View>
              </View>
              <Text style={styles.reviewComment}>"{review.comment}"</Text>
              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Icon name="USER" size="XXLARGE" style={{ color: theme.textTertiary }} />
            <Text style={styles.emptyText}>No reviews yet</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
