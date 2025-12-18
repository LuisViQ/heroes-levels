import React from "react";
import { View, Pressable, Text } from "react-native";
import { styles } from "./styles";
interface outlineButton {
  onPress: () => void;
  text: string;
}
export function OutLineButton({ onPress, text }: outlineButton) {
  return (
    <Pressable style={styles.outlineButton} onPress={onPress}>
      <Text style={styles.outlineButtonText}>{text}</Text>
    </Pressable>
  );
}
