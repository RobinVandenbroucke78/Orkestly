import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../Navbar/Navbar';

const Instellingen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [letterType, setLetterType] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Instellingen</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weergave</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="moon-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Donkere modus</Text>
                <Text style={styles.settingSubtitle}>
                  Zet de donkere modus aan
                </Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#D1D1D6', true: '#5636D3' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Taal & Regio</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="language-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Taal</Text>
                <Text style={styles.settingSubtitle}>Nederlands</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="location-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Regio</Text>
                <Text style={styles.settingSubtitle}>
                  Zijne de taal voor de app uitvoeren
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lettertype</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="text-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Verander jou lettertype</Text>
                <Text style={styles.settingSubtitle}>
                  Dit zal de lettertype van de tekst veranderen
                </Text>
              </View>
            </View>
            <Switch
              value={letterType}
              onValueChange={setLetterType}
              trackColor={{ false: '#D1D1D6', true: '#5636D3' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Over</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Versie</Text>
                <Text style={styles.settingSubtitle}>1.0.0</Text>
              </View>
            </View>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons
                name="code-slash-outline"
                size={24}
                color="#5636D3"
                style={styles.settingIcon}
              />
              <View>
                <Text style={styles.settingTitle}>Build</Text>
                <Text style={styles.settingSubtitle}>2025.10.04</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Navbar />
    </View>
  );
};

export default Instellingen;

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
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#888',
  },
});
