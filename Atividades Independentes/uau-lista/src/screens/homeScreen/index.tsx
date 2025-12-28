import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavigationButton where="productDetails" />
      <NavigationButton where="myList" />
    </View>
  );
}
