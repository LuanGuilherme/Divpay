import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeScreen() {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Log');
    }, 2000);

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Log')}>
            <Image resizeMode='cover' fadeDuration={1000} source={require('../assets/tela inicial.png')}/>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3DFD7D',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }
  });

export default WelcomeScreen;