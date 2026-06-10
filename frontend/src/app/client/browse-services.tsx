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

interface Service {
  id: string;
  name: string;
  icon: string;
  nearby: number;
}

export default function BrowseServicesScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // TODO: Fetch services from API
  const services: Service[] = [
    { id: '1', name: 'Electrician', icon: 'ELECTRICIAN', nearby: 12 },
    { id: '2', name: 'Plumber', icon: 'PLUMBER', nearby: 8 },
    { id: '3', name: 'Cleaner', icon: 'CLEANER', nearby: 15 },
    { id: '4', name: 'Tutor', icon: 'TUTOR', nearby: 20 },
    { id: '5', name: 'Mechanic', icon: 'MECHANIC', nearby: 6 },
    { id: '6', name: 'Handyman', icon: 'HANDYMAN', nearby: 10 },
  ];

  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    headerButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.backgroundElement,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.text,
      flex: 1,
    },
    content: {
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    searchInput: {
      backgroundColor: theme.backgroundElement,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      fontSize: 14,
      color: theme.text,
      marginBottom: Spacing.three,
    },
    serviceGrid: {
      gap: Spacing.two,
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
  });

  const renderService = ({ item }: { item: Service }) => (
    <Pressable
      style={styles.serviceCard}
      onPress={() => router.push(`/client/service/${item.id}`)}
    >
      <Icon name={item.icon as any} size="XLARGE" />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.serviceNearby}>{item.nearby} Nearby</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => router.back()}>
          <Icon name="BACK" size="MEDIUM" />
        </Pressable>
        <Text style={styles.headerTitle}>Browse Services</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search services..."
          placeholderTextColor={theme.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {/* Services Grid */}
        <FlatList
          data={filteredServices}
          renderItem={renderService}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={{ gap: Spacing.two }}
          contentContainerStyle={styles.serviceGrid}
        />
      </ScrollView>
    </View>
  );
}
