import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

function RestaurantHomeScreen(props) {

    const [show, setShow] = useState(true);
    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Homepage Restaurante.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../assets/Hamburger Menu.png')} style={{width: 25, height: 17}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Profile Image.png')}/>
            </TouchableOpacity>
        </View>

        <Text style={styles.text}>Olá, </Text>

        <TouchableOpacity style={styles.order} onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../assets/new_order_btn.png')}/>
        </TouchableOpacity>

        <View style={styles.icons}>
            <TouchableOpacity>
                <Image source={require('../assets/wallet.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/bell.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/profile.png')}/>
            </TouchableOpacity>
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
        fontSize: 34,
        bottom: 280,
        right: 105,
        fontFamily: 'Montserrat',
        color: '#fff',
        fontWeight: '100'
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
        bottom: 100
    }
  });

export default RestaurantHomeScreen;