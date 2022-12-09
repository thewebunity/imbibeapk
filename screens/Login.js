import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import app from '../Firebase';
import { useFonts } from 'expo-font';
const auth = getAuth(app);


const Login = ({ navigation }) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const getuser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('Main')
            } 
        });
    }
    useEffect(() => {
        getuser();
    }, []);

    const Signin = () => {
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Main')
})
            .catch((error) => {
            });
    }
    
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.header}>
                    Login
                </Text>
                <Text style={styles.header_text}>
                    Please Sign in to Continue
                </Text>
                <View style={styles.form_container}>
                    <Text style={styles.input_label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={Email}
                        placeholder="5060vishal@gmail.com"
                        keyboardType="text"
                    />
                    <Text style={styles.input_label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={Password}
                        placeholder="password"
                        keyboardType="text"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={Signin}
                    >
                        <Text style={styles.btn_text}>Login </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.new_container}>
                    <Text style={styles.account_text}>Don't Have an Account ? <Link style={
                        styles.link_text
                    }
                        to={{ screen: 'Signup' }}
                    >Register</Link> </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    header: {
        marginTop: 100,
        fontFamily: 'Poppins-Light',
        fontSize: 30,
        fontWeight: '500'
    },
    header_text: {
        fontFamily: 'Poppins-Light',
        fontSize: 17,
        fontWeight: '700',
        color: '#626569'
    },
    input_label: {
        fontFamily: 'Poppins-Light',
        marginTop: 20,
        fontSize: 18,
        fontWeight: '400'
    },
    input: {
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        fontWeight: '400',
        height: 45,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '100%',
        marginTop: 30,
        borderRadius: 3,
        backgroundColor: "#5110D1",
    },
    btn_text: {
        color: '#fff',
        fontWeight: "700",
        fontSize: 16
    },
    account_text: {
        fontFamily: 'Poppins-Light',
        marginTop: 20,
        fontWeight: "600",
        fontSize: 16,
        color: "#626569",
        textAlign: "center",
        width: '100%'

    },
    new_container: {
        flex: 1,
        marginTop: 50,
    },
    form_container: {
        marginTop: 50
    },
    link_text: {
        fontFamily: 'Poppins-Light',
        marginTop: 20,
        fontWeight: "800",
        fontSize: 16,
        color: "#5110D1",
    },
})
export default Login;
