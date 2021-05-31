import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const FilterScreen = (props) => {
  const [isBrandNew, setIsBrandNew] = useState(false);
  const [isSale, setIsSale] = useState(false);
  useEffect(
    () =>
      props.navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={40} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="ios-save-outline" size={40} />
          </TouchableOpacity>
        ),
      }),
    [props.navigation]
  );
  return (
    <View>
      <View>
        <Text>Hàng mới</Text>
        <Switch
          value={isBrandNew}
          onValueChange={(newValue) => setIsBrandNew(newValue)}
        />
      </View>

      <View>
        <Text>Hàng Khuyến Mãi</Text>
        <Switch
          value={isSale}
          onValueChange={(newValue) => setIsSale(newValue)}
        />
      </View>
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
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    alignItems: "center",
  },
});

export default FilterScreen;
