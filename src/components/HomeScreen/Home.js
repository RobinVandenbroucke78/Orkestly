import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WelcomeCard from './WelcomeCard';
import StatsSection from './StatsSection';
import ActivityCard from './ActivityCard';
import Navbar from '../Navbar/Navbar';

const HomeScreen = () => {
  const statsData = [
    { icon: 'calendar-outline', value: '3', label: 'Komende repetities' },
    { icon: 'musical-notes-outline', value: '8', label: 'Actieve stukken' },
    { icon: 'trending-up-outline', value: '12d', label: 'Volgend concert' },
  ];
  const activitiesData = [
    {
      title: 'Sectie repetitie',
      date: 'Wo 2 Okt - 19:00',
      color: '#2b00ff',
      status: 'Bevestigd',
      statusColor: '#00d36e33',
    },
    {
      title: 'Orkest repetitie',
      date: 'Za 5 Okt - 14:00',
      color: '#2b00ff',
      status: 'In afwachting',
      statusColor: '#ccc',
    },
    {
      title: 'Herfst Concert',
      date: 'Za 12 Okt - 20:00',
      color: '#00b3a1',
      status: 'Bevestigd',
      statusColor: '#00d36e33',
    },
  ];

  return (
    <View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Orkestly</Text>

        <WelcomeCard />
        <StatsSection stats={statsData} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Aankomende activiteiten</Text>
          <Text style={styles.sectionLink}>Alles</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: '#d9d9d9', padding: 20 }}>
          {activitiesData.map((item, index) => (
            <ActivityCard
              key={index}
              title={item.title}
              date={item.date}
              color={item.color}
              status={item.status}
              statusColor={item.statusColor}
            />
          ))}
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#d9d9d9',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a0099',
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionLink: {
    fontSize: 14,
    color: '#1a0099',
  },
});
