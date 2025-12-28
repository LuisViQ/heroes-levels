import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007BFF", // Cor de fundo
    paddingVertical: 12, // Espaçamento interno vertical
    paddingHorizontal: 20, // Espaçamento interno horizontal
    borderRadius: 8, // Bordas arredondadas
    alignItems: "center", // Alinha o texto ao centro horizontalmente
    justifyContent: "center", // Alinha o texto ao centro verticalmente (se houver mais itens)
    margin: 10, // Margem externa
    // Outras propriedades: width, height, borderColor, etc.
  },
  textButton: {
    color: "white", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Negrito
  },
});
