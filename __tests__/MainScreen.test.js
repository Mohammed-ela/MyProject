import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../src/screens/MainScreen';
import { GlobalProvider } from '../src/store/GlobalStore';

describe('MainScreen Tests', () => {
  it('snapshot de l’écran principal', () => {
    const { toJSON } = render(
      <GlobalProvider>
        <MainScreen />
      </GlobalProvider>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('le composant de l’écran principal existe', () => {
    const { getByText } = render(
      <GlobalProvider>
        <MainScreen />
      </GlobalProvider>
    );
    expect(getByText('Nom :')).toBeTruthy();
    expect(getByText('Prénom :')).toBeTruthy();
  });

  it('les champs de saisie de nom et prénom existent', () => {
    const { getByPlaceholderText } = render(
      <GlobalProvider>
        <MainScreen />
      </GlobalProvider>
    );
    expect(getByPlaceholderText('Entrez votre nom')).toBeTruthy();
    expect(getByPlaceholderText('Entrez votre prénom')).toBeTruthy();
  });

  it('le bouton permettant d’accéder à l’écran de QR Code existe', () => {
    const { getByText } = render(
      <GlobalProvider>
        <MainScreen />
      </GlobalProvider>
    );
    expect(getByText('Générer le QR Code')).toBeTruthy();
  });

  it('la fonction d’ouverture d’écran du QR Code est appelée une fois', () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText, getByPlaceholderText } = render(
      <GlobalProvider>
        <MainScreen navigation={mockNavigation} />
      </GlobalProvider>
    );

    // Simule la saisie dans les champs
    fireEvent.changeText(getByPlaceholderText('Entrez votre nom'), 'John');
    fireEvent.changeText(getByPlaceholderText('Entrez votre prénom'), 'Doe');

    // Simule l’appui sur le bouton
    fireEvent.press(getByText('Générer le QR Code'));

    // Vérifie que la navigation a été appelée une fois
    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('QRCodeScreen');
  });
});
