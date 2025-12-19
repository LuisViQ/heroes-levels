import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./Styles";
import { UserImage } from "../components/UserImage";
import { openExternalLink } from "../utils/openExternalLink";
import { Header } from "../components/Header";
import { MainCard } from "../components/MainCard";
import { useNavigationActions } from "../hooks/useNavigationActions";
import { BlackButton } from "../components/BlackButton";
import { OutLineButton } from "../components/OutLineButton";

export function ContScreen() {
  const { goToHome } = useNavigationActions();
  return (
    <View style={styles.page}>
      <StatusBar style="light" />
      {/* Header */}
      <Header
        hi="Oi, "
        bold="fale comigo,"
        description="vamos transformar sua ideia em uma solução."
      />

      <View style={styles.contactHero}>
        <Text style={[styles.sectionTitle, { marginTop: 0 }]}>
          Vamos conversar
        </Text>
        <Text style={styles.contactHeroText}>
          Escolha o canal que preferir. Respondo rápido em horário comercial.
        </Text>
        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Respostas rápidas</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Projetos e oportunidades</Text>
          </View>
        </View>
      </View>

      <MainCard
        leftLogo={<UserImage />}
        cardTitle="Luís Felipe"
        cardSub="Estagiário de Desenvolvimento na GPM Soluções"
        buttontTitle="Voltar"
        buttonProps={goToHome}
      >
        <View style={styles.contactButtons}>
          <BlackButton
            title="WhatsApp"
            onPress={() => openExternalLink("https://wa.me/5599985049958")}
            showArrow={false}
          />
          <BlackButton
            title="Linkedin"
            onPress={() =>
              openExternalLink(
                "https://www.linkedin.com/in/luis-felipe-viana-queiroz-089720263/"
              )
            }
            showArrow={false}
          />
          <OutLineButton
            text="Email"
            onPress={() => openExternalLink("mailto:fileps2009@outlook.com")}
          />
        </View>
        <Text style={styles.contactHint}>
          Prefere outro horário? Envie um email que retorno assim que possível.
        </Text>
      </MainCard>
    </View>
  );
}
