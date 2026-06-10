import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function LoginScreen() {
  const router = useRouter();
  const { userRole, setAuthStep } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep("authenticated");
      router.push("/dashboard");
    }, 1500);
  };

  const handleSignup = () => {
    setAuthStep("register");
    if (userRole === "client") {
      router.push("/auth/register/client/step1");
    } else {
      router.push("/auth/register/provider/step1");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1 bg-white">
        {/* Back Button */}
        <Pressable onPress={() => router.back()} className="p-2 ml-4 mt-2">
          <Text className="text-2xl text-gray-900">←</Text>
        </Pressable>

        {/* Header Section - App Branding */}
        <View className="items-center pt-6 pb-10">
          {/* Logo Container */}
          <View className="w-32 h-32 rounded-full bg-white border border-gray-300 items-center justify-center shadow-lg mb-4">
            <Text className="text-5xl">🏠</Text>
          </View>

          {/* Logo Text */}
          <Text className="text-xs font-bold tracking-wide text-gray-900 uppercase mb-4">
            HAMROSEWA
          </Text>

          {/* Welcome Text */}
          <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
            Welcome Back
          </Text>

          {/* Subtitle */}
          <Text className="text-sm text-gray-600 text-center">
            Sign in to continue
          </Text>
        </View>

        {/* Form Section */}
        <View className="px-5 gap-6">
          {/* Email Input */}
          <View className="gap-3">
            <Text className="text-sm font-semibold text-gray-900">
              Email or phone number
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-2xl pl-4 pr-4">
              <Text className="text-lg mr-3">✉️</Text>
              <TextInput
                placeholder="Email or phone number"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor="#9ca3af"
                className="flex-1 py-4 text-base text-gray-900"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="gap-3">
            <Text className="text-sm font-semibold text-gray-900">
              Password
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-2xl pl-4 pr-4">
              <Text className="text-lg mr-3">🔒</Text>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholderTextColor="#9ca3af"
                className="flex-1 py-4 text-base text-gray-900"
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="p-2"
              >
                <Text className="text-lg">{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
              </Pressable>
            </View>
          </View>

          {/* Forgot Password Link */}
          <Pressable className="self-end">
            <Text className="text-sm font-semibold text-blue-600">
              Forgot Password?
            </Text>
          </Pressable>

          {/* Sign In Button */}
          <Pressable
            onPress={handleLogin}
            disabled={isLoading}
            className="bg-blue-900 rounded-2xl py-4 items-center justify-center mt-4 shadow-md"
          >
            <Text className="text-white font-semibold text-lg">
              {isLoading ? "Signing in..." : "Sign In"}
            </Text>
          </Pressable>
        </View>

        {/* Divider */}
        <View className="flex-row items-center px-5 my-8 gap-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="text-sm font-semibold text-gray-600">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="px-5 gap-3 mb-8">
          <Pressable className="flex-row items-center justify-center border border-gray-300 rounded-2xl py-3 gap-2">
            <Image
              source={require("@/assets/images/Img-Google-margin@2x.png")}
              className="w-7 h-5"
              resizeMode="contain"
            />
            <Text className="font-semibold text-gray-900">Google</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-center border border-gray-300 rounded-2xl py-3 gap-2">
            <Image
              source={require("@/assets/images/Img-Apple-margin@2x.png")}
              className="w-7 h-5"
              resizeMode="contain"
            />
            <Text className="font-semibold text-gray-900">Apple</Text>
          </Pressable>
        </View>

        {/* Sign Up Link */}
        <View className="items-center pb-8">
          <View className="flex-row gap-1">
            <Text className="text-sm text-gray-600">
              Don&apos;t have an account?
            </Text>
            <Pressable onPress={handleSignup}>
              <Text className="text-sm font-semibold text-blue-600">
                Create Account
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
