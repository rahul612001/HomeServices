import React, { Component } from 'react'
import { FlatList, Text, View,StyleSheet,Image} from 'react-native'
import Heading from '../../Components/Heading'

export default function BusinessPhoto({business}){
  
    return (
      <View>
        <Heading text={'Photos'}/>
        <FlatList
        data={business.images}
        numColumns={2}
        renderItem={({item})=>(
          <Image source={{uri:item.url}}
            style={{width:"50%",height:120,flex:1,borderRadius:15,margin:7}}/>
        )}
        
        
        />
      </View>
    )
  }

