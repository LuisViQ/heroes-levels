import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";
import { LoginContext } from "../../contexts/loginContext";
import getItem from "../../services/getItem";
import { ItemComponent } from "../../components/itemComponent";

export function HomeScreen() {
  const loginContextValue = useContext(LoginContext);
  const name = loginContextValue?.name;
  const token = loginContextValue?.token;
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    async function load() {
      try {
        const list = await getItem();
        setProducts(list);
      } catch (e: any) {
        console.log(e.message);
      }
    }
    load();
  }, []);
  console.log(products);
  return (
    <View style={styles.container}>
      <Text>Hi {name}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemComponent item={item} />}
      />
    </View>
  );
}
