import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  image: {
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 8,
    alignSelf: "center",
  },
  imageFallback: {
    width: "100%",
    height: 200,
  },
  caption: {
    color: "#333",
  },
});
