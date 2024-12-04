import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

function SignInScreen(props) {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Sign In screen.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input}/>
        <Text style={styles.forget}>Esqueceu a senha?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClientHomeScreen')}>
          <Image source={require('../assets/SignIn button.png')}/>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
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
        top: 210
    },
    text: {
        fontSize: 28,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    input: {
        top: 150,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#27FD2E',
        height: 40,
        width: 345,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        top: 150,
        right: 155,
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#B9B9B9',
        marginTop: 20
    },
    forget: {
        top: 150,
        right: 105,
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginTop: 20
    }
  });

export default SignInScreen;