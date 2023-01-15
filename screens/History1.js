import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const History1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.history}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <Text style={[styles.historyPembelian, styles.nikeAirZoomTypo]}>
        History Pembelian
      </Text>
      <TouchableOpacity
        style={styles.iconlyboldarrowLeftCircl}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Home" })
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          accessible="true"
          resizeMode="cover"
          source={require("../assets/iconlyboldarrow--left-circle.png")}
        />
      </TouchableOpacity>
      <View style={styles.historyChild} />
      <Image
        style={[
          styles.historyItem,
          styles.historyItemPosition,
          styles.iconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Text
        style={[
          styles.nikeAirZoom,
          styles.historyItemPosition,
          styles.nikeAirZoomTypo,
        ]}
      >
        Nike Air Zoom
      </Text>
      <Text style={[styles.size7, styles.qty1Typo]}>Size : 7</Text>
      <Text style={[styles.qty1, styles.qty1Typo]}>Qty : 1</Text>
      <Text style={[styles.rp1000000, styles.rp1000000Typo]}>
        Rp. 1.000.000
      </Text>
      <Text style={[styles.totalPesanan, styles.rp1000000Typo]}>
        Total Pesanan :
      </Text>
      <Text style={[styles.deliveryBy28th, styles.qty1Typo]}>
        Delivery by 28th Jan
      </Text>
      <Image
        style={[styles.check1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/check-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  nikeAirZoomTypo: {
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  historyItemPosition: {
    top: "14.93%",
    position: "absolute",
  },
  qty1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  rp1000000Typo: {
    fontSize: FontSize.size_sm,
    top: "29.86%",
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  historyPembelian: {
    top: "4.03%",
    left: "18.21%",
    fontSize: FontSize.size_3xl,
    color: Color.black,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
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
  historyChild: {
    height: "19.91%",
    width: "88.97%",
    top: "13.27%",
    right: "5.9%",
    bottom: "66.82%",
    left: "5.13%",
    borderRadius: Border.br_md,
    backgroundColor: Color.black,
    position: "absolute",
  },
  historyItem: {
    height: "16.59%",
    width: "32.31%",
    right: "57.18%",
    bottom: "68.48%",
    left: "10.51%",
    borderRadius: Border.br_sm,
  },
  nikeAirZoom: {
    fontSize: FontSize.size_2xl,
    color: Color.white,
    left: "48.46%",
  },
  size7: {
    top: "19.08%",
    color: Color.gray_200,
    left: "48.46%",
  },
  qty1: {
    top: "21.56%",
    left: "48.72%",
    color: Color.gray_200,
  },
  rp1000000: {
    left: "71.28%",
    color: Color.white,
  },
  totalPesanan: {
    color: Color.gray_200,
    left: "48.46%",
  },
  deliveryBy28th: {
    top: "25.71%",
    left: "53.85%",
    color: Color.white,
  },
  check1Icon: {
    height: "1.78%",
    width: "3.85%",
    top: "26.07%",
    right: "47.69%",
    bottom: "72.16%",
    left: "48.46%",
    position: "absolute",
  },
  history: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen1,
    overflow: "hidden",
    width: "100%",
  },
});

export default History1;
