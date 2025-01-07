import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Xin chào</Text>
        <Text style={styles.text}>Nguyễn Gia Huy</Text>
        <Text style={styles.text}>- 22810310338 -</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 3,
    borderColor: 'green',

  },
  text: {
    color: '#50A300',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Square;
