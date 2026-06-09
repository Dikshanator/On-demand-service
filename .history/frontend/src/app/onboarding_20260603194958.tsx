import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Spacing, Colors } from '@/constants/theme';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title">Welcome to the app</ThemedText>
        <ThemedText type="small" style={styles.lead}>
          This is a short onboarding screen. Tap continue to return.
        </ThemedText>

        <Pressable style={styles.continueButton} onPress={() => router.replace('/')}>
          <ThemedText type="code" style={styles.continueText}>
            Continue
          </ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    width: '100%',
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
  },
  lead: {
    marginTop: Spacing.two,
    textAlign: 'center',
    marginBottom: Spacing.four,
  },
  continueButton: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.three,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: Colors.light.primary,
  },
});
