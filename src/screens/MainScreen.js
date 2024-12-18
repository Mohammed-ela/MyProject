import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
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
          <Text style={styles.title}>Générer un QR Code</Text>
          <Text style={styles.label}>Nom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre nom"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre prénom"
            placeholderTextColor="#888"
            value={surname}
            onChangeText={setSurname}
          />
          <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
            <Text style={styles.buttonText}>Générer le QR Code</Text>
          </TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});

export default MainScreen;
