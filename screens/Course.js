import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { getDocs, collection, getFirestore, } from 'firebase/firestore'
import { useFonts } from 'expo-font';
import app from '../Firebase';
const db = getFirestore(app);

const Course = ({navigation}) => {
    const [Course, setCourse] = useState([])

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        const querySnapshot = await getDocs(collection(db, "/Courses"));
        let theseData = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        setCourse([...Course, ...theseData]);
    }
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

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => navigation.navigate('Video')}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
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
        <View style={styles.container}>
            <FlatList data={Course} renderItem={courseCard} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginVertical: -70,
    },
    mainContainer: {
        paddingHorizontal: 15,
    },

    courseContainer: {
        padding: 0,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
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
        paddingHorizontal:'30%',   
    },
    buttonStyle: {
        backgroundColor: "#5110D1",
        borderRadius: 20,
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

export default Course;
