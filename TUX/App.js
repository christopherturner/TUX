import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
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

export default class SubmitIdea extends React.Component {

  state = {
    subjectInput: '',
    newTermInput: '',
    newDefinitionInput: ''
  }

  render() {
    return (
        <View style={styles.newCardModal}>
          <TouchableHighlight
            onPress={this.props.toggleModal}
            underlayColor='transparent'
            style={styles.closeButton}
          >
             <Text style={styles.closeButtonText}>✕</Text>
          </TouchableHighlight>

          <TextInput
            placeholder='Enter a Hackathon Idea'
            style={styles.subjectInput}
            value={this.state.subjectInput}
            onChangeText={(text) => {
              this.setState({
                subjectInput: text
              });
            }}
          />

          <TextInput
            placeholder='Describe your idea. What does your product do? What problem does it solve?'
            style={styles.newDefinitionInput}
            value={this.state.newDefinitionInput}
            multiline={true}
            onChangeText={(text) => {
              this.setState({
                newDefinitionInput: text
              });
            }}
          />

          <TouchableHighlight
            style={styles.addCardButton}
            underlayColor='#CCCCCC'
            onPress={() => {
              const {subjectInput, newTermInput, newDefinitionInput} = this.state;
              this.props.addCard(subjectInput, newTermInput, newDefinitionInput);

              // Reset inputs
              this.setState({
                subjectInput: '',
                newTermInput: '',
                newDefinitionInput: ''
              })
            }}
          >
             <Text style={styles.addCardButtonText}>Submit Idea</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  newCardModal: {
    flex: 1,
    backgroundColor: '#1D8CD1',
    justifyContent: 'center',
    alignContent: 'center'
  },
  subjectInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  newTermInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  newDefinitionInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    height: 120
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  closeButtonText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#FFFFFF'
  },
  addCardButton: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  addCardButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
