import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.backgroud} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}/>
            <View style={styles.registerButton}/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backgroud:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        top:70,
        position:'absolute',
        alignItems:'center'
    },
    loginButton:{
        backgroundColor:"#fc5c65",
        height:70,
        width:"100%",
    },

    registerButton:{
        backgroundColor:"#4ecdc4",
        height:70,
        width:"100%",
    }

    
})
export default WelcomeScreen;