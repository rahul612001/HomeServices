import React, { Component, useEffect, useState } from 'react'
import { Text, Touchable, TouchableOpacity, View ,StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import PageHeading from '../../Components/PageHeading';
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import moment from 'moment';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';

export default function BookingModal({businessId,hideModal}){

    const [timeList,setTimeList]=useState();
    const [selectedTime,setSelectedTime]=useState();
    const [selectedDate,setSelectedDate]=useState();
    const [note,setNote]=useState();
    const {user}=useUser();
    useEffect(()=>{
      getTime();
    },[])
   const getTime=()=>{
    const timeList=[];
    for(let i=8;i<=12;i++)
    {
            timeList.push({
              time:i+':00 AM'
            })

            timeList.push({
              time:i+':30 AM'
            })
    }

    for(let i=1;i<=7;i++)
    {
            timeList.push({
              time:i+':00 PM'
            })

            timeList.push({
              time:i+':30 PM'
            })
    }
    setTimeList(timeList);
   }

  
    //create booking method
    const createNewBooking=()=>{
      if(!selectedTime||!selectedDate){


        ToastAndroid.show('Plase select date and Time!',ToastAndroid.LONG)
        return ;
      }
      const data={
        userName:user?.fullName,
        userEmail:user?.primaryEmailAddress.emailAddress,
        time:selectedTime,
        date:moment(selectedDate).format('DD-MMM-yyyy'),
        businessId:businessId
        
      }
      GlobalApi.createBooking(data).then(resp=>{
         console.log("Resp",resp)
         ToastAndroid.show('Booking Created Successfully!',ToastAndroid.LONG)
         hideModal();
      })
    }


    return (
      <ScrollView>
      <KeyboardAvoidingView style={{padding:20,}}>
         <TouchableOpacity style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center",marginBottom:20}}
          onPress={()=>hideModal()}>
             <Ionicons name="arrow-back-outline" size={30} color="black" />
             <Text style={{fontFamily:"outfit-Medium",fontSize:25}}>Booking</Text>
          </TouchableOpacity>


           {/*calender section */}
           <Heading text={'Select Date'}/>
           <View style={styles.calenderContainer}>
              <CalendarPicker 
              onDateChange={setSelectedDate} 
              width={340}
              minDate={Date.now()}
              todayBackgroundColor={Colors.BLACK}
              todayTextStyle={{color:Colors.WHITE}}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.WHITE}
              />
          </View>
          {/*selected time */}
          <View style={{marginTop:20}}>
               <Heading text={'select Time Slot'}></Heading>
                   <FlatList
                   data={timeList}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   renderItem={({item,index})=>(
                    <TouchableOpacity style={{margin:5}} onPress={()=>setSelectedTime(item.time)}>
                         <Text style={[selectedTime==item.time?styles.selectedTime:styles.unSelectedTime]}>
                          {item.time}</Text>
                    </TouchableOpacity>
                   )}
                   
                   />
          </View>
           {/*Notes section */}
          <View style={{paddingTop:20}}>
           <Heading text={'Any Suggestion Note'}></Heading>    
           <TextInput placeholder='Note'
              numberOfLines={4}
              multiline={true}
              style={styles.noteTextArea}
              onChange={(text)=>setNote(text)}
             />        
          </View>
           {/*confirmation Button */}
           <TouchableOpacity style={{marginTop:10}}
           onPress={()=>createNewBooking()}
           >
              <Text style={styles.confirmBtn}>Confirm & Book</Text>
           </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
    )
  }

const styles=StyleSheet.create({
      calenderContainer:{
               backgroundColor:Colors.PRIMARY_LIGHT,
               padding:20,
               borderRadius:15
      },
      selectedTime:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.PRIMARY,
        borderRadius:99,
        backgroundColor:Colors.PRIMARY,
        paddingHorizontal:18,
        color:Colors.WHITE,
      },
      unSelectedTime:{
               padding:10,
               borderWidth:1,
               borderColor:Colors.PRIMARY,
               borderRadius:99,
               paddingHorizontal:18,
               color:Colors.PRIMARY,
      },
      noteTextArea:{
        borderWidth:1, 
        borderRadius:15,
        textAlignVertical:"top",
        padding:20,
        fontSize:16,
        fontFamily:"outfit",
        borderColor:Colors.PRIMARY

      },
      confirmBtn:{
         textAlign:"center",
         fontFamily:"outfit-Medium",
         fontSize:17,
         backgroundColor:Colors.PRIMARY,
         padding:10,
         borderRadius:99,
         elevation:2,
         color:Colors.WHITE
 
      }
})