import React from "react";
import { StyleSheet } from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f8f4f4",
  },
});
