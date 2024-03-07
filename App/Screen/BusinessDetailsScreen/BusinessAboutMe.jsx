
import Heading from '../../Components/Heading';
import { useNavigation, useRoute ,useRouter} from '@react-navigation/native'
import React, { Component, useEffect, useState } from 'react'
import { Text, View ,Image, Touchable, TouchableOpacity,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import BusinessPhoto from './BusinessPhoto';

export default function BusinessAboutMe ({business}){
    const [isReadMore,setIsReadMore]=useState(false);
    return business&&(
     <View>
        <Heading text={'About Me'}/>
        <Text style={{fontFamily:'outfit',lineHeight:28,
            color:Colors.GRAY, fontSize:16,}} numberOfLines={isReadMore?20:5}>{business.about}</Text>
            <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
            <Text style={{color:Colors.PRIMARY,fontSize:16,fontFamily:"outfit"}}>{isReadMore?'Read Less':'Read More'}</Text>
            </TouchableOpacity>
      </View>
    )
  }

