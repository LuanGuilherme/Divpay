import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogScreen from './screens/LogScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import RestaurantHomeScreen from './screens/RestaurantHomeScreen';
import ClientHomeScreen from './screens/ClientHomeScreen';
import ClientHomeScreen from './screens/ClientHomeScreen';
import NewOrderScreen from './screens/NewOrderScreen';
import NewGroupScreen from './screens/NewGroupScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Log" component={LogScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="ClientHome" component={ClientHomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="NewOrderScreen" component={NewOrderScreen} options={{headerShown: false}} />
        <Stack.Screen name="NewGroup" component={NewGroupScreen} options={{headerShown: false}} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
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
  }
});

/*
return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image fadeDuration={1000} source={require('./assets/tela inicial.png')} />
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
*/