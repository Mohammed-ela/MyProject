import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { GlobalContext } from '../store/GlobalStore';

const QRCodeScreen = () => {
  const { userInfo } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Code pour :</Text>
      <Text style={styles.info}>
        {userInfo.name} {userInfo.surname}
      </Text>
      <QRCode value={`${userInfo.name} ${userInfo.surname}`} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  info: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default QRCodeScreen;
