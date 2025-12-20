import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function HomeScreen() {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        value={inputText}
        onChangeText={(text) => {
          setInputText(text);
        }}
      />
      <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}
