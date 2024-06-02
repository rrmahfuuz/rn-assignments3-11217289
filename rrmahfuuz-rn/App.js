import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.frameText}>Hello, Devs</Text>
         </View>
         <Text style={styles.categoriesText}>Categories</Text>
         <Text style={styles.ongoingText}>Ongoing Task</Text>
      <TextInput style={styles.searchBox} placeholder="Search..." />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: 354,
    height: 52,
    position: 'absolute',
    top:'40%',
    left: 20,
    marginTop:-230,
    opacity: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  frameText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  
  
  searchBox: {
    width: 393,
    height: 50, 
    marginTop: -450, 
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    opacity: 1, 
    backgroundColor: '#f0f0f0', 
    padding: 10, 
  },
  categoriesText: {
    position: 'absolute',
    top: '30%', 
    left: '50%',
    marginLeft: -196.5, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  ongoingText :{
    position: 'absolute',
    bottom:300, 
    left: '50%',
    marginLeft: -196.5, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});
