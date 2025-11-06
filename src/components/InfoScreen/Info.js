import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../Navbar/Navbar';

const Info = () => {
  const pieces = [
    { title: 'Symfonie No. 5', difficulty: '3.5/5' },
    { title: 'Für Elise', difficulty: '2.5/5' },
    { title: 'Pianosonate No. 8', difficulty: '4/5' },
    { title: 'Egmont-ouverture', difficulty: '3/5' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Info</Text>

        <View style={styles.card}>
          <Text style={styles.composerName}>Ludwig Van Beethoven</Text>

          <Image
            source={{ uri: 'https://via.placeholder.com/300x200' }}
            style={styles.composerImage}
          />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Beschrijving:</Text>
            <Text style={styles.descriptionText}>
              Ludwig van Beethoven werd in 1770 geboren in Bonn en groeide uit
              tot een van de grootste componisten aller tijden. Hij was niet
              alleen een componist, maar ook een briljant pianist. Zijn muziek
              bouwde voort op de klassieke traditie, maar kondigde tegelijk het
              tijdperk van de romantiek aan. Beethovens leven werd gekenmerkt
              door een voortschrijdende doofheid, maar dit belette hem niet om
              meesterwerken te creëren. Hij componeerde negen symfonieën,
              talrijke sonates en strijkkwartetten. Zijn muziek staat bekend om
              zijn emotionele diepgang en harmonieuze complexiteit.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Liedjes:</Text>
            {pieces.map((piece, index) => (
              <View key={index} style={styles.pieceItem}>
                <View style={styles.pieceLeft}>
                  <Ionicons
                    name="musical-note"
                    size={20}
                    color="#5636D3"
                    style={styles.pieceIcon}
                  />
                  <Text style={styles.pieceName}>{piece.title}</Text>
                </View>
                <View style={styles.difficultyBadge}>
                  <Text style={styles.difficultyText}>{piece.difficulty}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <Navbar />
    </View>
  );
};

export default Info;

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
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a0099',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  composerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  composerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#E5E5E5',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  pieceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  pieceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  pieceIcon: {
    marginRight: 10,
  },
  pieceName: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  difficultyBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    color: '#666',
  },
});
