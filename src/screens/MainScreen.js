import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { GlobalContext } from '../store/GlobalStore';

const MainScreen = ({ navigation }) => {
  const { setUserInfo } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleGenerateQRCode = () => {
    if (!name || !surname) {
      Alert.alert('Erreur', 'Veuillez remplir les champs nom et prénom.');
      return;
    }
    setUserInfo({ name, surname });
    navigation.navigate('QRCodeScreen');
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});

export default MainScreen;
