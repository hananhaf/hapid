import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.logIn, styles.logBg]}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <LinearGradient
        style={[styles.logInChild, styles.logBg]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 251, 251, 0.1)"]}
      />
      <Text style={styles.logIn1}>Log in</Text>
      <View
        style={[
          styles.logInItem,
          styles.logGroupLayout,
          styles.logLayout,
          styles.logPosition,
        ]}
      />
      <View
        style={[
          styles.logInInner,
          styles.logGroupLayout,
          styles.logLayout,
          styles.logPosition,
        ]}
      />
      <Text style={[styles.fulsenyum12gmailcom, styles.orTypo]}>
        fulsenyum12@gmail.com
      </Text>
      <Text style={[styles.text, styles.orTypo]}>*************</Text>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectanglePosition, styles.logGroupLayout]}>
          <View
            style={[
              styles.rectanglePosition,
              styles.logGroupLayout,
              styles.logLayout,
            ]}
          />
          <Image
            style={[styles.facebookIcon, styles.facebookIconLayout]}
            resizeMode="cover"
            source={require("../assets/facebook.png")}
          />
          <Text style={[styles.continueWithFacebook, styles.continueTypo]}>
            Continue with Facebook
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.logGroupLayout]}>
          <View style={[styles.logGroupLayout, styles.logLayout]} />
          <Image
            style={styles.googleIcon}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
            Continue with Google
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.logGroupLayout]}>
          <View style={styles.logLayout} />
          <Image
            style={styles.appleIcon}
            resizeMode="cover"
            source={require("../assets/apple.png")}
          />
          <Text style={[styles.continueWithApple, styles.continueTypo]}>
            Continue with Apple
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.tidakPunyaAkunContainer, styles.orTypo]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.tidakPunyaAkun}>Tidak Punya Akun?</Text>
        <Text style={styles.signUp}> Sign up</Text>
      </Pressable>
      <Text style={[styles.lupaPassword, styles.orTypo]}>Lupa Password?</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <TouchableOpacity
        style={[styles.groupTouchableopacity, styles.rectangleViewLayout]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Home" })
        }
      >
        <View
          style={[
            styles.rectangleView,
            styles.rectangleViewLayout,
            styles.rectanglePosition,
          ]}
        />
        <Image
          style={[styles.facebookIcon1, styles.facebookIconLayout]}
          resizeMode="cover"
          source={require("../assets/facebook1.png")}
        />
        <Text style={[styles.login, styles.continueTypo]}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logBg: {
    backgroundColor: Color.greenishGreen1,
    borderRadius: Border.br_xl,
  },
  logGroupLayout: {
    height: 57,
    width: 350,
    position: "absolute",
  },
  logLayout: {
    backgroundColor: Color.white,
    height: 57,
    borderRadius: Border.br_lg,
  },
  logPosition: {
    left: 20,
    backgroundColor: Color.white,
  },
  orTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  facebookIconLayout: {
    height: 36,
    position: "absolute",
  },
  continueTypo: {
    top: 17,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 198,
    height: 57,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    left: 0,
  },
  logInChild: {
    top: 186,
    width: 390,
    height: 667,
    left: 0,
    position: "absolute",
  },
  logIn1: {
    top: 218,
    left: 29,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  logInItem: {
    top: 262,
  },
  logInInner: {
    top: 325,
  },
  fulsenyum12gmailcom: {
    top: 278,
    left: 40,
    color: Color.gray_700,
  },
  text: {
    top: 341,
    left: 38,
    color: Color.gray_800,
  },
  or: {
    top: 461,
    left: 180,
    color: Color.black,
  },
  facebookIcon: {
    top: 11,
    left: 14,
    width: 36,
  },
  continueWithFacebook: {
    left: 67,
  },
  googleIcon: {
    top: 2,
    left: 6,
    width: 52,
    height: 52,
    position: "absolute",
  },
  continueWithGoogle: {
    left: 80,
  },
  rectangleGroup: {
    top: 68,
    left: 0,
  },
  appleIcon: {
    top: 5,
    left: 8,
    width: 48,
    height: 48,
    position: "absolute",
  },
  continueWithApple: {
    left: 86,
  },
  rectangleContainer: {
    top: 136,
    left: 0,
  },
  groupParent: {
    top: 485,
    height: 193,
    width: 350,
    left: 20,
    position: "absolute",
  },
  tidakPunyaAkun: {
    color: Color.black,
  },
  signUp: {
    color: Color.white,
  },
  tidakPunyaAkunContainer: {
    top: 707,
    left: 35,
  },
  lupaPassword: {
    top: 737,
    left: 42,
    color: Color.white,
  },
  ellipseIcon: {
    top: 52,
    left: 135,
    width: 120,
    height: 121,
    position: "absolute",
  },
  image1Icon: {
    top: 45,
    left: 131,
    width: 128,
    height: 128,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.green_100,
    borderRadius: Border.br_lg,
    width: 198,
    top: 0,
  },
  facebookIcon1: {
    top: 404,
    left: 104,
    width: 20,
    display: "none",
  },
  login: {
    left: 72,
    width: 71,
  },
  groupTouchableopacity: {
    top: 393,
    left: 96,
  },
  logIn: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LogIn;
