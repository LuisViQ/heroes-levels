import { useNavigation } from "@react-navigation/native";

export function useNavigationActions() {
  const navigation = useNavigation<any>();

  return {
    goToContact: () => navigation.navigate("Contato"),
    goToHome: () => navigation.replace("Home"),
  };
}
