import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import category from "../data/category";
import Ionicons from "react-native-vector-icons/Ionicons";
const HomeScreen = (props) => {
  useEffect(
    () =>
      props.navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
           onPress={() => props.navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={40} />
          </TouchableOpacity>
        ),
      }),
    [props.navigation]
  );

  return (
    <FlatList
      data={category}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ProductsScreen", { categoryId: item.id })
          }
        >
          <View style={[styles.view, { backgroundColor: item.color }]}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
  },
  view: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default HomeScreen;
