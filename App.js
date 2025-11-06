import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/LoginScreen/Login';
import Home from './src/components/HomeScreen/Home';
import Activity from './src/components/ActivityScreen/Activity';
import Stukken from './src/components/StukkenScreen/Stukken';
import Profiel from './src/components/ProfileScreen/Profiel';
import Instellingen from './src/components/SettingsScreen/Instellingen';
import Info from './src/components/InfoScreen/Info';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Activity></Activity>*/}
      <Stukken></Stukken>
      {/*<Profiel></Profiel>*/}
      {/*<Instellingen></Instellingen>*/}
      {/*<Info></Info>*/}
      {/*<Home></Home>*/}
      {/*<Login></Login>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
