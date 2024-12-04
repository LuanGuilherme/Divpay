import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const createOrderEndpoint = 'http://18.119.115.84/orders/create';

function NewOrderScreen(props) {
    const navigation = useNavigation();

    const [number, setNumber] = useState(0);
    const [showOrderSummary, setShowOrderSummary] = useState(true); // Assuming this state is used for conditional rendering
    const [orderData, setOrderData] = useState(null);

    const handleNumPadPress = (num) => {
      if (num === '\u232B') {
        setNumber((prev) => Math.floor(prev / 10));
      } else {
        setNumber((prev) => prev * 10 + num);
      }
    };

    const formatCurrency = (num) => {
      num = num / 100;
      return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };    
    
    const handleContinue = async () => {
      const num = number;
      const payload = {'restaurantId': "674df6ef2cdd0a3d1d2df9de", 'totalAmount': num};
      console.log('Continue button pressed ', num);
      const response = await fetch(createOrderEndpoint, 
          {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json()
      const numb = formatCurrency(num)
      setOrderData({ ...data, numb });
      setShowOrderSummary(!showOrderSummary);
    };

    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/Cobranca.png')} resizeMode="cover" style={styles.image}>
        {showOrderSummary ? (
          <>
            <View style={styles.order}>
              <TextInput style={styles.text} keyboardType='numeric' />
            </View>

            <View style={styles.visor}>
              <Text style={styles.visorText}>{formatCurrency(number)}</Text>
            </View>

            <View style={styles.numPad}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '\u232B', '\u27A1'].map((num, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.numPadButton} 
                    onPress={() => num === '\u27A1' ? handleContinue() : handleNumPadPress(num)}
                  >
                    <Text style={styles.numpadText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        ) : (
          <View style={styles.successMessage}>
            <Text style={styles.successTextHeader}>Pedido criado com sucesso!</Text>
            <View style={{top: "20%"}}>
                <View style={{top: "-20%"}}>
                    <Text style={styles.successText}>Para entrar no grupo de divisão, acesse o código:</Text>
                    <Text style={styles.successTextBig}>{orderData.orderAccessCode}</Text>
                </View>
                <View style={{top: "-10%"}}>
                    <Text style={styles.successText}>Valor do pedido:</Text>
                    <Text style={styles.successTextBig}>{orderData.numb}</Text>
                </View>
            </View>
            <Text style={styles.successTextId}>ID do pedido: {orderData.orderId}</Text>
            <View style={{top: "35%"}}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("OrderSummary", { orderData })}>
                  <Image source={require('../assets/Continue button.png')}/>
                </TouchableOpacity>
            </View>
          </View>
        )}
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
        color: '#7BD96B', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'
    },
    numpadText: {
        color: 'white', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'
    },
    order: {
      marginBottom: 20
    },
    visor: {
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 20
    },
    visorText: {
      color: '#7BD96B',
      fontSize: 24,
      fontFamily: 'Montserrat',
      fontWeight: '700'
    },
    numPad: {
      width: '80%',
      alignItems: 'center',
      top: "20%"
    },
    numPadButton: {
      width: '30%',
      margin: '1%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#7BD96B',
      borderRadius: 5
    },
    successMessage: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    successText: {
      fontSize: 24,
      color: '#7BD96B',
      fontFamily: 'Montserrat',
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 10
    },
    successTextHeader: {
          top: "-15%",
          fontSize: 24,
          color: '#7BD96B',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          textAlign: 'center',
          marginVertical: 10
        },
    successTextId: {
      top: "30%",
      fontSize: 24,
      color: '#7BD96B',
      fontFamily: 'Montserrat',
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 10
    },
    successTextBig: {
          fontSize: 40,
          color: '#7BD96B',
          fontFamily: 'Montserrat',
          fontWeight: '700',
          textAlign: 'center',
          marginVertical: 10
        }
});

export default NewOrderScreen;