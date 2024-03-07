import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Header from '../HomeScreen/Header'
import PageHeading from '../../Components/PageHeading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessList from '../HomeScreen/BusinessList'
import BusinessListItem from '../BusinesListByCategory/BusinessListItem'

export default function BookingScreen(){
   const {user}=useUser();
   const [bookingList,setBookingList]=useState([])
   const [loading,setLoading]=useState(false)
   useEffect(()=>{
      user&&getUserBookings();
   },[user])

 /** get user Bookings  */

   const getUserBookings=()=>{
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
               console.log(resp)
               setBookingList(resp.bookings)
               setLoading(false)
    })
   }
    return (
      <View style={{padding:20,paddingTop:30}}>
        <Text style={{fontFamily:"outfit-Medium",fontSize:26,}}>My Booking</Text>

        <View>
           <FlatList
           data={bookingList}
           onRefresh={()=>getUserBookings()}
           refreshing={loading}
           renderItem={({item,index})=>(
                   <BusinessListItem 
                    business={item?.businessList}
                    booking={item}
                   />
           )}
           
           
           />
        </View>
      </View>
    )
  
}