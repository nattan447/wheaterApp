import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import Interface from "./components/interface";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "./components/info";
const Stack = createNativeStackNavigator();
const WeatherApp = ({ navigation }) => {
  const oi = "aa";
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Interface}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: "white",
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="info"
          component={Info}
          options={{
            title: null,
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherApp;
