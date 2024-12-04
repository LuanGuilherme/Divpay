import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

function OpenOrderScreen() {

    const navigation = useNavigation();
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(null);

    const sendRequest = async () => {
      const test = await fetch('http://18.119.115.84/orders/scanOrderByAccessCode',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "accessCode": inputValue
          })
        }
      )
      console.log(test)
      const retorno = await test.json()
      navigation.navigate("NewGroup", { orderJson: retorno })
      // .then((response) => console.log(response.data))
      // .catch((error) => console.error('Erro:', error));
    };


    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Cobranca.png')} resizeMode="cover" style={styles.image}>

      <Text style={styles.text}>Código de pagamento</Text>
      <TextInput style={styles.input} value={inputValue} onChangeText={(text) => setInputValue(text)} />
      <TouchableOpacity style={styles.button} onPress={sendRequest}>
          <Image source={require('../assets/pagar_btn.png')}/>
      </TouchableOpacity>

      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    text: {
        color: '#222', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word',
    },
    icons: {
        top: 300,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    header: {
        bottom: 270,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',

    },
    button: {
      top: 50
    },
    input: {
      top: 0,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomColor: '#27FD2E',
      height: 40,
      width: 345,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    order: {
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default OpenOrderScreen;