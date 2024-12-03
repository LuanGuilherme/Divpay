import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';

function NewOrderScreen(props) {

    const [show, setShow] = useState(true);

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Cobranca.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.order}>
            <TextInput style={styles.text} keyboardType='numeric'></TextInput>
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
    text: {
        color: '#7BD96B', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word',
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