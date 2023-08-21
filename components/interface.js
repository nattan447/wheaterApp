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
  Switch,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import React from "react";
import facestyle from "../styles/facestyle";

export default function Interface({ navigation }) {
  const numcolum = 2;

  const [counter, Setcounter] = useState(0);
  const [list, Setlist] = useState([]);

  const [input, Setinput] = useState("");
  const handletxt = (text) => Setinput(text);
  const [nodatafound, SetNodatafound] = useState("");
  const [isloading, setIsloading] = useState(true);

  const apiKey = "f90eecc7a82b453d7ddc570ae56579c1";

  const search = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        navigation.navigate(
          "info",

          {
            weather: {
              temp: data.main.temp,
              state: data.weather[0].main,
              description: data.weather[0].description,
              cityname: input,
            },
          }
        );
        data.main.temp != undefined ? createlist() : undefined;
        SetNodatafound(undefined);
      })
      .catch((error) => {
        SetNodatafound("local não encontrado");
      })
      .finally(() => {
        setIsloading(false);
      });
    Setcounter(counter + 1);

    Setinput("");
  };
  function createlist() {
    const listobj = [...list, { cityname: input, id: counter }];
    Setlist(listobj);
  }
  // async function Takename(content) {
  //   await Setinput(content);
  //   alert("pegou");
  // }

  //ir pra outra tela quando clica na imagem
  async function handlerecentplaces(name) {
    // await Takename(name);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        navigation.navigate("info", {
          weather: {
            temp: data.main.temp,
            state: data.weather[0].main,
            description: data.weather[0].description,
            cityname: name,
          },
        });
        SetNodatafound(undefined);
      })
      .catch((error) => {
        SetNodatafound("local não encontrado");
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  const render = ({ item }) => {
    return (
      <TouchableOpacity
        style={facestyle.listitem}
        onPress={() => {
          handlerecentplaces(item.cityname);
        }}
      >
        <Text style={facestyle.listtxt}>{item.cityname}</Text>
        <Image
          source={require("../assets/cityicon.png")}
          style={facestyle.cityicon}
        ></Image>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={facestyle.container}>
      <Switch value={true}></Switch>
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
      <Text style={{ color: "red" }}>{nodatafound}</Text>

      <View style={facestyle.list}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Lugares recentes
        </Text>
        <FlatList
          numColumns={numcolum}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={render}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
