import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';



export default function PageHeading ({title}) {
  
    return (
   
          <TouchableOpacity style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}
          onPress={()=>navigation.goBack()}>
             <Ionicons name="arrow-back-outline" size={30} color="black" />
             <Text style={{fontFamily:"outfit-Medium",fontSize:25}}>{title}</Text>
          </TouchableOpacity>
      
    )
  }

