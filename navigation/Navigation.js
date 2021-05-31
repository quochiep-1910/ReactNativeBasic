import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import DetailScreen from "../screens/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FilterScreen from "../screens/FilterScreen";
import ShowAllProductScreen from "../screens/ShowAllProductScreen";
import CartScreen from "../screens/CartSreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const mainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "HomeScreen",
          headerTitleStyle: { alignSelf: "center" },
        }}
      />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const favStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
const cartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};
const filter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};
const showAll = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="show all product" component={ShowAllProductScreen} />
    </Stack.Navigator>
  );
};
const mainTab = () => {
  return(
   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-home"
              : "ios-home-outline";
          } else if (route.name === "FavoritesScreen") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={mainStack} />
      <Tab.Screen name="Favorites" component={favStack} />
      <Tab.Screen name="Cart " component={cartStack} />
      </Tab.Navigator>
   
  )
};
const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      
        <Drawer.Screen name="Home" component={mainTab} />
        <Drawer.Screen name="Filter" component={filter} />
        <Drawer.Screen name="Show All Product" component={showAll} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Navigation;
