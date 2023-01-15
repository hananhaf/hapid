import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ProductDetails4 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.productDetails4, styles.iconLayout]}>
      <ImageBackground
        style={styles.productDetails4Child}
        resizeMode="cover"
        source={require("../assets/rectangle15.png")}
      />
      <Text style={[styles.nikeAirMax, styles.airTypo]}>Nike Air Max</Text>
      <Text style={[styles.rp2000000, styles.sizeUkTypo]}>Rp. 2.000.000</Text>
      <Text style={[styles.sizeUk, styles.sizeUkTypo]}>Size (UK)</Text>
      <View
        style={[
          styles.productDetails4Item,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <View
        style={[
          styles.productDetails4Inner,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.rectangleLayout,
          styles.rectangleLayout1,
        ]}
      />
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.rectangleLayout,
          styles.rectangleLayout1,
        ]}
        locations={[0, 1]}
        colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
      />
      <View
        style={[
          styles.productDetails4Child1,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <Text style={[styles.text, styles.textTypo]}>5</Text>
      <Text style={[styles.text1, styles.textTypo]}>6</Text>
      <Text style={[styles.text2, styles.textTypo]}>7</Text>
      <Text style={[styles.text3, styles.textTypo]}>8</Text>
      <Text style={[styles.text4, styles.textTypo]}>9</Text>
      <Text style={[styles.productDescription, styles.beliSekarangTypo]}>
        Product Description
      </Text>
      <Text style={[styles.teknologiZoomAir, styles.airTypo]}>
        “Teknologi Zoom Air memberi pelari manfaat lari yang lebih responsif dan
        energik. Ini membantu memantul dari jalan, membuat kaki pelari naik dan
        turun lebih cepat ke langkah berikutnya, ”kata Brett Holts, Sr. Footwear
        Product Director untuk Nike Running.
      </Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-13.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.productDetails4Child2, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails4Child3, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails4Child4, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetails4Child5, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Pressable
        style={styles.iconlyboldarrowLeftCircl}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Home" })
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.facebookIcon}
          resizeMode="cover"
          source={require("../assets/facebook1.png")}
        />
        <Text style={[styles.beliSekarang, styles.beliSekarangTypo]}>
          BELI SEKARANG
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  airTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    color: Color.white,
    position: "absolute",
  },
  sizeUkTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleLayout: {
    height: 39,
    width: 46,
    borderRadius: Border.br_2xs,
    top: 524,
    position: "absolute",
  },
  productLayout: {
    backgroundColor: Color.white,
    width: 46,
    borderRadius: Border.br_2xs,
    top: 524,
  },
  rectangleLayout1: {
    width: 46,
    borderRadius: Border.br_2xs,
    top: 524,
  },
  textTypo: {
    top: 531,
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  beliSekarangTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  productChildLayout: {
    height: 15,
    width: 15,
    top: 370,
    position: "absolute",
  },
  groupChildLayout: {
    height: 57,
    width: 198,
    position: "absolute",
  },
  productDetails4Child: {
    height: "47.51%",
    top: "0%",
    right: "-0.16%",
    bottom: "52.49%",
    left: "0.16%",
    borderRadius: Border.br_md,
    transform: [
      {
        rotate: "0.09deg",
      },
    ],
    position: "absolute",
    width: "100%",
  },
  nikeAirMax: {
    top: 418,
    left: 17,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.rubik,
  },
  rp2000000: {
    top: 424,
    left: 219,
  },
  sizeUk: {
    top: 478,
    left: 21,
  },
  productDetails4Item: {
    left: 20,
  },
  productDetails4Inner: {
    left: 96,
  },
  rectangleView: {
    left: 172,
    backgroundColor: Color.gray_300,
  },
  rectangleLineargradient: {
    left: 248,
    backgroundColor: Color.greenishGreen1,
  },
  productDetails4Child1: {
    left: 324,
  },
  text: {
    left: 36,
    color: Color.black,
  },
  text1: {
    left: 112,
    color: Color.black,
  },
  text2: {
    left: 188,
    color: Color.black,
  },
  text3: {
    left: 264,
    color: Color.black,
  },
  text4: {
    left: 340,
    color: Color.black,
  },
  productDescription: {
    top: 585,
    left: 20,
    color: Color.white,
    fontSize: FontSize.size_lg,
  },
  teknologiZoomAir: {
    top: 609,
    left: 27,
    fontSize: FontSize.size_base,
    width: 346,
    height: 24,
  },
  groupIcon: {
    top: 759,
    left: 53,
    width: 59,
    height: 53,
    position: "absolute",
  },
  ellipseIcon: {
    left: 126,
  },
  productDetails4Child2: {
    left: 155,
  },
  productDetails4Child3: {
    left: 183,
  },
  productDetails4Child4: {
    left: 211,
  },
  productDetails4Child5: {
    left: 239,
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
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.green_100,
  },
  facebookIcon: {
    top: 768,
    left: 171,
    width: 20,
    height: 36,
    display: "none",
    position: "absolute",
  },
  beliSekarang: {
    top: 17,
    left: 25,
    width: 165,
    color: Color.black,
  },
  rectangleParent: {
    top: 757,
    left: 163,
  },
  productDetails4: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    flex: 1,
    height: 844,
  },
});

export default ProductDetails4;
