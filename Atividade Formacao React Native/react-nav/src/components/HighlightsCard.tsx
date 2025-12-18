import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { openExternalLink } from "../utils/openExternalLink";

import { OutLineButton } from "./OutLineButton";
export function HighlightsCard() {
  const url = "https://github.com/LuisViQ";
  return (
    <>
      <Text style={styles.sectionTitle}>Em destaque</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Projetos e estudos</Text>
        <Text style={styles.text}>
          Aplicações mobile, sistemas web e projetos acadêmicos.
        </Text>

        <OutLineButton
          onPress={() => openExternalLink(url)}
          text="Explorar projetos"
        />
      </View>
    </>
  );
}
