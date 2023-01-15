import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const IconlyBoldBag = ({ style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.iconlyboldbag, style]}
      activeOpacity={0.2}
      onPress={() => navigation.navigate("ShoppingCart")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/iconlyboldbag.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconlyboldbag: {
    width: 30,
    height: 34,
  },
});

export default IconlyBoldBag;
