import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props){
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logIn}></View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1
    },
    logIn:{
        width:"100%",
        height:700,
        backgroundColor:"6a26cd",
    }
});

export default WelcomeScreen;