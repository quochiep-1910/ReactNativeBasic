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
import PRODUCTS from "../data/products";

const FavoritesScreen = (props) => {
  const favoritesProducts = useSelector((state) => state.favProducts);
  const favorites = PRODUCTS.filter((product) => product.isFav === true);
  console.log(favorites);
  if (favoritesProducts.length !== 0) {
    return (
      <FlatList
        data={favoritesProducts}
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
        keyExtractor={(item) => item.id}
      />
    );
  } else {
    return <Text style={styles.text}>Bạn chưa có sản phẩm nào </Text>;
  }
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

export default FavoritesScreen;
