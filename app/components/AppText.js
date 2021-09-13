import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function AppText({children, style}) {
    return (
        <View>
            <Text style={[styles.text], style}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
            
        ...Platform.select({
            ios:{
                fontSize:20,
                fontFamily:"Avenir",
            },
            android:{
                fontFamily:"Roboto",
                fontSize:18,
            }
        })

        
    },
})
