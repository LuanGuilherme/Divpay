import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, StatusBar, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignInScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleSignIn = () => {

            switch(email){
                case "test1@test" :
                    navigation.navigate('RestaurantHome');
                    break;
                case "test2@test" :
                    navigation.navigate('ClientHome');
                                    break;
                case "test3@test" :
                    navigation.navigate('ClientHome');
                                    break;
                case "test4@test" :
                    navigation.navigate('ClientHome');
                                    break;
                default:
                    navigation.navigate('ClientHome');
            }

        };

    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Sign In screen.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Email</Text>
        <TextInput
            style={styles.input}
            placeHolder="Digite seu email"
            value={email}
            onChangeText={setEmail}
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Digite sua senha"
                            value={password} // Define o valor do TextInput como o estado 'password'
                            onChangeText={setPassword} // Atualiza o estado 'password' sempre que o texto mudar
                        />
        <Text style={styles.forget}>Esqueceu a senha?</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                            <Image source={require('../assets/SignIn button.png')} />
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