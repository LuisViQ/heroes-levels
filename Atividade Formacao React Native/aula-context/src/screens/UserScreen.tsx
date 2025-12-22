import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStacksParamList } from "../../App";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
  route: RouteProp<RootStacksParamList, "User">;
};

export function UserScreen({ route }: UserScreenProps) {
  const { username } = route.params;
  const UserContextValue = useContext(UserContext);
  const nome = UserContextValue?.loginName || "Nome não encontrado";
  return (
    <View>
      <Text>Props: {username}</Text>
      <Text>Context: {nome}</Text>
    </View>
  );
}
