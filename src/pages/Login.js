import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Animated,
  Keyboard,
  LogBox 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [inputSenha, setInputSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 250, y: 250 }));

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 15,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      })
    ]).start();

  }, []);

    //Teclado Aberto
    function keyboardDidShow () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: (Platform.OS === 'android' ? 70 : 90),
          duration: 100,
        }),
        Animated.timing(logo.x, {
          toValue: (Platform.OS === 'android' ? 70 : 90),
          duration: 100,
        }),
      ]).start();
    }
  
    //Teclado Fechou
    function keyboardDidHide () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: 250,
          duration: 150,
        }),
        Animated.timing(logo.x, {
          toValue: 250,
          duration: 150,
        }),
      ]).start();
    }

  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.logo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('../assets/mobile-guy.png')} />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={() => { }}
        />

        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(texto) => setInputSenha(texto)}
            secureTextEntry={hidePass}
          />

          <TouchableOpacity style={styles.icon} onPress={(texto) => setHidePass(!hidePass)}>
            {hidePass ?
              <Ionicons name="eye" color="black" size={25} />
              :
              <Ionicons name="eye-off" color="black" size={25} />
            }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>

      <StatusBar style="dark" backgroundColor="#ffaaa7" translucent={false} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#caf7e3'
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 180,
    borderRadius: 5,
    paddingBottom: 50,
  },
  inputEmail: {
    width: '90%',
    height: 50,
    color: '#536162',
    padding: 8,
    fontSize: 18,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 8
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#FFF',
    height: 50,
    alignItems: 'center',
    borderRadius: 8
  },
  inputSenha: {
    width: '85%',
    height: 50,
    color: '#536162',
    padding: 8,
    fontSize: 18
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffaaa7',
    height: 45,
    width: '90%',
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    color: '#536162',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#536162',
  }
});