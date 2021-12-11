import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      
        <View style={styles.items}>
          {/* this is where the tasks will go */}
          
          <Task text={'Task 1: Go get the grocery.'}/>
          <Task text={'Task 2: Set up a meeting with the client.'}/>


        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
