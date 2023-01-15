import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const IconlyBoldHome = ({ style }) => {
  return (
    <Image
      style={[styles.iconlyboldhome, style]}
      resizeMode="cover"
      source={require("../assets/iconlyboldhome.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconlyboldhome: {
    width: 30,
    height: 34,
  },
});

export default IconlyBoldHome;
