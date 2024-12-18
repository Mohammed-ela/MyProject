import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { GlobalContext } from '../store/GlobalStore';

const MainScreen = ({ navigation }) => {
  const { setUserInfo } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQRCode = () => {
    if (!name || !surname) {
      Alert.alert('Erreur', 'Veuillez remplir les champs nom et prénom.');
      return;
    }

    setIsLoading(true); // Active le chargement
    setTimeout(() => {
      setUserInfo({ name, surname }); // Enregistre les données dans le store
      setIsLoading(false); // Désactive le chargement
      navigation.navigate('QRCodeScreen'); // Navigue vers l’écran QR Code
    }, 2000); // Simule un délai pour la génération
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LottieView
          source={require('../assets/Lego.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      ) : (
        <>
          <Text>Nom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre nom"
            value={name}
            onChangeText={setName}
          />
          <Text>Prénom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre prénom"
            value={surname}
            onChangeText={setSurname}
          />
          <Button title="Générer le QR Code" onPress={handleGenerateQRCode} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    width: '80%',
  },
  lottie: {
    width: 150,
    height: 150,
  },
});

export default MainScreen;
