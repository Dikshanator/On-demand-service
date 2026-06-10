import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface RatingAttribute {
  id: string;
  label: string;
  selected: boolean;
}

export default function JobCompletedScreen() {
  const theme = useTheme();
  const router = useRouter();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // TODO: Fetch job data from API
  const job = {
    id: '1',
    serviceType: 'Electrical Repair',
    date: 'Monday, 22 Jun 2026',
    time: '11:00 AM',
    duration: '2 hours 15 minutes',
    totalPaid: 1200,
    paymentMethod: 'Khalti',
    provider: {
      name: 'Bijay Shrestha',
      title: 'Master Electrician',
      location: 'Kathmandu, NP',
      image: 'https://via.placeholder.com/100',
    },
  };

  const attributes: RatingAttribute[] = [
    { id: '1', label: 'On Time', selected: false },
    { id: '2', label: 'Professional', selected: false },
    { id: '3', label: 'Quality Work', selected: false },
    { id: '4', label: 'Clean Workspace', selected: false },
    { id: '5', label: 'Good Communication', selected: false },
    { id: '6', label: 'Fair Price', selected: false },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
      gap: Spacing.two,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    successSection: {
      alignItems: 'center',
      marginBottom: Spacing.four,
    },
    successIcon: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.three,
    },
    successTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    successMessage: {
      fontSize: 14,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: Spacing.two,
    },
    verifiedBadge: {
      backgroundColor: theme.primaryLight,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.one,
    },
    verifiedText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.primary,
    },
    jobSummary: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginBottom: Spacing.four,
    },
    jobSummaryTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    jobDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
      marginBottom: Spacing.two,
      paddingBottom: Spacing.two,
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    jobDetailLast: {
      borderBottomWidth: 0,
      paddingBottom: 0,
      marginBottom: Spacing.one,
    },
    jobDetailIcon: {
      fontSize: 18,
    },
    jobDetailText: {
      flex: 1,
    },
    jobDetailLabel: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    jobDetailValue: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
    },
    providerCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      flexDirection: 'row',
      gap: Spacing.two,
      marginBottom: Spacing.four,
    },
    providerImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.backgroundSelected,
    },
    providerInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    providerName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    providerTitle: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    ratingSection: {
      marginBottom: Spacing.four,
    },
    ratingLabel: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.two,
    },
    starsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.two,
      marginBottom: Spacing.three,
    },
    star: {
      fontSize: 32,
      color: theme.textTertiary,
    },
    attributesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: Spacing.two,
    },
    attributeTag: {
      borderWidth: 2,
      borderColor: theme.border,
      borderRadius: 20,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      backgroundColor: theme.backgroundElement,
    },
    attributeTagActive: {
      borderColor: theme.primary,
      backgroundColor: theme.primaryLight,
    },
    attributeText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.textSecondary,
    },
    attributeTextActive: {
      color: theme.primary,
    },
    reviewSection: {
      marginBottom: Spacing.four,
    },
    reviewLabel: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    reviewCounter: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.two,
    },
    reviewInput: {
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      minHeight: 100,
      textAlignVertical: 'top',
      fontSize: 13,
      color: theme.text,
      marginBottom: Spacing.two,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
      gap: Spacing.two,
    },
    skipButton: {
      paddingVertical: Spacing.two,
      alignItems: 'center',
    },
    skipButtonText: {
      fontSize: 13,
      color: theme.textSecondary,
    },
    helpText: {
      fontSize: 11,
      color: theme.textSecondary,
      textAlign: 'center',
    },
  });

  const handleRating = (value: number) => {
    setRating(value);
  };

  const toggleAttribute = (id: string) => {
    setSelectedAttributes((prev) =>
      prev.includes(id) ? prev.filter((attr) => attr !== id) : [...prev, id]
    );
  };

  const handleSubmitReview = () => {
    // TODO: API integration for review submission
    setSubmitted(true);
    setTimeout(() => {
      router.push('/client/(tabs)/home');
    }, 1500);
  };

  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable
            key={star}
            onPress={() => handleRating(star)}
            style={{ opacity: star <= rating ? 1 : 0.3 }}
          >
            <Icon name="SUCCESS" size="XLARGE" />
          </Pressable>
        ))}
      </View>
    );
  };

  if (submitted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <View style={{ alignItems: 'center', gap: Spacing.three }}>
          <Icon name="SUCCESS" size="XXXLARGE" style={{ color: theme.accent }} />
          <Text style={{ fontSize: 18, fontWeight: '700', color: theme.text }}>
            Thank You!
          </Text>
          <Text style={{ fontSize: 13, color: theme.textSecondary, textAlign: 'center' }}>
            Your review has been submitted
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Icon name="BACK" size="MEDIUM" />
          </Pressable>
          <Text style={styles.headerTitle}>Job Completed</Text>
        </View>

        <View style={styles.content}>
          {/* Success Section */}
          <View style={styles.successSection}>
            <View style={styles.successIcon}>
              <Icon name="SUCCESS" size="XLARGE" style={{ color: theme.primary }} />
            </View>
            <Text style={styles.successTitle}>Service Completed!</Text>
            <Text style={styles.successMessage}>
              Your job has been marked as complete by the service provider
            </Text>
            <View style={styles.verifiedBadge}>
              <Icon name="SUCCESS" size="SMALL" style={{ color: theme.primary }} />
              <Text style={styles.verifiedText}>Verified Completion</Text>
            </View>
          </View>

          {/* Job Summary */}
          <View style={styles.jobSummary}>
            <Text style={styles.jobSummaryTitle}>Job Summary</Text>

            <View style={styles.jobDetail}>
              <Icon name="APPLICATION" size="MEDIUM" />
              <View style={styles.jobDetailText}>
                <Text style={styles.jobDetailLabel}>Service Type</Text>
                <Text style={styles.jobDetailValue}>{job.serviceType}</Text>
              </View>
            </View>

            <View style={styles.jobDetail}>
              <Icon name="APPLICATION" size="MEDIUM" />
              <View style={styles.jobDetailText}>
                <Text style={styles.jobDetailLabel}>Date & Time</Text>
                <Text style={styles.jobDetailValue}>
                  {job.date} • {job.time}
                </Text>
              </View>
            </View>

            <View style={styles.jobDetail}>
              <Icon name="NOTIFICATION" size="MEDIUM" />
              <View style={styles.jobDetailText}>
                <Text style={styles.jobDetailLabel}>Duration</Text>
                <Text style={styles.jobDetailValue}>{job.duration}</Text>
              </View>
            </View>

            <View style={styles.jobDetail}>
              <Icon name="NOTIFICATION" size="MEDIUM" />
              <View style={styles.jobDetailText}>
                <Text style={styles.jobDetailLabel}>Total Paid</Text>
                <Text style={styles.jobDetailValue}>
                  Rs. {job.totalPaid.toLocaleString()}
                </Text>
              </View>
            </View>

            <View style={[styles.jobDetail, styles.jobDetailLast]}>
              <Text style={{ color: theme.textSecondary, fontSize: 12 }}>
                Payment via {job.paymentMethod}
              </Text>
            </View>
          </View>

          {/* Provider Card */}
          <View style={styles.providerCard}>
            <Image source={{ uri: job.provider.image }} style={styles.providerImage} />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>{job.provider.name}</Text>
              <Text style={styles.providerTitle}>
                {job.provider.title} • {job.provider.location}
              </Text>
            </View>
            <Icon name="SUCCESS" size="MEDIUM" style={{ color: theme.accent }} />
          </View>

          {/* Rating Section */}
          <View style={styles.ratingSection}>
            <Text style={styles.ratingLabel}>Rate Your Experience</Text>
            {renderStars()}
          </View>

          {/* Attributes Section */}
          <View style={styles.ratingSection}>
            <Text style={styles.ratingLabel}>What went well?</Text>
            <View style={styles.attributesGrid}>
              {attributes.map((attr) => (
                <Pressable
                  key={attr.id}
                  style={[
                    styles.attributeTag,
                    selectedAttributes.includes(attr.id) && styles.attributeTagActive,
                  ]}
                  onPress={() => toggleAttribute(attr.id)}
                >
                  <Text
                    style={[
                      styles.attributeText,
                      selectedAttributes.includes(attr.id) &&
                        styles.attributeTextActive,
                    ]}
                  >
                    {attr.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Review Section */}
          <View style={styles.reviewSection}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.reviewLabel}>Write a Review (Optional)</Text>
              <Text style={styles.reviewCounter}>{review.length}/300</Text>
            </View>
            <TextInput
              style={styles.reviewInput}
              placeholder="Share your experience..."
              placeholderTextColor={theme.textSecondary}
              value={review}
              onChangeText={setReview}
              maxLength={300}
              multiline
            />
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title="Submit Review"
          onPress={handleSubmitReview}
          variant="primary"
        />
        <Pressable style={styles.skipButton} onPress={() => router.push('/client/(tabs)/home')}>
          <Text style={styles.skipButtonText}>Skip for now</Text>
          <Text style={styles.helpText}>Your review helps build trust in our community</Text>
        </Pressable>
      </View>
    </View>
  );
}
