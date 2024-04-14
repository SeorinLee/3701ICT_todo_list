//AddTodoScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddTodoScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    if (!title || !description) {
      Alert.alert('Validation Error', 'Please enter both title and description.');
      return;
    }

    const newTodo = {
      id: Math.random().toString(),
      title,
      description,
      expanded: false,
      finished: false,
    };

    try {
      const existingTodos = await AsyncStorage.getItem('@todos');
      let todos = [];
      if (existingTodos !== null) {
        todos = JSON.parse(existingTodos);
      }
      todos.push(newTodo);
      await AsyncStorage.setItem('@todos', JSON.stringify(todos));
      setTitle('');
      setDescription('');
      Alert.alert('Success', 'Todo added successfully.');
    } catch (error) {
      console.error('Error saving todo to AsyncStorage:', error);
      Alert.alert('Error', 'Failed to save todo. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          multiline={true}
          placeholder="Enter description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { opacity: title && description ? 1 : 0.5 }]} onPress={handleSave} disabled={!title || !description}>
          <Ionicons name="save" size={24} color="black" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    marginLeft: 5,
  },
});
