import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { emailText: '', passwordText: '' }; //state comes from React.

  onButtonPress() {
    
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
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
