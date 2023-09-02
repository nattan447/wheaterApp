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
  const dias = [
    "domingo",
    "segundo",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabádo",
  ];

  const { weather } = route.params;
  const [img, Setimg] = useState(null);
  const data = new Date();
  const day = data.getDate();
  const weekday = dias[data.getDay()];
  const [tempostatus, Settempostatus] = useState(weather.state);

  const mes = meses[data.getMonth()];

  useEffect(() => {
    switch (weather.state) {
      case "Clear":
        Setimg(require("../assets/sun.png"));
        Settempostatus("Limpo");
        break;
      case "Clouds":
        Setimg(require("../assets/cloudy.png"));
        Settempostatus("Nublado");
        break;
      case "Rain":
        Setimg(require("../assets/rainingcloud.png"));
        Settempostatus("Chuva");
        break;
      case "Thunderstorm":
        Setimg(require("../assets/thunderstorm.png"));
        Settempostatus("Tempestade de Raios");
        break;
      case "Snow":
        Setimg(require("../assets/snow.png"));
        Settempostatus("Neve");
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
        <Text style={infostyle.weatherstate}>{tempostatus}</Text>
      </View>

      <View style={infostyle.statusgeralview}>
        <View style={infostyle.todayview}>
          <Text style={infostyle.todaytxt}>hoje</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 74,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>{mes},</Text>
            <Text style={{ color: "white", fontSize: 16 }}>{day}</Text>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {weekday}
        </Text>
        <View style={infostyle.minmaxdiv}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            temperatura mínima : {weather.min_temp}°
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            temperatura máxima : {weather.max_temp}°
          </Text>
        </View>
      </View>
    </View>
  );
}
