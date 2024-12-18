import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { GlobalContext } from '../store/GlobalStore';

const QRCodeScreen = ({ navigation }) => {
  const { userInfo } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre QR Code</Text>
      {userInfo.name && userInfo.surname ? (
        <View style={styles.qrContainer}>
          <QRCode
            value={`${userInfo.name} ${userInfo.surname}`}
            size={200}
            backgroundColor="#ffffff"
            color="#000000"
          />
          <Text style={styles.infoText}>
            Nom : {userInfo.name} {"\n"}Prénom : {userInfo.surname}
          </Text>
        </View>
      ) : (
        <Text style={styles.errorText}>Aucune donnée pour générer le QR Code.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  qrContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  infoText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default QRCodeScreen;
