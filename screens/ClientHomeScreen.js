import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput } from 'react-native';

function ClientHomeScreen() {
    const [show, setShow] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/Homepage.png')} resizeMode="cover" style={styles.image}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.menuIcon}>
                        <Text style={styles.menuText}>☰</Text>
                    </View>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.welcomeText}>Olá,</Text>
                    <Text style={styles.subText}>Seja bem-vindo de volta</Text>
                </View>
                <View style={styles.content}>
                    <Image source={require('../assets/PagarPedido.png')}style={styles.image}></Image>
                </View>
                <View style={styles.content}>
                    <Image source={require('../assets/HistoricoPagamento.png')}style={styles.image}></Image>
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
    },
    header: {
        backgroundColor: '#53E88B',
        height: '35%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight || 20,
        alignItems: 'center',
    },
    menuIcon: {
        position: 'absolute',
        left: 20,
        top: StatusBar.currentHeight || 20,
    },
    menuText: {
        fontSize: 24,
        color: '#fff',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#fff',
        fontFamily: 'Arimo Hebrew Subset',
        fontWeight: 'bold',
        wordWrap: 'break-word',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    subText: {
        fontSize: 28,
        color: '#000',
        marginTop: 5,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
});


export default ClientHomeScreen;