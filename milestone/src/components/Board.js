import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Board = () => {
  return (
    <View style={styles.Board}>
      <Text>This is the Board component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
});

export default Board;
