import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon2 from "../assets/Icon2.svg";
import Icon3 from "../assets/Icon3.svg";
import Icon4 from "../assets/Icon4.svg";

export type FormSectionmarginType = {};

const FormSectionmargin = ({}: FormSectionmarginType) => {
  return (
    <View style={styles.formSectionmargin}>
      <View style={styles.formSection}>
        <View style={[styles.emailInput, styles.buttonFlexBox]}>
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.container, styles.inputFlexBox]}>
              <Text style={styles.emailOrPhone}>Email or phone number</Text>
            </View>
          </View>
          <Icon2 style={styles.icon} width={20} height={16} />
        </View>
        <View style={styles.passwordInput}>
          <View style={[styles.emailInput, styles.buttonFlexBox]}>
            <View style={[styles.input2, styles.inputLayout]}>
              <View style={[styles.container, styles.inputFlexBox]}>
                <Text style={styles.emailOrPhone}>Password</Text>
              </View>
            </View>
            <Icon3 style={styles.icon2} width={16} height={21} />
            <View style={[styles.button, styles.buttonFlexBox]}>
              <View style={styles.container4}>
                <Icon4 style={styles.icon3} width={22} height={15} />
              </View>
            </View>
          </View>
          <View style={styles.container5}>
            <View style={styles.link}>
              <Text style={styles.text}>Forgot Password?</Text>
            </View>
          </View>
        </View>
        <View style={styles.signInButton}>
          <View style={[styles.signInButtonshadow, styles.inputLayout]} />
          <Text style={styles.text2}>Sign In</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputLayout: {
    zIndex: 0,
    borderRadius: 12,
    height: 56,
  },
  inputFlexBox: {
    overflow: "hidden",
    alignItems: "flex-start",
  },
  formSectionmargin: {
    marginTop: -10,
    zIndex: 1,
    paddingBottom: 16,
    alignItems: "flex-start",
    width: 350,
  },
  formSection: {
    gap: 24,
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  emailInput: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  input: {
    paddingLeft: 48,
    paddingTop: 18,
    paddingRight: 16,
    paddingBottom: 18,
    overflow: "hidden",
    alignItems: "flex-start",
    backgroundColor: "#f3f3f3",
    flex: 1,
    zIndex: 0,
  },
  container: {
    alignSelf: "stretch",
  },
  emailOrPhone: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Inter-Regular",
    color: "#6b7280",
    textAlign: "left",
    alignSelf: "stretch",
  },
  icon: {
    height: 16,
    width: 20,
    color: {
      a: 1,
      b: 0.5137255191802979,
      g: 0.4627451002597809,
      r: 0.4627451002597809,
    },
    position: "absolute",
    zIndex: 1,
  },
  passwordInput: {
    gap: 6,
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  input2: {
    paddingHorizontal: 48,
    paddingVertical: 18,
    overflow: "hidden",
    alignItems: "flex-start",
    backgroundColor: "#f3f3f3",
    flex: 1,
    zIndex: 0,
  },
  icon2: {
    height: 21,
    width: 16,
    color: {
      a: 1,
      b: 0.5137255191802979,
      g: 0.4627451002597809,
      r: 0.4627451002597809,
    },
    position: "absolute",
    zIndex: 1,
  },
  button: {
    zIndex: 2,
    position: "absolute",
    justifyContent: "center",
  },
  container4: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  icon3: {
    height: 15,
    width: 22,
    color: {
      a: 1,
      b: 0.5137255191802979,
      g: 0.4627451002597809,
      r: 0.4627451002597809,
    },
  },
  container5: {
    height: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  link: {
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#4c56af",
    textAlign: "left",
  },
  signInButton: {
    backgroundColor: "#000666",
    paddingTop: 15,
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingBottom: 16,
  },
  signInButtonshadow: {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    elevation: 6,
    backgroundColor: "rgba(255, 255, 255, 0)",
    position: "absolute",
    zIndex: 0,
    width: 350,
  },
  text2: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#fff",
    textAlign: "center",
    zIndex: 1,
  },
});

export default FormSectionmargin;
