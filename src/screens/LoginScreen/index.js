import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import LoginBody from './components/LoginBody'
import BackButton from '../../components/BackButton'
import { SafeView, Title, TitleContainer } from './styles'

class LoginScreen extends Component {
  render() {
    return (
      <SafeView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            style={{ backgroundColor: 'white', flex: 1 }}
            behavior="padding"
            enabled
          >
            <BackButton onBackPress={() => this.props.navigation.goBack()} />
            <TitleContainer>
              <Title>Sign In</Title>
            </TitleContainer>
            <LoginBody navigation={this.props.navigation} />
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeView>
    )
  }
}

export default LoginScreen
