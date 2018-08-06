import React, { Component } from 'react'
import { AsyncStorage, KeyboardAvoidingView } from 'react-native'
import {
  Container,
  TextInputContainer,
  ForgotPass,
  PinkSubtitle,
  PinkSubtitleText,
  SignInButton,
  SignInText,
  Subtitle,
  SignUpContainer,
  Message,
  Screen,
} from './styles'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/Feather'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import LineInput from '../../../../components/LineInput'
import AlertMessage from '../AlertMessage'

const LOGIN_USER = gql`
  mutation loginUser(
    $email: String
    $password: String
    $facebookToken: String
  ) {
    loginUser(
      email: $email
      password: $password
      facebookToken: $facebookToken
    ) {
      user {
        id
        firstName
        profilePicture
      }
      token
      error {
        message
      }
    }
  }
`

class LoginBody extends Component {
  state = {
    email: '',
    password: '',
    showAlertError: false,
    errorMessage: '',
  }
  render() {
    return (
      <Screen>
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={async data => {
            const {
              loginUser: { token, user },
            } = data
            if (data && data.loginUser.error) {
              this.setState({
                showAlertError: true,
                errorMessage: data.loginUser.error.message,
              })
            }
            if (!data.loginUser.error) {
              await AsyncStorage.setItem('token', token)
              await AsyncStorage.setItem('userId', user.id)
              await AsyncStorage.setItem('firstName', user.firstName)
              await AsyncStorage.setItem('profilePicture', user.profilePicture)
              this.props.navigation.navigate('MainTab')
            }
          }}
        >
          {(loginUser, { loading, error }) => {
            if (error) {
              this.setState({
                showAlertError: true,
                errorMessage: error.message,
              })
            }
            if (loading) {
              return <Message>Loading</Message>
            }
            return (
              <Container>
                {this.state.showAlertError && (
                  <AlertMessage isError message={this.state.errorMessage} />
                )}
                <KeyboardAvoidingView
                  style={{ backgroundColor: 'white', width: ' 100%' }}
                  behavior="position"
                  enabled
                >
                  <TextInputContainer>
                    <LineInput
                      updateText={newText => this.setState({ email: newText })}
                      text={this.state.email}
                      placeholderText="Email"
                      placeholderTextColor="rgb(139, 133, 150)"
                      autoCapitalize="none"
                      staticBorder
                      onSubmitEditing={() => this.passwordInput.focus()}
                      returnKeyType="next"
                    >
                      <EmailIcon
                        name="email-outline"
                        color="rgb(181, 171, 202)"
                        size={18}
                        style={{ marginLeft: 8 }}
                      />
                    </LineInput>
                  </TextInputContainer>
                  <TextInputContainer>
                    <LineInput
                      ref={passwordInput => {
                        this.passwordInput = passwordInput
                      }}
                      updateText={newText =>
                        this.setState({ password: newText })
                      }
                      text={this.state.password}
                      placeholderText="Password"
                      placeholderTextColor="rgb(139, 133, 150)"
                      autoCapitalize="none"
                      staticBorder
                      secureTextEntry
                      returnKeyType="done"
                    >
                      <LockIcon
                        name="lock"
                        color="rgb(181, 171, 202)"
                        size={18}
                        style={{ marginLeft: 8 }}
                      />
                    </LineInput>
                  </TextInputContainer>
                </KeyboardAvoidingView>

                <ForgotPass
                  onPress={() =>
                    this.props.navigation.navigate('ResetPassword')
                  }
                >
                  <PinkSubtitleText>Forgot password?</PinkSubtitleText>
                </ForgotPass>
                <SignInButton
                  onPress={() => {
                    const variables = {
                      email: this.state.email,
                      password: this.state.password,
                    }
                    loginUser({ variables })
                  }}
                  disabled={
                    this.state.email === '' || this.state.password === ''
                  }
                >
                  <SignInText>SIGN IN</SignInText>
                </SignInButton>
              </Container>
            )
          }}
        </Mutation>
        <SignUpContainer>
          <Subtitle>Don&apos;t have an account?</Subtitle>
          <PinkSubtitle
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <PinkSubtitleText>Sign Up</PinkSubtitleText>
          </PinkSubtitle>
        </SignUpContainer>
      </Screen>
    )
  }
}

export default LoginBody
