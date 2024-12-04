import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';

function LogScreen(props) {

    const navigation = useNavigation();
    const [totalAmount, setTotalAmount] = useState(0);
    const [shareAmount, setShareAmount] = useState(0);
    const [remainingAmount, setRemainingAmount] = useState(0);

      useEffect(() => {
        if (props.route?.params?.totalAmount) {
          setTotalAmount(props.route.params.totalAmount);  // Recebe o valor de totalAmount
        }
      }, [props.route?.params?.totalAmount]);

      const formatCurrency = (value) => {
                  return new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                  }).format(value);
              };

    const calculateAmounts = () => {
        const share = totalAmount / 4; // Divide o totalAmount por 4
        const remaining = totalAmount - share; // Subtrai a variável share de totalAmount

        setShareAmount(share);
        setRemainingAmount(remaining);
      };
    useEffect(() => {
        if (totalAmount > 0) {
          calculateAmounts();
        }
      }, [totalAmount]);

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Pagamento.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{formatCurrency(shareAmount)}</Text>
        <Text style={styles.text}>{formatCurrency(totalAmount)}</Text>
        <Text style={styles.text}>{formatCurrency(remainingAmount)}</Text>
      </ImageBackground>
      <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/pagar_final_btn.png')}/>
      </TouchableOpacity>
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
        fontSize: 24,
        color: '#222',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        top: 225,
        paddingTop: 5,
        left: 100
    }
  });

export default LogScreen;