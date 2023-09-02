import { StyleSheet } from "react-native";
import colors from "./colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#010A43",
  },
  searchview: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 8,
    height: 47,
    borderWidth: 1,
    paddingLeft: 10,
  },
  searchimg: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 4,
  },
  list: {
    marginTop: 60,
    height: 240,
    alignItems: "center",
  },
  listitem: {
    backgroundColor: "white",
    margin: 5,
    height: 200,
    width: 190,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cityicon: {
    height: 140,
    width: 140,
  },
  listtxt: {
    color: "#FF2E63",
    fontSize: 23,
    fontWeight: "bold",
  },
  rescentplaces: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",

    marginTop: 100,
  },
});
