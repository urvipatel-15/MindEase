import React from 'react';
import { View, Button, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; 

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

interface SignUpFormProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ navigation }) => {
  const handleSignUp = () => {
    console.log("Sign Up button pressed");
    if (navigation) {
      navigation.navigate('Login');
    }
  };

  const handleLogin = () => {
    console.log("Login link pressed");
    if (navigation) {
      navigation.navigate('Login');
    }
  };

  return (
    <ImageBackground 
      source={require('./assets/meditation.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>SIGN UP</Text>
          <TextInput
            style={[styles.input, styles.blackText]}
            placeholder="Full Name"
            placeholderTextColor="black"
          />
          <TextInput
            style={[styles.input, styles.blackText]}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="black"
          />
          <TextInput
            style={[styles.input, styles.blackText]}
            placeholder="Gender"
            placeholderTextColor="black"
          />
          <TextInput
            style={[styles.input, styles.blackText]}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="black"
          />
          <TextInput
            style={[styles.input, styles.blackText]}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="black"
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text> 
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 40,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'olive',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  blackText: {
    color: 'black',
  },
  loginText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUpForm;
