import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground, StatusBar, View } from 'react-native';


function OrderSummaryScreen({ route }) {
  const { orderData } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.text}>Order Summary</Text>
        <Text style={styles.text}>Total Amount: {orderData.totalAmount}</Text>
        {/* Display other order data as needed */}
      </View>
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
        color: '#7BD96B',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        bottom: 220
    },
    summary: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default OrderSummaryScreen;