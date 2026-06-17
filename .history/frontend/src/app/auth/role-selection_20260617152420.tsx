import React, { useState } from "react";
import { Appearance, View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useTheme } from "@/hooks/use-theme";
import { Icon } from "@/components/ui/icon";

export default function RoleSelectionScreen() {
  const router = useRouter();
  const { setUserRole, setAuthStep } = useAuth();
  const [selectedRole, setSelectedRole] = useState<
    "client" | "provider" | null
  >(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = useTheme();

  const toggleTheme = () => {
    Appearance.setColorScheme(isDark ? "light" : "dark");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header */}
      <View className="pt-4 px-5 items-center">
        {/* Theme Toggle */}
        <Pressable
          onPress={toggleTheme}
          className="self-end flex-row items-center gap-2 px-3 py-2 rounded-full mb-6"
          style={{
            borderWidth: 1,
            borderColor: theme.border,
            backgroundColor: theme.backgroundElement,
          }}
        >
          {/* Theme toggle icons - TODO: Replace with theme icon assets */}
          <Icon name={isDark ? "MOON" : "SUN"} size="SMALL" />
          <Text className="text-xs font-semibold" style={{ color: theme.text }}>
            {isDark ? "Dark" : "Light"}
          </Text>
        </Pressable>

        {/* Logo Container */}
        {/* TODO: Replace with actual logo image/SVG */}
        <View
          className="w-32 h-32 rounded-full items-center justify-center shadow-lg mb-6"
          style={{
            backgroundColor: theme.backgroundElement,
            borderWidth: 1,
            borderColor: theme.border,
          }}
        >
          <Icon name="HOME" size="XXLARGE" style={{ color: theme.primary }} />
        </View>

        {/* Brand Text */}
        <Text
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: theme.text }}
        >
          HAMROSEWA
        </Text>

        {/* Welcome Text */}
        <Text
          className="text-3xl font-bold text-center mb-2"
          style={{ color: theme.text }}
        >
          Welcome!
        </Text>

        {/* Subtitle */}
        <Text
          className="text-base text-center leading-6"
          style={{ color: theme.textSecondary }}
        >
          Reliable local services for every home and business across Nepal.
        </Text>
      </View>

      {/* Content */}
      <View className="px-5 py-6 flex-1">
        <Text
          className="text-xl font-bold text-center mb-2"
          style={{ color: theme.text }}
        >
          Choose Your Path
        </Text>
        <Text
          className="text-base text-center mb-6"
          style={{ color: theme.textSecondary }}
        >
          Are you looking for service or joining our team?
        </Text>

        {/* Client Role Card */}
        <Pressable
          onPress={() => setSelectedRole("client")}
          className="p-4 rounded-2xl mb-4 border-2"
          style={{
            borderColor:
              selectedRole === "client" ? theme.primary : theme.border,
            backgroundColor:
              selectedRole === "client"
                ? theme.primaryLight
                : theme.backgroundElement,
          }}
        >
          <View className="flex-row items-center">
            <View
              className="w-12 h-12 rounded-full items-center justify-center mr-4"
              style={{ backgroundColor: theme.primary }}
            >
              <Icon name="USER" size="LARGE" style={{ color: "white" }} />
            </View>
            <View className="flex-1">
              <Text
                className="text-lg font-semibold mb-1"
                style={{ color: theme.text }}
              >
                I need a Service
              </Text>
              <Text
                className="text-sm leading-5"
                style={{ color: theme.textSecondary }}
              >
                Access top-rated professionals for your home, office, or event
                maintenance.
              </Text>
            </View>
          </View>
        </Pressable>

        {/* Provider Role Card */}
        <Pressable
          onPress={() => setSelectedRole("provider")}
          className="p-4 rounded-2xl mb-6 border-2"
          style={{
            borderColor:
              selectedRole === "provider" ? theme.primary : theme.border,
            backgroundColor:
              selectedRole === "provider"
                ? theme.primaryLight
                : theme.backgroundElement,
          }}
        >
          <View className="flex-row items-center">
            <View
              className="w-12 h-12 rounded-full items-center justify-center mr-4"
              style={{ backgroundColor: theme.primary }}
            >
              {/* Professional icon - TODO: Replace with briefcase icon asset */}
              <Icon name="PROFESSIONAL" size="LARGE" />
            </View>
            <View className="flex-1">
              <Text
                className="text-lg font-semibold mb-1"
                style={{ color: theme.text }}
              >
                I am a Professional
              </Text>
              <Text
                className="text-sm leading-5"
                style={{ color: theme.textSecondary }}
              >
                Join Nepal&apos;s largest service network and grow your business
                effectively.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      {/* Footer */}
      <View className="px-5 pb-6">
        <Pressable
          onPress={() => {
            if (selectedRole) {
              setUserRole(selectedRole);
              setAuthStep("login");
              router.push("/auth/login");
            }
          }}
          disabled={!selectedRole}
          className="rounded-2xl py-4 items-center justify-center"
          style={{
            backgroundColor: selectedRole
              ? theme.primary
              : theme.backgroundSelected,
          }}
        >
          <Text
            className="font-semibold text-lg"
            style={{ color: selectedRole ? "#FFFFFF" : theme.textSecondary }}
          >
            Continue
          </Text>
        </Pressable>
        <Text
          className="text-xs text-center mt-4"
          style={{ color: theme.textSecondary }}
        >
          By continuing, you agree to our Terms of Service
        </Text>
      </View>
    </ScrollView>
  );
}
