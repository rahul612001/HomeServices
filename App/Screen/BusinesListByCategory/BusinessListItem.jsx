import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function BusinessListItem ({business,booking}){
    const navigation=useNavigation();
    return (
      <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail',{business:business})}>
       <Image source={{uri:business?.images[0]?.url}}
       style={styles.image}/>
       <View style={styles.subContainer}>
             <Text style={{fontFamily:"outfit",color:Colors.GRAY,fontSize:15}}>{business.contactPerson}</Text>
             <Text style={{fontFamily:"outfit-Bold",fontSize:19}}>{business.name}</Text>
              {booking?.id?<Text>{booking.bookingStatus}</Text>:null}
             <Text style={{fontFamily:"outfit",fontSize:16,color:Colors.GRAY}}>
              
             <AntDesign name="calendar" size={24} color={Colors.PRIMARY} /></Text>
              
              {booking?.id?<Text>{booking.date} at {booking.time}</Text>:null}
              
       </View>
      </TouchableOpacity>
    )
  }

  const styles=StyleSheet.create({
     container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginBottom:15,
        display:"flex",
        flexDirection:"row",
        gap:10

     },
     subContainer:{
         display:"flex",
         gap:8
     },
    image:{
        width:100,
        height:100,
        borderRadius:15,

    }

  })