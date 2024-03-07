import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default function Heading({text,isViewAll=false}){

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{text}</Text>
        {isViewAll&&<Text>View All</Text>}
      </View>
    )
  
}


const styles=StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:"outfit-Medium",
        marginBottom:10,
      
        
    },
    container:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:"contain"

    }

  })