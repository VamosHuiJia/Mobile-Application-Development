import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const AccountScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nguyen Gia Huy</Text>
      <Text style={styles.role}>Mobile Developer</Text>
      <Text style={styles.description}>I have above 5 years of experience in native mobile apps development, now I am learning React Native</Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsLoggedIn(false)}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  role: { color: 'blue', fontSize: 16 },
  description: { textAlign: 'center', marginVertical: 10 },
  button: { backgroundColor: '#FFA500', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});

export default AccountScreen;
