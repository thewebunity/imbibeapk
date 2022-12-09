import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect,useState } from 'react';
import { getDocs, collection, getFirestore, setDoc, doc } from 'firebase/firestore'
import { useFonts } from 'expo-font';
import app from '../Firebase';
const db = getFirestore(app);



const Home = ({ route, navigation }) => {

    const [Videos, setVideos] = useState([])
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf')
    });

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        const querySnapshot = await getDocs(collection(db, `/Courses/1668755026774/Videos`));
        let theseData = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        setVideos([...Videos, ...theseData]);
        console.log(Videos)
    }
    if (!fontsLoaded) {
        return null;
    }

    const VideosCard = ({ item }) => {
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
                        <Text style={styles.course_name}>{item.tutorial}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={()=>navigation.navigate('Player')}>
                                <Text style={styles.buttonText}>Watch Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <>
            <View style={styles.container}>
                <FlatList data={Videos} renderItem={VideosCard} keyExtractor={(item) => item.index}></FlatList>
            </View>
        </>
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
        paddingHorizontal: 20,
        paddingVertical:5,
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
        textAlign: "left",
        paddingBottom: 5,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop:10,
    },
    buttonStyle: {
        backgroundColor: "#5110D1",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins-Light",
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        color: "#eee",
        textTransform: "capitalize",
    },
})

export default Home;
