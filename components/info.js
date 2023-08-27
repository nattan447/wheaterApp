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
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const { weather } = route.params;
  const [img, Setimg] = useState(null);
  const data = new Date();
  const mes = meses[data.getMonth()];
  const day = data.getDay();

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
    <View
      style={{
        flex: 1,
        backgroundColor: "#010A43",
      }}
    >
      <Text style={infostyle.cityname}>{weather.cityname}</Text>
      <View style={infostyle.infoview}>
        <Image source={img} style={infostyle.cloudsimg}></Image>
        <Text style={infostyle.temperature}>{weather.temp.toFixed(0)}°</Text>
        <Text style={infostyle.weatherstate}>{weather.state}</Text>
      </View>
      <View style={infostyle.todayview}>
        <Text style={infostyle.todaytxt}>hoje</Text>
        <Text style={{ color: "white" }}>{mes}</Text>
        <Text style={{ color: "white" }}>{day}</Text>
      </View>
    </View>
  );
}
