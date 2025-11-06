import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const infoSection = ({ date, time, location }) => {
  return (
    <View style={styles.infoSection}>
      <View style={styles.infoRow}>
        <Ionicons
          name="calendar-outline"
          type="ionicon"
          size={18}
          color="#4B4B4B"
        />
        <View>
          <Text style={styles.infoTitle}>Datum</Text>
          <Text style={styles.infoText}>{date}</Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Ionicons
          name="time-outline"
          type="ionicon"
          size={18}
          color="#4B4B4B"
        />
        <View>
          <Text style={styles.infoTitle}>Tijd</Text>
          <Text style={styles.infoText}>{time}</Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Ionicons
          name="location-outline"
          type="ionicon"
          size={18}
          color="#4B4B4B"
        />
        <View>
          <Text style={styles.infoTitle}>Locatie</Text>
          <Text style={styles.infoText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default infoSection;

const styles = StyleSheet.create({
  infoSection: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F9F9F9',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  infoTitle: {
    marginLeft: 8,
    fontSize: 15,
    color: '#797777ff',
    fontWeight: '600',
  },
});
