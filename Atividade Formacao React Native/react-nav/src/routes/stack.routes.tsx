import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

import { HomeScreen } from "../screens/HomeScreen";
import { ContScreen } from "../screens/ContScreem";
export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início", headerShown: false }}
      />
      <Screen
        name="Contato"
        component={ContScreen}
        options={{ title: "Contato", headerShown: false }}
      />
    </Navigator>
  );
}
