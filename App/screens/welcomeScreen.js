import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

import colors from "../config/colors";

function WelcomeScreen(props){
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.banner}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.descr}>Sell what you don't need</Text>
            </View>
            <View style={styles.logIn}><Text style={styles.logInText}> Log In </Text></View>
            <View style={styles.signUp}><Text style={styles.SignUpText}> Sign Up </Text></View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    banner:{
        position:'absolute',
        top:120,
        alignItems:"center"
    },
    logo:{
        width:120,
        height:120,
        
    },
    descr:{
        fontSize:20,
        color:colors.white,
        margin:15
    },
    logIn:{
        width:"90%",
        height:55,
        backgroundColor:colors.primary,
        marginBottom:20,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"      
    },
    signUp:{
        width:"90%",
        height:55,
        backgroundColor:colors.transparent,
        borderColor:colors.secondary,
        borderWidth:3,
        marginBottom:20,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    logInText:{
        fontSize:24,
        color:colors.white
    },
    SignUpText:{
        fontSize:24,
        color:colors.secondary
    }
});

export default WelcomeScreen;