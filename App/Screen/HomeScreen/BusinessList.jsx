import React, { Component, useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi'
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList(){

    const [businessList,setBusinessList]=useState([]);
   useEffect(()=>{
        getBusinessList();
   },[])

   /*here "businessLists" is the funcation name in hygraph */
    const getBusinessList=()=>{
        GlobalApi.getBusinessList().then(resp=>{
            console.log(resp);
            setBusinessList(resp.businessLists)
        })
    }

    return (
      <View style={{marginTop:20,marginHorizontal:10}}>
        <Heading text={'Latest Business'} isViewAll={true}/>
        <FlatList
        data={businessList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item,index})=>(
          <View style={{marginRight:10}}>
               <BusinessListItemSmall business={item}/>
          </View>
        )}
        />
      </View>
    )
  }

