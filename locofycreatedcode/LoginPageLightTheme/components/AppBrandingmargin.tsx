import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon11 from "../assets/Icon1.svg";

export type AppBrandingmarginType = {};

const AppBrandingmargin = ({}: AppBrandingmarginType) => {
  return (
    <View style={[styles.appBrandingmargin, styles.marginPosition]}>
      <View style={styles.appBranding}>
        <View style={[styles.logoContainer, styles.logoLayout]}>
          <View style={[styles.logoContainershadow, styles.logoLayout]} />
          <View style={styles.container}>
            <Icon11 style={styles.icon} width={42} height={41} />
          </View>
          <View style={[styles.margin, styles.marginPosition]}>
            <View style={styles.container2}>
              <Text style={styles.text}>HAMROSEWA</Text>
            </View>
          </View>
        </View>
        <View style={styles.heading1marginParent}>
          <View style={styles.heading1margin}>
            <Text style={[styles.heading1, styles.text2FlexBox]}>
              Welcome Back
            </Text>
          </View>
          <View style={styles.containerWrapper}>
            <View style={styles.container3}>
              <Text style={[styles.text2, styles.text2FlexBox]}>
                Sign in to continue
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginPosition: {
    zIndex: 2,
    alignItems: "flex-start",
  },
  logoLayout: {
    borderRadius: 9999,
    height: 128,
    width: 128,
  },
  text2FlexBox: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  appBrandingmargin: {
    width: 350,
    paddingBottom: 40,
  },
  appBranding: {
    alignSelf: "stretch",
    gap: 16,
    alignItems: "center",
  },
  logoContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#c7c6d0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainershadow: {
    position: "absolute",
    marginLeft: -64,
    left: "50%",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
    elevation: 15,
    backgroundColor: "rgba(255, 255, 255, 0)",
    zIndex: 0,
  },
  container: {
    zIndex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  icon: {
    width: 42,
    height: 41,
    color: {
      a: 1,
      b: 0.6666666865348816,
      g: 0.2666666805744171,
      r: 0.1921568661928177,
    },
  },
  margin: {
    paddingTop: 8,
    alignSelf: "center",
  },
  container2: {
    alignSelf: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    letterSpacing: 0.3,
    lineHeight: 16,
    textTransform: "uppercase",
    fontFamily: "HankenGrotesk-Bold",
    color: "#1b1b1b",
    textAlign: "center",
    fontWeight: "700",
    alignSelf: "center",
  },
  heading1marginParent: {
    width: 195.2,
    height: 64,
    alignItems: "flex-start",
  },
  heading1margin: {
    paddingBottom: 8,
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  heading1: {
    fontSize: 28,
    letterSpacing: -0.56,
    lineHeight: 36,
    fontFamily: "Inter-Bold",
    color: "#1a1c1c",
    fontWeight: "700",
  },
  containerWrapper: {
    width: 159.1,
    height: 20,
    flexDirection: "row",
    paddingLeft: 36,
    alignItems: "flex-start",
  },
  container3: {
    alignItems: "flex-start",
  },
  text2: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter-Regular",
    color: "#454652",
  },
});

export default AppBrandingmargin;
