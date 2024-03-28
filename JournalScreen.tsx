import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const JournalScreen = () => {
  const [entries, setEntries] = useState<string[]>([]);
  const [newEntryText, setNewEntryText] = useState('');

  const handleAddEntry = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const newEntry = `${formattedDate}: ${newEntryText}`;
    setEntries([...entries, newEntry]);
    setNewEntryText('');
  };

  return (
    <ImageBackground source={require('./assets/diary.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Journal</Text>
        {entries.map((entry, index) => (
          <Text key={index} style={styles.entry}>{entry}</Text>
        ))}
        <TextInput
          style={styles.input}
          placeholder="Enter your journal entry"
          value={newEntryText}
          onChangeText={setNewEntryText}
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={handleAddEntry} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Adjust text color as needed
  },
  entry: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black', // Adjust text color as needed
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    color: 'black', // Adjust text color as needed
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default JournalScreen;
