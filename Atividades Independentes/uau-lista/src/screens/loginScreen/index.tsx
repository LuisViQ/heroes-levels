import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NavigationButton } from "../../components/navigationButton";
import handleLogin from "../../services/auth";

export function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const handleUsernameChange = (usernameText: string) => {
    setUsername(usernameText);
  };
  const handlePasswordChange = (passwordText: string) => {
    setPassword(passwordText);
  };
  const showPassword = () => {
    setIsVisible(!isVisible);
  };
  const showLoginCredentials = async () => {
    const login = { username: username, password: password };
    console.log(login);
    try {
      const data = await handleLogin(username, password);
      console.log("Logado:", data);
      // data.token -> salvar
    } catch (e: any) {
      console.log("Erro:", e.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Tela de Login</Text>
        <View>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={(text) => handleUsernameChange(text)}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Senha"
              style={styles.input}
              secureTextEntry={isVisible}
              value={password}
              onChangeText={(text) => handlePasswordChange(text)}
            />
            <Button
              title={isVisible ? "Esconder Senha" : "Ver Senha"}
              onPress={() => showPassword()}
            />
          </View>
          <Button
            title="Entrar"
            onPress={() => {
              showLoginCredentials();
            }}
          />
          <NavigationButton where="home" />
        </View>
      </View>
    </>
  );
}
