import { StyleSheet } from "react-native";
import colors from "./colors";
export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#010A43",
  },
  todaytxt: {
    fontSize: 27,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 30,
    color: "white",
  },
  cityname: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  cloudsimg: {
    height: 130,
    width: 130,
  },
  infoview: {
    alignItems: "center",

    height: 400,
    justifyContent: "center",
    borderRadius: 10,
    width: 360,
    alignSelf: "center",
  },
  temperature: {
    fontSize: 60,
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
  },
  weatherstate: {
    fontSize: 20,
    color: "white",
  },
  todayview: {
    alignItems: "center",
  },
});
