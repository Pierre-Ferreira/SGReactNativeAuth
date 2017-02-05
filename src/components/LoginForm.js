import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {  //state comes from React.
    emailText: '',
    passwordText: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    this.setState({ error: '', loading: true });

    const { emailText, passwordText } = this.state;

    firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      loading: false,
      emailText: '',
      passwordText: ''
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }

  spinnerORButton() {
console.log('this.state.loading:', this.state.loading);
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPressFN={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='EMAIL'
            placeholder='user@gmail.com'
            value={this.state.emailText}
            onChangeText={(text) => this.setState({ emailText: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            label='PASSWORD'
            placeholder='password'
            value={this.state.passwordText}
            onChangeText={(text) => this.setState({ passwordText: text })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.spinnerORButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
