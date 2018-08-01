import React, { Component } from 'react'
import { View, AsyncStorage, Alert } from 'react-native'
import {
  Container,
  TextInputContainer,
  TextInput,
  IconContainer,
  ForgotPass,
  PinkSubtitle,
  PinkSubtitleText,
  SignInButton,
  SignInText,
  Subtitle,
  SmallContainer,
  LinkedInIconContainer,
  SignUpContainer,
  Message,
} from './styles'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/Feather'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import LinkedInLoginButton from '../../components/LinkedInLoginButton'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

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
  }
  render() {
    return (
      <View>
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={async data => {
            const {
              loginUser: { token, user },
            } = data
            if (!data.loginUser.error) {
              await AsyncStorage.setItem('token', token)
              await AsyncStorage.setItem('userId', user.id)
              await AsyncStorage.setItem('firstName', user.firstName)
              await AsyncStorage.setItem('profilePicture', user.profilePicture)
              this.props.navigation.navigate('MainTab')
            }
          }}
        >
          {(loginUser, { loading, data, error }) => (
            <Container>
              <TextInputContainer>
                <IconContainer>
                  <EmailIcon
                    name="email-outline"
                    color="rgb(181, 171, 202)"
                    size={18}
                  />
                </IconContainer>
                <TextInput
                  placeholder="Enter your email address..."
                  placeholderTextColor="rgb(139, 133, 150)"
                  onChangeText={newText => this.setState({ email: newText })}
                  type="text"
                  name="email"
                  autoCapitalize="none"
                />
              </TextInputContainer>
              <TextInputContainer>
                <IconContainer>
                  <LockIcon name="lock" color="rgb(181, 171, 202)" size={18} />
                </IconContainer>
                <TextInput
                  placeholder="Enter your password..."
                  placeholderTextColor="rgb(139, 133, 150)"
                  onChangeText={newText => this.setState({ password: newText })}
                  secureTextEntry
                  name="password"
                  autoCapitalize="none"
                />
              </TextInputContainer>
              <ForgotPass
                onPress={() => this.props.navigation.navigate('ResetPassword')}
              >
                <PinkSubtitleText>Forgot password?</PinkSubtitleText>
              </ForgotPass>
              {loading && <Message>Logging you in...</Message>}
              {data &&
                data.loginUser.error && (
                  <Message>{data.loginUser.error.message}</Message>
                )}
              {error &&
                Alert.alert(
                  'Failed to log in',
                  'There was an error logging you in. Please try again.',
                  [{ text: 'OK', onPress: () => {} }],
                  { cancelable: true },
                )}
              <SignInButton
                onPress={() => {
                  const variables = {
                    email: this.state.email,
                    password: this.state.password,
                  }
                  loginUser({ variables })
                }}
                disabled={this.state.email === '' || this.state.password === ''}
              >
                <SignInText>SIGN IN</SignInText>
              </SignInButton>
              <SmallContainer>
                <Subtitle>or sign in with</Subtitle>
                <LinkedInIconContainer>
                  <LinkedInLoginButton />
                </LinkedInIconContainer>
              </SmallContainer>
              <LoginButton
                readPermissions={['email']}
                onLoginFinished={(fbError, result) => {
                  if (fbError) {
                    Alert.alert('Error Ocurred', 'Could not log in to facebook')
                  } else if (result.isCancelled) {
                    Alert.alert(
                      'Error Occurred',
                      'facebook log in was unexpectedly cancelled',
                    )
                  } else {
                    AccessToken.getCurrentAccessToken().then(async response => {
                      const token = response.accessToken.toString()

                      const variables = {
                        facebookToken: token,
                      }
                      loginUser({ variables })
                    })
                  }
                }}
              />
            </Container>
          )}
        </Mutation>
        <SignUpContainer>
          <Subtitle>Dont have an account?</Subtitle>
          <PinkSubtitle>
            <PinkSubtitleText>Sign Up</PinkSubtitleText>
          </PinkSubtitle>
        </SignUpContainer>
      </View>
    )
  }
}

export default LoginBody
