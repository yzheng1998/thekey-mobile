import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import LoginBody from './components/LoginBody'
import BackButton from '../../components/BackButton'
import { SafeView, Title, TitleContainer } from './styles'

class LoginScreen extends Component {
  render() {
    return (
      <SafeView>
        <ScrollView style={{ flex: 1 }}>
          <BackButton onBackPress={() => this.props.navigation.goBack()} />
          <TitleContainer>
            <Title>Sign In</Title>
          </TitleContainer>
          <LoginBody navigation={this.props.navigation} />
        </ScrollView>
      </SafeView>
    )
  }
}

export default LoginScreen
