import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
    
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subtitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer} >
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        marginBottom:20,
        backgroundColor:"#fff",
        overflow:'hidden',
    },
    image:{
        width:"100%",
        height:200,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        paddingBottom:7,
    },
    subtitle:{
        color: colors.secondary,
        fontWeight:'bold',
        
    }
})
export default Card;