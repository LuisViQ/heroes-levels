import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface BlackButtonProps {
  title: string;
  onPress: () => void;
  showArrow?: boolean;
}

export function BlackButton({
  title,
  onPress,
  showArrow = true,
}: BlackButtonProps) {
  return (
    <Pressable style={styles.blackButton} onPress={onPress}>
      <Text style={styles.blackButtonText}>{title}</Text>
      {showArrow && <Text style={styles.play}>▶</Text>}
    </Pressable>
  );
}
