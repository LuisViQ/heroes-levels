import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function WhatIDoCard() {
  return (
    <>
      <Text style={styles.sectionTitle}>O que eu faço</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          Desenvolvo aplicações focadas em performance, organização de código e
          experiência do usuário. Curto transformar ideia bagunçada em sistema
          funcional (e bonito).
        </Text>
      </View>
    </>
  );
}
