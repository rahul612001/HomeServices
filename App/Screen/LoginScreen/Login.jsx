import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login(){
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 

    return (
      <View style={{alignItems:"center"}}>
        <Image source={require('../../../assets/service.png')}
          style={styles.loginImage}
        />
          <View style={styles.subContainer}>
               <Text style={{fontSize:27,color:Colors.WHITE,textAlign:"center"}}>
                 Let's Find  
                 <Text style={{fontWeight:"bold"}}> Professional Cleaning and repair
                  </Text> Service
               </Text>

               <Text style={{fontSize:18,color:Colors.WHITE,textAlign:"center",marginTop:20}}>Best App to find services near you which deliver you a professional service</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
               <Text style={{textAlign:"center",fontSize:20,color:Colors.PRIMARY,fontWeight:"600"}}>Let's started</Text>
          </TouchableOpacity>

          </View>

      </View>
    )
  }

 const styles = StyleSheet.create({
   loginImage:{
    width:230,
    height:450,
    marginTop:70,
    borderColor:Colors.BLACK,
    borderWidth:5,
    borderRadius:15
   },
   subContainer:{
      backgroundColor:Colors.PRIMARY,
      height:"50%",
      width:395,
      marginTop:-20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20
   },
   button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    marginTop:40,
   }

 })
 