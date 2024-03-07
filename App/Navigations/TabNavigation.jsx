import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import BookingScreen from '../Screen/BookingScreen/BookingScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation(){
  
    return (
           <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:Colors.PRIMARY,
            
           }}>
               <Tab.Screen name='home' component={HomeNavigation} 
                options={{
                  tabBarIcon:({color,size})=>(
                    <FontAwesome name="home" size={24} color={color} />
                  )
                }}/>
               <Tab.Screen name='booking' component={BookingScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <FontAwesome name="bookmark" size={24} color={color} />
                )
              }}/>
               <Tab.Screen name='profile' component={ProfileScreen}
               options={{
                tabBarIcon:({color,size})=>(
                 <FontAwesome name="user-circle" size={24} color={color} />
                )
                
              }}/>

           </Tab.Navigator>
    )
  
}
