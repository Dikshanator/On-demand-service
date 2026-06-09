import * as React from "react";
import { StyleSheet, View } from "react-native";
import Button1 from "./Button1";

export type AlternativeLoginImplicitFrType = {};

const AlternativeLoginImplicitFr = ({}: AlternativeLoginImplicitFrType) => {
  return (
    <View style={styles.socialalternativeLoginImpl}>
      <View style={styles.socialalternativeLoginImpl2}>
        <Button1
          imgGooglemargin={require("../assets/Img-Google-margin.png")}
          text="Google"
        />
        <Button1
          buttonPaddingHorizontal="unset"
          imgGooglemargin={require("../assets/Img-Apple-margin.png")}
          text="Apple"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialalternativeLoginImpl: {
    width: 350,
    alignItems: "flex-start",
    paddingBottom: 40,
    zIndex: 1,
  },
  socialalternativeLoginImpl2: {
    alignSelf: "stretch",
  },
});

export default AlternativeLoginImplicitFr;
