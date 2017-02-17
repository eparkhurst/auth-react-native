import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPDQHcHnvRWs3i2sK0Y7dduDaV4lUhb9M',
      authDomain: 'auth-63b18.firebaseapp.com',
      databaseURL: 'https://auth-63b18.firebaseio.com',
      storageBucket: 'auth-63b18.appspot.com',
      messagingSenderId: '605391221678'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  logOut() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<CardSection >
                  <Button onPress={this.logOut.bind(this)}>Log OUT Bitch</Button>
                </CardSection>
              );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Super Awesome" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
