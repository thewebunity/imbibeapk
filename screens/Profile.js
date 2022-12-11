import React from 'react';
import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useFonts } from 'expo-font';
import app from '../Firebase';
const auth = getAuth(app);

const Profile = () => {
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    const Signout = async () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
                <Image
                    style={styles.profile_image}
                    source={{ uri: "https://webunity.live/logo.png" }}
                    resizeMode="contain"
                ></Image>
                <Text style={styles.profile_text}>
                    Name: Vishal Kumar Kushwaha
                </Text>
                <Text style={styles.profile_text}>
                    Branch: Computer Science & Engineering
                </Text>
                <Text style={styles.profile_text}>
                    College: Nri Institutes of Information Science & Technology
                </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={Signout}
                >
                    <Text style={styles.btn_text}>Signout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_container:{
      paddingHorizontal:20,
    },
    profile_image: {
        height: undefined,
        aspectRatio: 1,
        width: "30%",
        marginVertical:20,
        alignSelf:"center"
    },
    btn: {
        backgroundColor: "#5110D1",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins-Light",
        marginBottom: 20,
    },
    btn_text: {
        fontSize: 16,
        color: "#eee",
        textTransform: "capitalize",
    },
    profile_text:{
        fontSize:20,
        fontWeight:'600',
        fontFamily:'Poppins-Light',
        marginVertical:10
    }
})

export default Profile;
