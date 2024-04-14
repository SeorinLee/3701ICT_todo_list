// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import TodoList from '../components/TodoList';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('@todos');
        if (storedTodos !== null) {
          const parsedTodos = JSON.parse(storedTodos);
          const todosWithExpandedState = parsedTodos.map(todo => ({
            ...todo,
            expanded: false 
          }));
          setTodos(todosWithExpandedState);
        }
      } catch (error) {
        console.error('Error loading todos from AsyncStorage:', error);
      }
    };

    loadTodos();
  }, [isFocused]);

  const saveTodos = async (updatedTodos) => {
    try {
      await AsyncStorage.setItem('@todos', JSON.stringify(updatedTodos));
    } catch (error) {
      console.error('Error saving todos to AsyncStorage:', error);
    }
  };

  useEffect(() => {
    if (route.params?.newTodo) {
      const updatedTodos = [...todos, { ...route.params.newTodo }]; 
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
    }
  }, [route.params?.newTodo]);

  const toggleTodoExpand = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, expanded: !todo.expanded };
      }
      return todo;
    }));
  };

  const markTodoAsFinished = async (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, finished: true, expanded: true}; 
      }
      return todo;
    });
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <TodoList
        todos={todos}
        toggleTodoExpand={toggleTodoExpand}
        markTodoAsFinished={markTodoAsFinished}
        removeTodo={removeTodo}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTodo')}>
        <View style={styles.buttonContent}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.addButtonText}>Add New Todo</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'rgb(2, 151, 250)',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 2,
    marginTop: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
