import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import LoginHeader from './components/LoginHeader'
import LoginBody from './components/LoginBody'

class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ backgroundColor: 'white' }}
        behavior="position"
        enabled
      >
        <ScrollView>
          <LoginHeader />
          <LoginBody navigation={this.props.navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default LoginScreen
