import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedin: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBcpzfVQxJLHq5t0PYChAvyTKXvTx0zJpI',
      authDomain: 'gsauth-2201a.firebaseapp.com',
      databaseURL: 'https://gsauth-2201a.firebaseio.com',
      storageBucket: 'gsauth-2201a.appspot.com',
      messagingSenderId: '729863649310'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }

  loggedIn() {
     switch (this.state.loggedin) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPressFN={() => firebase.auth().signOut()}>
                Logout
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size={'large'} />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="AUTHEnTIcaTion" />
        {this.loggedIn()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
