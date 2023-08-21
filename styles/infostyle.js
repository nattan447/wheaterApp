import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "cornflowerblue",
  },
  headertxt: {
    fontSize: 27,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 30,
  },
  cityname: {
    fontSize: 50,
    marginTop: 30,
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
    marginTop: 50,

    height: 400,
    justifyContent: "center",
    borderRadius: 10,
    width: 360,
    alignSelf: "center",
  },
  temperature: {
    fontSize: 60,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
  },
  weatherstate: {
    fontSize: 20,
    color: "white",
  },
});
