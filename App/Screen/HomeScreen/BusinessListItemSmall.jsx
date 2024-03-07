import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function BusinessListItemSmall({business}){
 const navigation=useNavigation()
    return (
      <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail',{business:business})}>
        <Image source={{uri:business?.images[0]?.url}}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
            <Text style={{fontSize:17,fontFamily:"outfit-Medium"}}>{business?.name}</Text>
            <Text style={{fontSize:13,fontFamily:"outfit"}}>{business?.contactPerson}</Text>
            <Text style={{fontSize:10,fontFamily:"outfit",padding:3,color:Colors.PRIMARY,backgroundColor:Colors.PRIMARY_LIGHT,
                      borderRadius:3,alignSelf:"flex-start",paddingHorizontal:7}}>{business?.category.name}</Text>

        </View>
      </TouchableOpacity>
    )
  }


  const styles=StyleSheet.create({
     image:{
        width:160,
        height:100,
        borderRadius:10
     },
     container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10
     },
     infoContainer:{
        padding:7,
        display:"flex",
        gap:3

     }
  
  })
  
  