import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  main : {
    flex: 1,
    backgroundColor: "#222224"
  },
  topContent : {
    flex : 0.48,
    backgroundColor: "#f00000",
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  },
  inputPokemon : {
    height : 40,
    width: "70%",
    backgroundColor : "#f0f0f0",
    borderColor: "#222224",
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  divisor : {
    flex : 0.04,
    backgroundColor : "#222224",
    display : "flex",
    justifyContent : "center",
    alignItems: "center",
    zIndex: 1
  },
  outBall : {
    width : 80,
    height : 80,
    backgroundColor: "#f0f0f0",
    borderRadius : 50,
    borderWidth: 10,
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  },
  innerBall : {
    width : 50,
    height : 50,
    backgroundColor : "transparent",
    borderWidth : 2,
    borderColor : "#222224",
    borderRadius : 40
  },
  bottom : {
    flex : 0.48,
    paddingTop : 1,
    backgroundColor : "#f0f0f0"
  },
  pokemonCard : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})

export default style;