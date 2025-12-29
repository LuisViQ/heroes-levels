import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

type ItemComponentProps = {
  item: {
    id: number;
    title: string;
    thumbnail: string;
  };
};

export function ItemComponent({ item }: ItemComponentProps) {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
}
