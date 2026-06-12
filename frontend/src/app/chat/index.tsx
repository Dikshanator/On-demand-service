import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface ChatConversation {
  id: string;
  name: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  icon: string;
}

export default function ChatListScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // TODO: Fetch from API
  const conversations: ChatConversation[] = [
    {
      id: '1',
      name: 'Suman Thapa',
      title: 'Master Electrician',
      lastMessage: 'On my way, I\'ll be there in 10 minutes',
      timestamp: '2m',
      unreadCount: 0,
      isOnline: true,
      icon: 'USER',
    },
    {
      id: '2',
      name: 'Anil J.',
      title: 'Ceiling Fan Repair',
      lastMessage: 'Thank you for the great service!',
      timestamp: '15m',
      unreadCount: 2,
      isOnline: true,
      icon: 'USER',
    },
    {
      id: '3',
      name: 'Rita Gurung',
      title: 'Cleaning Service',
      lastMessage: 'Can you start earlier tomorrow?',
      timestamp: '1h',
      unreadCount: 1,
      isOnline: false,
      icon: 'USER',
    },
    {
      id: '4',
      name: 'Deepak Thapa',
      title: 'Appliance Repair',
      lastMessage: 'Perfect! I\'ll confirm the appointment.',
      timestamp: '2h',
      unreadCount: 0,
      isOnline: true,
      icon: 'USER',
    },
    {
      id: '5',
      name: 'Ram Sharma',
      title: 'Plumbing Service',
      lastMessage: 'What\'s your availability next week?',
      timestamp: '4h',
      unreadCount: 0,
      isOnline: false,
      icon: 'USER',
    },
  ];

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.background,
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.two,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      paddingHorizontal: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
    },
    searchInput: {
      flex: 1,
      paddingVertical: Spacing.two,
      paddingHorizontal: Spacing.one,
      fontSize: 14,
      color: theme.text,
    },
    searchIcon: {
      color: theme.textSecondary,
    },
    conversationCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      marginHorizontal: Spacing.three,
      marginVertical: Spacing.one,
      backgroundColor: theme.backgroundElement,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
    },
    avatarContainer: {
      position: 'relative',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    onlineBadge: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.accent,
      borderWidth: 2,
      borderColor: theme.backgroundElement,
    },
    offlineBadge: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: theme.textTertiary,
      borderWidth: 2,
      borderColor: theme.backgroundElement,
    },
    conversationContent: {
      flex: 1,
    },
    conversationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.half,
    },
    conversationName: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    conversationTime: {
      fontSize: 12,
      color: theme.textSecondary,
    },
    conversationTitle: {
      fontSize: 12,
      color: theme.textSecondary,
      marginBottom: Spacing.half,
    },
    conversationMessage: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 16,
    },
    unreadBadge: {
      backgroundColor: theme.primary,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    unreadBadgeText: {
      fontSize: 11,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.six,
      gap: Spacing.two,
    },
    emptyTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
    },
    emptyDescription: {
      fontSize: 13,
      color: theme.textSecondary,
    },
    newChatButton: {
      position: 'absolute',
      bottom: Spacing.four,
      right: Spacing.three,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
  });

  const renderConversation = ({ item }: { item: ChatConversation }) => (
    <Pressable
      style={styles.conversationCard}
      onPress={() => router.push(`/chat/${item.id}`)}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Icon name={item.icon as any} size="MEDIUM" />
        </View>
        <View style={item.isOnline ? styles.onlineBadge : styles.offlineBadge} />
      </View>

      <View style={styles.conversationContent}>
        <View style={styles.conversationHeader}>
          <Text style={styles.conversationName}>{item.name}</Text>
          <Text style={styles.conversationTime}>{item.timestamp}</Text>
        </View>
        <Text style={styles.conversationTitle}>{item.title}</Text>
        <Text style={styles.conversationMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>

      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>{item.unreadCount}</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Messages</Text>
          <Pressable onPress={() => {}}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="EMAIL" size="MEDIUM" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor={theme.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Conversations List */}
      {filteredConversations.length > 0 ? (
        <FlatList
          data={filteredConversations}
          renderItem={renderConversation}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: Spacing.two }}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="EMAIL" size="XXLARGE" style={{ color: theme.textTertiary }} />
          <Text style={styles.emptyTitle}>No Conversations</Text>
          <Text style={styles.emptyDescription}>
            Start a new conversation with a service provider or client.
          </Text>
        </View>
      )}

      {/* New Chat Button */}
      <Pressable style={styles.newChatButton} onPress={() => {}}>
        <Icon name="HOME" size="XLARGE" style={{ color: '#FFFFFF' }} />
      </Pressable>
    </View>
  );
}
