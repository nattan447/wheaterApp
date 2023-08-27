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
  Alert,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import React from "react";
import facestyle from "../styles/facestyle";
import config from "../configs";
import { LinearGradient } from "expo-linear-gradient";
import Places from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";

export default function Interface({ navigation }) {
  const apiKey = config.apikey;
  const numcolum = 2;
  const country_name = "Brasil";
  //renderizar
  useEffect(() => {}, []);
  const [counter, Setcounter] = useState(0);
  const [list, Setlist] = useState([]);

  const [input, Setinput] = useState("");
  const handletxt = (text) => Setinput(text);
  const [nodatafound, SetNodatafound] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [dado, setDado] = useState();
  const [arrayinput, Setarrayinput] = useState([]);
  const [stock, Setstock] = useState();

  async function store(key, value) {
    try {
      Places.setItem(key, value);
      console.log("deu bom");
    } catch {
      console.log("deu merda");
    }
  }

  const takedata = async (key) => {
    try {
      const nameplacce = await Places.getItem(key);

      setDado(nameplacce);
    } catch {
      alert("deu ruim");
    }
  };

  useEffect(() => {
    takedata("name");
  }, []);

  useEffect(() => {
    //string passada pelo storage vira array
    if (dado != undefined) {
      Setstock(dado.split(","));
    }
  }, [dado]);

  const search = () => {
    //chama api
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.log(error));

        navigation.navigate("info", {
          weather: {
            temp: data.main.temp,
            state: data.weather[0].main,
            description: data.weather[0].description,
            cityname: input,
          },
        });
        //se tiver os dados certos chama a função que cria a lista
        if (data.main.temp != undefined) {
          //esse estado pega todos os inputs os colocando em um array
          Setarrayinput((currentvalue) => [...currentvalue, input]);
          createlist();
        }

        SetNodatafound(undefined);
      })
      .catch((error) => {
        console.log(error);
        SetNodatafound("local não encontrado");
      })
      .finally(() => {
        setIsloading(false);
      });
    Setcounter(counter + 1);

    Setinput("");
  };
  function createlist() {
    //evita de os lugares recentes aparecam repetidos
    const norepeatname = list.filter(
      (Elemento) => Elemento.cityname.toLowerCase() != input.toLowerCase()
    );
    const listobj = [
      ...norepeatname,
      { cityname: input.toLowerCase(), id: counter },
    ];
    Setlist(listobj);
  }

  useEffect(() => {
    //aqui toda vez que o arrayinput é chamado(chama a função search),todos elementos do array é passado com uma string para o assyncstorage
    let mystr = "";
    arrayinput.map((elemento) => (mystr += elemento + ","));
    store("name", mystr);
  }, [arrayinput]);

  function handlerecentplaces(name) {
    //chama api quando clico em algum lugar recente
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
      <Text style={facestyle.rescentplaces}>Lugares recentes</Text>
      <View style={facestyle.list}>
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
