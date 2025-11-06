import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';

const AanwezigheidSection = ({ onAanwezig, onTeLaat, onAfwezig }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Aanwezigheid</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.presenceButton, { backgroundColor: '#4CAF50' }]}
          onPress={onAanwezig}
        >
          <Text style={styles.presenceText}>Aanwezig</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.presenceButton, { backgroundColor: '#C8A600' }]}
          onPress={onTeLaat}
        >
          <Text style={styles.presenceText}>Te laat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.presenceButton, { backgroundColor: '#B00020' }]}
          onPress={onAfwezig}
        >
          <Text style={styles.presenceText}>Afwezig</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AanwezigheidSection;

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 15,
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  presenceButton: {
    flex: 1,
    paddingVertical: 6,
    marginHorizontal: 3,
    borderRadius: 6,
  },
  presenceText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionTitle: {
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
