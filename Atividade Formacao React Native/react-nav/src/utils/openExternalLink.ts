import { Linking, Alert } from "react-native";

export async function openExternalLink(url: string) {
  try {
    const supported = await Linking.canOpenURL(url);

    if (!supported) {
      Alert.alert("Ops", `Não foi possível abrir: ${url}`);
      return;
    }

    await Linking.openURL(url);
  } catch (err) {
    Alert.alert("Erro", "Falha ao abrir o link.");
    console.error(err);
  }
}
