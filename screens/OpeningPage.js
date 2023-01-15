import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const OpeningPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.openingPage}
      onPress={() => navigation.navigate("LogIn")}
    >
      <Image
        style={styles.openingPageChild}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.sneakers, styles.udbTypo]}>SNEAKERS</Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <Text style={[styles.udb, styles.udbTypo]}>UDB</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  udbTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  openingPageChild: {
    top: 121,
    left: 65,
    width: 260,
    height: 260,
    position: "absolute",
  },
  sneakers: {
    top: 435,
    left: 108,
  },
  image1Icon: {
    top: 131,
    left: 84,
    width: 240,
    height: 240,
    position: "absolute",
  },
  udb: {
    top: 485,
    left: 160,
  },
  openingPage: {
    borderRadius: Border.br_xl,
    backgroundColor: "#00ffb2",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default OpeningPage;
