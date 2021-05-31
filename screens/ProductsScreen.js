import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import product from "../data/products";

 
const ProductsScreen = (props) => {
  const { categoryId } = props.route.params;

  const availableProducts = useSelector(state=>state.filterProducts);

  const products = availableProducts.filter((item) => item.categoryId === categoryId);
  console.log(products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("DetailScreen", { productId: item.id })
          }
        >
          <View style={styles.view}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
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

export default ProductsScreen;
