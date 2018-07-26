import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import LoginHeader from './components/LoginHeader'
import LoginBody from './components/LoginBody'
import BackButton from '../../components/BackButton'

class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ backgroundColor: 'white', flex: 1 }}
        behavior="position"
        enabled
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <BackButton onBackPress={() => this.props.navigation.goBack()} />
          <LoginHeader />
          <LoginBody navigation={this.props.navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default LoginScreen
