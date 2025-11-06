import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';

const StukSection = ({ stukken }) => {
  return (
    <View style={styles.stukkenSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Stukken</Text>
        <Text style={styles.sectionLink}>Alles</Text>
      </View>
      {stukken.map((stuk, index) => (
        <Text key={index} style={styles.stukItem}>
          • {stuk}
        </Text>
      ))}
    </View>
  );
};

export default StukSection;

const styles = StyleSheet.create({
  stukkenSection: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  stukItem: {
    fontSize: 14,
    color: '#444',
    marginLeft: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 10,
  },
  sectionLink: {
    fontSize: 14,
    color: '#1a0099',
  },
});
