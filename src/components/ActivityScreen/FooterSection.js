import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FooterSection = ({ onEdit, onDelete }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.editText}>Bewerken</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Verwijderen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterSection;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  editButton: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#00A36C',
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  editText: {
    color: '#00A36C',
    fontWeight: '600',
    fontSize: 14,
  },

  deleteButton: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#E53935',
    borderRadius: 8,
    paddingVertical: 10,
    marginLeft: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  deleteText: {
    color: '#E53935',
    fontWeight: '600',
    fontSize: 14,
  },
});
