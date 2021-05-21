import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function History() {

  const options = [
    { label: 'Segunda-Feira', value: 'Segunda-Feira' },
    { label: 'Terça-Feira', value: 'Terça-Feira' },
    { label: 'Quarta-Feira', value: 'Quarta-Feira' },
    { label: 'Quinta-Feira', value: 'Quinta-Feira' },
    { label: 'Sexta-Feira', value: 'Sexta-Feira' },
  ]

  const apiPoints = [
    {
      date: '12/05/2021',
      weekday: 'Segunda-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '13/05/2021',
      weekday: 'Terça-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '14/05/2021',
      weekday: 'Quarta-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '15/05/2021',
      weekday: 'Quinta-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '16/05/2021',
      weekday: 'Sexta-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '17/05/2021',
      weekday: 'Segunda-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '18/05/2021',
      weekday: 'Terça-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
    {
      date: '19/05/2021',
      weekday: 'Quarta-Feira',
      entryOne: '09:00',
      exitOne: '12:00',
      entryTwo: '13:00',
      exitTwo: '17:00'
    },
  ]

  const [points, setPoints] = useState([]);

  useEffect(() => setPoints(apiPoints), [])

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Histórico de pontos</Text>
      <RNPickerSelect
        onValueChange={value => value === '' ? setPoints(apiPoints) : setPoints(points.filter(point => point.weekday === value))}
        items={options}
        placeholder={{
          label: 'Filtre por um dia da semana',
          value: '',
          color: '#989FA6',
        }}
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: styles.inputIOS,
          inputAndroid: styles.inputAndroid,
        }}
      />
      <ScrollView style={styles.contentHistories}>
        {
          points.map((point, index) => (
            <View style={styles.point} key={index}>
              <Text style={styles.weekday}>{point.date} - {point.weekday}</Text>
              <View style={styles.hours}>
                <Text style={styles.hoursText}>{point.entryOne}</Text>
                <Text style={styles.hoursText}>{point.exitOne}</Text>
                <Text style={styles.hoursText}>{point.entryTwo}</Text>
                <Text style={styles.hoursText}>{point.exitTwo}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#caf7e3',
    padding: 16,
  },
  text: {
    color: '#536162',
    fontSize: 24
  },
  contentHistories: {
    marginTop: 16,
    flex: 1,
    width: '100%',
  },
  point: {
    backgroundColor: '#f1f3f3',
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,

  },
  weekday: {
    color: '#536162',
    fontSize: 14
  },
  hours: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hoursText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  inputIOS: {
    backgroundColor: '#FFF',
    height: 48,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#536162',
    padding: 24,
    width: 300,
    textAlign: 'center',
    marginTop: 8
  },
  inputAndroid: {
    backgroundColor: '#FFF',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#536162',
    width: 300,
    textAlign: 'center',
    marginTop: 8
  },
});