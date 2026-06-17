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
import { useTheme } from "@/hooks/use-theme";
import { Icon } from "@/components/ui/icon";
import Toast from "react-native-toast-message";
import { authApi } from "@/api/api";

export default function LoginScreen() {
  const router = useRouter();
  const { userRole, setAuthStep } = useAuth();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await authApi.login(email, password);

      if (response.result?.user?.role === "CLIENT") {
        router.push("/client/(tabs)/home");
      } else if (response.result?.user?.role === "PROVIDER") {
        router.push("/provider/(tabs)/home");
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2:
          error.response?.data?.message || error.message || "An error occurred",
        position: "bottom",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/forgot-password");
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
      style={{ flex: 1, backgroundColor: theme.background }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
        {/* Back Button */}
        <Pressable onPress={() => router.back()} className="p-2 ml-4 mt-2">
          <Text className="text-2xl" style={{ color: theme.text }}>
            ←
          </Text>
        </Pressable>

        {/* Header Section - App Branding */}
        <View className="items-center pt-6 pb-10">
          {/* Logo Container */}
          <View
            className="w-32 h-32 rounded-full items-center justify-center shadow-lg mb-4"
            style={{
              backgroundColor: theme.backgroundElement,
              borderWidth: 1,
              borderColor: theme.border,
            }}
          >
            <Icon name="HOME" size="LARGE" style={{ color: theme.primary }} />
          </View>

          {/* Logo Text */}
          <Text
            className="text-xs font-bold tracking-wide uppercase mb-4"
            style={{ color: theme.text }}
          >
            HAMROSEWA
          </Text>

          {/* Welcome Text */}
          <Text
            className="text-3xl font-bold text-center mb-2"
            style={{ color: theme.text }}
          >
            Welcome Back
          </Text>

          {/* Subtitle */}
          <Text
            className="text-sm text-center"
            style={{ color: theme.textSecondary }}
          >
            Sign in to continue
          </Text>
        </View>

        {/* Form Section */}
        <View className="px-5 gap-6">
          {/* Email Input */}
          <View className="gap-3">
            <Text
              className="text-sm font-semibold"
              style={{ color: theme.text }}
            >
              Email or phone number
            </Text>
            <View
              className="flex-row items-center rounded-2xl pl-4 pr-4"
              style={{ backgroundColor: theme.backgroundElement }}
            >
              <Icon
                name="EMAIL"
                size="MEDIUM"
                style={{ color: theme.primary }}
              />
              <TextInput
                placeholder="Email or phone number"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor={theme.textSecondary}
                className="flex-1 py-4 text-base"
                style={{ color: theme.text }}
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="gap-3">
            <Text
              className="text-sm font-semibold"
              style={{ color: theme.text }}
            >
              Password
            </Text>
            <View
              className="flex-row items-center rounded-2xl pl-4 pr-4"
              style={{ backgroundColor: theme.backgroundElement }}
            >
              <Icon
                name="EMAIL"
                size="MEDIUM"
                className="mg-2"
                style={{ color: theme.primary }}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholderTextColor={theme.textSecondary}
                className="flex-1 py-4 text-base"
                style={{ color: theme.text }}
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="p-2"
              >
                {/* Eye icon - TODO: Replace with eye/visibility icon asset */}
                <Icon
                  name={showPassword ? "EYE" : "EYE_HIDDEN"}
                  size="MEDIUM"
                />
              </Pressable>
            </View>
          </View>

          {/* Forgot Password Link */}
          <Pressable onPress={handleForgotPassword}>
            <Text
              className="text-sm font-semibold"
              style={{ color: theme.primary }}
            >
              Forgot Password?
            </Text>
          </Pressable>

          {/* Sign In Button */}
          <Pressable
            onPress={handleLogin}
            disabled={isLoading}
            className="rounded-2xl py-4 items-center justify-center mt-4 shadow-md"
            style={{ backgroundColor: theme.primary }}
          >
            <Text className="text-white font-semibold text-lg">
              {isLoading ? "Signing in..." : "Sign In"}
            </Text>
          </Pressable>
        </View>

        {/* Divider */}
        <View className="flex-row items-center px-5 my-8 gap-4">
          <View
            className="flex-1 h-px"
            style={{ backgroundColor: theme.border }}
          />
          <Text
            className="text-sm font-semibold"
            style={{ color: theme.textSecondary }}
          >
            or
          </Text>
          <View
            className="flex-1 h-px"
            style={{ backgroundColor: theme.border }}
          />
        </View>

        {/* Social Login Buttons */}
        <View className="px-5 gap-3 mb-8">
          <Pressable
            className="flex-row items-center justify-center rounded-2xl py-3 gap-2"
            style={{
              backgroundColor: theme.backgroundElement,
              borderWidth: 1,
              borderColor: theme.border,
            }}
          >
            <Image
              source={require("../../../assets/images/Img-Google-margin2x.png")}
              className="w-7 h-5"
              resizeMode="contain"
            />
            <Text className="font-semibold" style={{ color: theme.text }}>
              Google
            </Text>
          </Pressable>

          <Pressable
            className="flex-row items-center justify-center rounded-2xl py-3 gap-2"
            style={{
              backgroundColor: theme.backgroundElement,
              borderWidth: 1,
              borderColor: theme.border,
            }}
          >
            <Image
              source={require("../../../assets/images/Img-Apple-margin2x.png")}
              className="w-7 h-5"
              resizeMode="contain"
            />
            <Text className="font-semibold" style={{ color: theme.text }}>
              Apple
            </Text>
          </Pressable>
        </View>

        {/* Sign Up Link */}
        <View className="items-center pb-8">
          <View className="flex-row gap-1">
            <Text className="text-sm" style={{ color: theme.textSecondary }}>
              Don&apos;t have an account?
            </Text>
            <Pressable onPress={handleSignup}>
              <Text
                className="text-sm font-semibold"
                style={{ color: theme.primary }}
              >
                Create Account
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
