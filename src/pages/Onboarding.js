import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: '1',
        title: 'Em Ponto!',
        text: 'Aplique você essa praticidade na sua rotina.',
        image: require('../assets/onboarding1.png')
    },
    {
        key: '2',
        title: '100% SEGURO!',
        text: 'O MELHOR PARA VOCÊ.',
        image: require('../assets/onboarding2.png')
    },

];


export default function Onboarding({ navigation }) {

    const [showHome, setShowHome] = useState(false);

    function renderSlides({ item }) {
        return (
            <View style={{ flex: 1, backgroundColor: '#caf7e3' }}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'cover',
                        height: '73%',
                        width: '100%',
                    }}
                />
                <Text style={{
                    paddingTop: 25,
                    paddingBottom: 10,
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: '#536162',
                    alignSelf: 'center'
                }}>
                    {item.title}
                </Text>
                <Text style={{
                    textAlign: 'center',
                    color: '#b5b5b5',
                    paddingHorizontal: 25,
                    fontSize: 15
                }}>
                    {item.text}
                </Text>
            </View>
        )
    }

    if (showHome) {
        return <Text>ENTOU NA HOME</Text>
    } else {

        return (
            <AppIntroSlider
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    backgroundColor: '#536162',
                    width: 30
                }}
                renderNextButton={() => <Text style={{ fontSize: 15, color: '#536162' }}>PROXIMO</Text>}
                renderDoneButton={() => <Text style={{ fontSize: 15, color: '#536162' }}>ACESSAR!</Text>}
                onDone={() => navigation.navigate('Login')}
            />
        );
    }

}

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#caf7e3'
//     },
//     text: {
//         color: '#536162'
//     },
// });