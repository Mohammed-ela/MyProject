import React from 'react';
import { GlobalProvider } from './src/store/GlobalStore';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
