import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";
import { useNavigationActions } from "../../hooks/useNavigationActions";

type NavigationButtonProps = {
  where: "home" | "productDetails" | "myList";
  label?: string;
};

export function NavigationButton({ where, label }: NavigationButtonProps) {
  const navigation = useNavigationActions();

  const actions = {
    home: navigation.goToHome,
    productDetails: navigation.goToProductDetails,
    myList: navigation.goToMyList,
  } as const;

  const handlePress = actions[where];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.textButton}>{label ?? `Ir para ${where}`}</Text>
      </TouchableOpacity>
    </View>
  );
}
