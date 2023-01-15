const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import OpeningPage from "./screens/OpeningPage";
import ProductDetails3 from "./screens/ProductDetails3";
import ProductDetails2 from "./screens/ProductDetails2";
import ProductDetails4 from "./screens/ProductDetails4";
import History1 from "./screens/History1";
import SignUp from "./screens/SignUp";
import Confirmation from "./screens/Confirmation";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import Home from "./screens/Home";
import IconlyBoldNotification from "./components/IconlyBoldNotification";
import IconlyBoldHome from "./components/IconlyBoldHome";
import IconlyBoldBag from "./components/IconlyBoldBag";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <IconlyBoldNotification />,
    <IconlyBoldHome />,
    <IconlyBoldBag />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <IconlyBoldNotification />,
    <IconlyBoldHome />,
    <IconlyBoldBag />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 4,
              elevation: 4,
              shadowOpacity: 1,
              height: 58,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="History"
        component={History1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OpeningPage"
              component={OpeningPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails3"
              component={ProductDetails3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails2"
              component={ProductDetails2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails4"
              component={ProductDetails4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <OpeningPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
