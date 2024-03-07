import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/LoginScreen/Login';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key,value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
 
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
  });
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_c3RpcnJlZC1zaGFkLTQxLmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View style={styles.container}>

     {/*sign in components*/}
      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
      </SignedIn>
      
        {/*signout components*/}
     <SignedOut>
          <Login/>
      </SignedOut>

      <StatusBar style="auto" />
    </View> 
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
