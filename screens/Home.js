import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, getFirestore, } from 'firebase/firestore'
import app from '../Firebase';
import { useFonts } from 'expo-font';
const db = getFirestore(app);
const auth = getAuth(app);




const Home = ({ navigation }) => {
    const [Course, setCourse] = useState([])
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
    const getdata = async () => {
        const querySnapshot = await getDocs(collection(db, "/Courses"));
        let theseData = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        setCourse([...Course, ...theseData]);
    }
    useEffect(() => {
        getuser();
        getdata();
    }, [])

    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View style={styles.course_images}>
                        <Image
                            style={styles.cardImage}
                            source={{ uri: `${item.image}` }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.course_details}>
                        <Text style={styles.course_name}>{item.course_name}</Text>
                        <Text style={styles.author_name}>{item.author_name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
            </View>
        );
    };
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }



    return (
        <>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={styles.banner}>
                        <Text style={styles.banner_text}>Hello, </Text>
                        <Text style={styles.banner_text}>Vishal Kumar</Text>
                    </View>
                    <Text style={styles.header_text}>Courses</Text>
                    <View style={styles.course_card}>
                        <FlatList data={Course} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={courseCard}></FlatList>
                    </View>
                    <Text style={styles.header_text}>Course By Category</Text>
                    <View style={styles.course_card}>
                        <FlatList data={Course} keyExtractor={(item) => item.id} horizontal renderItem={courseCard}></FlatList>
                    </View>
                </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    header_text: {
        fontFamily: "Poppins-Light",
        fontWeight: "600",
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 5,
        color:'#5110D1'
    },
    banner: {
        backgroundColor: '#4a6fe8',
        padding: 25,
        margin: 15,
        borderRadius: 15,
    },
    banner_text: {
        fontFamily: "Poppins-Light",
        fontWeight: "700",
        fontSize: 30,
        padding: 2,
        color: '#fff'
    },
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginVertical: -70,
    },
    mainContainer: {
        paddingHorizontal: 15,
        width: 300
    },
    course_card:{
         marginVertical:10
    },
    courseContainer: {
        padding: 0,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
    },
    course_details: {
        padding: 20
    },
    course_name: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: "Poppins-Light"
    },
    author_name: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: "Poppins-Light"
    },

    description: {
        fontFamily: "Poppins-Light",
        textAlign: "left",
        paddingBottom: 5,
        lineHeight: 20,
        fontSize: 14,
        color: "#7d7d7d",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
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
    buttonText: {
        fontSize: 16,
        color: "#eee",
        textTransform: "capitalize",
    },
})

export default Home;
