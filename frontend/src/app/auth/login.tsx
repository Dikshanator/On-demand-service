import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';

export default function LoginScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { userRole, setAuthStep } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingTop: Spacing.five,
      paddingHorizontal: Spacing.three,
      alignItems: 'center',
      paddingBottom: Spacing.four,
    },
    backButton: {
      alignSelf: 'flex-start',
      padding: Spacing.two,
    },
    backText: {
      fontSize: 24,
      color: theme.text,
    },
    logoContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: Spacing.four,
      borderWidth: 2,
      borderColor: theme.border,
    },
    logo: {
      fontSize: 50,
    },
    welcomeText: {
      fontSize: 28,
      fontWeight: '700',
      color: theme.text,
      marginBottom: Spacing.one,
    },
    subtitleText: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
    },
    content: {
      flex: 1,
      paddingHorizontal: Spacing.three,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: Spacing.one,
      marginTop: Spacing.two,
    },
    forgotButton: {
      alignSelf: 'flex-end',
      marginBottom: Spacing.three,
    },
    forgotText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: '600',
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Spacing.four,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: theme.border,
    },
    dividerText: {
      marginHorizontal: Spacing.two,
      color: theme.textSecondary,
      fontSize: 14,
    },
    socialButtons: {
      flexDirection: 'row',
      gap: Spacing.three,
    },
    socialButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 12,
      paddingVertical: Spacing.three,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: Spacing.two,
    },
    socialButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
    },
    footer: {
      paddingHorizontal: Spacing.three,
      paddingBottom: Spacing.four,
      alignItems: 'center',
    },
    signupLink: {
      marginTop: Spacing.two,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: Spacing.one,
    },
    signupText: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    signupLinkText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: '600',
    },
  });

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep('authenticated');
      router.push('/dashboard');
    }, 1500);
  };

  const handleSignup = () => {
    setAuthStep('register');
    if (userRole === 'client') {
      router.push('/auth/register/client/step1');
    } else {
      router.push('/auth/register/provider/step1');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>←</Text>
          </Pressable>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🏠</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.subtitleText}>Sign in to continue</Text>
        </View>

        <View style={styles.content}>
          <View style={{ backgroundColor: theme.backgroundElement, padding: Spacing.three, borderRadius: 16 }}>
            <Text style={styles.label}>Email or Phone Number</Text>
            <Input
              placeholder="Email or phone number"
              value={email}
              onChangeText={setEmail}
              icon={<Text style={{ fontSize: 18 }}>✉️</Text>}
              keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              icon={<Text style={{ fontSize: 18 }}>🔒</Text>}
              secureTextEntry
            />

            <Pressable style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>

            <Button
              title="Sign In"
              onPress={handleLogin}
              loading={isLoading}
            />
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>🔵 Google</Text>
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Text style={styles.socialButtonText}>🍎 Apple</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.signupLink}>
            <Text style={styles.signupText}>Don&apos;t have an account?</Text>
            <Pressable onPress={handleSignup}>
              <Text style={styles.signupLinkText}>Create Account</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
