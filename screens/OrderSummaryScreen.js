import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const createOrderEndpoint = 'http://localhost:3000/orders/status'; // Update with your actual endpoint

function OrderSummaryScreen({ route }) {
  const { orderData } = route.params;
  const [status, setStatus] = useState('Pago');
    const [show, setShow] = useState(true)


  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/Cobranca.png')} resizeMode="cover" style={styles.image}>
          <View style={{top:"-20%"}}>
            <Text style={styles.text}>Valor do pedido: {orderData.numb}</Text>
          </View>
          <View style={{top: "-10%"}}>
            <Text style={styles.text}>Status: {status}</Text>
          </View>
          <View>
            {show ? (
                <Image source={require('../assets/Done 2.png')}/>
            ) :
            (
                <TouchableOpacity onPress={() => activate()} style={styles.tela}>
                  </TouchableOpacity>)}
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
tela: {
    width: "100%",
    height: "100%"
},
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
  summary: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
      color: '#7BD96B',
      fontSize: 24,
      fontFamily: 'Montserrat',
      fontWeight: '700'
  }
});

export default OrderSummaryScreen;