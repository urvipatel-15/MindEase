import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

interface Message {
  text: string;
  user: 'user' | 'bot';
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  // Function to handle user input and provide response
  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message to the chat
    setMessages(prevMessages => [...prevMessages, { text: inputText, user: 'user' }]);
    setInputText('');

    // Simulate chatbot response based on user input
    const botResponse = getBotResponse(inputText);
    setMessages(prevMessages => [...prevMessages, { text: botResponse, user: 'bot' }]);
  };

  // Function to get chatbot response based on user input
  const getBotResponse = (userInput: string): string => {
    // Define a set of responses for different user inputs
    const responses: Record<string, string> = {
      'hi': 'Hello there!',
      'how are you?': 'I am doing well, thank you!',
      'bye': 'Goodbye! Have a great day!',
      'okay':'Is there something else  I can asist you with?',
      'yes':'All the best mate! Go conquer your problems',
      'no':'Have a great day ahead! Let me know if I further help you?',
      'stressed':'Listen to some classical music or talk with a close friend',
      'laugh':'What did one ocean say to the other ocean? Nothing, It just waved!',
      'joke':'Why did bullet lose his job? Because he was fired!',
      'song':'Kar Haar Maidaan Fateh by Shreya Ghoshal and Sukhwinder Singh',
      'overwhelmed': 'I am sorry you have to go through this, maybe watch a movie',
      'feeling overwhelmed': 'It is okay to feel overwhelmed sometimes. Remember to take deep breaths and take breaks when you need them. You have got this!',
      'stress': 'Stress can be tough to manage, but it is important to find healthy coping mechanisms. Have you tried mindful exercises or talking to someone you trust about how you are feeling?',
      'anxious': 'Anxiety can be challenging, but there are strategies that can help. Have you considered practicing relaxation techniques like deep breathing or progressive muscle relaxation?',
      'sleeping': 'Sleep difficulties can impact mental health. Creating a bedtime routine, limiting screen time before bed, and avoiding caffeine can help improve sleep quality. Have you tried any of these strategies?',
      'lonely': 'Feeling lonely is tough, but you are not alone. Reach out to friends or family members, join social groups, or consider volunteering. Connecting with others can help alleviate feelings of isolation.',
      'motivated': 'Motivation can be challenging, especially during difficult times. Break tasks into smaller, manageable steps, set achievable goals, and celebrate your progress along the way. Remember, it is okay to ask for support when you need it.',
      'worthless': 'Feeling worthless is a common symptom of depression. It is important to challenge negative thoughts and practice self-care. Remind yourself of your strengths and accomplishments, and consider seeking support from a therapist or counselor.',
      'concentrating': 'Difficulty concentrating can be frustrating, but it is often a sign of stress or anxiety. Try implementing mindfulness techniques, breaking tasks into smaller chunks, and creating a distraction-free environment to improve focus.',
      'help': 'Asking for help is a sign of strength, not weakness. Consider reaching out to a trusted friend, family member, or mental health professional. You deserve support and assistance during difficult times.',
      'hopeless': 'Feeling hopeless is a common experience, especially during challenging times. Remember that the future is uncertain, and things can change. Focus on what you can control in the present moment and seek support from others who can provide encouragement and guidance.',
    };

    // Split the input text into individual words
    const inputWords = userInput.toLowerCase().split(' ');

    // Iterate through each word in the input text
    for (const word of inputWords) {
      // Check if the word matches any response key
      const botResponse = responses[word];
      if (botResponse) {
        // Return the corresponding response if a match is found
        return botResponse;
      }
    }

    // Return a default response if no match is found
    return "I'm sorry, I didn't understand that.";
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.user === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="black" // Change the placeholder text color here
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#8a2be2',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#0000ff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  userText: {
    color: 'white', // Set user message text color to white
  },
  botText: {
    color: 'white', // Set bot message text color to white
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    color:'black'
  },
});

// Export the ChatScreen component as default
export default ChatScreen;
