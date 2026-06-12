import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Icon } from '@/components/ui/icon';

interface ChatMessage {
  id: string;
  sender: 'me' | 'other';
  text: string;
  timestamp: string;
  isRead: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
}

export default function ChatDetailScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [messageText, setMessageText] = useState('');

  // TODO: Fetch from API based on ID
  const chatPartner = {
    name: 'Suman Thapa',
    title: 'Master Electrician',
    isOnline: true,
  };

  const messages: ChatMessage[] = [
    {
      id: '1',
      sender: 'other',
      text: 'Hello! I have received your request. I can be there by 11:00 AM.',
      timestamp: '10:15 AM',
      isRead: true,
    },
    {
      id: '2',
      sender: 'me',
      text: 'Great! Please bring all necessary tools.',
      timestamp: '10:16 AM',
      isRead: true,
    },
    {
      id: '3',
      sender: 'other',
      text: 'Sure, no problem. See you soon!',
      timestamp: '10:17 AM',
      isRead: true,
    },
    {
      id: '4',
      sender: 'me',
      text: 'I\'m on my way',
      timestamp: '10:45 AM',
      isRead: true,
    },
  ];

  const quickActions: QuickAction[] = [
    { id: '1', label: 'I\'m on my way', icon: 'HOME' },
    { id: '2', label: 'Job completed', icon: 'SUCCESS' },
    { id: '3', label: 'Need more time', icon: 'NOTIFICATION' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      backgroundColor: theme.backgroundElement,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.divider,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.two,
      flex: 1,
    },
    backButton: {
      padding: Spacing.one,
    },
    partnerInfo: {
      flex: 1,
    },
    partnerName: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.half,
    },
    partnerStatus: {
      fontSize: 12,
      color: theme.accent,
      fontWeight: '600',
    },
    headerButtons: {
      flexDirection: 'row',
      gap: Spacing.one,
    },
    headerButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    messagesContainer: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
    },
    messageGroup: {
      marginBottom: Spacing.three,
    },
    messageBubble: {
      maxWidth: '85%',
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      borderRadius: 12,
      marginBottom: Spacing.one,
    },
    messageBubbleMe: {
      alignSelf: 'flex-end',
      backgroundColor: theme.primary,
    },
    messageBubbleOther: {
      alignSelf: 'flex-start',
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
    },
    messageText: {
      fontSize: 14,
      lineHeight: 20,
    },
    messageTextMe: {
      color: '#FFFFFF',
    },
    messageTextOther: {
      color: theme.text,
    },
    messageTime: {
      fontSize: 11,
      marginTop: Spacing.half,
    },
    messageTimeMe: {
      color: 'rgba(255,255,255,0.7)',
      textAlign: 'right',
    },
    messageTimeOther: {
      color: theme.textSecondary,
    },
    quickActionsContainer: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      gap: Spacing.one,
      marginBottom: Spacing.two,
    },
    quickAction: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 8,
      paddingVertical: Spacing.one,
      paddingHorizontal: Spacing.two,
      borderWidth: 1,
      borderColor: theme.border,
    },
    quickActionText: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.text,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: Spacing.one,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      backgroundColor: theme.backgroundElement,
      borderTopWidth: 1,
      borderTopColor: theme.divider,
    },
    addButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.backgroundSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
      flex: 1,
      backgroundColor: theme.backgroundSelected,
      borderRadius: 20,
      paddingHorizontal: Spacing.two,
      paddingVertical: Spacing.one,
      fontSize: 14,
      color: theme.text,
      maxHeight: 100,
    },
    sendButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // TODO: Send message to API
      setMessageText('');
    }
  };

  const renderMessage = ({ item, index }: { item: ChatMessage; index: number }) => (
    <View
      key={item.id}
      style={[
        styles.messageBubble,
        item.sender === 'me' ? styles.messageBubbleMe : styles.messageBubbleOther,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === 'me' ? styles.messageTextMe : styles.messageTextOther,
        ]}
      >
        {item.text}
      </Text>
      <Text
        style={[
          styles.messageTime,
          item.sender === 'me' ? styles.messageTimeMe : styles.messageTimeOther,
        ]}
      >
        {item.timestamp}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Icon name="BACK" size="MEDIUM" />
          </Pressable>
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerName}>{chatPartner.name}</Text>
            <Text style={styles.partnerStatus}>
              {chatPartner.isOnline ? '🟢 Online' : '⚫ Offline'}
            </Text>
          </View>
        </View>
        <View style={styles.headerButtons}>
          <Pressable
            style={styles.headerButton}
            onPress={() => router.push('/call/incoming')}
          >
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
          <Pressable style={styles.headerButton} onPress={() => {}}>
            <Icon name="NOTIFICATION" size="MEDIUM" />
          </Pressable>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg, index) => renderMessage({ item: msg, index }))}
      </ScrollView>

      {/* Quick Actions */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.quickActionsContainer}
        contentContainerStyle={{ gap: Spacing.one }}
      >
        {quickActions.map((action) => (
          <Pressable
            key={action.id}
            style={styles.quickAction}
            onPress={() => {
              setMessageText(action.label);
            }}
          >
            <Text style={styles.quickActionText}>{action.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <Pressable style={styles.addButton}>
          <Icon name="HOME" size="MEDIUM" />
        </Pressable>
        <TextInput
          style={styles.inputBox}
          placeholder="Type a message..."
          placeholderTextColor={theme.textSecondary}
          value={messageText}
          onChangeText={setMessageText}
          multiline
        />
        <Pressable
          style={styles.sendButton}
          onPress={handleSendMessage}
        >
          <Icon name="HOME" size="MEDIUM" style={{ color: '#FFFFFF' }} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
