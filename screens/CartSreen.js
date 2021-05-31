import React from "react";
import { FlatList, StyleSheet, Text,  View,Image, TouchableOpacity } from "react-native";
import PRODUCTS from "../data/products";

const CartScreen = (props) => {
  const Cart = PRODUCTS.filter((product) => product.isCart === true);
  console.log(Cart);
  return (
    <FlatList
      data={Cart}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={() =>
          props.navigation.navigate("DetailScreen", { productId: item.id })
        }>
          <View style={styles.view}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
          </TouchableOpacity>
      )}
      keyExtractor={item=>item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default CartScreen;
