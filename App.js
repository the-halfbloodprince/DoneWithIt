import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./App/screens/welcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:10,
    backgroundColor:'gold',
    borderColor:'orange'
  },
  highL8button:{
    width:'50%',
    height:60,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  lowL8button:{
    width:'50%',
    height:60,
    backgroundColor:'white',
    opacity:0.7,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonCont:{
    position:'absolute',
    width:'100%',
    bottom:0,
    flexDirection:'row'
  },
  text:{
    fontSize:20,
    fontWeight:'700',
    color:'black',
    fontFamily:'sans-serif',
    letterSpacing:1.2
  }
});
