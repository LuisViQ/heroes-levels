import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
