import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import LoginContextProvider from "../contexts/loginContext";
import ProductsContextProvider from "../contexts/productsContext";
import SingleProductsContextProvider from "../contexts/singleProductContext";

export function Routes() {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <ProductsContextProvider>
          <SingleProductsContextProvider>
            <StackRoutes />
          </SingleProductsContextProvider>
        </ProductsContextProvider>
      </LoginContextProvider>
    </NavigationContainer>
  );
}
