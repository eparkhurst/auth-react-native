import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPDQHcHnvRWs3i2sK0Y7dduDaV4lUhb9M',
      authDomain: 'auth-63b18.firebaseapp.com',
      databaseURL: 'https://auth-63b18.firebaseio.com',
      storageBucket: 'auth-63b18.appspot.com',
      messagingSenderId: '605391221678'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Super Awesome" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
