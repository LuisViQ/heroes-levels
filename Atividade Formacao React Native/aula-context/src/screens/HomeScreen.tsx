import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStacksParamList } from "../../App";
import UserContextProvider, { UserContext } from "../contexts/userContext";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStacksParamList, "Home">;
};
export function HomeScreen({ navigation }: HomeScreenProps) {
  const [inputText, setInputText] = useState("");
  const userContext = useContext(UserContext);
  const navigateToUserScreen = () => {
    userContext?.save(inputText);
    navigation.navigate("User", { username: inputText });
  };
  return (
    <View>
      <TextInput
        placeholder="Digite seu nome.. "
        value={inputText}
        onChangeText={(text) => {
          setInputText(text);
        }}
      />
      <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}
