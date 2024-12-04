import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

function LogScreen(props) {

    const navigation = useNavigation();
    const [totalAmount, setTotalAmount] = useState(0);



    useEffect(() => {
            if (props.route?.params?.orderJson) {
                const { orderJson } = props.route.params; // Extraindo o JSON
                setTotalAmount(orderJson.totalAmount); // Atualiza o estado com o valor de totalAmount
            }
        }, [props.route.params]);

    const formatCurrency = (value) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value);
        };
    const checkGroupMembers = async () => {
          const resp = await fetch('http://18.119.115.84/orders/scanOrderByAccessCode',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "accessCode": orderJson.accessCode
              })
            }
          )
          console.log(await resp.json())
    }


    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Novo grupo.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{formatCurrency(totalAmount)}</Text>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Payment', { totalAmount: totalAmount })}>
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