import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { ProductDetail } from "../screens/productDetail";
import { MyList } from "../screens/myList";

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

      <Screen
        name="productDetails"
        component={ProductDetail}
        options={{ title: "Details", headerShown: false }}
      />
      <Screen
        name="myList"
        component={MyList}
        options={{ title: "My List", headerShown: false }}
      />
    </Navigator>
  );
}
