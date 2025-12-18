import React from "react";
import { View, Text, ScrollView, Pressable, Linking } from "react-native";
import { styles } from "./Styles";
import { Header } from "../components/Header";
import { MainCard } from "../components/MainCard";
import { WhatIDoCard } from "../components/WhatIDoCard";
import { SkillCard } from "../components/SkillsCard";
import { HighlightsCard } from "../components/HighlightsCard";
import { useNavigationActions } from "../hooks/useNavigationActions";
export function HomeScreen({ navigation }: any) {
  const { goToContact } = useNavigationActions();
  return (
    <ScrollView contentContainerStyle={styles.page}>
      {/* Header */}
      <Header
        hi="Oi, "
        bold="eu sou o Luís,"
        description="Construindo apps e soluções em software."
      />

      {/* Card principal */}
      <MainCard
        cardTitle="Luís Felipe"
        cardSub="Estagiário de Desenvolvimento na GPM Soluções"
        buttontTitle="Entre em Contato"
        buttonProps={goToContact}
      />

      {/* Seção: O que eu faço */}
      <WhatIDoCard />

      {/* Seção: Habilidades */}
      <SkillCard />

      {/* Seção: Destaques */}
      <HighlightsCard />
    </ScrollView>
  );
}
