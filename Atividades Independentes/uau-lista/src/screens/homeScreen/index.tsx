import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { LoginContext } from "../../contexts/loginContext";
import { ItemComponent } from "../../components/itemComponent";
import { ProductsContext } from "../../contexts/productsContext";
import { SingleProductsContext } from "../../contexts/singleProductContext";

export function HomeScreen() {
  const loginContextValue = useContext(LoginContext);
  const name = loginContextValue?.name;
  const productsContextValue = useContext(ProductsContext);
  const products = productsContextValue?.products ?? [];
  const singleProductsContextValue = useContext(SingleProductsContext);
  const navigation = useNavigation<any>();

  const handlePressItem = (id: number) => {
    singleProductsContextValue?.loadProduct(id);
    navigation.navigate("productDetails");
  };
  return (
    <View style={styles.container}>
      <Text>Hi {name}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemComponent item={item} onPress={() => handlePressItem(item.id)} />
        )}
      />
    </View>
  );
}
