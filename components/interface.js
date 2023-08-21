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
import facestyle from "../styles/facestyle";

export default function Interface({ navigation }) {
  const [input, Setinput] = useState("");
  const handletxt = (text) => Setinput(text);
  const [nodatafound, SetNodatafound] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [dt, setData] = useState([]);
  const apiKey = "f90eecc7a82b453d7ddc570ae56579c1";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

  const search = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.main.temp);
        SetNodatafound(undefined);
        navigation.navigate(
          "info",

          {
            input,
            weather: {
              temp: data.main.temp,
              state: data.weather[0].main,
              description: data.weather[0].description,
            },
          }
        );
      })
      .catch((error) => {
        SetNodatafound("local não encontrado");
      })
      .finally(() => {
        setIsloading(false);
      });

    Setinput("");
  };

  return (
    <SafeAreaView style={facestyle.container}>
      <View style={facestyle.searchview}>
        <TextInput
          value={input}
          onChangeText={handletxt}
          style={facestyle.input}
          placeholder="Digite a sua cidade aqui"
        ></TextInput>
        <TouchableOpacity onPress={search}>
          <Image
            style={facestyle.searchimg}
            source={require("../assets/search.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text>{nodatafound}</Text>
      <View>
        <Text>a temperatura é:{dt}</Text>
      </View>
    </SafeAreaView>
  );
}
