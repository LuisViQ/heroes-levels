import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
export default function App() {
  const [type, setType] = useState<CameraType>("back");
  const [permission, setPermission] = useCameraPermissions();
  return (
    <View style={styles.container}>
      <CameraView style={{ flex: 1 }} facing={type} ratio="16:9" zoom={0}>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.flipArea}
            onPress={() => {
              setType(type === "back" ? "front" : "back");
            }}
          >
            <Text style={styles.flipText}>FlipCamera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  flipArea: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  flipText: {
    fontSize: 20,
    marginBottom: 15,
    color: "#fff",
  },
});
