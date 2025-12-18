import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
interface Header {
  hi: string;
  bold: string;
  description: string;
}
export function Header({ hi, bold, description }: Header) {
  return (
    <View>
      <Text style={[styles.hi, { color: "#fff" }]}>
        {hi} <Text style={styles.bold}>{bold}</Text>
      </Text>
      <Text style={[styles.hi, styles.bold, { color: "#fff" }]}>
        {description}
      </Text>
    </View>
  );
}
