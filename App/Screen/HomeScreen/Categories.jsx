import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Categories(){
    const [categories,setCategories]=useState([]);
    const navigation=useNavigation()
    useEffect(()=>{
        getCategories();
    },[])

    /*get categories list */
    const getCategories=()=>{
          GlobalApi.getCategories().then(resp=>{
            console.log("resp",resp.categories);
            setCategories(resp?.categories);
          })
    }
    return (
      <View style={{marginTop:10,marginLeft:20,marginTop:-10}}>
        <Heading text={'Categories'} isViewAll={true}/>
        <FlatList
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item,index})=>index<=3&&(
            <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-list',{category:item.name})}>
                <View  style={styles.iconContainer}>
                     <Image source={{uri:item?.icon?.url}}
                      style={{width:30,height:30,borderRadius:99}}/>
                </View>
                <Text style={{fontFamily:"outfit-Medium",marginTop:5}}>{item?.name}</Text>
            </TouchableOpacity>
        )}/>
      </View>
    )
}



const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  iconContainer:{
    backgroundColor:Colors.LIGHT_GRAY,
    padding:17,
    borderRadius:99,
  },


})

