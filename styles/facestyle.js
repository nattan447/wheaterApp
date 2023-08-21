import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "cornflowerblue",
  },
  searchview: {
    flexDirection: "row",
    marginTop: 100,
  },
  input: {
    backgroundColor: "white",
    width: 335,
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
    marginTop: 190,
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
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
