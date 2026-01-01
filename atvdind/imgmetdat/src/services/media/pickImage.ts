import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export async function pickImage(): Promise<string | null> {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permissionResult.granted) {
    Alert.alert(
      "Permission required",
      "Permission to access the media library is required."
    );
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [9, 16],
    quality: 1,
  });

  if (result.canceled) {
    return null;
  }

  return result.assets[0]?.uri ?? null;
}
