import { useNavigation, useRoute ,useRouter} from '@react-navigation/native'
import React, { Component, useEffect, useState } from 'react'
import { Text, View ,Image, Touchable, TouchableOpacity,StyleSheet, ScrollView, Modal, Linking} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BusinessPhoto from './BusinessPhoto';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';

export default function BusinessDetailsScreen (){
   
     const param=useRoute().params;
     const [business,setBusiness]=useState(param.business);
     const [showModal,setshowModal]=useState(false)
     const navigation=useNavigation();
    useEffect(()=>{
        
    },[])


   const onMessageBtnClick=()=>{
      Linking.openURL('mailto:'+business?.email+"?subject=I am looking for your Service&body=Hi There,");
   }

    return business&&(
      <View>
      <ScrollView style={{height:"91%"}}>
        <TouchableOpacity style={styles.backBtnContainer} onPress={()=>navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image source={{uri:business?.images[0]?.url}}
        style={{width:'100%',height:300}}/>

        <View style={styles.infoContainer}>
          <Text style={{fontFamily:"outfit-Bold",fontSize:20,}}>{business?.name}</Text>
            <View style={styles.subContainer}>
              <Text style={{fontFamily:"outfit-Medium",color:Colors.PRIMARY,
              fontSize:20}}>{business?.contactPerson} 🌟</Text>
              <Text style={{color:Colors.PRIMARY,backgroundColor:Colors.PRIMARY_LIGHT,
                padding:5,borderRadius:5,fontSize:14}}>{business?.category.name}</Text>
            </View>
          
           <Text style={{fontSize:17,fontFamily:"outfit",color:Colors.GRAY}}>
            <Ionicons name="location" size={25} 
              color={Colors.PRIMARY}/>{business?.address}</Text>
             
            {/* horizontal line */}
              <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}></View>
             
            {/* About me section*/}
                   <BusinessAboutMe business={business}/>
               
             {/* horizontal line */}
             <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}></View>
             <BusinessPhoto business={business}/>
        </View>
      </ScrollView>

      <View style={{display:"flex",flexDirection:"row",margin:6,gap:8}}>
        <TouchableOpacity style={styles.messgaeBtn}
        onPress={()=>onMessageBtnClick()}
        >
                   <Text style={{textAlign:"center",fontFamily:"outfit-Medium",color:Colors.PRIMARY,fontSize:18}}>
                    Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookingBtn} onPress={()=>setshowModal(true)}>
                   <Text style={{textAlign:"center",fontFamily:"outfit-Medium",color:Colors.WHITE,fontSize:18}}>
                    Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Booking screen modeal*/}
      <Modal
    
      animationType='slide'
      visible={showModal}
      >
       <BookingModal
        businessId={business.id}
       hideModal={()=>{setshowModal(false)}}/>
      </Modal>
        
      </View>
    )
  }

  const styles=StyleSheet.create({
      backBtnContainer:{
        position:"absolute",
        zIndex:10,
        padding:20,
        paddingTop:25
      },
      infoContainer:{
        padding:20,
        display:"flex",
        gap:7
      },
      subContainer:{
        display:"flex",
        flexDirection:"row",
        gap:5,
        alignItems:"center"
      },
      messgaeBtn:{
          padding:15,
          backgroundColor:Colors.WHITE,
          borderWidth:1,
          borderColor:Colors.PRIMARY,
          borderRadius:99,
          flex:1
      },
      bookingBtn:{
          padding:15,
          backgroundColor:Colors.PRIMARY,
          borderWidth:1,
          borderColor:Colors.PRIMARY,
          borderRadius:99,
          flex:1
      }
  })