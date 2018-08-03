import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import LoginBody from './components/LoginBody'
import BackButton from '../../components/BackButton'
import { SafeView, Title, TitleContainer } from './styles'

class LoginScreen extends Component {
  render() {
    return (
      <SafeView>
        <KeyboardAvoidingView
          style={{ backgroundColor: 'white', flex: 1 }}
          behavior="position"
          enabled
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <BackButton onBackPress={() => this.props.navigation.goBack()} />
            <TitleContainer>
              <Title>Sign in</Title>
            </TitleContainer>
            <LoginBody navigation={this.props.navigation} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeView>
    )
  }
}

export default LoginScreen
