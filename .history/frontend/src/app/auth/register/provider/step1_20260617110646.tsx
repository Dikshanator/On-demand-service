import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/use-theme";
import { Spacing } from "@/constants/theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { useAuth } from "@/context/AuthContext";
import { Icon } from "@/components/ui/icon";

export default function ProviderRegistrationStep1() {
  const theme = useTheme();
  const router = useRouter();
  const { registrationData, updateRegistrationData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: Spacing.three,
      paddingTop: Spacing.three,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    backButton: {
      padding: Spacing.two,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },
    stepIndicator: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    content: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.three,
    },
    progressContainer: {
      marginBottom: Spacing.four,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: theme.text,
      marginBottom: Spacing.one,
    },
    sectionSubtitle: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: Spacing.four,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.text,
      marginBottom: Spacing.one,
      marginTop: Spacing.two,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
    },
    loginLink: {
      marginTop: Spacing.two,
      flexDirection: "row",
      justifyContent: "center",
      gap: Spacing.one,
    },
    loginText: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    loginLinkText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: "600",
    },
  });

  const handleNext = () => {
    if (
      !registrationData.fullName ||
      !registrationData.email ||
      !registrationData.address ||
      !registrationData.password
    ) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/register/provider/step2");
    }, 500);
  };

  const canContinue =
    registrationData.fullName &&
    registrationData.email &&
    registrationData.address &&
    registrationData.password &&
    registrationData.password === registrationData.confirmPassword;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={{ fontSize: 20, color: theme.text }}>←</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Registration</Text>
          <Text style={styles.stepIndicator}>Step 1 of 4</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.progressContainer}>
            <ProgressIndicator currentStep={1} totalSteps={4} />
          </View>

          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.sectionSubtitle}>
            Start with your basic details
          </Text>

          <Text style={styles.label}>Full Name</Text>
          <Input
            placeholder="Enter your full name"
            value={registrationData.fullName}
            onChangeText={(text) => updateRegistrationData({ fullName: text })}
            icon={
              <Icon
                name="USER"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            }
          />

          <Text style={styles.label}>Email Address</Text>
          <Input
            placeholder="Enter your email address"
            value={registrationData.email}
            onChangeText={(text) => updateRegistrationData({ email: text })}
            icon={
              <Icon
                name="EMAIL"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            }
            keyboardType="email-address"
          />

          <Text style={styles.label}>Address</Text>
          <Input
            placeholder="Your city or area"
            value={registrationData.address}
            onChangeText={(text) => updateRegistrationData({ address: text })}
            icon={
              <Icon
                name="EMAIL"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            }
          />

          <Text style={styles.label}>Password</Text>
          <Input
            placeholder="Create a password"
            value={registrationData.password}
            onChangeText={(text) => updateRegistrationData({ password: text })}
            icon={
              <Icon
                name="ADDRESS"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            }
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password</Text>
          <Input
            placeholder="Confirm your password"
            value={registrationData.confirmPassword}
            onChangeText={(text) =>
              updateRegistrationData({ confirmPassword: text })
            }
            icon={
              <Icon
                name="LOCK"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
            }
            secureTextEntry
          />
        </View>

        <View style={styles.footer}>
          <Button
            title="Next →"
            onPress={handleNext}
            disabled={!canContinue}
            loading={isLoading}
          />
          <View style={styles.loginLink}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/auth/login")}>
              <Text style={styles.loginLinkText}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
