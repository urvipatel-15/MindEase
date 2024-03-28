import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomePage = () => {
  const navigation = useNavigation(); // Use useNavigation hook

  const [selectedQuote, setSelectedQuote] = useState('');

  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Everything you can imagine is real. - Pablo Picasso",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
  ];

  useEffect(() => {
    selectRandomQuote();
  }, []);

  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  };

  const navigateToChatbot = () => {
    navigation.navigate('ChatBot');
  };
  const navigateToYogaScreen = () => {
    navigation.navigate('YogaScreen');
  };
  const navigateToJournalScreen = () => {
    navigation.navigate('JournalScreen');
  };
  const navigateToBlogScreen = () => {
    navigation.navigate('BlogScreen');
  };
  const navigateToTherapistsScreen = () => {
    navigation.navigate('TherapistsScreen'); // Navigate to therapists screen
  };

  return (
    <ImageBackground source={require('./assets/back3.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to MindEase!</Text>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{selectedQuote}</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={navigateToYogaScreen} style={styles.iconContainer}>
            <Image source={require('./assets/Y.jpg')} style={styles.yogaIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToJournalScreen} style={styles.iconContainer}>
            <Image source={require('./assets/j.jpg')} style={styles.journalIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToBlogScreen} style={styles.iconContainer}>
            <Image source={require('./assets/b.png')} style={styles.blogIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToTherapistsScreen} style={styles.iconContainer}>
            <Image source={require('./assets/contact.png')} style={styles.therapistsIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gifContainer}>
        <TouchableOpacity onPress={navigateToChatbot}>
          <Image source={require('./assets/tink.gif')} style={styles.gif} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  heading: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'black',
    marginBottom: 20,
  },
  quoteContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  content: {
    position: 'absolute',
    top: 250, // Adjust this value according to your layout
    left: 20,
    flexDirection: 'row', // Arrange icons horizontally
    alignItems: 'center', // Align icons vertically at center
    marginTop: 20, // Add margin for spacing
  },
  iconContainer: {
    marginRight: 20,
  },
  gifContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  gif: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  yogaIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  journalIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  blogIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  therapistsIcon: { // Define style for therapistsIcon
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default HomePage;
