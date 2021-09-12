import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={2}
        style={styles.backgroud} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline} >Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
            <AppButton  title="Login" onPress={()=>console.log("Tapped")}/>
            <AppButton  title="Register" color="secondary" onPress={()=>console.log("Tapped")}/>
            </View>
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
    buttonContainer:{
        width:"100%",
        padding:20,
    },
    tagline:{
        padding:20,
        fontWeight:'bold',
        fontSize:25,
    },    

    
})
export default WelcomeScreen;