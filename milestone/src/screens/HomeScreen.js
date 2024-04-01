import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <View style={styles.titleseparator}></View>
      <View style={styles.todoList}>
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
        <View style={styles.listseparator}></View>
      </View>
      <View style={styles.buttonSeparator}></View>
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
    justifyContent: 'center',
  },
  innercontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
  },
  titleseparator: {
    width: '88%',
    height: 2, 
    backgroundColor: 'black', 
    marginTop: 10,
  },
  todoList: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
  },
  todoItem: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: 'rgb(176, 227, 255)',
    fontSize: 15,
    width: 350,
    height: 35,
    lineHeight: 35,
    paddingLeft: 10,
    borderRadius: 10,
  },
  listseparator:{
    width: '94%',
    height: 1, 
    backgroundColor: 'black', 
    marginTop: 450,
  },
  addButton: {
    backgroundColor: 'rgb(2, 151, 250)',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    elevation: 3, 
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  buttonSeparator: {
    width: '90%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 10,
  },
});
