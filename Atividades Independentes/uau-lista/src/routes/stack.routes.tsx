import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />
      <Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: true }}
      />
    </Navigator>
  );
}
