import React, { useContext } from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { SingleProductsContext } from "../../contexts/singleProductContext";

export function ProductDetail() {
  const singleProductsContextValue = useContext(SingleProductsContext);
  const product = singleProductsContextValue?.product ?? null;

  if (singleProductsContextValue?.isLoading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (singleProductsContextValue?.error) {
    return (
      <View style={styles.container}>
        <Text>{singleProductsContextValue.error}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Nenhum produto selecionado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: 160, height: 160 }}
      />
      <Text>{product.description}</Text>
      <Text>Preco: {product.price}</Text>
      <Text>Estoque: {product.stock}</Text>
    </View>
  );
}
