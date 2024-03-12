import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
       <Text style={styles.title}>My Todo List</Text>
       <View style={styles.titleseparator}></View>
       </View>
       <View style={styles.todoList}>
        <Text style={styles.todoItem}>Buy milk</Text>
        <Text style={styles.todoItem}>Buy bread</Text>
        <Text style={styles.todoItem}>Buy eggs</Text>
        <View style={styles.listseparator}></View>
        </View>
        <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
    alignItems: 'center',
    justifyContent: 'top',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
  },
  titleseparator: {
    width: '90%',
    height: 4, 
    backgroundColor: 'black', 
    marginTop: 15,
  },
  todoList: {
    alignItems: 'flex-start', // 리스트를 왼쪽으로 정렬
    marginTop: 10,
    marginLeft: 20,
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
    height: 2, 
    backgroundColor: 'black', 
    marginTop: 450,
  },
  addButton: {
    backgroundColor: 'rgb(2, 151, 250)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    elevation: 3, 
  },
  addButtonText:{
  color: 'white', // 텍스트 색상
  fontSize: 16, // 텍스트 크기
  fontWeight: 'bold', // 텍스트 굵기
  },

});
