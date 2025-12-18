import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },

  hi: {
    fontSize: 26,
    lineHeight: 32,
    color: "#000",
  },

  bold: {
    fontWeight: "800",
  },

  sectionTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },

  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#0B0B0F",
    opacity: 0.9,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
  },

  cardSub: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    opacity: 0.75,
    color: "#000",
    lineHeight: 18,
  },

  cardMeta: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.6,
    color: "#000",
  },

  card: {
    borderRadius: 22,
    padding: 16,
    backgroundColor: "#F1F7FF",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",

    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },

  bigCard: {
    minHeight: 170,
    flex: 1,
    justifyContent: "space-between",
  },

  mainCard: {
    backgroundColor: "#EEF6FF",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  cardHeaderLogo: {
    width: 80,
    height: 80,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#E2ECFA",
    alignItems: "center",
    justifyContent: "center",
  },

  cardHeaderText: {
    flex: 1,
    gap: 4,
  },

  cardBody: {
    gap: 12,
    marginBottom: 4,
  },

  skillCard: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
    backgroundColor: "#F1F7FF",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",

    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },

  skillTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: "#0B0B0F",
  },

  skillText: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "700",
    color: "#0B0B0F",
    opacity: 0.75,
    lineHeight: 16,
  },

  blackButton: {
    marginTop: 16,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#0B0B0F",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  blackButtonText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 14,
  },

  play: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 14,
  },

  outlineButton: {
    marginTop: 14,
    height: 44,
    borderRadius: 22,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "rgba(11,11,15,0.25)",

    alignItems: "center",
    justifyContent: "center",
  },

  outlineButtonText: {
    color: "#0B0B0F",
    fontWeight: "900",
    fontSize: 13,
    letterSpacing: 0.2,
  },
});
