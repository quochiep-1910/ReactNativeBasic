import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import PRODUCTS from "../data/products";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
const DetailScreen = (props) => {
  const { productId } = props.route.params;

  const availableProducts = useSelector((state) => state.filterProducts);
  const product = availableProducts.find((item) => item.id === productId);
  console.log(product);
  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch({ type: "THEM_VAO_YEU_THICH", productId: productId });
  };

  useEffect(
    () =>
      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => addToFav()}>
            <Ionicons name="ios-star" size={24} color="black" />
          </TouchableOpacity>
        ),
      }),
    [props.navigation]
  );

  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>{product.description}</Text>
    </View>
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

export default DetailScreen;
