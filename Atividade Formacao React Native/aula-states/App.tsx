import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useReducer } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
function reducer(state: number, action: any) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}
export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>

      <Button title="+" onPress={() => dispatch({ type: "increment" })} />

      <Button title="-" onPress={() => dispatch({ type: "decrement" })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
