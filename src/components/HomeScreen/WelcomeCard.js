import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeCard = () => {
  return (
    <View style={styles.welcomeCard}>
      <Text style={styles.welcomeText}>Welkom terug,</Text>
      <Text style={styles.nameText}>Robin Vandenbroucke</Text>
      <Text style={styles.instrumentText}>Slagwerk</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  welcomeCard: {
    backgroundColor: '#1a0099',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  instrumentText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});
