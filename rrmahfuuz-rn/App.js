import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.frame}>
          <Text style={styles.frameText}>Hello, Devs</Text>
          <Text style={styles.subText}>14 tasks today</Text>
          <View style={styles.imageContainer}>
            
          </View>
        </View>
        <TextInput style={styles.searchBox} placeholder="Search" placeholderTextColor="#000" />
        <Text style={styles.categoriesText}>Categories</Text>
        <Text style={styles.ongoingText}>Ongoing Task</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.webButton]}>
          <Text style={styles.buttonText}>Web Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pushUpsButton]}>
          <Text style={styles.buttonText}>Push Ups</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  frame: {
    width: 354,
    height: 52,
    backgroundColor: '#f7f0e8',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  frameText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subText: {
    fontSize: 12,
    textAlign: 'left',
    color: '#000',
  },
  imageContainer: {
    position: 'absolute',
    top: 2,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameImage: {
    width: 30,
    height: 30,
  },
  searchBox: {
    width: 393,
    height: 50,
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    opacity: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 20,
    fontSize: 16,
    color: '#000', // Set the text color to black
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 10,
    marginBottom: 250,
  },
  button: {
    width: 354,
    height: 128,
    backgroundColor: '#FBF9F7',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ongoingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 20,
  },
  webButton: {
    backgroundColor: '#FBF9F7',
  },
  pushUpsButton: {
    backgroundColor: '#FBF9F7',
  },
});

    
