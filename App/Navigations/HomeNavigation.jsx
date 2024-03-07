import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screen/BusinesListByCategory/BusinessListByCategoryScreen';
import BusinessListByCategoryScreen from '../Screen/BusinesListByCategory/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screen/BusinessDetailsScreen/BusinessDetailsScreen';




const Stack = createStackNavigator();
export default function HomeNavigation (){
  
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
           <Stack.Screen name='home' component={HomeScreen}/>
           <Stack.Screen name='business-list' component={BusinessListByCategoryScreen}/>
           <Stack.Screen name='business-detail' component={BusinessDetailsScreen}/>
      </Stack.Navigator>
    )
  }

