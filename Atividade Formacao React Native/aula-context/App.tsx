import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { UserScreen } from "./src/screens/UserScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" children={HomeScreen} />
        <Stack.Screen name="User" children={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
