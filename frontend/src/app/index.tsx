import { redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function HomeScreen() {
  const { authStep } = useAuth();

  // Redirect to appropriate screen based on auth state
  if (authStep === 'authenticated') {
    redirect('/dashboard');
  }

  redirect('/auth/role-selection');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  getStartedButton: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.three,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.two,
  },
  getStartedButtonPressed: {
    backgroundColor: Colors.light.primary,
  },
  getStartedText: {
    textTransform: "none",
    color: Colors.light.primary,
    fontFamily: undefined,
  },
  getStartedTextPressed: {
    color: "#ffffff",
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
