import React from 'react';
import { Image, View, StyleSheet} from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container} > 
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor :'#000',
        flex:1,
        
    },
    closeIcon:{
        backgroundColor:colors.primary,
        width:50,
        height: 50,
        position: 'absolute',
        top:50,
        left:30,
    },
    deleteIcon:{
        backgroundColor:colors.secondary,
        height:50,
        width:50,
        position:'absolute',
        top:50,
        right:30,
    },
    image:{
        height:"100%",
        width:"100%",
    },


})
export default ViewImageScreen;