import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingsDetailsScreen from "./app/screens/ListingsDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f8f4f4",
  },
});
