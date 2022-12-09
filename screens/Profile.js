import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
import { getAuth,signOut } from "firebase/auth";
import app from '../Firebase';
const auth = getAuth(app);

const Profile = () => {
    const Signout = async () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return (
        <View>
           <Button 
           onPress={Signout}
           title='Logout'
           ></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
