import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function History() {

  return (
    <View style={styles.background}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#caf7e3'
  },
  text:{
    color: '#536162'
  },
});