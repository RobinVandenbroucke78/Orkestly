import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActivityCard from './ActivityCards';
import Navbar from '../Navbar/Navbar';

const Activity = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Activiteiten</Text>

        <ActivityCard
          title="Sectie repetitie - Koper"
          duration="2u"
          date="Woensdag 2 Oktober 2025"
          time="19:00 - 21:00"
          location="Repetitieruimte A"
          stukken={[
            'Beethoven - Symfonie No. 5',
            'Mozart - Eine kleine Nachtmusik',
          ]}
        />
        <ActivityCard
          title="Orkest repetitie"
          duration="3u"
          date="Zaterdag 5 Oktober 2025"
          time="14:00 - 17:00"
          location="Repitieruimte A"
          stukken={['Beethoven - Symfonie No. 5', 'Brahms - Symphonie No. 1']}
        />
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
      <Navbar />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  scrollView: {
    marginTop: 40,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a0099',
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 110,
    right: 25,
    backgroundColor: '#5636D3',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
