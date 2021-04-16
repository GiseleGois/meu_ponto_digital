import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';


export default function CameraApp() {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef} />
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <FontAwesome name="camera" size={23} color="#FFF" />
      </TouchableOpacity>

      {capturedPhoto &&
        <Modal
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View style={styles.capturePhoto}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={50} color="#FF0000" />
            </TouchableOpacity>

            <Image style={styles.image}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#caf7e3'
  },
  text: {
    color: '#536162'
  },
  camera: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  capturePhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffaaa7',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
});