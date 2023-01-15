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
import { Margin, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#00ffb2", "rgba(17, 165, 138, 0.5)"]}
    >
      <View style={[styles.rectangleParent, styles.frameChild4Transform]}>
        <View
          style={[styles.frameChild, styles.frameLayout1, styles.frameLayout2]}
        />
        <View style={[styles.frameItem, styles.frameLayout1]} />
        <View
          style={[styles.frameInner, styles.frameLayout1, styles.frameLayout2]}
        />
        <View
          style={[
            styles.rectangleView,
            styles.frameLayout1,
            styles.frameLayout2,
          ]}
        />
        <Text style={[styles.newlyLaunched, styles.mostPopularTypo]}>
          Newly Launched
        </Text>
        <View style={styles.shoeStateInfo}>
          <Text
            style={[
              styles.nikeAirZoom,
              styles.nikeTypo,
              styles.rp1000000Layout,
            ]}
          >{`Nike Air Zoom `}</Text>
          <Image
            style={[styles.communityIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/community.png")}
          />
          <Text style={[styles.kPeopleBought, styles.peopleTypo1]}>
            1.8K people bought this
          </Text>
          <View style={[styles.stars, styles.starsFlexBox]}>
            <Image
              style={styles.starIcon}
              resizeMode="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star1.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star2.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star3.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star4.png")}
            />
          </View>
          <Text
            style={[styles.rp1000000, styles.nikeTypo, styles.rp1000000Layout]}
          >
            Rp. 1.000.000
          </Text>
        </View>
        <View style={[styles.shoeStateInfo1, styles.shoeLayout]}>
          <Text style={styles.nikeAir2}>Nike Air 2</Text>
          <Image
            style={[styles.communityIcon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/community1.png")}
          />
          <Text style={[styles.kPeopleBought1, styles.peopleTypo1]}>
            1.8K people bought this
          </Text>
          <View style={[styles.stars1, styles.starsFlexBox]}>
            <Image
              style={styles.starIcon}
              resizeMode="cover"
              source={require("../assets/star5.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star6.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star7.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star8.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star9.png")}
            />
          </View>
          <Text style={[styles.rp2000000, styles.nikeTypo]}>Rp. 2.000.000</Text>
        </View>
        <View style={[styles.shoeStateInfo2, styles.shoeLayout]}>
          <Text style={[styles.nikeCourt, styles.nikeTypo]}>Nike Court</Text>
          <Image
            style={[styles.communityIcon2, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/community2.png")}
          />
          <Text style={[styles.kPeopleBought2, styles.peopleTypo]}>
            5K people bought this
          </Text>
          <View style={[styles.stars2, styles.starsFlexBox]}>
            <Image
              style={styles.starIcon}
              resizeMode="cover"
              source={require("../assets/star10.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star11.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star12.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star13.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star14.png")}
            />
          </View>
          <Text style={[styles.rp10000001, styles.nikeTypo]}>
            Rp. 1.000.000
          </Text>
        </View>
        <View style={styles.shoeStateInfo3}>
          <Text style={[styles.nikeAirMax, styles.nikeTypo]}>Nike Air Max</Text>
          <Image
            style={[styles.communityIcon3, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/community3.png")}
          />
          <Text style={[styles.kPeopleBought3, styles.peopleTypo]}>
            5K people bought this
          </Text>
          <View style={[styles.stars3, styles.starsFlexBox]}>
            <Image
              style={styles.starIcon}
              resizeMode="cover"
              source={require("../assets/star15.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star16.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star17.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star18.png")}
            />
            <Image
              style={[styles.starIcon, styles.ml3]}
              resizeMode="cover"
              source={require("../assets/star19.png")}
            />
          </View>
          <Text style={[styles.rp10000002, styles.nikeTypo]}>
            Rp. 1.000.000
          </Text>
        </View>
        <Text style={[styles.mostPopular, styles.mostPopularTypo]}>
          Most Popular
        </Text>
        <Pressable
          style={[styles.wrapper, styles.frameLayout, styles.framePosition1]}
          onPress={() => navigation.navigate("ProductDetails")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.frameLayout]}
          onPress={() => navigation.navigate("ProductDetails3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </Pressable>
        <Pressable
          style={[
            styles.frame,
            styles.framePosition,
            styles.frameLayout,
            styles.framePosition1,
          ]}
          onPress={() => navigation.navigate("ProductDetails2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/rectangle-17.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectanglePressable, styles.framePosition]}
          onPress={() => navigation.navigate("ProductDetails4")}
        >
          <Image
            style={[styles.icon, styles.iconLayout, styles.iconLayout1]}
            accessible="true"
            resizeMode="cover"
            source={require("../assets/rectangle-15.png")}
          />
        </Pressable>
        <View style={styles.rectangleGroup}>
          <View
            style={[
              styles.frameChild1,
              styles.frameChildLayout1,
              styles.frameChildPosition,
            ]}
          />
          <View style={[styles.frameChild2, styles.frameChildLayout1]} />
          <View
            style={[
              styles.frameChild3,
              styles.searchBarLayout,
              styles.frameChildLayout1,
              styles.frameChildPosition,
            ]}
          />
          <View
            style={[
              styles.frameChild4,
              styles.frameChildLayout1,
              styles.frameChild4Transform,
            ]}
          />
          <Image
            style={[
              styles.rectangleIcon,
              styles.frameChildLayout,
              styles.frameChild5Position,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-121.png")}
          />
          <Image
            style={[
              styles.frameChild5,
              styles.frameChildLayout,
              styles.frameChild5Position,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Image
            style={[styles.frameChild6, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-14.png")}
          />
          <Image
            style={[styles.frameChild7, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-151.png")}
          />
          <Text style={[styles.jordan32, styles.jordan32Typo]}>Jordan 32</Text>
          <Text style={[styles.jordan35, styles.jordan35Typo]}>Jordan 35</Text>
          <Text style={[styles.nikeAir3, styles.nikeAir3Typo]}>Nike Air 3</Text>
          <Text style={[styles.nikeDunk2, styles.nikeDunk2Typo]}>
            Nike Dunk 2
          </Text>
          <Text style={[styles.rp980000, styles.jordan32Typo]}>Rp.980.000</Text>
          <Text style={[styles.rp9800001, styles.jordan35Typo]}>
            Rp.980.000
          </Text>
          <Text style={[styles.rp9800002, styles.nikeAir3Typo]}>
            Rp.980.000
          </Text>
          <Text style={[styles.rp9800003, styles.nikeDunk2Typo]}>
            Rp.980.000
          </Text>
        </View>
      </View>
      <View style={[styles.searchBar, styles.searchBarLayout]}>
        <View style={[styles.searchBar1, styles.iconLayout]} />
        <Image
          style={[styles.hiconOutlineSearch2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/hicon--outline--search-2.png")}
        />
        <Text style={styles.egNikeAir}>e.g Nike Air Jordans</Text>
      </View>
      <TouchableOpacity
        style={styles.iconlyboldchart}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "History" })
        }
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconlyboldchart.png")}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ml3: {
    marginLeft: Margin.m_md,
  },
  frameChild4Transform: {
    transform: [
      {
        rotate: "0.09deg",
      },
    ],
    position: "absolute",
  },
  frameLayout1: {
    backgroundColor: Color.gray_100,
    height: "11.88%",
    borderRadius: Border.br_md,
    position: "absolute",
  },
  frameLayout2: {
    width: "45.36%",
    backgroundColor: Color.gray_100,
    height: "11.88%",
  },
  mostPopularTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    height: "3.45%",
    position: "absolute",
  },
  nikeTypo: {
    color: Color.gray_400,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dMSans,
    textAlign: "left",
    position: "absolute",
  },
  rp1000000Layout: {
    height: "32.44%",
    fontSize: FontSize.size_sm,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  peopleTypo1: {
    textAlign: "right",
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    color: Color.gray_600,
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  starsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  shoeLayout: {
    height: "5.16%",
    position: "absolute",
  },
  peopleTypo: {
    color: Color.gray_500,
    textAlign: "right",
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dMSans,
    position: "absolute",
  },
  frameLayout: {
    height: "26.29%",
    width: "45.95%",
  },
  framePosition1: {
    left: "3.25%",
    width: "45.95%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  framePosition: {
    top: "45.2%",
    position: "absolute",
  },
  frameChildLayout1: {
    width: 143,
    backgroundColor: Color.black,
    borderBottomLeftRadius: Border.br_md,
    borderBottomRightRadius: Border.br_md,
  },
  frameChildPosition: {
    top: 152,
    width: 143,
    backgroundColor: Color.black,
    borderBottomLeftRadius: Border.br_md,
    borderBottomRightRadius: Border.br_md,
  },
  searchBarLayout: {
    height: 38,
    position: "absolute",
  },
  frameChildLayout: {
    height: 149,
    width: 149,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  frameChild5Position: {
    top: 10,
    width: 149,
  },
  jordan32Typo: {
    color: Color.white,
    top: 162,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  jordan35Typo: {
    top: 161,
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  nikeAir3Typo: {
    top: 165,
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    position: "absolute",
  },
  nikeDunk2Typo: {
    height: 17,
    width: 68,
    top: 165,
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    fontWeight: "500",
    transform: [
      {
        rotate: "0.09deg",
      },
    ],
    position: "absolute",
  },
  menuShadowBox: {
    height: 58,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  iconlyboldheartLayout: {
    height: 34,
    width: 30,
    position: "absolute",
  },
  iconlyboldheartPosition: {
    top: 6,
    width: 30,
  },
  iconlyboldhomePosition: {
    top: 5,
    height: 34,
    width: 30,
    position: "absolute",
  },
  frameChild: {
    top: "27.86%",
    right: "50.51%",
    bottom: "60.26%",
    left: "4.13%",
  },
  frameItem: {
    width: "43.85%",
    top: "65.94%",
    right: "2.14%",
    bottom: "22.18%",
    left: "54.01%",
    backgroundColor: Color.gray_100,
    height: "11.88%",
  },
  frameInner: {
    top: "65.99%",
    right: "50.91%",
    bottom: "22.14%",
    left: "3.73%",
  },
  rectangleView: {
    top: "27.82%",
    right: "2.81%",
    bottom: "60.3%",
    left: "51.83%",
  },
  newlyLaunched: {
    width: "52.38%",
    top: "2.8%",
    left: "4.29%",
  },
  nikeAirZoom: {
    width: "50.83%",
    left: "0%",
    top: "0%",
  },
  communityIcon: {
    height: "47.1%",
    width: "26%",
    top: "33.23%",
    right: "15.25%",
    bottom: "19.67%",
    left: "58.75%",
    position: "absolute",
  },
  kPeopleBought: {
    height: "19.96%",
    width: "41.16%",
    top: "80.04%",
    left: "48.47%",
  },
  starIcon: {
    width: 9,
    height: 9,
  },
  stars: {
    height: "25.25%",
    width: "35.98%",
    top: "54.03%",
    right: "58.09%",
    bottom: "20.72%",
    left: "5.93%",
  },
  rp1000000: {
    width: "51.62%",
    top: "1.92%",
    left: "48.38%",
  },
  shoeStateInfo: {
    height: "6.03%",
    width: "43.7%",
    top: "33.59%",
    right: "50.62%",
    bottom: "60.38%",
    left: "5.68%",
    position: "absolute",
  },
  nikeAir2: {
    height: "28.43%",
    width: "37.55%",
    top: "2.86%",
    left: "0.19%",
    color: Color.gray_600,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.rubik,
    position: "absolute",
  },
  communityIcon1: {
    height: "45.77%",
    width: "28.93%",
    top: "36.19%",
    right: "11.87%",
    bottom: "18.03%",
    left: "59.2%",
    position: "absolute",
  },
  kPeopleBought1: {
    height: "18.95%",
    width: "46.06%",
    top: "81.05%",
    left: "47.61%",
  },
  stars1: {
    height: "22.15%",
    width: "37.63%",
    top: "56.35%",
    right: "62.37%",
    bottom: "21.5%",
    left: "0%",
  },
  rp2000000: {
    height: "30.8%",
    width: "55.49%",
    left: "44.51%",
    top: "0%",
  },
  shoeStateInfo1: {
    width: "44.71%",
    top: "33.4%",
    right: "1.72%",
    bottom: "61.44%",
    left: "53.57%",
  },
  nikeCourt: {
    height: "32.87%",
    width: "40.15%",
    left: "0%",
    top: "0%",
  },
  communityIcon2: {
    height: "47.85%",
    width: "27.06%",
    top: "36.1%",
    right: "9.1%",
    bottom: "16.04%",
    left: "63.84%",
    position: "absolute",
  },
  kPeopleBought2: {
    height: "20.27%",
    width: "48.48%",
    top: "79.73%",
    left: "50.84%",
  },
  stars2: {
    height: "21.53%",
    width: "42.08%",
    top: "48.51%",
    right: "53.58%",
    bottom: "29.96%",
    left: "4.34%",
  },
  rp10000001: {
    height: "32.93%",
    width: "54.75%",
    top: "2.35%",
    left: "45.25%",
  },
  shoeStateInfo2: {
    width: "39.56%",
    top: "71.45%",
    right: "53.36%",
    bottom: "23.39%",
    left: "7.08%",
  },
  nikeAirMax: {
    height: "31.24%",
    width: "48.57%",
    left: "0%",
    top: "0%",
  },
  communityIcon3: {
    height: "45.49%",
    width: "27.91%",
    top: "39.27%",
    right: "7.66%",
    bottom: "15.25%",
    left: "64.43%",
    position: "absolute",
  },
  kPeopleBought3: {
    height: "19.26%",
    width: "50.14%",
    top: "80.74%",
    left: "49.11%",
  },
  stars3: {
    height: "20.47%",
    width: "43.52%",
    top: "46.1%",
    right: "52%",
    bottom: "33.43%",
    left: "4.48%",
  },
  rp10000002: {
    height: "31.3%",
    width: "50.92%",
    top: "4.65%",
    left: "49.08%",
  },
  shoeStateInfo3: {
    height: "5.43%",
    width: "40.3%",
    top: "71.14%",
    right: "4.15%",
    bottom: "23.43%",
    left: "55.55%",
    position: "absolute",
  },
  mostPopular: {
    width: "42.06%",
    top: "78.25%",
    left: "3.74%",
  },
  icon: {
    borderRadius: Border.br_md,
    height: "100%",
    maxWidth: "100%",
  },
  wrapper: {
    top: "7.34%",
    right: "50.8%",
    bottom: "66.37%",
    position: "absolute",
  },
  container: {
    left: "51.46%",
    top: "7.21%",
    right: "2.58%",
    bottom: "66.5%",
    position: "absolute",
  },
  frame: {
    right: "50.79%",
    bottom: "28.51%",
  },
  rectanglePressable: {
    left: "53.53%",
    right: "2.05%",
    bottom: "28.85%",
    width: "44.42%",
    height: "25.95%",
  },
  frameChild1: {
    left: 13,
    height: 36,
    position: "absolute",
  },
  frameChild2: {
    top: 154,
    left: 168,
    height: 32,
    position: "absolute",
  },
  frameChild3: {
    left: 322,
  },
  frameChild4: {
    top: 147,
    height: 44,
    left: 481,
  },
  rectangleIcon: {
    left: 10,
  },
  frameChild5: {
    left: 165,
  },
  frameChild6: {
    top: 11,
    left: 320,
  },
  frameChild7: {
    top: 15,
    left: 477,
  },
  jordan32: {
    left: 15,
  },
  jordan35: {
    left: 174,
  },
  nikeAir3: {
    left: 327,
  },
  nikeDunk2: {
    left: 481,
  },
  rp980000: {
    left: 82,
  },
  rp9800001: {
    left: 240,
  },
  rp9800002: {
    left: 388,
  },
  rp9800003: {
    left: 553,
  },
  rectangleGroup: {
    height: "25.44%",
    width: "101.03%",
    top: "82.79%",
    right: "1.58%",
    bottom: "-8.23%",
    left: "-2.62%",
    position: "absolute",
  },
  rectangleParent: {
    top: 55,
    left: 2,
    width: 388,
    height: 722,
  },
  searchBar1: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  hiconOutlineSearch2: {
    height: "63.16%",
    width: "7.84%",
    top: "18.42%",
    right: "4.25%",
    bottom: "18.42%",
    left: "87.91%",
    position: "absolute",
  },
  egNikeAir: {
    width: "45.49%",
    top: "34.21%",
    left: "5.15%",
    fontSize: 10,
    color: "#979797",
    fontFamily: FontFamily.dMSans,
    textAlign: "left",
    position: "absolute",
  },
  searchBar: {
    top: 18,
    left: 90,
    width: 233,
  },
  iconlyboldchart: {
    left: "6.92%",
    top: "2.49%",
    right: "84.87%",
    bottom: "93.72%",
    width: "8.21%",
    height: "3.79%",
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_xl,
    flex: 1,
    height: 844,
    backgroundColor: Color.greenishGreen1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
