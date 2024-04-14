// TodoItem.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem({ item, onPressExpand, onPressFinish, onPressRemove }) {
  return (
    <TouchableOpacity onPress={() => onPressExpand(item.id)}>
      <View style={styles.todoItem}>
        <View style={styles.todoHeader}>
          <Text style={[styles.todoTitle, { color: item.finished ? 'blue' : 'black' }]}>{item.title}</Text>
          <Ionicons name={item.expanded ? 'chevron-down-outline' : 'chevron-forward-outline'} size={24} color="black" />
        </View>
        {item.expanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.todoDescription}>{item.description}</Text>
            <View style={styles.controlPanel}>
              {!item.finished && (
                <TouchableOpacity onPress={() => onPressFinish(item.id)}>
                  <Ionicons name="checkmark-circle-outline" size={24} color="green" />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => onPressRemove(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 18,
  },
  expandedContent: {
    marginTop: 10,
  },
  todoDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
