import React, { Component } from 'react'
import { Text, View ,Image, FlatList, Touchable, TouchableOpacity} from 'react-native'
import Heading from '../../Components/Heading'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen(){
  const navigation=useNavigation();
  const {user}=useUser();
  const profileMenu=[
    {
      id:1,
      name:'Home',
      icon:'home'
    },
    {
      id:2,
      name:'My Booking',
      icon:'bookmark-sharp' 
    },
    {
      id:3,
      name:'Logout',
      icon:'log-out'
    }
  ]
    return (
      <View>
      <View style={{padding:20,paddingTop:30,backgroundColor:Colors.PRIMARY}}>
       <Text style={{fontFamily:"outfit-Bold",fontSize:30,color:Colors.WHITE}}>Profile</Text>
       <View style={{display:'flex',justifyContent:"center",alignItems:"center",padding:20,}}>
          <Image source={{uri:user.imageUrl}}
           style={{width:90,height:90,borderRadius:99,}}
          />
          <Text style={{fontSize:26,fontFamily:"outfit-Medium",color:Colors.WHITE,marginTop:10}}>{user.fullName}</Text>
          <Text style={{fontSize:16,fontFamily:"outfit-Medium",color:Colors.WHITE,marginTop:10}}>{user?.primaryEmailAddress.emailAddress}</Text>
       </View>
      </View>
         
         <View style={{paddingTop:100,}}> 
          <FlatList
          data={profileMenu}
          renderItem={({item,index})=>(
            <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",
            gap:10,marginBottom:40,paddingHorizontal:80}}>
                 <Ionicons name={item.icon} size={30} color={Colors.PRIMARY} />
                 <Text style={{fontFamily:"outfit",fontSize:20,}}>{item.name}</Text>
              </TouchableOpacity>
          )}
          />
         </View>
      
      </View>
    )
  
}