import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Video from './screens/Video'
import Player from './screens/Player'


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5110D1',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '800',
                    fontFamily: "Poppins-Light"
                }
            }} >
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Video" component={Video} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
