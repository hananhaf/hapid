import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.confirmation, styles.iconLayout]}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Text style={[styles.confirmation1, styles.confirmation1Typo]}>
        Confirmation
      </Text>
      <Image
        style={styles.approvalIcon}
        resizeMode="cover"
        source={require("../assets/approval.png")}
      />
      <TouchableOpacity
        style={styles.iconlyboldarrowLeftCircl}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Home" })
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.orderConfirmed, styles.confirmation1Typo]}>
        Order Confirmed
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  confirmation1Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  confirmation1: {
    top: "4.03%",
    left: "23.85%",
    fontSize: FontSize.size_3xl,
  },
  approvalIcon: {
    top: 333,
    left: 150,
    width: 90,
    height: 90,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconlyboldarrowLeftCircl: {
    left: "6.41%",
    top: "4.38%",
    right: "85.38%",
    bottom: "91.82%",
    width: "8.21%",
    height: "3.79%",
    position: "absolute",
  },
  orderConfirmed: {
    top: 423,
    left: 95,
    fontSize: FontSize.size_2xl,
  },
  confirmation: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen1,
  },
});

export default Confirmation;
