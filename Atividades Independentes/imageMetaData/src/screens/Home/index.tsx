import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  Image,
} from "react-native";
import * as Device from "expo-device";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system/legacy";
import * as ImagePicker from "expo-image-picker";

export function Home() {
  const [changeColor, setChangeColor] = useState(true);
  const [linkValue, setLinkValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imgLink, setImgLink] = useState<string | null>();

  const handleLinkValue = (text: string) => {
    setLinkValue(text);
  };
  const handleChangeColorAndSave = () => {
    setChangeColor(!changeColor);
    saveFile();
  };

  const saveFile = async () => {
    try {
      if (!linkValue.startsWith("http")) {
        console.log("Link inválido");
        return;
      }

      const tempUri =
        (FileSystem.cacheDirectory ?? FileSystem.documentDirectory) +
        "file.png";
      if (!tempUri) {
        console.log("Sem diretório disponível pra salvar temporariamente.");
        return;
      }

      const download = await FileSystem.downloadAsync(linkValue, tempUri);

      // 2) ANDROID: pede pasta e salva lá (escolha Downloads no seletor)
      if (Platform.OS === "android") {
        const perm =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (!perm.granted) {
          console.log("Permissão negada");
          return;
        }

        const destUri = await FileSystem.StorageAccessFramework.createFileAsync(
          perm.directoryUri,
          "file.png",
          "image/png"
        );

        const base64 = await FileSystem.readAsStringAsync(download.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        await FileSystem.writeAsStringAsync(destUri, base64, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImgLink(download.uri);

        return;
      }
      // 3) iOS: não existe Downloads público; fica no sandbox do app
      console.log("iOS: salvo no app:", download.uri);
    } catch (e) {
      console.log("Erro:", e);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const ImgDownloaded = () => {
    if (!imgLink) return null;

    return (
      <>
        <Image source={{ uri: imgLink }} style={styles.image} />
        <Text>Imagem baixada pelo link</Text>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text>
        Seu dispositivo é um: {Device.modelName} e o nome dele é:{" "}
        {Device.deviceName ?? "desconhecido"}
      </Text>

      <TextInput
        placeholder="Digite o link do arquivo que deseja baixar"
        style={{ color: "red", borderColor: "black", borderWidth: 1 }}
        value={linkValue}
        onChangeText={handleLinkValue}
      />

      <Text>SO: {Platform.OS}</Text>

      <TouchableOpacity onPress={handleChangeColorAndSave}>
        {changeColor ? (
          <Ionicons name="checkmark-circle" size={32} color="green" />
        ) : (
          <Ionicons name="checkmark-circle-outline" color="#000" size={32} />
        )}
      </TouchableOpacity>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {imgLink && <ImgDownloaded />}
    </View>
  );
}
