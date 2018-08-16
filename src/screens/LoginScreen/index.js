import React, { Component } from 'react'
import { View } from 'react-native'
import LoginBody from './components/LoginBody'
import BackButton from '../../components/BackButton'
import { SafeView, Title, TitleContainer } from './styles'

class LoginScreen extends Component {
  render() {
    return (
      <SafeView>
        <View style={{ flex: 1 }}>
          <BackButton onBackPress={() => this.props.navigation.goBack()} />
          <TitleContainer>
            <Title>Sign In</Title>
          </TitleContainer>
          <LoginBody navigation={this.props.navigation} />
        </View>
      </SafeView>
    )
  }
}

export default LoginScreen
