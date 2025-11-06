import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/LoginScreen/Login';
import Home from './src/components/HomeScreen/Home';
import Activity from './src/components/ActivityScreen/Activity';

export default function App() {
  return (
    <View style={styles.container}>
      <Activity></Activity>
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
