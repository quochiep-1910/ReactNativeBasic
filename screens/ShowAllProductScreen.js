import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import product from "../data/products";
const ShowAllProductScreen = (props) => {



  
  return (
    <FlatList
      data={product}
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

export default ShowAllProductScreen;
