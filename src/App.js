import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBcpzfVQxJLHq5t0PYChAvyTKXvTx0zJpI',
      authDomain: 'gsauth-2201a.firebaseapp.com',
      databaseURL: 'https://gsauth-2201a.firebaseio.com',
      storageBucket: 'gsauth-2201a.appspot.com',
      messagingSenderId: '729863649310'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="AUTHEnTIcaTion" />
        <Text>An App!</Text>
        <LoginForm />
      </View>
    );
  }
}

export default App;
