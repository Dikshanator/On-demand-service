import React, { useState } from 'react';
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

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
}

export default function HelpSupportScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'How do I book a service?',
      answer:
        'Browse services on the home page, select a provider, choose your preferred date and time, and complete the payment. You will receive a confirmation immediately.',
    },
    {
      id: '2',
      question: 'Can I cancel or reschedule a booking?',
      answer:
        'Yes, you can cancel or reschedule up to 2 hours before the service. Go to Bookings, select the booking, and tap Cancel or Reschedule.',
    },
    {
      id: '3',
      question: 'What payment methods are accepted?',
      answer:
        'We accept credit/debit cards, digital wallets (Khalti, eSewa), and bank transfers. You can manage your payment methods in Settings.',
    },
    {
      id: '4',
      question: 'How is the provider rated?',
      answer:
        'Providers are rated based on customer reviews after service completion. Ratings range from 1 to 5 stars.',
    },
    {
      id: '5',
      question: 'What if the service is not satisfactory?',
      answer:
        'If you are not satisfied, you can report it within 24 hours. Our team will investigate and take appropriate action.',
    },
  ];

  const supportOptions: SupportOption[] = [
    {
      id: '1',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: 'EMAIL',
      action: () => {},
    },
    {
      id: '2',
      title: 'Email Support',
      description: 'support@hamrosewa.com',
      icon: 'NOTIFICATION',
      action: () => {},
    },
    {
      id: '3',
      title: 'Phone Support',
      description: '+977 1 4000000',
      icon: 'NOTIFICATION',
      action: () => {},
    },
    {
      id: '4',
      title: 'Report a Problem',
      description: 'Let us know if you encountered an issue',
      icon: 'NOTIFICATION',
      action: () => {},
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
      paddingVertical: Spacing.three,
      backgroundColor: theme.background,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginHorizontal: Spacing.three,
      marginVertical: Spacing.three,
      marginTop: Spacing.four,
    },
    supportCard: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      padding: Spacing.three,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
    },
    supportIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.primary + '20',
      alignItems: 'center',
      justifyContent: 'center',
    },
    supportInfo: {
      flex: 1,
    },
    supportTitle: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    supportDesc: {
      fontSize: 11,
      color: theme.textSecondary,
    },
    faqItem: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      marginHorizontal: Spacing.three,
      marginBottom: Spacing.two,
      overflow: 'hidden',
    },
    faqHeader: {
      padding: Spacing.three,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    faqQuestion: {
      fontSize: 13,
      fontWeight: '600',
      color: theme.text,
      flex: 1,
    },
    faqAnswer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.three,
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 18,
      borderTopWidth: 0.5,
      borderTopColor: theme.divider,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Icon name="HOME" size="MEDIUM" style={{ color: theme.text }} />
        </Pressable>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Support Options */}
        <Text style={styles.sectionTitle}>Contact Us</Text>
        {supportOptions.map((option) => (
          <Pressable key={option.id} style={styles.supportCard} onPress={option.action}>
            <View style={styles.supportIcon}>
              <Icon
                name={option.icon as any}
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            </View>
            <View style={styles.supportInfo}>
              <Text style={styles.supportTitle}>{option.title}</Text>
              <Text style={styles.supportDesc}>{option.description}</Text>
            </View>
            <Icon name="HOME" size="SMALL" style={{ color: theme.textSecondary }} />
          </Pressable>
        ))}

        {/* FAQs */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        {faqs.map((faq) => (
          <Pressable
            key={faq.id}
            style={styles.faqItem}
            onPress={() =>
              setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
            }
          >
            <View style={styles.faqHeader}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Icon
                name="HOME"
                size="SMALL"
                style={{
                  color: theme.textSecondary,
                  transform: [
                    {
                      rotate: expandedFAQ === faq.id ? '180deg' : '0deg',
                    },
                  ],
                }}
              />
            </View>
            {expandedFAQ === faq.id && (
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            )}
          </Pressable>
        ))}

        {/* Spacing */}
        <View style={{ height: Spacing.four }} />
      </ScrollView>
    </View>
  );
}
