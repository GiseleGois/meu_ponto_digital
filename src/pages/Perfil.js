import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require("../assets/profile1.png")} style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={styles.add}>
            <Ionicons name="add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Baby Yoda</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Developer</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>22</Text>
            <Text style={[styles.text, styles.subText]}>Idade</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>Guarulhos</Text>
            <Text style={[styles.text, styles.subText]}>Cidade</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>ADS</Text>
            <Text style={[styles.text, styles.subText]}>Anhanguera</Text>
          </View>
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
    color: '#536162'
  },
  image: {
    flex: 1,
    height: 200,
    width: 200,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    alignItems: "center",
    flex: 1
  },

});