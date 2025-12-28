import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";

export function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Tela de Login</Text>
        <View>
          <NavigationButton where="home" />
        </View>
      </View>
    </>
  );
}
