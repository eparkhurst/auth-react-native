import React, { Component } from 'react';
import { Button, Card, CardSection, InputText } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  render() {
    return (
      <Card>
        <CardSection>
          <InputText
            placeholder='user@domain.com'
            label='Email'
            value={this.state.text}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <InputText
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>

    );
  }
}


export default LoginForm;
