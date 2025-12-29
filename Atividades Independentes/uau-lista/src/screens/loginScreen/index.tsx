import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { LoginForm } from "./LoginForm";
import { useLoginForm } from "./useLoginForm";
import { useLoginActions } from "./useLoginActions";
import { NavigationButton } from "../../components/navigationButton";

export function LoginScreen() {
  const {
    username,
    password,
    isPasswordHidden,
    setUsername,
    setPassword,
    togglePasswordVisibility,
  } = useLoginForm();
  const { submitLogin } = useLoginActions();

  const handleSubmit = () => {
    submitLogin({ username, password });
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <LoginForm
        username={username}
        password={password}
        isPasswordHidden={isPasswordHidden}
        onChangeUsername={setUsername}
        onChangePassword={setPassword}
        onTogglePasswordVisibility={togglePasswordVisibility}
        onSubmit={handleSubmit}
      />
      <NavigationButton where="home" />
    </View>
  );
}
