import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { emailChanged, passwordChanged, loginUser } from "./../actions";
import { Card, Input, Button, CardSection } from "./common";

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({email, password});
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="E-mail"
            placeholder="name@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Senha"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
        </CardSection>

        { this.renderError() }

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
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
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LoginForm);
