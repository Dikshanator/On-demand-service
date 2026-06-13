import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

const TOKEN = {
  bg: "#FFFFFF",
  bgDark: "#1C1C1E",
  border: "rgba(0,0,0,0.08)",
  borderDark: "rgba(255,255,255,0.10)",
  textPrimary: "#0A0A0A",
  textPrimaryDark: "#F5F5F7",
  textMuted: "#8A8A8E",
  textMutedDark: "#6B6B76",
  success: "#22C55E",
  error: "#EF4444",
  info: "#3B82F6",
  warning: "#F59E0B",
  radius: 12,
};

const ICONS: Record<Variant, { glyph: string; color: string }> = {
  success: { glyph: "●", color: TOKEN.success },  // replaced below with SVG-like text
  error:   { glyph: "●", color: TOKEN.error },
  info:    { glyph: "●", color: TOKEN.info },
  warning: { glyph: "●", color: TOKEN.warning },
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: TOKEN.bg,
    borderRadius: TOKEN.radius,
    borderWidth: 1,
    borderColor: TOKEN.border,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.10,
        shadowRadius: 16,
      },
      android: { elevation: 4 },
    }),
  },
  
  icon: {
    marginTop: 1,
    fontSize: 10,
    lineHeight: 18,
    includeFontPadding: false,
  },
  body: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: TOKEN.textPrimary,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    color: TOKEN.textMuted,
    lineHeight: 18,
  },
});

type Variant = "success" | "error" | "info" | "warning";

interface ToastCardProps {
  variant: Variant;
  text1?: string;
  text2?: string;
}

const ToastCard: React.FC<ToastCardProps> = ({ variant, text1, text2 }) => {
  const icon = ICONS[variant];

  return (
    <View style={styles.card}>
      
      <Text style={[styles.icon, { color: icon.color }]}>⬤</Text>

      <View style={styles.body}>
        {text1 ? (
          <Text style={styles.title} numberOfLines={1}>
            {text1}
          </Text>
        ) : null}
        {text2 ? (
          <Text style={styles.description} numberOfLines={2}>
            {text2}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export const toastConfig = {
  success: ({ text1, text2 }: { text1?: string; text2?: string }) => (
    <ToastCard variant="success" text1={text1} text2={text2} />
  ),
  error: ({ text1, text2 }: { text1?: string; text2?: string }) => (
    <ToastCard variant="error" text1={text1} text2={text2} />
  ),
  info: ({ text1, text2 }: { text1?: string; text2?: string }) => (
    <ToastCard variant="info" text1={text1} text2={text2} />
  ),
  warning: ({ text1, text2 }: { text1?: string; text2?: string }) => (
    <ToastCard variant="warning" text1={text1} text2={text2} />
  ),
};