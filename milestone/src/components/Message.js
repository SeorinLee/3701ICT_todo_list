import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Message;
