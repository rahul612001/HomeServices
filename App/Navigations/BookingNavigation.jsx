import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import BusinessDetailsScreen from '../Screen/BusinessDetailsScreen/BusinessDetailsScreen';



const Stack = createStackNavigator();
export default function BookingNavigation (){


    return ( 
    <StackActions.Navigator
     screenOptions={{
        headerShown:false
     }}>
         <Stack.Screen name='booking' component={BookingScreen}/>
         <Stack.Screen name='business-detail' component={BusinessDetailsScreen}/>
    </StackActions.Navigator>
    )
  }

