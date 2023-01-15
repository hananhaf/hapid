import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const IconlyBoldNotification = ({ style }) => {
  return (
    <Image
      style={[styles.iconlyboldnotification, style]}
      resizeMode="cover"
      source={require("../assets/iconlyboldnotification.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconlyboldnotification: {
    width: 30,
    height: 34,
  },
});

export default IconlyBoldNotification;
