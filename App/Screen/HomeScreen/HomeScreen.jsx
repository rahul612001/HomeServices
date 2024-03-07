import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'


export default function HomeScreen(){
  
    return (
      <View>
        <Header/>
        <View style={{padding:20}}>
        <Slider/>
        </View>
        <Categories/>
        <BusinessList/>
      </View>
    )
  
}