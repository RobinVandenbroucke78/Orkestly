import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../Navbar/Navbar';

const Stukken = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Alle');

  const filters = ['Alle', 'Makkelijk', 'Gemiddeld', 'Moeilijk'];

  const pieces = [
    {
      title: 'Symfonie No. 5',
      composer: 'Ludwig Van Beethoven',
      concert: 'Herfst Concert 2025',
      difficulty: 'Gemiddeld',
      status: 'Actief',
      statusColor: '#FF5A5F',
    },
    {
      title: 'Eine kleine Nachtmusik',
      composer: 'Wolfgang Amadeus Mozart',
      concert: 'Herfst Concert 2025',
      difficulty: 'Gemiddeld',
      statusColor: '#00A36C',
    },
    {
      title: 'Für Elise',
      composer: 'Ludwig van Beethoven',
      concert: 'Herfst Concert 2025',
      difficulty: 'Gemakkelijk',
      statusColor: '#00A36C',
    },
    {
      title: 'Symfonie No. 1',
      composer: 'Johannes Brahms',
      concert: 'Herfst Concert 2025',
      difficulty: 'Moeilijk',
      statusColor: '#FFA726',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Stukken</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Zoek stukken"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.filterContainer}>
          {filters.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {pieces.map((piece, index) => (
          <View key={index} style={styles.pieceCard}>
            <View style={styles.pieceHeader}>
              <Ionicons name="musical-notes" size={40} color="#5636D3" />
              <View style={styles.pieceInfo}>
                <Text style={styles.pieceTitle}>{piece.title}</Text>
                <Text style={styles.pieceComposer}>{piece.composer}</Text>
                <Text style={styles.pieceConcert}>{piece.concert}</Text>
              </View>
            </View>

            <View style={styles.pieceFooter}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="play" size={20} color="#5636D3" />
                <Text style={styles.actionText}>Afspelen</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="create-outline" size={20} color="#5636D3" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="trash-outline" size={20} color="#E53935" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default Stukken;

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
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: '#5636D3',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  pieceCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pieceHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  pieceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  pieceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  pieceComposer: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  pieceConcert: {
    fontSize: 12,
    color: '#888',
  },
  pieceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#5636D3',
    fontWeight: '600',
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
