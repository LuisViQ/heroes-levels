import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { UserScreen } from "./src/screens/UserScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserContextProvider from "./src/contexts/userContext";
export type RootStacksParamList = {
  Home: undefined;
  User: { username: string };
};

const Stack = createStackNavigator<RootStacksParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}
