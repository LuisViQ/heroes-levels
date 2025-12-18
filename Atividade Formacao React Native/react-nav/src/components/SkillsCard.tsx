import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function SkillCard() {
  return (
    <>
      <Text style={styles.sectionTitle}>Habilidades</Text>
      <View style={styles.row}>
        <View style={styles.skillCard}>
          <Text style={styles.skillTitle}>Front-end</Text>
          <Text style={styles.skillText}>React · React Native · UI/UX</Text>
        </View>

        <View style={styles.skillCard}>
          <Text style={styles.skillTitle}>Back-end</Text>
          <Text style={styles.skillText}>Node.js · APIs · Banco de Dados</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.skillCard}>
          <Text style={styles.skillTitle}>Mobile</Text>
          <Text style={styles.skillText}>
            Apps nativos · Performance · Navegação
          </Text>
        </View>

        <View style={styles.skillCard}>
          <Text style={styles.skillTitle}>Outros</Text>
          <Text style={styles.skillText}>Git · Lógica · Arquitetura</Text>
        </View>
      </View>
    </>
  );
}
