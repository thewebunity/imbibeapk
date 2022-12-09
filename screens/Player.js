import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';

export default function Player() {
  const video = React.useRef(null);


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri: "https://d1bvrav3s9ghz3.cloudfront.net/video.mp4"}}
        useNativeControls
        resizeMode='contain'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  buttons: {
    margin: 16
  }
});