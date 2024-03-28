import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const BlogScreen = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for Improving Your Productivity',
      content: 'Set Clear Goals: 1. Define specific, achievable objectives for each day or week. 2. Having clear goals helps prioritize tasks and stay focused. 3. Use Time Management Techniques: Utilize techniques like the Pomodoro Technique or time blocking to break tasks into manageable intervals and maintain focus.4. Minimize Distractions: Identify and eliminate distractions in your work environment, such as turning off notifications or setting dedicated work hours. 5. Take Regular Breaks: Incorporate short breaks throughout the day to rest and recharge. Stepping away from work periodically can improve concentration and prevent burnout.',
    // Add more blog posts as needed
    },
    {
      id: 2,
      title: 'The Importance of Mindfulness in Daily Life',
      content: 'Mindfulness is the practice of being fully present and engaged in the moment, without judgment. It involves paying attention to thoughts, feelings, sensations, and the surrounding environment with openness and curiosity. By cultivating mindfulness, individuals can reduce stress, enhance emotional well-being, and improve overall quality of life. This blog post explores the benefits of mindfulness and provides practical tips for integrating mindfulness into daily routines.',
    },
    {
      id: 3,
      title: 'How to Stay Motivated When Pursuing Your Goals',
      content: 'Maintaining motivation can be challenging, especially when faced with obstacles or setbacks. However, there are strategies that can help individuals stay motivated when pursuing their goals. These include setting clear and achievable objectives, breaking goals down into smaller tasks, celebrating progress along the way, seeking support from friends or mentors, and visualizing success. By implementing these strategies, individuals can overcome challenges and stay focused on achieving their goals.',
    },
    {
      id: 4,
      title: 'Healthy Eating Habits for a Balanced Life',
      content: 'Eating a balanced diet is essential for maintaining overall health and well-being. This includes consuming a variety of nutrient-rich foods from all food groups, such as fruits, vegetables, whole grains, lean proteins, and healthy fats. Additionally, it\'s important to stay hydrated by drinking plenty of water throughout the day. By adopting healthy eating habits, individuals can support their physical and mental health, improve energy levels, and reduce the risk of chronic diseases.',
    },
    {
      id: 5,
      title: 'Tips for Effective Time Management',
      content: 'Effective time management is crucial for maximizing productivity and achieving goals. This involves prioritizing tasks, setting realistic deadlines, and allocating time efficiently. Additionally, it\'s important to minimize distractions, such as email notifications or social media, and focus on completing one task at a time. By implementing time management strategies, individuals can make the most of their time, reduce stress, and accomplish more in less time.',
    },
  ];

  // State to track expanded posts
  const [expandedPosts, setExpandedPosts] = useState([]);

  // Function to toggle post expansion
  const togglePostExpansion = postId => {
    setExpandedPosts(prevState =>
      prevState.includes(postId)
        ? prevState.filter(id => id !== postId)
        : [...prevState, postId]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {blogPosts.map(post => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.content}>
            {expandedPosts.includes(post.id)
              ? post.content // Show full content if expanded
              : post.content.slice(0, 150) + '...'} {/* Limit content to 150 characters */}
          </Text>
          {/* Render "Read more" button if content is longer */}
          {post.content.length > 150 && (
            <TouchableOpacity
              onPress={() => togglePostExpansion(post.id)}
              style={styles.readMoreButton}>
              <Text style={styles.readMoreButtonText}>
                {expandedPosts.includes(post.id) ? 'Read less' : 'Read more'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Light gray background color
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#FDE2E2', // Pastel pink background color
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333', // Dark gray text color
  },
  content: {
    fontSize: 16,
    color: '#666666', // Medium gray text color
  },
  readMoreButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  readMoreButtonText: {
    color: '#007BFF', // Blue text color
  },
});
export default BlogScreen;