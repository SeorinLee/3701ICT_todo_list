// TodoList.js
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodoExpand, markTodoAsFinished, removeTodo }) {
  const renderItem = ({ item }) => (
    <TodoItem
      item={item}
      onPressExpand={toggleTodoExpand}
      onPressFinish={markTodoAsFinished}
      onPressRemove={removeTodo}
    />
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.todoList}
    />
  );
}

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
  },
});
