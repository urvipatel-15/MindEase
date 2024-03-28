// types.ts
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SignUpForm from './SignUpForm'; // Import your SignUpForm component
import LoginForm from './LoginForm'; // Import your LoginForm component

export type RootStackParamList = {
    SignUp: undefined;
    Login: undefined;
    Home: undefined;
    ChatBot: undefined;
    YogaScreen: undefined;
    JournalScreen: undefined;
    BlogScreen:undefined;
    // Add other screens and their params here
  };
  type NavigationProp = StackNavigationProp<RootStackParamList>;

// Use the navigation prop type
const navigation = useNavigation<NavigationProp>();
  
  
  