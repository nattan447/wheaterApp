import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Interface from "./components/interface";

const WeatherApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Interface />
    </SafeAreaView>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
