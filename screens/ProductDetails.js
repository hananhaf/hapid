import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ProductDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.productDetails, styles.iconLayout]}>
      <Image
        style={[styles.productDetailsChild, styles.childPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={[styles.nikeAirZoom, styles.rp1000000Typo]}>
        Nike Air Zoom
      </Text>
      <Text style={[styles.rp1000000, styles.sizeUkTypo, styles.rp1000000Typo]}>
        Rp. 1.000.000
      </Text>
      <Text style={[styles.sizeUk, styles.sizeUkPosition, styles.sizeUkTypo]}>
        Size (UK)
      </Text>
      <View
        style={[
          styles.productDetailsItem,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <View
        style={[
          styles.productDetailsInner,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectangleLayout]}
        locations={[0, 1]}
        colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
      />
      <View
        style={[
          styles.rectangleView,
          styles.rectangleLayout,
          styles.productLayout,
        ]}
      />
      <View
        style={[
          styles.productDetailsChild1,
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
      <Text style={[styles.teknologiZoomAir, styles.sizeUkPosition]}>
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
        style={[styles.productDetailsChild2, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetailsChild3, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetailsChild4, styles.productChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.productDetailsChild5, styles.productChildLayout]}
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
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "ShoppingCart" })
        }
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childPosition,
          ]}
        />
        <Image
          style={styles.facebookIcon}
          resizeMode="cover"
          source={require("../assets/facebook1.png")}
        />
        <Text style={[styles.beliSekarang, styles.beliSekarangTypo]}>
          BELI SEKARANG
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  rp1000000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    color: Color.white,
    position: "absolute",
  },
  sizeUkTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  sizeUkPosition: {
    left: 21,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.rubik,
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
  productDetailsChild: {
    width: 390,
    height: 401,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  nikeAirZoom: {
    top: 418,
    left: 17,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.rubik,
  },
  rp1000000: {
    top: 427,
    left: 239,
  },
  sizeUk: {
    top: 478,
  },
  productDetailsItem: {
    left: 20,
  },
  productDetailsInner: {
    left: 96,
  },
  rectangleLineargradient: {
    left: 172,
    backgroundColor: Color.greenishGreen1,
    width: 46,
    borderRadius: Border.br_2xs,
    top: 524,
  },
  rectangleView: {
    left: 248,
  },
  productDetailsChild1: {
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
    top: 617,
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
  productDetailsChild2: {
    left: 155,
  },
  productDetailsChild3: {
    left: 183,
  },
  productDetailsChild4: {
    left: 211,
  },
  productDetailsChild5: {
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
  productDetails: {
    backgroundColor: Color.black,
    flex: 1,
    height: 844,
    borderRadius: Border.br_xl,
  },
});

export default ProductDetails;
