import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import Home from './Home'
import Profile from './Profile'
import Course from './Course'

const Main = () => {
    const Tab = createBottomTabNavigator();
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
            screenOptions={{
                headerStyle: {
                    height: 90,
                    backgroundColor: '#5110D1',
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '800',
                    fontFamily: "Poppins-Light"
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Courses" component={Course} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Main;
