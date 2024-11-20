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
      <ImageBackground source={require('../assets/welcome_no_btn.png')} resizeMode="cover" style={styles.image}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.button}>
          <Image source={require('../assets/SignIn button.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/Signup button.png')}/>
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
    button: {
        top: 240
    },
    text: {
        fontSize: 28,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    }
  });

export default LogScreen;