import * as React from "react";
import { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";

export type Button1Type = {
  imgGooglemargin?: ImageSourcePropType;
  text?: string;

  /** Style props */
  buttonPaddingHorizontal?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  buttonPaddingHorizontal,
  imgGooglemargin,
  text,
}: Button1Type) => {
  const button1Style = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", buttonPaddingHorizontal),
    };
  }, [buttonPaddingHorizontal]);

  return (
    <View style={[styles.button, button1Style]}>
      <Image
        style={styles.imgGooglemargin}
        contentFit="cover"
        source={imgGooglemargin}
      />
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#c6c5d4",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 0,
    alignItems: "center",
  },
  imgGooglemargin: {
    height: 20,
    width: 28,
  },
  container: {
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#1a1c1c",
    textAlign: "center",
  },
});

export default Button1;
