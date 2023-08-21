import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import React from "react";
import Infostyle from "../styles/infostyle";
import infostyle from "../styles/infostyle";
export default function Info({ route }) {
  const { weather, input } = route.params;

  return (
    <View style={Infostyle.container}>
      <Text style={infostyle.headertxt}>clima hoje</Text>
      <Text style={infostyle.cityname}>{input}</Text>
      <View></View>
    </View>
  );
}
