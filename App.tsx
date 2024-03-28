import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from './SignUpForm'; // Import SignUpForm component
import LoginForm from './LoginForm'; // Import LoginForm component
import HomePage from './HomePage';
import ChatBot from './ChatBot'; 
import YogaScreen from './YogaScreen';
import JournalScreen from './JournalScreen';
import BlogScreen from './BlogScreen';
import TherapistsScreen from './TherapistsScreen'; // Import TherapistsScreen component
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpForm} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="YogaScreen" component={YogaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JournalScreen" component={JournalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BlogScreen" component={BlogScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TherapistsScreen" component={TherapistsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
