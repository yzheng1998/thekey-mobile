import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import {
  Background,
  Container,
  Content,
  SubTitle,
  Title,
  SignInButton,
  SignInText,
  RegisterButton,
  RegisterText,
  DividerRow,
  Divider,
  DividerText,
} from './styles'
import Logo from '../../stories/thekey-logo.png'
import LinkedInLoginButton from './components/LinkedInLoginButton'

export default class SplashScreen extends Component {
  render() {
    const hasApplied = this.props.navigation.getParam('hasApplied')
    return (
      <Background>
        {hasApplied &&
          Alert.alert(
            'Thank you for applying to The Key!',
            'We will review your application and get back to you shortly.',
          )}
        <Container>
          <Content>
            <Image source={Logo} style={{ height: 105, width: 79 }} />
            <SubTitle>Welcome to</SubTitle>
            <Title>The Key</Title>
          </Content>
        </Container>
        <Container>
          <SignInButton onPress={() => this.props.navigation.navigate('Login')}>
            <SignInText>SIGN IN</SignInText>
          </SignInButton>
          <RegisterButton
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <RegisterText>REGISTER</RegisterText>
          </RegisterButton>
          <DividerRow>
            <Divider />
            <DividerText>OR</DividerText>
            <Divider />
          </DividerRow>
          <LinkedInLoginButton />
        </Container>
      </Background>
    )
  }
}
