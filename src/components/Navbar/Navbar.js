import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const tabs = [
    { name: 'Home', icon: 'home-outline', iconActive: 'home' },
    { name: 'Activiteiten', icon: 'calendar-outline', iconActive: 'calendar' },
    {
      name: 'Stukken',
      icon: 'document-text-outline',
      iconActive: 'document-text',
    },
    { name: 'Profiel', icon: 'person-outline', iconActive: 'person' },
    { name: 'Instellingen', icon: 'settings-outline', iconActive: 'settings' },
  ];

  return (
    <View style={styles.navbar}>
      {tabs.map(tab => {
        const isActive = active === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => setActive(tab.name)}
          >
            <Ionicons
              name={isActive ? tab.iconActive : tab.icon}
              size={24}
              color={isActive ? 'blue' : 'black'}
            />
            <Text
              style={[styles.label, { color: isActive ? 'blue' : 'black' }]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingBottom: 50,
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Navbar;
