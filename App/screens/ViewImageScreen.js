import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
        <Image 
        resizeMode="contain"
        style={styles.img} 
        source={require("../assets/img1.jpg")}/>
        <View style={styles.delIc}><Text style={styles.txtD}>Delete</Text></View>
        <View style={styles.closeIc}><Text style={styles.txt}>Close</Text></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black
    },
    img:{
        width:"100%",
        height:"100%"
    },
    delIc:{
        width:"50%",
        height:60,
        backgroundColor:colors.transparent,
        position:"absolute",
        bottom:0,
        left:0,
        justifyContent:"center",
        alignItems:"center"
    },
    closeIc:{
        width:"50%",
        height:60,
        backgroundColor:colors.transparent,
        position:"absolute",
        bottom:0,
        right:0,
        justifyContent:"center",
        alignItems:"center"
    },
    txt:{
        color:colors.white,
        fontSize:20
    },
    txtD:{
        color:colors.danger,
        fontSize:20
    }
});

export default ViewImageScreen;