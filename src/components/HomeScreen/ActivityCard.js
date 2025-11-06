import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ActivityCard = ({ title, date, color, status, statusColor }) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.activityCard}>
        <View style={[styles.sideBar, { backgroundColor: color }]} />
        <View style={styles.activityContent}>
          <Text style={styles.activityTitle}>{title}</Text>
          <Text style={styles.activityDate}>{date}</Text>
        </View>
        <View style={[styles.statusPill, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: screenWidth - 50,
    alignSelf: 'center',
    backgroundColor: '#d9d9d9',
    marginHorizontal: -15,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 6,
    overflow: 'hidden',
    width: '100%',
  },
  sideBar: {
    width: 6,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  activityContent: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  activityTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
  },
  activityDate: {
    color: '#555',
    fontSize: 13,
  },
  statusPill: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});
