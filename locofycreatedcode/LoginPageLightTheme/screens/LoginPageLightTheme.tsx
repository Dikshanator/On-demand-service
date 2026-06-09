import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppBrandingmargin from "../components/AppBrandingmargin";
import FormSectionmargin from "../components/FormSectionmargin";
import AlternativeLoginImplicitFr from "../components/AlternativeLoginImplicitFr";

export type LoginPageLightThemeType = {};

const LoginPageLightTheme = ({}: LoginPageLightThemeType) => {
  return (
    <View style={[styles.loginPageLightTheme, styles.mainContentCanvasLayout]}>
      <View style={[styles.mainContentCanvas, styles.mainContentCanvasLayout]}>
        <View style={[styles.appBrandingmarginParent, styles.footerLayout]}>
          <AppBrandingmargin />
          <FormSectionmargin />
        </View>
        <View style={[styles.dividermargin, styles.footerLayout]}>
          <View style={[styles.divider, styles.dividerFlexBox]}>
            <View style={styles.horizontalDivider} />
            <View style={styles.margin}>
              <Text style={styles.text}>or</Text>
            </View>
            <View style={styles.horizontalDivider} />
          </View>
        </View>
        <AlternativeLoginImplicitFr />
        <View style={[styles.footer, styles.footerLayout]}>
          <View style={[styles.paragraph, styles.dividerFlexBox]}>
            <Text
              style={[styles.text2, styles.text2Typo]}
            >{`Don’t have an account? `}</Text>
            <Text style={[styles.linkCreate, styles.text2Typo]}>
              Create Account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.backgroundIllustrationatmosp}>
        <LinearGradient
          style={styles.gradient}
          locations={[0, 1]}
          colors={["#e0e0ff", "rgba(224, 224, 255, 0)"]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContentCanvasLayout: {
    width: "100%",
    alignItems: "flex-start",
  },
  dividerFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  footerLayout: {
    width: 350,
    alignItems: "flex-start",
  },
  text2Typo: {
    textAlign: "center",
    fontFamily: "Inter-Regular",
    lineHeight: 20,
    fontSize: 14,
  },
  loginPageLightTheme: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    flex: 1,
  },
  mainContentCanvas: {
    height: 820,
    paddingTop: 38,
    paddingBottom: 78,
    maxWidth: 448,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  appBrandingmarginParent: {
    height: 496,
  },
  dividermargin: {
    paddingHorizontal: 0,
    paddingVertical: 40,
    zIndex: 3,
  },
  divider: {
    alignItems: "center",
    flexDirection: "row",
  },
  horizontalDivider: {
    height: 1,
    width: 152,
    borderStyle: "solid",
    borderColor: "#c6c5d4",
    borderWidth: 1,
  },
  margin: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
  },
  text: {
    alignSelf: "flex-start",
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    textAlign: "left",
    color: "#454652",
    lineHeight: 20,
    fontSize: 14,
  },
  footer: {
    zIndex: 2,
  },
  paragraph: {
    gap: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  text2: {
    color: "#454652",
  },
  linkCreate: {
    color: "#4c56af",
  },
  backgroundIllustrationatmosp: {
    height: 221,
    position: "absolute",
    justifyContent: "flex-end",
    opacity: 0,
    zIndex: 0,
    width: 390,
    alignItems: "flex-start",
  },
  gradient: {
    backgroundColor: "transparent",
    width: 390,
    flex: 1,
  },
});

export default LoginPageLightTheme;
