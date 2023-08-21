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

export default function Interface() {
  const [input, Setinput] = useState("");
  const handletxt = (text) => Setinput(text);
  const [nodatafound, SetNodatafound] = useState(undefined);
  const [dt, setData] = useState(undefined);
  const apiKey = "f90eecc7a82b453d7ddc570ae56579c1";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

  const search = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.main.temp);
        SetNodatafound(undefined);
      })
      .catch((error) => {
        SetNodatafound("local não encontrado");
      });
    Setinput("");
  };

  return (
    <View style={facestyle.container}>
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
    </View>
  );
}
