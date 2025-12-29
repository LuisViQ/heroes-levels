import React from "react";
import { Image, Pressable, Text } from "react-native";

import { styles } from "./styles";

type ItemComponentProps = {
  item: {
    id: number;
    title: string;
    thumbnail: string;
  };
  onPress?: () => void;
};

export function ItemComponent({ item, onPress }: ItemComponentProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text>{item.title}</Text>

      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 80, height: 80 }}
      />
    </Pressable>
  );
}
