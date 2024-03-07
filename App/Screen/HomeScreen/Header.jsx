import { useUser } from '@clerk/clerk-expo';
import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, TextInput} from 'react-native'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){
    const {user,isLoading}=useUser();
    return user&&(
      <View style={styles.container}>
         {/*profile section */}
         
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
         <Image source={{uri:user?.imageUrl}}
         style={styles.userImage}/>
         <View> 
           <Text style={{color:Colors.WHITE,fontWeight:"500",fontFamily:"outfit-Medium"}}>Welcome</Text>
           <Text style={{color:Colors.WHITE,
            fontWeight:"500",fontSize:20,fontFamily:"outfit-Medium"}}>{user?.fullName}</Text>
         </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>

          {/*search section */}
          <View style={styles.serachBarContainer}>
            <TextInput placeholder='search'
            style={styles.textInput}></TextInput>
            <FontAwesome name="search"
            style={styles.searchbtn}
             size={24} color={Colors.PRIMARY} />
          </View>

      </View>
    )
  
}



const styles =StyleSheet.create({
 container:{
       padding:20,
       paddingTop:40,
       backgroundColor:Colors.PRIMARY,
       borderBottomLeftRadius:25,
       borderBottomRightRadius:25,

 },
 profileMainContainer:{
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between"
 },
 profileContainer:{
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       gap:10

 },
 textInput:{
       padding:7,
       paddingHorizontal:16,
       backgroundColor:Colors.WHITE,
       borderRadius:8,
       width:"85%",
       fontSize:16,
       fontFamily:"outfit"
 },
 serachBarContainer:{
   marginTop:15,
   display:"flex",
   flexDirection:"row",
   gap:10,
   marginBottom:10
 },
 searchbtn:{
   backgroundColor:Colors.WHITE,
   padding:10,
   borderRadius:8
 },
 userImage:{
    width:45,
    height:45,
    borderRadius:99,
 }
})
