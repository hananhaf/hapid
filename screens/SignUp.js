import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.signUp}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <LinearGradient
        style={styles.signUpChild}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 251, 251, 0.1)"]}
      />
      <Text style={styles.signUp1}>Sign up</Text>
      <View style={[styles.signUpItem, styles.signLayout]} />
      <View style={[styles.signUpInner, styles.signLayout]} />
      <View style={[styles.rectangleView, styles.signLayout]} />
      <Text style={[styles.hafidAw, styles.textTypo, styles.hafidAwPosition]}>
        Hafid AW
      </Text>
      <Text
        style={[
          styles.fulsenyum12gmailcom,
          styles.textTypo,
          styles.hafidAwPosition,
        ]}
      >
        fulsenyum12@gmail.com
      </Text>
      <Text style={[styles.text, styles.textTypo]}>*************</Text>
      <Text style={[styles.sudahMemilikiAkunContainer, styles.textTypo]}>
        <Text style={styles.sudahMemilikiAkun}>Sudah Memiliki Akun?</Text>
        <Text style={styles.logIn}> Log in</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.facebookIcon}
          resizeMode="cover"
          source={require("../assets/facebook1.png")}
        />
        <Text style={[styles.signUp2, styles.textTypo]}>Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 57,
    width: 350,
    backgroundColor: Color.white,
    left: 20,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  hafidAwPosition: {
    left: 33,
    fontSize: FontSize.size_lg,
  },
  groupChildLayout: {
    width: 198,
    height: 57,
    position: "absolute",
  },
  signUpChild: {
    top: 198,
    width: 390,
    height: 667,
    left: 0,
    position: "absolute",
    backgroundColor: Color.greenishGreen1,
    borderRadius: Border.br_xl,
  },
  signUp1: {
    top: 235,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    color: Color.black,
    left: 34,
    position: "absolute",
  },
  signUpItem: {
    top: 291,
  },
  signUpInner: {
    top: 360,
  },
  rectangleView: {
    top: 429,
  },
  hafidAw: {
    top: 307,
    color: "#0e0101",
  },
  fulsenyum12gmailcom: {
    top: 376,
    color: Color.gray_700,
  },
  text: {
    top: 449,
    color: Color.gray_800,
    left: 34,
    fontSize: FontSize.size_lg,
  },
  sudahMemilikiAkun: {
    color: Color.black,
  },
  logIn: {
    color: Color.white,
  },
  sudahMemilikiAkunContainer: {
    top: 738,
    left: 39,
  },
  ellipseIcon: {
    top: 52,
    left: 135,
    width: 120,
    height: 121,
    position: "absolute",
  },
  image2Icon: {
    top: 45,
    left: 131,
    width: 128,
    height: 128,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.green_100,
    borderRadius: Border.br_lg,
    width: 198,
    left: 0,
  },
  facebookIcon: {
    top: 515,
    left: 111,
    width: 20,
    height: 36,
    display: "none",
    position: "absolute",
  },
  signUp2: {
    top: 17,
    left: 61,
    width: 84,
    color: Color.black,
  },
  rectangleParent: {
    top: 504,
    left: 103,
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.greenishGreen1,
    borderRadius: Border.br_xl,
  },
});

export default SignUp;
