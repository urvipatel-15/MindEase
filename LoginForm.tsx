import React, { useState } from 'react';
import { View, Button, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import useNavigation hook and NavigationProp type

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<any>>(); // Define the type of navigation object explicitly
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your login logic here, such as sending the credentials to a server

    // Navigate to the homepage after successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/lock2.png')} style={styles.lockImage} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
  },
  lockImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default LoginForm;
