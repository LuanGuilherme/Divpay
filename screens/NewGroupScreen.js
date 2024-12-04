import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

function LogScreen(props) {

    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Novo grupo.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>R$ dummy</Text>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Payment')}>
            <Image source={require('../assets/Small Arrow 3.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
            <Image source={require('../assets/Small Arrow 3.png')}/>
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
    button1: {
        bottom: 13,
        left: 173
    },
    button2: {
        top: 55,
        left: 173
    },
    text: {
        fontSize: 28,
        color: '#fff',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        bottom: 220
    }
  });

export default LogScreen;