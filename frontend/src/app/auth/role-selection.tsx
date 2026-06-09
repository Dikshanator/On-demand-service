import React, { useState } from "react";
import {
  Appearance,
  View,
  Text,
  ScrollView,
  Pressable,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RoleSelectionScreen() {
  const router = useRouter();
  const { setUserRole, setAuthStep } = useAuth();
  const [selectedRole, setSelectedRole] = useState<
    "client" | "provider" | null
  >(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  
  const toggleTheme = () => {
    Appearance.setColorScheme(isDark ? "light" : "dark");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-4 px-5 items-center">
        {/* Theme Toggle */}
        <Pressable
          onPress={toggleTheme}
          className="self-end flex-row items-center gap-2 px-3 py-2 rounded-full border border-gray-300 bg-gray-100 mb-6"
        >
          <Text className="text-sm">{isDark ? "🌙" : "☀️"}</Text>
          <Text className="text-xs font-semibold text-gray-900">
            {isDark ? "Dark" : "Light"}
          </Text>
        </Pressable>

        {/* Logo Container */}
        <View className="w-32 h-32 rounded-full bg-white border border-gray-300 items-center justify-center shadow-lg mb-6">
          <Text className="text-5xl">🏠</Text>
        </View>

        {/* Brand Text */}
        <Text className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
          HAMROSEWA
        </Text>

        {/* Welcome Text */}
        <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
          Welcome!
        </Text>

        {/* Subtitle */}
        <Text className="text-base text-gray-600 text-center leading-6">
          Reliable local services for every home and business across Nepal.
        </Text>
      </View>

      {/* Content */}
      <View className="px-5 py-6 flex-1">
        <Text className="text-xl font-bold text-gray-900 text-center mb-2">
          Choose Your Path
        </Text>
        <Text className="text-base text-gray-600 text-center mb-6">
          Are you looking for service or joining our team?
        </Text>

        {/* Client Role Card */}
        <Pressable
          onPress={() => setSelectedRole("client")}
          className={`p-4 rounded-2xl mb-4 border-2 ${
            selectedRole === "client"
              ? "border-blue-900 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <View className="flex-row items-center">
            <View className="w-12 h-12 rounded-full bg-blue-900 items-center justify-center mr-4">
              <Text className="text-2xl">👤</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                I need a Service
              </Text>
              <Text className="text-sm text-gray-600 leading-5">
                Access top-rated professionals for your home, office, or event
                maintenance.
              </Text>
            </View>
          </View>
        </Pressable>

        {/* Provider Role Card */}
        <Pressable
          onPress={() => setSelectedRole("provider")}
          className={`p-4 rounded-2xl mb-6 border-2 ${
            selectedRole === "provider"
              ? "border-blue-900 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <View className="flex-row items-center">
            <View className="w-12 h-12 rounded-full bg-blue-900 items-center justify-center mr-4">
              <Text className="text-2xl">💼</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900 mb-1">
                I am a Professional
              </Text>
              <Text className="text-sm text-gray-600 leading-5">
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
          className={`rounded-2xl py-4 items-center justify-center ${
            selectedRole
              ? "bg-blue-900"
              : "bg-gray-300"
          }`}
        >
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </Pressable>
        <Text className="text-xs text-gray-600 text-center mt-4">
          By continuing, you agree to our Terms of Service
        </Text>
      </View>
    </ScrollView>
  );
}
