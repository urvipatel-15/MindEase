import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const YogaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Surya Namaskar */}
        <Text style={styles.heading}>
          <Text style={styles.italicText}>Surya Namaskar</Text>
        </Text>
        <Image source={require('./assets/surya_namaskar.jpg')} style={styles.image} />
        <Text style={styles.description}>
          Surya Namaskar, or Sun Salutation, is a sequence of yoga poses that warms up the body and stretches the muscles. It consists of a series of 12 asanas performed in a fluid sequence. Each asana has its own specific benefits for physical and mental health.
        </Text>

        {/* Bedtime Yoga */}
        <Text style={styles.heading}>
          <Text style={styles.italicText}>Bedtime Yoga</Text>
        </Text>
        <Image source={require('./assets/bedtime_yoga.jpg')} style={styles.image} />
        <Text style={styles.description}>
          Bedtime Yoga involves gentle yoga poses and stretches that help relax the body and mind, preparing you for a restful night's sleep. It can include poses such as Child's Pose, Forward Fold, and Legs Up the Wall.
        </Text>

        {/* Meditation */}
        <Text style={styles.heading}>
          <Text style={styles.italicText}>Meditation</Text>
        </Text>
        <Image source={require('./assets/meditate.jpg')} style={styles.image} />
        <Text style={styles.description}>
          Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
          {'\n\n'}
          Steps to Meditate:
          {'\n'}1. Find a quiet and comfortable place to sit.
          {'\n'}2. Close your eyes and take a few deep breaths to relax.
          {'\n'}3. Focus your attention on your breath or a mantra.
          {'\n'}4. If your mind wanders, gently bring it back to your breath or mantra.
          {'\n'}5. Continue meditating for your desired duration.
          {'\n\n'}
          Meditation can help reduce stress, improve concentration, and promote emotional well-being.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    marginBottom: 10,
  },
  italicText: {
    fontStyle: 'italic',
    fontSize: 24, // You can adjust the font size as needed
    color: 'black',
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

export default YogaScreen;
