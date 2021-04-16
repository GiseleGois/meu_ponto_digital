import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require("../assets/QRcode.png")} style={styles.image} resizeMode="center"></Image>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.text}>Para iniciar</Text>
          <Text style={styles.subText}>Faça o scan do QRCode com a camera !</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf7e3'
  },
  text: {
    color: '#536162',
    fontWeight: "200",
    fontSize: 36
  },
  image: {
    flex: 1,
    height: 300,
    width: 300,
    borderRadius: 50,
  },
  subText: {
    color: "#536162",
    fontSize: 14
  },
  profileImage: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },


});