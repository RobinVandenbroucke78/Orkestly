import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import InfoSection from './InfoSection';
import StukSection from './StukSection';
import AanwezigheidSection from './AanwezigheidSection';
import FooterSection from './FooterSection';

const screenWidth = Dimensions.get('window').width;

const ActivityCard = ({
  title,
  duration,
  date,
  time,
  location,
  stukken = [],
  onAanwezig,
  onTeLaat,
  onAfwezig,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.durationBubble}>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
      </View>

      <InfoSection date={date} time={time} location={location} />
      <StukSection stukken={stukken} />
      <AanwezigheidSection
        onAanwezig={onAanwezig}
        onTeLaat={onTeLaat}
        onAfwezig={onAfwezig}
      />
      <FooterSection onEdit={onEdit} onDelete={onDelete} />
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: screenWidth - 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    backgroundColor: '#5636D3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  durationBubble: {
    backgroundColor: '#3D1FCF',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  durationText: {
    color: '#fff',
    fontSize: 13,
  },
});
