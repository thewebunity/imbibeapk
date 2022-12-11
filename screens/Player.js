import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Video,VideoFullscreenUpdateEvent } from 'expo-av';
import React from 'react';

export default function Player({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
 

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: "https://d1bvrav3s9ghz3.cloudfront.net/video.mp4" }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}

      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
    flex: 1,
  },
  video: {
    height: 200,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:'flex-end',
    marginTop: 30,
  },
  buttonStyle: {
    // backgroundColor: "#5110D1",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-Light",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#5110D1",
    textTransform: "capitalize",
    fontWeight:'800'
  },
});