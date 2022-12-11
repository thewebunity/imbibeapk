import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRef, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFonts } from 'expo-font';
import app from '../Firebase';
const auth = getAuth(app);




const Home = ({ navigation }) => {
    const uid = useRef();
    const getuser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid.current = user.uid;
            } else {
                navigation.navigate('Login')
            }
        });
    }

    useEffect(() => {
        getuser();
    }, [])


    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }



    return (
        <>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default Home;
