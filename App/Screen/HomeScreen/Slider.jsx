import React, { Component, useEffect, useState } from 'react'
import { Text, View,StyleSheet,FlatList,Image} from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function Slider (){

    const [slider,setSlider]=useState([]);


     useEffect(()=>{
        getSliders();
     },[])
     const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
        })
     }
    return (
      <View>
        <Heading text={'offers for you'}/>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={slider}
        renderItem={({item,index})=>(
            <View style={{marginRight:20}}>
               <Image source={{uri:item?.image?.url}}
               style={styles.sliderImage}/>
            </View>
        )}/>
      </View>
    )
  }


  const styles=StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:"outfit-Medium",
        marginBottom:10
    },
    sliderImage:{
        width:270,
        height:150,
        borderRadius:20,
        objectFit:"contain"

    }

  })
