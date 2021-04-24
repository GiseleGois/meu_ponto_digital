import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class App extends Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>

          <View>
            <Text style={styles.daysText}>{this.state.currentDay}</Text>
            <Text style={styles.timeText}>{this.state.currentTime}</Text>
          </View>
          
          <View style={styles.captureTime}>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Ponto batido')}>
              <FontAwesome name="clock-o" size={30} color="#FFF" />
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#caf7e3'
    },
    timeText: {
      fontSize: 60,
      color: '#536162'
    },
    daysText: {
      color: '#FFAAA7',
      fontSize: 30,
      paddingBottom: 0
    },
    captureTime: {
      justifyContent: 'center',
      width: '90%',
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