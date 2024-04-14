import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddTodoButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add-circle-outline" size={24} color="white" />
      <Text style={styles.addButtonText}>Add New Todo</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'rgb(2, 151, 250)',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 2,
    marginTop: 10,
    alignItems: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
