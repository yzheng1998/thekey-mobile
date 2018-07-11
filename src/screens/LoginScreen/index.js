import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import LoginHeader from './components/LoginHeader'
import LoginBody from './components/LoginBody'

class LoginScreen extends Component {
  render() {
    return (
      <ScrollView>
        <LoginHeader />
        <LoginBody navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

export default LoginScreen
