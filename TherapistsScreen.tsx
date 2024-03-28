import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TherapistsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Meet Our Therapists</Text>
      <View style={styles.therapistContainer}>
        <Text style={styles.therapistName}>Dr. Emily Smith</Text>
        <Text style={styles.therapistDescription}>
          Dr. Emily Smith is a licensed clinical psychologist with over 10 years of experience.
          She specializes in cognitive-behavioral therapy (CBT) and has helped numerous clients
          overcome anxiety, depression, and other mental health challenges.
        </Text>
        <Text style={styles.contactInfo}>
          Email: emily.smith@example.com{'\n'}
          Phone: (123) 456-7890
        </Text>
      </View>
      <View style={styles.therapistContainer}>
        <Text style={styles.therapistName}>John Doe, LMFT</Text>
        <Text style={styles.therapistDescription}>
          John Doe is a licensed marriage and family therapist (LMFT) who believes in a holistic
          approach to therapy. He works closely with couples and families to improve communication,
          resolve conflicts, and strengthen relationships.
        </Text>
        <Text style={styles.contactInfo}>
          Email: john.doe@example.com{'\n'}
          Phone: (234) 567-8901
        </Text>
      </View>
      <View style={styles.therapistContainer}>
        <Text style={styles.therapistName}>Dr. Sarah Johnson</Text>
        <Text style={styles.therapistDescription}>
          Dr. Sarah Johnson is a licensed psychiatrist specializing in mood disorders and
          addiction psychiatry. She is dedicated to providing compassionate care and evidence-based
          treatment to her patients.
        </Text>
        <Text style={styles.contactInfo}>
          Email: sarah.johnson@example.com{'\n'}
          Phone: (345) 678-9012
        </Text>
      </View>
      <View style={styles.therapistContainer}>
        <Text style={styles.therapistName}>Jane Smith, LCSW</Text>
        <Text style={styles.therapistDescription}>
          Jane Smith is a licensed clinical social worker (LCSW) specializing in trauma-informed
          therapy. She has a strong background in helping individuals cope with traumatic experiences
          and develop healthy coping mechanisms.
        </Text>
        <Text style={styles.contactInfo}>
          Email: jane.smith@example.com{'\n'}
          Phone: (456) 789-0123
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // White background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', // Dark gray text color
  },
  therapistContainer: {
    marginBottom: 20,
    backgroundColor: '#F5F5F5', // Light gray background color
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  therapistName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF', // Blue text color
  },
  therapistDescription: {
    fontSize: 16,
    color: '#666666', // Medium gray text color
  },
  contactInfo: {
    fontSize: 14,
    color: '#888888', // Gray text color
    marginTop: 10,
  },
});

export default TherapistsScreen;
