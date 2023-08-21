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
  const [img, Setimg] = useState(null);

  useEffect(() => {
    switch (weather.state) {
      case "Clear":
        Setimg(require("../assets/sun.png"));
        break;
      case "Clouds":
        Setimg(require("../assets/cloudy.png"));
        break;
      case "Rain":
        Setimg(require("../assets/rainingcloud.png"));
        break;
    }
  }, []);

  return (
    <View style={Infostyle.container}>
      <Text style={infostyle.headertxt}>clima hoje</Text>
      <Text style={infostyle.cityname}>{input}</Text>
      <View style={infostyle.infoview}>
        <Image source={img} style={infostyle.cloudsimg}></Image>
        <Text style={infostyle.temperature}>{weather.temp}°</Text>
        <Text>{weather.state}</Text>
      </View>
    </View>
  );
}
