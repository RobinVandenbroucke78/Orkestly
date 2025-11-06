import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { CheckBox, Button, Icon } from '@rneui/themed';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orkestly</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>

      <CheckBox
        title="Remember Password?"
        checked={rememberPassword}
        onPress={() => setRememberPassword(!rememberPassword)}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
        iconType="material-community"
        checkedIcon="checkbox-outline"
        uncheckedIcon={'checkbox-blank-outline'}
      />

      <View style={styles.buttonRow}>
        <Button title="Login" buttonStyle={styles.loginButton} />
        <Button title="Register" buttonStyle={styles.registerButton} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1a0099',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 20,
  },
  checkboxText: {
    color: '#0000',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  loginButton: {
    color: '#0000',
    backgroundColor: '#ffff',
    borderRadius: 8,
    width: 100,
    paddingRight: 20,
  },
  registerButton: {
    color: '#0000',
    backgroundColor: '#ffff',
    borderRadius: 8,
    width: 100,
  },
});
