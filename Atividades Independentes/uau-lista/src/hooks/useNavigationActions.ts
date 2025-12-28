import { useNavigation } from "@react-navigation/native";

export function useNavigationActions() {
  const navigation = useNavigation<any>();

  return {
    goToHome: () => navigation.navigate("home"),
    goToProductDetails: () => navigation.navigate("productDetails"),
    goToMyList: () => navigation.navigate("myList")
  };
}
