import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCHupVzHelOl7mreRJwi2KxaANbh1lGcw",
  authDomain: "tinderforuberforx.firebaseapp.com",
  databaseURL: "https://tinderforuberforx.firebaseio.com",
  projectId: "tinderforuberforx",
  storageBucket: "",
  messagingSenderId: "302054829899"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
