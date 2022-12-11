import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home'
import Setting from './Setting'
import Profile from './Profile'
import Course from './Course'

const Main = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#5110D1',
            headerStyle: { backgroundColor: "#5110D1", color: '#fff' }
        }}
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Notes" component={Setting} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="note" color={color} size={size} />
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
