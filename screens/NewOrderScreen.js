import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

function NewOrderScreen() {

    const [show, setShow] = useState(true);
    const [value, setValue] = useState('');
    const handleChange = (text) => {
        setValue(text); // Armazena o valor formatado
    };

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Cobranca.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.order}>
//            <TextInput style={styles.text} keyboardType='numeric'></TextInput>
            <TextInputMask
                    type={'money'} // Usando o tipo money
                    value={value}
                    onChangeText={handleChange}
                    style={styles.input}
                    placeholder="R$ 0,00"
                    keyboardType="numeric"
                  />
        </View>

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
     input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlign: 'right', // Alinha o texto à direita
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
    order: {
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default NewOrderScreen;