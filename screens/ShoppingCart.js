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
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const ShoppingCart = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.shoppingCart}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Text style={[styles.shoppingCart1, styles.rp1000000Typo]}>
        Shopping Cart
      </Text>
      <Image
        style={[
          styles.iconlyboldheart,
          styles.iconLayout1,
          styles.iconlyboldheartPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/iconlyboldheart2.png")}
      />
      <View style={styles.shoppingCartChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
      </View>
      <Image
        style={[styles.shoppingCartItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Text style={[styles.nikeAirZoom, styles.nikeAirZoomTypo]}>
        Nike Air Zoom
      </Text>
      <View style={[styles.shoppingCartInner, styles.shoppingLayout]} />
      <View style={[styles.shoppingCartChild1, styles.shoppingLayout]} />
      <Text style={[styles.size7, styles.textTypo, styles.textPosition]}>
        Size : 7
      </Text>
      <Image
        style={[styles.iconlyboldarrowDown2, styles.check1IconLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-2.png")}
      />
      <Text style={[styles.text, styles.textTypo, styles.textPosition]}>-</Text>
      <Text style={[styles.text1, styles.textTypo, styles.textPosition]}>
        1
      </Text>
      <Text style={[styles.text2, styles.textTypo, styles.textPosition]}>
        +
      </Text>
      <Image
        style={[styles.check1Icon, styles.check1IconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
      <Text style={[styles.deliveryBy28th, styles.textTypo]}>
        Delivery by 28th Jan
      </Text>
      <Text style={[styles.selectPaymentMode, styles.nikeAirZoomTypo]}>
        Select Payment Mode
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild2, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild3, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.shoppingCartChild4, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text
        style={[
          styles.addDebitcreditatmCard,
          styles.addCardTypo,
          styles.briPosition,
        ]}
      >
        Add Debit/Credit/ATM Card
      </Text>
      <Text style={[styles.bri, styles.addCardTypo, styles.briPosition]}>
        BRI
      </Text>
      <Text style={[styles.bca, styles.addCardTypo, styles.briPosition]}>
        BCA
      </Text>
      <Text style={[styles.gopay, styles.addCardTypo, styles.briPosition]}>
        Gopay
      </Text>
      <Text style={[styles.addGiftCard, styles.addCardTypo]}>
        Add Gift Card or Promo Code
      </Text>
      <Image
        style={[styles.iconlyboldarrowDownCircl, styles.shoppingChildLayout]}
        resizeMode="cover"
        source={require("../assets/iconlyboldarrow--down-circle.png")}
      />
      <Text style={[styles.rp1000000, styles.rp1000000Typo]}>
        Rp. 1.000.000
      </Text>
      <TouchableOpacity
        style={styles.rectangleGroup}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Confirmation")}
      >
        <View
          style={[
            styles.groupChild2,
            styles.iconLayout,
            styles.groupChildPosition,
          ]}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/facebook1.png")}
        />
        <Text style={[styles.bayarSekarang, styles.addCardTypo]}>
          BAYAR SEKARANG
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.iconlyboldarrowLeftCircl,
          styles.iconlyboldheartPosition,
        ]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rp1000000Typo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlyboldheartPosition: {
    bottom: "91.82%",
    top: "4.38%",
    width: "8.21%",
    height: "3.79%",
    position: "absolute",
  },
  groupPosition: {
    right: "0.29%",
    left: "0%",
    width: "99.71%",
    height: "18.39%",
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  nikeAirZoomTypo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  shoppingLayout: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    bottom: "75.12%",
    top: "22.27%",
    width: "18.97%",
    height: "2.61%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition: {
    top: "22.51%",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  check1IconLayout: {
    width: "3.85%",
    height: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shoppingChildLayout: {
    left: "9.74%",
    right: "84.1%",
    width: "6.15%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addCardTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  briPosition: {
    left: "22.05%",
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  shoppingCart1: {
    top: "4.03%",
    left: "18.97%",
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  iconlyboldheart: {
    right: "5.13%",
    left: "86.67%",
  },
  shoppingCartChild: {
    height: "19.91%",
    width: "88.97%",
    top: "14.93%",
    right: "5.9%",
    bottom: "65.17%",
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
    left: "5.13%",
    position: "absolute",
  },
  groupChild: {
    bottom: "81.61%",
    left: "0%",
    top: "0%",
  },
  groupItem: {
    top: "20.4%",
    bottom: "61.21%",
    left: "0%",
  },
  groupInner: {
    top: "40.81%",
    bottom: "40.81%",
    left: "0%",
  },
  rectangleView: {
    top: "61.21%",
    bottom: "20.4%",
    left: "0%",
  },
  groupChild1: {
    top: "81.61%",
    left: "0.29%",
    width: "99.71%",
    height: "18.39%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
  },
  rectangleParent: {
    height: "47.04%",
    width: "89.23%",
    top: "42.3%",
    right: "5.64%",
    bottom: "10.66%",
    left: "5.13%",
    position: "absolute",
  },
  shoppingCartItem: {
    height: "16.59%",
    width: "32.31%",
    top: "16.59%",
    right: "58.97%",
    bottom: "66.82%",
    left: "8.72%",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  nikeAirZoom: {
    top: "17.77%",
    color: Color.white,
    left: "45.38%",
  },
  shoppingCartInner: {
    right: "35.13%",
    left: "45.9%",
  },
  shoppingCartChild1: {
    right: "14.36%",
    left: "66.67%",
  },
  size7: {
    left: "47.44%",
  },
  iconlyboldarrowDown2: {
    top: "22.75%",
    right: "35.64%",
    bottom: "75.47%",
    left: "60.51%",
  },
  text: {
    left: "67.69%",
  },
  text1: {
    left: "75.13%",
  },
  text2: {
    left: "81.54%",
  },
  check1Icon: {
    top: "30.57%",
    right: "50.77%",
    bottom: "67.65%",
    left: "45.38%",
  },
  deliveryBy28th: {
    top: "30.33%",
    left: "51.03%",
    color: Color.white,
  },
  selectPaymentMode: {
    top: "37.8%",
    left: "5.13%",
    color: Color.black,
  },
  ellipseIcon: {
    bottom: "52.01%",
    top: "45.14%",
  },
  shoppingCartChild2: {
    bottom: "42.42%",
    top: "54.74%",
  },
  shoppingCartChild3: {
    bottom: "32.82%",
    top: "64.34%",
  },
  shoppingCartChild4: {
    bottom: "23.22%",
    top: "73.93%",
  },
  addDebitcreditatmCard: {
    top: "45.14%",
  },
  bri: {
    top: "54.74%",
  },
  bca: {
    top: "64.34%",
  },
  gopay: {
    top: "73.93%",
  },
  addGiftCard: {
    top: "83.53%",
    left: "22.31%",
    color: "#f1f4f3",
  },
  iconlyboldarrowDownCircl: {
    top: "83.65%",
    bottom: "13.51%",
  },
  rp1000000: {
    top: "26.3%",
    left: "44.87%",
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  groupChild2: {
    borderRadius: Border.br_lg,
    backgroundColor: "#0c0d0c",
    left: "0%",
    top: "0%",
  },
  facebookIcon: {
    height: "63.16%",
    width: "10.29%",
    top: "1368.42%",
    right: "37.73%",
    bottom: "-1331.58%",
    left: "51.98%",
    display: "none",
    position: "absolute",
  },
  bayarSekarang: {
    width: "89.9%",
    top: "29.82%",
    left: "5.05%",
    color: "#29ef18",
  },
  rectangleGroup: {
    height: "6.75%",
    width: "50.77%",
    top: "91.11%",
    right: "24.87%",
    bottom: "2.13%",
    left: "24.36%",
    position: "absolute",
  },
  iconlyboldarrowLeftCircl: {
    left: "5.64%",
    right: "86.15%",
  },
  shoppingCart: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen1,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShoppingCart;
