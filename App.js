import React from 'react';
import { GlobalProvider } from './src/store/GlobalStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import QRCodeScreen from './src/screens/QRCodeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Accueil' }} />
          <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} options={{ title: 'QR Code' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
